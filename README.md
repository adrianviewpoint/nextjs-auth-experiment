# nextjs-auth-experiment

A Minimal app designed to be a clean base for experimenting with auth.

- Next.js
- Typescript
- TailwindCSS
- Prisma (postgress)
- Better Auth

## Quickstart (new contributors)

Prerequisites:

- Node.js 20+ and npm
- Docker Desktop to run the postgress database

Steps:

1) Install dependencies
  - `npm install`
2) Set environment (local defaults)
  - `cp .env.example .env && cp .env.example .env.local`
3) Start Postgres database
  - `docker compose up -d`
4) Generate Better Auth schema (ok to skip if already generated)
  - `npm run auth:generate`
5) Generate Prisma client
  - `npm run prisma:generate`
6) Apply committed migrations (first-time setup)
  - `npm run prisma:deploy`
  - Use `npm run prisma:migrate` only when you actively change the schema and want to create new migrations
7) Start the app
  - `npm run dev`

Open http://localhost:3000, try the sign up / sign in / sign out on the homepage, and check `/api/auth/*`.

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

## Tailwind CSS (v4.1)

This repo follows Tailwind 4.1’s zero‑config setup:

- No `tailwind.config.*` needed unless you need very specific config that is not yet supported in v4.0
- PostCSS plugin: `@tailwindcss/postcss` (see `postcss.config.js`)
- CSS entrypoint: `@import "tailwindcss";` in `src/app/globals.css`
- Use utilities directly in components (we avoid heavy global `@apply`)
 
## Prisma (postgress)

- First project authoring:
  1) `auth:generate` writes Better Auth models into `prisma/schema.prisma`.
  2) `prisma:migrate` (dev) creates SQL migration files capturing those changes; commit them.
- New contributors:
  1) Copy envs, start DB.
  2) `prisma:deploy` applies the committed migrations to their local DB.
  3) `prisma:generate` builds the Prisma client (also runs during `postinstall` if configured).
- At runtime:
  - Calls to `/api/auth/*` hit the Better Auth handler which uses Prisma to read/write users, sessions, accounts, etc., in Postgres.

## Better Auth

This project is wired for Better Auth with Prisma + Postgres. Files:

- Server: `src/lib/auth.ts` (Better Auth server, Prisma adapter)
- Route handler: `src/app/api/auth/[...all]/route.ts` (mounted at `/api/auth/*`)
- Client: `src/lib/auth-client.ts` (React client, exposes hooks and methods)
- UI: `src/app/page.tsx` (basic email/password sign up/in/out + session)

Environment:

- `.env.example` already contains safe defaults for local development
- Recommended: copy it to `.env` (used by both Prisma CLI and Next.js)
  - `cp .env.example .env`
  - Defaults match the included Docker Postgres service (dev/dev @ localhost:5432)
  - If you use your own Postgres, update `DATABASE_URL` accordingly
  - `.env.local` is optional for personal overrides and is also gitignored

Prisma schema and tables:

1. Generate Better Auth Prisma schema and models (only needed if you change auth features)
  - `npm run auth:generate`
2. Generate Prisma client
  - `npm run prisma:generate`
3. Apply committed migrations (first-time setup)
  - `npm run prisma:deploy`
  - Use `npm run prisma:migrate` only when you actively change the schema and want to create new migrations

Run the app:

```sh
npm run dev
```

Try the auth UI on the homepage and the API under `/api/auth/*`.
