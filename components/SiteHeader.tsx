"use client";

import { useState } from "react";
import { linkedInUrl } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#honours", label: "Honours" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-soft/50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-sm font-display tracking-[0.18em] text-forest">
            TF
          </span>
          <span className="font-display text-xl tracking-wide text-forest">
            Tamseel Fatima
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-muted transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-3 py-1.5 text-[0.7rem] tracking-[0.18em] uppercase text-forest hover:bg-gold/10"
          >
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden border border-gold/60 px-3 py-1.5 text-[0.7rem] tracking-[0.2em] uppercase text-forest"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-3 border-t border-gold-soft/50 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.16em] uppercase text-forest"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.16em] uppercase text-forest"
            onClick={() => setOpen(false)}
          >
            LinkedIn
          </a>
        </nav>
      ) : null}
    </header>
  );
}
