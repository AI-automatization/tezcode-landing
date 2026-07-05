// Shared content shape for Tezcode blog / GEO articles.
// Plain module (no "use client") so both the server page.tsx (Article + FAQ +
// Breadcrumb JSON-LD + metadata) and the client renderer import the SAME
// per-locale copy — keeping the visible article and the structured data in sync.
//
// GEO note: answer engines (ChatGPT, Perplexity, Google AI Overviews) lift a
// direct answer near the top and Q&A pairs. So every article carries a `tldr`
// (the quotable one-paragraph answer) and an `faq` block that also feeds FAQPage.

import type { Locale } from "@/lib/seo";

export type ArticleLang = Locale; // "uz" | "ru" | "en" | "ar" | "uk"

export type ArticleSection = {
  // Question-style headings rank/cite best in answer engines.
  heading: string;
  // One or more body paragraphs.
  paragraphs: string[];
  // Optional bullet list rendered under the paragraphs.
  bullets?: string[];
};

export type ArticleCopy = {
  hero: {
    badge: string; // e.g. category tag
    title: string;
    subtitle: string;
    dateLabel: string; // human-readable date shown to readers
    readTime: string; // e.g. "6 daqiqa o'qish"
  };
  // The quotable answer block at the top ("Qisqacha javob").
  tldr: {
    label: string;
    text: string;
  };
  sections: ArticleSection[];
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    note: string;
    // Optional external target for the CTA button. Defaults to the Tezcode
    // Telegram contact when omitted (B2B articles); B2C articles (e.g. WeWatch)
    // can point straight at the product, e.g. "https://wewatch.uz".
    href?: string;
  };
};

// uz is mandatory (it is the fallback for any locale that has no translation
// yet, mirroring `CONTENT[locale] ?? CONTENT.uz` used by the service pages).
export type ArticleContent = Partial<Record<ArticleLang, ArticleCopy>> & {
  uz: ArticleCopy;
};

// ───────────────────────── Blog index registry ─────────────────────────
// Lightweight per-article entry used by the blog index to render cards and by
// the sitemap. Localised title/excerpt so the listing matches the active locale.

export type ArticleListLang = Record<
  ArticleLang,
  { title: string; excerpt: string }
> & { uz: { title: string; excerpt: string } };

export type ArticleMeta = {
  slug: string; // URL segment under /blog/<slug>
  datePublished: string; // ISO, e.g. "2026-06-07"
  category: string; // shown as a tag
  list: Partial<ArticleListLang> & {
    uz: { title: string; excerpt: string };
  };
  // Optional internal link from the article to the most relevant money/service
  // page ("Mavzuga oid xizmat" card near the end of the article). href is a
  // locale-relative path (e.g. "/pos-tizimi") rendered via the i18n Link.
  relatedService?: { href: string; label: string };
};
