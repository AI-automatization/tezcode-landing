"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { Check } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";

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

const CHIP_LABEL: Record<Lang, string> = {
  uz: "Narxlar",
  ru: "Цены",
  en: "Pricing",
  ar: "الأسعار",
  uk: "Ціни",
};

export function PricingTiers() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-t border-[var(--tc-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="mb-5">
            <span className="tc-chip">{CHIP_LABEL[locale] ?? CHIP_LABEL.uz}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto"
          stagger={0.1}
        >
          {t.tiers.map((tier) => (
            <RevealItem key={tier.name} className="h-full">
              <motion.div
                whileHover={tier.highlight ? undefined : { y: -6 }}
                className={[
                  "relative h-full flex flex-col p-8",
                  tier.highlight
                    ? "z-10 rounded-[var(--tc-radius-lg)] border border-[rgba(255,255,255,0.14)] bg-[var(--tc-navy)] shadow-[0_24px_60px_rgba(0,64,255,0.25)] md:scale-[1.04]"
                    : "tc-card tc-card-hover",
                ].join(" ")}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--tc-blue)] px-4 py-1 text-xs font-700 text-white">
                    Popular
                  </div>
                )}

                <h3
                  className={`text-2xl font-700 mb-1 ${
                    tier.highlight ? "text-[#f2f5fb]" : "text-[var(--tc-text-primary)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.highlight
                      ? "text-[rgba(242,245,251,0.72)]"
                      : "text-[var(--tc-text-muted)]"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mb-6 flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-800 ${
                      tier.highlight ? "text-[#f2f5fb]" : "text-[var(--tc-text-primary)]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.price.startsWith("$") && tier.price !== "$0" && (
                    <span
                      className={`text-sm ${
                        tier.highlight
                          ? "text-[rgba(242,245,251,0.72)]"
                          : "text-[var(--tc-text-muted)]"
                      }`}
                    >
                      {t.per}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.highlight ? "text-[#34d399]" : "text-[var(--tc-success)]"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span
                        className={
                          tier.highlight
                            ? "text-[rgba(242,245,251,0.72)]"
                            : "text-[var(--tc-text-secondary)]"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/aloqa"
                  className={
                    tier.highlight
                      ? "tc-btn-primary w-full text-sm"
                      : "tc-btn-secondary w-full text-sm"
                  }
                >
                  {t.cta}
                </Link>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
