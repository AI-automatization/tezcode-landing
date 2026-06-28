"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Decorative "AI agent ↔ customers" background for the hero.
 * A central AI agent exchanges data with 6 customer avatars arranged around it;
 * signal dots flow endlessly both ways on every link (request ↔ response) and
 * the agent core keeps pulsing — an always-working AI agent.
 *
 * Performance:
 *  - Pure SVG, scaling viewBox. Motion is declarative SMIL (browser-driven,
 *    no rAF loop). ~18 flowing dots + 1 pulse ring — negligible.
 *  - Honors prefers-reduced-motion: dots/pulse dropped, static diagram remains.
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */

const AI = { x: 600, y: 300 };
const AR = 38; // agent node radius
const CR = 27; // customer node radius

// 6 customers evenly placed on an ellipse around the agent.
const CUSTOMERS = [0, 60, 120, 180, 240, 300].map((deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: 600 + 410 * Math.cos(a), y: 300 + 205 * Math.sin(a) };
});

// Straight link from each customer edge to the agent edge.
const LINKS = CUSTOMERS.map((c) => {
  const dx = AI.x - c.x;
  const dy = AI.y - c.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const sx = c.x + ux * CR;
  const sy = c.y + uy * CR;
  const ex = AI.x - ux * AR;
  const ey = AI.y - uy * AR;
  return `M${sx.toFixed(1)} ${sy.toFixed(1)} L${ex.toFixed(1)} ${ey.toFixed(1)}`;
});

export function HeroAgentLink() {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  // Pause the SMIL animation when the hero is scrolled off-screen or the tab
  // is hidden — no wasted work while it's not visible.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || reduce) return;

    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations(),
      { threshold: 0 },
    );
    io.observe(svg);

    const onVisibility = () =>
      document.hidden ? svg.pauseAnimations() : svg.unpauseAnimations();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.62 }}
    >
      <svg
        ref={svgRef}
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="tcAgentGlow">
            <stop offset="0%" stopColor="rgba(212,160,23,0.45)" />
            <stop offset="100%" stopColor="rgba(212,160,23,0)" />
          </radialGradient>
          {CUSTOMERS.map((c, i) => (
            <clipPath key={i} id={`tcAvatar${i}`}>
              <circle cx={c.x} cy={c.y} r={CR} />
            </clipPath>
          ))}
        </defs>

        {/* Links */}
        <g stroke="rgba(90,130,255,0.3)" strokeWidth={1.4}>
          {LINKS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Endless bidirectional data flow on every link */}
        {!reduce &&
          LINKS.map((d, i) => (
            <g key={`f-${i}`}>
              {/* customer → agent (gold) */}
              <circle r={3.2} fill="var(--tc-gold)">
                <animateMotion dur={`${2.8 + i * 0.2}s`} repeatCount="indefinite" path={d} />
              </circle>
              {/* agent → customer (blue), reversed */}
              <circle r={3} fill="rgba(120,160,255,0.95)">
                <animateMotion
                  dur={`${3.1 + i * 0.2}s`}
                  begin={`${0.6 + i * 0.25}s`}
                  repeatCount="indefinite"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                  path={d}
                />
              </circle>
            </g>
          ))}

        {/* Customer avatars (filled silhouette clipped to a circle) */}
        {CUSTOMERS.map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r={CR} fill="rgba(28,38,66,0.9)" />
            <g clipPath={`url(#tcAvatar${i})`}>
              <svg
                x={c.x - CR}
                y={c.y - CR * 0.78}
                width={CR * 2}
                height={CR * 2}
                viewBox="0 0 24 24"
                fill="rgba(170,193,255,0.95)"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </g>
            <circle
              cx={c.x}
              cy={c.y}
              r={CR}
              fill="none"
              stroke="rgba(120,150,255,0.55)"
              strokeWidth={1.3}
            />
          </g>
        ))}

        {/* AI agent core */}
        <circle cx={AI.x} cy={AI.y} r={AR * 1.9} fill="url(#tcAgentGlow)" />
        <circle
          cx={AI.x}
          cy={AI.y}
          r={AR}
          fill="rgba(36,30,12,0.9)"
          stroke="rgba(212,160,23,0.75)"
          strokeWidth={1.6}
        />
        <svg
          x={AI.x - 17}
          y={AI.y - 17}
          width={34}
          height={34}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--tc-gold)"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
        {!reduce && (
          <circle cx={AI.x} cy={AI.y} r={AR} fill="none" stroke="var(--tc-gold)" strokeWidth={1.4}>
            <animate attributeName="r" values={`${AR};${AR + 22};${AR}`} dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
}
