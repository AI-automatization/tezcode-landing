"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Inbox } from "lucide-react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";
type FilterKey = "all" | "retail" | "clinic" | "custom";

type Case = {
  slug: string;
  photo: string;
  category: Exclude<FilterKey, "all">;
  accent: "amber" | "blue" | "emerald";
};

const CASES: readonly Case[] = [
  { slug: "dilfuza-grocery", photo: "/customers/customer-1.jpg", category: "retail", accent: "amber" },
  { slug: "aziz-electronics", photo: "/customers/customer-2.jpg", category: "retail", accent: "blue" },
  { slug: "munira-clinic", photo: "/customers/customer-3.jpg", category: "clinic", accent: "emerald" },
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
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

const COPY: Record<Lang, CopyShape> = {
  uz: {
    badge: "Case Studies",
    title: "Real natijalar — real biznes egalari",
    subtitle:
      "Tezcode mahsulotlari bilan ishlagan o'zbek tadbirkorlar — qancha tejagani, qancha o'sgani, qanday tezroq ishlagani.",
    filterAll: "Hammasi",
    filterRetail: "Savdo",
    filterClinic: "Klinika",
    filterCustom: "Custom",
    readMore: "To'liq o'qish",
    resultLabel: "Natija",
    cards: {
      "dilfuza-grocery": {
        name: "Dilfuza X.",
        role: "Oziq-ovqat do'koni · Yunusobod",
        product: "RAOS POS",
        headline: "30 kun ichida Excel'dan POS'ga o'tdi va kassasi tartibga keldi",
        metric: "+800K so'm/oy",
        metricCaption: "tejov",
      },
      "aziz-electronics": {
        name: "Aziz aka",
        role: "Elektronika do'koni · Chilonzor",
        product: "RAOS POS",
        headline: "Buxgalterga to'lov o'rniga RAOS o'zi hisobot chiqaradi",
        metric: "−2M so'm/oy",
        metricCaption: "buxgalter xarajati o'rniga",
      },
      "munira-clinic": {
        name: "Dr. Akmal",
        role: "Klinika rahbari · Mirzo Ulug'bek",
        product: "ClinicaGo + HamshiraGo",
        headline: "Navbat vaqti 40% qisqardi, bemor sadoqati 2x oshdi",
        metric: "−40% navbat",
        metricCaption: "kunlik bemor 32 → 45",
      },
    },
    ctaTitle: "Sizda ham shunday natija bo'lishi mumkin",
    ctaText:
      "Demo so'rang — 24 soat ichida sizning biznesingiz uchun mos yechim taqdim etamiz.",
    ctaBtn: "Demo so'rash",
  },
  ru: {
    badge: "Кейсы",
    title: "Реальные результаты — реальные владельцы бизнеса",
    subtitle:
      "Узбекские предприниматели, работавшие с продуктами Tezcode — сколько сэкономили, насколько выросли, как стали работать быстрее.",
    filterAll: "Все",
    filterRetail: "Торговля",
    filterClinic: "Клиника",
    filterCustom: "Кастом",
    readMore: "Читать полностью",
    resultLabel: "Результат",
    cards: {
      "dilfuza-grocery": {
        name: "Дилфуза Х.",
        role: "Продуктовый магазин · Юнусабад",
        product: "RAOS POS",
        headline: "За 30 дней перешла с Excel на POS — касса стала прозрачной",
        metric: "+800K сум/мес",
        metricCaption: "экономия",
      },
      "aziz-electronics": {
        name: "Азиз ака",
        role: "Электроника · Чиланзар",
        product: "RAOS POS",
        headline: "Вместо бухгалтера — RAOS сам делает отчёты",
        metric: "−2M сум/мес",
        metricCaption: "вместо зарплаты бухгалтера",
      },
      "munira-clinic": {
        name: "Доктор Акмал",
        role: "Руководитель клиники · Мирзо-Улугбек",
        product: "ClinicaGo + HamshiraGo",
        headline: "Очередь сократилась на 40%, лояльность пациентов 2x",
        metric: "−40% очередь",
        metricCaption: "32 → 45 пациентов/день",
      },
    },
    ctaTitle: "У вас тоже может быть такой результат",
    ctaText:
      "Запросите демо — в течение 24 часов предложим решение для вашего бизнеса.",
    ctaBtn: "Запросить демо",
  },
  en: {
    badge: "Case Studies",
    title: "Real results — real business owners",
    subtitle:
      "Uzbek entrepreneurs who worked with Tezcode products — what they saved, how much they grew, how fast they now operate.",
    filterAll: "All",
    filterRetail: "Retail",
    filterClinic: "Clinic",
    filterCustom: "Custom",
    readMore: "Read full story",
    resultLabel: "Result",
    cards: {
      "dilfuza-grocery": {
        name: "Dilfuza X.",
        role: "Grocery store · Yunusabad",
        product: "RAOS POS",
        headline: "Moved from Excel to POS in 30 days — cash register cleared up",
        metric: "+800K UZS/mo",
        metricCaption: "savings",
      },
      "aziz-electronics": {
        name: "Aziz aka",
        role: "Electronics · Chilanzar",
        product: "RAOS POS",
        headline: "Instead of an accountant — RAOS files reports itself",
        metric: "−2M UZS/mo",
        metricCaption: "replaces accountant salary",
      },
      "munira-clinic": {
        name: "Dr. Akmal",
        role: "Clinic director · Mirzo Ulugbek",
        product: "ClinicaGo + HamshiraGo",
        headline: "Queue time down 40%, patient loyalty 2x",
        metric: "−40% queue",
        metricCaption: "32 → 45 patients/day",
      },
    },
    ctaTitle: "You can have results like this too",
    ctaText:
      "Request a demo — within 24 hours we'll propose the right solution for your business.",
    ctaBtn: "Request demo",
  },
  ar: {
    badge: "دراسات الحالة",
    title: "نتائج حقيقية — أصحاب أعمال حقيقيون",
    subtitle:
      "رواد أعمال أوزبكيون عملوا مع منتجات Tezcode — كم وفّروا، وكم نموا، وكم أصبحوا أسرع.",
    filterAll: "الكل",
    filterRetail: "تجزئة",
    filterClinic: "عيادة",
    filterCustom: "مخصص",
    readMore: "اقرأ المقال كاملاً",
    resultLabel: "النتيجة",
    cards: {
      "dilfuza-grocery": {
        name: "دلفوزة خ.",
        role: "بقالة · يونسآباد",
        product: "RAOS POS",
        headline: "انتقلت من Excel إلى نقاط البيع خلال 30 يومًا",
        metric: "+800 ألف سوم/شهر",
        metricCaption: "توفير",
      },
      "aziz-electronics": {
        name: "عزيز أكا",
        role: "إلكترونيات · شيلانزار",
        product: "RAOS POS",
        headline: "بدل المحاسب — RAOS يصدر التقارير بنفسه",
        metric: "−2 مليون سوم/شهر",
        metricCaption: "بدل راتب المحاسب",
      },
      "munira-clinic": {
        name: "د. أكمل",
        role: "مدير عيادة · ميرزو أولوغبيك",
        product: "ClinicaGo + HamshiraGo",
        headline: "تقليل وقت الانتظار 40٪، ولاء المرضى ضعفان",
        metric: "−40٪ انتظار",
        metricCaption: "32 → 45 مريض/يوم",
      },
    },
    ctaTitle: "يمكنك تحقيق نتيجة مماثلة",
    ctaText: "اطلب عرضًا — سنقترح حلًا مناسبًا لعملك خلال 24 ساعة.",
    ctaBtn: "اطلب عرضًا",
  },
  uk: {
    badge: "Кейси",
    title: "Реальні результати — реальні підприємці",
    subtitle:
      "Узбецькі підприємці, які працювали з продуктами Tezcode — скільки заощадили, як виросли, як стали працювати швидше.",
    filterAll: "Усі",
    filterRetail: "Торгівля",
    filterClinic: "Клініка",
    filterCustom: "Кастом",
    readMore: "Читати повністю",
    resultLabel: "Результат",
    cards: {
      "dilfuza-grocery": {
        name: "Дилфуза Х.",
        role: "Продуктовий магазин · Юнусабад",
        product: "RAOS POS",
        headline: "За 30 днів перейшла з Excel на POS",
        metric: "+800K сум/міс",
        metricCaption: "економія",
      },
      "aziz-electronics": {
        name: "Азіз ака",
        role: "Електроніка · Чиланзар",
        product: "RAOS POS",
        headline: "Замість бухгалтера — RAOS сам робить звіти",
        metric: "−2M сум/міс",
        metricCaption: "замість зарплати бухгалтера",
      },
      "munira-clinic": {
        name: "Доктор Акмал",
        role: "Керівник клініки · Мірзо-Улугбек",
        product: "ClinicaGo + HamshiraGo",
        headline: "Черга скоротилася на 40%, лояльність пацієнтів 2x",
        metric: "−40% черга",
        metricCaption: "32 → 45 пацієнтів/день",
      },
    },
    ctaTitle: "У вас теж може бути такий результат",
    ctaText:
      "Запросіть демо — упродовж 24 годин запропонуємо рішення для вашого бізнесу.",
    ctaBtn: "Запросити демо",
  },
};

export function CaseStudiesIndexClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = useMemo(
    () => (filter === "all" ? CASES : CASES.filter((c) => c.category === filter)),
    [filter],
  );

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.filterAll },
    { key: "retail", label: t.filterRetail },
    { key: "clinic", label: t.filterClinic },
    { key: "custom", label: t.filterCustom },
  ];

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
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-blue)] to-transparent origin-center"
          />
        </Reveal>

        {/* Filters */}
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

        {/* Cards */}
        {visible.length > 0 ? (
          <RevealStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
          >
            {visible.map((c) => {
              const accent = ACCENT[c.accent];
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
                        <div
                          className={`relative shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ${accent.ring}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={c.photo}
                            alt={card.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
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

        {/* CTA */}
        <Reveal className="mt-24">
          <div className="tc-navy-section relative p-10 md:p-14 rounded-[var(--tc-radius-xl)] text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--tc-blue)] opacity-20 blur-3xl"
            />
            <h2
              className="text-3xl md:text-4xl font-700 mb-4 relative text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.ctaTitle}
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 relative">
              {t.ctaText}
            </p>
            <motion.a
              href="/aloqa"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="tc-btn-primary text-sm relative"
            >
              {t.ctaBtn}
            </motion.a>
          </div>
        </Reveal>
      </div>

      </main>
  );
}
