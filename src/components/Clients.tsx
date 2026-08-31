"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// "Trusted by" wall — partners + clients Tezcode works with. Each tile is a
// logo + brand name, and is intentionally NOT a link (no navigation to their
// sites). Distinct from the Partners carousel (detailed cards) and Testimonials
// (reviews). Add a brand here as new ones come in. Logos live in public/clients/.
type Brand = {
  name: string;
  logo: string; // /clients/<file> (transparent PNG preferred)
  w: number; // intrinsic logo width
  h: number; // intrinsic logo height
};

const BRANDS: Brand[] = [
  { name: "Biznes Bomond", logo: "/clients/bomond.png", w: 776, h: 257 },
  { name: "Hoffen", logo: "/clients/hoffen1.png", w: 432, h: 182 },
  { name: "Dantes", logo: "/clients/dantes.png", w: 250, h: 265 },
  { name: "Mars IT School", logo: "/clients/mars-it-school.png", w: 560, h: 118 },
  { name: "AI Solution", logo: "/clients/aisolution.png", w: 719, h: 834 },
];

const LABELS: Record<string, { chip: string; title: string; subtitle: string }> = {
  uz: {
    chip: "Hamkor va mijozlar",
    title: "Bizga ishonganlar",
    subtitle: "O'zbekistondagi brendlar va hamkorlar Tezcode bilan ishlaydi.",
  },
  ru: {
    chip: "Партнёры и клиенты",
    title: "Нам доверяют",
    subtitle: "Бренды и партнёры Узбекистана работают с Tezcode.",
  },
  en: {
    chip: "Partners & clients",
    title: "Trusted by",
    subtitle: "Brands and partners across Uzbekistan work with Tezcode.",
  },
  ar: {
    chip: "الشركاء والعملاء",
    title: "يثقون بنا",
    subtitle: "علامات تجارية وشركاء في أوزبكستان يعملون مع Tezcode.",
  },
  uk: {
    chip: "Партнери та клієнти",
    title: "Нам довіряють",
    subtitle: "Бренди та партнери Узбекистану працюють з Tezcode.",
  },
};

export function Clients() {
  const locale = useLocale();
  const t = LABELS[locale] ?? LABELS.uz;

  return (
    <section className="py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-t border-[var(--tc-border)]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <div className="tc-chip mb-5">{t.chip}</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Single unified panel — logos in one row split by dividers.
            Intentionally not links (no navigation to their sites). The inner
            grid is pulled 1px past the card on the end/bottom edges so the
            outer cell borders get clipped by overflow-hidden (leaving only the
            inner dividers), which works for any number of brands. */}
        <Reveal className="max-w-6xl mx-auto">
          <div className="tc-card overflow-hidden !p-0">
            <RevealStagger
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 -me-px -mb-px"
              stagger={0.08}
            >
              {BRANDS.map((b) => (
                <RevealItem
                  key={b.name}
                  className="flex flex-col items-center justify-center gap-5 py-12 px-6 group border-e border-b border-[var(--tc-border)]"
                >
                  <div className="flex h-16 items-center justify-center">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      width={b.w}
                      height={b.h}
                      className="h-14 w-auto max-h-14 max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm font-600 tracking-wide text-[var(--tc-text-secondary)] text-center">
                    {b.name}
                  </span>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
