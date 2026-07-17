// Shared content shape for Tezcode's legal pages (terms / privacy / oferta).
// Mirrors the blog article convention (src/components/blog/types.ts):
// per-locale copy in a plain module, looked up as `content[locale] ?? content.uz`.

import type { Locale } from "@/lib/seo";

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  versionLabel: string; // e.g. "Legal · v1.2 — 2026-07-17"
  heading: string;
  subheading: string;
  sections: LegalSection[];
};

export type LegalContent = Record<Locale, LegalPageCopy>;
