"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#work", label: "Work", num: "01" },
  { href: "#about", label: "About", num: "02" },
  { href: "#experience", label: "Experience", num: "03" },
  { href: "#skills", label: "Skills", num: "04" },
  { href: "#contact", label: "Contact", num: "05" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? "border-border bg-background/92"
            : "border-transparent bg-background/70"
        }`}
      >
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Yogesh Rawat — home">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-foreground font-display text-sm font-semibold text-background">
              YR
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Yogesh&nbsp;Rawat
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-baseline gap-1.5 text-[13.5px] text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="font-mono text-[10.5px] text-muted-foreground/70">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <a
              href="mailto:yugrt21@gmail.com"
              className="hidden rounded border border-border px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:border-primary hover:text-primary lg:inline-block"
            >
              Let&apos;s talk
            </a>
            <button
              className="grid h-9 w-9 place-items-center rounded lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-[190] flex flex-col justify-center gap-7 bg-background px-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl font-semibold"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:yugrt21@gmail.com"
          onClick={() => setOpen(false)}
          className="mt-2 inline-flex items-center gap-2 font-mono text-[15px] text-primary"
        >
          yugrt21@gmail.com <ArrowUpRight size={16} />
        </a>
      </nav>
    </>
  );
}
