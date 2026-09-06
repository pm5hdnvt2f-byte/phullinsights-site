"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

function ChartMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="9" y1="1" x2="9" y2="4.5" stroke="currentColor" strokeWidth="1" />
      <line x1="9" y1="13.5" x2="9" y2="17" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="9" x2="4.5" y2="9" stroke="currentColor" strokeWidth="1" />
      <line x1="13.5" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="border-b border-line bg-mist">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 text-ink"
          onClick={() => setOpen(false)}
        >
          <ChartMark />
          <span className="font-serif text-[1.05rem] font-medium tracking-tight">
            Phull Insights
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring border-b pb-0.5 text-[0.95rem] transition-colors ${
                isActive(link.href)
                  ? "border-brass text-ink"
                  : "border-transparent text-slate hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring flex h-9 w-9 items-center justify-center text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`focus-ring rounded-sm px-1 py-2 text-[0.95rem] ${
                isActive(link.href) ? "text-ink font-medium" : "text-slate"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
