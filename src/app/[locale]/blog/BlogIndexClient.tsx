"use client";

import { useLocale } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Link } from "@/i18n/routing";
import type { ArticleLang } from "@/components/blog/types";
import { ARTICLES } from "./articles";

// Blog index — lists published articles as cards. Chrome (title/subtitle) is
// localised inline; each card's title/excerpt comes from the ARTICLES registry,
// falling back to uz when a locale has no translation yet.

const COPY: Record<ArticleLang, { badge: string; title: string; subtitle: string; readMore: string }> = {
  uz: {
    badge: "Blog",
    title: "Tezcode Blog",
    subtitle:
      "Biznes avtomatlashtirish, POS, CRM va AI bo'yicha amaliy qo'llanmalar — tajribamizdan.",
    readMore: "O'qish",
  },
  ru: {
    badge: "Блог",
    title: "Блог Tezcode",
    subtitle:
      "Практические руководства по автоматизации бизнеса, POS, CRM и AI — из нашего опыта.",
    readMore: "Читать",
  },
  en: {
    badge: "Blog",
    title: "Tezcode Blog",
    subtitle:
      "Practical guides on business automation, POS, CRM and AI — from our experience.",
    readMore: "Read",
  },
  ar: {
    badge: "المدونة",
    title: "مدونة Tezcode",
    subtitle: "أدلة عملية حول أتمتة الأعمال وأنظمة POS وCRM والذكاء الاصطناعي.",
    readMore: "اقرأ",
  },
  uk: {
    badge: "Блог",
    title: "Блог Tezcode",
    subtitle:
      "Практичні посібники з автоматизації бізнесу, POS, CRM та AI — з нашого досвіду.",
    readMore: "Читати",
  },
};

export function BlogIndexClient() {
  const locale = useLocale() as ArticleLang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] overflow-hidden">
      <Navbar />

      <section className="relative pt-36 pb-12 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,64,255,0.5), transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-light)] mb-6 uppercase tracking-[0.2em]">
              {t.badge}
            </div>
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-800 leading-[1.02] tracking-[-0.02em] mb-6 text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {ARTICLES.map((a) => {
              const card = a.list[locale] ?? a.list.uz;
              return (
                <RevealItem key={a.slug}>
                  <Tilt3D intensity={4} className="group rounded-[var(--tc-radius-lg)] h-full">
                    <Link
                      href={`/blog/${a.slug}`}
                      className="relative flex flex-col h-full p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors duration-300 overflow-hidden"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at top right, rgba(0,64,255,0.14), transparent 60%)",
                        }}
                      />
                      <div className="relative inline-flex self-start px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-500 bg-[var(--tc-blue)]/10 text-[var(--tc-blue-light)] mb-4">
                        {a.category}
                      </div>
                      <h2
                        className="relative text-white text-xl md:text-2xl font-700 leading-snug mb-3 tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </h2>
                      <p className="relative text-sm md:text-base text-[var(--tc-text-secondary)] leading-relaxed mb-6 flex-1">
                        {card.excerpt}
                      </p>
                      <div className="relative text-sm font-500 text-[var(--tc-blue-light)] group-hover:translate-x-1 transition-transform">
                        {t.readMore} →
                      </div>
                    </Link>
                  </Tilt3D>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <Footer />
    </main>
  );
}
