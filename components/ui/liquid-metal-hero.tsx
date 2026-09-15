"use client";

import { LiquidMetal } from "@paper-design/shaders-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

/*
  The shader is tuned to this site's own palette rather than a stock preset:
  colorBack = paper, colorTint = studio emerald. No preset was used because
  several ship with warm/amber tones that would break the "no orange or
  yellow" rule for this project.
*/
const SHADER_COLOR_BACK = "#f5f4f0"; // --background / paper
const SHADER_COLOR_TINT = "#0e6f5c"; // --primary / studio emerald

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-28 pb-16 sm:pt-24">
      <LiquidMetal
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        colorBack={SHADER_COLOR_BACK}
        colorTint={SHADER_COLOR_TINT}
        shape="metaballs"
        repetition={4}
        softness={0.55}
        shiftRed={0.1}
        shiftBlue={0.14}
        distortion={0.16}
        contour={0.55}
        rotation={130}
        speed={0.55}
        scale={0.75}
        fit="cover"
      />
      {/* soften the shader under the copy so text stays legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/55 via-background/72 to-background/90"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {badge && (
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Badge
                variant="outline"
                className="border-foreground/20 bg-card/80 font-mono text-xs font-normal tracking-wide text-foreground backdrop-blur-sm"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1
              role="heading"
              aria-level={1}
              className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={onPrimaryCtaClick}
                size="lg"
                className="px-8 py-6 text-base font-semibold shadow-lg shadow-primary/10"
              >
                {primaryCtaLabel}
              </Button>
            </motion.div>

            {secondaryCtaLabel && onSecondaryCtaClick && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={onSecondaryCtaClick}
                  variant="outline"
                  size="lg"
                  className="border-foreground/25 bg-card/70 px-8 py-6 text-base font-semibold text-foreground backdrop-blur-sm hover:bg-accent"
                >
                  {secondaryCtaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-12" variants={itemVariants}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="border-foreground/12 bg-card/85 shadow-xl backdrop-blur-md">
                  <div className="p-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          className="flex items-center justify-center text-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          <p className="font-mono text-sm font-medium text-foreground">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
