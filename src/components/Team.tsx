"use client";

import Image from "next/image";
import { m } from "motion/react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Member = {
  name: string;
  role: string;
  telegram?: string;
  isFounder?: boolean;
  profileSlug?: string; // if set, card links to /jamoa/<slug>
  profileHref?: string; // explicit profile path (e.g. top-level founder pages)
  photo?: string; // /team/<file>.jpg — shown instead of initials when present
};

const TEAM: Member[] = [
  {
    name: "Bekzod Mirzaaliyev",
    role: "Founder",
    telegram: "@webdevelopertk",
    isFounder: true,
    profileHref: "/bekzod-mirzaaliyev",
    photo: "/team/bekzod-mirzaaliyev.jpg",
  },
  {
    name: "Abdulaziz Yormatov",
    role: "COO",
    telegram: "@mr_abdulaziz_yormatov",
    profileSlug: "abdulaziz-yormatov",
    photo: "/team/abdulaziz-yormatov.jpg",
  },
  {
    name: "Abdulloh Isroilov",
    role: "AI-Trade Co-founder · Full-Stack Developer",
    telegram: "@abufdx",
    profileSlug: "abdulloh-isroilov",
    photo: "/team/abdulloh-isroilov.jpg",
  },
  {
    name: "Azimjon Qurbonov",
    role: "Savdo Builder Co-founder · Developer",
    telegram: "@Azim090",
  },
  {
    name: "Diyor Raxmatullayev",
    role: "CoreMed Founder · Tezcode Team Lead",
    telegram: "@diyor_011",
    profileSlug: "diyor-raxmatullayev",
    photo: "/team/diyor-raxmatullayev.jpg",
  },
  {
    name: "Sardor Madaliyev",
    role: "AI Engineer · AI Video Analitika",
    telegram: "@madaliev_s",
    profileHref: "/sardor-madaliyev",
    photo: "/team/sardor-madaliyev.jpg",
  },
  {
    name: "Ziyoda Mirzakirova",
    role: "Full Stack Developer",
    telegram: "@mirzakiirova",
    profileSlug: "ziyoda-mirzakirova",
  },
  {
    name: "Emirhan Ertan",
    role: "WeWatch Co-founder · Developer",
    telegram: "@Emirhan7788",
  },
  {
    name: "Behruz Satimboyev",
    role: "Team Lead · Full-Stack Developer",
    telegram: "@behruz_237",
    profileSlug: "behruz-satimboyev",
    photo: "/team/behruz-satimboyev.jpg",
  },
  {
    name: "Abubakir Ilhomov",
    role: "Full-Stack & AI Developer",
    telegram: "@abubakirilhomov",
    profileSlug: "abubakir-ilhomov",
    photo: "/team/abubakir-ilhomov.jpg",
  },
  {
    name: "Ibrat Tursunov",
    role: "Developer",
  },
  {
    name: "Polat Ismailov",
    role: "Developer",
  },
  {
    name: "Abdulaziz Mirzayev",
    role: "Frontend & Mobile Developer",
    telegram: "@mirzaevvv011",
    profileSlug: "abdulaziz-mirzayev",
    photo: "/team/abdulaziz-mirzayev.jpg",
  },
  {
    name: "Jafarbek Ulugbekov",
    role: "Full-Stack Developer",
    telegram: "@JafarbekUlugbekov",
    profileSlug: "jafarbek-ulugbekov",
  },
  {
    name: "Javodbek Abdusalimov",
    role: "Full-Stack Developer",
    telegram: "@Javodbe411",
    profileSlug: "javodbek-abdusalimov",
    photo: "/team/javodbek-abdusalimov.jpg",
  },
  {
    name: "Habibulloh Shuhratov",
    role: "Full-Stack Developer",
    telegram: "@shuhratov_HH",
    profileSlug: "habibulloh-shuhratov",
  },
  {
    name: "Saidazim Buriboyev",
    role: "Backend Developer",
    telegram: "@forgerjunior",
    profileSlug: "saidazim-buriboyev",
  },
  {
    name: "Abdulaziz Atxamov",
    role: "Marketing · QA · Developer",
    telegram: "@abdulazizatxamov262",
    profileSlug: "abdulaziz-atxamov",
  },
  {
    name: "Ibrohim Sobirov",
    role: "Full-Stack Developer",
    telegram: "@Sinus_30gradus",
    profileSlug: "ibrohim-sobirov",
  },
  {
    name: "Yusuf Kasimov",
    role: "Full-Stack Developer",
    telegram: "@ky_747",
    profileSlug: "yusuf-kasimov",
  },
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Team() {
  const t = useTranslations("team");

  return (
    <section
      id="team"
      className="py-32 px-6 bg-[var(--tc-surface-0)] relative overflow-hidden"
    >
      <m.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-gold) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t("subtitle")}
          </p>
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent origin-center"
          />
        </Reveal>

        {/* Team grid — equal cards (Bekzod has Founder badge but same size) */}
        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          stagger={0.04}
        >
          {TEAM.map((member) => (
            <RevealItem key={member.name}>
              <TeamCard member={member} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Hiring callout */}
        <Reveal delay={0.2}>
          <div className="mt-16 text-center p-8 rounded-[var(--tc-radius-lg)] border border-dashed border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/40 backdrop-blur-md max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 text-[var(--tc-gold)] text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
              {t("hiring.title")}
            </div>
            <p className="text-[var(--tc-text-secondary)] text-sm">
              {t("hiring.roles")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: Member }) {
  const router = useRouter();
  const profileHref =
    member.profileHref ??
    (member.profileSlug ? `/jamoa/${member.profileSlug}` : null);
  const clickable = Boolean(profileHref);

  const openProfile = () => {
    if (profileHref) router.push(profileHref);
  };

  return (
    <m.div whileHover={{ y: -6 }} className="group relative h-full">
      <div
        role={clickable ? "link" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={clickable ? openProfile : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProfile();
                }
              }
            : undefined
        }
        className={[
          "tc-card tc-card-hover h-full p-6 pt-8 flex flex-col items-center text-center",
          member.isFounder ? "ring-1 ring-[var(--tc-gold)]/40" : "",
          clickable
            ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tc-blue)]/50"
            : "",
        ].join(" ")}
      >
        {member.isFounder && (
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--tc-gold)]/15 border border-[var(--tc-gold)]/40 backdrop-blur-md text-[10px] font-700 text-[var(--tc-gold)] uppercase tracking-[0.15em] whitespace-nowrap">
            <span className="w-1 h-1 rounded-full bg-[var(--tc-gold)] animate-pulse" />
            Founder
          </div>
        )}

        {/* Avatar */}
        {member.photo ? (
          <div
            className={[
              "w-24 h-24 rounded-full overflow-hidden ring-2 mb-4 transition-transform duration-300 group-hover:scale-105",
              member.isFounder
                ? "ring-[var(--tc-gold)]/50"
                : "ring-[var(--tc-border-bright)]",
            ].join(" ")}
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={[
              "w-24 h-24 rounded-full flex items-center justify-center mb-4 text-2xl font-700 ring-2 transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-[var(--tc-blue-dim)] to-[var(--tc-surface-3)]",
              member.isFounder
                ? "text-[var(--tc-gold)] ring-[var(--tc-gold)]/50"
                : "text-[var(--tc-blue-text)] ring-[var(--tc-border-bright)]",
            ].join(" ")}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {initials(member.name)}
          </div>
        )}

        <h4
          className="font-700 text-[var(--tc-text-primary)] text-base leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.name}
        </h4>
        <p className="text-xs text-[var(--tc-text-muted)] leading-snug mt-1.5 flex-1">
          {member.role}
        </p>

        {member.telegram && (
          <div className="flex items-center justify-center mt-5 pt-4 border-t border-[var(--tc-border)] w-full">
            <a
              href={`https://t.me/${member.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-[var(--tc-text-muted)] hover:text-[var(--tc-blue-text)] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {member.telegram}
            </a>
          </div>
        )}
      </div>
    </m.div>
  );
}
