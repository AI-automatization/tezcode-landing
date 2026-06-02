"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

const ITEMS = [
  { key: "dilfuza", photo: "/customers/customer-1.jpg", accent: "amber" },
  { key: "aziz", photo: "/customers/customer-2.jpg", accent: "blue" },
  { key: "munira", photo: "/customers/customer-3.jpg", accent: "emerald" },
] as const;

const ACCENT: Record<string, { text: string; ring: string; glow: string }> = {
  amber: {
    text: "text-[var(--tc-gold)]",
    ring: "ring-[var(--tc-gold)]/40",
    glow: "rgba(212,160,23,0.20)",
  },
  blue: {
    text: "text-[var(--tc-blue-text)]",
    ring: "ring-[var(--tc-blue)]/40",
    glow: "rgba(0,64,255,0.20)",
  },
  emerald: {
    text: "text-emerald-400",
    ring: "ring-emerald-400/40",
    glow: "rgba(52,211,153,0.20)",
  },
};

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="py-32 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
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

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {ITEMS.map((item) => {
            const accent = ACCENT[item.accent];
            const name = t(`items.${item.key}.name`);
            const role = t(`items.${item.key}.role`);
            const quote = t(`items.${item.key}.quote`);
            const metric = t(`items.${item.key}.metric`);

            return (
              <RevealItem key={item.key}>
                <Tilt3D
                  intensity={5}
                  className="group rounded-[var(--tc-radius-lg)] h-full"
                >
                  <div className="relative p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors duration-300 h-full flex flex-col overflow-hidden">
                    {/* Accent glow on hover */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at top right, ${accent.glow}, transparent 60%)`,
                      }}
                    />

                    <div
                      className="relative flex items-start gap-4 mb-5"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div
                        className={`relative shrink-0 w-14 h-14 rounded-full overflow-hidden ring-2 ${accent.ring}`}
                      >
                        <Image
                          src={item.photo}
                          alt={name}
                          width={56}
                          height={56}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-white font-700 text-base"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {name}
                        </div>
                        <div className="text-xs text-[var(--tc-text-muted)] mt-0.5">
                          {role}
                        </div>
                      </div>
                    </div>

                    <blockquote
                      className="relative text-[var(--tc-text-secondary)] text-base leading-relaxed flex-1 mb-6 pl-5"
                      style={{
                        fontFamily: "var(--font-display)",
                        transform: "translateZ(20px)",
                      }}
                    >
                      <span
                        className={`absolute left-0 top-0 text-3xl ${accent.text} leading-none font-700`}
                      >
                        “
                      </span>
                      {quote}
                    </blockquote>

                    <div
                      className="relative pt-4 border-t border-[var(--tc-border)] flex items-center justify-between"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <span className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em]">
                        Natija
                      </span>
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`font-700 text-2xl ${accent.text}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {metric}
                      </motion.span>
                    </div>
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
