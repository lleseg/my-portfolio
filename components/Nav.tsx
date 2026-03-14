import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.08]">
      <nav className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
