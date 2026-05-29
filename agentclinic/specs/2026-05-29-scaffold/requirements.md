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
- **Vitest** wired as the validation test runner, with an `npm test` script
  (green via `--passWithNoTests` until a phase adds its first tests).
- An AgentClinic-themed **hello-world home page**, built **mobile-first** and
  **responsive** (readable and usable from ~375px phones to large desktops).
- App-wide **viewport** meta so the responsive layout behaves on real devices.
- A clean `dev` script (`next dev`) that runs without errors.

## Out of scope (deferred to later phases)

- Data layer — SQLite + Prisma, models, seed → **Phase 1**.
- Marketing landing page → **Phase 2**.
- Agents directory, therapies catalog, booking, dashboard → **Phases 3–6**.
- Actual test cases and **Playwright** end-to-end coverage → introduced when a
  phase needs them (**Phase 7**). Phase 0 only wires the Vitest runner + script.
- Any authentication / multi-user concerns (per `mission.md` non-goals).

## Decisions (confirmed)

| Decision | Choice | Rationale |
|---|---|---|
| Scaffold method | Official `create-next-app` | Boring, well-documented path; matches tech-stack. |
| Package manager | **npm** | Tech-stack default. |
| App structure | App Router under **`src/app`** | Keep source under `src/`. |
| TypeScript | `strict` mode | Constitution requirement. |
| Test runner | **Vitest**, `npm test` script | Validation runner per `tech-stack.md`; wire the harness now, `--passWithNoTests` until tests exist. |
| Existing files | Reconcile / replace | Replace bare `package.json`, merge `tsconfig.json` (keep `strict`), remove `src/index.ts`; preserve `.gitignore` and `specs/`. |

## Constraints & principles (from `mission.md`)

- **Boring, popular stack** — favor mainstream tools over novelty.
- **Always demo-able** — the app must run and show something at phase end.
- **Responsive by default** — mobile-first; the UI must work fluidly from
  ~375px to large desktops with no horizontal scroll or clipped content.
- **Accessible** — keyboard-friendly, semantic markup, sensible focus order.
- **Spec-driven** — this document is the source of truth for the phase.
