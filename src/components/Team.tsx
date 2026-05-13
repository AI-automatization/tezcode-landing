"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

export function Team() {
  const t = useTranslations("team");

  const name = t("members.bekzod.name");
  const role = t("members.bekzod.role");
  const bio = t("members.bekzod.bio");
  const telegram = t("members.bekzod.telegram");

  return (
    <section
      id="team"
      className="py-32 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden"
    >
      {/* Background accent */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-gold) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t("subtitle")}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent origin-center"
          />
        </Reveal>

        <Reveal>
          <Tilt3D intensity={4} className="max-w-3xl mx-auto rounded-[var(--tc-radius-xl)]">
            <div className="relative p-10 md:p-14 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)] overflow-hidden">
              {/* Inner border glow */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[var(--tc-radius-xl)] pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(212,160,23,0.06)",
                }}
              />

              {/* Founder badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
                FOUNDER · CEO
              </motion.div>

              <h3
                className="relative text-3xl md:text-5xl font-700 text-white mb-3 tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  transform: "translateZ(25px)",
                }}
              >
                {name}
              </h3>

              <p
                className="relative text-base md:text-lg font-500 text-[var(--tc-gold)] mb-6"
                style={{ transform: "translateZ(20px)" }}
              >
                {role}
              </p>

              <p
                className="relative text-base md:text-lg text-[var(--tc-text-secondary)] leading-relaxed mb-8 max-w-2xl"
                style={{ transform: "translateZ(15px)" }}
              >
                {bio}
              </p>

              {telegram && telegram.startsWith("@") && (
                <motion.a
                  href={`https://t.me/${telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-500 text-sm tc-glow-blue"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  {telegram}
                </motion.a>
              )}

              {/* Decorative corner accents */}
              <div className="absolute top-6 right-6 flex items-center gap-1 opacity-30">
                <div className="w-1 h-1 rounded-full bg-[var(--tc-gold)]" />
                <div className="w-1 h-1 rounded-full bg-[var(--tc-blue)]" />
                <div className="w-1 h-1 rounded-full bg-[var(--tc-gold)]" />
              </div>
            </div>
          </Tilt3D>
        </Reveal>

        {/* Hiring callout */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center p-8 rounded-[var(--tc-radius-lg)] border border-dashed border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/40 backdrop-blur-md max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 text-[var(--tc-gold)] text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
              {t("hiring.title")}
            </div>
            <p className="text-[var(--tc-text-secondary)] text-sm">
              {t("hiring.roles")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
