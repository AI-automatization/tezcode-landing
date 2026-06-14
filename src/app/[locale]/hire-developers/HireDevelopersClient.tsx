"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Magnetic } from "@/components/motion/Magnetic";
import { CountUp } from "@/components/motion/CountUp";
import { getFaqSchema } from "@/lib/seo";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type RateRow = {
  role: string;
  tezcode: string;
  us: string;
  ee: string;
  india: string;
};

type Highlight = {
  icon: string;
  title: string;
  desc: string;
};

type Role = {
  title: string;
  stack: string;
  rate: string;
};

type Model = {
  name: string;
  price: string;
  per: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};

type Step = {
  num: string;
  title: string;
  desc: string;
};

type Profile = {
  role: string;
  years: string;
  stack: string;
  rate: string;
  badge: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type Copy = {
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statDevs: string;
    statRate: string;
    statTimezone: string;
    statClients: string;
  };
  rates: {
    sectionTag: string;
    title: string;
    subtitle: string;
    colTezcode: string;
    colUs: string;
    colEe: string;
    colIndia: string;
    note: string;
    rows: RateRow[];
  };
  highlights: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Highlight[];
  };
  roles: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Role[];
  };
  models: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Model[];
    cta: string;
  };
  vetting: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Step[];
  };
  team: {
    sectionTag: string;
    title: string;
    subtitle: string;
    profiles: Profile[];
    note: string;
  };
  faq: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  finalCta: {
    sectionTag: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
};

