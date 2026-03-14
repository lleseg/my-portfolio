import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[900px] flex-col justify-center px-8 py-20">
      <p
        className="animate-fade-up animation-delay-100 mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--bronze)" }}
      >
        Full Stack Developer
      </p>

      <h1
        className="animate-fade-up animation-delay-200 font-[family-name:var(--font-playfair)] font-bold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", color: "var(--foreground)" }}
      >
        Franco
        <br />
        De Nardo
      </h1>

      <div
        className="animate-fade-up animation-delay-300 my-8 h-px w-24"
        style={{ backgroundColor: "var(--bronze)" }}
      />

      <p
        className="animate-fade-up animation-delay-400 max-w-[60ch] text-base leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        I bring more than 10 years of IT experience to every project — specialized
        in software analysis, development, and troubleshooting. I focus on every
        detail to deliver quality solutions that meet each client&apos;s needs.
      </p>

      <div className="animate-fade-up animation-delay-500 mt-10 flex flex-wrap gap-4">
        <Link
          href="/experience"
          className="rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200"
          style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
          style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
