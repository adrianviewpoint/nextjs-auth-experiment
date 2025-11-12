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
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Next.js Auth Experiment</h1>
      <p className="text-gray-700">This is a minimal Next.js app using the App Router.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Backend API example: <a href="/api/health" target="_blank" rel="noreferrer" className="text-blue-600">GET /api/health</a>
        </li>
        <li>
          <div className="font-medium">Backend API example: POST /api/echo</div>
          <div>
            <button onClick={callEcho} className="mt-2 inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">
              Send sample POST
            </button>
          </div>
          {echoResult && (
            <pre className="bg-gray-100 p-3 mt-2 rounded text-sm overflow-auto">
              {echoResult}
            </pre>
          )}
        </li>
      </ul>
      <p className="text-gray-700">
        Next step: add NextAuth routes under <code className="bg-gray-100 px-1 py-0.5 rounded">src/app/api/auth/[...nextauth]/route.ts</code>.
      </p>
    </section>
  );
}
