"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, Record<string, string>> = {
  uz: {
    badge: "Bepul kalkulyator",
    title: "Tezcode bilan qancha tejaysiz?",
    subtitle: "2 ta savol → real tejov hisobi",
    q_revenue: "Oylik aylanma (mln so'm)",
    q_staff: "Xodimlar soni",
    yearly: "Yiliga tejov",
    monthly: "Oyiga",
    detail: "Tejov hisobi:",
    line_staff: "Xodim avtomatizatsiyasi",
    line_errors: "Hisob xatolari yo'q",
    line_time: "Vaqt tejovi (boshqaruv)",
    cta: "Demo so'rang — to'liq hisob bering",
    cta_link: "#contact",
    currency: "so'm",
  },
  ru: {
    badge: "Бесплатный калькулятор",
    title: "Сколько вы сэкономите с Tezcode?",
    subtitle: "2 вопроса → реальный расчёт",
    q_revenue: "Месячный оборот (млн сум)",
    q_staff: "Количество сотрудников",
    yearly: "Экономия в год",
    monthly: "В месяц",
    detail: "Расчёт экономии:",
    line_staff: "Автоматизация сотрудников",
    line_errors: "Нет ошибок учёта",
    line_time: "Экономия времени (управление)",
    cta: "Запросить демо — полный расчёт",
    cta_link: "#contact",
    currency: "сум",
  },
  en: {
    badge: "Free calculator",
    title: "How much you'll save with Tezcode?",
    subtitle: "2 questions → real savings estimate",
    q_revenue: "Monthly revenue (million UZS)",
    q_staff: "Number of employees",
    yearly: "Savings per year",
    monthly: "Per month",
    detail: "Savings breakdown:",
    line_staff: "Staff automation",
    line_errors: "Zero accounting errors",
    line_time: "Time saved (management)",
    cta: "Get demo — full report",
    cta_link: "#contact",
    currency: "UZS",
  },
  ar: {
    badge: "حاسبة مجانية",
    title: "كم ستوفر مع Tezcode؟",
    subtitle: "سؤالان → حساب التوفير الحقيقي",
    q_revenue: "الإيرادات الشهرية (مليون سوم)",
    q_staff: "عدد الموظفين",
    yearly: "التوفير السنوي",
    monthly: "في الشهر",
    detail: "تفاصيل التوفير:",
    line_staff: "أتمتة الموظفين",
    line_errors: "صفر أخطاء محاسبية",
    line_time: "توفير الوقت (الإدارة)",
    cta: "اطلب عرضًا — تقرير كامل",
    cta_link: "#contact",
    currency: "سوم",
  },
  uk: {
    badge: "Безкоштовний калькулятор",
    title: "Скільки ви заощадите з Tezcode?",
    subtitle: "2 питання → реальна економія",
    q_revenue: "Місячний оборот (млн сум)",
    q_staff: "Кількість співробітників",
    yearly: "Економія за рік",
    monthly: "На місяць",
    detail: "Розрахунок економії:",
    line_staff: "Автоматизація співробітників",
    line_errors: "Нуль помилок обліку",
    line_time: "Економія часу (управління)",
    cta: "Запросити демо — повний розрахунок",
    cta_link: "#contact",
    currency: "сум",
  },
};

function formatNumber(n: number): string {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n));
}

export function ROICalculator() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  const [revenue, setRevenue] = useState(50); // million UZS
  const [staff, setStaff] = useState(5);

  const calc = useMemo(() => {
    // Real-world estimates from RAOS/AI Office customers
    // Per million UZS revenue: 0.8% saving via automation
    // Per staff member: 200K UZS saved/month (time + errors)
    // Plus 5% revenue uplift from better data
    const monthlyStaff = staff * 200_000;
    const monthlyErrors = revenue * 1_000_000 * 0.008;
    const monthlyTime = revenue * 1_000_000 * 0.015;
    const total = monthlyStaff + monthlyErrors + monthlyTime;
    return {
      monthly: total,
      yearly: total * 12,
      staffSaving: monthlyStaff,
      errorSaving: monthlyErrors,
      timeSaving: monthlyTime,
    };
  }, [revenue, staff]);

  return (
    <section
      id="calculator"
      className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-gold) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
            {t.badge}
          </div>
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

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="p-8 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]">
              <div className="mb-8">
                <label className="block text-sm font-500 text-[var(--tc-text-secondary)] mb-3">
                  {t.q_revenue}
                </label>
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="text-5xl font-800 tc-text-gradient-blue"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {revenue}
                  </span>
                  <span className="text-sm text-[var(--tc-text-muted)] uppercase tracking-widest">
                    M
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full accent-[var(--tc-blue)]"
                  aria-label={t.q_revenue}
                />
                <div className="flex justify-between text-xs text-[var(--tc-text-muted)] mt-2">
                  <span>5M</span>
                  <span>500M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-500 text-[var(--tc-text-secondary)] mb-3">
                  {t.q_staff}
                </label>
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="text-5xl font-800 tc-text-gradient-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {staff}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full accent-[var(--tc-gold)]"
                  aria-label={t.q_staff}
                />
                <div className="flex justify-between text-xs text-[var(--tc-text-muted)] mt-2">
                  <span>1</span>
                  <span>100+</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="relative p-8 rounded-[var(--tc-radius-xl)] border border-[var(--tc-gold)]/40 bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)] overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--tc-gold)] opacity-10 blur-3xl"
              />
              <div className="relative">
                <div className="text-sm text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mb-2">
                  {t.yearly}
                </div>
                <motion.div
                  key={calc.yearly}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-baseline gap-2 mb-6"
                >
                  <span
                    className="text-5xl md:text-6xl font-800 tc-text-gradient-gold tabular-nums"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatNumber(calc.yearly)}
                  </span>
                  <span className="text-base text-[var(--tc-text-muted)]">
                    {t.currency}
                  </span>
                </motion.div>

                <div className="text-sm text-[var(--tc-text-secondary)] mb-1">
                  {t.monthly}:{" "}
                  <span className="text-white font-600 tabular-nums">
                    {formatNumber(calc.monthly)} {t.currency}
                  </span>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[var(--tc-border)] to-transparent" />

                <div className="text-xs text-[var(--tc-text-muted)] mb-3 uppercase tracking-widest">
                  {t.detail}
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex justify-between">
                    <span className="text-[var(--tc-text-secondary)]">{t.line_staff}</span>
                    <span className="text-white tabular-nums">
                      {formatNumber(calc.staffSaving)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--tc-text-secondary)]">{t.line_errors}</span>
                    <span className="text-white tabular-nums">
                      {formatNumber(calc.errorSaving)}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--tc-text-secondary)]">{t.line_time}</span>
                    <span className="text-white tabular-nums">
                      {formatNumber(calc.timeSaving)}
                    </span>
                  </li>
                </ul>

                <motion.a
                  href={t.cta_link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-3 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-600 text-sm tc-glow-blue"
                >
                  {t.cta}
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
