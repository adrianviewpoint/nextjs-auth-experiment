# nextjs-auth-experiment

Minimal Next.js app (TypeScript, App Router) designed to be a clean base for experimenting with NextAuth.

## Structure

- Frontend (React, Server/Client Components): `src/app`
  - Root layout: `src/app/layout.tsx`
  - Home page: `src/app/page.tsx`
  - Global styles: `src/app/globals.css`
- Backend API (Edge/Node handlers): `src/app/api/*`
  - Health check (GET): `src/app/api/health/route.ts`
  - Echo (POST): `src/app/api/echo/route.ts`

This layout keeps frontend and backend side-by-side and easy to find.

## Scripts

- `npm run dev` — Start the Next.js dev server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Lint the project
- `npm run type-check` — TypeScript type check

## Getting started

1. Install dependencies
2. Start the dev server
3. Visit the homepage and try the API links

Dev workflow:

1. Start the dev server: `npm run dev`
2. Use Tailwind utilities like `p-4`, `text-blue-600`, `mt-2` directly in components
3. Build for production: `npm run build`

## Tailwind CSS (v4.1)

This repo follows Tailwind 4.1’s zero‑config setup:

- No `tailwind.config.*` needed unless you need very specific config that is not yet supported in v4.0
- PostCSS plugin: `@tailwindcss/postcss` (see `postcss.config.js`)
- CSS entrypoint: `@import "tailwindcss";` in `src/app/globals.css`
- Use utilities directly in components (we avoid heavy global `@apply`)

## Next steps: Add NextAuth

When you’re ready to add NextAuth:

1. Install the package and provider(s):
   - `npm i next-auth`
   - Optionally: `npm i @auth/core` (if using advanced adapters)
2. Create the auth route at `src/app/api/auth/[...nextauth]/route.ts`.
3. Add a simple sign-in button on the homepage and test a provider (e.g., GitHub, Google, Email).
4. Store secrets in `.env.local` (already gitignored).

See https://authjs.dev for up-to-date docs.
