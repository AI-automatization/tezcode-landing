import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

// ─────────────────────────────────────────────────────────
// Contact hub copy (pre-footer block) — per-locale, uz fallback
// ─────────────────────────────────────────────────────────
type HubLang = "uz" | "ru" | "en" | "ar" | "uk";

const HUB_COPY: Record<
  HubLang,
  {
    forLeaders: string;
    auditTitle: string;
    auditDesc: string;
    points: [string, string, string];
    cta: string;
  }
> = {
  uz: {
    forLeaders: "Biznes egalari uchun",
    auditTitle: "Bepul jarayon auditidan boshlang",
    auditDesc:
      "30 daqiqada AI biznesingizning qaysi qismiga eng katta foyda berishini aniqlab beramiz: savdo, mijozlar, hisobotlar yoki jarayonlar.",
    points: [
      "14 kun bepul sinov — karta talab qilinmaydi",
      "Qo'llab-quvvatlash: UZ / RU / EN",
      "POS, CRM va Telegram integratsiyalari",
    ],
    cta: "Bepul konsultatsiya",
  },
  ru: {
    forLeaders: "Для владельцев бизнеса",
    auditTitle: "Начните с бесплатного аудита процессов",
    auditDesc:
      "За 30 минут определим, где AI даст вашему бизнесу наибольший эффект: продажи, клиенты, отчёты или процессы.",
    points: [
      "14 дней бесплатно — карта не нужна",
      "Поддержка: UZ / RU / EN",
      "Интеграции: POS, CRM и Telegram",
    ],
    cta: "Бесплатная консультация",
  },
  en: {
    forLeaders: "For business owners",
    auditTitle: "Start with a free process audit",
    auditDesc:
      "In 30 minutes we'll pinpoint where AI delivers the biggest impact for your business: sales, customers, reporting or operations.",
    points: [
      "14-day free trial — no card required",
      "Support: UZ / RU / EN",
      "POS, CRM and Telegram integrations",
    ],
    cta: "Free consultation",
  },
  ar: {
    forLeaders: "لأصحاب الأعمال",
    auditTitle: "ابدأ بتدقيق مجاني للعمليات",
    auditDesc:
      "خلال 30 دقيقة نحدد أين يحقق الذكاء الاصطناعي أكبر أثر في عملك: المبيعات، العملاء، التقارير أو العمليات.",
    points: [
      "تجربة مجانية لمدة 14 يومًا — بدون بطاقة",
      "الدعم: UZ / RU / EN",
      "تكاملات POS وCRM وTelegram",
    ],
    cta: "استشارة مجانية",
  },
  uk: {
    forLeaders: "Для власників бізнесу",
    auditTitle: "Почніть з безкоштовного аудиту процесів",
    auditDesc:
      "За 30 хвилин визначимо, де AI дасть вашому бізнесу найбільший ефект: продажі, клієнти, звіти чи процеси.",
    points: [
      "14 днів безкоштовно — картка не потрібна",
      "Підтримка: UZ / RU / EN",
      "Інтеграції: POS, CRM і Telegram",
    ],
    cta: "Безкоштовна консультація",
  },
};

const CONTACT_CHANNELS: {
  label: string;
  href?: string;
  external?: boolean;
  icon: "phone" | "send" | "mail" | "pin" | "instagram" | "linkedin";
}[] = [
  { label: "+998 91 777 66 09", href: "tel:+998917776609", icon: "phone" },
  {
    label: "@tezcode_managament",
    href: "https://t.me/tezcode_managament",
    external: true,
    icon: "send",
  },
  {
    label: "Toshkent, Amir Temur shoh ko'chasi, 10",
    href: "https://yandex.uz/maps/-/CTeXZ-PZ",
    external: true,
    icon: "pin",
  },
];

// Compact icon-only row under the main channels.
const SOCIAL_CHANNELS: { label: string; href: string; icon: "instagram" | "linkedin" | "mail" }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tezcode_dev/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tezcode-dev/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:tezcode@tezcode.dev", icon: "mail" },
];

