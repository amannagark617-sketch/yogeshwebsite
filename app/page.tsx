"use client";

import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Marquee } from "@/components/marquee";
import { StatsSection } from "@/components/sections/stats-section";
import { WorkSection } from "@/components/sections/work-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />

      <main id="top">
        <LiquidMetalHero
          badge="Available for select freelance & full-time roles"
          title="Crafting brands & interfaces people remember."
          subtitle="I'm Yogesh Rawat — a Creative Designer working across UI/UX and Brand Design. 4+ years turning business goals into visual systems, products and campaigns that convert."
          primaryCtaLabel="View Selected Work"
          secondaryCtaLabel="Start a project"
          onPrimaryCtaClick={() => scrollToId("#work")}
          onSecondaryCtaClick={() => scrollToId("#contact")}
          features={["Brand Identity Systems", "Product UI/UX", "Campaign & Ad Creative"]}
        />

        <MinimalistHero
          showNav={false}
          logoText="Yogesh Rawat"
          mainText="Every brand has one clear idea underneath the noise. My job is finding it — then giving it a visual language precise enough that it never needs explaining twice."
          readMoreLink="#work"
          readMoreLabel="See the work"
          imageAlt="Portrait of Yogesh Rawat, Creative Designer"
          overlayText={{ part1: "less noise,", part2: "more craft." }}
          socialLinks={[
            { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
            { icon: ExternalLink, href: "https://www.behance.net", label: "Behance" },
            { icon: Mail, href: "mailto:yugrt21@gmail.com", label: "Email" },
          ]}
          locationText="Haldwani, Uttarakhand, India"
        />

        <Marquee />
        <StatsSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