// ─────────────────────────────────────────────────────────
// Localized copy — EN primary (foreign-hire focused), full 5 langs
// ─────────────────────────────────────────────────────────
const COPY: Record<Lang, Copy> = {
  en: {
    hero: {
      badge: "TezCode Teams · Staff Augmentation",
      headline: "Hire senior developers from Tashkent — from $30/hr",
      subhead:
        "AI-skilled, English/Russian fluent, EST overlap 5 hours, vetted in-house team of 16. No agencies, no middlemen.",
      ctaPrimary: "Book intro call",
      ctaSecondary: "View team profiles",
      statDevs: "in-house devs",
      statRate: "$/hour from",
      statTimezone: "GMT+5",
      statClients: "active clients",
    },
    rates: {
      sectionTag: "Rate comparison",
      title: "Senior engineering. Half the cost of the US.",
      subtitle:
        "Same English level. Same code quality. Stronger AI fluency than typical offshore. Better EST overlap than India.",
      colTezcode: "Tezcode (UZ)",
      colUs: "United States",
      colEe: "Eastern Europe",
      colIndia: "India",
      note: "Rates per hour, USD. Tezcode rates include IT Park residency (legal/tax stable, USD invoice).",
      rows: [
        { role: "Frontend (React/Next.js)", tezcode: "$30–45", us: "$80–140", ee: "$50–80", india: "$25–40" },
        { role: "Backend (Python/Node)", tezcode: "$32–48", us: "$90–150", ee: "$55–90", india: "$25–40" },
        { role: "Full-stack senior", tezcode: "$35–50", us: "$100–160", ee: "$60–95", india: "$28–42" },
        { role: "AI Engineer (Claude/RAG)", tezcode: "$40–55", us: "$120–180", ee: "$70–110", india: "$35–55" },
      ],
    },
    highlights: {
      sectionTag: "Why Tashkent",
      title: "Four reasons foreign founders pick our team",
      subtitle: "We are not a marketplace. 16 senior engineers, all in-house, vetted by the CEO himself.",
      items: [
        {
          icon: "01",
          title: "16 in-house senior devs",
          desc: "Not freelancers. Full-time team trained on AI tooling (Claude, ChatGPT), pair-coded by Bekzod Mirzaaliyev (CEO).",
        },
        {
          icon: "02",
          title: "English / Russian fluency",
          desc: "B2–C1 English across team. Daily standups in English. All commits, PRs, docs in English by default.",
        },
        {
          icon: "03",
          title: "GMT+5 — 5h EST overlap",
          desc: "Real working-hour overlap with US East coast (3pm–8pm EST). Better than India for sync work, similar to Eastern Europe.",
        },
        {
          icon: "04",
          title: "IT Park residency — legal stable",
          desc: "Tezcode is a registered IT Park resident (Uzbekistan government program). USD invoicing, 7-year tax holiday, standard NDA + IP transfer.",
        },
      ],
    },
    roles: {
      sectionTag: "Roles available",
      title: "Hire by role — or build a full squad",
      subtitle:
        "Mix and match. Most engagements start with one senior, scale to 2–4 engineers within 30 days.",
      items: [
        {
          title: "Senior Full-stack",
          stack: "React / Next.js · FastAPI / Node · Postgres · AWS",
          rate: "from $35/hr",
        },
        {
          title: "AI Engineer",
          stack: "Claude · OpenAI · RAG · fine-tuning · LangChain · vector DB",
          rate: "from $40/hr",
        },
        {
          title: "Frontend Specialist",
          stack: "Next.js · Tailwind · motion / Framer · TypeScript strict",
          rate: "from $30/hr",
        },
        {
          title: "Backend Engineer",
          stack: "Python · FastAPI · Postgres · Redis · PG-pubsub",
          rate: "from $32/hr",
        },
        {
          title: "Mobile",
          stack: "React Native · iOS / Android · Expo · native modules",
          rate: "from $35/hr",
        },
        {
          title: "DevOps",
          stack: "Docker · Kubernetes · Railway · AWS · GitHub Actions",
          rate: "from $38/hr",
        },
      ],
    },
    models: {
      sectionTag: "Engagement models",
      title: "Three ways to engage",
      subtitle: "Pay only for work delivered. No retainers, no signing fees.",
      items: [
        {
          name: "Part-time",
          price: "$1,200",
          per: "/month",
          tagline: "40–80h / month",
          features: [
            "1 dedicated engineer",
            "Slack / Telegram channel",
            "Weekly demo + report",
            "Cancel anytime, 7 days notice",
            "Best for early-stage / MVP",
          ],
        },
        {
          name: "Dedicated dev",
          price: "$4,800",
          per: "/month",
          tagline: "Full-time · 160h / month",
          highlight: true,
          features: [
            "1 senior, fully embedded",
            "Daily standup in your timezone",
            "Direct Slack / Linear access",
            "Sprint planning + retros",
            "2-week trial, full refund",
            "CEO acts as escalation point",
          ],
        },
        {
          name: "Project-based",
          price: "Quote",
          per: "on call",
          tagline: "Fixed scope, fixed price",
          features: [
            "Defined deliverables + milestones",
            "Squad of 2–4 engineers",
            "Tech lead + PM included",
            "Weekly demos, milestone billing",
            "Best for sprint / migration",
          ],
        },
      ],
      cta: "Talk to CEO",
    },
    vetting: {
      sectionTag: "Vetting process",
      title: "How we pick the senior who joins your team",
      subtitle: "Every engineer passes the same 4-step vet. CEO personally signs off on every hire.",
      items: [
        {
          num: "01",
          title: "English / Russian interview",
          desc: "30-min spoken assessment. We reject below B2. Your team will not have to repeat themselves.",
        },
        {
          num: "02",
          title: "Technical assessment",
          desc: "Algorithmic test (LeetCode medium) + system design discussion. We benchmark against US senior bar.",
        },
        {
          num: "03",
          title: "Pair coding with CEO",
          desc: "90-min live session with Bekzod. Refactor a real client codebase. We watch how they think, not just code.",
        },
        {
          num: "04",
          title: "2-week trial — full refund",
          desc: "Embed with your team for 2 weeks. If the fit is wrong, we refund 100% and replace within 5 business days.",
        },
      ],
    },
    team: {
      sectionTag: "Sample profiles",
      title: "Anonymized profiles — real availability",
      subtitle:
        "Identities revealed after intro call + NDA. These three are available for new engagements this quarter.",
      profiles: [
        {
          role: "Senior Full-stack",
          years: "5 yrs",
          stack: "React · Next.js · AI integrations · Postgres",
          rate: "$40/hr",
          badge: "Available",
        },
        {
          role: "AI Engineer",
          years: "4 yrs",
          stack: "Claude · RAG pipelines · vector DBs · fine-tuning",
          rate: "$45/hr",
          badge: "Available",
        },
        {
          role: "Backend Senior",
          years: "6 yrs",
          stack: "Python · FastAPI · Postgres · distributed systems",
          rate: "$38/hr",
          badge: "Available",
        },
      ],
      note: "All profiles include 3 references, public GitHub, recent commit activity, and a 5-minute self-intro video.",
    },
    faq: {
      sectionTag: "FAQ",
      title: "Answers before you ask",
      subtitle: "If something is missing, message Bekzod on Telegram — he answers within an hour.",
      items: [
        {
          q: "How fast can we start?",
          a: "1–2 weeks. Week 1: intake call + matching + interviews. Week 2: contract + onboarding to your tools (Slack, Linear, GitHub). Most clients have their dev in standup on day 8.",
        },
        {
          q: "What about time zones?",
          a: "Tashkent is GMT+5. We overlap 5 hours with US East coast (15:00–20:00 EST = 03:00–08:00 next day in UZ — we shift schedules) and 4 hours with US West coast. Full overlap with Europe and the UK.",
        },
        {
          q: "How good is the English?",
          a: "B2–C1 across all 16 engineers. Daily standups, code reviews, and async docs all happen in English. CEO Bekzod is C1 fluent for executive-level calls.",
        },
        {
          q: "How do contracts and invoicing work?",
          a: "Tezcode is an IT Park resident (Uzbekistan government program). You receive a standard USD invoice from a registered legal entity. Wire transfer or Stripe payouts. Standard MSA + SOW template, or we sign yours.",
        },
        {
          q: "What if the engineer is not a fit?",
          a: "2-week trial with full refund. After trial, you can request a swap within 5 business days at no cost. We have a bench, not a marketplace — replacements come from the same vetted team.",
        },
        {
          q: "Who owns the code / IP?",
          a: "You do, fully. Standard NDA signed before any code is written. All IP transfers to client on payment. Engineers sign individual IP assignment, in addition to the company-level NDA.",
        },
      ],
    },
    finalCta: {
      sectionTag: "Get started",
      title: "Book a 30-min intro call — free, no obligation",
      subtitle:
        "Talk directly to Bekzod (CEO). Bring your job description or rough idea. Leave with a shortlist of 2–3 matching engineers.",
      ctaPrimary: "Book intro call (Telegram)",
      ctaSecondary: "Send job description",
      trust: "No retainer · No signup form · CEO responds within 1 hour",
    },
  },
  uz: {
    hero: {
      badge: "TezCode Teams · Dasturchi ijarasi",
      headline: "Toshkentdan senior dasturchi yollang — $30/soat'dan",
      subhead:
        "AI bilan ishlay oladigan, ingliz/rus tilini biladigan, EST timezone 5 soat mos keladigan 16 ta jamoa. Vositachi yo'q, agentlik yo'q.",
      ctaPrimary: "Tanishuv qo'ng'irog'i",
      ctaSecondary: "Jamoa profillarini ko'rish",
      statDevs: "in-house dasturchi",
      statRate: "$/soat'dan",
      statTimezone: "GMT+5",
      statClients: "faol mijoz",
    },
    rates: {
      sectionTag: "Narx solishtirish",
      title: "Senior darajada. AQSh narxining yarmiga.",
      subtitle:
        "Bir xil ingliz darajasi (B2-C1 (B2 — kunlik ish, C1 — yuqori daraja)). Bir xil kod sifati. AI bilan ishlash boshqa offshore'larga qaraganda kuchli.",
      colTezcode: "Tezcode (UZ)",
      colUs: "AQSh",
      colEe: "Sharqiy Yevropa",
      colIndia: "Hindiston",
      note: "Soatlik USD narx. Tezcode IT Park rezident — qonuniy USD invoice (qonuniy va'soliq barqaror).",
      rows: [
        { role: "Frontend (React/Next.js)", tezcode: "$30–45", us: "$80–140", ee: "$50–80", india: "$25–40" },
        { role: "Backend (Python/Node)", tezcode: "$32–48", us: "$90–150", ee: "$55–90", india: "$25–40" },
        { role: "Full-stack senior", tezcode: "$35–50", us: "$100–160", ee: "$60–95", india: "$28–42" },
        { role: "AI Engineer (Claude/RAG)", tezcode: "$40–55", us: "$120–180", ee: "$70–110", india: "$35–55" },
      ],
    },
    highlights: {
      sectionTag: "Nega Toshkent",
      title: "Xorijiy mijozlar bizni tanlaydigan 4 sabab",
      subtitle: "Biz marketplace (bozor platforma) emasmiz. 16 ta senior dasturchi, hammasi in-house (ichki jamoa), CEO shaxsan tekshirgan.",
      items: [
        {
          icon: "01",
          title: "16 ta in-house senior dasturchi",
          desc: "Freelancer (mustaqil dasturchi) emas. Full-time (to'liq kun) jamoa, AI vositalari (Claude, ChatGPT) bilan o'rgatilgan, Bekzod Mirzaaliyev (CEO) bilan pair-code qilingan.",
        },
        {
          icon: "02",
          title: "Ingliz / rus tili",
          desc: "Butun jamoada B2–C1 darajada ingliz tili. Kunlik standup (qisqa yig'ilish) ingliz tilida. Hamma commit, PR, hujjat ingliz tilida.",
        },
        {
          icon: "03",
          title: "GMT+5 — EST 5 soat mos",
          desc: "AQSh Sharqiy qirg'oq bilan haqiqiy ish soat mos (15:00–20:00 EST). Hindistondan ko'ra sync ish uchun yaxshi, Sharqiy Yevropaga o'xshash.",
        },
        {
          icon: "04",
          title: "IT Park rezidentligi — qonuniy barqaror",
          desc: "Tezcode IT Park rezident (O'zbekiston davlat dasturi). USD invoice, 7 yillik soliq imtiyozi, standart NDA (maxfiylik kelishuvi) + IP (intellektual mulk) transfer.",
        },
      ],
    },
    roles: {
      sectionTag: "Mavjud rolalar",
      title: "Roleg yolang — yoki to'liq jamoa yig'ing",
      subtitle:
        "Aralashtiring. Aksariyat hamkorlik 1 senior'dan boshlanadi, 30 kun ichida 2–4 dasturchigacha o'sadi.",
      items: [
        {
          title: "Senior Full-stack",
          stack: "React / Next.js · FastAPI / Node · Postgres · AWS",
          rate: "$35/soat'dan",
        },
        {
          title: "AI Engineer",
          stack: "Claude · OpenAI · RAG · fine-tuning · LangChain · vector DB",
          rate: "$40/soat'dan",
        },
        {
          title: "Frontend Specialist",
          stack: "Next.js · Tailwind · motion / Framer · TypeScript strict",
          rate: "$30/soat'dan",
        },
        {
          title: "Backend Engineer",
          stack: "Python · FastAPI · Postgres · Redis · PG-pubsub",
          rate: "$32/soat'dan",
        },
        {
          title: "Mobile",
          stack: "React Native · iOS / Android · Expo · native modules",
          rate: "$35/soat'dan",
        },
        {
          title: "DevOps",
          stack: "Docker · Kubernetes · Railway · AWS · GitHub Actions",
          rate: "$38/soat'dan",
        },
      ],
    },
    models: {
      sectionTag: "Hamkorlik turlari",
      title: "Uch xil hamkorlik",
      subtitle: "Faqat bajarilgan ish uchun to'lang. Oldindan to'lov yo'q, shartnoma haqi yo'q.",
      items: [
        {
          name: "Part-time",
          price: "$1,200",
          per: "/oy",
          tagline: "40–80 soat / oy",
          features: [
            "1 ta dedicated (faqat sizga) dasturchi",
            "Slack / Telegram kanali",
            "Haftalik demo + hisobot",
            "Istalgan vaqt to'xtatish (7 kun ogohlantirish)",
            "MVP (minimal mahsulot) uchun eng yaxshi",
          ],
        },
        {
          name: "Dedicated",
          price: "$4,800",
          per: "/oy",
          tagline: "Full-time · 160 soat / oy",
          highlight: true,
          features: [
            "1 ta senior, to'liq jamoangizga qo'shilgan",
            "Sizning timezone'da kunlik standup",
            "To'g'ridan-to'g'ri Slack / Linear",
            "Sprint rejasi + retro yig'ilish",
            "2 haftalik sinov, to'liq qaytarib berish",
            "CEO eskalatsiya nuqtasi",
          ],
        },
        {
          name: "Loyihaviy",
          price: "Quote",
          per: "qo'ng'iroq'da",
          tagline: "Aniqlangan ish hajmi, aniq narx",
          features: [
            "Aniqlangan natijalar + bosqichlar",
            "2–4 ta dasturchi jamoasi",
            "Tech lead + PM (loyiha menejeri) qo'shilgan",
            "Haftalik demo, bosqich bo'yicha to'lov",
            "Sprint / migratsiya uchun eng yaxshi",
          ],
        },
      ],
      cta: "CEO bilan gaplashish",
    },
    vetting: {
      sectionTag: "Tanlash jarayoni",
      title: "Sizning jamoangizga qo'shiluvchi senior'ni qanday tanlaymiz",
      subtitle: "Har bir dasturchi bir xil 4 bosqichdan o'tadi. CEO har birini shaxsan tasdiqlaydi.",
      items: [
        {
          num: "01",
          title: "Ingliz / rus suhbati",
          desc: "30 daqiqalik og'zaki test. B2 dan past darajadagilarni qaytaramiz. Jamoangiz qaytarib so'rashga majbur bo'lmaydi.",
        },
        {
          num: "02",
          title: "Texnik test",
          desc: "Algoritmik test (LeetCode medium) + system design (tizim arxitekturasi). AQSh senior darajasiga taqqoslab baholaymiz.",
        },
        {
          num: "03",
          title: "CEO bilan pair coding",
          desc: "90 daqiqalik live (jonli) session Bekzod bilan. Real mijoz kodini refactor (qayta yozish). Faqat kod emas, qanday fikrlashini ko'ramiz.",
        },
        {
          num: "04",
          title: "2 haftalik sinov — to'liq qaytarish",
          desc: "Jamoangizga 2 haftalik qo'shilish. Agar mos kelmasa, 100% pul qaytariladi va 5 ish kunida almashtiramiz.",
        },
      ],
    },
    team: {
      sectionTag: "Profil namunalari",
      title: "Ismsiz profillar — haqiqiy mavjudlik",
      subtitle:
        "Ism tanishuv qo'ng'iroq + NDA dan keyin oshkor qilinadi. Bu uchovi bu chorakda yangi loyihaga mavjud.",
      profiles: [
        {
          role: "Senior Full-stack",
          years: "5 yil",
          stack: "React · Next.js · AI integratsiyalar · Postgres",
          rate: "$40/soat",
          badge: "Mavjud",
        },
        {
          role: "AI Engineer",
          years: "4 yil",
          stack: "Claude · RAG pipelines · vector DB · fine-tuning",
          rate: "$45/soat",
          badge: "Mavjud",
        },
        {
          role: "Backend Senior",
          years: "6 yil",
          stack: "Python · FastAPI · Postgres · taqsimlangan tizimlar",
          rate: "$38/soat",
          badge: "Mavjud",
        },
      ],
      note: "Har bir profilga 3 ta referens, ochiq GitHub, oxirgi commit faolligi va 5 daqiqalik tanishuv videosi qo'shiladi.",
    },
    faq: {
      sectionTag: "Tez-tez beriladigan savollar",
      title: "Savol bermasdan oldin javoblar",
      subtitle: "Agar javob yo'q bo'lsa — Bekzod'ga Telegram'da yozing, 1 soat ichida javob beradi.",
      items: [
        {
          q: "Qachon boshlay olamiz?",
          a: "1–2 hafta. 1-hafta: tanishuv + moslashtirish + intervyu. 2-hafta: shartnoma + sizning vositalaringizga (Slack, Linear, GitHub) onboarding. Aksariyat mijoz 8-kuni standup'da dasturchini ko'radi.",
        },
        {
          q: "Timezone qanday?",
          a: "Toshkent GMT+5. AQSh Sharqiy qirg'oq bilan 5 soat mos (15:00–20:00 EST = ertasi 03:00–08:00 UZ — biz jadval o'zgartiramiz), G'arbiy qirg'oq bilan 4 soat. Yevropa va Buyuk Britaniya bilan to'liq mos.",
        },
        {
          q: "Ingliz tili darajasi qanday?",
          a: "Hamma 16 dasturchida B2–C1. Kunlik standup, code review, async hujjat hammasi ingliz tilida. CEO Bekzod C1 — yuqori darajadagi qo'ng'iroq'lar uchun.",
        },
        {
          q: "Shartnoma va invoice qanday ishlaydi?",
          a: "Tezcode IT Park rezident (O'zbekiston davlat dasturi). Ro'yxatdan o'tgan yuridik shaxsdan standart USD invoice olasiz. Wire transfer yoki Stripe. Standart MSA + SOW shabloni yoki sizning shablonni imzolaymiz.",
        },
        {
          q: "Agar dasturchi mos kelmasa?",
          a: "2 haftalik sinov, to'liq qaytarish. Sinovdan keyin 5 ish kunida bepul almashtirish. Bizda bench (zaxira) bor — almashtirish o'sha tekshirilgan jamoadan.",
        },
        {
          q: "Kod / IP egasi kim?",
          a: "Siz, to'liq. Kod yozilishidan oldin standart NDA imzolanadi. To'lov amalga oshganda hamma IP mijozga o'tadi. Dasturchi shaxsiy IP transfer, kompaniya darajasidagi NDA qo'shimcha.",
        },
      ],
    },
    finalCta: {
      sectionTag: "Boshlash",
      title: "30 daqiqalik tanishuv qo'ng'irog'i — bepul, majburiyat yo'q",
      subtitle:
        "Bekzod (CEO) bilan to'g'ridan-to'g'ri gaplashing. Vazifa tavsifi yoki g'oyangizni keltiring. 2–3 ta mos dasturchi shortlist (qisqa ro'yxat) bilan ketasiz.",
      ctaPrimary: "Tanishuv qo'ng'irog'i (Telegram)",
      ctaSecondary: "Vazifa tavsifini yuborish",
      trust: "Oldindan to'lov yo'q · Forma yo'q · CEO 1 soat ichida javob beradi",
    },
  },
  ru: {
    hero: {
      badge: "TezCode Teams · Аренда разработчиков",
      headline: "Нанимайте senior-разработчиков из Ташкента — от $30/час",
      subhead:
        "AI-навыки, английский/русский свободно, пересечение с EST 5 часов, проверенная in-house команда из 16 инженеров. Без агентств, без посредников.",
      ctaPrimary: "Записаться на звонок",
      ctaSecondary: "Профили команды",
      statDevs: "in-house разработчиков",
      statRate: "$/час от",
      statTimezone: "GMT+5",
      statClients: "активных клиентов",
    },
    rates: {
      sectionTag: "Сравнение ставок",
      title: "Senior-инженерия. Половина стоимости США.",
      subtitle:
        "Тот же английский. То же качество кода. Сильнее в AI, чем типичный offshore. Лучшее EST-перекрытие, чем Индия.",
      colTezcode: "Tezcode (UZ)",
      colUs: "США",
      colEe: "Восточная Европа",
      colIndia: "Индия",
      note: "Ставки в час, USD. Tezcode — резидент IT Park (юридически и налогово стабильно, USD инвойс).",
      rows: [
        { role: "Frontend (React/Next.js)", tezcode: "$30–45", us: "$80–140", ee: "$50–80", india: "$25–40" },
        { role: "Backend (Python/Node)", tezcode: "$32–48", us: "$90–150", ee: "$55–90", india: "$25–40" },
        { role: "Full-stack senior", tezcode: "$35–50", us: "$100–160", ee: "$60–95", india: "$28–42" },
        { role: "AI Engineer (Claude/RAG)", tezcode: "$40–55", us: "$120–180", ee: "$70–110", india: "$35–55" },
      ],
    },
    highlights: {
      sectionTag: "Почему Ташкент",
      title: "Четыре причины выбора иностранными основателями",
      subtitle: "Мы не маркетплейс. 16 senior-инженеров in-house, лично проверенных CEO.",
      items: [
        {
          icon: "01",
          title: "16 senior in-house",
          desc: "Не фрилансеры. Full-time команда, обученная AI-инструментам (Claude, ChatGPT), pair-coded с Бекзодом Мирзаалиевым (CEO).",
        },
        {
          icon: "02",
          title: "Английский / русский",
          desc: "B2–C1 английский во всей команде. Ежедневные standup на английском. Все коммиты, PR, документация — английский.",
        },
        {
          icon: "03",
          title: "GMT+5 — 5ч EST",
          desc: "Реальное пересечение с восточным побережьем США (15:00–20:00 EST). Лучше Индии для sync-работы, сравнимо с Восточной Европой.",
        },
        {
          icon: "04",
          title: "IT Park — юридически стабильно",
          desc: "Tezcode — резидент IT Park (госпрограмма Узбекистана). USD инвойсы, 7 лет налоговых льгот, стандартный NDA + IP transfer.",
        },
      ],
    },
    roles: {
      sectionTag: "Доступные роли",
      title: "Наймите по роли — или соберите команду",
      subtitle:
        "Комбинируйте. Большинство контрактов начинается с 1 senior, расширяется до 2–4 за 30 дней.",
      items: [
        { title: "Senior Full-stack", stack: "React / Next.js · FastAPI / Node · Postgres · AWS", rate: "от $35/ч" },
        { title: "AI Engineer", stack: "Claude · OpenAI · RAG · fine-tuning · LangChain · vector DB", rate: "от $40/ч" },
        { title: "Frontend Specialist", stack: "Next.js · Tailwind · motion / Framer · TypeScript strict", rate: "от $30/ч" },
        { title: "Backend Engineer", stack: "Python · FastAPI · Postgres · Redis · PG-pubsub", rate: "от $32/ч" },
        { title: "Mobile", stack: "React Native · iOS / Android · Expo · native modules", rate: "от $35/ч" },
        { title: "DevOps", stack: "Docker · Kubernetes · Railway · AWS · GitHub Actions", rate: "от $38/ч" },
      ],
    },
    models: {
      sectionTag: "Модели сотрудничества",
      title: "Три способа сотрудничества",
      subtitle: "Платите только за выполненную работу. Без предоплат, без подписных взносов.",
      items: [
        {
          name: "Part-time",
          price: "$1,200",
          per: "/мес",
          tagline: "40–80 ч / мес",
          features: [
            "1 выделенный инженер",
            "Slack / Telegram канал",
            "Еженедельный демо + отчёт",
            "Отмена в любое время (7 дней)",
            "Для MVP / раннего этапа",
          ],
        },
        {
          name: "Dedicated",
          price: "$4,800",
          per: "/мес",
          tagline: "Full-time · 160 ч / мес",
          highlight: true,
          features: [
            "1 senior, встроен в команду",
            "Standup в вашем timezone",
            "Прямой Slack / Linear",
            "Sprint planning + ретроспективы",
            "2 недели trial, полный возврат",
            "CEO — точка эскалации",
          ],
        },
        {
          name: "Проектная",
          price: "Quote",
          per: "по звонку",
          tagline: "Фикс scope, фикс цена",
          features: [
            "Определённые milestone",
            "Команда 2–4 инженера",
            "Tech lead + PM включены",
            "Еженедельный демо, milestone-billing",
            "Для sprint / миграции",
          ],
        },
      ],
      cta: "Поговорить с CEO",
    },
    vetting: {
      sectionTag: "Отбор",
      title: "Как мы выбираем senior, который придёт к вам",
      subtitle: "Каждый инженер проходит одинаковые 4 шага. CEO лично подтверждает каждого.",
      items: [
        { num: "01", title: "Английский / русский", desc: "30-минутное устное собеседование. Ниже B2 отклоняем. Вашей команде не придётся повторяться." },
        { num: "02", title: "Технический тест", desc: "Алгоритмический тест (LeetCode medium) + system design. Бенчмарк против senior США." },
        { num: "03", title: "Pair coding с CEO", desc: "90-минутная live-сессия с Бекзодом. Рефакторинг реальной кодовой базы. Смотрим, как думает, не только код." },
        { num: "04", title: "2 недели trial", desc: "Встраивание в вашу команду на 2 недели. Если не подошёл — возврат 100% и замена за 5 рабочих дней." },
      ],
    },
    team: {
      sectionTag: "Профили",
      title: "Анонимизированные профили — реальная доступность",
      subtitle:
        "Имена раскрываются после intro-звонка + NDA. Эти трое доступны для новых контрактов в этом квартале.",
      profiles: [
        { role: "Senior Full-stack", years: "5 лет", stack: "React · Next.js · AI integrations · Postgres", rate: "$40/ч", badge: "Доступен" },
        { role: "AI Engineer", years: "4 года", stack: "Claude · RAG pipelines · vector DB · fine-tuning", rate: "$45/ч", badge: "Доступен" },
        { role: "Backend Senior", years: "6 лет", stack: "Python · FastAPI · Postgres · distributed systems", rate: "$38/ч", badge: "Доступен" },
      ],
      note: "К каждому профилю — 3 рекомендации, публичный GitHub, активность коммитов и 5-минутное self-intro видео.",
    },
    faq: {
      sectionTag: "FAQ",
      title: "Ответы до вопросов",
      subtitle: "Если чего-то не хватает — пишите Бекзоду в Telegram, отвечает в течение часа.",
      items: [
        { q: "Когда можно начать?", a: "1–2 недели. Неделя 1: intake + матчинг + интервью. Неделя 2: договор + onboarding (Slack, Linear, GitHub). Большинство клиентов видят разработчика на standup в 8-й день." },
        { q: "Что с timezone?", a: "Ташкент GMT+5. С восточным побережьем США пересекаемся 5 часов (15:00–20:00 EST), с западным — 4 часа. Полное пересечение с Европой и Британией." },
        { q: "Какой уровень английского?", a: "B2–C1 у всех 16 инженеров. Ежедневные standup, code review, async-документация — на английском. CEO Бекзод — C1." },
        { q: "Как с договорами и инвойсами?", a: "Tezcode — резидент IT Park. Стандартный USD-инвойс от зарегистрированной компании. Wire transfer или Stripe. Стандартный MSA + SOW или подпишем ваш." },
        { q: "Если разработчик не подошёл?", a: "2 недели trial с полным возвратом. После — замена за 5 рабочих дней бесплатно. У нас bench (резерв), а не маркетплейс." },
        { q: "Кому принадлежит код / IP?", a: "Вам, полностью. NDA подписывается до начала работы. Все IP передаются клиенту после оплаты. Личный IP transfer + NDA на уровне компании." },
      ],
    },
    finalCta: {
      sectionTag: "Старт",
      title: "30-минутный intro-звонок — бесплатно, без обязательств",
      subtitle:
        "Поговорите напрямую с Бекзодом (CEO). Принесите job description или просто идею. Уйдёте со шорт-листом 2–3 инженеров.",
      ctaPrimary: "Записаться (Telegram)",
      ctaSecondary: "Отправить описание задачи",
      trust: "Без предоплат · Без форм · CEO отвечает за 1 час",
    },
  },
  ar: {
    hero: {
      badge: "TezCode Teams · تعيين المطورين",
      headline: "وظف مطورين كبار من طشقند — من 30 دولاراً في الساعة",
      subhead:
        "بمهارات الذكاء الاصطناعي، إجادة الإنجليزية والروسية، تقاطع 5 ساعات مع توقيت EST، فريق داخلي مدقق من 16 مهندساً. بدون وكالات أو وسطاء.",
      ctaPrimary: "احجز مكالمة تعارف",
      ctaSecondary: "عرض ملفات الفريق",
      statDevs: "مطور داخلي",
      statRate: "$/ساعة من",
      statTimezone: "GMT+5",
      statClients: "عميل نشط",
    },
    rates: {
      sectionTag: "مقارنة الأسعار",
      title: "هندسة senior بنصف تكلفة الولايات المتحدة",
      subtitle:
        "نفس مستوى الإنجليزية. نفس جودة الكود. مهارات أقوى في AI من العروض الخارجية المعتادة.",
      colTezcode: "Tezcode (UZ)",
      colUs: "الولايات المتحدة",
      colEe: "أوروبا الشرقية",
      colIndia: "الهند",
      note: "الأسعار بالدولار للساعة. Tezcode مقيم في IT Park (مستقر قانونياً وضريبياً).",
      rows: [
        { role: "Frontend (React/Next.js)", tezcode: "$30–45", us: "$80–140", ee: "$50–80", india: "$25–40" },
        { role: "Backend (Python/Node)", tezcode: "$32–48", us: "$90–150", ee: "$55–90", india: "$25–40" },
        { role: "Full-stack senior", tezcode: "$35–50", us: "$100–160", ee: "$60–95", india: "$28–42" },
        { role: "AI Engineer (Claude/RAG)", tezcode: "$40–55", us: "$120–180", ee: "$70–110", india: "$35–55" },
      ],
    },
    highlights: {
      sectionTag: "لماذا طشقند",
      title: "أربعة أسباب يختارنا بها المؤسسون الأجانب",
      subtitle: "نحن لسنا سوقاً. 16 مهندساً داخلياً تم تدقيقهم من قبل المدير التنفيذي شخصياً.",
      items: [
        { icon: "01", title: "16 مطوراً داخلياً", desc: "ليسوا مستقلين. فريق full-time مدرَّب على أدوات AI، تم pair-code مع المدير التنفيذي." },
        { icon: "02", title: "إنجليزية / روسية", desc: "B2–C1 إنجليزية. اجتماعات يومية بالإنجليزية. جميع الكوميتات والمستندات بالإنجليزية." },
        { icon: "03", title: "GMT+5 — 5س مع EST", desc: "تقاطع حقيقي مع الساحل الشرقي للولايات المتحدة. أفضل من الهند للعمل المتزامن." },
        { icon: "04", title: "IT Park — مستقر قانونياً", desc: "Tezcode مقيم في IT Park (برنامج حكومي أوزبكي). فواتير USD، NDA قياسي + نقل IP." },
      ],
    },
    roles: {
      sectionTag: "الأدوار المتاحة",
      title: "وظف حسب الدور — أو ابنِ فرقة كاملة",
      subtitle: "اخلط وطابق. معظم المهام تبدأ بمهندس واحد senior وتصل إلى 2–4 خلال 30 يوماً.",
      items: [
        { title: "Senior Full-stack", stack: "React / Next.js · FastAPI / Node · Postgres · AWS", rate: "من $35/س" },
        { title: "AI Engineer", stack: "Claude · OpenAI · RAG · fine-tuning · LangChain · vector DB", rate: "من $40/س" },
        { title: "Frontend Specialist", stack: "Next.js · Tailwind · motion · TypeScript", rate: "من $30/س" },
        { title: "Backend Engineer", stack: "Python · FastAPI · Postgres · Redis", rate: "من $32/س" },
        { title: "Mobile", stack: "React Native · iOS / Android · Expo", rate: "من $35/س" },
        { title: "DevOps", stack: "Docker · Kubernetes · Railway · AWS · GitHub Actions", rate: "من $38/س" },
      ],
    },
    models: {
      sectionTag: "نماذج التعاون",
      title: "ثلاث طرق للتعاون",
      subtitle: "ادفع فقط مقابل العمل المنجز. بدون رسوم توقيع.",
      items: [
        {
          name: "Part-time",
          price: "$1,200",
          per: "/شهر",
          tagline: "40–80 س / شهر",
          features: ["مهندس مخصص واحد", "قناة Slack / Telegram", "عرض أسبوعي + تقرير", "إلغاء في أي وقت (7 أيام)", "للمراحل المبكرة / MVP"],
        },
        {
          name: "Dedicated",
          price: "$4,800",
          per: "/شهر",
          tagline: "Full-time · 160 س / شهر",
          highlight: true,
          features: ["senior مدمج بالكامل", "standup في توقيتك", "Slack / Linear مباشر", "تخطيط sprint + ريترو", "تجربة أسبوعين، استرداد كامل", "المدير التنفيذي نقطة التصعيد"],
        },
        {
          name: "حسب المشروع",
          price: "عرض سعر",
          per: "بمكالمة",
          tagline: "نطاق ثابت، سعر ثابت",
          features: ["محطات محددة", "فرقة 2–4 مهندسين", "Tech lead + PM مشمولان", "عروض أسبوعية، فوترة بالمحطة", "للـ sprint / الهجرة"],
        },
      ],
      cta: "تحدث مع المدير التنفيذي",
    },
    vetting: {
      sectionTag: "التدقيق",
      title: "كيف نختار senior الذي ينضم إليك",
      subtitle: "كل مهندس يمر بنفس 4 خطوات. المدير التنفيذي يوافق شخصياً.",
      items: [
        { num: "01", title: "مقابلة إنجليزية / روسية", desc: "30 دقيقة تقييم شفوي. أقل من B2 نرفض." },
        { num: "02", title: "تقييم تقني", desc: "اختبار خوارزمي + نقاش system design. معيار senior الولايات المتحدة." },
        { num: "03", title: "Pair coding مع المدير التنفيذي", desc: "90 دقيقة جلسة مباشرة مع بكزود. refactor قاعدة كود حقيقية." },
        { num: "04", title: "أسبوعان تجربة — استرداد كامل", desc: "اندماج لمدة أسبوعين. لو لم يناسب، استرداد 100% واستبدال خلال 5 أيام عمل." },
      ],
    },
    team: {
      sectionTag: "ملفات عينات",
      title: "ملفات مجهولة الهوية — توفر حقيقي",
      subtitle: "الأسماء تكشف بعد مكالمة تعارف + NDA. هؤلاء الثلاثة متاحون لهذا الربع.",
      profiles: [
        { role: "Senior Full-stack", years: "5 سنوات", stack: "React · Next.js · AI · Postgres", rate: "$40/س", badge: "متاح" },
        { role: "AI Engineer", years: "4 سنوات", stack: "Claude · RAG · vector DB · fine-tuning", rate: "$45/س", badge: "متاح" },
        { role: "Backend Senior", years: "6 سنوات", stack: "Python · FastAPI · Postgres · distributed", rate: "$38/س", badge: "متاح" },
      ],
      note: "كل ملف يشمل 3 مراجع، GitHub عام، نشاط كوميت حديث وفيديو تعريفي 5 دقائق.",
    },
    faq: {
      sectionTag: "أسئلة شائعة",
      title: "إجابات قبل أن تسأل",
      subtitle: "لو نقص شيء — راسل بكزود في Telegram، يرد خلال ساعة.",
      items: [
        { q: "متى نبدأ؟", a: "1–2 أسبوع. الأسبوع 1: مقابلة وتطابق. الأسبوع 2: عقد و onboarding." },
        { q: "ماذا عن المنطقة الزمنية؟", a: "طشقند GMT+5. تقاطع 5 ساعات مع EST، 4 مع PST، كامل مع أوروبا." },
        { q: "مستوى الإنجليزية؟", a: "B2–C1 في الفريق كله. اجتماعات يومية بالإنجليزية." },
        { q: "كيف العقود والفواتير؟", a: "مقيم IT Park. فاتورة USD قياسية. MSA + SOW قياسي." },
        { q: "لو لم يناسب المطور؟", a: "تجربة أسبوعين باسترداد كامل. استبدال خلال 5 أيام عمل." },
        { q: "ملكية الكود / IP؟", a: "لكم بالكامل. NDA قبل أي كود. IP ينتقل عند الدفع." },
      ],
    },
    finalCta: {
      sectionTag: "ابدأ",
      title: "احجز مكالمة 30 دقيقة — مجانية بلا التزام",
      subtitle: "تحدث مباشرة مع بكزود (CEO). أحضر وصف الوظيفة أو الفكرة، اخرج بقائمة 2–3 مهندسين.",
      ctaPrimary: "احجز عبر Telegram",
      ctaSecondary: "أرسل وصف الوظيفة",
      trust: "بدون رسوم · بدون نموذج · المدير التنفيذي يرد خلال ساعة",
    },
  },
  uk: {
    hero: {
      badge: "TezCode Teams · Оренда розробників",
      headline: "Найміть senior-розробників з Ташкента — від $30/год",
      subhead:
        "AI-навички, вільні англійська / російська, перетин 5 годин з EST, перевірена in-house команда з 16 інженерів. Без агенцій, без посередників.",
      ctaPrimary: "Записатися на дзвінок",
      ctaSecondary: "Профілі команди",
      statDevs: "in-house розробників",
      statRate: "$/год від",
      statTimezone: "GMT+5",
      statClients: "активних клієнтів",
    },
    rates: {
      sectionTag: "Порівняння ставок",
      title: "Senior-інженерія. Половина вартості США.",
      subtitle: "Та сама англійська. Та сама якість коду. Сильніші AI-навички, ніж типовий offshore.",
      colTezcode: "Tezcode (UZ)",
      colUs: "США",
      colEe: "Східна Європа",
      colIndia: "Індія",
      note: "Ставки на годину, USD. Tezcode — резидент IT Park (юридично і податково стабільно).",
      rows: [
        { role: "Frontend (React/Next.js)", tezcode: "$30–45", us: "$80–140", ee: "$50–80", india: "$25–40" },
        { role: "Backend (Python/Node)", tezcode: "$32–48", us: "$90–150", ee: "$55–90", india: "$25–40" },
        { role: "Full-stack senior", tezcode: "$35–50", us: "$100–160", ee: "$60–95", india: "$28–42" },
        { role: "AI Engineer (Claude/RAG)", tezcode: "$40–55", us: "$120–180", ee: "$70–110", india: "$35–55" },
      ],
    },
    highlights: {
      sectionTag: "Чому Ташкент",
      title: "Чотири причини вибору іноземними засновниками",
      subtitle: "Ми не маркетплейс. 16 senior-інженерів in-house, особисто перевірених CEO.",
      items: [
        { icon: "01", title: "16 senior in-house", desc: "Не фрилансери. Full-time команда, навчена AI-інструментам, pair-coded з Бекзодом (CEO)." },
        { icon: "02", title: "Англійська / російська", desc: "B2–C1 у всій команді. Щоденні standup англійською. Усі commit, PR, документація англійською." },
        { icon: "03", title: "GMT+5 — 5г EST", desc: "Реальне перетинання зі східним узбережжям США. Краще за Індію для sync-роботи." },
        { icon: "04", title: "IT Park — юридично стабільно", desc: "Tezcode — резидент IT Park. USD інвойси, 7 років податкових пільг, стандартний NDA + IP transfer." },
      ],
    },
    roles: {
      sectionTag: "Доступні ролі",
      title: "Найміть за роллю — або зберіть команду",
      subtitle: "Комбінуйте. Більшість контрактів починається з 1 senior, розширюється до 2–4 за 30 днів.",
      items: [
        { title: "Senior Full-stack", stack: "React / Next.js · FastAPI / Node · Postgres · AWS", rate: "від $35/г" },
        { title: "AI Engineer", stack: "Claude · OpenAI · RAG · fine-tuning · LangChain · vector DB", rate: "від $40/г" },
        { title: "Frontend Specialist", stack: "Next.js · Tailwind · motion · TypeScript", rate: "від $30/г" },
        { title: "Backend Engineer", stack: "Python · FastAPI · Postgres · Redis", rate: "від $32/г" },
        { title: "Mobile", stack: "React Native · iOS / Android · Expo", rate: "від $35/г" },
        { title: "DevOps", stack: "Docker · Kubernetes · Railway · AWS · GitHub Actions", rate: "від $38/г" },
      ],
    },
    models: {
      sectionTag: "Моделі співпраці",
      title: "Три способи співпраці",
      subtitle: "Сплачуйте лише за виконану роботу. Без передплат.",
      items: [
        {
          name: "Part-time",
          price: "$1,200",
          per: "/міс",
          tagline: "40–80 г / міс",
          features: ["1 виділений інженер", "Slack / Telegram канал", "Щотижневий демо + звіт", "Скасування у будь-який час (7 днів)", "Для MVP / раннього етапу"],
        },
        {
          name: "Dedicated",
          price: "$4,800",
          per: "/міс",
          tagline: "Full-time · 160 г / міс",
          highlight: true,
          features: ["1 senior, повністю вбудований", "Standup у вашому timezone", "Прямий Slack / Linear", "Sprint planning + ретро", "2 тижні trial, повне повернення", "CEO — точка ескалації"],
        },
        {
          name: "Проектна",
          price: "Quote",
          per: "за дзвінком",
          tagline: "Фікс scope, фікс ціна",
          features: ["Визначені milestone", "Команда 2–4 інженери", "Tech lead + PM включені", "Щотижневі демо, milestone-billing", "Для sprint / міграції"],
        },
      ],
      cta: "Поговорити з CEO",
    },
    vetting: {
      sectionTag: "Відбір",
      title: "Як ми обираємо senior, який приєднається до вас",
      subtitle: "Кожен інженер проходить однакові 4 кроки. CEO підтверджує особисто.",
      items: [
        { num: "01", title: "Англійська / російська", desc: "30-хвилинна усна співбесіда. Нижче B2 відхиляємо." },
        { num: "02", title: "Технічний тест", desc: "Алгоритмічний тест + system design. Бенчмарк проти senior США." },
        { num: "03", title: "Pair coding з CEO", desc: "90-хвилинна жива сесія з Бекзодом. Рефакторинг реальної кодової бази." },
        { num: "04", title: "2 тижні trial", desc: "Вбудовування у вашу команду на 2 тижні. Не підійшов — повернення 100% та заміна за 5 робочих днів." },
      ],
    },
    team: {
      sectionTag: "Профілі",
      title: "Анонімізовані профілі — реальна доступність",
      subtitle: "Імена розкриваються після intro-дзвінка + NDA. Ці троє доступні цього кварталу.",
      profiles: [
        { role: "Senior Full-stack", years: "5 років", stack: "React · Next.js · AI integrations · Postgres", rate: "$40/г", badge: "Доступний" },
        { role: "AI Engineer", years: "4 роки", stack: "Claude · RAG pipelines · vector DB · fine-tuning", rate: "$45/г", badge: "Доступний" },
        { role: "Backend Senior", years: "6 років", stack: "Python · FastAPI · Postgres · distributed systems", rate: "$38/г", badge: "Доступний" },
      ],
      note: "Кожен профіль — 3 рекомендації, публічний GitHub, активність коммітів і 5-хвилинне self-intro відео.",
    },
    faq: {
      sectionTag: "FAQ",
      title: "Відповіді до питань",
      subtitle: "Якщо чогось бракує — пишіть Бекзоду в Telegram, відповідає протягом години.",
      items: [
        { q: "Коли можемо почати?", a: "1–2 тижні. Тиждень 1: intake + матчинг + інтерв'ю. Тиждень 2: договір + onboarding." },
        { q: "Що з timezone?", a: "Ташкент GMT+5. Зі східним узбережжям США перетин 5 годин, із західним — 4. Повний перетин з Європою." },
        { q: "Який рівень англійської?", a: "B2–C1 у всіх 16 інженерів. Щоденні standup, code review, документація — англійською." },
        { q: "Як з контрактами та інвойсами?", a: "Tezcode — резидент IT Park. Стандартний USD-інвойс. Wire transfer або Stripe." },
        { q: "Якщо розробник не підійшов?", a: "2 тижні trial з повним поверненням. Заміна за 5 робочих днів безкоштовно." },
        { q: "Кому належить код / IP?", a: "Вам, повністю. NDA до початку роботи. Усі IP передаються після оплати." },
      ],
    },
    finalCta: {
      sectionTag: "Старт",
      title: "30-хвилинний intro-дзвінок — безкоштовно, без зобов'язань",
      subtitle:
        "Поговоріть напряму з Бекзодом (CEO). Принесіть job description або ідею, заберіть шорт-лист 2–3 інженерів.",
      ctaPrimary: "Записатися (Telegram)",
      ctaSecondary: "Надіслати опис задачі",
      trust: "Без передплат · Без форм · CEO відповідає за 1 годину",
    },
  },
};

