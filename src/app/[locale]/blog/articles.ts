// Central registry of published blog articles. Drives the blog index cards and
// the sitemap. Each article's full body lives in its own folder
// (src/app/[locale]/blog/<slug>/content.ts); this file only carries the
// lightweight listing metadata so the index and sitemap stay cheap.

import type { ArticleMeta } from "@/components/blog/types";

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "claude-fable-5",
    datePublished: "2026-07-02",
    category: "AI dunyosida / Yangilik",
    relatedService: { href: "/ai-agent", label: "AI agent yasash" },
    list: {
      uz: {
        title: "Claude Fable 5: Anthropic'ning eng kuchli modeli va bu biznes uchun nimani anglatadi",
        excerpt:
          "Anthropic Claude Fable 5'ni chiqardi, AQSh eksport nazorati tufayli vaqtincha to'xtatdi, so'ng yana global qaytardi. Bu O'zbekistondagi AI-avtomatlashtirish loyihalari uchun nimani anglatadi.",
      },
      ru: {
        title: "Claude Fable 5: самая мощная модель Anthropic и что это значит для бизнеса",
        excerpt:
          "Anthropic выпустила Claude Fable 5, временно приостановила доступ из-за экспортного контроля США, а затем снова открыла её глобально. Что это значит для AI-автоматизации в Узбекистане.",
      },
      en: {
        title: "Claude Fable 5: Anthropic's most capable model, and what it means for business",
        excerpt:
          "Anthropic launched Claude Fable 5, temporarily pulled it under US export controls, then relaunched it globally. What it means for AI automation projects in Uzbekistan.",
      },
    },
  },
  {
    slug: "it-park-schwarz-digits-uchrashuv",
    datePublished: "2026-07-02",
    category: "Hamkorlik / IT Park",
    relatedService: { href: "/it-xizmatlar", label: "IT xizmatlar" },
    list: {
      uz: {
        title: "IT Park va Schwarz Digits: O'zbekiston IT sektori uchun Yevropa imkoniyati",
        excerpt:
          "IT Park Uzbekistan'da Tezcode Schwarz Digits (Lidl va Kaufland egasi Schwarz Group'ning texnologik bo'linmasi) vakili bilan tanishdi. Bu nimani anglatadi va O'zbekiston dasturchilari uchun qanday imkoniyat ochadi.",
      },
      ru: {
        title: "IT Park и Schwarz Digits: европейская возможность для IT-сектора Узбекистана",
        excerpt:
          "На встрече в IT Park Uzbekistan Tezcode познакомился с представителем Schwarz Digits — технологического подразделения Schwarz Group, владеющей сетями Lidl и Kaufland. Что это значит и какую возможность открывает для узбекских разработчиков.",
      },
      en: {
        title: "IT Park and Schwarz Digits: a European opening for Uzbekistan's IT sector",
        excerpt:
          "At a meeting hosted by IT Park Uzbekistan, Tezcode met a representative of Schwarz Digits — the technology arm of Schwarz Group, which owns the Lidl and Kaufland retail chains. What it means for Uzbek developers.",
      },
    },
  },
  {
    slug: "ai-avtomatizatsiya-kompaniya-tanlash",
    datePublished: "2026-06-25",
    category: "AI / Avtomatizatsiya",
    relatedService: { href: "/ai-avtomatizatsiya", label: "AI avtomatizatsiya" },
    list: {
      uz: {
        title: "Toshkentda AI avtomatizatsiya kompaniyasini qanday tanlash (2026)",
        excerpt:
          "Biznesni AI bilan avtomatlashtirmoqchimisiz, lekin kimga ishonishni bilmayapsizmi? O'zbekistonda to'g'ri AI avtomatizatsiya kompaniyasini tanlash bo'yicha amaliy qo'llanma — mezonlar, narx, xatolar va savollar.",
      },
      ru: {
        title: "Как выбрать компанию по AI-автоматизации в Ташкенте (2026)",
        excerpt:
          "Хотите автоматизировать бизнес с помощью ИИ, но не знаете, кому доверять? Практическое руководство по выбору компании AI-автоматизации в Узбекистане — критерии, цена, ошибки и вопросы.",
      },
      en: {
        title: "How to choose an AI automation company in Tashkent (2026)",
        excerpt:
          "Want to automate your business with AI but not sure who to trust? A practical guide to choosing the right AI automation company in Uzbekistan — criteria, pricing, mistakes and questions to ask.",
      },
    },
  },
  {
    slug: "biznes-uchun-ai-agent-yaratish",
    datePublished: "2026-06-14",
    category: "AI Agent / 2026",
    relatedService: { href: "/ai-agent", label: "AI agent yasash" },
    list: {
      uz: {
        title: "Toshkentda biznes uchun AI agent yaratish: to'liq qo'llanma (2026)",
        excerpt:
          "AI agent nima, chatbotdan farqi, qaysi biznesga kerak, qanday ishlaydi, narxi nimaga bog'liq va uni 6 qadamda qanday yaratish — Toshkent va O'zbekiston bizneslari uchun amaliy qo'llanma.",
      },
      ru: {
        title: "Создание AI-агента для бизнеса в Ташкенте: полное руководство (2026)",
        excerpt:
          "Что такое AI-агент, чем отличается от чат-бота, какому бизнесу нужен, как работает, от чего зависит цена и как создать его за 6 шагов — практическое руководство для бизнеса в Узбекистане.",
      },
    },
  },
  {
    slug: "ai-chatbot-va-ai-agent-farqi",
    datePublished: "2026-06-17",
    category: "AI Agent / 2026",
    relatedService: { href: "/ai-chatbot", label: "AI chatbot" },
    list: {
      uz: {
        title: "AI chatbot va AI agent farqi nima? (2026)",
        excerpt:
          "Chatbot gaplashadi, agent ish bajaradi. Farqni misollar bilan tushuntiramiz, taqqoslash jadvali va qaysi biri sizning biznesingizga kerakligini aniqlashga yordam beramiz.",
      },
      ru: {
        title: "В чём разница между AI-чат-ботом и AI-агентом? (2026)",
        excerpt:
          "Чат-бот разговаривает, агент выполняет работу. Объясняем разницу на примерах, таблица сравнения и что именно нужно вашему бизнесу.",
      },
      en: {
        title: "AI chatbot vs AI agent: what is the difference? (2026)",
        excerpt:
          "A chatbot talks, an agent does the work. We explain the difference with examples, a comparison table, and which one your business needs.",
      },
    },
  },
  {
    slug: "online-birga-film-korish",
    datePublished: "2026-06-07",
    category: "Video / Watch Party",
    list: {
      uz: {
        title: "Do'stlar bilan online birga film ko'rish: Watch Party qanday ishlaydi",
        excerpt:
          "Masofadan turib do'stlar bilan bir vaqtda film va video ko'rish (Watch Party) qanday ishlaydi, nima kerak va qaysi manbalardan ko'rsa bo'ladi. WeWatch misolida.",
      },
      ru: {
        title: "Смотреть фильмы онлайн вместе с друзьями: как работает Watch Party",
        excerpt:
          "Как работает совместный просмотр фильмов и видео с друзьями (Watch Party), что нужно и какие источники поддерживаются. На примере WeWatch.",
      },
    },
  },
  {
    slug: "xodim-nazorati-tizimi",
    datePublished: "2026-06-07",
    category: "HR / Nazorat",
    relatedService: { href: "/xodim-nazorati", label: "Xodim nazorati (WorkControl)" },
    list: {
      uz: {
        title: "Xodimlar ish vaqti va vazifalarini nazorat qilish tizimi qanday tanlanadi",
        excerpt:
          "Xodimlar ish vaqti, vazifa va samaradorlikni nazorat qilish tizimini tanlash qo'llanmasi: vazifa boshqaruvi, davomat, hisobotlar va nazorat-ishonch muvozanati.",
      },
      ru: {
        title: "Как выбрать систему контроля рабочего времени и задач сотрудников",
        excerpt:
          "Руководство по выбору системы контроля рабочего времени, задач и продуктивности: управление задачами, посещаемость, отчёты и баланс контроля и доверия.",
      },
    },
  },
  {
    slug: "klinika-uchun-crm",
    datePublished: "2026-06-07",
    category: "CRM / Klinika",
    relatedService: { href: "/klinika-crm", label: "Klinika CRM (ClinicaGo)" },
    list: {
      uz: {
        title: "Klinika uchun CRM qanday tanlanadi",
        excerpt:
          "Klinika, tibbiyot markazi yoki stomatologiya uchun CRM tanlash qo'llanmasi: qabullar, bemor bazasi, moliyaviy hisobot, rollar va eng ko'p uchraydigan xatolar.",
      },
      ru: {
        title: "Как выбрать CRM для клиники",
        excerpt:
          "Руководство по выбору CRM для клиники, медцентра или стоматологии: приёмы, база пациентов, финансовый отчёт, роли и частые ошибки.",
      },
    },
  },
  {
    slug: "pos-tizimi-tanlash",
    datePublished: "2026-06-07",
    category: "POS / Savdo",
    relatedService: { href: "/pos-tizimi", label: "POS tizimi (RAOS)" },
    list: {
      uz: {
        title: "O'zbekistonda do'kon uchun POS tizimi qanday tanlanadi",
        excerpt:
          "Do'kon, market yoki kosmetika do'koni uchun POS tizimi tanlash bo'yicha amaliy qo'llanma: qanday imkoniyatlar shart, offline ishlash nega muhim va xatolardan qanday qochish.",
      },
      ru: {
        title: "Как выбрать POS-систему для магазина в Узбекистане",
        excerpt:
          "Практическое руководство по выбору POS-системы для магазина или маркета: какие функции обязательны, почему важна офлайн-работа и как избежать ошибок.",
      },
    },
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
