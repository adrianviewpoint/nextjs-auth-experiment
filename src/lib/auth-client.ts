"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: process.env.NEXT_PUBLIC_APP_URL, // optional if same domain
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
