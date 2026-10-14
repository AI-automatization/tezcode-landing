"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  FileText,
  MessageSquareText,
  Package,
  Presentation,
  ShieldCheck,
  UserPlus,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Named-client case study (customer-story layout): navy hero with the
// Tezcode × client logo lockup, a sticky client-facts sidebar and the story.
// Only facts the client agreed to publish — no invented metrics or quotes.

export type CaseStoryLang = "uz" | "ru" | "en";

const FEATURE_ICONS = {
  assistant: MessageSquareText,
  audit: ClipboardCheck,
  inventory: Package,
  finance: Wallet,
  hr: Users,
  supervisor: BarChart3,
  candidate: UserPlus,
  report: FileText,
  summary: Presentation,
} satisfies Record<string, LucideIcon>;

export type CaseImage = { src: string; alt: string; width: number; height: number };

export type CaseStoryCopy = {
  back: string;
  badge: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  factsTitle: string;
  facts: { label: string; value: string }[];
  sideCta: string;
  problemTitle: string;
  problemParas: string[];
  solutionTitle: string;
  solutionParas: string[];
  gallery?: CaseImage[];
  galleryCaption?: string;
  featuresTitle: string;
  features: { icon: keyof typeof FEATURE_ICONS; title: string; desc: string }[];
  rulesTitle?: string;
  rules?: string[];
  timelineTitle: string;
  timeline: { phase: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaSecondary: string;
  ctaService: string;
};

export type CaseStoryBrand = {
  logo: CaseImage;
  // Extra client visuals shown under the facts card (e.g. product shots).
  sideImages?: CaseImage[];
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-5 tracking-tight"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h2>
  );
}

