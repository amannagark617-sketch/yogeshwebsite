"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Animates in on mount rather than gating on scroll-intersection.
 * whileInView + IntersectionObserver proved unreliable for content
 * below the fold (sections could get stuck at opacity: 0 permanently
 * if the observer never fired) — content must be visible at rest,
 * animation is a bonus, never a gate.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 0.4) }}
    >
      {children}
    </motion.div>
  );
}
