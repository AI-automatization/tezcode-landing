"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { m } from "motion/react";
import { Bot, Inbox, type LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";
type FilterKey = "all" | "retail" | "clinic" | "custom";

type Case = {
  slug: string;
  icon: LucideIcon;
  category: Exclude<FilterKey, "all">;
  accent: "amber" | "blue" | "emerald";
  // Named clients show their real logo instead of the sector icon.
  logo?: { src: string; width: number; height: number };
};

// TODO(Sardor): mijoz nomi va rozilik — real mijoz nomlari va roziligi
// olingach, sektor yorliqlari o'rniga qo'yiladi. Stok foto mijoz sifatida
// ko'rsatilmaydi — o'rniga sektor ikonkasi ishlatiladi.
const CASES: readonly Case[] = [
  { slug: "hoffen", icon: Bot, category: "custom", accent: "blue", logo: { src: "/cases/hoffen/logo.png", width: 346, height: 79 } },
] as const;

const ACCENT: Record<Case["accent"], { text: string; ring: string; bg: string }> = {
  amber: {
    text: "text-[var(--tc-gold)]",
    ring: "ring-[var(--tc-gold)]/30",
    bg: "bg-[var(--tc-gold-dim)]",
  },
  blue: {
    text: "text-[var(--tc-blue-text)]",
    ring: "ring-[var(--tc-blue)]/30",
    bg: "bg-[var(--tc-blue-dim)]",
  },
  emerald: {
    text: "text-[var(--tc-success)]",
    ring: "ring-[var(--tc-success)]/30",
    bg: "bg-[rgba(5,150,105,0.10)]",
  },
};

type CopyShape = {
  badge: string;
  title: string;
  subtitle: string;
  filterAll: string;
  filterRetail: string;
  filterClinic: string;
  filterCustom: string;
  readMore: string;
  resultLabel: string;
  cards: Record<string, {
    name: string;
    role: string;
    product: string;
    headline: string;
    metric: string;
    metricCaption: string;
  }>;
};

const COPY: Record<Lang, CopyShape> = {
  uz: {
    badge: "Keyslar",
    title: "Amaliy natijalar — real loyihalarimiz",
    subtitle:
      "Mijozlarimiz uchun qurgan tizimlarimiz: qanday muammo bilan kelishdi, nima qurdik va u qanday ishlayapti.",
    filterAll: "Hammasi",
    filterRetail: "Savdo",
    filterClinic: "Klinika",
    filterCustom: "Custom",
    readMore: "To'liq o'qish",
    resultLabel: "Natija",
    cards: {
      "hoffen": {
        name: "Hoffen",
        role: "Avtokimyo ishlab chiqaruvchi · Toshkent",
        product: "AI agentlar",
        headline: "Savdo, ombor, moliya va HR uchun 7 ta AI agent Telegram'da",
        metric: "7 ta agent",
        metricCaption: "har kuni 80+ avtomatik ish",
      },
    },
  },
  ru: {
    badge: "Кейсы",
    title: "Практические результаты — наши реальные проекты",
    subtitle:
      "Системы, которые мы построили для клиентов: с какой задачей пришли, что мы сделали и как это работает.",
    filterAll: "Все",
    filterRetail: "Торговля",
    filterClinic: "Клиника",
    filterCustom: "Кастом",
    readMore: "Читать полностью",
    resultLabel: "Результат",
    cards: {
      "hoffen": {
        name: "Hoffen",
        role: "Производитель автохимии · Ташкент",
        product: "ИИ-агенты",
        headline: "7 ИИ-агентов в Telegram для продаж, склада, финансов и HR",
        metric: "7 агентов",
        metricCaption: "80+ автоматических задач в день",
      },
    },
  },
  en: {
    badge: "Case Studies",
    title: "Practical results — our real projects",
    subtitle:
      "Systems we built for our clients: the problem they came with, what we built and how it works.",
    filterAll: "All",
    filterRetail: "Retail",
    filterClinic: "Clinic",
    filterCustom: "Custom",
    readMore: "Read full story",
    resultLabel: "Result",
    cards: {
      "hoffen": {
        name: "Hoffen",
        role: "Automotive chemicals maker · Tashkent",
        product: "AI agents",
        headline: "7 AI agents in Telegram for sales, inventory, finance and HR",
        metric: "7 agents",
        metricCaption: "80+ automations every day",
      },
    },
  },
  ar: {
    badge: "دراسات الحالة",
    title: "نتائج حقيقية — أصحاب أعمال حقيقيون",
    subtitle:
      "أنظمة بنيناها لعملائنا: المشكلة التي جاؤوا بها، وما بنيناه، وكيف يعمل.",
    filterAll: "الكل",
    filterRetail: "تجزئة",
    filterClinic: "عيادة",
    filterCustom: "مخصص",
    readMore: "اقرأ المقال كاملاً",
    resultLabel: "النتيجة",
    cards: {
      "hoffen": {
        name: "Hoffen",
        role: "مصنّع كيماويات السيارات · طشقند",
        product: "وكلاء ذكاء اصطناعي",
        headline: "7 وكلاء ذكاء اصطناعي في تيليغرام للمبيعات والمخزون والمالية والموارد البشرية",
        metric: "7 وكلاء",
        metricCaption: "أكثر من 80 مهمة آلية يوميًا",
      },
    },
  },
  uk: {
    badge: "Кейси",
    title: "Реальні результати — реальні підприємці",
    subtitle:
      "Системи, які ми побудували для клієнтів: з якою задачею прийшли, що ми зробили і як це працює.",
    filterAll: "Усі",
    filterRetail: "Торгівля",
    filterClinic: "Клініка",
    filterCustom: "Кастом",
    readMore: "Читати повністю",
    resultLabel: "Результат",
    cards: {
      "hoffen": {
        name: "Hoffen",
        role: "Виробник автохімії · Ташкент",
        product: "AI-агенти",
        headline: "7 AI-агентів у Telegram для продажів, складу, фінансів і HR",
        metric: "7 агентів",
        metricCaption: "80+ автоматичних задач щодня",
      },
    },
  },
};

const EVIDENCE_NOTE: Record<Lang, string> = {
  uz: "Ayrim keyslarda mijoz nomi uning roziligisiz ko'rsatilmaydi. Ko'rsatkichlar mijoz tasdig'i va loyiha hisobotlari bilan yangilanadi.",
  ru: "В части кейсов имя клиента не указано без его согласия. Показатели обновляются по подтверждению клиента и отчётам проекта.",
  en: "Some cases omit the client's name without their consent. Metrics are updated with client confirmation and project reports.",
  ar: "في بعض الحالات لا يُذكر اسم العميل دون موافقته. يتم تحديث المؤشرات بعد تأكيد العميل وتقارير المشروع.",
  uk: "У частині кейсів ім'я клієнта не вказано без його згоди. Показники оновлюються після підтвердження клієнта та звітів проєкту.",
};

export function CaseStudiesIndexClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = useMemo(
    () => (filter === "all" ? CASES : CASES.filter((c) => c.category === filter)),
    [filter],
  );

  // Only offer a category filter when at least one case is in it; the whole
  // bar is hidden while every case sits in a single category.
  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.filterAll },
    { key: "retail", label: t.filterRetail },
    { key: "clinic", label: t.filterClinic },
    { key: "custom", label: t.filterCustom },
  ].filter((f) => f.key === "all" || CASES.some((c) => c.category === f.key)) as { key: FilterKey; label: string }[];

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] pt-24 pb-28 overflow-hidden"
    >
      {/* Faint grid background */}
      <div aria-hidden className="tc-grid-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <Reveal className="text-center mb-16">
          <div className="tc-chip mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]" />
            {t.badge}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-800 mb-6 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h1>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <p className="mt-4 text-xs text-[var(--tc-text-muted)] max-w-2xl mx-auto leading-relaxed">
            {EVIDENCE_NOTE[locale as Lang] ?? EVIDENCE_NOTE.uz}
          </p>
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-blue)] to-transparent origin-center"
          />
        </Reveal>

        {/* Filters */}
        {filters.length > 2 && (
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-500 transition-all duration-200 border ${
                    active
                      ? "bg-[var(--tc-blue)] text-white border-[var(--tc-blue)] shadow-[0_8px_20px_rgba(0,64,255,0.25)]"
                      : "bg-[var(--tc-surface-1)] text-[var(--tc-text-secondary)] border-[var(--tc-border)] hover:border-[var(--tc-border-bright)] hover:text-[var(--tc-text-primary)]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>
        )}

        {/* Cards */}
        {visible.length > 0 ? (
          <RevealStagger
            className={`grid grid-cols-1 gap-6 ${
              visible.length >= 3
                ? "md:grid-cols-2 lg:grid-cols-3"
                : visible.length === 2
                  ? "md:grid-cols-2 mx-auto max-w-5xl"
                  : "mx-auto max-w-lg" // one case: a single centered card, about one 2-up column wide
            }`}
            stagger={0.1}
          >
            {visible.map((c) => {
              const accent = ACCENT[c.accent];
              const Icon = c.icon;
              const card = t.cards[c.slug];
              if (!card) return null;
              return (
                <RevealItem key={c.slug}>
                  <Tilt3D intensity={4} className="group rounded-[var(--tc-radius-lg)] h-full">
                    <Link
                      href={`/case-studies/${c.slug}`}
                      className="tc-card tc-card-hover relative block h-full p-7 overflow-hidden"
                    >
                      <div className="relative flex items-center gap-4 mb-5" style={{ transform: "translateZ(30px)" }}>
                        {c.logo ? (
                          <div className="relative shrink-0 w-20 h-16 rounded-2xl flex items-center justify-center bg-white ring-1 ring-[var(--tc-border)] p-2">
                            <Image src={c.logo.src} alt={card.name} width={c.logo.width} height={c.logo.height} className="max-h-12 w-auto object-contain" />
                          </div>
                        ) : (
                          <div
                            className={`relative shrink-0 w-16 h-16 rounded-full flex items-center justify-center ring-2 ${accent.ring} ${accent.bg}`}
                          >
                            <Icon aria-hidden className={`h-7 w-7 ${accent.text}`} strokeWidth={1.75} />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[var(--tc-text-primary)] font-700 text-lg leading-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {card.name}
                          </div>
                          <div className="text-xs text-[var(--tc-text-muted)] mt-0.5">
                            {card.role}
                          </div>
                          <div
                            className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-500 ${accent.bg} ${accent.text}`}
                          >
                            {card.product}
                          </div>
                        </div>
                      </div>

                      <h3
                        className="relative text-[var(--tc-text-primary)] text-xl md:text-2xl font-700 leading-snug mb-6 min-h-[3.5rem]"
                        style={{ fontFamily: "var(--font-display)", transform: "translateZ(20px)" }}
                      >
                        {card.headline}
                      </h3>

                      <div
                        className="relative pt-5 border-t border-[var(--tc-border)]"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        <div className="text-[10px] text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mb-1">
                          {t.resultLabel}
                        </div>
                        <div className="flex items-end justify-between gap-3">
                          <div className="min-w-0">
                            <div
                              className="font-700 text-2xl md:text-3xl text-[var(--tc-success)] tabular-nums leading-none"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {card.metric}
                            </div>
                            <div className="text-xs text-[var(--tc-text-muted)] mt-1">
                              {card.metricCaption}
                            </div>
                          </div>
                          <div
                            className="shrink-0 text-sm font-500 text-[var(--tc-blue-text)] group-hover:translate-x-1 transition-transform"
                          >
                            {t.readMore} →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Tilt3D>
                </RevealItem>
              );
            })}
          </RevealStagger>
        ) : (
          <div className="text-center py-20 text-[var(--tc-text-muted)] text-sm">
            <Inbox aria-hidden className="mx-auto h-6 w-6" strokeWidth={1.75} />
          </div>
        )}
      </div>

      </main>
  );
}
