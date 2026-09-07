"use client";

import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { m } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  // Initialize at the FINAL value so the server-rendered HTML (and any no-JS /
  // crawler / LLM / pre-hydration paint) shows the real number, not "0". The
  // count-up animation resets to 0 and runs only on the client once in view.
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      motionValue.set(0);
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
      });
      return () => controls.stop();
    }
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <m.span>{rounded}</m.span>
      {suffix}
    </span>
  );
}
