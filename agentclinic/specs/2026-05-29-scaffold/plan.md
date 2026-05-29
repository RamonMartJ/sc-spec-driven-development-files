# Phase 0 — Scaffold · Plan

Numbered task groups for implementing the scaffold. Each group leaves the repo
in a coherent state; the phase ends with `main` runnable and demo-able.

## 1. Generate the Next.js app

1.1. Run `create-next-app` with: TypeScript, App Router, Tailwind CSS, ESLint,
`src/` directory, `@/*` import alias, npm.
1.2. Generate into the existing repo root (use a temp dir + move if the
generator refuses a non-empty directory).

## 2. Reconcile existing files

2.1. Replace the bare `package.json` with the generated one (keep `name`,
`private`).
2.2. Merge `tsconfig.json` — confirm `"strict": true` and the Next.js compiler
options.
2.3. Remove the obsolete `src/index.ts`.
2.4. Preserve `.gitignore` (merge Next.js entries: `.next/`, `node_modules/`,
build output) and leave `specs/` untouched.

## 3. Add & wire Prettier

3.1. Install `prettier`, `eslint-config-prettier`, and
`prettier-plugin-tailwindcss`.
3.2. Add `.prettierrc` and `.prettierignore`.
3.3. Extend the ESLint config with `prettier` so lint and format don't conflict.
3.4. Add npm scripts: `lint`, `format` (write), `format:check`.

## 4. Wire Vitest (validation runner)

4.1. Install `vitest` as a dev dependency.
4.2. Add npm scripts: `test` (`vitest run --passWithNoTests`) and `test:watch`
(`vitest`). No test files yet — wire the harness now per `tech-stack.md`.

## 5. AgentClinic hello-world home page

5.1. Replace `src/app/page.tsx` with an AgentClinic-themed hello-world:
clear title/tagline from `mission.md`, styled with Tailwind.
5.2. Use semantic, accessible markup; responsive from mobile to desktop.
5.3. Set page `metadata` (title/description) in the layout.

## 6. Verify

6.1. `npm install` runs clean.
6.2. `npm run dev` serves the home page at `http://localhost:3000`.
6.3. `npm run build`, `npm run lint`, `npm run format:check` all pass.
6.4. `npm test` runs Vitest and exits 0 (`--passWithNoTests`).
6.5. Confirm against `validation.md` before opening the PR.
