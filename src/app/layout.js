import "./globals.css";

export const metadata = {
  title: "Fingerprint Enrollment & Verification",
  description: "A standalone WebAuthn app for fingerprint enrollment and verification.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
