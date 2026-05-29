# Phase 0 — Scaffold · Validation

How we confirm Phase 0 succeeded and is safe to merge.

## Success criteria

| # | Check | Expected |
|---|---|---|
| 1 | `npm install` | Completes with no errors. |
| 2 | `npm run dev` | Starts `next dev`; home page loads at `http://localhost:3000`. |
| 3 | `npm run build` | Production build succeeds. |
| 4 | `npm run lint` | ESLint passes, no errors. |
| 5 | `npm run format:check` | Prettier reports all files formatted. |
| 6 | TypeScript | `tsconfig.json` has `"strict": true`; no type errors in build. |
| 7 | Tailwind | Utility classes render (styling visibly applied on the home page). |
| 8 | App Router | App lives under `src/app`; obsolete `src/index.ts` removed. |

## Manual check

- Open `http://localhost:3000` → see the AgentClinic-themed hello-world page.
- Page title/description reflect AgentClinic (`mission.md` pitch).
- Resize to mobile (~375px) and desktop (~1280px) widths — layout stays
  readable and responsive.
- Keyboard / semantics: headings are real headings; focus order is sane.

## Merge criteria

- All success criteria (1–8) green.
- `main` remains runnable after merge (no broken scripts).
- Changes are isolated to scaffolding; no out-of-scope features added.
- Open a PR from `phase-0-scaffold` → `main`, including these spec docs
  (`specs/2026-05-29-scaffold/`).
- Squash-merge once review passes.

## Traceability

Satisfies `specs/roadmap.md` Phase 0 and upholds `mission.md` principles
(boring stack, always demo-able, accessible & responsive) and `tech-stack.md`
choices (Next.js App Router, TypeScript strict, Tailwind, ESLint + Prettier, npm).
