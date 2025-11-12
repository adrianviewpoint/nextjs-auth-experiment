"use client";

import { useState } from "react";
import { signIn, signUp, signOut, useSession } from "@/lib/auth-client";

export default function HomePage() {
  const [echoResult, setEchoResult] = useState<string>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState<string>("");
  const { data: session, isPending } = useSession();

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
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Next.js Auth Experiment</h1>
      <p className="text-gray-700">This is a minimal Next.js app using the App Router.</p>
      <div className="rounded border border-gray-200 p-4 space-y-3">
        <h2 className="text-lg font-medium">Auth (Better Auth + Prisma/Postgres)</h2>
        <div className="flex flex-col gap-2 max-w-md">
          <input
            className="border border-gray-300 rounded px-3 py-2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded px-3 py-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded px-3 py-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={async () => {
                setAuthMessage("");
                const { error } = await signUp.email({ email, password, name: name || email.split("@")[0] });
                setAuthMessage(error ? `Sign up error: ${error.message}` : "Signed up (and possibly signed in)");
              }}
              className="inline-flex items-center rounded bg-green-600 px-3 py-1.5 text-white hover:bg-green-700"
            >
              Sign up
            </button>
            <button
              onClick={async () => {
                setAuthMessage("");
                const { error } = await signIn.email({ email, password });
                setAuthMessage(error ? `Sign in error: ${error.message}` : "Signed in");
              }}
              className="inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
            >
              Sign in
            </button>
            <button
              onClick={async () => {
                setAuthMessage("");
                await signOut();
                setAuthMessage("Signed out");
              }}
              className="inline-flex items-center rounded bg-gray-700 px-3 py-1.5 text-white hover:bg-black"
            >
              Sign out
            </button>
          </div>
          {authMessage && <div className="text-sm text-gray-700">{authMessage}</div>}
        </div>
        <div className="text-sm text-gray-700">
          <div className="font-medium">Session</div>
          {isPending ? (
            <div>Loading…</div>
          ) : session ? (
            <pre className="bg-gray-100 p-3 mt-2 rounded text-xs overflow-auto">{JSON.stringify(session, null, 2)}</pre>
          ) : (
            <div>No session</div>
          )}
        </div>
      </div>
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
      <p className="text-gray-700">Auth is mounted at <code className="bg-gray-100 px-1 py-0.5 rounded">/api/auth/*</code>.</p>
    </section>
  );
}
