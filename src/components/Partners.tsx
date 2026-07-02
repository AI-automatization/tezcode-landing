"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/motion/Reveal";

// ─────────────────────────────────────────────────────────
// Partners Section — real partners with internal partner pages.
// NOTE: cards link to INTERNAL partner pages only (no outbound
// links to partner websites — keeps visitors on tezcode.dev).
// ─────────────────────────────────────────────────────────

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  /**
   * "photo" = wide banner photo (object-cover); "logo" = square mark shown on
   * a gradient panel; "banner" = a full pre-composed wordmark/banner image
   * (object-contain, letterboxed on the card's own surface color)
   */
  media: "photo" | "logo" | "banner";
  /** internal route (locale-aware) */
  href: string;
  role: Record<Lang, string>;
  /** 1-2 sentence description of what the partner company actually does */
  description: Record<Lang, string>;
  /** short keyword pills shown under the description */
  tags: Record<Lang, string[]>;
}

const PARTNERS: Partner[] = [
  {
    id: "aisolution",
    name: "AI Solution",
    logoUrl: "/partners/aisolution-og-banner.png",
    media: "banner",
    href: "/partnery/aisolution",
    role: {
      uz: "Rasmiy joriy etish hamkori",
      ru: "Официальный партнёр по внедрению",
      en: "Official implementation partner",
      ar: "شريك التنفيذ الرسمي",
      uk: "Офіційний партнер із впровадження",
    },
    description: {
      uz: "aisolution — Toshkent va Markaziy Osiyoda biznes uchun AI-avtomatizatsiya: savdo, CRM, mijozlar xizmati va analitika. Loyihalar 10 kundan ishga tushadi.",
      ru: "aisolution — ИИ-автоматизация бизнеса в Ташкенте и Центральной Азии: продажи, CRM, клиентский сервис и аналитика. Запуск проектов от 10 дней.",
      en: "aisolution builds AI automation for businesses in Tashkent and Central Asia — sales, CRM, customer service and analytics, with projects launching in as little as 10 days.",
      ar: "aisolution تبني أتمتة الأعمال بالذكاء الاصطناعي في طشقند وآسيا الوسطى — المبيعات وCRM وخدمة العملاء والتحليلات، مع إطلاق المشاريع خلال 10 أيام.",
      uk: "aisolution — ШІ-автоматизація бізнесу в Ташкенті та Центральній Азії: продажі, CRM, клієнтський сервіс і аналітика. Запуск проєктів від 10 днів.",
    },
    tags: {
      uz: ["AI avtomatizatsiya", "CRM", "Analitika"],
      ru: ["ИИ-автоматизация", "CRM", "Аналитика"],
      en: ["AI automation", "CRM", "Analytics"],
      ar: ["أتمتة الذكاء الاصطناعي", "CRM", "تحليلات"],
      uk: ["ШІ-автоматизація", "CRM", "Аналітика"],
    },
  },
  {
    id: "schwarz-digits",
    name: "Schwarz Digits",
    logoUrl: "/partners/schwarz-digits-meeting-duo.jpg",
    media: "photo",
    href: "/partnery/schwarz-digits",
    role: {
      uz: "IT Park orqali boshlangan xalqaro hamkorlik",
      ru: "Международное партнёрство через IT Park",
      en: "International partnership via IT Park",
      ar: "شراكة دولية عبر IT Park",
      uk: "Міжнародне партнерство через IT Park",
    },
    description: {
      uz: "Schwarz Digits — Lidl va Kaufland egasi Schwarz Group'ning raqamli bo'linmasi. Yevropaning suveren AI ekotizimini Capgemini, Deloitte, SAP va Intel bilan birga quradi.",
      ru: "Schwarz Digits — цифровое подразделение Schwarz Group (владелец Lidl и Kaufland). Строит суверенную европейскую AI-экосистему вместе с Capgemini, Deloitte, SAP и Intel.",
      en: "Schwarz Digits is the digital arm of Schwarz Group (owner of Lidl and Kaufland), building a sovereign European AI ecosystem together with Capgemini, Deloitte, SAP and Intel.",
      ar: "Schwarz Digits هي الذراع الرقمية لمجموعة Schwarz (مالكة Lidl وKaufland)، وتبني نظامًا أوروبيًا سياديًا للذكاء الاصطناعي مع Capgemini وDeloitte وSAP وIntel.",
      uk: "Schwarz Digits — цифровий підрозділ Schwarz Group (власник Lidl і Kaufland). Будує суверенну європейську AI-екосистему разом з Capgemini, Deloitte, SAP та Intel.",
    },
    tags: {
      uz: ["Schwarz Digits", "IT Park", "Yevropa"],
      ru: ["Schwarz Digits", "IT Park", "Европа"],
      en: ["Schwarz Digits", "IT Park", "Europe"],
      ar: ["Schwarz Digits", "IT Park", "أوروبا"],
      uk: ["Schwarz Digits", "IT Park", "Європа"],
    },
  },
];

