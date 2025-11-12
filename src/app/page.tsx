"use client";

import { useState } from "react";

export default function HomePage() {
  const [echoResult, setEchoResult] = useState<string>("");

  async function callEcho() {
    const res = await fetch("/api/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "hello from the frontend" }),
    });
    const data = await res.json();
    setEchoResult(JSON.stringify(data, null, 2));
  }

  return (
    <section>
      <h1>Next.js Auth Experiment</h1>
      <p>This is a minimal Next.js app using the App Router.</p>
      <ul>
        <li>
          Backend API example: <a href="/api/health" target="_blank" rel="noreferrer">GET /api/health</a>
        </li>
        <li>
          Backend API example: POST /api/echo
          <div>
            <button onClick={callEcho} style={{ marginTop: "0.5rem" }}>Send sample POST</button>
          </div>
          {echoResult && (
            <pre style={{ background: "#f6f8fa", padding: "0.75rem", marginTop: "0.5rem", borderRadius: 6 }}>
              {echoResult}
            </pre>
          )}
        </li>
      </ul>
      <p>Next step: add NextAuth routes under <code>src/app/api/auth/[...nextauth]/route.ts</code>.</p>
    </section>
  );
}
