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

      {/* Next step → CRM integration. Light strip: the footer already carries the
          consultation CTA, this only points to the service page. */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2
                className="text-xl font-700 text-[var(--tc-text-primary)] md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {copy.cta.title} <span className="text-[var(--tc-blue-text)]">{copy.cta.titleAccent}</span>
              </h2>
              <p className="mt-2 text-sm text-[var(--tc-text-secondary)] md:text-base">{copy.cta.subtitle}</p>
            </div>
            <Link href="/crm-integratsiya" className="tc-btn-primary group shrink-0 text-sm">
              {copy.cta.button}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
