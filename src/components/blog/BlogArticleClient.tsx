"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import type { ArticleContent, ArticleCopy, ArticleLang } from "./types";

// Renderer for a single Tezcode blog / GEO article. Same design language as the
// service pages (tc-ink surface, blue/gold accents, Reveal motion) but laid out
// as a readable long-form article: hero → TL;DR answer box → prose sections →
// FAQ accordion → CTA. The visible FAQ mirrors the FAQPage JSON-LD emitted by
// the server page so answer engines see the same Q&A they render.

// ─────────────────────────── Hero ───────────────────────────
function ArticleHero({ copy }: { copy: ArticleCopy }) {
  return (
    <section className="relative pt-36 pb-16 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,64,255,0.5), transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-light)] mb-6 uppercase tracking-[0.2em]">
            {copy.hero.badge}
          </div>
          <h1
            className="text-[clamp(2rem,5vw,4rem)] font-800 leading-[1.05] tracking-[-0.02em] mb-6 text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] leading-relaxed mb-6">
            {copy.hero.subtitle}
          </p>
          <div className="flex items-center gap-3 text-sm text-[var(--tc-text-muted)]">
            <span>{copy.hero.dateLabel}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--tc-text-muted)]" />
            <span>{copy.hero.readTime}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────── TL;DR answer box ───────────────────────────
// The quotable, top-of-page direct answer — what answer engines lift first.
function TldrBox({ copy }: { copy: ArticleCopy }) {
  return (
    <section className="px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="relative rounded-[var(--tc-radius-lg)] border border-[var(--tc-blue)]/30 bg-[var(--tc-surface-2)] p-6 md:p-8 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.10] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 0% 0%, rgba(0,64,255,0.5), transparent 60%)",
              }}
            />
            <div className="relative flex items-center gap-2 mb-3">
              <span className="text-lg">⚡</span>
              <span className="text-xs font-600 text-[var(--tc-gold)] uppercase tracking-[0.2em]">
                {copy.tldr.label}
              </span>
            </div>
            <p className="relative text-base md:text-lg text-[var(--tc-text-primary)] leading-relaxed">
              {copy.tldr.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────── Prose body ───────────────────────────
function ArticleBody({ copy }: { copy: ArticleCopy }) {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-14">
        {copy.sections.map((section, i) => (
          <Reveal key={i}>
            <article>
              <h2
                className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-5 tracking-tight leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-[var(--tc-text-secondary)] text-base md:text-lg leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 text-[var(--tc-text-secondary)] text-base md:text-lg leading-relaxed">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────── FAQ ───────────────────────────
function ArticleFaq({ copy }: { copy: ArticleCopy }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.faq.title}
          </h2>
        </Reveal>

        <RevealStagger className="space-y-3" stagger={0.08}>
          {copy.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealItem key={i}>
                <div
                  className={[
                    "rounded-[var(--tc-radius-lg)] border bg-[var(--tc-surface-2)] transition-colors overflow-hidden",
                    isOpen
                      ? "border-[var(--tc-blue)]/40"
                      : "border-[var(--tc-border)] hover:border-[var(--tc-border-bright)]",
                  ].join(" ")}
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
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                      className={[
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl",
                        isOpen
                          ? "bg-[var(--tc-blue)] text-white"
                          : "bg-[var(--tc-surface-3)] text-[var(--tc-text-secondary)]",
                      ].join(" ")}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
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

// ─────────────────────────── CTA ───────────────────────────
function ArticleCta({ copy }: { copy: ArticleCopy }) {
  const href = copy.cta.href ?? "https://t.me/webdevelopertk";
  const isTelegram = href.includes("t.me");
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,64,255,0.4), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <Reveal>
          <h2
            className="text-3xl md:text-5xl font-800 mb-5 tracking-tight leading-[1.08] text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.cta.title}
          </h2>
          <p className="text-lg text-[var(--tc-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            {copy.cta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Magnetic strength={12}>
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex px-10 py-5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-700 text-base tc-glow-blue items-center gap-3"
            >
              {isTelegram ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              ) : null}
              {copy.cta.button}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </Magnetic>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-[var(--tc-text-muted)]">{copy.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────── Page entry ───────────────────────────
export function BlogArticleClient({ content }: { content: ArticleContent }) {
  const locale = useLocale() as ArticleLang;
  const copy = content[locale] ?? content.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] overflow-hidden">
      <Navbar />
      <ArticleHero copy={copy} />
      <TldrBox copy={copy} />
      <ArticleBody copy={copy} />
      <ArticleFaq copy={copy} />
      <ArticleCta copy={copy} />
      <Footer />
    </main>
  );
}
