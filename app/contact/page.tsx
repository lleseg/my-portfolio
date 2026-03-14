import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Franco De Nardo — Contact",
};

const links = [
  {
    href: "mailto:fdenardo.utn@gmail.com",
    icon: Mail,
    label: "Email",
    sublabel: "fdenardo.utn@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/franco-de-nardo/",
    icon: Linkedin,
    label: "LinkedIn",
    sublabel: "franco-de-nardo",
  },
  {
    href: "https://github.com/lleseg",
    icon: Github,
    label: "GitHub",
    sublabel: "lleseg",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[900px] flex min-h-[calc(100vh-65px)] flex-col justify-center px-8 py-24">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--bronze)" }}
      >
        Let&apos;s Talk
      </p>
      <h1
        className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight sm:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        Get in Touch
      </h1>
      <p className="mt-4 max-w-[50ch] text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        Feel free to reach out via any of the following channels.
      </p>
      <ul className="mt-12 flex flex-col gap-6">
        {links.map(({ href, icon: Icon, label, sublabel }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 transition-colors duration-200"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-zinc-200 text-zinc-700 transition-colors duration-200 group-hover:bg-[var(--bronze)] group-hover:text-white dark:bg-[#2E2C28] dark:text-[var(--bronze-hover)]"
              >
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span>
                <span
                  className="block text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--bronze)]"
                  style={{ color: "var(--foreground)" }}
                >
                  {label}
                </span>
                <span className="text-xs">{sublabel}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
