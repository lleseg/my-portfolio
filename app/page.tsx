import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Franco De Nardo
      </h1>
      <p className="mt-3 text-lg font-medium text-zinc-500 dark:text-zinc-400 sm:text-xl">
        Full Stack Developer
      </p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        I bring more than 10 years of IT experience to every project — specialized
        in software analysis, development, and troubleshooting. I focus on every
        detail to deliver quality solutions that meet each client&apos;s needs.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
