import { Reveal } from "@/components/reveal";

const SKILL_GROUPS = [
  {
    index: "01",
    title: "Design Tools",
    description: "Figma, Adobe Photoshop, Illustrator, InDesign, Midjourney, ChatGPT & AI design workflows.",
    chips: ["Figma", "Photoshop", "Illustrator", "InDesign", "Midjourney", "AI Tools"],
  },
  {
    index: "02",
    title: "UX & UI",
    description: "Translating research and business goals into structured, usable product experiences.",
    chips: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Information Architecture", "Design Systems"],
  },
  {
    index: "03",
    title: "Visual & Brand",
    description: "Building cohesive identities and visual language across every customer touchpoint.",
    chips: ["Brand Identity", "Typography", "Visual Communication", "Social Design", "Print Design", "Ad Creatives"],
  },
  {
    index: "04",
    title: "Collaboration",
    description: "Working across disciplines to keep design decisions grounded in real objectives.",
    chips: ["Cross-functional Collab", "Stakeholder Mgmt", "Design Thinking", "Visual Storytelling"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-24 lg:py-32">
      <div className="container mb-14">
        <Reveal>
          <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-primary">
            ( 04 ) — Capabilities
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            Tools and skills I bring to every project.
          </h2>
        </Reveal>
      </div>

      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.07}>
            <div className="rounded border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <span className="font-mono text-xs text-muted-foreground/70">{group.index}</span>
              <h3 className="mb-2.5 mt-3.5 font-display text-lg font-semibold">{group.title}</h3>
              <p className="mb-4 text-[13.5px] leading-relaxed text-muted-foreground">
                {group.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[11.5px] text-muted-foreground"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
