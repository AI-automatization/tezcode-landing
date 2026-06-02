"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { CountUp } from "@/components/motion/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";

// Decorative, aria-hidden background. Lazy-load on the client so it doesn't
// block initial render/hydration (cuts unused JS + main-thread work).
const HeroBackground3D = dynamic(
  () =>
    import("@/components/motion/HeroBackground3D").then((m) => m.HeroBackground3D),
  { ssr: false },
);

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function Hero() {
  const t = useTranslations("hero");
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, 120]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden tc-perspective">
      <HeroBackground3D />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/60 backdrop-blur-md text-xs font-medium text-[var(--tc-text-secondary)] mb-8"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)]"
          />
          {t("badge")}
        </motion.div>

        {/* Headline — bigger, gradient. LCP element: must paint immediately,
            so it renders at full opacity (initial={false}) instead of being
            gated behind a JS opacity:0 -> 1 animation. */}
        <motion.h1
          initial={false}
          className="text-[clamp(3rem,8vw,7.5rem)] font-800 leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="tc-text-gradient-blue block">{t("headline")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.2)}
          className="text-lg md:text-2xl text-[var(--tc-text-secondary)] max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        {/* Risk reversal trust line */}
        <motion.p
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.3)}
          className="text-sm md:text-base text-[var(--tc-gold)] font-500 mb-12"
        >
          {t("trust")}
        </motion.p>

        {/* CTAs — magnetic */}
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={12}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-semibold text-sm overflow-hidden tc-glow-blue"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("cta_primary")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[var(--tc-blue)] via-[#3366ff] to-[var(--tc-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundSize: "200% 100%", animation: "tc-shimmer 3s linear infinite" }}
              />
            </motion.a>
          </Magnetic>
          <Magnetic strength={10}>
            <motion.a
              href="https://t.me/webdevelopertk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/40 backdrop-blur-md text-[var(--tc-text-primary)] font-semibold text-sm hover:bg-[var(--tc-surface-2)] transition-colors items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 text-[#26A5E4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {t("cta_secondary")}
            </motion.a>
          </Magnetic>
        </motion.div>

        <HeroStats t={t} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--tc-text-muted)] text-xs tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[var(--tc-border-bright)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function HeroStats({ t }: { t: ReturnType<typeof useTranslations<"hero">> }) {
  const stats: { value: number; suffix: string; label: string }[] = [
    { value: 50, suffix: "+", label: t("stat_clients") },
    { value: 8, suffix: "", label: t("stat_products") },
    { value: 150, suffix: "+", label: t("stat_projects") },
    { value: 5, suffix: "", label: t("stat_years") },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
      }}
      className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-16 max-w-4xl mx-auto"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          className="flex flex-col items-center gap-1"
        >
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
            duration={2.2}
            className="text-4xl md:text-6xl font-800 tc-text-gradient-gold tabular-nums"
          />
          <span className="text-xs md:text-sm text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mt-1" style={{ fontFamily: "var(--font-display)" }}>
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
