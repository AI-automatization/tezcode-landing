"use client";

import { LazyMotion, domAnimation } from "motion/react";

// LazyMotion loads only the DOM animation feature set (domAnimation) once, on
// demand, instead of bundling the full motion feature bundle into every route.
// All animated elements use the lightweight `m` component (not `motion`), so the
// heavy features tree-shake out — cutting a large chunk of client JS. Wrap the
// whole app so every `m.*` element resolves its features from this single
// provider. (domAnimation covers transforms, opacity, layout, exit animations —
// everything the site's Reveal/Tilt/marquee effects need.)
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
