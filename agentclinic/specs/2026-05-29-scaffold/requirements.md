# Phase 0 — Scaffold · Requirements

## Phase

**Roadmap:** Phase 0 — Scaffold (`specs/roadmap.md`).
Traces back to the constitution: `specs/mission.md` and `specs/tech-stack.md`.

> **Goal (roadmap):** a running Next.js + TypeScript app you can open in the browser.

## Context

The repository currently holds only a bare TypeScript stub
(`src/index.ts` → `console.log('Happy developing ✨')`, a minimal
`package.json` with just `tsc`, and a small `tsconfig.json`). No Next.js,
Tailwind, Prisma, or app structure exists yet. Phase 0 establishes the
foundation every later phase builds on, leaving `main` runnable and demo-able.

## In scope

- Next.js (**App Router**) + **TypeScript `strict`**.
- **Tailwind CSS** wired and rendering.
- **ESLint + Prettier**, lint-clean and consistently formatted.
- An AgentClinic-themed **hello-world home page**.
- A clean `dev` script (`next dev`) that runs without errors.

## Out of scope (deferred to later phases)

- Data layer — SQLite + Prisma, models, seed → **Phase 1**.
- Marketing landing page → **Phase 2**.
- Agents directory, therapies catalog, booking, dashboard → **Phases 3–6**.
- Tests (Vitest / Playwright) → introduced when a phase needs them (**Phase 7**).
- Any authentication / multi-user concerns (per `mission.md` non-goals).

## Decisions (confirmed)

| Decision | Choice | Rationale |
|---|---|---|
| Scaffold method | Official `create-next-app` | Boring, well-documented path; matches tech-stack. |
| Package manager | **npm** | Tech-stack default. |
| App structure | App Router under **`src/app`** | Keep source under `src/`. |
| TypeScript | `strict` mode | Constitution requirement. |
| Existing files | Reconcile / replace | Replace bare `package.json`, merge `tsconfig.json` (keep `strict`), remove `src/index.ts`; preserve `.gitignore` and `specs/`. |

## Constraints & principles (from `mission.md`)

- **Boring, popular stack** — favor mainstream tools over novelty.
- **Always demo-able** — the app must run and show something at phase end.
- **Accessible & responsive** — keyboard-friendly, semantic, mobile-to-desktop.
- **Spec-driven** — this document is the source of truth for the phase.
