import { Reveal } from "@/components/reveal";

const TIMELINE = [
  {
    date: "Jul 2025 — Mar 2026",
    role: "UX & Creative Designer",
    company: "Buildway",
    points: [
      "Designed intuitive, visually appealing website layouts that enhanced UX and maintained brand consistency across digital platforms.",
      "Created marketing visuals, social creatives and promotional materials that communicated brand messaging effectively.",
      "Collaborated with cross-functional teams to align design solutions with business objectives and user needs.",
    ],
  },
  {
    date: "May 2024 — Feb 2025",
    role: "UI & Graphic Designer",
    company: "Eton College",
    points: [
      "Designed high-converting landing pages and UI screens that improved engagement and drove measurable lead generation.",
      "Produced social graphics, stories and carousels resulting in increased audience engagement across channels.",
      "Developed performance-driven ad creatives for Google and Meta, optimized across placement formats.",
    ],
  },
  {
    date: "May 2024 — Jan 2025",
    role: "Senior Graphic Designer",
    company: "The Lake Hill",
    points: [
      "Designed the full logo and brand guidelines for Kiyo Stays, establishing a refined identity from scratch.",
      "Created high-converting Meta & Google ad creatives delivering ~1000x return on ad spend.",
      "Maintained a premium, cohesive brand presence across menus, flyers, signage and social content.",
    ],
  },
  {
    date: "May 2022 — Aug 2023",
    role: "Junior Graphic Designer",
    company: "Ladder Media",
    points: [
      "Developed pitch decks, illustrations and storyboards for marketing and instructional content.",
      "Designed visually engaging presentations to communicate key messages to clients and stakeholders.",
      "Edited and retouched photography for suitability across formats and channels.",
    ],
  },
  {
    date: "Jan 2022 — Present",
    role: "Freelance Graphic Designer",
    company: "Design Solution",
    points: [
      "Delivered UI designs enhancing UX for web and mobile applications across client industries.",
      "Designed logos and complete branding assets to establish recognizable brand identities.",
      "Produced landing pages, illustrations and social creative focused on usability and visual appeal.",
    ],
  },
];

const EDUCATION = [
  { title: "Bachelor of Arts", place: "Kumaun University", time: "2019–2022" },
  { title: "Intermediate", place: "Maharishi Vidhya Mandir", time: "2018–2019" },
  { title: "Highschool", place: "Doon Modern Academy", time: "2016–2017" },
];

const CERTS = [
  { title: "Product Design Fellowship", place: "Next Leap", time: "Mar 2025" },
  { title: "Advanced 3D Animation & VFX", place: "Arena Animation", time: "Nov 2021" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24 lg:py-28">
      <div className="container mb-14">
        <Reveal>
          <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-primary">
            ( 03 ) — Experience
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            A career built one shipped brand at a time.
          </h2>
        </Reveal>
      </div>

      <div className="container">
        {TIMELINE.map((row, i) => (
          <Reveal key={row.company} delay={Math.min(i * 0.06, 0.3)}>
            <div
              className={`grid grid-cols-1 gap-3 border-t border-border py-8 sm:grid-cols-[200px_1fr] sm:gap-10 ${
                i === TIMELINE.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="pt-1 font-mono text-[13px] text-muted-foreground">{row.date}</div>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold tracking-tight">
                  {row.role} <span className="font-normal text-muted-foreground">— {row.company}</span>
                </h3>
                <ul className="flex max-w-2xl flex-col gap-2.5">
                  {row.points.map((point) => (
                    <li key={point} className="relative pl-5 text-[14.5px] leading-relaxed text-muted-foreground">
                      <span className="absolute left-0 top-[9px] h-px w-1.5 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="container mt-16 grid grid-cols-1 gap-10 border-t border-border pt-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h3 className="mb-6 font-display text-base font-semibold text-muted-foreground">Education</h3>
            {EDUCATION.map((item) => (
              <div key={item.title} className="flex items-baseline justify-between gap-4 border-t border-border py-4">
                <div className="flex flex-col gap-1">
                  <strong className="text-[15px] font-semibold">{item.title}</strong>
                  <span className="text-[13px] text-muted-foreground/70">{item.place}</span>
                </div>
                <time className="whitespace-nowrap font-mono text-[12.5px] tabular-nums text-muted-foreground/70">
                  {item.time}
                </time>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h3 className="mb-6 font-display text-base font-semibold text-muted-foreground">Certifications</h3>
            {CERTS.map((item) => (
              <div key={item.title} className="flex items-baseline justify-between gap-4 border-t border-border py-4">
                <div className="flex flex-col gap-1">
                  <strong className="text-[15px] font-semibold">{item.title}</strong>
                  <span className="text-[13px] text-muted-foreground/70">{item.place}</span>
                </div>
                <time className="whitespace-nowrap font-mono text-[12.5px] tabular-nums text-muted-foreground/70">
                  {item.time}
                </time>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
