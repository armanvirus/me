"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";

const STORAGE_KEY = "fingerprint-webapp-credential";

function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBuffer(base64Url) {
  const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = `${base64Url}${padding}`.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

function makeChallenge() {
  const challenge = new Uint8Array(32);
  crypto.getRandomValues(challenge);
  return challenge;
}

function friendlyError(error) {
  if (error?.name === "NotAllowedError") {
    return "The fingerprint prompt was cancelled, timed out, or blocked by the browser.";
  }

  if (error?.name === "NotSupportedError") {
    return "This browser or device does not support platform biometric authentication.";
  }

  if (error?.name === "SecurityError") {
    return "WebAuthn requires HTTPS or localhost. Open the app in a secure context and try again.";
  }

  return error?.message || "Something went wrong. Please try again.";
}

export default function FingerprintApp() {
  const [name, setName] = useState("Demo User");
  const [credential, setCredential] = useState(null);
  const [status, setStatus] = useState("Ready to enroll a fingerprint-backed passkey.");
  const [isBusy, setIsBusy] = useState(false);
  const [support, setSupport] = useState({ checked: false, available: false });

  const enrolledAt = useMemo(() => {
    if (!credential?.createdAt) {
      return "Not enrolled yet";
    }

    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(credential.createdAt));
  }, [credential]);

  useEffect(() => {
    const savedCredential = window.localStorage.getItem(STORAGE_KEY);

    if (savedCredential) {
      setCredential(JSON.parse(savedCredential));
      setStatus("Fingerprint credential found. You can verify this device now.");
    }

    async function checkSupport() {
      const hasWebAuthn = Boolean(window.PublicKeyCredential && navigator.credentials);
      const hasPlatformAuthenticator = hasWebAuthn
        ? await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
        : false;

      setSupport({ checked: true, available: hasWebAuthn && hasPlatformAuthenticator });
    }

    checkSupport();
  }, []);

  async function enrollFingerprint() {
    setIsBusy(true);
    setStatus("Opening your device fingerprint enrollment prompt...");

    try {
      if (!support.available) {
        throw new Error("No fingerprint-capable platform authenticator is available on this device.");
      }

      const userId = makeChallenge();
      const newCredential = await navigator.credentials.create({
        publicKey: {
          challenge: makeChallenge(),
          rp: {
            name: "Fingerprint Verification App",
          },
          user: {
            id: userId,
            name: name.trim() || "Demo User",
            displayName: name.trim() || "Demo User",
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 },
            { type: "public-key", alg: -257 },
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            residentKey: "preferred",
            userVerification: "required",
          },
          timeout: 60000,
          attestation: "none",
        },
      });

      const credentialRecord = {
        id: newCredential.id,
        rawId: bufferToBase64Url(newCredential.rawId),
        name: name.trim() || "Demo User",
        createdAt: new Date().toISOString(),
      };

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(credentialRecord));
      setCredential(credentialRecord);
      setStatus("Enrollment complete. The fingerprint-backed credential is saved on this device.");
    } catch (error) {
      setStatus(friendlyError(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function verifyFingerprint() {
    setIsBusy(true);
    setStatus("Opening your fingerprint verification prompt...");

    try {
      if (!credential?.rawId) {
        throw new Error("Enroll a fingerprint credential before verification.");
      }

      await navigator.credentials.get({
        publicKey: {
          challenge: makeChallenge(),
          allowCredentials: [
            {
              id: base64UrlToBuffer(credential.rawId),
              type: "public-key",
              transports: ["internal"],
            },
          ],
          userVerification: "required",
          timeout: 60000,
        },
      });

      setStatus("Verification successful. The enrolled fingerprint credential matched this device.");
    } catch (error) {
      setStatus(friendlyError(error));
    } finally {
      setIsBusy(false);
    }
  }

  function resetCredential() {
    window.localStorage.removeItem(STORAGE_KEY);
    setCredential(null);
    setStatus("Enrollment cleared from this browser. You can enroll again.");
  }

  return (
    <main className={styles.appShell}>
      <section className={styles.heroPanel}>
        <div className={styles.badge}>Fingerprint WebAuthn App</div>
        <h1>Enroll and verify users with a device fingerprint.</h1>
        <p>
          This standalone app uses the browser WebAuthn API to create a
          fingerprint-backed passkey and verify it on the same device.
        </p>
      </section>

      <section className={styles.workspace} aria-label="Fingerprint enrollment and verification">
        <div className={styles.controlCard}>
          <div className={styles.cardHeader}>
            <span>01</span>
            <div>
              <h2>Enrollment</h2>
              <p>Create a local credential protected by the device biometric prompt.</p>
            </div>
          </div>

          <label className={styles.inputGroup} htmlFor="full-name">
            Full name
            <input
              id="full-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter user name"
              type="text"
            />
          </label>

          <button className={styles.primaryButton} disabled={isBusy || !support.available} onClick={enrollFingerprint}>
            Enroll fingerprint
          </button>
        </div>

        <div className={styles.fingerprintCard} aria-live="polite">
          <div className={styles.fingerprintIcon}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <h2>{credential ? credential.name : "No active enrollment"}</h2>
          <p>{status}</p>
          <div className={styles.metaGrid}>
            <div>
              <span>Support</span>
              <strong>{support.checked ? (support.available ? "Available" : "Unavailable") : "Checking"}</strong>
            </div>
            <div>
              <span>Enrolled</span>
              <strong>{enrolledAt}</strong>
            </div>
          </div>
        </div>

        <div className={styles.controlCard}>
          <div className={styles.cardHeader}>
            <span>02</span>
            <div>
              <h2>Verification</h2>
              <p>Ask the enrolled device to prove the stored credential is present.</p>
            </div>
          </div>

          <button className={styles.primaryButton} disabled={isBusy || !credential} onClick={verifyFingerprint}>
            Verify fingerprint
          </button>
          <button className={styles.secondaryButton} disabled={isBusy || !credential} onClick={resetCredential}>
            Clear enrollment
          </button>
        </div>
      </section>

      <aside className={styles.note}>
        Production deployments should send the generated challenge, credential public key, and assertion response to a backend for cryptographic verification.
      </aside>
    </main>
  );
}
