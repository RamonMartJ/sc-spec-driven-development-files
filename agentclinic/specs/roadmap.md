# AgentClinic — Roadmap

High-level implementation order in **very small phases**. Each phase has one clear goal, is small enough to spec and build in roughly one sitting, and ends with the app running and demo-able. Later, each phase gets its own detailed feature spec that traces back to `mission.md` and `tech-stack.md`.

---

## Phase 0 — Scaffold
**Goal:** a running Next.js + TypeScript app you can open in the browser.
- [ ] Initialize Next.js (App Router) + TypeScript (`strict`).
- [ ] Add Tailwind CSS, ESLint + Prettier.
- [ ] Wire Vitest as the validation runner (`npm test`, `--passWithNoTests`).
- [ ] Hello-world home page; `dev` script runs cleanly.

## Phase 1 — Data layer
**Goal:** core data models exist and are seeded.
- [ ] Add SQLite + ORM (Prisma).
- [ ] Define models: **Agent**, **Ailment**, **Therapy**, **Appointment** (+ relations).
- [ ] Run first migration; add a seed script with sample agents, ailments, therapies.

## Phase 2 — Marketing landing page
**Goal:** Steve's attractive front door.
- [ ] Polished, responsive landing page explaining AgentClinic.
- [ ] Clear navigation to agents, therapies, and booking.

## Phase 3 — Agents directory
**Goal:** see agents and their ailments (read-only).
- [ ] List view of agents.
- [ ] Agent detail page showing that agent's ailments.

## Phase 4 — Therapies catalog
**Goal:** browse available therapies.
- [ ] List/detail of therapies.
- [ ] Show which ailments each therapy addresses.

## Phase 5 — Appointment booking
**Goal:** Susan's core loop — book and view appointments.
- [ ] Booking form (agent + therapy + time).
- [ ] Persist appointments; confirmation + list of an agent's appointments.

## Phase 6 — Dashboard
**Goal:** Mary's dashboard for agents & staff.
- [ ] Overview of upcoming appointments, therapies, and agents.
- [ ] Staff view to manage the schedule.

## Phase 7 — Polish
**Goal:** make it reliable and presentable.
- [ ] Responsive + accessibility hardening pass (audit breakpoints, keyboard, semantics, contrast).
- [ ] Empty / loading / error states.
- [ ] Tests on the wired Vitest runner (unit) + Playwright e2e for the booking flow.

---

### Sequencing notes
- **Responsive design is cross-cutting:** every phase that ships UI must be mobile-first and responsive (mobile → desktop) per `mission.md`/`tech-stack.md`, and validate it at mobile and desktop widths. Phase 7's pass hardens and audits responsiveness — it is not where responsiveness first appears.
- Phases build strictly on prior ones; each leaves `main` runnable.
- Scope creep goes into a *new* small phase, not an existing one.
- Auth and multi-user concerns are deferred unless a phase's spec proves it's needed (see mission non-goals).
