const WORDS = [
  "Brand Identity",
  "UI/UX Design",
  "Design Systems",
  "Wireframing",
  "Social Creative",
  "Ad Creatives",
  "Print Design",
  "Visual Storytelling",
];

export function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`font-mono text-sm uppercase tracking-wide ${
              i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground/50"
            }`}
          >
            {word} ·
          </span>
        ))}
      </div>
    </div>
  );
}
