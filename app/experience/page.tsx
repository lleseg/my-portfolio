import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/ExperienceEntry";

export const metadata: Metadata = {
  title: "Franco De Nardo — Experience",
};
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-[900px] px-8 py-24">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--bronze)" }}
      >
        Career
      </p>
      <h1
        className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight sm:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        Experience
      </h1>
      <p className="mt-4 max-w-[60ch] text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        10+ years building software across full stack, systems, and infrastructure.
      </p>
      <ul
        className="mt-12 border-l-2 pl-8"
        style={{ borderColor: "var(--bronze)" }}
      >
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
