import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getPersonSchema,
} from "@/lib/seo";

const PATH = "/sardor-madaliyev";

// Server Component: Person + Breadcrumb JSON-LD are emitted in the SSR HTML so
// AI engines (ChatGPT, Perplexity, AI Overviews) can attribute Tezcode to a
// real person and resolve the brand entity unambiguously.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: "Sardor Madaliyev — Tezcode AI Engineer, AI Video Analitika",
    description:
      "Sardor Madaliyev — Tezcode (AI Software Factory, Toshkent) jamoasida AI Engineer. AI video analitika bo'yicha mutaxassis: kameradan real vaqtda odam aniqlash, xatti-harakat tahlili va biznes uchun avtomatik nazorat tizimlari.",
    keywords: [
      "Sardor Madaliyev",
      "Sardor Madaliyev Tezcode",
      "Tezcode AI Engineer",
      "AI video analitika mutaxassis",
      "AI video analytics engineer",
      "Computer Vision Toshkent",
    ],
    ogTitle: "Sardor Madaliyev — Tezcode AI Engineer",
    ogDescription:
      "AI Engineer · AI video analitika bo'yicha mutaxassis. Kameradan odam aniqlash va biznes nazorati.",
  });
}

const FACTS = [
  { label: "Lavozim", value: "AI Engineer · AI Video Analitika" },
  { label: "Kompaniya", value: "Tezcode — AI Software Factory" },
  { label: "Joylashuv", value: "Toshkent, O'zbekiston" },
  { label: "Yo'nalish", value: "AI video analitika, computer vision, biznes avtomatlashtirish" },
];

const SKILLS = [
  "AI video analitika",
  "Computer Vision (odam aniqlash)",
  "AI integratsiya",
  "NestJS",
  "React",
  "TypeScript",
  "Prisma / PostgreSQL",
  "Biznes avtomatlashtirish",
];

const PROJECTS = [
  {
    name: "AI Video Analitika",
    role: "Kameradan real vaqtda odam aniqlash va biznes nazorati",
    href: `${BASE_URL}/ai-video-analitika`,
  },
  {
    name: "AI Xodim Nazorati",
    role: "Kamera asosida xodimlar ish nazorati tizimi",
    href: `${BASE_URL}/xodim-nazorati`,
  },
];

const LINKS = [
  { label: "Telegram: @madaliev_s", href: "https://t.me/madaliev_s" },
  { label: "Instagram: @_madaliev_s", href: "https://instagram.com/_madaliev_s" },
  {
    label: "LinkedIn: Sardor Madaliev",
    href: "https://www.linkedin.com/in/sardor-madaliyev-566601377/",
  },
  { label: "Email: madalievsardor33@gmail.com", href: "mailto:madalievsardor33@gmail.com" },
];

export default function SardorMadaliyevPage() {
  const personSchema = getPersonSchema({
    name: "Sardor Madaliyev",
    slug: "sardor-madaliyev",
    jobTitle: "AI Engineer",
    description:
      "Sardor Madaliyev — Tezcode (AI Software Factory, Toshkent) jamoasida AI Engineer. AI video analitika bo'yicha mutaxassis: kameradan real vaqtda odam aniqlash, xatti-harakat tahlili va biznes uchun avtomatik nazorat tizimlari ustida ishlaydi. AI Engineer specializing in AI video analytics at Tezcode, Tashkent.",
    knowsAbout: [
      "Artificial Intelligence",
      "Computer Vision",
      "AI Video Analytics",
      "Object Detection",
      "Full-Stack Development",
      "Business Automation",
    ],
    sameAs: [
      "https://t.me/madaliev_s",
      "https://instagram.com/_madaliev_s",
      "https://www.linkedin.com/in/sardor-madaliyev-566601377/",
    ],
    image: "/team/sardor-madaliyev.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Sardor Madaliyev", url: `${BASE_URL}${PATH}` },
  ]);

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
            <div className="mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden border-2 border-[var(--tc-gold)]/30 shadow-[var(--tc-shadow-card)]">
              <Image
                src="/team/sardor-madaliyev.jpg"
                alt="Sardor Madaliyev — Tezcode AI Engineer"
                width={160}
                height={160}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              AI Engineer · AI Video Analitika
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sardor Madaliyev
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg leading-relaxed max-w-xl mx-auto">
              <strong className="text-[var(--tc-text-primary)]">Tezcode</strong> —
              Toshkentda joylashgan AI Software Factory jamoasida AI Engineer, AI
              video analitika bo&apos;yicha mutaxassis.
            </p>
            <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
          </div>

          {/* Bio */}
          <section className="mb-16">
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)] leading-relaxed space-y-4">
              <p>
                Sardor Madaliyev — <strong className="text-[var(--tc-text-primary)]">Tezcode</strong>{" "}
                jamoasida AI Engineer. Asosiy yo&apos;nalishi —{" "}
                <strong className="text-[var(--tc-blue-text)]">AI video
                analitika</strong>: kameradan real vaqtda odam aniqlash,
                xatti-harakat tahlili va biznes uchun avtomatik nazorat tizimlari.
              </p>
              <p>
                Full-stack ishlab chiqish tajribasi bilan (NestJS, React,
                TypeScript) AI modellarini real biznes tizimlariga integratsiya
                qiladi. Maqsad — bizneslarga kamera oqimini shunchaki yozib
                qo&apos;yish emas, balki undan real ma&apos;lumot va nazorat
                chiqarib berish.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2
              className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ko&apos;nikmalar
            </h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-sm text-[var(--tc-text-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

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
                {FACTS.map((f) => (
                  <div key={f.label} className="flex flex-wrap gap-2 text-sm">
                    <dt className="text-[var(--tc-text-muted)] w-36 uppercase tracking-widest text-xs">
                      {f.label}
                    </dt>
                    <dd className="text-[var(--tc-text-primary)] flex-1">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-16">
            <h2
              className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Loyihalar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="group p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] hover:bg-[var(--tc-surface-3)] transition-colors"
                >
                  <div
                    className="font-700 text-[var(--tc-text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs text-[var(--tc-text-muted)] mt-1">
                    {p.role}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-2xl font-700 text-[var(--tc-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aloqa
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)] space-y-2 text-sm">
              {LINKS.map((l) => (
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
