import { useTranslations } from "next-intl";
import Link from "next/link";

// ─────────────────────────────────────────────────────────
// TC Monogram (inline for Footer)
// ─────────────────────────────────────────────────────────
function TCLogo() {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-md bg-white p-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/tezcode-logo.png" alt="Tezcode logo" className="w-full h-full object-contain" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Footer Component
// ─────────────────────────────────────────────────────────
export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const divisionLinks = [
    "TezCode Systems",
    "TezCode Custom",
    "TezCode AI",
    "TezCode Teams",
    "TezCode Labs",
    "TezCode Academy",
  ];

  const companyLinks = [
    { label: t("about"), href: "#team" },
    { label: t("team"), href: "#team" },
    { label: t("careers"), href: "#contact" },
    { label: t("contact"), href: "#contact" },
    { label: t("privacy"), href: "/privacy" },
    { label: t("terms"), href: "/terms" },
  ];

  const socialLinks = [
    {
      label: "Telegram",
      href: "https://t.me/Web_Developers_free",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tezcode.ai/",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[var(--tc-ink)] border-t border-[var(--tc-border)] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <TCLogo />
              <span
                className="font-700 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tezcode
              </span>
            </div>
            <p className="text-sm text-[var(--tc-text-muted)] leading-relaxed mb-6">
              {t("tagline")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-[var(--tc-radius-sm)] border border-[var(--tc-border)] flex items-center justify-center text-[var(--tc-text-muted)] hover:text-[var(--tc-blue)] hover:border-[var(--tc-blue)] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div>
            <h4
              className="text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("divisions")}
            </h4>
            <ul className="flex flex-col gap-2">
              {divisionLinks.map((division) => (
                <li key={division}>
                  <a
                    href="#divisions"
                    className="text-sm text-[var(--tc-text-secondary)] hover:text-[var(--tc-text-primary)] tc-link-underline transition-colors"
                  >
                    {division}
                  </a>
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
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[var(--tc-text-secondary)]">
              <li>
                <a href="mailto:hello@tezcode.dev" className="hover:text-[var(--tc-blue)] transition-colors">
                  hello@tezcode.dev
                </a>
              </li>
              <li className="text-[var(--tc-text-muted)]">Tashkent, Uzbekistan</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--tc-border)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--tc-text-muted)]">
            © {year} Tezcode AI · {t("rights")} · {t("made_in")}
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--tc-text-muted)]">
            <span>Built with</span>
            <span className="text-[var(--tc-blue)]">Next.js 15</span>
            <span>+</span>
            <span className="text-[var(--tc-gold)]">next-intl</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
