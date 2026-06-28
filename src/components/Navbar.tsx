"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { routing, Link, usePathname, useRouter, type Locale } from "@/i18n/routing";

// ─────────────────────────────────────────────────────────
// TC Monogram Logo — next/image (LCP priority, above-fold)
// ─────────────────────────────────────────────────────────
function TCLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      <Image
        src="/tezcode-logo-white.png"
        alt="Tezcode logo"
        width={36}
        height={36}
        priority
        fetchPriority="high"
        className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Language labels
// ─────────────────────────────────────────────────────────
const LOCALE_LABELS: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
  ar: "AR",
  uk: "UK",
};

// ─────────────────────────────────────────────────────────
// Navbar Component
// ─────────────────────────────────────────────────────────
export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    setLangOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section anchors live on the home page, so they must be prefixed with "/"
  // to work from sub-pages (blog, case-studies, etc.). The routing Link keeps
  // the active locale. Blog is a real page.
  const navLinks = [
    { href: "/#divisions", label: t("divisions") },
    { href: "/#solutions", label: t("solutions") },
    { href: "/#team", label: t("team") },
    { href: "/blog", label: t("blog") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--tc-ink)]/90 backdrop-blur-xl border-b border-[var(--tc-border)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — locale-aware Link adds the prefix automatically; pass the
            unprefixed path so non-uz locales don't get a doubled prefix (404). */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <TCLogo className="w-9 h-9" />
          <span
            className="font-display font-700 text-lg tracking-tight text-[var(--tc-text-primary)] group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tezcode
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: language switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors px-2 py-1 rounded"
              aria-label={t("language")}
            >
              <span>{LOCALE_LABELS[locale]}</span>
              <svg className="w-3 h-3 opacity-50" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L1 3h10L6 8z" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-28 tc-glass rounded-[var(--tc-radius-md)] py-1 shadow-xl z-50">
                {routing.locales.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => switchLocale(l)}
                    className={[
                      "flex items-center gap-2 px-3 py-2 text-sm w-full transition-colors",
                      l === locale
                        ? "text-[var(--tc-blue-text)]"
                        : "text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)]",
                    ].join(" ")}
                  >
                    <span className="w-6 font-mono text-xs uppercase opacity-60">{l}</span>
                    <span>{LOCALE_LABELS[l]}</span>
                    {l === locale && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA button */}
          <Link
            href="/#contact"
            className="px-4 py-2 rounded-[var(--tc-radius-sm)] text-sm font-medium bg-[var(--tc-blue)] text-white hover:bg-[var(--tc-blue-light)] transition-colors"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--tc-surface-1)] border-b border-[var(--tc-border)] px-6 py-4">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile locale switcher — switch locale on the SAME path (like the
              desktop switcher). Using a Link to /{locale} made next-intl prepend
              the current locale prefix (e.g. /en/ru), which 404s. */}
          <div className="flex gap-2 flex-wrap">
            {routing.locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  switchLocale(l);
                }}
                className={[
                  "px-3 py-1 rounded text-xs font-mono uppercase transition-colors",
                  l === locale
                    ? "bg-[var(--tc-blue)] text-white"
                    : "bg-[var(--tc-surface-2)] text-[var(--tc-text-muted)] hover:text-[var(--tc-text-primary)]",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
