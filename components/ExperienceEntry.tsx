import { Experience } from "@/data/experience";

interface Props {
  entry: Experience;
}

export function ExperienceEntry({ entry }: Props) {
  return (
    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-zinc-300 before:dark:bg-zinc-600">
      <p className="text-xs text-zinc-400 dark:text-zinc-500">{entry.period}</p>
      <h2 className="mt-0.5 font-semibold text-zinc-950 dark:text-zinc-50">
        {entry.role}
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{entry.company}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {entry.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {entry.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}
