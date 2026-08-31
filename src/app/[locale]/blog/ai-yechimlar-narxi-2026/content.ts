import type { ArticleContent } from "@/components/blog/types";

// Pricing pillar: "AI yechimlar narxi 2026" — targets high-intent price queries
// ("chatbot narxi", "ai agent narxi", "crm integratsiya narxi", "сколько стоит
// чат-бот / ai решение"). Answer-first (TL;DR pricing summary + per-service
// table) so Google AI Overviews / ChatGPT / Perplexity can lift a clean quotable
// price — the same pattern that made /ai-video-analitika win the AI Overview.
// uz master, full ru + en. Real Tezcode prices only; no fabricated figures.
// Internally links every service page (serves the "all services rank" goal).

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "Narxlar / 2026",
      title: "AI yechimlar narxi 2026: qaysi xizmat qancha turadi? (Toshkent, O'zbekiston)",
      subtitle:
        "AI chatbot, AI agent, video analitika, CRM integratsiya va boshqa yechimlarning aniq \"dan boshlab\" narxlari, narxga nima ta'sir qilishi va to'lov tartibi — Tezcode'ning ochiq narx qo'llanmasi.",
      dateLabel: "2026-yil 14-avgust",
      readTime: "8 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "O'zbekistonda AI yechimlar narxi 2026-yilda odatda quyidagicha boshlanadi: AI chatbot — $339 dan, AI agent — $400 dan, Telegram bot — $279 dan, biznes avtomatlashtirish — $400 dan, CRM integratsiya (amoCRM, Bitrix24, 1C) — $700 dan, AI video analitika — $990 dan (bir martalik ulash), buyurtma dastur (custom) — $1000 dan. Obuna asosidagi mahsulotlar: klinika CRM $25/oy dan, xodim nazorati $35/oy dan, POS tizimi 249 000 so'm/oy dan. Aniq narx kanallar soni, integratsiyalar va murakkablikka bog'liq — to'liq summa bepul konsultatsiya va texnik topshiriq (TZ) dan keyin yozma beriladi. To'lov odatda: 30% oldindan, qolgani bosqichma-bosqich.",
    },
    sections: [
      {
        heading: "AI yechimlar narxi nimaga bog'liq?",
        paragraphs: [
          "AI loyihalarida bitta universal narx bo'lmaydi — chunki har biznesning ehtiyoji har xil. Narxni belgilaydigan asosiy omillar:",
        ],
        bullets: [
          "Kanallar soni: faqat Telegram'mi yoki Telegram + Instagram + WhatsApp + sayt — qancha ko'p bo'lsa, shuncha ish.",
          "Integratsiyalar: CRM, 1C, ombor, to'lov (Click/Payme), telefoniya — har ulanish qo'shimcha ish.",
          "AI murakkabligi: oddiy savol-javob (FAQ) arzonroq; bilim bazasi bo'yicha javob (RAG), lid saralash yoki ovozli AI qimmatroq.",
          "Hajm va mavjud tizim: noldan qurishmi yoki mavjud tizimni sozlashmi.",
        ],
      },
      {
        heading: "Xizmatlar bo'yicha narx (dan boshlab, 2026)",
        paragraphs: [
          "Quyida Tezcode xizmatlarining boshlang'ich narxlari. Bular \"dan boshlab\" — aniq summa loyihaning hajmiga qarab TZ'dan keyin belgilanadi.",
        ],
        bullets: [
          "AI chatbot (Telegram, Instagram, WhatsApp, sayt): $339 dan — tezcode.dev/ai-chatbot",
          "AI agent (o'zi ish bajaradigan, 24/7): $400 dan — tezcode.dev/ai-agent",
          "Telegram bot (buyurtma, to'lov, Mini App): $279 dan — tezcode.dev/telegram-bot-biznes",
          "Biznes avtomatlashtirish (jarayon, hisobot, ombor): $400 dan — tezcode.dev/biznes-avtomatlashtirish",
          "CRM integratsiya (amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor): $700 dan — tezcode.dev/crm-integratsiya",
          "AI video analitika (odam sanash, yuz tanish, ANPR): $990 dan, bir martalik ulash — tezcode.dev/ai-video-analitika",
          "Buyurtma dastur (custom, web/mobil/desktop): MVP $1000 dan — tezcode.dev/tezcode-custom",
          "Klinika CRM (ClinicaGo): $25/oy dan (1-oy bepul) — tezcode.dev/klinika-crm",
          "Xodim nazorati (WorkControl): $35/oy dan — tezcode.dev/xodim-nazorati",
          "POS tizimi (RAOS): 249 000 so'm/oy dan (30 kun bepul) — tezcode.dev/pos-tizimi",
        ],
      },
      {
        heading: "Nega narxlar shunday farq qiladi?",
        paragraphs: [
          "Ba'zi yechimlar bir martalik loyiha (masalan CRM integratsiya, video analitika ulash), ba'zilari esa obuna (SaaS mahsulotlar — klinika CRM, POS, xodim nazorati). Bir martalik loyihada siz bir marta to'laysiz va tizim sizniki bo'ladi; obunada oylik to'lov evaziga doimiy yangilanish va qo'llab-quvvatlash olasiz.",
          "Muhim: CRM litsenziyasi (amoCRM, Bitrix24 tariflari) integratsiya narxiga kirmaydi — uni mijoz to'g'ridan-to'g'ri provayderiga to'laydi. Tezcode faqat ulash va sozlash ishini bajaradi.",
        ],
      },
      {
        heading: "To'lov tartibi qanday?",
        paragraphs: [
          "Tezcode'da to'lov odatda bosqichma-bosqich: 30% oldindan (loyiha boshlanishida), qolgani esa oraliq natijalarni ko'rib, bosqichma-bosqich. Yashirin to'lovlar yo'q — hammasi shartnomada aniq yoziladi.",
          "Bu tartib sizni himoya qiladi: siz natijani ko'rib to'laysiz, biz esa loyihani oxirigacha yetkazishga majburmiz.",
        ],
      },
      {
        heading: "Arzon narx har doim yaxshimi?",
        paragraphs: [
          "Yo'q. Bozorda \"5 million so'mdan AI\" kabi juda arzon takliflar bor, lekin ko'pincha ular oddiy tugmali bot yoki tayyor shablon bo'lib chiqadi. Haqiqiy AI yechim (bilim bazasi, integratsiya, o'zbek tili sozlamasi) real ish talab qiladi.",
          "Taklif olayotganda aniq so'rang: yechim qaysi tizimlarga ulanadi, o'zbek tilida qanday ishlaydi, va loyihadan keyin qo'llab-quvvatlash bormi? Eng arzon emas — sizning ehtiyojingizga eng mos yechimni tanlang.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI chatbot narxi qancha (2026)?",
          a: "Tezcode'da AI chatbot $339 dan boshlanadi. Aniq narx kanallar soni (Telegram, Instagram, WhatsApp, sayt), integratsiyalar (CRM, 1C) va AI murakkabligiga bog'liq — to'liq summa bepul konsultatsiya va TZ'dan keyin yozma beriladi.",
        },
        {
          q: "AI agent narxi qancha?",
          a: "AI agent $400 dan boshlanadi. Agent chatbotdan qimmatroq, chunki u nafaqat javob beradi, balki real vazifa bajaradi: CRM/1C ga yozadi, buyurtma yaratadi, integratsiya qiladi. Narx ish hajmiga bog'liq.",
        },
        {
          q: "CRM integratsiya qancha turadi?",
          a: "CRM integratsiya (amoCRM, Bitrix24, HubSpot, 1C) $700 dan boshlanadi. Bu bir martalik ulash ishi — voronka sozlash, kanallarni ulash, ma'lumot ko'chirish. CRM litsenziyasi alohida, uni mijoz to'laydi.",
        },
        {
          q: "AI video analitika narxi qancha?",
          a: "AI video analitika $990 dan boshlanadi — bu bir martalik ulash (odam sanash, yuz tanish orqali davomat, ANPR). Mavjud IP kameralaringiz bilan ishlaydi, keyin tizimni o'zingiz boshqarasiz.",
        },
        {
          q: "Nega ba'zi yechimlar oylik, ba'zilari bir martalik?",
          a: "Bir martalik yechimlar (CRM integratsiya, video analitika ulash, custom dastur) — bir marta to'lanadi va tizim sizniki bo'ladi. Obuna mahsulotlar (klinika CRM $25/oy, POS 249 000 so'm/oy, xodim nazorati $35/oy) — oylik to'lov evaziga doimiy yangilanish va qo'llab-quvvatlash olasiz.",
        },
        {
          q: "To'lov qanday amalga oshiriladi?",
          a: "Odatda 30% oldindan, qolgani bosqichma-bosqich — oraliq natijalarni ko'rib. Yashirin to'lovlar yo'q, hammasi shartnomada yoziladi. Aniq narx TZ'dan keyin yozma taklifda beriladi.",
        },
      ],
    },
    cta: {
      title: "Loyihangiz uchun aniq narx kerakmi?",
      subtitle:
        "Bepul 30 daqiqalik konsultatsiyada biznesingizni ko'rib, sizga qaysi yechim mosligini va aniq narxini aytamiz. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "Цены / 2026",
      title: "Цены на ИИ-решения 2026: сколько стоит каждая услуга? (Ташкент, Узбекистан)",
      subtitle:
        "Точные цены «от» на ИИ-чат-бот, ИИ-агента, видеоаналитику, интеграцию CRM и другие решения, что влияет на цену и порядок оплаты — открытое ценовое руководство Tezcode.",
      dateLabel: "14 августа 2026",
      readTime: "8 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "В Узбекистане цены на ИИ-решения в 2026 обычно начинаются так: ИИ-чат-бот — от $339, ИИ-агент — от $400, Telegram-бот — от $279, автоматизация бизнеса — от $400, интеграция CRM (amoCRM, Bitrix24, 1C) — от $700, ИИ-видеоаналитика — от $990 (разовое подключение), разработка ПО на заказ — от $1000. Подписочные продукты: CRM для клиники от $25/мес, контроль сотрудников от $35/мес, POS-система от 249 000 сум/мес. Точная цена зависит от числа каналов, интеграций и сложности — итоговая сумма даётся письменно после бесплатной консультации и ТЗ. Оплата обычно: 30% предоплата, остальное поэтапно.",
    },
    sections: [
      {
        heading: "От чего зависит цена ИИ-решения?",
        paragraphs: [
          "В ИИ-проектах нет единой универсальной цены — у каждого бизнеса свои потребности. Основные факторы, определяющие цену:",
        ],
        bullets: [
          "Число каналов: только Telegram или Telegram + Instagram + WhatsApp + сайт — чем больше, тем больше работы.",
          "Интеграции: CRM, 1C, склад, оплата (Click/Payme), телефония — каждое подключение — это дополнительная работа.",
          "Сложность ИИ: простой FAQ дешевле; ответ по базе знаний (RAG), квалификация лидов или голосовой ИИ дороже.",
          "Объём и текущая система: строить с нуля или настроить существующую систему.",
        ],
      },
      {
        heading: "Цены по услугам (от, 2026)",
        paragraphs: [
          "Ниже стартовые цены услуг Tezcode. Это цены «от» — точная сумма определяется по объёму проекта после ТЗ.",
        ],
        bullets: [
          "ИИ-чат-бот (Telegram, Instagram, WhatsApp, сайт): от $339 — tezcode.dev/ru/ai-chatbot",
          "ИИ-агент (сам выполняет задачи, 24/7): от $400 — tezcode.dev/ru/ai-agent",
          "Telegram-бот (заказы, оплата, Mini App): от $279 — tezcode.dev/ru/telegram-bot-biznes",
          "Автоматизация бизнеса (процессы, отчёты, склад): от $400 — tezcode.dev/ru/biznes-avtomatlashtirish",
          "Интеграция CRM (amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor): от $700 — tezcode.dev/ru/crm-integratsiya",
          "ИИ-видеоаналитика (подсчёт людей, распознавание лиц, ANPR): от $990, разовое подключение — tezcode.dev/ru/ai-video-analitika",
          "Разработка ПО на заказ (web/mobile/desktop): MVP от $1000 — tezcode.dev/ru/tezcode-custom",
          "CRM для клиники (ClinicaGo): от $25/мес (1-й месяц бесплатно) — tezcode.dev/ru/klinika-crm",
          "Контроль сотрудников (WorkControl): от $35/мес — tezcode.dev/ru/xodim-nazorati",
          "POS-система (RAOS): от 249 000 сум/мес (30 дней бесплатно) — tezcode.dev/ru/pos-tizimi",
        ],
      },
      {
        heading: "Почему цены так различаются?",
        paragraphs: [
          "Некоторые решения — разовый проект (например интеграция CRM, подключение видеоаналитики), другие — подписка (SaaS-продукты: CRM для клиники, POS, контроль сотрудников). В разовом проекте вы платите один раз и система ваша; при подписке за ежемесячную оплату получаете постоянные обновления и поддержку.",
          "Важно: лицензия CRM (тарифы amoCRM, Bitrix24) не входит в цену интеграции — её клиент оплачивает напрямую провайдеру. Tezcode делает только подключение и настройку.",
        ],
      },
      {
        heading: "Каков порядок оплаты?",
        paragraphs: [
          "В Tezcode оплата обычно поэтапная: 30% предоплата (в начале проекта), остальное — поэтапно, по мере промежуточных результатов. Скрытых платежей нет — всё чётко прописано в договоре.",
          "Такой порядок защищает вас: вы платите, видя результат, а мы обязаны довести проект до конца.",
        ],
      },
      {
        heading: "Дешевле всегда лучше?",
        paragraphs: [
          "Нет. На рынке есть очень дешёвые предложения вроде «ИИ от 5 миллионов сум», но часто это оказывается простой кнопочный бот или готовый шаблон. Настоящее ИИ-решение (база знаний, интеграции, настройка узбекского языка) требует реальной работы.",
          "Получая предложение, чётко спрашивайте: к каким системам подключается решение, как работает на узбекском, и есть ли поддержка после проекта? Выбирайте не самое дешёвое, а наиболее подходящее вашим задачам.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Сколько стоит ИИ-чат-бот (2026)?",
          a: "В Tezcode ИИ-чат-бот стоит от $339. Точная цена зависит от числа каналов (Telegram, Instagram, WhatsApp, сайт), интеграций (CRM, 1C) и сложности ИИ — итоговая сумма даётся письменно после бесплатной консультации и ТЗ.",
        },
        {
          q: "Сколько стоит ИИ-агент?",
          a: "ИИ-агент стоит от $400. Агент дороже чат-бота, потому что не просто отвечает, а выполняет реальные задачи: пишет в CRM/1C, создаёт заказы, интегрируется. Цена зависит от объёма работы.",
        },
        {
          q: "Сколько стоит интеграция CRM?",
          a: "Интеграция CRM (amoCRM, Bitrix24, HubSpot, 1C) стоит от $700. Это разовая работа по подключению — настройка воронки, подключение каналов, перенос данных. Лицензия CRM отдельно, её оплачивает клиент.",
        },
        {
          q: "Сколько стоит ИИ-видеоаналитика?",
          a: "ИИ-видеоаналитика стоит от $990 — это разовое подключение (подсчёт людей, распознавание лиц для учёта посещаемости, ANPR). Работает с вашими существующими IP-камерами, затем системой управляете сами.",
        },
        {
          q: "Почему одни решения помесячные, другие разовые?",
          a: "Разовые решения (интеграция CRM, подключение видеоаналитики, custom-разработка) оплачиваются один раз, и система ваша. Подписочные продукты (CRM для клиники $25/мес, POS от 249 000 сум/мес, контроль сотрудников $35/мес) — за ежемесячную оплату вы получаете постоянные обновления и поддержку.",
        },
        {
          q: "Как происходит оплата?",
          a: "Обычно 30% предоплата, остальное поэтапно — по мере промежуточных результатов. Скрытых платежей нет, всё прописано в договоре. Точная цена даётся письменно после ТЗ.",
        },
      ],
    },
    cta: {
      title: "Нужна точная цена для вашего проекта?",
      subtitle:
        "На бесплатной 30-минутной консультации мы посмотрим ваш бизнес и скажем, какое решение подходит и сколько оно стоит. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "Pricing / 2026",
      title: "AI solution prices 2026: how much does each service cost? (Tashkent, Uzbekistan)",
      subtitle:
        "Exact starting prices for AI chatbots, AI agents, video analytics, CRM integration and more, what drives the price and the payment terms — Tezcode's open pricing guide.",
      dateLabel: "August 14, 2026",
      readTime: "8 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "In Uzbekistan, AI solution prices in 2026 typically start like this: AI chatbot from $339, AI agent from $400, Telegram bot from $279, business automation from $400, CRM integration (amoCRM, Bitrix24, 1C) from $700, AI video analytics from $990 (one-time setup), custom software from $1000. Subscription products: clinic CRM from $25/mo, employee monitoring from $35/mo, POS system from 249,000 UZS/mo. The exact price depends on the number of channels, integrations and complexity — the final figure is quoted in writing after a free consultation and spec. Payment is usually 30% upfront, the rest in stages.",
    },
    sections: [
      {
        heading: "What determines the price of an AI solution?",
        paragraphs: [
          "AI projects have no single universal price — every business has different needs. The main factors that set the price:",
        ],
        bullets: [
          "Number of channels: just Telegram, or Telegram + Instagram + WhatsApp + website — the more, the more work.",
          "Integrations: CRM, 1C, inventory, payments (Click/Payme), telephony — each connection is extra work.",
          "AI complexity: a simple FAQ is cheaper; knowledge-base answers (RAG), lead qualification or voice AI cost more.",
          "Scope and existing system: build from scratch or configure an existing system.",
        ],
      },
      {
        heading: "Prices by service (from, 2026)",
        paragraphs: [
          "Below are Tezcode's starting prices. These are 'from' prices — the exact figure is set by project scope after the spec.",
        ],
        bullets: [
          "AI chatbot (Telegram, Instagram, WhatsApp, website): from $339 — tezcode.dev/en/ai-chatbot",
          "AI agent (performs tasks itself, 24/7): from $400 — tezcode.dev/en/ai-agent",
          "Telegram bot (orders, payments, Mini App): from $279 — tezcode.dev/en/telegram-bot-biznes",
          "Business automation (processes, reports, inventory): from $400 — tezcode.dev/en/biznes-avtomatlashtirish",
          "CRM integration (amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor): from $700 — tezcode.dev/en/crm-integratsiya",
          "AI video analytics (people counting, face recognition, ANPR): from $990, one-time setup — tezcode.dev/en/ai-video-analitika",
          "Custom software (web/mobile/desktop): MVP from $1000 — tezcode.dev/en/tezcode-custom",
          "Clinic CRM (ClinicaGo): from $25/mo (first month free) — tezcode.dev/en/klinika-crm",
          "Employee monitoring (WorkControl): from $35/mo — tezcode.dev/en/xodim-nazorati",
          "POS system (RAOS): from 249,000 UZS/mo (30 days free) — tezcode.dev/en/pos-tizimi",
        ],
      },
      {
        heading: "Why do prices vary so much?",
        paragraphs: [
          "Some solutions are one-time projects (e.g. CRM integration, video-analytics setup), others are subscriptions (SaaS products: clinic CRM, POS, employee monitoring). With a one-time project you pay once and the system is yours; with a subscription you get continuous updates and support for a monthly fee.",
          "Important: the CRM license (amoCRM, Bitrix24 plans) is not included in the integration price — the client pays it directly to the provider. Tezcode only does the connection and setup.",
        ],
      },
      {
        heading: "What are the payment terms?",
        paragraphs: [
          "At Tezcode, payment is usually staged: 30% upfront (at project start), the rest in stages as intermediate results are delivered. No hidden fees — everything is spelled out in the contract.",
          "This order protects you: you pay while seeing results, and we're obligated to see the project through.",
        ],
      },
      {
        heading: "Is the cheapest always best?",
        paragraphs: [
          "No. There are very cheap offers on the market like 'AI from 5 million soums', but they often turn out to be a simple button bot or a ready template. A real AI solution (knowledge base, integrations, Uzbek-language tuning) requires real work.",
          "When getting a quote, ask clearly: which systems does the solution connect to, how does it work in Uzbek, and is there support after the project? Choose not the cheapest, but the one that best fits your needs.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How much does an AI chatbot cost (2026)?",
          a: "At Tezcode an AI chatbot costs from $339. The exact price depends on the number of channels (Telegram, Instagram, WhatsApp, website), integrations (CRM, 1C) and AI complexity — the final figure is quoted in writing after a free consultation and spec.",
        },
        {
          q: "How much does an AI agent cost?",
          a: "An AI agent costs from $400. An agent is pricier than a chatbot because it doesn't just answer — it performs real tasks: writes to CRM/1C, creates orders, integrates. The price depends on scope.",
        },
        {
          q: "How much does CRM integration cost?",
          a: "CRM integration (amoCRM, Bitrix24, HubSpot, 1C) costs from $700. It's a one-time connection job — pipeline setup, channel connection, data migration. The CRM license is separate, paid by the client.",
        },
        {
          q: "How much does AI video analytics cost?",
          a: "AI video analytics costs from $990 — a one-time setup (people counting, face-recognition attendance, ANPR). It works with your existing IP cameras, then you manage the system yourself.",
        },
        {
          q: "Why are some solutions monthly and others one-time?",
          a: "One-time solutions (CRM integration, video-analytics setup, custom development) are paid once and the system is yours. Subscription products (clinic CRM $25/mo, POS from 249,000 UZS/mo, employee monitoring $35/mo) give you continuous updates and support for a monthly fee.",
        },
        {
          q: "How is payment made?",
          a: "Usually 30% upfront, the rest in stages — as intermediate results are delivered. No hidden fees, everything is in the contract. The exact price is quoted in writing after the spec.",
        },
      ],
    },
    cta: {
      title: "Need an exact price for your project?",
      subtitle:
        "In a free 30-minute consultation we'll look at your business and tell you which solution fits and what it costs. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
