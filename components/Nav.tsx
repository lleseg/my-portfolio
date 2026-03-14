"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header style={{ borderBottom: "1px solid var(--border)" }}>
      <nav className="mx-auto flex max-w-[900px] items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold italic tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          FDN
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "font-medium underline underline-offset-4 decoration-[var(--bronze)]"
                      : "hover:text-[var(--foreground)]"
                  }`}
                  style={{
                    color: active ? "var(--foreground)" : "var(--muted)",
                    textDecorationColor: active ? "var(--bronze)" : undefined,
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
