import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";

const STATS = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 6, suffix: "", label: "Studios & brands worked with" },
  { value: 1000, suffix: "x", label: "Best ROAS delivered on ad creative" },
  { value: 10, suffix: "+", label: "Design tools & AI workflows mastered" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/60" aria-label="Highlights">
      <div className="container grid grid-cols-2 gap-8 py-11 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div className="flex flex-col gap-2">
              <p className="font-display text-4xl font-medium tracking-tight lg:text-5xl">
                <Counter target={stat.value} />
                <span className="ml-0.5 font-display text-2xl font-medium text-primary lg:text-3xl">
                  {stat.suffix}
                </span>
              </p>
              <p className="max-w-[20ch] text-[13px] text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
