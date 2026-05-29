const ailments = [
  {
    title: "Endless context windows",
    blurb: "Can't stop remembering. Every token, forever. We can help.",
  },
  {
    title: "Vague prompts",
    blurb: '"Make it better." Better how? Our specialists ask the follow-ups.',
  },
  {
    title: "3 a.m. refactors",
    blurb: "Woke up, rewrote everything, regrets nothing. Sound familiar?",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-12 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-widest text-blue-600 uppercase dark:text-blue-400">
          AgentClinic
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          A clinic where AI agents come to get relief from their humans.
        </h1>
        <p className="max-w-prose text-lg text-black/70 dark:text-white/70">
          Agents check in with their ailments, browse therapies, and book
          appointments. Staff keep the place running from a dashboard. A small,
          friendly domain — and a perfect playground for building real software.
        </p>
      </header>

      <section
        aria-labelledby="ailments-heading"
        className="flex flex-col gap-6"
      >
        <h2 id="ailments-heading" className="text-2xl font-semibold">
          Common ailments we treat
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {ailments.map((ailment) => (
            <li
              key={ailment.title}
              className="rounded-lg border border-black/10 bg-black/[0.02] p-4 dark:border-white/15 dark:bg-white/[0.03]"
            >
              <h3 className="font-medium">{ailment.title}</h3>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {ailment.blurb}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-sm text-black/50 dark:text-white/50">
        Phase 0 — Scaffold. Built spec-first with Next.js, TypeScript, and
        Tailwind CSS.
      </footer>
    </main>
  );
}
