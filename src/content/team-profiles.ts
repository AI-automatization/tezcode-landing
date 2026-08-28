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
  {
    slug: "jafarbek-ulugbekov",
    name: "Jafarbek Ulugbekov",
    role: "Full-Stack Developer",
    bio: [
      "Jafarbek Ulugbekov — Tezcode jamoasida Full-Stack Developer. Next.js, React va TypeScript asosida veb-ilovalar quradi.",
      "ClinicaGo (clinicago.uz) mahsuloti bo'yicha mas'ul; HamshiraGo, CoreMed va Salomat AI loyihalarida ishlaydi. Tailwind, NestJS, Telegram Bot API va Railway bilan ishlaydi.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Telegram Bot API",
      "Railway",
    ],
    projects: [
      { name: "ClinicaGo", role: "Klinikalar uchun CRM" },
      { name: "HamshiraGo", role: "Tibbiy xizmat platformasi" },
      { name: "CoreMed", role: "Healthtech holding" },
      { name: "Salomat AI", role: "AI tibbiy yordamchi" },
    ],
    telegram: "JafarbekUlugbekov",
    linkedin: "https://www.linkedin.com/in/jafarbek-ulugbekov-059453341",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
    ],
    metaTitle: "Jafarbek Ulugbekov — Tezcode Full-Stack Developer",
    metaDescription:
      "Jafarbek Ulugbekov — Tezcode jamoasida Full-Stack Developer. Next.js, React, TypeScript, NestJS. ClinicaGo, HamshiraGo loyihalari.",
  },
  {
    slug: "abubakir-ilhomov",
    name: "Abubakir Ilhomov",
    role: "Full-Stack & AI Developer",
    bio: [
      "Abubakir Ilhomov — Tezcode jamoasida full-stack va AI developer. Frontend (React, Next.js, Vue) hamda backend (Node.js, NestJS, Python/FastAPI) bo'yicha production tajribaga ega.",
      "AI agentlar (Claude Agent SDK), MCP server/client va prompt engineering bilan ishlaydi. ClinicaGo va HamshiraGo loyihalarida; MARS IT School'da Head of Interns.",
    ],
    skills: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "AI Agents (Claude SDK)",
      "MCP",
    ],
    projects: [
      { name: "ClinicaGo", role: "Klinikalar uchun CRM" },
      { name: "HamshiraGo", role: "Tibbiy xizmat platformasi" },
    ],
    telegram: "abubakirilhomov",
    linkedin: "https://www.linkedin.com/in/abubakir-ilhomov-888131325",
    photo: "/team/abubakir-ilhomov.jpg",
    knowsAbout: [
      "Full-Stack Development",
      "AI Agents",
      "MCP",
      "React",
      "Node.js",
      "Python",
    ],
    metaTitle: "Abubakir Ilhomov — Tezcode Full-Stack & AI Developer",
    metaDescription:
      "Abubakir Ilhomov — Tezcode jamoasida full-stack va AI developer. React, Next.js, Node.js, Python, AI agentlar (Claude SDK), MCP. ClinicaGo, HamshiraGo.",
  },
  {
    slug: "habibulloh-shuhratov",
    name: "Habibulloh Shuhratov",
    role: "Full-Stack Developer",
    bio: [
      "Habibulloh Shuhratov — Tezcode jamoasida Full-Stack Developer. React va Next.js frontend hamda Node.js/NestJS backend bilan ishlaydi.",
      "TypeScript, Prisma, PostgreSQL va Redis asosida to'liq stack quradi; Telegram Bot API integratsiyasi bilan ham ishlaydi.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Telegram Bot API",
    ],
    projects: [],
    telegram: "shuhratov_HH",
    linkedin: "https://www.linkedin.com/in/habibulloh-shuhratov-013b25409/",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
    ],
    metaTitle: "Habibulloh Shuhratov — Tezcode Full-Stack Developer",
    metaDescription:
      "Habibulloh Shuhratov — Tezcode jamoasida Full-Stack Developer. React, Next.js, Node.js, NestJS, TypeScript, Prisma.",
  },
  {
    slug: "yusuf-kasimov",
    name: "Yusuf Kasimov",
    role: "Full-Stack Developer",
    bio: [
      "Yusuf Kasimov — Tezcode jamoasida Full-Stack Developer. React frontend va Node.js backend bilan veb-mahsulotlar quradi.",
      "MaxSavdo va AviaTamir loyihalarida ishlaydi. MongoDB, Mongoose va Tailwind CSS bilan ishlaydi.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],
    projects: [
      { name: "MaxSavdo", role: "Full-stack veb ishlab chiqish" },
      { name: "AviaTamir", role: "Veb ishlab chiqish" },
    ],
    telegram: "ky_747",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
    ],
    metaTitle: "Yusuf Kasimov — Tezcode Full-Stack Developer",
    metaDescription:
      "Yusuf Kasimov — Tezcode jamoasida Full-Stack Developer. React, Node.js, MongoDB. MaxSavdo, AviaTamir loyihalari.",
  },
  {
    slug: "abdulaziz-mirzayev",
    name: "Abdulaziz Mirzayev",
    role: "Frontend & Mobile Developer",
    bio: [
      "Abdulaziz Mirzayev — Tezcode jamoasida frontend va mobil developer. React va Next.js frontend hamda React Native (iOS & Android) mobil ilovalar quradi.",
      "RAOS (POS/kassa) mahsulotida ishlaydi. TypeScript, Redux, Chart.js, Socket.io va i18n bilan ishlaydi.",
    ],
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "i18n",
      "Chart.js",
      "Axios",
      "Socket.io",
    ],
    projects: [{ name: "RAOS", role: "POS/kassa — frontend va mobil" }],
    telegram: "mirzaevvv011",
    linkedin: "https://www.linkedin.com/in/abdulaziz-mirzayev-b25650379",
    photo: "/team/abdulaziz-mirzayev.jpg",
    knowsAbout: [
      "Frontend Development",
      "Mobile Development",
      "React",
      "React Native",
      "TypeScript",
    ],
    metaTitle: "Abdulaziz Mirzayev — Tezcode Frontend & Mobile Developer",
    metaDescription:
      "Abdulaziz Mirzayev — Tezcode jamoasida frontend va mobil developer. React, Next.js, React Native (iOS & Android), TypeScript. RAOS loyihasi.",
  },
  {
    slug: "ziyoda-mirzakirova",
    name: "Ziyoda Mirzakirova",
    role: "Full Stack Developer",
    bio: [
      "Ziyoda Mirzakirova — Tezcode jamoasida Full Stack Developer. React va Redux asosida frontend hamda Node.js backend bilan ishlaydi.",
      "HTML, CSS, Tailwind CSS va zamonaviy JavaScript bilan veb-mahsulotlar quradi.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Redux",
      "Redux Toolkit",
      "Redux Persist",
      "Node.js",
    ],
    projects: [],
    telegram: "mirzakiirova",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Redux",
      "Node.js",
      "JavaScript",
    ],
    metaTitle: "Ziyoda Mirzakirova — Tezcode Full Stack Developer",
    metaDescription:
      "Ziyoda Mirzakirova — Tezcode jamoasida Full Stack Developer. React, Redux, Node.js, Tailwind CSS.",
  },
  {
    slug: "abdulloh-isroilov",
    name: "Abdulloh Isroilov",
    role: "AI-Trade Co-founder · Full-Stack Developer",
    bio: [
      "Abdulloh Isroilov — Tezcode jamoasida Full-Stack Developer va AI-Trade co-founder. React frontend hamda Node.js/Express backend bilan ishlaydi.",
      "AI-Trade savdo agenti loyihasida ishlaydi. MongoDB va zamonaviy JavaScript bilan mahsulot quradi.",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    projects: [{ name: "AI-Trade", role: "Savdo agenti — full-stack" }],
    telegram: "abufdx",
    photo: "/team/abdulloh-isroilov.jpg",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Node.js",
      "MongoDB",
      "Trading",
    ],
    metaTitle: "Abdulloh Isroilov — Tezcode Full-Stack Developer, AI-Trade",
    metaDescription:
      "Abdulloh Isroilov — Tezcode jamoasida Full-Stack Developer va AI-Trade co-founder. React, Node.js, Express, MongoDB.",
  },
];

export function getProfile(slug: string): TeamProfile | undefined {
  return TEAM_PROFILES.find((p) => p.slug === slug);
}
