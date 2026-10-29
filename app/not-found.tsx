import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franco De Nardo — Page Not Found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[900px] flex-col justify-center px-8 py-24">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--bronze)" }}
      >
        Error 404
      </p>
      <h1
        className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight sm:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        Page not found
      </h1>
      <p className="mt-4 max-w-[50ch] text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200"
          style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
