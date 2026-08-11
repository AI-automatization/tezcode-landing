"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  Package,
  Wrench,
  Bot,
  Users,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Workflow,
  MessageSquare,
  Video,
  Send,
  ShoppingCart,
  Stethoscope,
  UserCheck,
  Code,
  Briefcase,
  Link2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
        className="tc-logo-on-dark w-full h-full object-contain"
      />
      <Image
        src="/tezcode-logo-ink.png"
        alt="Tezcode logo"
        width={36}
        height={36}
        priority
        fetchPriority="high"
        className="tc-logo-on-light w-full h-full object-contain absolute inset-0"
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
// Mega-menu data — each item links to its own dedicated page.
// "Bo'limlar" labels come from the `divisions` namespace (name + tagline);
// "Yechimlar" labels come from the `menu.solutions` namespace.
// ─────────────────────────────────────────────────────────
const DIVISIONS: { key: string; href: string; icon: LucideIcon }[] = [
  { key: "systems", href: "/tezcode-systems", icon: Package },
  { key: "custom", href: "/tezcode-custom", icon: Wrench },
  { key: "ai", href: "/ai-agent", icon: Bot },
  { key: "teams", href: "/hire-developers", icon: Users },
  { key: "labs", href: "/tezcode-labs", icon: FlaskConical },
  { key: "academy", href: "/tezcode-academy", icon: GraduationCap },
];

// Solutions mega-menu, grouped into headed columns (AI Solution style).
// Every item links to a real, existing page — no dead ends.
type SolutionItem = { key: string; href: string; icon: LucideIcon };
const SOLUTION_GROUPS: { headerKey: string; items: SolutionItem[] }[] = [
  {
    headerKey: "products",
    items: [
      { key: "posSystem", href: "/pos-tizimi", icon: ShoppingCart },
      { key: "clinicCrm", href: "/klinika-crm", icon: Stethoscope },
      { key: "employeeMonitoring", href: "/xodim-nazorati", icon: UserCheck },
    ],
  },
  {
    headerKey: "aiSolutions",
    items: [
      { key: "aiAutomation", href: "/ai-avtomatizatsiya", icon: Sparkles },
      { key: "aiAgent", href: "/ai-agent", icon: Bot },
      { key: "aiChatbot", href: "/ai-chatbot", icon: MessageSquare },
      { key: "aiVideoAnalytics", href: "/ai-video-analitika", icon: Video },
      { key: "telegramBot", href: "/telegram-bot-biznes", icon: Send },
    ],
  },
  {
    headerKey: "services",
    items: [
      { key: "businessAutomation", href: "/biznes-avtomatlashtirish", icon: Workflow },
      { key: "crmIntegration", href: "/crm-integratsiya", icon: Link2 },
      { key: "itServices", href: "/it-xizmatlar", icon: Code },
      { key: "hireDevelopers", href: "/hire-developers", icon: Users },
      { key: "caseStudies", href: "/case-studies", icon: Briefcase },
    ],
  },
];