const CHANNEL_ICONS = {
  phone: Phone,
  send: Send,
  mail: Mail,
  pin: MapPin,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;

// ─────────────────────────────────────────────────────────
// TC Monogram (Footer — below fold, lazy load)
// ─────────────────────────────────────────────────────────
function TCLogo() {
  return (
    <div className="w-9 h-9 flex items-center justify-center relative">
      <Image
        src="/tezcode-logo-white.png"
        alt="Tezcode logo"
        width={36}
        height={36}
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Footer Component
// ─────────────────────────────────────────────────────────
export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const hub = HUB_COPY[locale as HubLang] ?? HUB_COPY.uz;
  const year = new Date().getFullYear();

  // Section anchors (#...) live on the home page — prefix with "/" so they
  // navigate home from sub-pages instead of appending to the current URL.
  // Services we build for clients on request. (Products like RAOS / ClinicaGo /
  // WorkControl are surfaced on the homepage products section, whose cards link
  // to their dedicated landing pages — so they don't need a footer column.)
  const serviceLinks: { label: string; href: string }[] = [
    { label: "AI chatbot", href: "/ai-chatbot" },
    { label: "Telegram bot", href: "/telegram-bot-biznes" },
    { label: "AI avtomatizatsiya", href: "/ai-avtomatizatsiya" },
    { label: "POS tizimi", href: "/pos-tizimi" },
    { label: "Klinika CRM", href: "/klinika-crm" },
    { label: "Xodim nazorati", href: "/xodim-nazorati" },
    { label: "AI agent", href: "/ai-agent" },
    { label: "Biznes avtomatlashtirish", href: "/biznes-avtomatlashtirish" },
  ];

  const companyLinks = [
    { label: t("about"), href: "/biz-haqimizda" },
    { label: t("for_businesses"), href: "/for-businesses" },
    { label: t("hire_developers"), href: "/hire-developers" },
    { label: t("case_studies"), href: "/case-studies" },
    { label: t("blog"), href: "/blog" },
    { label: t("press"), href: "/press" },
  ];

  // Legal links live in the bottom bar (compact), not as a full column.
  const legalLinks = [
    { label: t("privacy"), href: "/privacy" },
    { label: t("terms"), href: "/terms" },
  ];

  return (
    <>
      {/* ── Contact hub — pre-footer: single navy panel ──── */}
      <section className="bg-[var(--tc-ink)] border-t border-[var(--tc-border)] py-16 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tc-navy-section relative overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] p-8 sm:p-12 lg:p-14">
            {/* Soft corner glow */}
            <div
              aria-hidden
              className="absolute -top-32 -end-24 w-[26rem] h-[26rem] rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(0,64,255,0.22)" }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14">
              {/* Left: pitch + CTAs + trust points */}
              <div>
                <div
                  className="text-xs font-600 uppercase tracking-[0.16em] text-[var(--tc-blue-text)] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {hub.forLeaders}
                </div>
                <h3
                  className="text-3xl sm:text-4xl font-700 text-[var(--tc-text-primary)] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {hub.auditTitle}
                </h3>
                <p className="text-sm sm:text-base text-[var(--tc-text-secondary)] leading-relaxed mb-8 max-w-xl">
                  {hub.auditDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-9">
                  <Link href="/aloqa" className="tc-btn-primary">
                    {hub.cta}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                  <a
                    href="https://t.me/tezcode_managament"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-btn-secondary"
                  >
                    <Send className="w-4 h-4" />
                    Telegram
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {hub.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-2 text-sm text-[var(--tc-text-secondary)]"
                    >
                      <Check
                        className="w-4 h-4 shrink-0 text-[var(--tc-success)]"
                        strokeWidth={2.5}
                      />
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: contact channels — plain rows, no cards */}
              <div className="lg:border-s lg:border-[var(--tc-border)] lg:ps-10">
                <ul className="divide-y divide-[var(--tc-border)]">
                  {CONTACT_CHANNELS.map((ch) => {
                    const Icon = CHANNEL_ICONS[ch.icon];
                    const inner = (
                      <>
                        <span className="w-10 h-10 shrink-0 rounded-xl bg-[var(--tc-blue-dim)] flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-[var(--tc-blue-text)]" />
                        </span>
                        <span className="text-sm sm:text-base font-500 text-[var(--tc-text-primary)] truncate">
                          {ch.label}
                        </span>
                      </>
                    );
                    return (
                      <li key={ch.label}>
                        {ch.href ? (
                          <a
                            href={ch.href}
                            {...(ch.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="flex items-center gap-4 py-4 group"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 py-4">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* Socials + email — compact icon row */}
                <div className="flex items-center gap-3 pt-5 border-t border-[var(--tc-border)]">
                  {SOCIAL_CHANNELS.map((ch) => {
                    const Icon = CHANNEL_ICONS[ch.icon];
                    return (
                      <a
                        key={ch.label}
                        href={ch.href}
                        {...(ch.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        aria-label={ch.label}
                        title={ch.label}
                        className="w-11 h-11 rounded-xl bg-[var(--tc-blue-dim)] flex items-center justify-center transition-colors duration-200 hover:bg-[var(--tc-blue)] group/social"
                      >
                        <Icon className="w-5 h-5 text-[var(--tc-blue-text)] group-hover/social:text-white transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="tc-navy-section py-16 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <TCLogo />
              <span
                className="font-700 text-lg text-[var(--tc-text-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tezcode
              </span>
            </div>
            <p className="text-sm text-[var(--tc-text-muted)] leading-relaxed">
              {t("tagline")}
            </p>

            {/* Own products on their own domains — visible cross-links so
                crawlers/AI connect the Tezcode ↔ RAOS ↔ ClinicaGo family
                (the JSON-LD alone has no crawlable <a> equity). */}
            <ul className="mt-5 flex flex-col gap-2">
              {[
                { name: "RAOS", href: "https://raos.uz", desc: "POS" },
                { name: "ClinicaGo", href: "https://clinicago.uz", desc: "CRM" },
              ].map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
                  >
                    {p.name}
                    <span className="text-[var(--tc-text-muted)]"> — {p.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4
              className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("services")}
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("company")}
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location column */}
          <div>
            <h4
              className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("contact_title")}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[var(--tc-text-secondary)]">
              <li>
                <a href="mailto:tezcode@tezcode.dev" className="hover:text-[var(--tc-blue-text)] transition-colors">
                  tezcode@tezcode.dev
                </a>
              </li>
              <li className="text-[var(--tc-text-muted)]">Toshkent, Amir Temur shoh ko'chasi, 10</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--tc-border)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-sm text-[var(--tc-text-muted)]">
              © {year} Tezcode · {t("rights")} · {t("made_in")}
            </p>
            <div className="flex items-center gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--tc-text-muted)] hover:text-[var(--tc-text-secondary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}
