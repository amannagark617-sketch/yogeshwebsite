import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24 lg:py-32">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[70px]">
        <Reveal>
          <div className="crop-marks relative mx-auto aspect-[4/5] max-w-[320px] overflow-hidden rounded border border-border lg:max-w-none">
            <span className="ck ck-tl" />
            <span className="ck ck-tr" />
            <span className="ck ck-bl" />
            <span className="ck ck-br" />
            <div className="absolute inset-0 grid place-items-center bg-secondary">
              <span className="font-display text-[22vw] font-semibold tracking-tight text-foreground/[0.09] lg:text-[9rem]">
                YR
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2 rounded border border-border bg-card px-3.5 py-2 text-[12.5px] text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              Haldwani, Uttarakhand
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-primary">
              ( 02 ) — About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-6 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-[33px]">
              I turn business objectives into visual narratives that move people — and metrics.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Creative Designer with 4+ years of experience delivering UI/UX design, brand
              identity and visual communication across digital and print platforms. I collaborate
              closely with cross-functional teams, produce high-impact social creative, and build
              cohesive design systems from the ground up.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Proficient in Figma, Adobe Photoshop, Illustrator and InDesign — and fluent in
              AI-assisted workflows like Midjourney and ChatGPT to accelerate ideation without
              sacrificing craft.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="my-8 flex flex-wrap gap-8 border-t border-border pt-6">
              {[
                { label: "Based in", value: "Haldwani, Uttarakhand, IN" },
                { label: "Focus", value: "UI/UX & Brand Design" },
                { label: "Currently", value: "Open to new work" },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11.5px] uppercase text-muted-foreground/70">
                    {fact.label}
                  </span>
                  <strong className="text-[14.5px] font-semibold">{fact.value}</strong>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center rounded border border-border px-5 py-3.5 text-[14.5px] font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
