import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Skills</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        Technologies and tools I&apos;ve worked with across my career.
      </p>
      <div className="mt-12 flex flex-col gap-10">
        {skills.map((category) => (
          <div key={category.name}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {category.name}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={
                    skill.highlighted
                      ? "rounded-full border border-zinc-400 bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-100"
                      : "rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
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
