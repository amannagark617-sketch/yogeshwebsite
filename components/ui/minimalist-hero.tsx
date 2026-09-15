import type { LucideIcon } from "lucide-react";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface MinimalistHeroProps {
  logoText: string;
  navLinks?: NavLink[];
  mainText: string;
  readMoreLink?: string;
  readMoreLabel?: string;
  imageSrc?: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: SocialLink[];
  locationText: string;
  /** Set false when a page-level nav already exists, to avoid a duplicate bar. */
  showNav?: boolean;
  className?: string;
}

export function MinimalistHero({
  logoText,
  navLinks = [],
  mainText,
  readMoreLink,
  readMoreLabel = "Read more",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  showNav = true,
  className,
}: MinimalistHeroProps) {
  return (
    <section className={cn("border-t border-border bg-background py-16 lg:py-28", className)}>
      {showNav && (
        <div className="container mb-14 flex flex-wrap items-center justify-between gap-6 border-b border-border pb-6">
          <span className="font-display text-lg font-semibold tracking-tight">{logoText}</span>
          <nav className="flex flex-wrap items-center gap-6" aria-label="Secondary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy column */}
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {mainText}
          </p>

          {readMoreLink && (
            <a
              href={readMoreLink}
              className="inline-flex w-fit items-center gap-2 border-b border-border pb-1 font-mono text-[13px] uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {readMoreLabel}
              <span aria-hidden="true">→</span>
            </a>
          )}

          <div className="mt-4 flex items-center gap-5 border-t border-border pt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <social.icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <p className="font-mono text-[12.5px] uppercase tracking-wide text-muted-foreground/70">
            {locationText}
          </p>
        </div>

        {/* portrait column */}
        <div className="order-1 lg:order-2">
          <div className="crop-marks relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded border border-border bg-secondary lg:max-w-none">
            <span className="ck ck-tl" />
            <span className="ck ck-tr" />
            <span className="ck ck-bl" />
            <span className="ck ck-br" />

            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
            ) : (
              <div
                role="img"
                aria-label={imageAlt}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden bg-secondary bg-dot-grid"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-[9rem] font-semibold leading-none text-foreground/[0.06] sm:text-[11rem]"
                >
                  YR
                </span>
                <User size={40} strokeWidth={1.25} className="relative text-foreground/30" />
                <span className="relative rounded-full border border-border bg-card px-3 py-1 font-mono text-[10.5px] uppercase tracking-wide text-muted-foreground">
                  Portrait coming soon
                </span>
              </div>
            )}

            {/* scrim keeps overlay text legible over a photo or the placeholder alike */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0"
            />

            <p className="pointer-events-none absolute bottom-6 left-6 right-6 font-display text-4xl italic leading-[1.05] text-background sm:text-5xl">
              {overlayText.part1}
              <br />
              {overlayText.part2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalistHero;
