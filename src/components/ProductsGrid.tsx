"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type DivisionKey =
  | "systems"
  | "custom"
  | "ai"
  | "teams"
  | "labs"
  | "academy";

const ICON_MAP: Record<DivisionKey, string> = {
  systems: "📦",
  custom: "🛠",
  ai: "🤖",
  teams: "👥",
  labs: "🧪",
  academy: "🎓",
};

const ACCENT_MAP: Record<
  DivisionKey,
  { ring: string; text: string; glow: string; gradient: string }
> = {
  systems: {
    ring: "rgba(0, 64, 255, 0.25)",
    text: "text-blue-400",
    glow: "rgba(0, 64, 255, 0.35)",
    gradient: "from-blue-500/20 to-transparent",
  },
  custom: {
    ring: "rgba(212, 160, 23, 0.25)",
    text: "text-[var(--tc-gold)]",
    glow: "rgba(212, 160, 23, 0.35)",
    gradient: "from-amber-500/20 to-transparent",
  },
  ai: {
    ring: "rgba(139, 92, 246, 0.25)",
    text: "text-purple-400",
    glow: "rgba(139, 92, 246, 0.35)",
    gradient: "from-purple-500/20 to-transparent",
  },
  teams: {
    ring: "rgba(52, 211, 153, 0.25)",
    text: "text-emerald-400",
    glow: "rgba(52, 211, 153, 0.35)",
    gradient: "from-emerald-500/20 to-transparent",
  },
  labs: {
    ring: "rgba(251, 146, 60, 0.25)",
    text: "text-orange-400",
    glow: "rgba(251, 146, 60, 0.35)",
    gradient: "from-orange-500/20 to-transparent",
  },
  academy: {
    ring: "rgba(244, 114, 182, 0.25)",
    text: "text-pink-400",
    glow: "rgba(244, 114, 182, 0.35)",
    gradient: "from-pink-500/20 to-transparent",
  },
};

export function ProductsGrid() {
  const t = useTranslations("divisions");

  const divisions: DivisionKey[] = [
    "systems",
    "custom",
    "ai",
    "teams",
    "labs",
    "academy",
  ];

  return (
    <section
      id="divisions"
      className="py-32 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden"
    >
      {/* Section background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--tc-blue) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
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

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <RevealItem key={d}>
              <DivisionCard division={d} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function DivisionCard({
  division,
  t,
}: {
  division: DivisionKey;
  t: ReturnType<typeof useTranslations<"divisions">>;
}) {
  const name = t(`${division}.name`);
  const tagline = t(`${division}.tagline`);
  const description = t(`${division}.description`);
  const products = t(`${division}.products`);
  const model = t(`${division}.model`);

  const accent = ACCENT_MAP[division];

  return (
    <Tilt3D
      intensity={6}
      className="group rounded-[var(--tc-radius-lg)] h-full"
    >
      <div
        className={[
          "relative p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)]",
          "bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)]",
          "hover:border-[var(--tc-border-bright)] transition-colors duration-300",
          "cursor-pointer h-full flex flex-col overflow-hidden",
        ].join(" ")}
        style={{ transform: "translateZ(0)" }}
      >
        {/* Top-left gradient blob — accent-colored */}
        <div
          aria-hidden
          className={`absolute -top-20 -left-20 w-48 h-48 rounded-full bg-gradient-radial ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
        />

        {/* Hover border glow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[var(--tc-radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${accent.ring}, 0 0 40px ${accent.glow}`,
          }}
        />

        {/* Icon */}
        <div
          className="relative mb-6 w-14 h-14 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-0)] flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
          style={{ transform: "translateZ(40px)" }}
        >
          {ICON_MAP[division]}
        </div>

        <h3
          className="relative text-2xl font-700 text-white mb-1 tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            transform: "translateZ(30px)",
          }}
        >
          {name}
        </h3>

        <p
          className={`relative text-sm font-500 mb-4 ${accent.text}`}
          style={{ transform: "translateZ(25px)" }}
        >
          {tagline}
        </p>

        <p
          className="relative text-sm text-[var(--tc-text-muted)] leading-relaxed mb-6 flex-1"
          style={{ transform: "translateZ(20px)" }}
        >
          {description}
        </p>

        <div
          className="relative pt-4 border-t border-[var(--tc-border)] space-y-1.5"
          style={{ transform: "translateZ(15px)" }}
        >
          <div className="text-xs text-[var(--tc-text-muted)]">
            <span className="font-500 text-[var(--tc-text-secondary)]">
              Mahsulot:
            </span>{" "}
            {products}
          </div>
          <div className="text-xs text-[var(--tc-text-muted)]">
            <span className="font-500 text-[var(--tc-text-secondary)]">
              Model:
            </span>{" "}
            {model}
          </div>
        </div>
      </div>
    </Tilt3D>
  );
}
