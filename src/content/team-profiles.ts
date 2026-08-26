// Data-driven team member profiles. Each entry renders a full profile page at
// /jamoa/<slug> (via app/[locale]/jamoa/[slug]/page.tsx) plus a Person JSON-LD
// entity. Adding a new teammate = add one object here — no new page file.
// Info is collected from team members via the @sardor_ai_assistant DM flow.

export type TeamProject = { name: string; role: string; href?: string };

export type TeamProfile = {
  slug: string;
  name: string;
  role: string; // hero eyebrow + schema jobTitle
  bio: string[]; // paragraphs, pure Latin Uzbek
  skills: string[];
  projects: TeamProject[];
  telegram?: string; // username without @
  instagram?: string; // username without @
  linkedin?: string; // full URL
  email?: string;
  photo?: string; // /team/<file>.jpg (in public/)
  knowsAbout: string[]; // schema.org Person knowsAbout
  metaTitle: string;
  metaDescription: string;
};

export const TEAM_PROFILES: TeamProfile[] = [
  {
    slug: "behruz-satimboyev",
    name: "Behruz Satimboyev",
    role: "Team Lead · Full-Stack Developer",
    bio: [
      "Behruz Satimboyev — Tezcode jamoasida Team Lead va Full-Stack Developer. React, Next.js va Node.js asosida to'liq mahsulotlar quradi hamda jamoa ishini boshqaradi.",
      "TezDetal loyihasi ustida ishlaydi. REST API, real vaqt (Socket.io), autentifikatsiya (JWT) va CI/CD bo'yicha tajribaga ega; mobil uchun React Native va AI prompt engineering bilan ishlaydi.",
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Socket.io",
      "React Native",
      "CI/CD",
      "AI Prompt Engineering",
    ],
    projects: [{ name: "TezDetal", role: "Full-stack mahsulot ishlab chiqish va jamoa boshqaruvi" }],
    telegram: "behruz_237",
    photo: "/team/behruz-satimboyev.jpg",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "REST API",
      "React Native",
    ],
    metaTitle: "Behruz Satimboyev — Tezcode Team Lead, Full-Stack Developer",
    metaDescription:
      "Behruz Satimboyev — Tezcode jamoasida Team Lead va Full-Stack Developer. React, Next.js, Node.js, React Native. TezDetal loyihasi.",
  },
  {
    slug: "javodbek-abdusalimov",
    name: "Javodbek Abdusalimov",
    role: "Full-Stack Developer",
    bio: [
      "Javodbek Abdusalimov — Tezcode jamoasida Full-Stack Developer. Next.js, React va Node.js asosida veb-mahsulotlar quradi.",
      "TezDetal loyihasi ustida ishlaydi. TypeScript va zamonaviy JavaScript bilan frontend hamda backend qismlarini ishlab chiqadi.",
    ],
    skills: ["Next.js", "React", "Node.js", "TypeScript", "JavaScript"],
    projects: [{ name: "TezDetal", role: "Full-stack veb ishlab chiqish" }],
    telegram: "Javodbe411",
    photo: "/team/javodbek-abdusalimov.jpg",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
    metaTitle: "Javodbek Abdusalimov — Tezcode Full-Stack Developer",
    metaDescription:
      "Javodbek Abdusalimov — Tezcode jamoasida Full-Stack Developer. Next.js, React, Node.js, TypeScript. TezDetal loyihasi.",
  },
  {
    slug: "saidazim-buriboyev",
    name: "Saidazim Buriboyev",
    role: "Backend Developer",
    bio: [
      "Saidazim Buriboyev — Tezcode jamoasida Backend Developer. Node.js va Express asosida serverli tizimlar hamda mikroservislar quradi.",
      "WeWatch (ijtimoiy onlayn kinoteatr) loyihasida ishlaydi — services va admin paneli zonasi. Redis, MongoDB, real vaqt (Socket.io) va Docker bilan ishlaydi.",
    ],
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Docker",
      "Mikroservislar",
    ],
    projects: [{ name: "WeWatch", role: "Backend — services va admin panel" }],
    telegram: "forgerjunior",
    knowsAbout: [
      "Backend Development",
      "Node.js",
      "Microservices",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    metaTitle: "Saidazim Buriboyev — Tezcode Backend Developer",
    metaDescription:
      "Saidazim Buriboyev — Tezcode jamoasida Backend Developer. Node.js, Express, MongoDB, Redis, Docker, mikroservislar. WeWatch loyihasi.",
  },
  {
    slug: "abdulaziz-yormatov",
    name: "Abdulaziz Yormatov",
    role: "COO",
    bio: [
      "Abdulaziz Yormatov — Tezcode jamoasida COO. Studiyaning barcha mahsulotlarida arxitektura qarorlarini qabul qiladi va kod reviewdan o'tkazadi.",
      "NestJS va Prisma asosidagi backend, React hamda React Native frontend bilan ishlaydi; RAOS kassa tizimi, CoreMed va markazlashtirilgan billing ustida.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React Native (Expo)",
      "Arxitektura",
      "Code review",
    ],
    projects: [
      { name: "RAOS", role: "POS/kassa — arxitektura va texnik qarorlar" },
      { name: "CoreMed", role: "Healthtech ekotizimi — arxitektura, PR review" },
      { name: "WeWatch", role: "Ijtimoiy onlayn kinoteatr" },
      { name: "tezcode-billing", role: "Markazlashtirilgan billing tizimi" },
    ],
    telegram: "mr_abdulaziz_yormatov",
    linkedin: "https://www.linkedin.com/in/abdulaziz-yormatov-724287418/",
    photo: "/team/abdulaziz-yormatov.jpg",
    knowsAbout: [
      "Software Architecture",
      "TypeScript",
      "NestJS",
      "React",
      "React Native",
      "Code Review",
      "PostgreSQL",
    ],
    metaTitle: "Abdulaziz Yormatov — Tezcode COO",
    metaDescription:
      "Abdulaziz Yormatov — Tezcode jamoasida COO. TypeScript, NestJS, React, Prisma. RAOS, CoreMed va billing arxitekturasi.",
  },
  {
    slug: "abdulaziz-atxamov",
    name: "Abdulaziz Atxamov",
    role: "Marketing · QA · Developer",
    bio: [
      "Abdulaziz Atxamov — Tezcode jamoasida marketing, QA va development bo'yicha ishlaydi. Node.js va React asosida veb-mahsulotlar quradi hamda sifat nazorati (QA) qiladi.",
      "MaxSavdo loyihasida ishlaydi. Redux, JavaScript va Remotion (video) bilan ishlaydi; GitHub CLI orqali kod boshqaruvi.",
    ],
    skills: [
      "Node.js",
      "React",
      "Redux",
      "JavaScript",
      "HTML",
      "CSS",
      "Remotion",
      "GitHub CLI",
    ],
    projects: [{ name: "MaxSavdo", role: "Development, QA va marketing" }],
    telegram: "abdulazizatxamov262",
    linkedin: "https://www.linkedin.com/in/abdulaziz-atxamov-389ab83b5/",
    knowsAbout: [
      "Web Development",
      "React",
      "Node.js",
      "Quality Assurance",
      "Marketing",
      "Remotion",
    ],
    metaTitle: "Abdulaziz Atxamov — Tezcode Marketing, QA & Developer",
    metaDescription:
      "Abdulaziz Atxamov — Tezcode jamoasida marketing, QA va developer. Node.js, React, Redux, Remotion. MaxSavdo loyihasi.",
  },
  {
    slug: "ibrohim-sobirov",
    name: "Ibrohim Sobirov",
    role: "Full-Stack Developer",
    bio: [
      "Ibrohim Sobirov — Tezcode jamoasida Full-Stack Developer. React va Node.js asosida veb-mahsulotlar quradi.",
      "ClinicaGo (klinika CRM) loyihasida ishlaydi — frontend va backend qismlarini ishlab chiqadi.",
    ],
    skills: ["React", "Node.js", "JavaScript"],
    projects: [{ name: "ClinicaGo", role: "Full-stack veb ishlab chiqish" }],
    telegram: "Sinus_30gradus",
    knowsAbout: ["Full-Stack Development", "React", "Node.js"],
    metaTitle: "Ibrohim Sobirov — Tezcode Full-Stack Developer",
    metaDescription:
      "Ibrohim Sobirov — Tezcode jamoasida Full-Stack Developer. React, Node.js. ClinicaGo loyihasi.",
  },
  {
    slug: "diyor-raxmatullayev",
    name: "Diyor Raxmatullayev",
    role: "CoreMed Founder · Tezcode Team Lead",
    bio: [
      "Diyor Raxmatullayev — CoreMed healthtech holdingi asoschisi (HamshiraGo, ClinicaGo, Salomat AI) va Tezcode jamoasida Team Lead.",
      "Next.js, NestJS va TypeScript asosida full-stack ishlaydi; PostgreSQL, Railway, Remotion va AI/Claude integratsiyasi bilan klinikalar uchun CRM hamda tibbiy xizmat mahsulotlarini quradi.",
    ],
    skills: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Remotion",
      "Railway",
      "AI/Claude integration",
    ],
    projects: [
      { name: "ClinicaGo", role: "Klinikalar uchun CRM" },
      { name: "HamshiraGo", role: "Tibbiy xizmat platformasi" },
      { name: "CoreMed", role: "Healthtech holding" },
      { name: "Salomat AI", role: "AI tibbiy yordamchi" },
    ],
    telegram: "diyor_011",
    photo: "/team/diyor-raxmatullayev.jpg",
    knowsAbout: [
      "Healthtech",
      "Full-Stack Development",
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "AI Integration",
    ],
    metaTitle: "Diyor Raxmatullayev — CoreMed Founder, Tezcode Team Lead",
    metaDescription:
      "Diyor Raxmatullayev — CoreMed healthtech holdingi asoschisi (HamshiraGo, ClinicaGo) va Tezcode Team Lead. Next.js, NestJS, TypeScript, AI integratsiya.",
  },
];

export function getProfile(slug: string): TeamProfile | undefined {
  return TEAM_PROFILES.find((p) => p.slug === slug);
}
