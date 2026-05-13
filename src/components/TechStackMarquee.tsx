"use client";

import { motion } from "motion/react";

const STACK = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🌊" },
  { name: "OpenAI", icon: "✦" },
  { name: "Anthropic", icon: "△" },
  { name: "Docker", icon: "🐋" },
  { name: "Railway", icon: "🚂" },
  { name: "Stripe", icon: "S" },
  { name: "Vercel", icon: "▲" },
  { name: "Redis", icon: "♦" },
  { name: "Node.js", icon: "⬢" },
];

export function TechStackMarquee() {
  return (
    <section
      className="relative py-12 bg-[var(--tc-ink)] border-y border-[var(--tc-border)] overflow-hidden"
      aria-label="Technology stack"
    >
      {/* Edge fades */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--tc-ink), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--tc-ink), transparent)",
        }}
      />

      <div className="text-center mb-8 text-xs uppercase tracking-[0.3em] text-[var(--tc-text-muted)]">
        Our Technology Stack
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex items-center gap-12 whitespace-nowrap will-change-transform"
      >
        {[...STACK, ...STACK].map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 group"
          >
            <span
              className="w-12 h-12 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-2)] border border-[var(--tc-border)] flex items-center justify-center text-xl font-700 text-[var(--tc-text-secondary)] group-hover:text-[var(--tc-gold)] group-hover:border-[var(--tc-gold)]/40 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tech.icon}
            </span>
            <span
              className="text-base font-500 text-[var(--tc-text-secondary)] group-hover:text-[var(--tc-text-primary)] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