const LABELS: Record<Lang, { title: string; subtitle: string; more: string; badge: string }> = {
  uz: {
    title: "Tezcode'da yangi",
    subtitle:
      "Yangi hamkorliklar, xalqaro aloqalar va biznes uchun AI imkoniyatlari",
    more: "Batafsil",
    badge: "Hamkor",
  },
  ru: {
    title: "Новое в Tezcode",
    subtitle:
      "Новые партнёрства, международные связи и AI-возможности для бизнеса",
    more: "Подробнее",
    badge: "Партнёр",
  },
  en: {
    title: "What's new at Tezcode",
    subtitle: "New partnerships, international connections and AI opportunities for business",
    more: "Learn more",
    badge: "Partner",
  },
  ar: {
    title: "جديد Tezcode",
    subtitle: "شراكات جديدة وروابط دولية وفرص للذكاء الاصطناعي في الأعمال",
    more: "اعرف المزيد",
    badge: "شريك",
  },
  uk: {
    title: "Нове в Tezcode",
    subtitle: "Нові партнерства, міжнародні зв'язки та AI-можливості для бізнесу",
    more: "Детальніше",
    badge: "Партнер",
  },
};

export function Partners() {
  const locale = useLocale() as Lang;
  const l = LABELS[locale] ?? LABELS.uz;

  return (
    <section className="py-20 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-600 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {l.title}
          </h2>
          <p className="text-sm text-[var(--tc-text-muted)]">{l.subtitle}</p>
        </Reveal>

        {/* Partner cards */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 0.08}>
              <PartnerCard partner={partner} locale={locale} more={l.more} badge={l.badge} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  locale,
  more,
  badge,
}: {
  partner: Partner;
  locale: Lang;
  more: string;
  badge: string;
}) {
  const role = partner.role[locale] ?? partner.role.uz;
  const description = partner.description[locale] ?? partner.description.uz;
  const tags = partner.tags[locale] ?? partner.tags.uz;

  return (
    <Link
      href={partner.href}
      className="group relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tc-border-bright)]"
    >
      {/* Media banner */}
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[var(--tc-surface-2)]">
        {partner.media === "photo" ? (
          <>
            <Image
              src={partner.logoUrl}
              alt={`${partner.name} — tezcode`}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover object-top"
            />
            {/* gradient overlay so the badge stays legible over the photo */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--tc-ink) 0%, rgba(10,10,15,0.05) 55%, transparent 75%)",
              }}
            />
          </>
        ) : partner.media === "banner" ? (
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} — tezcode`}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
        ) : (
          <div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              backgroundImage: [
                "linear-gradient(rgba(91,140,255,0.10) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(91,140,255,0.10) 1px, transparent 1px)",
                "radial-gradient(60% 70% at 14% 12%, rgba(51,102,255,0.40), transparent 60%)",
                "radial-gradient(65% 75% at 88% 90%, rgba(0,64,255,0.30), transparent 65%)",
                "linear-gradient(160deg, #10173a 0%, #0a0a0f 55%, #05060b 100%)",
              ].join(", "),
              backgroundSize: "28px 28px, 28px 28px, 100% 100%, 100% 100%, 100% 100%",
            }}
          >
            {/* soft vignette so the tech-grid fades toward the card edges */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(75% 90% at 50% 45%, transparent 30%, #0a0a0f 100%)",
                opacity: 0.55,
              }}
            />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                width={112}
                height={112}
                className="h-16 w-16 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105 md:h-20 md:w-20"
              />
            </div>
          </div>
        )}

        {/* Partner badge */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)]/80 px-3 py-1 text-[11px] font-500 text-[var(--tc-blue-text)] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-blue-light)]" />
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col gap-3 p-6 text-left">
        <div>
          <div
            className="text-lg font-600 text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {partner.name}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--tc-text-secondary)]">
            {role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--tc-text-muted)]">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-2)] px-2.5 py-1 text-xs text-[var(--tc-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <span className="relative mt-auto inline-flex items-center gap-1 pt-3 text-sm font-500 text-[var(--tc-blue-text)] transition-colors group-hover:text-[var(--tc-text-primary)]">
          {more}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
