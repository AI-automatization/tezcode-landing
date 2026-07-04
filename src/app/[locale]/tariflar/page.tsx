"use client";

import { useLocale } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingTiers } from "@/components/PricingTiers";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Copy = {
  badge: string;
  title1: string;
  titleAccent: string;
  subtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaNote: string;
};

const COPY: Record<Lang, Copy> = {
  uz: {
    badge: "Tariflar",
    title1: "Shaffof narxlar —",
    titleAccent: "yashirin to'lov yo'q",
    subtitle:
      "Tayyor SaaS obuna, buyurtma dastur yoki AI avtomatizatsiya — har biri uchun aniq model. Buyurtma dasturda to'lov faqat MVP tayyor bo'lganda boshlanadi.",
    ctaTitle: "Aniq narxni",
    ctaSubtitle:
      "30 daqiqalik bepul konsultatsiyada vazifangizga eng mos tarifni birga tanlaymiz. Hech qanday majburiyat yo'q.",
    ctaButton: "Telegram'da gaplashish",
    ctaNote: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
  },
  ru: {
    badge: "Тарифы",
    title1: "Прозрачные цены —",
    titleAccent: "без скрытых платежей",
    subtitle:
      "Готовая SaaS-подписка, разработка на заказ или AI-автоматизация — для каждого своя модель. В разработке на заказ оплата начинается только после готового MVP.",
    ctaTitle: "Узнать точную",
    ctaSubtitle:
      "На бесплатной 30-минутной консультации вместе подберём тариф под вашу задачу. Без обязательств.",
    ctaButton: "Написать в Telegram",
    ctaNote: "Или пишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
  },
  en: {
    badge: "Pricing",
    title1: "Transparent pricing —",
    titleAccent: "no hidden fees",
    subtitle:
      "Ready SaaS subscription, custom development or AI automation — each with a clear model. For custom builds, payment starts only after a working MVP.",
    ctaTitle: "Get an exact",
    ctaSubtitle:
      "In a free 30-minute consultation we'll pick the right plan for your task together. No commitment.",
    ctaButton: "Chat on Telegram",
    ctaNote: "Or email tezcode@tezcode.dev — you'll reach Bekzod directly.",
  },
  ar: {
    badge: "الأسعار",
    title1: "أسعار شفافة —",
    titleAccent: "بدون رسوم خفية",
    subtitle:
      "اشتراك SaaS جاهز، أو تطوير مخصص، أو أتمتة بالذكاء الاصطناعي — لكل منها نموذج واضح. في التطوير المخصص يبدأ الدفع فقط بعد تسليم نسخة MVP عاملة.",
    ctaTitle: "احصل على سعر",
    ctaSubtitle:
      "في استشارة مجانية مدتها 30 دقيقة سنختار معًا الخطة المناسبة لمهمتك. دون أي التزام.",
    ctaButton: "تحدث عبر تيليجرام",
    ctaNote: "أو راسلنا على tezcode@tezcode.dev — ستصل إلى بكزود مباشرة.",
  },
  uk: {
    badge: "Тарифи",
    title1: "Прозорі ціни —",
    titleAccent: "без прихованих платежів",
    subtitle:
      "Готова SaaS-підписка, розробка на замовлення або AI-автоматизація — для кожного своя модель. У розробці на замовлення оплата починається лише після готового MVP.",
    ctaTitle: "Дізнатися точну",
    ctaSubtitle:
      "На безкоштовній 30-хвилинній консультації разом підберемо тариф під ваше завдання. Без зобов'язань.",
    ctaButton: "Написати в Telegram",
    ctaNote: "Або пишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
  },
};

export default function TariflarPage() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

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
        </Reveal>
      </section>

      {/* Reuse the homepage pricing tiers */}
      <PricingTiers />

      {/* Final CTA */}
      <section className="tc-navy-section py-20 sm:py-28 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.ctaTitle}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.badge.toLowerCase()}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg mb-8">
            {t.ctaSubtitle}
          </p>
          <Magnetic>
            <a
              href="https://t.me/tezcode_managament"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-btn-primary inline-flex items-center gap-2"
            >
              {t.ctaButton}
            </a>
          </Magnetic>
          <p className="text-[var(--tc-text-muted)] text-sm mt-5">{t.ctaNote}</p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