export function CaseStoryClient({
  copy,
  brand,
  serviceHref,
}: {
  copy: Record<CaseStoryLang, CaseStoryCopy>;
  brand: CaseStoryBrand;
  serviceHref: string;
}) {
  const locale = useLocale();
  const t = copy[locale as CaseStoryLang] ?? copy.uz;

  return (
    <main data-theme="light" className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      {/* Hero */}
      {/* mt-16 = navbar height, so the navy hero starts right under the bar */}
      <section className="tc-navy-section relative mt-16 overflow-hidden px-6 pt-14 pb-16 md:pt-20 md:pb-20">
        <div aria-hidden className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--tc-blue)] opacity-25 blur-3xl" />
        <div aria-hidden className="absolute -bottom-48 -left-24 h-80 w-80 rounded-full bg-[var(--tc-blue)] opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/case-studies"
              className="mb-8 block w-fit text-sm text-[var(--tc-text-muted)] transition-colors hover:text-[var(--tc-text-primary)]"
            >
              {t.back}
            </Link>
            {/* Partner lockup: Tezcode | client, on one white plate */}
            <div className="mb-8 flex min-h-16 w-fit items-center gap-5 rounded-2xl bg-white px-5 py-2 shadow-lg md:min-h-[72px] md:px-6">
              <span className="flex items-center gap-2.5">
                <Image src="/tezcode-logo-ink.png" alt="Tezcode" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10" />
                <span className="text-lg font-700 tracking-tight text-[#0b1530] md:text-xl" style={{ fontFamily: "var(--font-display)" }}>
                  Tezcode
                </span>
              </span>
              <span aria-hidden className="h-9 w-px bg-slate-300" />
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className={
                  brand.logo.width / brand.logo.height < 2
                    ? "h-14 w-auto object-contain md:h-[72px]" // square marks need more height to read
                    : "h-9 w-auto object-contain md:h-10"
                }
              />
            </div>
            <div className="tc-chip mb-6">{t.badge}</div>
            <h1
              className="mb-6 max-w-4xl text-4xl font-700 leading-[1.08] tracking-tight text-[var(--tc-text-primary)] md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.title}
            </h1>
            <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[var(--tc-text-secondary)] md:text-xl">{t.intro}</p>
          </Reveal>
          <RevealStagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.06}>
            {t.stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="h-full rounded-2xl border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-5">
                  <div
                    className="mb-1 text-2xl font-700 text-[var(--tc-text-primary)] md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs leading-relaxed text-[var(--tc-text-muted)] md:text-sm">{s.label}</div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="tc-card p-6">
              <div className="mb-6 flex items-center">
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className={
                    brand.logo.width / brand.logo.height < 2
                      ? "h-28 w-auto max-w-full object-contain"
                      : "h-12 w-auto max-w-full object-contain"
                  }
                />
              </div>
              <div className="mb-4 text-xs font-600 uppercase tracking-[0.2em] text-[var(--tc-text-muted)]">{t.factsTitle}</div>
              <dl className="space-y-4">
                {t.facts.map((f) => (
                  <div key={f.label} className="border-b border-[var(--tc-border)] pb-4 last:border-0 last:pb-0">
                    <dt className="mb-0.5 text-xs text-[var(--tc-text-muted)]">{f.label}</dt>
                    <dd className="text-sm font-500 text-[var(--tc-text-primary)]">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/aloqa" className="tc-btn-primary mt-6 flex w-full items-center justify-center gap-2 text-sm">
                {t.sideCta}
                <ArrowRight aria-hidden className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            {brand.sideImages?.length ? (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {brand.sideImages.map((img) => (
                  <div key={img.src} className="tc-card overflow-hidden p-3">
                    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="h-auto w-full object-contain" />
                  </div>
                ))}
              </div>
            ) : null}
          </aside>

          <article className="min-w-0">
            <Reveal>
              <H2>{t.problemTitle}</H2>
              <div className="mb-14 space-y-4">
                {t.problemParas.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-[var(--tc-text-secondary)] md:text-lg">{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <H2>{t.solutionTitle}</H2>
              <div className="mb-10 space-y-4">
                {t.solutionParas.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-[var(--tc-text-secondary)] md:text-lg">{p}</p>
                ))}
              </div>
            </Reveal>

            {t.gallery?.length ? (
              <Reveal className="mb-14">
                <div className={`grid gap-4 ${t.gallery.length >= 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {t.gallery.map((img) => (
                    <div key={img.src} className="overflow-hidden rounded-2xl border border-[var(--tc-border)] bg-[var(--tc-surface-2)]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 768px) 50vw, 400px"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {t.galleryCaption ? (
                  <p className="mt-3 text-sm text-[var(--tc-text-muted)]">{t.galleryCaption}</p>
                ) : null}
              </Reveal>
            ) : null}

            <Reveal>
              <H2>{t.featuresTitle}</H2>
            </Reveal>
            <RevealStagger className="mb-14 grid gap-4 sm:grid-cols-2" stagger={0.05}>
              {t.features.map((f) => {
                const Icon = FEATURE_ICONS[f.icon];
                return (
                  <RevealItem key={f.title}>
                    <div className="tc-card h-full p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tc-blue-dim)]">
                        <Icon aria-hidden className="h-5 w-5 text-[var(--tc-blue-text)]" strokeWidth={1.75} />
                      </div>
                      <h3 className="mb-1 text-base font-700 text-[var(--tc-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--tc-text-muted)]">{f.desc}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>

            {t.rules && t.rulesTitle ? (
              <Reveal>
                <div className="mb-14 rounded-2xl border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <ShieldCheck aria-hidden className="h-6 w-6 text-[var(--tc-success)]" strokeWidth={1.75} />
                    <h2 className="text-xl font-700 text-[var(--tc-text-primary)] md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                      {t.rulesTitle}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {t.rules.map((r) => (
                      <li key={r} className="flex gap-3 leading-relaxed text-[var(--tc-text-secondary)]">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--tc-success)]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}

            <Reveal>
              <H2>{t.timelineTitle}</H2>
            </Reveal>
            <RevealStagger className="grid gap-4 md:grid-cols-2" stagger={0.08}>
              {t.timeline.map((step, i) => (
                <RevealItem key={step.title}>
                  <div className="tc-card relative h-full p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--tc-blue)] text-sm font-700 text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs font-600 uppercase tracking-[0.2em] text-[var(--tc-blue-text)]">{step.phase}</span>
                    </div>
                    <h3 className="mb-1 text-lg font-700 text-[var(--tc-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--tc-text-secondary)]">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </article>
        </div>
      </section>

      {/* Next steps — the site footer already carries the consultation CTA,
          so this stays a light strip with links only. */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <h2
              className="text-xl font-700 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.ctaTitle}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href={serviceHref} className="tc-btn-primary text-sm">{t.ctaService}</Link>
              <Link href="/case-studies" className="tc-btn-secondary text-sm">{t.ctaSecondary}</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
