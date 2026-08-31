"use client";

import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ARTICLES } from "@/app/[locale]/blog/articles";
import type { ArticleLang } from "@/components/blog/types";

// Homepage "latest news" strip — surfaces the most recent blog posts (news,
// partnerships, AI-industry updates) so they're visible without visiting
// /blog directly. Pulls straight from the ARTICLES registry, newest first.

const LABELS: Record<ArticleLang, { badge: string; title: string; subtitle: string; readMore: string; viewAll: string }> = {
  uz: {
    badge: "Blog",
    title: "So'nggi maqolalar",
    subtitle: "AI dunyosidagi va Tezcode ekotizimidagi so'nggi yangiliklar",
    readMore: "O'qish",
    viewAll: "Barcha maqolalar",
  },
  ru: {
    badge: "Блог",
    title: "Последние статьи",
    subtitle: "Последние новости из мира ИИ и экосистемы Tezcode",
    readMore: "Читать",
    viewAll: "Все статьи",
  },
  en: {
    badge: "Blog",
    title: "Latest articles",
    subtitle: "Latest updates from the AI world and the Tezcode ecosystem",
    readMore: "Read",
    viewAll: "All articles",
  },
  ar: {
    badge: "المدونة",
    title: "أحدث المقالات",
    subtitle: "آخر التحديثات من عالم الذكاء الاصطناعي ونظام Tezcode",
    readMore: "اقرأ",
    viewAll: "كل المقالات",
  },
  uk: {
    badge: "Блог",
    title: "Останні статті",
    subtitle: "Останні новини зі світу AI та екосистеми Tezcode",
    readMore: "Читати",
    viewAll: "Усі статті",
  },
};

const COUNT = 3;

export function LatestNews() {
  const locale = useLocale() as ArticleLang;
  const l = LABELS[locale] ?? LABELS.uz;
  const items = ARTICLES.slice(0, COUNT);

  return (
    <section className="py-20 sm:py-28 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="tc-chip mb-5">{l.badge}</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-3 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {l.title}
          </h2>
          <p className="text-[var(--tc-text-muted)] max-w-2xl leading-relaxed">{l.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((a) => {
            const card = a.list[locale] ?? a.list.uz;
            return (
              <RevealItem key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group tc-card tc-card-hover relative flex h-full flex-col p-6"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-[var(--tc-blue-dim)] px-2.5 py-1 text-[10px] font-600 uppercase tracking-widest text-[var(--tc-blue-text)]">
                      {a.category}
                    </span>
                    <span className="text-xs text-[var(--tc-text-muted)]">{a.datePublished}</span>
                  </div>
                  <h3
                    className="mb-2 text-lg font-700 leading-snug tracking-tight text-[var(--tc-text-primary)] transition-colors group-hover:text-[var(--tc-blue-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--tc-text-secondary)] line-clamp-3">
                    {card.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-500 text-[var(--tc-blue-text)]">
                    {l.readMore}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="tc-btn-secondary inline-flex items-center gap-2"
          >
            {l.viewAll}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
