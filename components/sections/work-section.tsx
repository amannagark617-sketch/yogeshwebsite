import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PROJECTS = [
  {
    frame: "FRAME 01 — BRAND",
    swatch: "#7A2048",
    tag: "Kiyo Stays — Hospitality",
    title: "Kiyo Stays",
    description:
      "Full logo, brand guidelines and offline touchpoints — menus, flyers and signage — built from scratch for a luxury hospitality brand.",
    tags: ["Brand Identity", "Print Design", "Social Creative"],
  },
  {
    frame: "FRAME 02 — PRODUCT",
    swatch: "#26408B",
    tag: "Buildway — SaaS UI/UX",
    title: "Buildway Product Platform",
    description:
      "Intuitive website and product layouts engineered for consistency across digital touchpoints and cross-functional shipping cycles.",
    tags: ["UI Design", "Design Systems", "Web"],
  },
  {
    frame: "FRAME 03 — CAMPAIGN",
    swatch: "#0E6F5C",
    tag: "Eton College — Landing Pages",
    title: "Eton College Campaigns",
    description:
      "High-converting landing pages and UI screens paired with ad creatives for Google & Meta, driving measurable lead generation.",
    tags: ["Landing Pages", "Ad Creative", "CRO"],
  },
  {
    frame: "FRAME 04 — STUDIO",
    swatch: "#4B3F72",
    tag: "Design Solution — Freelance",
    title: "Design Solution Studio",
    description:
      "Ongoing freelance practice — logos, branding assets and product interfaces delivered for clients across industries since 2022.",
    tags: ["Branding", "UI/UX", "Illustration"],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-28 lg:py-32">
      <div className="container mb-14">
        <Reveal>
          <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-primary">
            ( 01 ) — Selected Work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            Brand systems, product interfaces & campaigns that ship.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-[13px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Full case studies on Behance
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>

      <div className="container grid grid-cols-1 gap-7 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article
              className="group overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ ["--tint" as string]: project.swatch }}
            >
              <div
                className="flex aspect-[16/10] flex-col justify-between p-4"
                style={{ backgroundColor: project.swatch }}
              >
                <span className="self-start rounded border border-white/40 px-2.5 py-1 font-mono text-[11px] tracking-wide text-white/90">
                  {project.frame}
                </span>
                <div className="flex items-end justify-between gap-2.5">
                  <span className="font-mono text-xs text-white">{project.tag}</span>
                  <span className="border-t border-white/35 pt-1.5 font-mono text-[11px] text-white/80">
                    {project.swatch}
                  </span>
                </div>
              </div>
              <div className="p-6 pb-7">
                <h3 className="mb-2.5 font-display text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-border px-2.5 py-1 font-mono text-[11.5px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