// ─────────────────────────────────────────────────────────
// Small animation tokens
// ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const TELEGRAM_URL = "https://t.me/webdevelopertk";

// ─────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────
export function HireDevelopersClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.en;

  return (
    <main className="relative bg-[var(--tc-ink)] overflow-hidden">
      <HeroSection t={t} />
      <RatesSection t={t} />
      <HighlightsSection t={t} />
      <RolesSection t={t} />
      <ModelsSection t={t} />
      <VettingSection t={t} />
      <TeamSection t={t} />
      <FAQSection t={t} />
      <FinalCTASection t={t} />
    </main>
  );
}

// ─────────────────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────────────────
function HeroSection({ t }: { t: Copy }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, 100]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden tc-perspective"
    >
      {/* Background mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,64,255,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(212,160,23,0.10), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/60 backdrop-blur-md text-xs font-medium text-[var(--tc-text-secondary)] mb-8"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)]"
          />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.1)}
          className="text-[clamp(2.5rem,7vw,6rem)] font-800 leading-[0.98] tracking-[-0.03em] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="tc-text-gradient-blue block">{t.hero.headline}</span>
        </motion.h1>

        <motion.p
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.2)}
          className="text-base md:text-xl text-[var(--tc-text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subhead}
        </motion.p>

        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={12}>
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-semibold text-sm overflow-hidden tc-glow-blue"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.hero.ctaPrimary}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>
          </Magnetic>

          <Magnetic strength={10}>
            <motion.a
              href="#team"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/40 backdrop-blur-md text-[var(--tc-text-primary)] font-semibold text-sm hover:bg-[var(--tc-surface-2)] transition-colors items-center justify-center gap-2"
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </Magnetic>
        </motion.div>

        <HeroStats t={t} />
      </motion.div>
    </section>
  );
}

function HeroStats({ t }: { t: Copy }) {
  const stats: { value: number; suffix: string; label: string }[] = [
    { value: 16, suffix: "", label: t.hero.statDevs },
    { value: 30, suffix: "+", label: t.hero.statRate },
    { value: 5, suffix: "h", label: t.hero.statTimezone },
    { value: 12, suffix: "+", label: t.hero.statClients },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
      }}
      className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-14 max-w-4xl mx-auto"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          className="flex flex-col items-center gap-1"
        >
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
            duration={2.0}
            className="text-3xl md:text-5xl font-800 tc-text-gradient-gold tabular-nums"
          />
          <span
            className="text-[10px] md:text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mt-1 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// 2. Rate Comparison
// ─────────────────────────────────────────────────────────
function RatesSection({ t }: { t: Copy }) {
  return (
    <section id="rates" className="relative py-24 px-6 bg-[var(--tc-surface-1)]/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.rates.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.rates.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.rates.subtitle}
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--tc-border)]">
                  <th className="text-left p-4 md:p-5 text-[var(--tc-text-muted)] font-500 uppercase tracking-widest text-xs">
                    {/* role column header — empty intentionally */}
                    &nbsp;
                  </th>
                  <th className="text-center p-4 md:p-5 text-[var(--tc-gold)] font-700 uppercase tracking-widest text-xs">
                    {t.rates.colTezcode}
                  </th>
                  <th className="text-center p-4 md:p-5 text-[var(--tc-text-muted)] font-500 uppercase tracking-widest text-xs">
                    {t.rates.colUs}
                  </th>
                  <th className="text-center p-4 md:p-5 text-[var(--tc-text-muted)] font-500 uppercase tracking-widest text-xs">
                    {t.rates.colEe}
                  </th>
                  <th className="text-center p-4 md:p-5 text-[var(--tc-text-muted)] font-500 uppercase tracking-widest text-xs">
                    {t.rates.colIndia}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.rates.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[var(--tc-border)] last:border-b-0 hover:bg-[var(--tc-surface-3)]/40 transition-colors"
                  >
                    <td className="p-4 md:p-5 font-600 text-white">{row.role}</td>
                    <td className="p-4 md:p-5 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-[var(--tc-gold)]/15 border border-[var(--tc-gold)]/30 text-[var(--tc-gold)] font-700">
                        {row.tezcode}
                      </span>
                    </td>
                    <td className="p-4 md:p-5 text-center text-[var(--tc-text-secondary)] font-500">
                      {row.us}
                    </td>
                    <td className="p-4 md:p-5 text-center text-[var(--tc-text-secondary)] font-500">
                      {row.ee}
                    </td>
                    <td className="p-4 md:p-5 text-center text-[var(--tc-text-secondary)] font-500">
                      {row.india}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[var(--tc-text-muted)] text-center max-w-3xl mx-auto">
            {t.rates.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 3. Highlights — Why Tashkent
// ─────────────────────────────────────────────────────────
function HighlightsSection({ t }: { t: Copy }) {
  return (
    <section className="relative py-24 px-6 bg-[var(--tc-ink)]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.highlights.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.highlights.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.highlights.subtitle}
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.1}>
          {t.highlights.items.map((item, i) => (
            <RevealItem key={i}>
              <Tilt3D intensity={6} className="h-full">
                <div className="h-full p-7 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)] hover:border-[var(--tc-border-bright)] transition-colors">
                  <div
                    className="text-4xl font-800 tc-text-gradient-gold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-700 text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 4. Roles
// ─────────────────────────────────────────────────────────
function RolesSection({ t }: { t: Copy }) {
  return (
    <section className="relative py-24 px-6 bg-[var(--tc-surface-1)]/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.roles.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.roles.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.roles.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.07}
        >
          {t.roles.items.map((r, i) => (
            <RevealItem key={i}>
              <Tilt3D intensity={5} className="h-full">
                <div className="h-full p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-blue)]/60 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="text-lg font-700 text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {r.title}
                    </h3>
                    <span className="shrink-0 inline-block px-2.5 py-1 rounded-full bg-[var(--tc-blue)]/15 border border-[var(--tc-blue)]/30 text-[var(--tc-blue-text)] text-[11px] font-700">
                      {r.rate}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                    {r.stack}
                  </p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 5. Engagement Models
// ─────────────────────────────────────────────────────────
function ModelsSection({ t }: { t: Copy }) {
  return (
    <section className="relative py-24 px-6 bg-[var(--tc-ink)]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.models.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.models.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.models.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          stagger={0.1}
        >
          {t.models.items.map((m) => (
            <RevealItem key={m.name}>
              <motion.div
                whileHover={{ y: -6 }}
                className={[
                  "relative p-8 rounded-[var(--tc-radius-xl)] h-full flex flex-col transition-colors",
                  m.highlight
                    ? "border-2 border-[var(--tc-gold)] bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)] tc-glow-gold"
                    : "border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)]",
                ].join(" ")}
              >
                {m.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--tc-gold)] text-[var(--tc-ink)] text-[10px] font-700 uppercase tracking-[0.15em]">
                    Most popular
                  </div>
                )}
                <h3
                  className="text-2xl font-700 text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.name}
                </h3>
                <p className="text-sm text-[var(--tc-text-muted)] mb-6">{m.tagline}</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-800 ${
                      m.highlight ? "tc-text-gradient-gold" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {m.price}
                  </span>
                  <span className="text-sm text-[var(--tc-text-muted)]">{m.per}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {m.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          m.highlight ? "text-[var(--tc-gold)]" : "text-[var(--tc-blue-text)]"
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[var(--tc-text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "block w-full text-center px-5 py-3 rounded-[var(--tc-radius-md)] font-600 text-sm transition-colors",
                    m.highlight
                      ? "bg-[var(--tc-gold)] text-[var(--tc-ink)] hover:bg-[var(--tc-gold-light)]"
                      : "border border-[var(--tc-border-bright)] text-white hover:bg-[var(--tc-surface-3)]",
                  ].join(" ")}
                >
                  {t.models.cta}
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 6. Vetting Process
// ─────────────────────────────────────────────────────────
function VettingSection({ t }: { t: Copy }) {
  return (
    <section className="relative py-24 px-6 bg-[var(--tc-surface-1)]/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.vetting.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.vetting.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.vetting.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          stagger={0.08}
        >
          {t.vetting.items.map((s, i) => (
            <RevealItem key={i}>
              <div className="relative h-full p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-gold)]/50 transition-colors">
                <div
                  className="text-3xl font-800 tc-text-gradient-blue mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.num}
                </div>
                <h3
                  className="text-base font-700 text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 7. Team Profiles
// ─────────────────────────────────────────────────────────
function TeamSection({ t }: { t: Copy }) {
  return (
    <section id="team" className="relative py-24 px-6 bg-[var(--tc-ink)]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.team.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.team.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6"
          stagger={0.1}
        >
          {t.team.profiles.map((p, i) => (
            <RevealItem key={i}>
              <Tilt3D intensity={7} className="h-full">
                <div className="h-full p-6 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)]">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-600 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {p.badge}
                    </span>
                    <span className="text-[11px] text-[var(--tc-text-muted)] uppercase tracking-widest">
                      {p.years}
                    </span>
                  </div>

                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--tc-blue)]/40 to-[var(--tc-gold)]/40 border border-[var(--tc-border-bright)] flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-white/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                    </svg>
                  </div>

                  <h3
                    className="text-lg font-700 text-white mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.role}
                  </h3>
                  <div className="text-sm text-[var(--tc-gold)] font-700 mb-3">
                    {p.rate}
                  </div>
                  <p className="text-xs text-[var(--tc-text-secondary)] leading-relaxed">
                    {p.stack}
                  </p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="text-center text-sm text-[var(--tc-text-muted)] max-w-2xl mx-auto">
            {t.team.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 8. FAQ
// ─────────────────────────────────────────────────────────
function FAQSection({ t }: { t: Copy }) {
  // FAQPage structured data — same items as the accordion below, so answer
  // engines (Google AI Overviews, ChatGPT, Perplexity) can cite these Q&A.
  const faqSchema = getFaqSchema(t.faq.items);

  return (
    <section className="relative py-24 px-6 bg-[var(--tc-surface-1)]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.faq.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.faq.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </Reveal>

        <RevealStagger className="space-y-3" stagger={0.06}>
          {t.faq.items.map((item, i) => (
            <RevealItem key={i}>
              <details className="group rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] open:border-[var(--tc-blue)]/40 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <h3
                    className="text-sm md:text-base font-600 text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.q}
                  </h3>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-[var(--tc-border-bright)] flex items-center justify-center text-[var(--tc-gold)] text-lg transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 9. Final CTA
// ─────────────────────────────────────────────────────────
function FinalCTASection({ t }: { t: Copy }) {
  return (
    <section id="contact" className="relative py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,64,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
            {t.finalCta.sectionTag}
          </div>
          <h2
            className="text-3xl md:text-5xl font-700 mb-5 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.finalCta.title}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-10">
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Magnetic strength={12}>
              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-semibold text-sm overflow-hidden tc-glow-blue items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                {t.finalCta.ctaPrimary}
              </motion.a>
            </Magnetic>
            <Magnetic strength={10}>
              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/40 backdrop-blur-md text-[var(--tc-text-primary)] font-semibold text-sm hover:bg-[var(--tc-surface-2)] transition-colors items-center justify-center gap-2"
              >
                {t.finalCta.ctaSecondary}
              </motion.a>
            </Magnetic>
          </div>

          <p className="text-xs text-[var(--tc-gold)] font-500">{t.finalCta.trust}</p>
        </Reveal>
      </div>
    </section>
  );
}
