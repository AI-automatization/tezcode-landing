"use client";

import { useLocale } from "next-intl";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/motion/Reveal";

// ─────────────────────────────────────────────────────────
// "Tezcode'da yangi" — a horizontal carousel (AI Solution style):
// IT Park residency highlight + real partners. Cards link to
// INTERNAL pages only (keeps visitors on tezcode.dev).
// ─────────────────────────────────────────────────────────

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

// Emerald accents for the IT Park card — tuned to read well on both themes.
const EMERALD_BG = "rgba(5,150,105,0.08)";
const EMERALD_BORDER = "rgba(5,150,105,0.25)";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  media: "photo" | "logo" | "banner";
  href: string;
  role: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: Record<Lang, string[]>;
}

// IT Park residency — official credibility (shown as the featured first card).
const ITPARK = {
  href: "/biz-haqimizda",
  role: {
    uz: "Rasmiy rezident — Texnologik park",
    ru: "Официальный резидент — Технологический парк",
    en: "Official resident — Technological Park",
    ar: "مقيم رسمي — الحديقة التكنولوجية",
    uk: "Офіційний резидент — Технологічний парк",
  } as Record<Lang, string>,
  description: {
    uz: 'Tezcode ("TEZ KOD" MCHJ) — IT Park Uzbekistan rezidenti. Texnopark rezidentlarining Yagona reestriga 2026-yil 18-iyunda kiritildi. Guvohnoma №6237.',
    ru: 'Tezcode (ООО "TEZ KOD") — резидент IT Park Uzbekistan. Внесён в Единый реестр резидентов технопарка 18 июня 2026 года. Свидетельство №6237.',
    en: 'Tezcode ("TEZ KOD" LLC) is an official IT Park Uzbekistan resident, entered into the technopark residents\' unified registry on 18 June 2026. Certificate №6237.',
    ar: 'Tezcode ("TEZ KOD" ذ.م.م) مقيم في IT Park Uzbekistan، أُدرج في السجل الموحّد لمقيمي الحديقة التقنية بتاريخ 18 يونيو 2026. الشهادة رقم 6237.',
    uk: 'Tezcode (ТОВ "TEZ KOD") — резидент IT Park Uzbekistan. Внесений до Єдиного реєстру резидентів технопарку 18 червня 2026 року. Свідоцтво №6237.',
  } as Record<Lang, string>,
  tags: {
    uz: ["IT Park", "Rezident", "№6237"],
    ru: ["IT Park", "Резидент", "№6237"],
    en: ["IT Park", "Resident", "№6237"],
    ar: ["IT Park", "مقيم", "№6237"],
    uk: ["IT Park", "Резидент", "№6237"],
  } as Record<Lang, string[]>,
};

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

const LABELS: Record<Lang, { title: string; subtitle: string; more: string; badge: string; resident: string }> = {
  uz: {
    title: "Tezcode'da yangi",
    subtitle: "Yangi hamkorliklar, xalqaro aloqalar va biznes uchun AI imkoniyatlari",
    more: "Batafsil",
    badge: "Hamkor",
    resident: "Rezident",
  },
  ru: {
    title: "Новое в Tezcode",
    subtitle: "Новые партнёрства, международные связи и AI-возможности для бизнеса",
    more: "Подробнее",
    badge: "Партнёр",
    resident: "Резидент",
  },
  en: {
    title: "What's new at Tezcode",
    subtitle: "New partnerships, international connections and AI opportunities for business",
    more: "Learn more",
    badge: "Partner",
    resident: "Resident",
  },
  ar: {
    title: "جديد Tezcode",
    subtitle: "شراكات جديدة وروابط دولية وفرص للذكاء الاصطناعي في الأعمال",
    more: "اعرف المزيد",
    badge: "شريك",
    resident: "مقيم",
  },
  uk: {
    title: "Нове в Tezcode",
    subtitle: "Нові партнерства, міжнародні зв'язки та AI-можливості для бізнесу",
    more: "Детальніше",
    badge: "Партнер",
    resident: "Резидент",
  },
};

