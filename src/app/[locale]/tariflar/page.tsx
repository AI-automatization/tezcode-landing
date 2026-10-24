"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PRICING_FAQ, type FaqLang } from "@/content/faq";
import { CustomWorkSection } from "./CustomWorkSection";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Copy = {
  badge: string;
  title1: string;
  titleAccent: string;
  subtitle: string;
  selectTitle: string;
  selectSaas: string;
  selectCustom: string;
  saasTitle: string;
  saasAccent: string;
};

const COPY: Record<Lang, Copy> = {
  uz: {
    badge: "Tariflar",
    title1: "Shaffof narxlar —",
    titleAccent: "yashirin to'lov yo'q",
    subtitle:
      "Tayyor SaaS obuna, buyurtma dastur yoki AI avtomatizatsiya — har biri uchun aniq model. Buyurtma dasturda to'lov 30% oldindan boshlanadi.",
    selectTitle: "Obuna kerakmi yoki buyurtma ish?",
    selectSaas: "Tayyor mahsulotlar (obuna)",
    selectCustom: "Buyurtma ishlar (bir martalik)",
    saasTitle: "Tayyor mahsulotlar",
    saasAccent: "(obuna)",
  },
  ru: {
    badge: "Тарифы",
    title1: "Прозрачные цены —",
    titleAccent: "без скрытых платежей",
    subtitle:
      "Готовая SaaS-подписка, разработка на заказ или ИИ-автоматизация — для каждого своя модель. В разработке на заказ оплата — 30% предоплата.",
    selectTitle: "Нужна подписка или работа на заказ?",
    selectSaas: "Готовые продукты (подписка)",
    selectCustom: "Работы на заказ (разово)",
    saasTitle: "Готовые продукты",
    saasAccent: "(подписка)",
  },
  en: {
    badge: "Pricing",
    title1: "Transparent pricing —",
    titleAccent: "no hidden fees",
    subtitle:
      "Ready SaaS subscription, custom development or AI automation — each with a clear model. For custom builds, payment starts with a 30% deposit.",
    selectTitle: "Looking for a subscription or custom work?",
    selectSaas: "Ready products (subscription)",
    selectCustom: "Custom work (one-time)",
    saasTitle: "Ready products",
    saasAccent: "(subscription)",
  },
  ar: {
    badge: "الأسعار",
    title1: "أسعار شفافة —",
    titleAccent: "بدون رسوم خفية",
    subtitle:
      "اشتراك SaaS جاهز، أو تطوير مخصص، أو أتمتة بالذكاء الاصطناعي — لكل منها نموذج واضح. في التطوير المخصص يبدأ الدفع بدفعة مقدمة 30%.",
    selectTitle: "هل تحتاج اشتراكًا أم عملًا حسب الطلب؟",
    selectSaas: "منتجات جاهزة (اشتراك)",
    selectCustom: "أعمال حسب الطلب (مرة واحدة)",
    saasTitle: "منتجات جاهزة",
    saasAccent: "(اشتراك)",
  },
  uk: {
    badge: "Тарифи",
    title1: "Прозорі ціни —",
    titleAccent: "без прихованих платежів",
    subtitle:
      "Готова SaaS-підписка, розробка на замовлення або AI-автоматизація — для кожного своя модель. У розробці на замовлення оплата — 30% передоплати.",
    selectTitle: "Потрібна підписка чи робота на замовлення?",
    selectSaas: "Готові продукти (підписка)",
    selectCustom: "Роботи на замовлення (разово)",
    saasTitle: "Готові продукти",
    saasAccent: "(підписка)",
  },
};

export default function TariflarPage() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const pfaq = PRICING_FAQ[locale as FaqLang] ?? PRICING_FAQ.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-8 px-6 text-center">
        <div aria-hidden className="tc-grid-bg absolute inset-0" />
        <Reveal className="relative max-w-3xl mx-auto">
          <span className="tc-chip mb-5">{t.badge}</span>
          <h1
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title1}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.titleAccent}</span>
          </h1>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t.subtitle}
          </p>

          {/* Self-select: subscription vs one-time custom work */}
          <p className="mt-10 mb-4 text-sm font-600 text-[var(--tc-text-muted)] uppercase tracking-wide">
            {t.selectTitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/pos-tizimi" className="tc-btn-secondary text-sm">
              {t.selectSaas}
            </Link>
            <a href="#buyurtma" className="tc-btn-secondary text-sm">
              {t.selectCustom}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Section 2: one-time custom work with published "from" prices */}
      <CustomWorkSection />

      {/* Pricing FAQ — visible Q&A mirroring the FAQPage JSON-LD in layout.tsx */}
      <FaqAccordion
        badge={pfaq.badge}
        title={pfaq.title}
        titleAccent={pfaq.titleAccent}
        subtitle={pfaq.subtitle}
        items={pfaq.items}
      />

      <Footer />

      </main>
  );
}
