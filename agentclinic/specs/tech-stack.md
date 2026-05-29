# AgentClinic — Tech Stack

This is the **constitution-level** stack: the durable, default technology choices all later specs build on. Choices favor *popular, well-documented, server-side TypeScript* so the app is reliable (Mary), supports a rich dashboard and booking flow (Susan), looks modern in any browser (Steve), and is easy for course students to learn.

## Language

- **TypeScript**, `strict` mode. One language end-to-end (UI, server, data access).

## Framework

- **Next.js (App Router).** Full-stack TypeScript: React UI for the marketing site **and** the staff/agent dashboard, with **route handlers / server actions** for the API — server-side TypeScript without standing up a separate backend.
- *Why:* the most popular React meta-framework, excellent docs, SSR for fast/attractive pages, and one cohesive codebase that's approachable for learners.

## Database

- **SQLite** — zero-config, file-based. Perfect for demos, teaching, and conference booths; no server to run, and easy to reset or seed.
- **ORM: Prisma (default recommendation)** — typed client + readable schema + first-class migrations, very beginner-friendly.
  - *Alternative:* **Drizzle** — lighter, TS-native, closer to SQL; a fine swap for teams who prefer it.
- *Upgrade path:* the same ORM can point at PostgreSQL later with minimal code change if the project ever outgrows SQLite.

## Styling / UI

- **Tailwind CSS** for a fast, consistent, responsive design system.
- **Responsive design is the default and non-negotiable.** Build **mobile-first** (base styles target small screens; Tailwind breakpoints — `sm`/`md`/`lg`/`xl` — layer on larger layouts). Every page must remain readable and usable from ~375px phones to large desktops, with no horizontal scroll or clipped content. The `<meta name="viewport">` is set app-wide. Each feature spec validates its UI at mobile and desktop widths.
- A simple **component-based** approach (React components, optionally a headless/component library) for an attractive, modern-browser experience.

## Tooling

- **ESLint + Prettier** — consistent, lint-clean code.
- **Testing — Vitest for validation:** **Vitest** is the default test runner used to *validate* each phase (unit and integration logic), run via an `npm test` script (`vitest run`). **Playwright** covers end-to-end flows (e.g. booking an appointment), added when a phase needs browser coverage.
  - *Convention:* every phase's validation includes a green `npm test`; the script passes with no test files (`--passWithNoTests`) until a phase introduces its first tests.
- **Package manager:** npm (default; pnpm/yarn acceptable).

## Deployment

- **Local-first for dev:** `next dev` with a local SQLite file.
- **Target:** any Node host / Vercel-style platform. Keep it deployable but don't over-invest in ops (see mission non-goals).

## How this serves the stakeholders

| Choice | Mary (reliable) | Susan (features) | Steve (attractive) | Students (learnable) |
|---|---|---|---|---|
| Next.js | mainstream, supported | dashboard + booking in one app | SSR, polished pages | one cohesive codebase |
| SQLite + Prisma | predictable, easy to reset | clean model for agents/ailments/therapies/appointments | — | zero-config, typed |
| Tailwind | — | consistent UI | modern, responsive | quick to style |
| TypeScript (strict) | fewer runtime bugs | safe data flows | — | learn types in context |