// ─────────────────────────────────────────────────────────
// Navbar Component
// ─────────────────────────────────────────────────────────
export function Navbar() {
  const t = useTranslations("nav");
  const td = useTranslations("divisions");
  const tm = useTranslations("menu");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<null | "divisions" | "solutions">(null);

  const switchLocale = (newLocale: Locale) => {
    setLangOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const divisionItems = DIVISIONS.map((d) => ({
    ...d,
    label: td(`${d.key}.name`),
    desc: td(`${d.key}.tagline`),
  }));
  const solutionGroups = SOLUTION_GROUPS.map((g) => ({
    header: tm(`headers.${g.headerKey}`),
    items: g.items.map((s) => ({ ...s, label: tm(`solutions.${s.key}`) })),
  }));

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color-mix(in_srgb,var(--tc-ink)_85%,transparent)] backdrop-blur-xl border-b border-[var(--tc-border)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — click returns home and scrolls to top. */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <TCLogo className="w-9 h-9" />
          <span
            className="font-display font-700 text-lg tracking-tight text-[var(--tc-text-primary)] group-hover:text-[var(--tc-blue-text)] transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tezcode
          </span>
        </Link>

        {/* Desktop nav — two mega-menus + Blog */}
        <ul className="hidden md:flex items-center gap-2">
          <li>
            <MegaMenu label={t("divisions")} items={divisionItems} />
          </li>
          <li>
            <SolutionsMegaMenu
              label={t("solutions")}
              groups={solutionGroups}
              allLabel={tm("allSolutions")}
            />
          </li>
          <li>
            <Link
              href="/tariflar"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("pricing")}
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("blog")}
            </Link>
          </li>
          <li>
            <Link
              href="/biz-haqimizda"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("about")}
            </Link>
          </li>
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
              <div className="absolute end-0 top-full mt-2 w-28 bg-[var(--tc-surface-1)] border border-[var(--tc-border)] rounded-[var(--tc-radius-lg)] py-1 shadow-[var(--tc-shadow-card-hover)] z-50">
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
          <Link href="/aloqa" className="tc-btn-primary px-5 py-2.5 text-sm">
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
        <div className="md:hidden bg-[var(--tc-surface-1)] border-b border-[var(--tc-border)] shadow-[var(--tc-shadow-card-hover)] px-6 py-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1 mb-4">
            {/* Bo'limlar accordion */}
            <MobileAccordion
              label={t("divisions")}
              open={mobileSection === "divisions"}
              onToggle={() =>
                setMobileSection(mobileSection === "divisions" ? null : "divisions")
              }
              items={divisionItems}
              onNavigate={closeMobile}
            />
            {/* Yechimlar accordion — grouped by header */}
            <MobileGroupedAccordion
              label={t("solutions")}
              open={mobileSection === "solutions"}
              onToggle={() =>
                setMobileSection(mobileSection === "solutions" ? null : "solutions")
              }
              groups={solutionGroups}
              onNavigate={closeMobile}
            />
            {/* Tariflar + Blog + Biz haqimizda + Contact */}
            <Link
              href="/tariflar"
              onClick={closeMobile}
              className="block py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("pricing")}
            </Link>
            <Link
              href="/blog"
              onClick={closeMobile}
              className="block py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("blog")}
            </Link>
            <Link
              href="/biz-haqimizda"
              onClick={closeMobile}
              className="block py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/aloqa"
              onClick={closeMobile}
              className="block py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile locale switcher */}
          <div className="flex gap-2 flex-wrap pt-3 border-t border-[var(--tc-border)]">
            {routing.locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  closeMobile();
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

// ─────────────────────────────────────────────────────────
// Desktop mega-menu — CSS hover dropdown. The trigger is a real
// Link (clicking navigates); hovering reveals the sub-pages.
// ─────────────────────────────────────────────────────────
type MenuItem = { key: string; href: string; icon: LucideIcon; label: string; desc: string };

function MegaMenu({
  label,
  items,
}: {
  label: string;
  items: MenuItem[];
}) {
  return (
    <div className="relative group/menu">
      {/* Menu trigger only — not a link, so no /#anchor URLs in the address bar */}
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors cursor-default"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform duration-200 group-hover/menu:rotate-180" />
      </button>

      {/* pt-3 bridges the gap so the panel doesn't close when moving the cursor */}
      <div className="invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
        <div className="w-[560px] bg-[var(--tc-surface-1)] rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] shadow-[var(--tc-shadow-card-hover)] p-2 grid grid-cols-2 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                href={item.href}
                className="flex items-start gap-3 p-3 rounded-[var(--tc-radius-md)] hover:bg-[var(--tc-surface-2)] transition-colors"
              >
                <span className="shrink-0 w-9 h-9 rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue-dim)] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--tc-blue-text)]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-600 text-[var(--tc-text-primary)] leading-snug">
                    {item.label}
                  </span>
                  {item.desc && (
                    <span className="block text-xs text-[var(--tc-text-muted)] mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Mobile accordion — tap to expand the sub-pages list.
// ─────────────────────────────────────────────────────────
function MobileAccordion({
  label,
  open,
  onToggle,
  items,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  items: MenuItem[];
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="ps-2 pb-2 flex flex-col gap-0.5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={onNavigate}
                className="flex items-center gap-3 py-2 px-2 rounded-[var(--tc-radius-sm)] text-sm text-[var(--tc-text-muted)] hover:text-[var(--tc-text-primary)] hover:bg-[var(--tc-surface-2)] transition-colors"
              >
                <Icon className="w-4 h-4 shrink-0 text-[var(--tc-blue-text)]" />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Solutions mega-menu — AI-Solution style: headed columns.
// ─────────────────────────────────────────────────────────
type SolutionMenuItem = { key: string; href: string; icon: LucideIcon; label: string };
type SolutionGroup = { header: string; items: SolutionMenuItem[] };

function SolutionsMegaMenu({
  label,
  groups,
  allLabel,
}: {
  label: string;
  groups: SolutionGroup[];
  allLabel: string;
}) {
  return (
    <div className="relative group/menu">
      {/* Menu trigger only — not a link, so no /#anchor URLs in the address bar */}
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors cursor-default"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform duration-200 group-hover/menu:rotate-180" />
      </button>

      <div className="invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
        <div className="w-[720px] bg-[var(--tc-surface-1)] rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] shadow-[var(--tc-shadow-card-hover)] p-4">
          <div className="grid grid-cols-3 gap-x-4 gap-y-1">
            {groups.map((group) => (
              <div key={group.header}>
                <p className="px-2 pb-2 text-[11px] font-700 uppercase tracking-[0.12em] text-[var(--tc-text-muted)]">
                  {group.header}
                </p>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-[var(--tc-radius-md)] hover:bg-[var(--tc-surface-2)] transition-colors"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue-dim)] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[var(--tc-blue-text)]" />
                      </span>
                      <span className="text-sm font-500 text-[var(--tc-text-primary)] leading-snug">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer link — all solutions (main automation hub page) */}
          <div className="mt-3 pt-3 border-t border-[var(--tc-border)]">
            <Link
              href="/ai-avtomatizatsiya"
              className="inline-flex items-center gap-1.5 px-2 text-sm font-600 text-[var(--tc-blue-text)] hover:text-[var(--tc-blue)] transition-colors"
            >
              {allLabel}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Mobile grouped accordion — headed sub-lists for solutions.
// ─────────────────────────────────────────────────────────
function MobileGroupedAccordion({
  label,
  open,
  onToggle,
  groups,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  groups: SolutionGroup[];
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="ps-2 pb-2 flex flex-col gap-2">
          {groups.map((group) => (
            <div key={group.header}>
              <p className="px-2 py-1 text-[10px] font-700 uppercase tracking-[0.12em] text-[var(--tc-text-muted)]">
                {group.header}
              </p>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 py-2 px-2 rounded-[var(--tc-radius-sm)] text-sm text-[var(--tc-text-muted)] hover:text-[var(--tc-text-primary)] hover:bg-[var(--tc-surface-2)] transition-colors"
                  >
                    <Icon className="w-4 h-4 shrink-0 text-[var(--tc-blue-text)]" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
