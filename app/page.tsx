"use client";

import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
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
