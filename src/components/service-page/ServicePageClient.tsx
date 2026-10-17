"use client";

import Image from "next/image";
import { m } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { RemoteDelivery } from "@/components/RemoteDelivery";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";
import { CITIES } from "@/data/cities";
import type { ServiceLang, ServicePageContent, ServicePageCopy } from "./types";
import { ServiceIcon } from "./ServiceIcon";

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
        <m.div
          initial={false}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }}
          className="mb-8"
        >
          <span className="tc-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)]" />
            {copy.hero.badge}
          </span>
        </m.div>

        <m.h1
          initial={false}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.1 } }}
          className="text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight mb-6 text-[var(--tc-text-primary)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {copy.hero.title1}{" "}
          <span className="text-[var(--tc-blue)]">{copy.hero.titleAccent}</span>
          {copy.hero.title2 ? <> {copy.hero.title2}</> : null}
        </m.h1>

        <m.p
          initial={false}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.25 } }}
          className="text-lg md:text-xl text-[var(--tc-text-secondary)] max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          {copy.hero.subtitle}
        </m.p>

        <m.p
          initial={false}
          animate={{ opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.4 } }}
          className="inline-flex items-center gap-2 text-sm text-[var(--tc-text-muted)] font-500 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)]" />
          {copy.hero.trust}
        </m.p>

        {copy.updated ? (
          <m.p
            initial={false}
            animate={{ opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.45 } }}
            className="block text-xs text-[var(--tc-text-muted)] -mt-6 mb-10"
          >
            {copy.updated}
          </m.p>
        ) : null}

        <m.div
          initial={false}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.5 } }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact-hub" className="tc-btn-primary group w-full sm:w-auto text-sm">
            {copy.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
          <a href="#capabilities" className="tc-btn-secondary w-full sm:w-auto text-sm">
            {copy.hero.ctaSecondary}
          </a>
        </m.div>
      </div>

      {copy.heroImage ? (
        <m.div
          initial={false}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.6 } }}
          className="relative z-10 mt-16 max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] shadow-[var(--tc-shadow-card-hover)]">
            <Image
              src={copy.heroImage.src}
              alt={copy.heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </m.div>
      ) : null}
    </section>
  );
}

