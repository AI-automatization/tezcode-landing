import { useTranslations } from "next-intl";

// ─────────────────────────────────────────────────────────
// Partner type — fill with real logos later
// ─────────────────────────────────────────────────────────
interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // Replace with real logos
}

// Placeholder partners — replace with real data
const PARTNERS: Partner[] = [
  { id: "p1", name: "Partner One" },
  { id: "p2", name: "Partner Two" },
  { id: "p3", name: "Partner Three" },
  { id: "p4", name: "Partner Four" },
  { id: "p5", name: "Partner Five" },
  { id: "p6", name: "Partner Six" },
];

// ─────────────────────────────────────────────────────────
// Partners Section — horizontal scroll marquee on mobile
// ─────────────────────────────────────────────────────────
export function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="py-20 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-600 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-sm text-[var(--tc-text-muted)]">{t("subtitle")}</p>
        </div>

        {/* Partners grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Single Partner Logo
// ─────────────────────────────────────────────────────────
function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div
      className="group h-12 px-6 rounded-[var(--tc-radius-md)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] flex items-center justify-center hover:border-[var(--tc-border-bright)] transition-all duration-300 cursor-pointer min-w-[140px]"
    >
      {partner.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logoUrl}
          alt={partner.name}
          className="h-6 object-contain opacity-40 group-hover:opacity-70 transition-opacity"
        />
      ) : (
        // Placeholder text logo
        <span
          className="text-sm font-600 text-[var(--tc-text-muted)] group-hover:text-[var(--tc-text-secondary)] transition-colors tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {partner.name}
        </span>
      )}
    </div>
  );
}
