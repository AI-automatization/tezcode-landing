"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShoppingBag, Bot, HeartPulse, Clapperboard, Users, BarChart2, TrendingUp, ShoppingCart, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";

type ProductKey =
  | "raos"
  | "ai_office"
  | "hamshirago"
  | "wewatch"
  | "workcontrol"
  | "ventra"
  | "ai_trade"
  | "savdo_builder";

const ICON_MAP: Record<ProductKey, LucideIcon> = {
  raos: ShoppingBag,
  ai_office: Bot,
  hamshirago: HeartPulse,
  wewatch: Clapperboard,
  workcontrol: Users,
  ventra: BarChart2,
  ai_trade: TrendingUp,
  savdo_builder: ShoppingCart,
};

const STATUS_STYLE: Record<string, string> = {
  Live: "bg-[rgba(5,150,105,0.1)] text-[var(--tc-success)] border-[rgba(5,150,105,0.25)]",
  Beta: "bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] border-[rgba(0,64,255,0.25)]",
  Soon: "bg-[var(--tc-surface-2)] text-[var(--tc-text-muted)] border-[var(--tc-border)]",
};

// Products that have a dedicated on-site landing page. The card links here
// (internal) instead of the external product site, so each landing page gets a
// strong internal link (better crawl/indexing) and visitors get a proper funnel.
const LANDING_MAP: Partial<Record<ProductKey, string>> = {
  raos: "/pos-tizimi",
  hamshirago: "/klinika-crm",
  workcontrol: "/xodim-nazorati",
  wewatch: "/wewatch",
  savdo_builder: "/maxsavdo",
};

// Real product logos (square, in public/products/). Products without a logo
// fall back to the lucide ICON_MAP. Fetched from each product's own site.
const LOGO_MAP: Partial<Record<ProductKey, string>> = {
  raos: "/products/raos.png",
  hamshirago: "/products/coremed.png", // card renders as "CoreMed"
  wewatch: "/products/wewatch.png",
  savdo_builder: "/products/maxsavdo.png", // card renders as "MaxSavdo"
};

// Picks an internal Link (locale-aware) for products with a landing page,
// otherwise a plain external/anchor link to the product site.
function CardLink({
  landing,
  url,
  isExternal,
  className,
  children,
}: {
  landing?: string;
  url: string;
  isExternal: boolean;
  className: string;
  children: React.ReactNode;
}) {
  if (landing) {
    return (
      <Link href={landing} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

// WorkControl is Live, so it belongs with production — the R&D row below
// holds only upcoming/beta products. 4 + 4 keeps both rows balanced.
const PRODUCTION: ProductKey[] = ["raos", "wewatch", "hamshirago", "savdo_builder"];
const FUTURE: ProductKey[] = ["ai_trade", "ai_office", "ventra", "workcontrol"];

export function ProductsShowcase() {
  const t = useTranslations("products");

  return (
    <section
      id="products"
      className="py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="tc-chip">Mahsulotlar</span>
          <h2
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-[var(--tc-text-muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </Reveal>

        {/* Production — 4 big cards */}
        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          stagger={0.12}
        >
          {PRODUCTION.map((p) => (
            <RevealItem key={p} className="h-full">
              <ProductCardLarge product={p} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Future Pipeline divider */}
        <Reveal className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-[var(--tc-border)]" />
          <span className="tc-chip">Future Pipeline · R&amp;D</span>
          <div className="h-px flex-1 bg-[var(--tc-border)]" />
        </Reveal>

        {/* Future — 4 small cards, aligned with the production columns */}
        <RevealStagger
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          stagger={0.06}
        >
          {FUTURE.map((p) => (
            <RevealItem key={p} className="h-full">
              <ProductCardSmall product={p} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ProductCardLarge({
  product,
  t,
}: {
  product: ProductKey;
  t: ReturnType<typeof useTranslations<"products">>;
}) {
  const name = t(`${product}.name`);
  const tagline = t(`${product}.tagline`);
  const description = t(`${product}.description`);
  const status = t(`${product}.status`);
  const division = t(`${product}.division`);
  const url = t(`${product}.url`);
  const statusLabel = t(`status_labels.${status}`);

  const statusClass = STATUS_STYLE[status] ?? STATUS_STYLE.Beta;
  const Icon = ICON_MAP[product];
  const logo = LOGO_MAP[product];

  const landing = LANDING_MAP[product];
  const isExternal = !landing && url.startsWith("http");

  return (
    <CardLink
      landing={landing}
      url={url}
      isExternal={isExternal}
      className="group tc-card tc-card-hover p-8 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        {logo ? (
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-[var(--tc-surface-2)] flex items-center justify-center">
            <Image src={logo} alt={name} width={56} height={56} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center">
            <Icon className="w-7 h-7" strokeWidth={1.75} />
          </div>
        )}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-500 border px-2.5 py-0.5 text-[10px] ${statusClass}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {statusLabel}
        </span>
      </div>

      <h3
        className="text-2xl font-700 text-[var(--tc-text-primary)] mb-1 tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </h3>

      <p className="text-sm text-[var(--tc-text-secondary)] mb-5">{tagline}</p>

      <p className="text-sm text-[var(--tc-text-muted)] leading-relaxed mb-6 flex-1">
        {description}
      </p>

      <div className="pt-4 border-t border-[var(--tc-border)] flex items-center justify-between text-xs">
        <span className="text-[var(--tc-text-muted)] uppercase tracking-[0.2em]">
          {division}
        </span>
        <span className="text-[var(--tc-blue-text)] flex items-center gap-1.5 font-500">
          {landing ? "Batafsil" : isExternal ? "Saytga" : "Demo so'rang"}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </CardLink>
  );
}

function ProductCardSmall({
  product,
  t,
}: {
  product: ProductKey;
  t: ReturnType<typeof useTranslations<"products">>;
}) {
  const name = t(`${product}.name`);
  const tagline = t(`${product}.tagline`);
  const status = t(`${product}.status`);
  const url = t(`${product}.url`);
  const statusLabel = t(`status_labels.${status}`);

  const statusClass = STATUS_STYLE[status] ?? STATUS_STYLE.Beta;
  const Icon = ICON_MAP[product];
  const logo = LOGO_MAP[product];

  const landing = LANDING_MAP[product];
  const isExternal = !landing && url.startsWith("http");

  return (
    <CardLink
      landing={landing}
      url={url}
      isExternal={isExternal}
      className="group tc-card tc-card-hover p-5 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        {logo ? (
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-[var(--tc-surface-2)] flex items-center justify-center">
            <Image src={logo} alt={name} width={40} height={40} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center">
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </div>
        )}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-500 border px-2 py-0.5 text-[10px] ${statusClass}`}
        >
          <span className="w-1 h-1 rounded-full bg-current" />
          {statusLabel}
        </span>
      </div>

      <h3
        className="text-base font-700 text-[var(--tc-text-primary)] mb-0.5 tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </h3>
      <p className="text-xs text-[var(--tc-text-muted)]">{tagline}</p>
    </CardLink>
  );
}
