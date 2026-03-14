import type { Metadata } from "next";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Franco De Nardo — Skills",
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-[900px] px-8 py-24">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--bronze)" }}
      >
        Toolkit
      </p>
      <h1
        className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight sm:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        Skills
      </h1>
      <p className="mt-4 max-w-[60ch] text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        Technologies and tools I&apos;ve worked with across my career.
      </p>
      <div className="mt-16 flex flex-col gap-12">
        {skills.map((category) => (
          <div key={category.name}>
            <div className="mb-5 flex items-center gap-5">
              <h2
                className="shrink-0 font-[family-name:var(--font-playfair)] text-2xl font-semibold italic"
                style={{ color: "var(--foreground)" }}
              >
                {category.name}
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={
                    skill.highlighted
                      ? "rounded-sm border border-transparent px-3 py-1 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] dark:bg-[#3D3A35] dark:text-white dark:border-white/15"
                      : "rounded-sm border border-transparent px-3 py-1 text-sm font-medium bg-[var(--muted-bg)] text-[var(--muted)] dark:bg-[#2E2C28] dark:text-[#C0BAB2] dark:border-white/15"
                  }
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
