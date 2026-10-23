"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Homepage strip with four recent reels. Plain cover images + outbound links
// (no Instagram embed script), placed below the lead-capture sections so it
// grows the account without pulling visitors away from the offer first.

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const PROFILE_URL = "https://www.instagram.com/tezcode_dev/";

const REELS: { href: string; cover: string; alt: string }[] = [
  {
    href: "https://www.instagram.com/reel/DeLlAuok2If/",
    cover: "/instagram/savollar.jpg",
    alt: "Har kuni bir xil savol — AI agent mijozlarga o'zi javob beradi",
  },
  {
    href: "https://www.instagram.com/reel/Dd00KJjsRSu/",
    cover: "/instagram/dantes.jpg",
    alt: "Tezcode, AI Solution va Dantes Construction hamkorligi",
  },
  {
    href: "https://www.instagram.com/reel/DdL42WLgcUh/",
    cover: "/instagram/buxgalter.jpg",
    alt: "Buxgalterga oyiga 2 million to'laysizmi — hisobotni avtomatlashtirish",
  },
  {
    href: "https://www.instagram.com/reel/Ddl4d-vFHzX/",
    cover: "/instagram/kamera.jpg",
    alt: "Kamera bor, ko'radigan odam yo'q — AI video analitika",
  },
];

const LABELS: Record<Lang, { title: string; subtitle: string; follow: string; watch: string }> = {
  uz: {
    title: "Instagram'da Tezcode",
    subtitle: "Qisqa videolarda AI biznesda qanday ishlashini ko'rsatamiz",
    follow: "@tezcode_dev'ga obuna bo'lish",
    watch: "Instagram'da ko'rish",
  },
  ru: {
    title: "Tezcode в Instagram",
    subtitle: "В коротких видео показываем, как ИИ работает в бизнесе",
    follow: "Подписаться на @tezcode_dev",
    watch: "Смотреть в Instagram",
  },
  en: {
    title: "Tezcode on Instagram",
    subtitle: "Short videos showing how AI works inside real businesses",
    follow: "Follow @tezcode_dev",
    watch: "Watch on Instagram",
  },
  ar: {
    title: "Tezcode على Instagram",
    subtitle: "نعرض في مقاطع قصيرة كيف يعمل الذكاء الاصطناعي في الأعمال",
    follow: "تابع @tezcode_dev",
    watch: "شاهد على Instagram",
  },
  uk: {
    title: "Tezcode в Instagram",
    subtitle: "У коротких відео показуємо, як AI працює в бізнесі",
    follow: "Підписатися на @tezcode_dev",
    watch: "Дивитися в Instagram",
  },
};

export function InstagramReels() {
  const locale = useLocale() as Lang;
  const l = LABELS[locale] ?? LABELS.uz;

  return (
    <section className="py-20 sm:py-28 px-6 border-t border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="tc-chip mb-5 inline-flex items-center gap-1.5">
            <InstagramIcon className="h-3.5 w-3.5" />
            Instagram
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-3 tracking-tight text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {l.title}
          </h2>
          <p className="text-[var(--tc-text-muted)] max-w-2xl leading-relaxed">{l.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {REELS.map((reel) => (
            <RevealItem key={reel.href}>
              <a
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${reel.alt} — ${l.watch}`}
                className="group relative block aspect-[9/16] overflow-hidden rounded-2xl border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
              >
                <Image
                  src={reel.cover}
                  alt={reel.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                <span className="absolute start-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                  <Play aria-hidden="true" className="h-3.5 w-3.5 translate-x-px fill-current" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-btn-secondary inline-flex items-center gap-2"
          >
            <InstagramIcon className="h-4 w-4" />
            {l.follow}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
