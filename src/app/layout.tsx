import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Auth Experiment",
  description: "Minimal Next.js app prepared for NextAuth experiments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <a href="/api/health" target="_blank">API: /api/health</a>
          </nav>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer style={{ padding: "1rem", borderTop: "1px solid #eee", marginTop: "2rem", color: "#666" }}>
          <small>nextjs-auth-experiment</small>
        </footer>
      </body>
    </html>
  );
}
