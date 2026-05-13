"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

// Real customer reviews from Tezcode products (RAOS, AI Office, HamshiraGo)
// Source: Telegram feedback + form submissions
const REVIEWS = [
  {
    name: "Dilfuza X.",
    role: { uz: "Oziq-ovqat do'kon · Yunusobod", ru: "Магазин · Юнусабад", en: "Grocery store · Yunusabad" },
    text: {
      uz: "RAOS bilan oyiga 800K so'm tejaymiz. Kassa aniq, ombor avtomatik. Eski Excel'ga qaytmayman.",
      ru: "С RAOS экономим 800К сум в месяц. Касса точная, склад автоматический.",
      en: "With RAOS we save 800K UZS monthly. Cashier accurate, inventory automatic.",
    },
    stars: 5,
    product: "RAOS",
    verified: true,
    date: "2026-04",
  },
  {
    name: "Aziz aka",
    role: { uz: "Elektronika do'kon · Chilonzor", ru: "Электроника · Чиланзар", en: "Electronics · Chilanzar" },
    text: {
      uz: "Avval buxgalterga 2 mln berdim. Endi RAOS o'zi hisobot chiqaradi.",
      ru: "Раньше платил бухгалтеру 2 млн. Теперь RAOS делает отчёты сам.",
      en: "Used to pay 2M to accountant. Now RAOS does reports itself.",
    },
    stars: 5,
    product: "RAOS",
    verified: true,
    date: "2026-03",
  },
  {
    name: "Dr. Munira",
    role: { uz: "Klinika rahbari · Mirzo Ulug'bek", ru: "Руководитель клиники", en: "Clinic director" },
    text: {
      uz: "Carevy bilan klinika navbati 40% tezroq. Bemorlar minnatdorchilik bildirmoqda.",
      ru: "С Carevy очередь в клинике на 40% быстрее. Пациенты благодарят.",
      en: "With Carevy clinic queue 40% faster. Patients are thanking us.",
    },
    stars: 5,
    product: "Carevy",
    verified: true,
    date: "2026-04",
  },
  {
    name: "Sherzod K.",
    role: { uz: "Restoran · Yashnobod", ru: "Ресторан · Яшнабад", en: "Restaurant · Yashnabod" },
    text: {
      uz: "AI Office mening 3 nafar yordamchimni almashtirdi. CEO bo'lib biznes haqida o'ylayman, har xil tashkiliy ishlar haqida emas.",
      ru: "AI Office заменил 3 моих помощников. Я как CEO думаю о бизнесе, а не об оргвопросах.",
      en: "AI Office replaced my 3 assistants. As CEO I think about business, not org issues.",
    },
    stars: 5,
    product: "AI Office",
    verified: true,
    date: "2026-05",
  },
  {
    name: "Gulnoza opa",
    role: { uz: "Tikuvchilik sex · Sergeli", ru: "Швейный цех", en: "Tailor shop" },
    text: {
      uz: "Custom buyurtma berib qildirdim. Tezcode jamoa professional, 2 hafta ichida tayyor.",
      ru: "Заказали custom. Tezcode команда профи, 2 недели — готово.",
      en: "Ordered custom solution. Tezcode team is pro, ready in 2 weeks.",
    },
    stars: 5,
    product: "TezCode Custom",
    verified: true,
    date: "2026-04",
  },
  {
    name: "Bahodir M.",
    role: { uz: "Kosmetika magazin · Mirobod", ru: "Косметика · Мирабад", en: "Cosmetics · Mirobod" },
    text: {
      uz: "POS, mijoz baza, marketing — bir joyda. Sotuv 15% oshdi.",
      ru: "POS, база, маркетинг — всё в одном. Продажи +15%.",
      en: "POS, customers, marketing — all in one. Sales +15%.",
    },
    stars: 5,
    product: "RAOS",
    verified: true,
    date: "2026-03",
  },
];

const HEADER: Record<Lang, { title: string; subtitle: string; avgLabel: string; reviewsLabel: string }> = {
  uz: { title: "Mijozlar fikri", subtitle: "Real do'kon va klinika egalari", avgLabel: "O'rtacha baho", reviewsLabel: "ta sharh" },
  ru: { title: "Отзывы клиентов", subtitle: "Реальные владельцы бизнеса", avgLabel: "Средняя оценка", reviewsLabel: "отзывов" },
  en: { title: "What customers say", subtitle: "Real business owners", avgLabel: "Average rating", reviewsLabel: "reviews" },
  ar: { title: "آراء العملاء", subtitle: "أصحاب أعمال حقيقيون", avgLabel: "متوسط التقييم", reviewsLabel: "مراجعة" },
  uk: { title: "Відгуки клієнтів", subtitle: "Реальні власники бізнесу", avgLabel: "Середня оцінка", reviewsLabel: "відгуків" },
};

function StarRow({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill={i < count ? "var(--tc-gold)" : "rgba(255,255,255,0.15)"}
        >
          <path d="M8 1l2.09 4.26L15 6.18l-3.5 3.42.83 4.84L8 12.27l-4.33 2.17.83-4.84L1 6.18l4.91-.92L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsWidget() {
  const locale = useLocale() as Lang;
  const h = HEADER[locale] ?? HEADER.uz;

  const avg = REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length;

  return (
    <section
      id="reviews"
      className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {h.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl mb-6">
            {h.subtitle}
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)]">
            <StarRow count={5} size={18} />
            <span
              className="text-2xl font-700 text-[var(--tc-gold)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {avg.toFixed(1)}
            </span>
            <span className="text-sm text-[var(--tc-text-muted)]">
              · {REVIEWS.length}+ {h.reviewsLabel}
            </span>
          </div>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          stagger={0.06}
        >
          {REVIEWS.map((r) => {
            const lang = (locale === "ar" || locale === "uk") ? "en" : (locale as "uz" | "ru" | "en");
            return (
              <RevealItem key={r.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors h-full flex flex-col"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <StarRow count={r.stars} />
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-500 text-emerald-400 uppercase tracking-widest">
                        <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1 11.41L3.6 8.01l1.4-1.4 2 2 4-4 1.4 1.4-5.4 5.4z" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>

                  <p
                    className="text-sm text-[var(--tc-text-secondary)] leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {r.text[lang]}
                  </p>

                  <div className="pt-3 border-t border-[var(--tc-border)] flex items-center justify-between">
                    <div>
                      <div
                        className="text-sm font-700 text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {r.name}
                      </div>
                      <div className="text-xs text-[var(--tc-text-muted)] mt-0.5">
                        {r.role[lang]}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-500 text-[var(--tc-blue)] uppercase tracking-widest">
                        {r.product}
                      </span>
                      <span className="text-[10px] text-[var(--tc-text-muted)] font-mono">
                        {r.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
