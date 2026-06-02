"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type ProductKey =
  | "raos"
  | "ai_office"
  | "hamshirago"
  | "wewatch"
  | "workcontrol"
  | "ventra"
  | "ai_trade"
  | "savdo_builder";

const ICON_MAP: Record<ProductKey, string> = {
  raos: "🛍️",
  ai_office: "🤖",
  hamshirago: "🏥",
  wewatch: "🎬",
  workcontrol: "👥",
  ventra: "📊",
  ai_trade: "💹",
  savdo_builder: "🛒",
};

const STATUS_STYLE: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Beta: "bg-[var(--tc-blue)]/15 text-[var(--tc-blue-text)] border-[var(--tc-blue)]/30",
  Soon: "bg-[var(--tc-gold)]/15 text-[var(--tc-gold)] border-[var(--tc-gold)]/30",
};

const DIVISION_COLOR: Record<string, string> = {
  Systems: "text-blue-400",
  AI: "text-purple-400",
  Labs: "text-orange-400",
};

const PRODUCTION: ProductKey[] = ["raos", "ai_office", "hamshirago"];
const FUTURE: ProductKey[] = [
  "workcontrol",
  "ai_trade",
  "wewatch",
  "ventra",
  "savdo_builder",
];

export function ProductsShowcase() {
  const t = useTranslations("products");

  return (
    <section
      id="products"
      className="py-32 px-6 bg-[var(--tc-ink)] relative overflow-hidden"
    >
      {/* Section background — animated radial glows */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--tc-blue)] blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--tc-gold)] blur-[80px] pointer-events-none"
      />

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
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-blue)] to-transparent origin-center"
          />
        </Reveal>

        {/* Production — 3 big cards with 3D tilt */}
        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          stagger={0.12}
        >
          {PRODUCTION.map((p) => (
            <RevealItem key={p}>
              <ProductCardLarge product={p} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Future Pipeline divider */}
        <Reveal className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--tc-border)]" />
          <motion.div
            animate={{ boxShadow: [
              "0 0 0 0 rgba(212,160,23,0.4)",
              "0 0 0 8px rgba(212,160,23,0)",
            ] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--tc-surface-2)] border border-[var(--tc-border-bright)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)]" />
            <span className="text-xs font-500 text-[var(--tc-gold)] uppercase tracking-[0.2em]">
              Future Pipeline · R&D
            </span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--tc-border)]" />
        </Reveal>

        {/* Future — 5 small cards */}
        <RevealStagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          stagger={0.06}
        >
          {FUTURE.map((p) => (
            <RevealItem key={p}>
              <ProductCardSmall product={p} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ProductCardLarge({
  product,
  t,
}: {
  product: ProductKey;
  t: ReturnType<typeof useTranslations<"products">>;
}) {
  const name = t(`${product}.name`);
  const tagline = t(`${product}.tagline`);
  const description = t(`${product}.description`);
  const status = t(`${product}.status`);
  const division = t(`${product}.division`);
  const url = t(`${product}.url`);
  const statusLabel = t(`status_labels.${status}`);

  const statusClass = STATUS_STYLE[status] ?? STATUS_STYLE.Beta;
  const divisionColor = DIVISION_COLOR[division] ?? "text-[var(--tc-text-muted)]";

  const isExternal = url.startsWith("http");

  return (
    <Tilt3D
      intensity={7}
      className="group rounded-[var(--tc-radius-lg)] h-full"
    >
      <a
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="relative block p-8 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)] hover:border-[var(--tc-border-bright)] transition-colors duration-300 h-full flex flex-col overflow-hidden"
      >
        {/* Shimmer top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--tc-blue)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div
          className="flex items-start justify-between mb-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="w-16 h-16 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-0)] flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {ICON_MAP[product]}
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full font-500 border px-2.5 py-0.5 text-[10px] ${statusClass}`}
          >
            <span className="w-1 h-1 rounded-full bg-current" />
            {statusLabel}
          </span>
        </div>

        <h3
          className="text-3xl font-700 text-white mb-1 tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            transform: "translateZ(25px)",
          }}
        >
          {name}
        </h3>

        <p
          className={`text-sm font-500 mb-5 ${divisionColor}`}
          style={{ transform: "translateZ(20px)" }}
        >
          {tagline}
        </p>

        <p
          className="text-sm text-[var(--tc-text-muted)] leading-relaxed mb-6 flex-1"
          style={{ transform: "translateZ(15px)" }}
        >
          {description}
        </p>

        <div
          className="pt-4 border-t border-[var(--tc-border)] flex items-center justify-between text-xs"
          style={{ transform: "translateZ(10px)" }}
        >
          <span className="text-[var(--tc-text-muted)] uppercase tracking-[0.2em]">
            {division}
          </span>
          <span className="text-[var(--tc-blue-text)] opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 font-500">
            {isExternal ? "Saytga" : "Demo so'rang"}
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>
    </Tilt3D>
  );
}

function ProductCardSmall({
  product,
  t,
}: {
  product: ProductKey;
  t: ReturnType<typeof useTranslations<"products">>;
}) {
  const name = t(`${product}.name`);
  const tagline = t(`${product}.tagline`);
  const status = t(`${product}.status`);
  const division = t(`${product}.division`);
  const url = t(`${product}.url`);
  const statusLabel = t(`status_labels.${status}`);

  const statusClass = STATUS_STYLE[status] ?? STATUS_STYLE.Beta;
  const divisionColor = DIVISION_COLOR[division] ?? "text-[var(--tc-text-muted)]";

  const isExternal = url.startsWith("http");

  return (
    <motion.a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative block p-4 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)] hover:border-[var(--tc-border-bright)] transition-colors h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] flex items-center justify-center text-lg">
          {ICON_MAP[product]}
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full font-500 border px-1.5 py-0 text-[9px] ${statusClass}`}
        >
          <span className="w-1 h-1 rounded-full bg-current" />
          {statusLabel}
        </span>
      </div>

      <h3
        className="text-sm font-700 text-white mb-0.5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </h3>
      <p className={`text-[10px] font-500 ${divisionColor}`}>{tagline}</p>
    </motion.a>
  );
}
