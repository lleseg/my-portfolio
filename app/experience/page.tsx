import { ExperienceEntry } from "@/components/ExperienceEntry";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Experience</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        10+ years building software across full stack, systems, and infrastructure.
      </p>
      <ul className="mt-12 flex flex-col gap-10 border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((entry) => (
          <ExperienceEntry
            key={`${entry.company}-${entry.period}`}
            entry={entry}
          />
        ))}
      </ul>
    </section>
  );
}
