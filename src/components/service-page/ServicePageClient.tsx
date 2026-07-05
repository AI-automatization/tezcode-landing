"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";
import { CITIES, CITY_SLUGS } from "@/data/cities";
import type { ServiceLang, ServicePageContent, ServicePageCopy } from "./types";
import { ServiceIcon } from "./ServiceIcon";
import { StickyCTA } from "@/components/StickyCTA";

// Reusable renderer for the Tezcode TIER 1 service pages, in the LIGHT premium
// design system (data-theme="light"): tc-card surfaces, tc-chip section labels,
// one blue accent, navy anchor for the final CTA. Each route only supplies a
// per-locale copy object — layout lives here.

const EASE = [0.22, 1, 0.36, 1] as const;

// Shared section header: chip label → H2 (accent word in solid blue) → subtitle.
function SectionHeader({
  badge,
  title,
  titleAccent,
  subtitle,
  centered = false,
}: {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? "text-center mb-14" : "max-w-3xl mb-14"}>
      <span className="tc-chip mb-6">{badge}</span>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title} <span className="text-[var(--tc-blue-text)]">{titleAccent}</span>
      </h2>
      <p
        className={[
          "text-[var(--tc-text-muted)] text-lg leading-relaxed max-w-2xl",
          centered ? "mx-auto" : "",
        ].join(" ")}
      >
        {subtitle}
      </p>
    </Reveal>
  );
}

