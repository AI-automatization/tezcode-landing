"use client";

import { useLocale } from "next-intl";
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
  /** internal route (locale-aware) */
  href: string;
  role: Record<Lang, string>;
}

const PARTNERS: Partner[] = [
  {
    id: "aisolution",
    name: "AI Solution",
    logoUrl: "/partners/aisolution-logo.png",
    href: "/partnery/aisolution",
    role: {
      uz: "Rasmiy joriy etish hamkori",
      ru: "Официальный партнёр по внедрению",
      en: "Official implementation partner",
      ar: "شريك التنفيذ الرسمي",
      uk: "Офіційний партнер із впровадження",
    },
  },
];

const LABELS: Record<Lang, { title: string; subtitle: string; more: string }> = {
  uz: {
    title: "Hamkorlarimiz",
    subtitle:
      "tezcode mahsulotlarini bizneslarga yetkazadigan ishonchli hamkorlar",
    more: "Batafsil",
  },
  ru: {
    title: "Наши партнёры",
    subtitle:
      "Надёжные партнёры, которые внедряют продукты tezcode в бизнес",
    more: "Подробнее",
  },
  en: {
    title: "Our Partners",
    subtitle: "Trusted partners who bring tezcode products to businesses",
    more: "Learn more",
  },
  ar: {
    title: "شركاؤنا",
    subtitle: "شركاء موثوقون ينفّذون منتجات tezcode في الأعمال",
    more: "اعرف المزيد",
  },
  uk: {
    title: "Наші партнери",
    subtitle: "Надійні партнери, які впроваджують продукти tezcode у бізнес",
    more: "Детальніше",
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
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 0.08}>
              <PartnerCard partner={partner} locale={locale} more={l.more} />
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
}: {
  partner: Partner;
  locale: Lang;
  more: string;
}) {
  return (
    <Link
      href={partner.href}
      className="group relative flex w-full max-w-sm flex-col items-center gap-4 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tc-border-bright)] hover:bg-[var(--tc-surface-2)]"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[var(--tc-radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(120% 80% at 50% 0%, var(--tc-blue-dim), transparent 60%)" }} />

      {/* Logo */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-[var(--tc-radius-md)] bg-white/5 p-2 ring-1 ring-[var(--tc-border)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <div className="relative">
        <div
          className="text-lg font-600 text-[var(--tc-text-primary)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {partner.name}
        </div>
        <div className="mt-1 text-xs text-[var(--tc-blue-text)]">
          {partner.role[locale] ?? partner.role.uz}
        </div>
      </div>

      {/* CTA */}
      <span className="relative mt-1 inline-flex items-center gap-1 text-sm font-500 text-[var(--tc-text-secondary)] transition-colors group-hover:text-[var(--tc-text-primary)]">
        {more}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
