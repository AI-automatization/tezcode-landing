"use client";

import { useLocale } from "next-intl";
import { Play, Link2, MessageCircle, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WEWATCH_CONTENT, WEWATCH_URL, type WeWatchLang } from "./content";

const ICONS: Record<string, typeof Play> = {
  play: Play,
  link: Link2,
  "message-circle": MessageCircle,
  users: Users,
};

export default function WeWatchPage() {
  const locale = useLocale() as WeWatchLang;
  const t = WEWATCH_CONTENT[locale] ?? WEWATCH_CONTENT.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center">
        <div aria-hidden className="tc-grid-bg absolute inset-0" />
        <Reveal className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="tc-chip">{t.hero.badge}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.1)] text-[#059669] text-xs font-600 px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
              {t.hero.statusLabel}
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.hero.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl mb-8">
            {t.hero.subtitle}
          </p>
          <Magnetic>
            <a
              href={WEWATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-btn-primary inline-flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </Magnetic>
          <p className="text-[var(--tc-text-muted)] text-sm mt-5">{t.hero.ctaNote}</p>
        </Reveal>
      </section>

      {/* Features */}
      <section className="relative py-20 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tc-chip mb-4">{t.features.badge}</span>
            <h2
              className="text-3xl md:text-4xl font-700 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.features.title}{" "}
              <span className="text-[var(--tc-blue-text)]">{t.features.titleAccent}</span>
            </h2>
          </div>
          <RevealStagger className="grid sm:grid-cols-2 gap-5" stagger={0.08}>
            {t.features.items.map((f, i) => {
              const Icon = ICONS[f.icon] ?? Play;
              return (
                <RevealItem key={i}>
                  <div className="tc-card p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <h3
                      className="text-lg font-600 mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-[var(--tc-text-secondary)] leading-relaxed text-sm">
                      {f.desc}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 sm:py-24 px-6 bg-[var(--tc-surface-1)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tc-chip mb-4">{t.steps.badge}</span>
            <h2
              className="text-3xl md:text-4xl font-700 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.steps.title}{" "}
              <span className="text-[var(--tc-blue-text)]">{t.steps.titleAccent}</span>
            </h2>
          </div>
          <RevealStagger className="grid sm:grid-cols-3 gap-5" stagger={0.1}>
            {t.steps.items.map((s, i) => (
              <RevealItem key={i}>
                <div className="tc-card p-6 h-full">
                  <span
                    className="text-3xl font-700 text-[var(--tc-blue-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="text-lg font-600 mt-3 mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[var(--tc-text-secondary)] leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ — visible Q&A mirroring the FAQPage JSON-LD in layout.tsx */}
      <FaqAccordion
        badge={t.faq.badge}
        title={t.faq.title}
        titleAccent={t.faq.titleAccent}
        subtitle={t.faq.subtitle}
        items={t.faq.items}
      />

      {/* Final CTA */}
      <section className="tc-navy-section py-20 sm:py-28 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.ctaBlock.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg mb-8">
            {t.ctaBlock.subtitle}
          </p>
          <Magnetic>
            <a
              href={WEWATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-btn-primary inline-flex items-center gap-2"
            >
              {t.ctaBlock.button}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </Magnetic>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
