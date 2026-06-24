"use client";

import { motion } from "motion/react";
import { Triangle, Atom, Zap, Database, Waves, Sparkles, Container, Server, CreditCard, Hexagon, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StackItem = { name: string; icon: LucideIcon | string };

const STACK: StackItem[] = [
  { name: "Next.js", icon: Triangle },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: Code2 },
  { name: "FastAPI", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind", icon: Waves },
  { name: "OpenAI", icon: Sparkles },
  { name: "Anthropic", icon: Sparkles },
  { name: "Docker", icon: Container },
  { name: "Railway", icon: Server },
  { name: "Stripe", icon: CreditCard },
  { name: "Vercel", icon: Triangle },
  { name: "Redis", icon: Database },
  { name: "Node.js", icon: Hexagon },
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
              className="w-12 h-12 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-2)] border border-[var(--tc-border)] flex items-center justify-center text-sm font-700 text-[var(--tc-text-secondary)] group-hover:text-[var(--tc-gold)] group-hover:border-[var(--tc-gold)]/40 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {typeof tech.icon === "string" ? tech.icon : (() => { const Icon = tech.icon as LucideIcon; return <Icon className="w-5 h-5" />; })()}
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
