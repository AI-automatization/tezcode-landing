"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { Search, Palette, Zap, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const HEADER: Record<Lang, { badge: string; title: string; titleHighlight: string; subtitle: string }> = {
  uz: {
    badge: "Bizning Jarayon",
    title: "4 qadamda",
    titleHighlight: "tayyor mahsulot",
    subtitle: "Ideyadan production'gacha — bir necha hafta. AI bilan tezroq, AI bilan ishonchli.",
  },
  ru: {
    badge: "Наш процесс",
    title: "Готовый продукт",
    titleHighlight: "за 4 шага",
    subtitle: "От идеи до production — несколько недель. С AI быстрее и надёжнее.",
  },
  en: {
    badge: "Our Process",
    title: "Ship a complete product",
    titleHighlight: "in 4 steps",
    subtitle: "From idea to production in a few weeks. Faster and more reliable with AI.",
  },
  ar: {
    badge: "عمليتنا",
    title: "منتج كامل",
    titleHighlight: "في 4 خطوات",
    subtitle: "من الفكرة إلى الإنتاج خلال أسابيع. أسرع وأكثر موثوقية مع AI.",
  },
  uk: {
    badge: "Наш процес",
    title: "Готовий продукт",
    titleHighlight: "за 4 кроки",
    subtitle: "Від ідеї до production — кілька тижнів. З AI швидше та надійніше.",
  },
};

const STEPS: { num: string; titleUz: string; titleRu: string; titleEn: string; descUz: string; descRu: string; descEn: string; icon: LucideIcon; color: string }[] = [
  {
    num: "01",
    titleUz: "Tushunamiz",
    titleRu: "Понимаем",
    titleEn: "Discover",
    descUz: "Biznesingizni o'rganib, bo'sh joylarni topamiz. 1 kun.",
    descRu: "Изучаем бизнес и находим возможности. 1 день.",
    descEn: "We map your business and spot opportunities. 1 day.",
    icon: Search,
    color: "blue",
  },
  {
    num: "02",
    titleUz: "Loyihalashtiramiz",
    titleRu: "Проектируем",
    titleEn: "Design",
    descUz: "Sizning brendinge mos yechim chizamiz. 2-3 kun.",
    descRu: "Создаём решение под ваш бренд. 2-3 дня.",
    descEn: "We design a solution tailored to your brand. 2-3 days.",
    icon: Palette,
    color: "gold",
  },
  {
    num: "03",
    titleUz: "Quramiz",
    titleRu: "Разрабатываем",
    titleEn: "Build",
    descUz: "AI yordamida tezda ishlab chiqamiz. 5-10 kun.",
    descRu: "Разрабатываем с помощью AI. 5-10 дней.",
    descEn: "We ship fast with AI engineers. 5-10 days.",
    icon: Zap,
    color: "purple",
  },
  {
    num: "04",
    titleUz: "Yetkazib beramiz",
    titleRu: "Запускаем",
    titleEn: "Launch",
    descUz: "Production'ga deploy + 30 kun bepul support.",
    descRu: "Деплой + 30 дней бесплатной поддержки.",
    descEn: "Production deploy + 30 days free support.",
    icon: Rocket,
    color: "emerald",
  },
];

const COLOR_MAP: Record<string, { text: string; ring: string; glow: string }> = {
  blue: {
    text: "text-[var(--tc-blue-text)]",
    ring: "border-[var(--tc-blue)]/40",
    glow: "rgba(0,64,255,0.18)",
  },
  gold: {
    text: "text-[var(--tc-gold)]",
    ring: "border-[var(--tc-gold)]/40",
    glow: "rgba(212,160,23,0.18)",
  },
  purple: {
    text: "text-purple-400",
    ring: "border-purple-400/40",
    glow: "rgba(168,85,247,0.18)",
  },
  emerald: {
    text: "text-emerald-400",
    ring: "border-emerald-400/40",
    glow: "rgba(52,211,153,0.18)",
  },
};

export function ProcessSteps() {
  const locale = useLocale() as Lang;
  const h = HEADER[locale] ?? HEADER.uz;

  function getTitle(step: typeof STEPS[number]) {
    if (locale === "ru") return step.titleRu;
    if (locale === "en" || locale === "ar" || locale === "uk") return step.titleEn;
    return step.titleUz;
  }
  function getDesc(step: typeof STEPS[number]) {
    if (locale === "ru") return step.descRu;
    if (locale === "en" || locale === "ar" || locale === "uk") return step.descEn;
    return step.descUz;
  }

  return (
    <section className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {h.badge}
          </div>
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {h.title}{" "}
            <span className="tc-text-gradient-gold">{h.titleHighlight}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
            {h.subtitle}
          </p>
        </Reveal>

        {/* Connecting line — desktop */}
        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--tc-blue), var(--tc-gold), rgb(168,85,247), rgb(52,211,153))",
              opacity: 0.4,
            }}
          />

          <RevealStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.15}
          >
            {STEPS.map((step) => {
              const c = COLOR_MAP[step.color];
              return (
                <RevealItem key={step.num}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors h-full"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--tc-radius-lg)]"
                      style={{
                        background: `radial-gradient(ellipse at top, ${c.glow}, transparent 70%)`,
                      }}
                    />

                    <div className="relative flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-full bg-[var(--tc-surface-0)] border-2 ${c.ring} flex items-center justify-center`}
                      >
                        {(() => { const Icon = step.icon; return <Icon className="w-6 h-6 text-white" />; })()}
                      </div>
                      <span
                        className={`text-4xl font-800 ${c.text} opacity-30`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <h3
                      className="relative text-xl font-700 text-white mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {getTitle(step)}
                    </h3>
                    <p className="relative text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                      {getDesc(step)}
                    </p>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
