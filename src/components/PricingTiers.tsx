"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, {
  title: string; subtitle: string; per: string; cta: string;
  tiers: { name: string; price: string; tagline: string; features: string[]; highlight?: boolean }[];
}> = {
  uz: {
    title: "Narxlar — har biznes uchun yechim",
    subtitle: "Bepul boshlang. Kerakli funksiyalarni qo'shing.",
    per: "/oy",
    cta: "Boshlash",
    tiers: [
      {
        name: "Starter",
        price: "$0",
        tagline: "Kichik biznes uchun",
        features: [
          "1 ta mahsulot (RAOS / AI Office)",
          "3 ta xodim",
          "Bazaviy AI yordamchi",
          "Telegram orqali support",
          "14 kun bepul, keyin $0",
        ],
      },
      {
        name: "Pro",
        price: "$200",
        tagline: "O'sayotgan biznes uchun",
        highlight: true,
        features: [
          "Cheksiz mahsulot",
          "30 ta xodim",
          "Advanced AI (12 agent)",
          "WhatsApp + Telegram bot",
          "Custom domain ulanish",
          "Priority support 24/7",
          "30 kun bepul sinov",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        tagline: "Korporativ + tarmoq do'konlar",
        features: [
          "Cheksiz hamma narsa",
          "SLA 99.9%",
          "Dedicated AI engineer",
          "On-premise yoki cloud",
          "White-label brand",
          "Direct CEO contact",
          "30 kun POC bepul",
        ],
      },
    ],
  },
  ru: {
    title: "Цены — решение для каждого бизнеса",
    subtitle: "Начните бесплатно. Добавляйте нужные функции.",
    per: "/мес",
    cta: "Начать",
    tiers: [
      {
        name: "Starter",
        price: "$0",
        tagline: "Для малого бизнеса",
        features: [
          "1 продукт (RAOS / AI Office)",
          "До 3 сотрудников",
          "Базовый AI помощник",
          "Поддержка в Telegram",
          "14 дней бесплатно, затем $0",
        ],
      },
      {
        name: "Pro",
        price: "$200",
        tagline: "Для растущего бизнеса",
        highlight: true,
        features: [
          "Безлимит продуктов",
          "До 30 сотрудников",
          "Advanced AI (12 агентов)",
          "WhatsApp + Telegram бот",
          "Подключение своего домена",
          "Приоритетная поддержка 24/7",
          "30 дней пробный период",
        ],
      },
      {
        name: "Enterprise",
        price: "По запросу",
        tagline: "Корпоративный + сети",
        features: [
          "Безлимит всего",
          "SLA 99.9%",
          "Выделенный AI инженер",
          "On-premise или cloud",
          "White-label",
          "Прямой контакт с CEO",
          "30 дней POC бесплатно",
        ],
      },
    ],
  },
  en: {
    title: "Pricing — solution for every business",
    subtitle: "Start free. Scale as you grow.",
    per: "/mo",
    cta: "Get started",
    tiers: [
      {
        name: "Starter",
        price: "$0",
        tagline: "For small business",
        features: [
          "1 product (RAOS / AI Office)",
          "Up to 3 employees",
          "Basic AI assistant",
          "Telegram support",
          "14 days free, then $0",
        ],
      },
      {
        name: "Pro",
        price: "$200",
        tagline: "For growing business",
        highlight: true,
        features: [
          "Unlimited products",
          "Up to 30 employees",
          "Advanced AI (12 agents)",
          "WhatsApp + Telegram bot",
          "Custom domain",
          "Priority 24/7 support",
          "30-day free trial",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        tagline: "For chains & corporates",
        features: [
          "Everything unlimited",
          "99.9% SLA",
          "Dedicated AI engineer",
          "On-premise or cloud",
          "White-label",
          "Direct CEO contact",
          "Free 30-day POC",
        ],
      },
    ],
  },
  ar: {
    title: "الأسعار — حل لكل عمل",
    subtitle: "ابدأ مجانًا. أضف الميزات حسب الحاجة.",
    per: "/شهر",
    cta: "ابدأ",
    tiers: [
      { name: "Starter", price: "$0", tagline: "للأعمال الصغيرة", features: ["منتج واحد", "حتى 3 موظفين", "مساعد AI أساسي", "دعم Telegram", "14 يومًا مجانًا"] },
      { name: "Pro", price: "$200", tagline: "للأعمال النامية", highlight: true, features: ["منتجات غير محدودة", "حتى 30 موظفًا", "AI متقدم (12 وكيلًا)", "WhatsApp + Telegram bot", "نطاق مخصص", "دعم 24/7", "30 يومًا تجريبيًا"] },
      { name: "Enterprise", price: "حسب الطلب", tagline: "للشركات والسلاسل", features: ["كل شيء غير محدود", "SLA 99.9%", "مهندس AI مخصص", "On-premise أو cloud", "علامة بيضاء", "اتصال مباشر بالـCEO", "30 يومًا POC مجانًا"] },
    ],
  },
  uk: {
    title: "Ціни — рішення для кожного бізнесу",
    subtitle: "Почніть безкоштовно. Масштабуйтесь у міру зростання.",
    per: "/міс",
    cta: "Почати",
    tiers: [
      { name: "Starter", price: "$0", tagline: "Для малого бізнесу", features: ["1 продукт", "До 3 співробітників", "Базовий AI помічник", "Підтримка в Telegram", "14 днів безкоштовно"] },
      { name: "Pro", price: "$200", tagline: "Для зростаючого бізнесу", highlight: true, features: ["Безлімітні продукти", "До 30 співробітників", "Advanced AI (12 агентів)", "WhatsApp + Telegram бот", "Підключення домена", "Підтримка 24/7", "30 днів пробний"] },
      { name: "Enterprise", price: "За запитом", tagline: "Для корпорацій", features: ["Все безлімітно", "SLA 99.9%", "Окремий AI інженер", "On-premise або cloud", "White-label", "Прямий контакт з CEO", "30 днів POC"] },
    ],
  },
};

export function PricingTiers() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <section
      id="pricing"
      className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          stagger={0.1}
        >
          {t.tiers.map((tier) => (
            <RevealItem key={tier.name}>
              <motion.div
                whileHover={{ y: -6 }}
                className={[
                  "relative p-8 rounded-[var(--tc-radius-xl)] h-full flex flex-col transition-colors",
                  tier.highlight
                    ? "border-2 border-[var(--tc-gold)] bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)] tc-glow-gold"
                    : "border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)]",
                ].join(" ")}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--tc-gold)] text-[var(--tc-ink)] text-[10px] font-700 uppercase tracking-[0.15em]">
                    Popular
                  </div>
                )}

                <h3
                  className="text-2xl font-700 text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tier.name}
                </h3>
                <p className="text-sm text-[var(--tc-text-muted)] mb-6">
                  {tier.tagline}
                </p>

                <div className="mb-6 flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-800 ${
                      tier.highlight ? "tc-text-gradient-gold" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.price.startsWith("$") && tier.price !== "$0" && (
                    <span className="text-sm text-[var(--tc-text-muted)]">
                      {t.per}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.highlight ? "text-[var(--tc-gold)]" : "text-[var(--tc-blue-text)]"
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[var(--tc-text-secondary)]">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "block w-full text-center px-5 py-3 rounded-[var(--tc-radius-md)] font-600 text-sm transition-colors",
                    tier.highlight
                      ? "bg-[var(--tc-gold)] text-[var(--tc-ink)] hover:bg-[var(--tc-gold-light)]"
                      : "border border-[var(--tc-border-bright)] text-white hover:bg-[var(--tc-surface-3)]",
                  ].join(" ")}
                >
                  {t.cta}
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