// ─────────────────────────── Hero ───────────────────────────
function HeroSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div aria-hidden className="absolute inset-0 tc-grid-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, var(--tc-blue), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }}
          className="mb-8"
        >
          <span className="tc-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)]" />
            {copy.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.1 } }}
          className="text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight mb-6 text-[var(--tc-text-primary)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {copy.hero.title1}{" "}
          <span className="text-[var(--tc-blue)]">{copy.hero.titleAccent}</span>
          {copy.hero.title2 ? <> {copy.hero.title2}</> : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.25 } }}
          className="text-lg md:text-xl text-[var(--tc-text-secondary)] max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.4 } }}
          className="inline-flex items-center gap-2 text-sm text-[var(--tc-text-muted)] font-500 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)]" />
          {copy.hero.trust}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.5 } }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#consult" className="tc-btn-primary group w-full sm:w-auto text-sm">
            {copy.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
          <a href="#capabilities" className="tc-btn-secondary w-full sm:w-auto text-sm">
            {copy.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────── Capabilities ───────────────────────────
function CapabilitiesSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section
      id="capabilities"
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] overflow-hidden"
      style={{ borderTop: "1px solid var(--tc-border)", borderBottom: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={copy.capabilities.badge}
          title={copy.capabilities.title}
          titleAccent={copy.capabilities.titleAccent}
          subtitle={copy.capabilities.subtitle}
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {copy.capabilities.items.map((item, i) => (
            <RevealItem key={i}>
              <div className="tc-card tc-card-hover h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center mb-5">
                  <ServiceIcon name={item.icon} className="w-6 h-6" />
                </div>
                <h3
                  className="text-xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Process ───────────────────────────
function ProcessSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] overflow-hidden"
      style={{ borderTop: "1px solid var(--tc-border)", borderBottom: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={copy.process.badge}
          title={copy.process.title}
          titleAccent={copy.process.titleAccent}
          subtitle={copy.process.subtitle}
          centered
        />

        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] border-t border-dashed"
            style={{ borderColor: "var(--tc-border-bright)" }}
          />
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
            {copy.process.steps.map((step) => (
              <RevealItem key={step.num}>
                <div className="tc-card tc-card-hover relative p-6 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center">
                      <ServiceIcon name={step.icon} className="w-5 h-5" />
                    </div>
                    <span
                      className="text-3xl font-800 text-[var(--tc-blue-text)] opacity-30"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── Examples ───────────────────────────
function ExamplesSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={copy.examples.badge}
          title={copy.examples.title}
          titleAccent={copy.examples.titleAccent}
          subtitle={copy.examples.subtitle}
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
          {copy.examples.items.map((item) => (
            <RevealItem key={item.tag}>
              <div className="tc-card tc-card-hover relative h-full p-8 overflow-hidden">
                <span
                  className="absolute top-6 end-6 text-5xl font-800 text-[var(--tc-blue)] opacity-10 select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.tag}
                </span>
                <h3
                  className="relative text-xl md:text-2xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight pe-16"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="relative text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── FAQ ───────────────────────────
function FaqSection({ copy }: { copy: ServicePageCopy }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          badge={copy.faq.badge}
          title={copy.faq.title}
          titleAccent={copy.faq.titleAccent}
          subtitle={copy.faq.subtitle}
          centered
        />

        <RevealStagger className="space-y-3" stagger={0.08}>
          {copy.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealItem key={i}>
                <div
                  className="tc-card overflow-hidden transition-colors"
                  style={isOpen ? { borderColor: "var(--tc-blue)" } : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-start"
                  >
                    <span
                      className="text-base md:text-lg font-600 text-[var(--tc-text-primary)] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className={[
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                        isOpen
                          ? "bg-[var(--tc-blue)] text-white"
                          : "bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)]",
                      ].join(" ")}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--tc-text-secondary)] leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Tech stack ───────────────────────────
function TechSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.tech) return null;
  const tech = copy.tech;
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={tech.badge}
          title={tech.title}
          titleAccent={tech.titleAccent}
          subtitle={tech.subtitle}
        />

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {tech.items.map((item) => (
            <RevealItem key={item.name}>
              <div className="tc-card tc-card-hover h-full p-6">
                <h3
                  className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Pricing factors ───────────────────────────
function PricingSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.pricing) return null;
  const pricing = copy.pricing;
  return (
    <section
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] overflow-hidden"
      style={{ borderTop: "1px solid var(--tc-border)", borderBottom: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          badge={pricing.badge}
          title={pricing.title}
          titleAccent={pricing.titleAccent}
          subtitle={pricing.subtitle}
          centered
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {pricing.factors.map((f) => (
            <RevealItem key={f.title}>
              <div className="tc-card tc-card-hover h-full p-7">
                <h3
                  className="text-lg md:text-xl font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                {f.price ? (
                  <p className="text-[var(--tc-blue-text)] font-700 text-lg mb-2">{f.price}</p>
                ) : null}
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        {pricing.note ? (
          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-sm text-[var(--tc-text-muted)] max-w-2xl mx-auto">
              {pricing.note}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

// ─────────────────────────── Related links ───────────────────────────
function RelatedSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.related) return null;
  const related = copy.related;
  return (
    <section
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] overflow-hidden"
      style={{ borderTop: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={related.badge}
          title={related.title}
          titleAccent={related.titleAccent}
          subtitle={related.subtitle}
        />

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {related.links.map((link) => (
            <RevealItem key={link.href}>
              <Link href={link.href} className="tc-card tc-card-hover group flex flex-col h-full p-6">
                <h3
                  className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-[var(--tc-blue-text)] transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </h3>
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{link.desc}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── City links row ───────────────────────────
// Unobtrusive internal-link row to the live per-city landing pages of a
// service (/pos-tizimi/toshkent, …). Static map mirrors each route's
// generateStaticParams so we only link city pages that actually exist.
const SERVICE_CITY_SLUGS: Record<string, string[]> = {
  "pos-tizimi": CITY_SLUGS, // all 12 cities live (CITY_SLUGS fan-out)
  "ai-avtomatizatsiya": CITY_SLUGS, // all 12 cities live (CITY_SLUGS fan-out)
  "ai-chatbot": ["toshkent", "samarqand"],
  "ai-agent": ["toshkent", "samarqand"],
  "telegram-bot-biznes": ["toshkent", "samarqand"],
  "biznes-avtomatlashtirish": ["toshkent", "samarqand"],
};

const CITY_ROW_HEADING: Record<ServiceLang, string> = {
  uz: "Shaharlar bo'yicha",
  ru: "По городам",
  en: "By city",
  ar: "حسب المدينة",
  uk: "За містами",
};

function CityLinksSection({
  serviceSlug,
  locale,
}: {
  serviceSlug?: string;
  locale: ServiceLang;
}) {
  if (!serviceSlug) return null;
  const citySlugs = SERVICE_CITY_SLUGS[serviceSlug];
  if (!citySlugs || citySlugs.length === 0) return null;
  const cities = CITIES.filter((c) => citySlugs.includes(c.slug));
  const heading = CITY_ROW_HEADING[locale] ?? CITY_ROW_HEADING.uz;

  return (
    <section
      className="relative py-10 px-6 bg-[var(--tc-surface-0)]"
      style={{ borderTop: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-4">
          {heading}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/${serviceSlug}/${city.slug}`}
                className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
              >
                {city.name[locale] ?? city.name.uz}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────── Final CTA (navy anchor) ───────────────────────────
function FinalCtaSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section id="consult" className="tc-navy-section relative py-20 sm:py-28 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,64,255,0.45), transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Reveal>
          <span className="tc-chip mb-6">{copy.cta.badge}</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-800 mb-6 tracking-tight leading-[1.08] text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.cta.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.cta.titleAccent}</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
            {copy.cta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="https://t.me/tezcode_managament"
            target="_blank"
            rel="noopener noreferrer"
            className="tc-btn-primary group text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {copy.cta.button}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-[var(--tc-text-muted)]">{copy.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────── Page entry ───────────────────────────
export function ServicePageClient({
  content,
  serviceSlug,
}: {
  content: ServicePageContent;
  // Route slug of the service (e.g. "pos-tizimi") — enables the city links row
  // when the service has live per-city pages. Omitted on city pages themselves.
  serviceSlug?: string;
}) {
  const locale = useLocale() as ServiceLang;
  const copy = content[locale] ?? content.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />
      <HeroSection copy={copy} />
      <CapabilitiesSection copy={copy} />
      <TechSection copy={copy} />
      <ProcessSection copy={copy} />
      <ExamplesSection copy={copy} />
      <PricingSection copy={copy} />
      <FaqSection copy={copy} />
      <RelatedSection copy={copy} />
      <CityLinksSection serviceSlug={serviceSlug} locale={locale} />
      <FinalCtaSection copy={copy} />
      <Footer />
          <StickyCTA />

      </main>
  );
}
