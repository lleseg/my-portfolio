import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    href: "mailto:fdenardo.utn@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/franco-de-nardo/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/lleseg",
    icon: Github,
    label: "GitHub",
  },
];

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Get in Touch</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        Feel free to reach out via any of the following
      </p>
      <ul className="mt-10 flex flex-col gap-5">
        {links.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
