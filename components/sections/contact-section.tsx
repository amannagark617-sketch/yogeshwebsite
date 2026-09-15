import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/60 py-24 lg:py-28">
      <div className="container">
        <Reveal>
          <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-primary">
            ( 05 ) — Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-14 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[66px]">
            Have a brand or
            <br />
            product to design? <em className="font-medium italic text-primary">Let&apos;s talk.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:yugrt21@gmail.com"
            className="group mb-14 inline-flex items-center gap-4 border-b-2 border-border pb-3.5 font-display text-2xl font-semibold transition-colors hover:border-primary hover:text-primary sm:text-4xl"
          >
            yugrt21@gmail.com
            <ArrowUpRight size={26} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <span className="mb-2.5 block font-mono text-[11.5px] uppercase text-muted-foreground/70">Phone</span>
              <a href="tel:+919368525764" className="text-base font-medium hover:text-primary">
                +91 93685 25764
              </a>
            </div>
            <div>
              <span className="mb-2.5 block font-mono text-[11.5px] uppercase text-muted-foreground/70">Location</span>
              <p className="text-base font-medium">Haldwani, Uttarakhand, India</p>
            </div>
            <div>
              <span className="mb-2.5 block font-mono text-[11.5px] uppercase text-muted-foreground/70">Elsewhere</span>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary"
                >
                  Behance ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
