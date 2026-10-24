"use client";

import { m } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import {
  ArrowRight,
  Bot,
  Check,
  Globe,
  Send,
  Workflow,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { HeroWorkStack } from "@/components/hero-work/HeroWorkStack";

// IT Park Uzbekistan resident trust chip — localized "resident" word.
const RESIDENT_LABEL: Record<string, string> = {
  uz: "IT Park Uzbekistan rezidenti",
  ru: "Резидент IT Park Uzbekistan",
  en: "IT Park Uzbekistan resident",
  ar: "مقيم في IT Park Uzbekistan",
  uk: "Резидент IT Park Uzbekistan",
};

// Direction chips under the subheadline — the 4 things visitors actually
// search for ("sayt", "bot", "chatbot", "CRM"), each linking to its page.
const DIRECTIONS = [
  { key: "dir_web", href: "/tezcode-custom", icon: Globe },
  { key: "dir_bot", href: "/telegram-bot-biznes", icon: Send },
  { key: "dir_ai", href: "/ai-chatbot", icon: Bot },
  { key: "dir_crm", href: "/crm-integratsiya", icon: Workflow },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const residentLabel = RESIDENT_LABEL[locale] ?? RESIDENT_LABEL.uz;
  const trustParts = t("trust")
    .split("·")
    .map((s) => s.replace(/[✓✔]/g, "").trim())
    .filter(Boolean);

  return (
    <section className="relative pt-32 sm:pt-36 pb-16 px-6 bg-[var(--tc-ink)] overflow-hidden">
      {/* Faint grid backdrop */}
      <div aria-hidden className="tc-grid-bg absolute inset-0" />
      {/* One soft blue blob, top-right */}
      <div
        aria-hidden
        className="absolute -top-40 end-[-12%] w-[36rem] h-[36rem] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(0,64,255,0.06)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* ── LEFT: text ── */}
          <div className="text-center lg:text-start">
            {/* Badge */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0)}
              className="tc-chip mb-7"
            >
              <m.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, var(--tc-blue), #7c3aed)" }}
              />
              {t("badge")}
            </m.div>

            {/* Headline — LCP: paints immediately (initial={false}) */}
            <m.h1
              initial={false}
              className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-800 tracking-tight sm:leading-[1.05] text-[var(--tc-text-primary)] mb-6 break-words"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("headline")}
            </m.h1>

            {/* Subheadline */}
            <m.p
              initial={false}
              animate={fadeUp.visible(0.15)}
              className="text-lg text-[var(--tc-text-secondary)] max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              {t("subheadline")}
            </m.p>

            {/* Direction chips — "sayt / bot / chatbot / CRM" self-selection */}
            <m.nav
              initial={false}
              animate={fadeUp.visible(0.2)}
              aria-label={t("directions_aria")}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              {DIRECTIONS.map(({ key, href, icon: Icon }) => (
                <Link
                  key={key}
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] px-3.5 py-1.5 text-[13px] font-500 text-[var(--tc-text-secondary)] transition-colors hover:border-[var(--tc-blue)] hover:text-[var(--tc-blue-text)]"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 text-[var(--tc-blue-text)]" strokeWidth={2} />
                  {t(key)}
                </Link>
              ))}
            </m.nav>

            {/* Risk-reversal trust checkmarks */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0.25)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-9"
            >
              {trustParts.map((part) => (
                <span
                  key={part}
                  className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--tc-text-secondary)]"
                >
                  <Check className="w-4 h-4 shrink-0 text-[var(--tc-success)]" strokeWidth={2.5} />
                  {part}
                </span>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0.35)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4"
            >
              <m.a
                href="/aloqa"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tc-btn-primary text-sm"
              >
                {t("cta_primary")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </m.a>
              {/* Telegram is where most leads actually start a conversation —
                  clicks are tracked as contact_click by the global listener in
                  Analytics.tsx (any t.me link), so no handler is needed here. */}
              <m.a
                href="https://t.me/tezcode_managament"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tc-btn-secondary text-sm"
              >
                <Send className="w-4 h-4 text-[var(--tc-blue-text)]" />
                {t("cta_secondary")}
              </m.a>
            </m.div>

            {/* IT Park resident badge */}
            <m.a
              href="/biz-haqimizda"
              initial={false}
              animate={fadeUp.visible(0.45)}
              className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-500 text-[var(--tc-success)] transition-colors"
              style={{
                background: "rgba(5,150,105,0.08)",
                border: "1px solid rgba(5,150,105,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)] animate-pulse" />
              {residentLabel}
              <span className="opacity-50">·</span>
              <span className="opacity-80">№6237</span>
            </m.a>
          </div>

          {/* ── RIGHT: who on the team builds what, one device per project ── */}
          <HeroWorkStack />
        </div>

        <HeroStats t={t} />
      </div>
    </section>
  );
}

function HeroStats({ t }: { t: ReturnType<typeof useTranslations<"hero">> }) {
  const stats: { value: number; suffix: string; label: string }[] = [
    { value: 50, suffix: "+", label: t("stat_clients") },
    { value: 8, suffix: "", label: t("stat_products") },
    { value: 150, suffix: "+", label: t("stat_projects") },
    { value: 5, suffix: "+", label: t("stat_years") },
  ];

  return (
    <m.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="tc-card rounded-[24px] mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--tc-border)] overflow-hidden"
    >
      {stats.map((stat, i) => (
        <div key={i} className="p-6 text-center">
          <div style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-4xl font-800 text-[var(--tc-text-primary)] tabular-nums">
              {stat.value}
              {stat.suffix}
            </span>
          </div>
          <div className="text-xs uppercase tracking-widest text-[var(--tc-text-muted)] mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </m.div>
  );
}
