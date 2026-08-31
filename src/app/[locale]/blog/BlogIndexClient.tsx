"use client";

import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
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
      "Практические руководства по автоматизации бизнеса, POS, CRM и ИИ — из нашего опыта.",
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
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      <section className="relative pt-36 pb-12 px-6 overflow-hidden">
        <div aria-hidden className="tc-grid-bg absolute inset-0" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal>
            <div className="mb-6">
              <span className="tc-chip">{t.badge}</span>
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
                  <Link
                    href={`/blog/${a.slug}`}
                    className="tc-card tc-card-hover group flex flex-col h-full p-7"
                  >
                    <div className="inline-flex self-start px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-600 bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] mb-4">
                      {a.category}
                    </div>
                    <h2
                      className="text-[var(--tc-text-primary)] text-xl md:text-2xl font-700 leading-snug mb-3 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h2>
                    <p className="text-sm md:text-base text-[var(--tc-text-secondary)] leading-relaxed mb-6 flex-1">
                      {card.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-600 text-[var(--tc-blue-text)]">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </div>
                  </Link>
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
