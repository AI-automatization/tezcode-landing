"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShoppingBag, HeartPulse, Clapperboard, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";

type ProductKey =
  | "raos"
  | "hamshirago"
  | "wewatch"
  | "savdo_builder"
  | "tezdetal";

const ICON_MAP: Record<ProductKey, LucideIcon> = {
  raos: ShoppingBag,
  hamshirago: HeartPulse,
  wewatch: Clapperboard,
  savdo_builder: ShoppingCart,
  tezdetal: Wrench,
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
  wewatch: "/wewatch",
  savdo_builder: "/maxsavdo",
  tezdetal: "/tezdetal",
};

// Real product logos (square, in public/products/). Products without a logo
// fall back to the lucide ICON_MAP. Fetched from each product's own site.
const LOGO_MAP: Partial<Record<ProductKey, string>> = {
  raos: "/products/raos.png",
  hamshirago: "/products/coremed.png", // card renders as "CoreMed"
  wewatch: "/products/wewatch.png",
  savdo_builder: "/products/maxsavdo.png", // card renders as "MaxSavdo"
  tezdetal: "/products/tezdetal.png",
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

// Home page shows only the live B2B systems as proof of work. Consumer
// (WeWatch) and beta/R&D products live on /tezcode-labs, linked below.
const PRODUCTION: ProductKey[] = ["raos", "hamshirago", "savdo_builder", "tezdetal"];

export function ProductsShowcase() {
  const t = useTranslations("products");

  return (
    <section
      id="products"
      className="py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="tc-chip">{t("badge")}</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          stagger={0.12}
        >
          {PRODUCTION.map((p) => (
            <RevealItem key={p} className="h-full">
              <ProductCardLarge product={p} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="text-center">
          <Link
            href="/tezcode-labs"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-[var(--tc-blue-text)] tc-link-underline"
          >
            {t("more_link")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </Reveal>
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
  const url = t(`${product}.url`);
  const statusLabel = t(`status_labels.${status}`);

  const statusClass = STATUS_STYLE[status] ?? STATUS_STYLE.Beta;
  const Icon = ICON_MAP[product];
  const logo = LOGO_MAP[product];

  const landing = LANDING_MAP[product];
  const isExternal = !landing && url.startsWith("http");

  // RAOS gets a separate "UZ RAOS" backlink to raos.uz in the footer strip
  const isRaos = product === "raos";

  return (
    <div className="group tc-card tc-card-hover p-8 h-full flex flex-col">
      {/* Main clickable area — internal landing or external URL */}
      <CardLink
        landing={landing}
        url={url}
        isExternal={isExternal}
        className="flex flex-col flex-1"
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
      </CardLink>

      {/* Footer strip — CTA + optional backlink */}
      <div className="pt-4 border-t border-[var(--tc-border)] flex items-center justify-end text-xs">
        <div className="flex items-center gap-4">
          {/* UZ RAOS backlink for raos product */}
          {isRaos && (
            <a
              href="https://raos.uz"
              target="_blank"
              rel="noopener"
              className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
            >
              UZ RAOS
            </a>
          )}
          <CardLink
            landing={landing}
            url={url}
            isExternal={isExternal}
            className="text-[var(--tc-blue-text)] flex items-center gap-1.5 font-500"
          >
            {landing ? t("learn_more") : isExternal ? t("visit_site") : t("request_demo")}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </CardLink>
        </div>
      </div>
    </div>
  );
}