export function Partners() {
  const locale = useLocale() as Lang;
  const l = LABELS[locale] ?? LABELS.uz;

  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // itpark card + partner cards
  const total = 1 + PARTNERS.length;

  const scrollToIndex = useCallback((i: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: number) => {
      const next = Math.min(total - 1, Math.max(0, active + dir));
      scrollToIndex(next);
    },
    [active, total, scrollToIndex],
  );

  // Track the closest card to update the active dot.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      let closest = 0;
      let min = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.scrollLeft - 8);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setActive(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const arrowBtnClass =
    "w-10 h-10 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] shadow-[var(--tc-shadow-card)] flex items-center justify-center text-[var(--tc-text-secondary)] hover:border-[var(--tc-blue)] hover:text-[var(--tc-blue-text)] disabled:opacity-30 disabled:pointer-events-none transition-colors";

  return (
    <section className="py-20 sm:py-28 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header — chip + title/subtitle left, arrows right */}
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4">
              <span className="tc-chip">{l.badge}</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-3 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {l.title}
            </h2>
            <p className="text-sm md:text-base text-[var(--tc-text-muted)] max-w-xl leading-relaxed">
              {l.subtitle}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => step(-1)}
              disabled={active === 0}
              className={arrowBtnClass}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => step(1)}
              disabled={active >= total - 1}
              className={arrowBtnClass}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Featured — IT Park residency */}
          <ItParkCard locale={locale} more={l.more} resident={l.resident} />

          {/* Partner cards */}
          {PARTNERS.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              locale={locale}
              more={l.more}
              badge={l.badge}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to card ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-[var(--tc-blue)]"
                  : "w-2 bg-[var(--tc-border-bright)] hover:bg-[var(--tc-text-muted)]",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── IT Park residency featured card (emerald accents, distinct) ──
function ItParkCard({
  locale,
  more,
  resident,
}: {
  locale: Lang;
  more: string;
  resident: string;
}) {
  const role = ITPARK.role[locale] ?? ITPARK.role.uz;
  const description = ITPARK.description[locale] ?? ITPARK.description.uz;
  const tags = ITPARK.tags[locale] ?? ITPARK.tags.uz;

  return (
    <Link
      href={ITPARK.href}
      className="group tc-card tc-card-hover relative flex w-[300px] sm:w-[420px] shrink-0 snap-start flex-col overflow-hidden border-[rgba(5,150,105,0.25)]"
    >
      {/* Real IT Park residency certificate */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-white p-2">
        <div className="relative h-full w-full">
          <Image
            src="/it-park-guvohnoma.jpg"
            alt='IT Park Uzbekistan rezidentlik guvohnomasi — "TEZ KOD" MCHJ, №6237'
            fill
            draggable={false}
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-top select-none pointer-events-none [-webkit-user-drag:none]"
          />
        </div>
        <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)]/90 px-3 py-1 text-[11px] font-500 text-[var(--tc-text-primary)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-success)]" />
          {resident}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-3 p-6 text-start">
        <div>
          <div
            className="text-lg font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            IT Park Uzbekistan
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--tc-success)]">{role}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--tc-text-muted)]">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-1 text-xs text-[var(--tc-success)]"
                style={{
                  border: `1px solid ${EMERALD_BORDER}`,
                  background: EMERALD_BG,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="relative mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-500 text-[var(--tc-success)]">
          {more}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
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
      className="group tc-card tc-card-hover relative flex w-[300px] sm:w-[380px] shrink-0 snap-start flex-col overflow-hidden"
    >
      {/* Media banner */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[var(--tc-surface-2)]">
        {partner.media === "photo" ? (
          <>
            <Image
              src={partner.logoUrl}
              alt={`${partner.name} — tezcode`}
              fill
              draggable={false}
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover object-top select-none pointer-events-none [-webkit-user-drag:none]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--tc-surface-1), transparent 60%)",
              }}
            />
          </>
        ) : (
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} — tezcode`}
            fill
            draggable={false}
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover select-none pointer-events-none [-webkit-user-drag:none]"
          />
        )}

        <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)]/90 px-3 py-1 text-[11px] font-500 text-[var(--tc-text-primary)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-blue)]" />
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col gap-3 p-6 text-start">
        <div>
          <div
            className="text-lg font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {partner.name}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--tc-text-secondary)]">{role}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--tc-text-muted)]">{description}</p>
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

        <span className="relative mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-500 text-[var(--tc-blue-text)]">
          {more}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
