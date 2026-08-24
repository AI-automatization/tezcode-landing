import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { TeamProfile as TeamProfileData } from "@/content/team-profiles";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Presentational profile page for a team member. Layout mirrors the founder /
// Sardor pages (centered avatar hero, light theme, Navbar/Footer inside the
// data-theme scope). JSON-LD is built by the route and passed in.
export function TeamProfile({
  profile,
  personSchema,
  breadcrumbSchema,
}: {
  profile: TeamProfileData;
  personSchema: object;
  breadcrumbSchema: object;
}) {
  const p = profile;

  const contactLinks = [
    p.telegram && { label: `Telegram: @${p.telegram}`, href: `https://t.me/${p.telegram}` },
    p.instagram && {
      label: `Instagram: @${p.instagram}`,
      href: `https://instagram.com/${p.instagram}`,
    },
    p.linkedin && { label: "LinkedIn", href: p.linkedin },
    p.email && { label: `Email: ${p.email}`, href: `mailto:${p.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  const facts = [
    { label: "Lavozim", value: p.role },
    { label: "Kompaniya", value: "Tezcode — AI Software Factory" },
    { label: "Joylashuv", value: "Toshkent, O'zbekiston" },
  ];

  return (
    <main data-theme="light" className="min-h-screen bg-[var(--tc-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <div className="mb-12 text-center">
            {p.photo ? (
              <div className="mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden border-2 border-[var(--tc-gold)]/30 shadow-[var(--tc-shadow-card)]">
                <Image
                  src={p.photo}
                  alt={`${p.name} — Tezcode ${p.role}`}
                  width={160}
                  height={160}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className="mx-auto mb-6 w-40 h-40 rounded-full flex items-center justify-center border-2 border-[var(--tc-gold)]/30 bg-[var(--tc-surface-2)] text-[var(--tc-blue-text)] text-4xl font-700 shadow-[var(--tc-shadow-card)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {initials(p.name)}
              </div>
            )}
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              {p.role}
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {p.name}
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg leading-relaxed max-w-xl mx-auto">
              <strong className="text-[var(--tc-text-primary)]">Tezcode</strong> —
              Toshkentda joylashgan AI Software Factory jamoasida {p.role}.
            </p>
            <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
          </div>

          {/* Bio */}
          <section className="mb-16">
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)] leading-relaxed space-y-4">
              {p.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Skills */}
          {p.skills.length > 0 && (
            <section className="mb-16">
              <h2
                className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ko&apos;nikmalar
              </h2>
              <div className="flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-sm text-[var(--tc-text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Facts */}
          <section className="mb-16">
            <h2
              className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Qisqacha
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]">
              <dl className="space-y-3">
                {facts.map((f) => (
                  <div key={f.label} className="flex flex-wrap gap-2 text-sm">
                    <dt className="text-[var(--tc-text-muted)] w-36 uppercase tracking-widest text-xs">
                      {f.label}
                    </dt>
                    <dd className="text-[var(--tc-text-primary)] flex-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Projects */}
          {p.projects.length > 0 && (
            <section className="mb-16">
              <h2
                className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Loyihalar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.projects.map((pr) => {
                  const inner = (
                    <>
                      <div
                        className="font-700 text-[var(--tc-text-primary)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {pr.name}
                      </div>
                      <div className="text-xs text-[var(--tc-text-muted)] mt-1">{pr.role}</div>
                    </>
                  );
                  return pr.href ? (
                    <a
                      key={pr.name}
                      href={pr.href}
                      className="group p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] hover:bg-[var(--tc-surface-3)] transition-colors"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={pr.name}
                      className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contact */}
          {contactLinks.length > 0 && (
            <section>
              <h2
                className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aloqa
              </h2>
              <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)] space-y-2 text-sm">
                {contactLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--tc-text-secondary)] hover:text-[var(--tc-blue-text)]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
