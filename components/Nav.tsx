"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) => {
    const active = pathname === href;
    return `text-sm transition-colors duration-200 ${
      active
        ? "font-medium underline underline-offset-4 decoration-[var(--bronze)]"
        : "hover:text-[var(--foreground)]"
    }`;
  };

  const linkStyle = (href: string) => ({
    color: pathname === href ? "var(--foreground)" : "var(--muted)",
    textDecorationColor: pathname === href ? "var(--bronze)" : undefined,
  });

  return (
    <header className="relative" style={{ borderBottom: "1px solid var(--border)" }}>
      <nav className="mx-auto flex max-w-[900px] items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold italic tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          FDN
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)} style={linkStyle(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="flex items-center justify-center md:hidden"
          style={{ color: "var(--foreground)" }}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full z-20 md:hidden"
          style={{
            backgroundColor: "var(--background)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <ul className="mx-auto flex max-w-[900px] flex-col gap-5 px-8 py-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={linkClass(href)}
                  style={linkStyle(href)}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
