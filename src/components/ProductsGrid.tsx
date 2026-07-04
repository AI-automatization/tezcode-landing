"use client";

import { useTranslations } from "next-intl";
import { Package, Wrench, Bot, Users, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/motion/Reveal";

type DivisionKey = "systems" | "custom" | "ai" | "teams" | "labs" | "academy";

const ICON_MAP: Record<DivisionKey, LucideIcon> = {
  systems: Package,
  custom: Wrench,
  ai: Bot,
  teams: Users,
  labs: FlaskConical,
  academy: GraduationCap,
};

// Each division links to its most relevant detail page.
const HREF_MAP: Record<DivisionKey, string> = {
  systems: "/tezcode-systems",
  custom: "/tezcode-custom",
  ai: "/ai-agent",
  teams: "/hire-developers",
  labs: "/tezcode-labs",
  academy: "/tezcode-academy",
};

export function ProductsGrid() {
  const t = useTranslations("divisions");

  const divisions: DivisionKey[] = [
    "systems",
    "custom",
    "ai",
    "teams",
    "labs",
    "academy",
  ];

  return (
    <section id="divisions" className="py-20 sm:py-28 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="tc-chip">Yo&apos;nalishlar</span>
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
      </div>

      {/* Slow auto-scrolling swiper — pauses on hover, cards stay clickable */}
      <Reveal>
        <div className="relative">
          {/* edge fades */}
          <div
            aria-hidden
            className="absolute inset-y-0 start-0 w-16 sm:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--tc-ink), transparent)" }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 end-0 w-16 sm:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--tc-ink), transparent)" }}
          />

          <div className="tc-marquee-x flex w-max items-stretch gap-5 py-2">
            {[...divisions, ...divisions].map((d, i) => (
              <DivisionCard key={`${d}-${i}`} division={d} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// Compact swiper card — name, tagline and a clamped description only;
// the full details live on the division's own page ("Batafsil").
function DivisionCard({
  division,
  t,
}: {
  division: DivisionKey;
  t: ReturnType<typeof useTranslations<"divisions">>;
}) {
  const name = t(`${division}.name`);
  const tagline = t(`${division}.tagline`);
  const description = t(`${division}.description`);
  const cta = t("cta");

  const href = HREF_MAP[division];
  const Icon = ICON_MAP[division];

  return (
    <Link
      href={href}
      className="group tc-card tc-card-hover w-[260px] sm:w-[300px] shrink-0 p-5 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <h3
            className="text-base font-700 text-[var(--tc-text-primary)] tracking-tight truncate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="text-xs text-[var(--tc-text-muted)] truncate">{tagline}</p>
        </div>
      </div>

      <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed line-clamp-2 mb-4 flex-1">
        {description}
      </p>

      <div className="inline-flex items-center gap-1.5 text-sm font-600 text-[var(--tc-blue-text)]">
        {cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}
