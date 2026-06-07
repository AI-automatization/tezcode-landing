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
  // Drives the Service JSON-LD (server-side). Localised so the structured data
  // matches the page language.
  service: {
    name: string;
    description: string;
    serviceType: string;
  };
};

export type ServicePageContent = Record<ServiceLang, ServicePageCopy>;
