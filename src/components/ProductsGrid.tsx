"use client";

import { useTranslations } from "next-intl";
import { Package, Wrench, Bot, Users, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

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
    <section id="divisions" className="py-20 sm:py-28 bg-[var(--tc-ink)]">
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

      {/* Static 3×2 grid — every direction readable at a glance (the old
          auto-scrolling swiper moved text while people were reading it). */}
      <div className="max-w-7xl mx-auto px-6">
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {divisions.map((d) => (
            <RevealItem key={d} className="h-full">
              <DivisionCard division={d} t={t} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// Grid card — name, tagline and the full short description;
// the details live on the division's own page ("Batafsil").
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
      className="group tc-card tc-card-hover h-full p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] flex items-center justify-center">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <h3
            className="text-lg font-700 text-[var(--tc-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="text-xs text-[var(--tc-text-muted)]">{tagline}</p>
        </div>
      </div>

      <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed mb-5 flex-1">
        {description}
      </p>

      <div className="inline-flex items-center gap-1.5 text-sm font-600 text-[var(--tc-blue-text)]">
        {cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}
