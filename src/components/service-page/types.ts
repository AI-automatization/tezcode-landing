// Shared content shape for Tezcode "service" landing pages
// (AI automation, business automation, IT services).
// Plain module (no "use client") so both the server page.tsx (JSON-LD + metadata)
// and the client renderer can import the same per-locale copy — keeping the
// visible content and the structured data in sync.

export type ServiceLang = "uz" | "ru" | "en" | "ar" | "uk";

export type ServicePageCopy = {
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    trust: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  capabilities: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };
  process: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: { num: string; title: string; desc: string; icon: string }[];
  };
  examples: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { tag: string; title: string; desc: string }[];
  };
  cta: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    button: string;
    note: string;
  };
  faq: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  // ── Optional depth/GEO sections (added 2026-06-17) ──
  // All optional so existing service pages keep compiling; pages opt in by
  // supplying the field. They add the content depth + internal linking that
  // answer engines (ChatGPT/Perplexity/AI Overviews) reward.

  // Named technology stack (GPT-4o, Claude, LangChain, RAG…). Concrete tech
  // names are a strong GEO signal — LLMs cite pages that name the tools.
  tech?: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { name: string; desc: string }[];
  };
  // "What the price depends on" — trust signal without committing to numbers
  // (factors) and/or explicit ranges (optional price string per tier).
  pricing?: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    factors: { title: string; price?: string; desc: string }[];
    note?: string;
  };
  // Contextual internal links to sibling pages — the single biggest on-page
  // gap vs competitors (we had 0 internal links between service pages).
  related?: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    links: { href: string; label: string; desc: string }[];
  };
  // Drives the Service JSON-LD (server-side). Localised so the structured data
  // matches the page language.
  service: {
    name: string;
    description: string;
    serviceType: string;
  };
};

export type ServicePageContent = Record<ServiceLang, ServicePageCopy>;
