// Central registry of published blog articles. Drives the blog index cards and
// the sitemap. Each article's full body lives in its own folder
// (src/app/[locale]/blog/<slug>/content.ts); this file only carries the
// lightweight listing metadata so the index and sitemap stay cheap.

import type { ArticleLang, ArticleMeta } from "@/components/blog/types";

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "suniy-intellekt-xizmatlari",
    datePublished: "2026-08-26",
    category: "Sun'iy intellekt / Qo'llanma",
    relatedService: { href: "/ai-avtomatizatsiya", label: "AI avtomatizatsiya" },
    list: {
      uz: {
        title:
          "Sun'iy intellekt xizmatlari O'zbekistonda: turlari, narxi va qanday tanlash (2026)",
        excerpt:
          "Sun'iy intellekt (AI) nima, biznes uchun qanday xizmatlar bor — chatbot, AI agent, avtomatizatsiya, video analitika, ovozli assistent — narxlari qancha ($279 dan) va provayderni qanday tanlash.",
      },
      ru: {
        title:
          "Услуги искусственного интеллекта в Узбекистане: виды, цены и как выбрать (2026)",
        excerpt:
          "Что такое искусственный интеллект (AI), какие услуги есть для бизнеса — чат-бот, AI-агент, автоматизация, видеоаналитика, голосовые ассистенты — сколько они стоят (от $279) и как выбрать подрядчика.",
      },
      en: {
        title:
          "Artificial intelligence services in Uzbekistan: types, prices and how to choose (2026)",
        excerpt:
          "What artificial intelligence (AI) is, which services exist for business — chatbots, AI agents, automation, video analytics, voice assistants — what they cost (from $279) and how to choose a provider.",
      },
    },
  },
  {
    slug: "kamerani-ai-bilan-aqlli-qilish",
    datePublished: "2026-08-15",
    category: "AI video analitika / Qo'llanma",
    relatedService: { href: "/ai-video-analitika", label: "AI video analitika" },
    list: {
      uz: {
        title: "Kamerangizni AI bilan aqlli qilish: odam sanash, davomat va xavfsizlik (2026)",
        excerpt:
          "Mavjud IP kameralarni AI bilan aqlli qilish: odam sanash (footfall), yuz tanish davomat, ish xavfsizligi, ANPR. Yangi kamera shart emas, $990 dan.",
      },
      ru: {
        title: "Сделайте камеры умными с AI: подсчёт людей, посещаемость и безопасность (2026)",
        excerpt:
          "Сделать существующие IP-камеры умными с AI: подсчёт людей (footfall), посещаемость по лицу, охрана труда, ANPR. Новые камеры не нужны, от $990.",
      },
      en: {
        title: "Make your cameras smart with AI: people counting, attendance and safety (2026)",
        excerpt:
          "Make existing IP cameras smart with AI: people counting (footfall), face attendance, workplace safety, ANPR. No new cameras needed, from $990.",
      },
    },
  },
  {
    slug: "ai-ozbek-tilida",
    datePublished: "2026-08-15",
    category: "AI / O'zbek tili",
    relatedService: { href: "/ai-chatbot", label: "AI chatbot" },
    list: {
      uz: {
        title: "AI o'zbek tilida ishlaydimi? Chatbot va agentlar uchun to'liq javob (2026)",
        excerpt:
          "AI o'zbek tilida (lotin/kirill, aralash uz-ru) ishlaydi, lekin sifat sozlashga bog'liq. Nega tayyor botlar o'zbekchada qiynaladi va yaxshi o'zbek tilli chatbot qanday quriladi.",
      },
      ru: {
        title: "Работает ли AI на узбекском? Полный ответ для чат-ботов и агентов (2026)",
        excerpt:
          "AI на узбекском (латиница/кириллица, смешанный uz-ru) работает, но качество в настройке. Почему готовые боты плохо справляются и как строится хороший узбекоязычный бот.",
      },
      en: {
        title: "Does AI work in Uzbek? A full answer for chatbots and agents (2026)",
        excerpt:
          "AI works in Uzbek (Latin/Cyrillic, mixed uz-ru), but quality is in the tuning. Why off-the-shelf bots struggle and how a good Uzbek-language bot is built.",
      },
    },
  },
  {
    slug: "sotuvni-avtomatlashtirish",
    datePublished: "2026-08-15",
    category: "Sotuv / Avtomatizatsiya",
    relatedService: { href: "/crm-integratsiya", label: "CRM integratsiya" },
    list: {
      uz: {
        title: "Sotuvni avtomatlashtirish: Telegram, Instagram va CRM (2026)",
        excerpt:
          "Barcha kanal → bitta CRM, AI chatbot 24/7 javob va lid saralash, buyurtma avtomatik 1C/CRM'ga. Bironta lid yo'qolmaydi — sotuvni avtomatlashtirish qo'llanmasi.",
      },
      ru: {
        title: "Автоматизация продаж: Telegram, Instagram и CRM (2026)",
        excerpt:
          "Все каналы → одна CRM, AI-чат-бот отвечает 24/7 и квалифицирует лиды, заказ автоматически в 1C/CRM. Ни один лид не теряется — руководство по автоматизации продаж.",
      },
      en: {
        title: "Sales automation: Telegram, Instagram and CRM (2026)",
        excerpt:
          "All channels → one CRM, an AI chatbot answers 24/7 and qualifies leads, orders written to 1C/CRM automatically. No lead lost — a sales-automation guide.",
      },
    },
  },
  {
    slug: "biznes-uchun-telegram-bot",
    datePublished: "2026-08-15",
    category: "Telegram bot / Qo'llanma",
    relatedService: { href: "/telegram-bot-biznes", label: "Telegram bot" },
    list: {
      uz: {
        title: "Biznes uchun Telegram bot: nima, narxi va qanday yaratiladi (2026)",
        excerpt:
          "Buyurtma, Click/Payme to'lov, 24/7 javob va CRM integratsiya — Telegram botда. Narx $279 dan, bot turlari va qanday yaratiladi — amaliy qo'llanma.",
      },
      ru: {
        title: "Telegram-бот для бизнеса: что это, цена и как сделать (2026)",
        excerpt:
          "Заказы, оплата Click/Payme, ответы 24/7 и интеграция CRM — в Telegram-боте. Цена от $279, виды ботов и как сделать — практическое руководство.",
      },
      en: {
        title: "A Telegram bot for business: what it is, price and how to build it (2026)",
        excerpt:
          "Orders, Click/Payme payment, 24/7 answers and CRM integration — in a Telegram bot. From $279, bot types and how it's built — a practical guide.",
      },
    },
  },
  {
    slug: "ai-chatbot-vs-jonli-operator",
    datePublished: "2026-08-15",
    category: "AI chatbot / Taqqoslash",
    relatedService: { href: "/ai-chatbot", label: "AI chatbot" },
    list: {
      uz: {
        title: "AI chatbot vs jonli operator: qaysi biri, qachon? (2026)",
        excerpt:
          "AI chatbot soniyalarda va arzon, jonli operator nozik holatlarda kuchli. Narx, tezlik va sifat taqqoslash — va nega gibrid (AI + operator) model eng samarali.",
      },
      ru: {
        title: "AI чат-бот или живой оператор: что и когда? (2026)",
        excerpt:
          "AI чат-бот за секунды и дёшево, живой оператор силён в деликатных ситуациях. Сравнение по цене, скорости и качеству — и почему гибрид эффективнее.",
      },
      en: {
        title: "AI chatbot vs a live agent: which, and when? (2026)",
        excerpt:
          "An AI chatbot is fast and cheap; a live agent is strong in delicate cases. A price/speed/quality comparison — and why a hybrid model wins.",
      },
    },
  },
  {
    slug: "1c-crm-ai-integratsiya",
    datePublished: "2026-08-14",
    category: "CRM / Integratsiya",
    relatedService: { href: "/crm-integratsiya", label: "CRM integratsiya" },
    list: {
      uz: {
        title: "1C ni CRM va AI bilan bog'lash: to'liq qo'llanma (2026)",
        excerpt:
          "1C ni amoCRM, Bitrix24 va AI bilan bog'lash: buyurtma, qoldiq va hisob-faktura sinxronizatsiyasi, AI 1C'dan real narx va mavjudlikni o'qishi. Narx $700 dan.",
      },
      ru: {
        title: "Интеграция 1С с CRM и AI: полное руководство (2026)",
        excerpt:
          "Связка 1С с amoCRM, Bitrix24 и AI: синхронизация заказов, остатков и счетов, AI читает из 1С реальную цену и наличие. Цена от $700.",
      },
      en: {
        title: "Integrating 1C with CRM and AI: the complete guide (2026)",
        excerpt:
          "Connecting 1C with amoCRM, Bitrix24 and AI: order, stock and invoice sync, AI reading real price and availability from 1C. Price from $700.",
      },
    },
  },
  {
    slug: "ai-yechimlar-narxi-2026",
    datePublished: "2026-08-14",
    category: "Narxlar / AI",
    relatedService: { href: "/tariflar", label: "Tariflar" },
    list: {
      uz: {
        title:
          "AI yechimlar narxi 2026: qaysi xizmat qancha turadi? (Toshkent, O'zbekiston)",
        excerpt:
          "AI chatbot $339 dan, AI agent $400 dan, CRM integratsiya $700 dan, AI video analitika $990 dan — barcha AI yechimlarning aniq 2026 narxlari, narxga nima ta'sir qiladi va to'lov tartibi.",
      },
      ru: {
        title:
          "Цены на AI-решения 2026: сколько стоит каждая услуга? (Ташкент, Узбекистан)",
        excerpt:
          "AI-чат-бот от $339, AI-агент от $400, интеграция CRM от $700, AI-видеоаналитика от $990 — точные цены на все AI-решения на 2026, что влияет на цену и порядок оплаты.",
      },
      en: {
        title:
          "AI solution prices 2026: how much does each service cost? (Tashkent, Uzbekistan)",
        excerpt:
          "AI chatbot from $339, AI agent from $400, CRM integration from $700, AI video analytics from $990 — exact 2026 prices for all AI solutions, what drives the price and payment terms.",
      },
    },
  },
  {
    slug: "biznesni-ai-bilan-avtomatlashtirish",
    datePublished: "2026-07-18",
    category: "AI / Avtomatizatsiya",
    relatedService: { href: "/ai-avtomatizatsiya", label: "AI avtomatizatsiya" },
    list: {
      uz: {
        title:
          "Biznesni AI bilan avtomatlashtirish: Toshkent va O'zbekiston uchun to'liq qo'llanma (2026)",
        excerpt:
          "«Biznesimni AI bilan avtomatlashtirmoqchiman» deganlar uchun amaliy qo'llanma: nimadan boshlash, aniq narxlar (chatbot $339 dan, Telegram bot $279 dan), muddatlar va kompaniya tanlash mezonlari.",
      },
      ru: {
        title:
          "Автоматизация бизнеса с ИИ: полное руководство для Ташкента и Узбекистана (2026)",
        excerpt:
          "Практическое руководство для тех, кто хочет автоматизировать бизнес с ИИ: с чего начать, точные цены (чатбот от $339, Telegram-бот от $279), сроки и критерии выбора компании.",
      },
      en: {
        title:
          "Automating your business with AI: the complete guide for Tashkent and Uzbekistan (2026)",
        excerpt:
          "A practical guide for business owners who want AI automation: where to start, concrete prices (chatbot from $339, Telegram bot from $279), timelines and how to choose a company.",
      },
    },
  },
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

// Locale-aware SERP meta for an article page. The uz title/description stay the
// hand-tuned strings each page passes as `fallback`; ru/en fall back to the
// registry's localized listing copy so /ru/blog/* and /en/blog/* never ship an
// Uzbek title (Bing flags those as duplicate titles across locales).
export function localizeArticleMeta(
  slug: string,
  locale: string,
  fallback: { title: string; description: string },
): { title: string; description: string } {
  if (locale === "uz") return fallback;
  const listed = getArticle(slug)?.list[locale as ArticleLang];
  if (!listed) return fallback;
  return { title: `${listed.title} | Tezcode`, description: listed.excerpt };
}
