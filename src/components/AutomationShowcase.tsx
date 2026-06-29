"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Structural data (same across languages); text comes from CONTENT per locale.
const META = [
  { img: "/showcase/biznes-avtomatlashtirish.jpeg", badge: "AI Office", href: "/ai-avtomatizatsiya" },
  { img: "/showcase/raos-dokon.jpeg", badge: "RAOS", href: "/pos-tizimi" },
  { img: "/showcase/ai-chatbot.jpeg", badge: "24/7", href: "/ai-chatbot" },
  { img: "/showcase/klinika-coremed.jpeg", badge: "CoreMed", href: "/klinika-crm" },
] as const;

type Content = {
  heading: string;
  subtitle: string;
  cta: string;
  cards: { title: string; subtitle: string }[];
};

const CONTENT: Record<string, Content> = {
  uz: {
    heading: "Bizning yechimlar — har soha uchun",
    subtitle: "AI bilan biznesingizning har bir jarayonini avtomatlashtiramiz.",
    cta: "Batafsil",
    cards: [
      { title: "Biznesni avtomatlashtirish", subtitle: "Jarayonlarni AI bilan avtomatlashtiramiz" },
      { title: "Savdo va do'kon", subtitle: "Kassa, ombor va sotuv — bir tizimda" },
      { title: "AI Chatbot", subtitle: "Mijozlarga 24/7 avtomatik javob" },
      { title: "Klinika va salomatlik", subtitle: "Bemor qabuli va navbatni avtomatlashtirish" },
    ],
  },
  ru: {
    heading: "Наши решения — для любой сферы",
    subtitle: "Автоматизируем каждый процесс вашего бизнеса с помощью AI.",
    cta: "Подробнее",
    cards: [
      { title: "Автоматизация бизнеса", subtitle: "Автоматизируем процессы с помощью AI" },
      { title: "Продажи и магазин", subtitle: "Касса, склад и продажи — в одной системе" },
      { title: "AI-чат-бот", subtitle: "Ответы клиентам 24/7" },
      { title: "Клиника и здоровье", subtitle: "Запись пациентов и автоматизация очереди" },
    ],
  },
  en: {
    heading: "Our solutions — for every industry",
    subtitle: "We automate every process of your business with AI.",
    cta: "Learn more",
    cards: [
      { title: "Business automation", subtitle: "Automate your processes with AI" },
      { title: "Sales & retail", subtitle: "POS, inventory and sales in one system" },
      { title: "AI Chatbot", subtitle: "24/7 automatic replies to customers" },
      { title: "Clinic & health", subtitle: "Patient booking and queue automation" },
    ],
  },
  ar: {
    heading: "حلولنا — لكل مجال",
    subtitle: "نُؤتمت كل عملية في عملك باستخدام الذكاء الاصطناعي.",
    cta: "اعرف المزيد",
    cards: [
      { title: "أتمتة الأعمال", subtitle: "نُؤتمت عملياتك بالذكاء الاصطناعي" },
      { title: "المبيعات والتجزئة", subtitle: "نقاط البيع والمخزون والمبيعات في نظام واحد" },
      { title: "روبوت دردشة بالذكاء الاصطناعي", subtitle: "ردود تلقائية للعملاء على مدار الساعة" },
      { title: "العيادة والصحة", subtitle: "حجز المرضى وأتمتة الطابور" },
    ],
  },
  uk: {
    heading: "Наші рішення — для будь-якої сфери",
    subtitle: "Автоматизуємо кожен процес вашого бізнесу за допомогою AI.",
    cta: "Детальніше",
    cards: [
      { title: "Автоматизація бізнесу", subtitle: "Автоматизуємо процеси за допомогою AI" },
      { title: "Продажі та магазин", subtitle: "Каса, склад і продажі — в одній системі" },
      { title: "AI-чат-бот", subtitle: "Відповіді клієнтам 24/7" },
      { title: "Клініка та здоров'я", subtitle: "Запис пацієнтів та автоматизація черги" },
    ],
  },
};

export function AutomationShowcase() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.en;

  return (
    <section id="solutions" className="scroll-mt-24 py-32 px-6 bg-[var(--tc-ink)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.heading}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {c.subtitle}
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {META.map((m, i) => (
            <RevealItem key={m.href}>
              <Link
                href={m.href}
                className="group relative block aspect-square overflow-hidden rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] hover:border-[var(--tc-border-bright)] transition-colors"
              >
                <Image
                  src={m.img}
                  alt={c.cards[i].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-600 bg-[var(--tc-blue)]/90 text-white backdrop-blur-md">
                  {m.badge}
                </span>

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3
                    className="text-2xl font-700 text-white mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.cards[i].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">{c.cards[i].subtitle}</p>
                  <span className="inline-flex items-center gap-1.5 text-[var(--tc-gold)] text-sm font-600">
                    {c.cta}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
