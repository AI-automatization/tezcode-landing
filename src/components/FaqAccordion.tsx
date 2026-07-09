"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { RevealStagger, RevealItem } from "@/components/motion/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export type FaqItem = { q: string; a: string };

// Reusable visible FAQ accordion. Renders the SAME items that feed the page's
// FAQPage JSON-LD, so answer engines (Google AI Overviews, ChatGPT, Perplexity)
// see markup that matches the on-page content. Mirrors the service-page FAQ look.
export function FaqAccordion({
  badge,
  title,
  titleAccent,
  subtitle,
  items,
}: {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  items: FaqItem[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          {badge && (
            <span className="inline-block rounded-full bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] text-xs font-600 uppercase tracking-wide px-3 py-1 mb-4">
              {badge}
            </span>
          )}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-700 text-[var(--tc-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-[var(--tc-blue)]">{titleAccent}</span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-[var(--tc-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <RevealStagger className="space-y-3" stagger={0.08}>
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealItem key={i}>
                <div
                  className="tc-card overflow-hidden transition-colors"
                  style={isOpen ? { borderColor: "var(--tc-blue)" } : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-start"
                  >
                    <span
                      className="text-base md:text-lg font-600 text-[var(--tc-text-primary)] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className={[
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                        isOpen
                          ? "bg-[var(--tc-blue)] text-white"
                          : "bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)]",
                      ].join(" ")}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--tc-text-secondary)] leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
