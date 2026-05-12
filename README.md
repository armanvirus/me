# Fingerprint Enrollment & Verification

A standalone Next.js web app that focuses on fingerprint enrollment and verification with the browser WebAuthn API.

## What it does

- Checks whether the browser has a platform authenticator that supports user verification.
- Enrolls a fingerprint-backed passkey for a named demo user.
- Stores the created credential identifier in local browser storage for the demo flow.
- Verifies the enrolled credential through the device fingerprint prompt.
- Lets you clear the local enrollment and start again.

> This app demonstrates the frontend flow. A production deployment should create challenges on a backend and verify WebAuthn attestation/assertion responses cryptographically on the server.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with a browser on a device that supports fingerprint or platform biometric authentication.

## Build

```bash
npm run build
```
