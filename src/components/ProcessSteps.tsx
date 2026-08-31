"use client";

import { m } from "motion/react";
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
    subtitle: "От идеи до production — несколько недель. С ИИ быстрее и надёжнее.",
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

const STEPS: { num: string; titleUz: string; titleRu: string; titleEn: string; descUz: string; descRu: string; descEn: string; icon: LucideIcon }[] = [
  {
    num: "01",
    titleUz: "Tushunamiz",
    titleRu: "Понимаем",
    titleEn: "Discover",
    descUz: "Biznesingizni o'rganib, bo'sh joylarni topamiz. 1 kun.",
    descRu: "Изучаем бизнес и находим возможности. 1 день.",
    descEn: "We map your business and spot opportunities. 1 day.",
    icon: Search,
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
  },
  {
    num: "03",
    titleUz: "Quramiz",
    titleRu: "Разрабатываем",
    titleEn: "Build",
    descUz: "AI yordamida tezda ishlab chiqamiz. 5-10 kun.",
    descRu: "Разрабатываем с помощью ИИ. 5-10 дней.",
    descEn: "We ship fast with AI engineers. 5-10 days.",
    icon: Zap,
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
  },
];

// Pull a trailing timing mention ("1 kun." / "2-3 дня." / "5-10 days.")
// out of the description so it can render as a muted pill.
const TIMING_RE = /^(.*?)(\d[\d\s\-–]*\s*(?:kun|день|дня|дней|day|days))\.?\s*$/i;

function splitTiming(desc: string): { body: string; timing: string | null } {
  const m = desc.match(TIMING_RE);
  if (!m) return { body: desc, timing: null };
  return { body: m[1].trim(), timing: m[2].trim() };
}

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
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <span className="tc-chip">{h.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {h.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{h.titleHighlight}</span>
          </h2>
          <p className="text-lg text-[var(--tc-text-muted)] max-w-2xl mx-auto leading-relaxed">
            {h.subtitle}
          </p>
        </Reveal>

        <div className="relative">
          {/* Connecting dashed line — desktop, behind the number circles */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t border-dashed border-[var(--tc-border-bright)]"
          />

          <RevealStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.15}
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              const { body, timing } = splitTiming(getDesc(step));
              return (
                <RevealItem key={step.num}>
                  <m.div
                    whileHover={{ y: -4 }}
                    className="tc-card tc-card-hover relative p-6 h-full"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-full bg-[var(--tc-blue-dim)] flex items-center justify-center">
                        <span
                          className="text-lg font-800 text-[var(--tc-blue-text)]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <Icon className="w-5 h-5 text-[var(--tc-text-muted)]" strokeWidth={1.75} />
                    </div>

                    <h3
                      className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {getTitle(step)}
                    </h3>
                    <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                      {body}
                    </p>
                    {timing && (
                      <span className="mt-4 inline-flex items-center rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-2)] px-3 py-1 text-xs font-500 text-[var(--tc-text-muted)]">
                        {timing}
                      </span>
                    )}
                  </m.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
