"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Counts up on mount rather than gating on scroll-intersection —
 * see Reveal for why: an unreliable trigger here would leave the
 * number stuck at 0 forever instead of showing the real value.
 */
export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    motionValue.set(target);
  }, [motionValue, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
