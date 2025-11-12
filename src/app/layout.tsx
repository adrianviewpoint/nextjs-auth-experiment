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
        <header className="p-4 border-b border-gray-200">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <a href="/api/health" target="_blank" className="text-blue-600">API: /api/health</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 border-t border-gray-200 mt-8 text-gray-600">
          <small className="text-sm">nextjs-auth-experiment</small>
        </footer>
      </body>
    </html>
  );
}