// ─────────────────────────── Showcase gallery ───────────────────────────
function ShowcaseSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.showcase) return null;
  const showcase = copy.showcase;
  return (
    <section
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] overflow-hidden"
      style={{ borderBottom: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={showcase.badge}
          title={showcase.title}
          titleAccent={showcase.titleAccent}
          subtitle={showcase.subtitle}
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {showcase.items.map((item) => (
            <RevealItem key={item.src}>
              <figure className="h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] shadow-[var(--tc-shadow-card)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-[var(--tc-text-muted)] leading-relaxed">
                  {item.caption}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
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
                    <m.span
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
                    </m.span>
                  </button>
                  <m.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--tc-text-secondary)] leading-relaxed">
                      {item.a}
                    </div>
                  </m.div>
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
  "pos-tizimi": ["toshkent", "samarqand"], // trimmed from 12: small-city pages were thin duplicates
  "ai-avtomatizatsiya": ["toshkent", "samarqand"], // trimmed from 12: small-city pages were thin duplicates
  "ai-chatbot": ["toshkent", "samarqand"],
  "ai-agent": ["samarqand"],
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

// Descriptive anchors ("Toshkentda Telegram bot") instead of bare city names,
// so readers and search engines see where each link leads.
const CITY_SERVICE_NAME: Record<string, Record<ServiceLang, string>> = {
  "pos-tizimi": { uz: "POS tizimi", ru: "POS-система", en: "POS system", ar: "نظام نقاط البيع", uk: "POS-система" },
  "ai-avtomatizatsiya": { uz: "AI avtomatizatsiya", ru: "ИИ-автоматизация", en: "AI automation", ar: "الأتمتة بالذكاء الاصطناعي", uk: "ШІ-автоматизація" },
  "ai-chatbot": { uz: "AI chatbot", ru: "ИИ-чат-бот", en: "AI chatbot", ar: "روبوت محادثة بالذكاء الاصطناعي", uk: "ШІ-чат-бот" },
  "ai-agent": { uz: "AI agent", ru: "ИИ-агент", en: "AI agent", ar: "وكيل ذكاء اصطناعي", uk: "ШІ-агент" },
  "telegram-bot-biznes": { uz: "Telegram bot", ru: "Telegram-бот", en: "Telegram bot", ar: "بوت تيليجرام", uk: "Telegram-бот" },
  "biznes-avtomatlashtirish": { uz: "biznes avtomatlashtirish", ru: "Автоматизация бизнеса", en: "Business automation", ar: "أتمتة الأعمال", uk: "Автоматизація бізнесу" },
};

const CITY_IN: Record<string, Record<ServiceLang, string>> = {
  toshkent: { uz: "Toshkentda", ru: "в Ташкенте", en: "in Tashkent", ar: "في طشقند", uk: "у Ташкенті" },
  samarqand: { uz: "Samarqandda", ru: "в Самарканде", en: "in Samarkand", ar: "في سمرقند", uk: "у Самарканді" },
};

function cityLinkLabel(serviceSlug: string, citySlug: string, fallback: string, locale: ServiceLang): string {
  const service = CITY_SERVICE_NAME[serviceSlug]?.[locale];
  const where = CITY_IN[citySlug]?.[locale];
  if (!service || !where) return fallback;
  return locale === "uz" ? `${where} ${service}` : `${service} ${where}`;
}

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
                {cityLinkLabel(serviceSlug, city.slug, city.name[locale] ?? city.name.uz, locale)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────── Related services (topical cluster) ───────────────────────
// Internal links between sibling service pages. Backlinks pointed almost entirely
// at the homepage, so service pages had no inbound authority; cross-linking siblings
// distributes link equity and builds topical authority for each service cluster.
const RELATED_SERVICES: Record<string, string[]> = {
  "ai-chatbot": ["ai-agent", "telegram-bot-biznes", "crm-integratsiya"],
  "ai-agent": ["ai-chatbot", "ai-avtomatizatsiya", "biznes-avtomatlashtirish"],
  "ai-avtomatizatsiya": ["ai-agent", "ai-chatbot", "biznes-avtomatlashtirish"],
  "biznes-avtomatlashtirish": ["ai-avtomatizatsiya", "crm-integratsiya", "klinika-crm"],
  "crm-integratsiya": ["ai-chatbot", "biznes-avtomatlashtirish", "telegram-bot-biznes"],
  "telegram-bot-biznes": ["ai-chatbot", "ai-agent", "crm-integratsiya"],
  "ai-video-analitika": ["ai-restoran-uchun", "pos-tizimi", "ai-avtomatizatsiya"],
  "xodim-nazorati": ["ai-video-analitika", "biznes-avtomatlashtirish", "pos-tizimi"],
  "klinika-crm": ["biznes-avtomatlashtirish", "crm-integratsiya", "ai-chatbot"],
  "pos-tizimi": ["ai-restoran-uchun", "klinika-crm", "xodim-nazorati"],
  "ai-restoran-uchun": ["pos-tizimi", "ai-chatbot", "ai-video-analitika"],
  "ai-salon-uchun": ["ai-chatbot", "telegram-bot-biznes", "crm-integratsiya"],
  "it-xizmatlar": ["ai-avtomatizatsiya", "biznes-avtomatlashtirish", "crm-integratsiya"],
};

// slug → key inside the existing menu.solutions translations (all 5 locales)
const RELATED_LABEL_KEY: Record<string, string> = {
  "ai-chatbot": "aiChatbot",
  "ai-agent": "aiAgent",
  "ai-avtomatizatsiya": "aiAutomation",
  "biznes-avtomatlashtirish": "businessAutomation",
  "crm-integratsiya": "crmIntegration",
  "ai-video-analitika": "aiVideoAnalytics",
  "telegram-bot-biznes": "telegramBot",
  "pos-tizimi": "posSystem",
  "klinika-crm": "clinicCrm",
  "xodim-nazorati": "employeeMonitoring",
  "it-xizmatlar": "itServices",
  "ai-restoran-uchun": "aiRestaurant",
  "ai-salon-uchun": "aiSalon",
};

const RELATED_HEADING: Record<ServiceLang, string> = {
  uz: "Aloqador xizmatlar",
  ru: "Смежные услуги",
  en: "Related services",
  ar: "خدمات ذات صلة",
  uk: "Суміжні послуги",
};

function RelatedServicesSection({
  serviceSlug,
  locale,
}: {
  serviceSlug?: string;
  locale: ServiceLang;
}) {
  const t = useTranslations("menu.solutions");
  if (!serviceSlug) return null;
  const related = RELATED_SERVICES[serviceSlug];
  if (!related || related.length === 0) return null;
  const heading = RELATED_HEADING[locale] ?? RELATED_HEADING.uz;

  return (
    <section
      className="relative py-14 px-6 bg-[var(--tc-surface-1)]"
      style={{ borderTop: "1px solid var(--tc-border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-6">
          {heading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((slug) => {
            const key = RELATED_LABEL_KEY[slug];
            if (!key) return null;
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group flex items-center justify-between rounded-[var(--tc-radius-md)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] px-5 py-4 hover:border-[var(--tc-border-bright)] transition-colors"
              >
                <span className="text-sm font-600 text-[var(--tc-text-primary)]">
                  {t(key)}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[var(--tc-text-muted)] transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            );
          })}
        </div>
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
      <ShowcaseSection copy={copy} />
      <TechSection copy={copy} />
      <ProcessSection copy={copy} />
      <ExamplesSection copy={copy} />
      <PricingSection copy={copy} />
      <FaqSection copy={copy} />
      <RelatedSection copy={copy} />
      <CityLinksSection serviceSlug={serviceSlug} locale={locale} />
      {/* Fallback row only for pages without their own curated "related" block — otherwise the two repeat each other. */}
      {!copy.related && <RelatedServicesSection serviceSlug={serviceSlug} locale={locale} />}
      {serviceSlug && <RemoteDelivery locale={locale} />}
      <Footer />

      </main>
  );
}
