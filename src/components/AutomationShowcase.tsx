"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/motion/Reveal";

// Structural data (same across languages); text comes from CONTENT per locale.
const META = [
  { img: "/showcase/ai-agent.jpeg", badge: "AI Agent", href: "/ai-agent" },
  { img: "/showcase/biznes-avtomatlashtirish.jpeg", badge: "AI Office", href: "/ai-avtomatizatsiya" },
  { img: "/showcase/raos-dokon.jpeg", badge: "RAOS", href: "/pos-tizimi" },
  { img: "/showcase/ai-chatbot.jpeg", badge: "24/7", href: "/ai-chatbot" },
  { img: "/showcase/klinika-coremed.jpeg", badge: "CoreMed", href: "/klinika-crm" },
  { img: "/showcase/ai-video-analitika.jpeg", badge: "AI Kamera", href: "/ai-video-analitika" },
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
      { title: "AI agent yaratish", subtitle: "Biznesingiz uchun aqlli AI agent" },
      { title: "Biznesni avtomatlashtirish", subtitle: "Jarayonlarni AI bilan avtomatlashtiramiz" },
      { title: "Savdo va do'kon", subtitle: "Kassa, ombor va sotuv — bir tizimda" },
      { title: "AI Chatbot", subtitle: "Mijozlarga 24/7 avtomatik javob" },
      { title: "Klinika va salomatlik", subtitle: "Bemor qabuli va navbatni avtomatlashtirish" },
      { title: "AI video analitika", subtitle: "Kameralarni AI bilan avtomatlashtirish" },
    ],
  },
  ru: {
    heading: "Наши решения — для любой сферы",
    subtitle: "Автоматизируем каждый процесс вашего бизнеса с помощью AI.",
    cta: "Подробнее",
    cards: [
      { title: "Создание AI-агента", subtitle: "Умный AI-агент для вашего бизнеса" },
      { title: "Автоматизация бизнеса", subtitle: "Автоматизируем процессы с помощью AI" },
      { title: "Продажи и магазин", subtitle: "Касса, склад и продажи — в одной системе" },
      { title: "AI-чат-бот", subtitle: "Ответы клиентам 24/7" },
      { title: "Клиника и здоровье", subtitle: "Запись пациентов и автоматизация очереди" },
      { title: "AI-видеоаналитика", subtitle: "Автоматизация камер с помощью AI" },
    ],
  },
  en: {
    heading: "Our solutions — for every industry",
    subtitle: "We automate every process of your business with AI.",
    cta: "Learn more",
    cards: [
      { title: "Build an AI agent", subtitle: "A smart AI agent for your business" },
      { title: "Business automation", subtitle: "Automate your processes with AI" },
      { title: "Sales & retail", subtitle: "POS, inventory and sales in one system" },
      { title: "AI Chatbot", subtitle: "24/7 automatic replies to customers" },
      { title: "Clinic & health", subtitle: "Patient booking and queue automation" },
      { title: "AI video analytics", subtitle: "Make your cameras smart with AI" },
    ],
  },
  ar: {
    heading: "حلولنا — لكل مجال",
    subtitle: "نُؤتمت كل عملية في عملك باستخدام الذكاء الاصطناعي.",
    cta: "اعرف المزيد",
    cards: [
      { title: "إنشاء وكيل ذكاء اصطناعي", subtitle: "وكيل ذكاء اصطناعي ذكي لعملك" },
      { title: "أتمتة الأعمال", subtitle: "نُؤتمت عملياتك بالذكاء الاصطناعي" },
      { title: "المبيعات والتجزئة", subtitle: "نقاط البيع والمخزون والمبيعات في نظام واحد" },
      { title: "روبوت دردشة بالذكاء الاصطناعي", subtitle: "ردود تلقائية للعملاء على مدار الساعة" },
      { title: "العيادة والصحة", subtitle: "حجز المرضى وأتمتة الطابور" },
      { title: "تحليلات الفيديو بالذكاء الاصطناعي", subtitle: "جعل الكاميرات ذكية بالذكاء الاصطناعي" },
    ],
  },
  uk: {
    heading: "Наші рішення — для будь-якої сфери",
    subtitle: "Автоматизуємо кожен процес вашого бізнесу за допомогою AI.",
    cta: "Детальніше",
    cards: [
      { title: "Створення AI-агента", subtitle: "Розумний AI-агент для вашого бізнесу" },
      { title: "Автоматизація бізнесу", subtitle: "Автоматизуємо процеси за допомогою AI" },
      { title: "Продажі та магазин", subtitle: "Каса, склад і продажі — в одній системі" },
      { title: "AI-чат-бот", subtitle: "Відповіді клієнтам 24/7" },
      { title: "Клініка та здоров'я", subtitle: "Запис пацієнтів та автоматизація черги" },
      { title: "AI-відеоаналітика", subtitle: "Автоматизація камер за допомогою AI" },
    ],
  },
};

export function AutomationShowcase() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.en;

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // The marquee auto-scrolls right-to-left, but only while the section is on
  // screen (IntersectionObserver toggles the animation). CSS (.tc-marquee-x)
  // handles hover-pause and reduced-motion.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  // Duplicate the cards once so the marquee can loop seamlessly (translateX -50%).
  const loop = [...META, ...META];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="scroll-mt-24 py-20 sm:py-28 bg-[var(--tc-ink)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-14 max-w-2xl">
          <span className="tc-chip">Yechimlar</span>
          <h2
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.heading}
          </h2>
          <p className="mt-4 text-[var(--tc-text-muted)]">{c.subtitle}</p>
        </Reveal>
      </div>

      {/* Continuous right-to-left marquee (cards duplicated for a seamless
          loop). Pauses when off-screen or on hover. */}
      <div className="overflow-hidden">
        <div
          className={`flex w-max gap-6 px-6 tc-marquee-x ${
            inView ? "" : "[animation-play-state:paused]"
          }`}
        >
          {loop.map((m, i) => {
            const meta = c.cards[i % META.length];
            const dup = i >= META.length;
            return (
              <Link
                key={i}
                href={m.href}
                aria-hidden={dup}
                tabIndex={dup ? -1 : undefined}
                className="group relative block aspect-square w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] shadow-[var(--tc-shadow-card)] hover:shadow-[var(--tc-shadow-card-hover)] transition-shadow duration-300"
              >
                <Image
                  src={m.img}
                  alt={meta.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 z-20 p-5">
                  <h3
                    className="text-2xl font-700 text-white mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {meta.title}
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-2">
                    <p className="text-white/75 text-xs leading-snug line-clamp-2 flex-1">
                      {meta.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-white/90 text-sm font-600 shrink-0">
                      {c.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
