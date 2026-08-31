"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Clients (logo wall) — brands Tezcode has built for. Distinct from Partners
// (partnerships carousel) and Testimonials (reviews). Add a logo here as new
// clients come in. Logos live in public/clients/.
type Client = {
  name: string;
  logo: string; // /clients/<file> (transparent PNG preferred)
  href?: string;
  w: number; // intrinsic logo width
  h: number; // intrinsic logo height
};

const CLIENTS: Client[] = [
  { name: "Hoffen1", logo: "/clients/hoffen1.png", href: "https://hoffen.uz", w: 432, h: 182 },
];

const LABELS: Record<string, { chip: string; title: string; subtitle: string }> = {
  uz: {
    chip: "Mijozlarimiz",
    title: "Bizga ishonch bildirgan brendlar",
    subtitle: "O'zbekistondagi kompaniyalar Tezcode bilan ishlaydi.",
  },
  ru: {
    chip: "Наши клиенты",
    title: "Бренды, которые нам доверяют",
    subtitle: "Компании Узбекистана работают с Tezcode.",
  },
  en: {
    chip: "Our clients",
    title: "Brands that trust us",
    subtitle: "Companies across Uzbekistan work with Tezcode.",
  },
  ar: {
    chip: "عملاؤنا",
    title: "علامات تجارية تثق بنا",
    subtitle: "شركات في أوزبكستان تعمل مع Tezcode.",
  },
  uk: {
    chip: "Наші клієнти",
    title: "Бренди, які нам довіряють",
    subtitle: "Компанії Узбекистану працюють з Tezcode.",
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

        <RevealStagger
          className="flex flex-wrap items-center justify-center gap-5"
          stagger={0.08}
        >
          {CLIENTS.map((c) => {
            const inner = (
              <Image
                src={c.logo}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="h-12 w-auto object-contain"
              />
            );
            return (
              <RevealItem key={c.name}>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={c.name}
                    className="tc-card tc-card-hover flex items-center justify-center h-24 px-10 min-w-[220px]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="tc-card flex items-center justify-center h-24 px-10 min-w-[220px]">
                    {inner}
                  </div>
                )}
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
