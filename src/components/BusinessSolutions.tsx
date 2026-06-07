"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

type SolutionKey = "store" | "office" | "clinic" | "custom";

const SOLUTION_ACCENTS: Record<
  SolutionKey,
  { icon: string; color: string; glow: string }
> = {
  store: {
    icon: "🛍️",
    color: "from-[var(--tc-blue)] to-blue-600",
    glow: "rgba(0, 64, 255, 0.18)",
  },
  office: {
    icon: "🏢",
    color: "from-[var(--tc-gold)] to-yellow-600",
    glow: "rgba(212, 160, 23, 0.18)",
  },
  clinic: {
    icon: "🏥",
    color: "from-emerald-500 to-emerald-600",
    glow: "rgba(34, 197, 94, 0.18)",
  },
  custom: {
    icon: "🛠️",
    color: "from-purple-500 to-violet-600",
    glow: "rgba(139, 92, 246, 0.18)",
  },
};

export function BusinessSolutions() {
  const t = useTranslations("solutions");
  const solutions: SolutionKey[] = ["store", "office", "clinic", "custom"];

  return (
    <section id="solutions" className="scroll-mt-24 py-32 px-6 bg-[var(--tc-ink)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[var(--tc-border)] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-2xl mb-20">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => {
            const accent = SOLUTION_ACCENTS[solution];
            return (
              <RevealItem key={solution} className={i === 1 ? "md:mt-12" : ""}>
                <Tilt3D
                  intensity={5}
                  className="group rounded-[var(--tc-radius-xl)]"
                >
                  <div
                    className={[
                      "relative p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)]",
                      "bg-[var(--tc-surface-1)] hover:border-[var(--tc-border-bright)]",
                      "transition-colors duration-500 overflow-hidden",
                    ].join(" ")}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 30% 50%, ${accent.glow}, transparent 70%)`,
                      }}
                    />

                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.1 }}
                      className={`relative w-16 h-16 rounded-[var(--tc-radius-md)] bg-gradient-to-br ${accent.color} flex items-center justify-center text-3xl mb-6`}
                      style={{ transform: "translateZ(40px)" }}
                    >
                      {accent.icon}
                    </motion.div>

                    <h3
                      className="relative text-2xl md:text-3xl font-600 text-[var(--tc-text-primary)] mb-3 tracking-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        transform: "translateZ(25px)",
                      }}
                    >
                      {t(`${solution}.title`)}
                    </h3>
                    <p
                      className="relative text-[var(--tc-text-secondary)] leading-relaxed"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {t(`${solution}.description`)}
                    </p>

                    <span
                      className="absolute top-6 right-6 text-[var(--tc-text-muted)] text-5xl font-800 select-none opacity-10 group-hover:opacity-30 transition-opacity"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Tilt3D>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
