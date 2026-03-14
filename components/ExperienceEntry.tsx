import { Experience } from "@/data/experience";

interface Props {
  entry: Experience;
}

export function ExperienceEntry({ entry }: Props) {
  return (
    <li
      className="relative grid gap-4 py-8 sm:grid-cols-[28%_1fr] sm:gap-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Left column — date + company */}
      <div className="sm:pt-0.5">
        <p
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--muted)" }}
        >
          {entry.period}
        </p>
        <p
          className="mt-1 text-sm font-medium"
          style={{ color: "var(--bronze)" }}
        >
          {entry.company}
        </p>
      </div>

      {/* Right column — role + description + tags */}
      <div>
        <h2
          className="font-[family-name:var(--font-playfair)] text-xl font-semibold leading-snug"
          style={{ color: "var(--foreground)" }}
        >
          {entry.role}
        </h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {entry.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {entry.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-sm border border-transparent px-2.5 py-0.5 text-xs font-medium bg-[var(--muted-bg)] text-[var(--muted)] dark:bg-[#2E2C28] dark:text-[#C0BAB2] dark:border-white/15"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
