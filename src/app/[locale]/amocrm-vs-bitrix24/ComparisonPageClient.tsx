"use client";

import { useLocale } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";
import type { ServiceLang } from "@/components/service-page/types";
import { CONTENT } from "./content";

export function ComparisonPageClient() {
  const locale = useLocale() as ServiceLang;
  const copy = CONTENT[locale] ?? CONTENT.uz;

  return (
    <main className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-16 sm:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="tc-chip mb-6">{copy.hero.badge}</span>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-800 tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {copy.hero.title}{" "}
              <span className="text-[var(--tc-blue-text)]">{copy.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              {copy.hero.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-[var(--tc-text-secondary)] leading-relaxed tc-card p-6 sm:p-8">
              {copy.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl sm:text-3xl font-700 mb-8 text-center tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {copy.tableTitle}
            </h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto tc-card">
              <table className="w-full border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[var(--tc-border)]">
                    <th className="text-start p-4 text-sm font-600 text-[var(--tc-text-muted)]">
                      {copy.tableHead.feature}
                    </th>
                    <th className="text-start p-4 text-base font-700 text-[var(--tc-blue-text)]">
                      {copy.tableHead.a}
                    </th>
                    <th className="text-start p-4 text-base font-700 text-[var(--tc-gold)]">
                      {copy.tableHead.b}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {copy.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[var(--tc-border)] last:border-0 hover:bg-[var(--tc-surface-2)] transition-colors"
                    >
                      <td className="p-4 text-sm font-600 text-[var(--tc-text-primary)] align-top">
                        {row.feature}
                      </td>
                      <td className="p-4 text-sm text-[var(--tc-text-secondary)] align-top">
                        {row.a}
                      </td>
                      <td className="p-4 text-sm text-[var(--tc-text-secondary)] align-top">
                        {row.b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verdicts */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl sm:text-3xl font-700 mb-8 text-center tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {copy.verdictTitle}
            </h2>
          </Reveal>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
            {copy.verdicts.map((v, i) => (
              <RevealItem key={i}>
                <div className="tc-card p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Check
                      className={i === 0 ? "text-[var(--tc-blue-text)]" : "text-[var(--tc-gold)]"}
                      size={22}
                      strokeWidth={2.5}
                    />
                    <h3
                      className="text-lg font-700 text-[var(--tc-text-primary)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {v.name}
                    </h3>
                  </div>
                  <p className="text-sm font-600 text-[var(--tc-text-primary)] mb-2">
                    {v.when}
                  </p>
                  <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        badge={copy.faq.badge}
        title={copy.faq.title}
        titleAccent={copy.faq.titleAccent}
        subtitle={copy.faq.subtitle}
        items={copy.faq.items}
      />

      {/* CTA → CRM integration */}
      <section className="tc-navy-section relative py-20 sm:py-28 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,64,255,0.45), transparent 70%)",
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
            <Link href="/crm-integratsiya" className="tc-btn-primary group text-base">
              {copy.cta.button}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm text-[var(--tc-text-muted)]">{copy.cta.note}</p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
