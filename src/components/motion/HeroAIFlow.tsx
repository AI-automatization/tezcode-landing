"use client";

import { useReducedMotion } from "motion/react";

/**
 * Decorative "AI automation flow" diagram for the hero background:
 *   Mijoz (user) → AI core (working) → Operator + Chat
 * Signal dots flow along the connectors; the AI core pulses ("agent running").
 *
 * Performance:
 *  - Pure SVG with a scaling viewBox (no canvas, no rAF loop). Motion is done
 *    with declarative SMIL <animateMotion>/<animate> handled by the browser.
 *  - Only ~4 flowing dots + 1 pulse ring — negligible cost.
 *  - Honors prefers-reduced-motion: dots/pulse are dropped, diagram stays static.
 *  - aria-hidden + pointer-events-none; sits behind hero content.
 */

const P_USER_AI = "M232 300 C 360 272, 444 272, 552 300";
const P_AI_OP = "M646 282 C 792 214, 884 194, 974 172";
const P_AI_CHAT = "M646 318 C 792 386, 884 406, 974 428";

const ICON = {
  stroke: "rgba(175,198,255,0.92)",
  width: 1.8,
};

function Node({
  x,
  y,
  label,
  children,
  accent = false,
}: {
  x: number;
  y: number;
  label: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  const r = 44;
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="rgba(10,12,20,0.55)"
        stroke={accent ? "rgba(212,160,23,0.65)" : "rgba(120,150,255,0.4)"}
        strokeWidth={1.5}
      />
      <svg
        x={x - 16}
        y={y - 16}
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent ? "var(--tc-gold)" : ICON.stroke}
        strokeWidth={ICON.width}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
      <text
        x={x}
        y={y + r + 22}
        textAnchor="middle"
        fontSize={15}
        fill="rgba(150,170,220,0.7)"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </text>
    </g>
  );
}

export function HeroAIFlow() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Connectors */}
        <g stroke="rgba(90,130,255,0.28)" strokeWidth={1.5}>
          <path d={P_USER_AI} />
          <path d={P_AI_OP} />
          <path d={P_AI_CHAT} />
        </g>

        {/* Flowing signal dots (mijoz → AI → operator/chat) */}
        {!reduce && (
          <g fill="var(--tc-gold)">
            <circle r={4}>
              <animateMotion dur="2.6s" repeatCount="indefinite" path={P_USER_AI} />
            </circle>
            <circle r={4}>
              <animateMotion dur="2.6s" begin="1.3s" repeatCount="indefinite" path={P_USER_AI} />
            </circle>
            <circle r={3.5}>
              <animateMotion dur="3s" begin="0.5s" repeatCount="indefinite" path={P_AI_OP} />
            </circle>
            <circle r={3.5}>
              <animateMotion dur="3.2s" begin="1.7s" repeatCount="indefinite" path={P_AI_CHAT} />
            </circle>
          </g>
        )}

        {/* AI core pulse ring ("agent running") */}
        <circle cx={600} cy={300} r={44} fill="none" stroke="var(--tc-gold)" strokeWidth={1.5} opacity={0.5} />
        {!reduce && (
          <circle cx={600} cy={300} r={44} fill="none" stroke="var(--tc-gold)" strokeWidth={1.5}>
            <animate attributeName="r" values="44;62;44" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Nodes */}
        {/* Mijoz (user) */}
        <Node x={180} y={300} label="Mijoz">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Node>

        {/* AI core (bot) */}
        <Node x={600} y={300} label="AI agent" accent>
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </Node>

        {/* Operator (headset) */}
        <Node x={1020} y={160} label="Operator">
          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-5a9 9 0 0 1 18 0v5a1 1 0 0 1-1 1h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
        </Node>

        {/* Chat (message) */}
        <Node x={1020} y={440} label="Chat">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </Node>
      </svg>
    </div>
  );
}
