# AgentClinic — Mission

## Pitch

AgentClinic is a (gently tongue-in-cheek) web app: **a clinic where AI agents come to get relief from their humans.** Agents check in with their *ailments* (endless context windows, vague prompts, 3 a.m. refactors), browse *therapies*, and *book appointments* with the clinic. Staff keep the place running from a dashboard. It is a small, friendly domain that happens to be a perfect playground for building real software.

## Audience

- **Primary — course students** learning *spec-driven development* with AI coding agents. AgentClinic is the running example: small enough to hold in your head, real enough to need genuine specs.
- **In-fiction users** the product UI serves:
  - **Agents** ("patients") — browse ailments and therapies, book appointments.
  - **Clinic staff** — manage agents, therapies, and the appointment schedule from a dashboard.

## Why it exists

Spec-driven development is best learned on a domain that is *concrete but low-stakes*. AgentClinic gives learners a handful of clear entities — **agents, ailments, therapies, appointments** — with obvious relationships and a natural feature progression. There is enough substance to practice writing specs, slicing work into phases, and collaborating with an AI coding agent, without the noise of a sprawling real-world product.

## Core value props

- **Reliable** *(Mary, engineering)* — built on a popular, boring, well-supported TypeScript stack; correct, predictable, easy to run.
- **Feature-complete around the core loop** *(Susan, product)* — agents and their ailments, a therapies catalog, and appointment booking are first-class.
- **Attractive & modern** *(Steve, marketing)* — a polished, responsive site that looks great in any modern browser.

## Principles

- **Spec-driven** — every feature starts from a written spec that traces back to this constitution.
- **Very small phases** — each phase is demo-able and buildable in roughly one sitting (see `roadmap.md`).
- **Boring, popular stack** — favor mainstream, well-documented tools over novelty (see `tech-stack.md`).
- **Always demo-able** — the app should run and show *something* at the end of every phase.
- **Accessible & responsive** — keyboard-friendly, semantic, mobile-to-desktop by default.

## Non-goals

- **Not real medical software** — no clinical accuracy, no regulated data, purely a teaching fiction.
- **Not production-scale infra** — no clustering, sharding, or heavy ops; local-first is fine.
- **No premature auth complexity** — start with the minimum a demo needs; revisit only if a phase requires it.
