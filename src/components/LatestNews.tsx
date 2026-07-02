"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ARTICLES } from "@/app/[locale]/blog/articles";
import type { ArticleLang } from "@/components/blog/types";

// Homepage "latest news" strip — surfaces the most recent blog posts (news,
// partnerships, AI-industry updates) so they're visible without visiting
// /blog directly. Pulls straight from the ARTICLES registry, newest first.

const LABELS: Record<ArticleLang, { title: string; subtitle: string; readMore: string; viewAll: string }> = {
  uz: {
    title: "So'nggi maqolalar",
    subtitle: "AI dunyosidagi va Tezcode ekotizimidagi so'nggi yangiliklar",
    readMore: "O'qish",
    viewAll: "Barcha maqolalar",
  },
  ru: {
    title: "Последние статьи",
    subtitle: "Последние новости мира AI и экосистемы Tezcode",
    readMore: "Читать",
    viewAll: "Все статьи",
  },
  en: {
    title: "Latest articles",
    subtitle: "Latest updates from the AI world and the Tezcode ecosystem",
    readMore: "Read",
    viewAll: "All articles",
  },
  ar: {
    title: "أحدث المقالات",
    subtitle: "آخر التحديثات من عالم الذكاء الاصطناعي ونظام Tezcode",
    readMore: "اقرأ",
    viewAll: "كل المقالات",
  },
  uk: {
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
    <section className="py-20 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <h2
            className="text-2xl md:text-3xl font-600 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {l.title}
          </h2>
          <p className="text-sm text-[var(--tc-text-muted)]">{l.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((a) => {
            const card = a.list[locale] ?? a.list.uz;
            return (
              <RevealItem key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group relative flex h-full flex-col rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tc-border-bright)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-[var(--tc-blue)]/10 px-2.5 py-0.5 text-[10px] font-500 uppercase tracking-widest text-[var(--tc-blue-light)]">
                      {a.category}
                    </span>
                    <span className="text-xs text-[var(--tc-text-muted)]">{a.datePublished}</span>
                  </div>
                  <h3
                    className="mb-2 text-lg font-600 leading-snug text-[var(--tc-text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--tc-text-secondary)]">
                    {card.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-500 text-[var(--tc-blue-text)] transition-colors group-hover:text-[var(--tc-text-primary)]">
                    {l.readMore}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--tc-blue-text)] transition-colors hover:text-[var(--tc-text-primary)]"
          >
            {l.viewAll}
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
