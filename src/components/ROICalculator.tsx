"use client";

import { m, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLocale } from "next-intl";
import {
  Briefcase,
  Check,
  FileText,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Store,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, Record<string, string>> = {
  uz: {
    badge: "Bepul diagnostika",
    title: "Biznesingiz qancha yutadi?",
    subtitle: "2 ta savol — sizga mos avtomatlashtirish rejasi",
    q_business: "Biznes turingiz",
    biz_shop: "Do'kon",
    biz_restaurant: "Restoran / Kafe",
    biz_clinic: "Klinika",
    biz_service: "Xizmat / Ofis",
    q_pain: "Eng ko'p vaqt oladigan ish",
    pain_reports: "Hisobot va hujjatlar",
    pain_customers: "Mijozlarga javob",
    pain_staff: "Xodimlar nazorati",
    pain_inventory: "Kassa va ombor",
    res_title: "Sizga mos yechim",
    sol_reports: "Kunlik va oylik hisobotlar AI'da o'zi tuziladi — Excel va qo'l mehnatisiz.",
    sol_customers: "AI chatbot va Telegram bot mijozlarning har savoliga o'zi javob beradi.",
    sol_staff: "Davomat, vazifalar va natijalar avtomatik nazoratda bo'ladi.",
    sol_inventory: "Kassa, ombor va savdo bitta tizimda o'z-o'zidan yuritiladi.",
    eff_time: "Qo'l mehnati",
    eff_time_val: "−60–70%",
    eff_err: "Xatolar",
    eff_err_val: "−90%",
    eff_speed: "Javob tezligi",
    eff_speed_val: "darhol",
    est_label: "Taxminiy tejov",
    mln: "mln so'm",
    mo: "/oy",
    note: "Aniq raqam biznesingizga bog'liq — 30 daqiqalik bepul auditda hisoblab beramiz.",
    cta: "Bepul audit olish",
    cta_link: "/aloqa",
  },
  ru: {
    badge: "Бесплатная диагностика",
    title: "Сколько выиграет ваш бизнес?",
    subtitle: "2 вопроса — план автоматизации под вас",
    q_business: "Тип бизнеса",
    biz_shop: "Магазин",
    biz_restaurant: "Ресторан / Кафе",
    biz_clinic: "Клиника",
    biz_service: "Услуги / Офис",
    q_pain: "Что съедает больше всего времени",
    pain_reports: "Отчёты и документы",
    pain_customers: "Ответы клиентам",
    pain_staff: "Контроль сотрудников",
    pain_inventory: "Касса и склад",
    res_title: "Решение для вас",
    sol_reports: "Ежедневные и ежемесячные отчёты ИИ собирает сам — без Excel и ручного труда.",
    sol_customers: "ИИ-чат-бот и Telegram-бот сами отвечают на каждый вопрос клиента.",
    sol_staff: "Посещаемость, задачи и результаты — под автоматическим контролем.",
    sol_inventory: "Касса, склад и продажи ведутся сами в одной системе.",
    eff_time: "Ручной труд",
    eff_time_val: "−60–70%",
    eff_err: "Ошибки",
    eff_err_val: "−90%",
    eff_speed: "Скорость ответа",
    eff_speed_val: "мгновенно",
    est_label: "Примерная экономия",
    mln: "млн сум",
    mo: "/мес",
    note: "Точная цифра зависит от вашего бизнеса — посчитаем на бесплатном 30-минутном аудите.",
    cta: "Получить бесплатный аудит",
    cta_link: "/aloqa",
  },
  en: {
    badge: "Free diagnostics",
    title: "How much will your business gain?",
    subtitle: "2 questions — an automation plan tailored to you",
    q_business: "Your business type",
    biz_shop: "Store",
    biz_restaurant: "Restaurant / Cafe",
    biz_clinic: "Clinic",
    biz_service: "Services / Office",
    q_pain: "What eats most of your time",
    pain_reports: "Reports & documents",
    pain_customers: "Customer replies",
    pain_staff: "Staff oversight",
    pain_inventory: "POS & inventory",
    res_title: "Your solution",
    sol_reports: "Daily and monthly reports build themselves — no Excel, no manual work.",
    sol_customers: "An AI chatbot and Telegram bot answer every customer question by themselves.",
    sol_staff: "Attendance, tasks and results stay under automatic control.",
    sol_inventory: "POS, inventory and sales run themselves in one system.",
    eff_time: "Manual work",
    eff_time_val: "−60–70%",
    eff_err: "Errors",
    eff_err_val: "−90%",
    eff_speed: "Reply speed",
    eff_speed_val: "instant",
    est_label: "Estimated savings",
    mln: "M UZS",
    mo: "/mo",
    note: "The exact number depends on your business — we'll calculate it in a free 30-minute audit.",
    cta: "Get a free audit",
    cta_link: "/aloqa",
  },
  ar: {
    badge: "تشخيص مجاني",
    title: "كم سيكسب عملك؟",
    subtitle: "سؤالان — خطة أتمتة مصممة لك",
    q_business: "نوع عملك",
    biz_shop: "متجر",
    biz_restaurant: "مطعم / مقهى",
    biz_clinic: "عيادة",
    biz_service: "خدمات / مكتب",
    q_pain: "ما الذي يستهلك معظم وقتك",
    pain_reports: "التقارير والمستندات",
    pain_customers: "الرد على العملاء",
    pain_staff: "مراقبة الموظفين",
    pain_inventory: "الكاشير والمخزون",
    res_title: "الحل المناسب لك",
    sol_reports: "التقارير اليومية والشهرية تُعد نفسها — دون Excel أو عمل يدوي.",
    sol_customers: "روبوت ذكي وبوت Telegram يجيبان على كل سؤال من العملاء تلقائيًا.",
    sol_staff: "الحضور والمهام والنتائج تحت مراقبة تلقائية.",
    sol_inventory: "الكاشير والمخزون والمبيعات تعمل تلقائيًا في نظام واحد.",
    eff_time: "العمل اليدوي",
    eff_time_val: "−60–70%",
    eff_err: "الأخطاء",
    eff_err_val: "−90%",
    eff_speed: "سرعة الرد",
    eff_speed_val: "فوري",
    est_label: "التوفير التقريبي",
    mln: "مليون سوم",
    mo: "/شهر",
    note: "الرقم الدقيق يعتمد على عملك — نحسبه في تدقيق مجاني لمدة 30 دقيقة.",
    cta: "احصل على تدقيق مجاني",
    cta_link: "/aloqa",
  },
  uk: {
    badge: "Безкоштовна діагностика",
    title: "Скільки виграє ваш бізнес?",
    subtitle: "2 питання — план автоматизації під вас",
    q_business: "Тип бізнесу",
    biz_shop: "Магазин",
    biz_restaurant: "Ресторан / Кафе",
    biz_clinic: "Клініка",
    biz_service: "Послуги / Офіс",
    q_pain: "Що з'їдає найбільше часу",
    pain_reports: "Звіти й документи",
    pain_customers: "Відповіді клієнтам",
    pain_staff: "Контроль співробітників",
    pain_inventory: "Каса і склад",
    res_title: "Рішення для вас",
    sol_reports: "Щоденні та місячні звіти AI збирає сам — без Excel і ручної праці.",
    sol_customers: "AI-чатбот і Telegram-бот самі відповідають на кожне питання клієнта.",
    sol_staff: "Відвідуваність, завдання та результати — під автоматичним контролем.",
    sol_inventory: "Каса, склад і продажі ведуться самі в одній системі.",
    eff_time: "Ручна праця",
    eff_time_val: "−60–70%",
    eff_err: "Помилки",
    eff_err_val: "−90%",
    eff_speed: "Швидкість відповіді",
    eff_speed_val: "миттєво",
    est_label: "Орієнтовна економія",
    mln: "млн сум",
    mo: "/міс",
    note: "Точна цифра залежить від вашого бізнесу — порахуємо на безкоштовному 30-хвилинному аудиті.",
    cta: "Отримати безкоштовний аудит",
    cta_link: "/aloqa",
  },
};

type BizKey = "shop" | "restaurant" | "clinic" | "service";
type PainKey = "reports" | "customers" | "staff" | "inventory";

const BIZ_OPTIONS: { key: BizKey; icon: LucideIcon }[] = [
  { key: "shop", icon: Store },
  { key: "restaurant", icon: UtensilsCrossed },
  { key: "clinic", icon: Stethoscope },
  { key: "service", icon: Briefcase },
];

const PAIN_OPTIONS: { key: PainKey; icon: LucideIcon }[] = [
  { key: "reports", icon: FileText },
  { key: "customers", icon: MessageSquare },
  { key: "staff", icon: Users },
  { key: "inventory", icon: ShoppingCart },
];

// Honest RANGES (mln UZS/month) instead of fake-precise sums — the exact
// figure is what the free audit is for.
const SAVING_RANGE: Record<BizKey, [number, number]> = {
  shop: [1.5, 3],
  restaurant: [2, 4],
  clinic: [1.5, 3.5],
  service: [1, 2.5],
};

// Effect bars: label key + value key + relative bar width.
const EFFECTS: { labelKey: string; valueKey: string; width: string }[] = [
  { labelKey: "eff_time", valueKey: "eff_time_val", width: "68%" },
  { labelKey: "eff_err", valueKey: "eff_err_val", width: "90%" },
  { labelKey: "eff_speed", valueKey: "eff_speed_val", width: "100%" },
];

function formatRange(range: [number, number], locale: Lang): string {
  const sep = locale === "en" ? "." : ",";
  const fmt = (n: number) => String(n).replace(".", sep);
  return `${fmt(range[0])}–${fmt(range[1])}`;
}

export function ROICalculator() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  const [biz, setBiz] = useState<BizKey>("shop");
  const [pain, setPain] = useState<PainKey>("reports");

  const range = SAVING_RANGE[biz];
  const solution = t[`sol_${pain}`];

  const bizLabel: Record<BizKey, string> = {
    shop: t.biz_shop,
    restaurant: t.biz_restaurant,
    clinic: t.biz_clinic,
    service: t.biz_service,
  };
  const painLabel: Record<PainKey, string> = {
    reports: t.pain_reports,
    customers: t.pain_customers,
    staff: t.pain_staff,
    inventory: t.pain_inventory,
  };

  const chipBase =
    "flex items-center gap-2.5 rounded-[var(--tc-radius-md)] border px-4 py-3 text-sm font-600 transition-colors duration-200 cursor-pointer text-start w-full";
  const chipOff =
    "border-[var(--tc-border)] bg-[var(--tc-surface-1)] text-[var(--tc-text-secondary)] hover:border-[var(--tc-border-bright)]";
  const chipOn = "border-[var(--tc-blue)] bg-[var(--tc-blue-dim)] text-[var(--tc-text-primary)]";

  return (
    <section
      id="calculator"
      className="tc-navy-section relative py-20 sm:py-28 px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[440px] opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,64,255,0.25), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tc-border)] px-4 py-1.5 text-xs font-600 uppercase tracking-[0.14em] text-[var(--tc-blue-text)]">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
              {t.badge}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h2>
          <p className="text-lg text-[var(--tc-text-muted)]">{t.subtitle}</p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
            {/* ── Questions ── */}
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)]">
                <div className="text-sm font-500 text-[var(--tc-text-secondary)] mb-3">
                  1 · {t.q_business}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {BIZ_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const on = biz === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setBiz(opt.key)}
                        aria-pressed={on}
                        className={`${chipBase} ${on ? chipOn : chipOff}`}
                      >
                        <Icon
                          className={`w-4.5 h-4.5 shrink-0 ${on ? "text-[var(--tc-blue-text)]" : ""}`}
                          strokeWidth={1.75}
                        />
                        <span className="truncate">{bizLabel[opt.key]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] flex-1">
                <div className="text-sm font-500 text-[var(--tc-text-secondary)] mb-3">
                  2 · {t.q_pain}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PAIN_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const on = pain === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setPain(opt.key)}
                        aria-pressed={on}
                        className={`${chipBase} ${on ? chipOn : chipOff}`}
                      >
                        <Icon
                          className={`w-4.5 h-4.5 shrink-0 ${on ? "text-[var(--tc-blue-text)]" : ""}`}
                          strokeWidth={1.75}
                        />
                        <span className="truncate">{painLabel[opt.key]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Result panel ── */}
            <div className="relative p-7 sm:p-8 rounded-[var(--tc-radius-lg)] border border-[rgba(91,140,255,0.35)] bg-[var(--tc-surface-1)] overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-24 -end-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(0,64,255,0.18)" }}
              />

              <div className="relative">
                <div
                  className="text-xs font-600 uppercase tracking-[0.16em] text-[var(--tc-blue-text)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.res_title}
                </div>

                <AnimatePresence mode="wait">
                  <m.p
                    key={pain}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-base sm:text-lg font-600 text-[var(--tc-text-primary)] leading-snug mb-7 min-h-[3.5rem]"
                  >
                    {solution}
                  </m.p>
                </AnimatePresence>

                {/* Effect bars — honest ranges, no fake precision */}
                <div className="flex flex-col gap-4 mb-7">
                  {EFFECTS.map((eff) => (
                    <div key={eff.labelKey}>
                      <div className="flex items-baseline justify-between mb-1.5 text-sm">
                        <span className="text-[var(--tc-text-secondary)]">{t[eff.labelKey]}</span>
                        <span
                          className="font-700 text-[var(--tc-success)] tabular-nums"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {t[eff.valueKey]}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--tc-surface-3)] overflow-hidden">
                        <m.div
                          initial={{ width: 0 }}
                          whileInView={{ width: eff.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(90deg, var(--tc-blue), #34d399)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Estimated savings — a range, not a made-up exact sum */}
                <div className="rounded-[var(--tc-radius-md)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] p-5 mb-5">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--tc-text-muted)] mb-1.5">
                    {t.est_label}
                  </div>
                  <AnimatePresence mode="wait">
                    <m.div
                      key={biz}
                      initial={{ opacity: 0.4, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-baseline gap-2"
                    >
                      <span
                        className="text-3xl sm:text-4xl font-800 text-[var(--tc-text-primary)] tabular-nums tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        ≈ {formatRange(range, locale)}
                      </span>
                      <span className="text-sm text-[var(--tc-text-muted)]">
                        {t.mln}
                        {t.mo}
                      </span>
                    </m.div>
                  </AnimatePresence>
                  <p className="mt-2.5 text-xs text-[var(--tc-text-muted)] leading-relaxed flex items-start gap-1.5">
                    <Check
                      className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--tc-success)]"
                      strokeWidth={2.5}
                    />
                    {t.note}
                  </p>
                </div>

                <m.a
                  href={t.cta_link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="tc-btn-primary flex w-full items-center justify-center text-center"
                >
                  {t.cta}
                </m.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
