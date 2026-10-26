"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { SolutionVisual, type SolutionScene } from "@/components/solutions/SolutionVisual";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Structural data (same across languages); text comes from CONTENT per locale.
// Each card shows an animated mini-scene instead of a stock photo.
const META = [
  { scene: "camera" as SolutionScene, href: "/ai-video-analitika" },
  { scene: "hr" as SolutionScene, href: "/ai-agent" },
  { scene: "sales" as SolutionScene, href: "/ai-agent" },
  { scene: "report" as SolutionScene, href: "/ai-avtomatizatsiya" },
  { scene: "inventory" as SolutionScene, href: "/ai-avtomatizatsiya" },
  { scene: "marketing" as SolutionScene, href: "/ai-avtomatizatsiya" },
] as const;

type Content = {
  badge: string;
  heading: string;
  subtitle: string;
  cta: string;
  cards: { title: string; subtitle: string }[];
};

const CONTENT: Record<string, Content> = {
  uz: {
    badge: "Yechimlar",
    heading: "Bizning yechimlar — har soha uchun",
    subtitle: "AI bilan biznesingizning har bir jarayonini avtomatlashtiramiz.",
    cta: "Batafsil",
    cards: [
      { title: "AI kamera", subtitle: "Tashrif, navbat va xodimlarni kameradan kuzatadi" },
      { title: "AI HR", subtitle: "Arizalarni saralaydi va nomzodni suhbatga yozadi" },
      { title: "AI sotuv menejeri", subtitle: "Mijozga javob beradi va lidni CRM'ga yozadi" },
      { title: "AI hisobotchi", subtitle: "Kunlik hisobotni o'zi tayyorlab Telegram'ga yuboradi" },
      { title: "AI ombor nazoratchisi", subtitle: "Qoldiqni kuzatadi va tugayotgan mahsulotni ogohlantiradi" },
      { title: "AI marketing", subtitle: "Post, reklama matni va rasmni tayyorlab, vaqtida joylaydi" },
    ],
  },
  ru: {
    badge: "Решения",
    heading: "Наши решения — для любой сферы",
    subtitle: "Автоматизируем каждый процесс вашего бизнеса с помощью ИИ.",
    cta: "Подробнее",
    cards: [
      { title: "ИИ-камера", subtitle: "Следит за посещаемостью, очередью и сотрудниками по камерам" },
      { title: "ИИ-HR", subtitle: "Отбирает отклики и записывает кандидатов на собеседование" },
      { title: "ИИ-менеджер продаж", subtitle: "Отвечает клиентам и заносит лиды в CRM" },
      { title: "ИИ-отчёты", subtitle: "Сам готовит ежедневный отчёт и отправляет в Telegram" },
      { title: "ИИ-контроль склада", subtitle: "Следит за остатками и предупреждает о нехватке товара" },
      { title: "ИИ-маркетинг", subtitle: "Готовит посты, рекламные тексты и визуалы и публикует по графику" },
    ],
  },
  en: {
    badge: "Solutions",
    heading: "Our solutions — for every industry",
    subtitle: "We automate every process of your business with AI.",
    cta: "Learn more",
    cards: [
      { title: "AI camera", subtitle: "Tracks visits, queues and staff from your cameras" },
      { title: "AI HR", subtitle: "Screens applications and books candidates for interviews" },
      { title: "AI sales manager", subtitle: "Answers customers and logs leads in your CRM" },
      { title: "AI reporting", subtitle: "Builds the daily report and sends it to Telegram" },
      { title: "AI inventory control", subtitle: "Watches stock levels and warns before items run out" },
      { title: "AI marketing", subtitle: "Drafts posts, ad copy and visuals and publishes them on schedule" },
    ],
  },
  ar: {
    badge: "الحلول",
    heading: "حلولنا — لكل مجال",
    subtitle: "نُؤتمت كل عملية في عملك باستخدام الذكاء الاصطناعي.",
    cta: "اعرف المزيد",
    cards: [
      { title: "كاميرا بالذكاء الاصطناعي", subtitle: "تتابع الزيارات والطوابير والموظفين عبر الكاميرات" },
      { title: "موارد بشرية بالذكاء الاصطناعي", subtitle: "تفرز الطلبات وتحجز المقابلات للمرشحين" },
      { title: "مدير مبيعات بالذكاء الاصطناعي", subtitle: "يرد على العملاء ويسجل العملاء المحتملين في CRM" },
      { title: "تقارير بالذكاء الاصطناعي", subtitle: "يُعد التقرير اليومي ويرسله إلى تيليغرام" },
      { title: "مراقبة المخزون بالذكاء الاصطناعي", subtitle: "يراقب المخزون وينبه قبل نفاد المنتجات" },
      { title: "تسويق بالذكاء الاصطناعي", subtitle: "يُعد المنشورات ونصوص الإعلانات والصور وينشرها في موعدها" },
    ],
  },
  uk: {
    badge: "Рішення",
    heading: "Наші рішення — для будь-якої сфери",
    subtitle: "Автоматизуємо кожен процес вашого бізнесу за допомогою AI.",
    cta: "Детальніше",
    cards: [
      { title: "AI-камера", subtitle: "Стежить за відвідуваністю, чергою та працівниками з камер" },
      { title: "AI-HR", subtitle: "Відбирає відгуки та записує кандидатів на співбесіду" },
      { title: "AI-менеджер продажів", subtitle: "Відповідає клієнтам і заносить ліди в CRM" },
      { title: "AI-звіти", subtitle: "Сам готує щоденний звіт і надсилає в Telegram" },
      { title: "AI-контроль складу", subtitle: "Стежить за залишками і попереджає про нестачу товару" },
      { title: "AI-маркетинг", subtitle: "Готує пости, рекламні тексти й візуали та публікує за графіком" },
    ],
  },
};

export function AutomationShowcase() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.en;

  return (
    <section
      id="solutions"
      className="scroll-mt-24 py-20 sm:py-28 bg-[var(--tc-ink)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-14 max-w-2xl">
          <span className="tc-chip">{c.badge}</span>
          <h2
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.heading}
          </h2>
          <p className="mt-4 text-[var(--tc-text-muted)]">{c.subtitle}</p>
        </Reveal>
      </div>

      {/* Static 3×2 grid in the site's card style (the old auto-scrolling
          marquee moved text while people were reading it). */}
      <div className="max-w-7xl mx-auto px-6">
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {META.map((m, i) => {
            const card = c.cards[i];
            return (
              <RevealItem key={m.scene} className="h-full">
                <Link href={m.href} className="group tc-card tc-card-hover h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--tc-border)]">
                    <SolutionVisual scene={m.scene} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="text-lg font-700 text-[var(--tc-text-primary)] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--tc-text-secondary)] leading-relaxed flex-1">{card.subtitle}</p>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
