import type { ArticleContent } from "@/components/blog/types";

// Article: "Claude Fable 5 — what Anthropic's most capable model means for
// business." News-style piece covering the June 9, 2026 launch, the June 12-30
// US export-control episode, and the July 1 relaunch. Facts are sourced from
// Anthropic's own announcements and mainstream tech press coverage (CNBC,
// Forbes, The Hacker News, MacRumors) — no fabricated numbers or claims of a
// Tezcode-Anthropic relationship. uz is the master; ru and en are translations.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI dunyosida / Yangilik",
      title: "Claude Fable 5: Anthropic'ning eng kuchli modeli va bu biznes uchun nimani anglatadi",
      subtitle:
        "Anthropic Claude Fable 5'ni chiqardi, AQSh eksport nazorati tufayli vaqtincha to'xtatdi, so'ng yana global qaytardi. Tezcode nuqtai nazaridan — bu O'zbekistondagi AI-avtomatlashtirish loyihalari uchun nimani anglatadi.",
      dateLabel: "2026-yil 2-iyul",
      readTime: "5 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Anthropic 2026-yil 9-iyunda Claude Fable 5'ni chiqardi — kompaniya hozirgacha ommaviy taqdim etgan eng qobiliyatli modeli, deyarli barcha AI benchmarklarida (dasturlash, bilim ishi, ko'rish, ilmiy tadqiqot) yetakchi natija ko'rsatadi. Narxi — 1 mln kirish tokeni uchun $10, chiqish uchun $50, bu Claude Mythos Preview'dan ikki baravardan ko'proq arzon. 12-iyunda AQSh hukumati xavfsizlik zaifligi (Amazon tadqiqotchilari topgan jailbreak usuli) tufayli modelga eksport nazoratini joriy qildi, 30-iyunda esa bekor qildi — 1-iyuldan Fable 5 yangi xavfsizlik klassifikatorlari bilan butun dunyoda qayta mavjud.",
    },
    sections: [
      {
        heading: "Claude Fable 5 nima?",
        paragraphs: [
          "Claude Fable 5 — Anthropic'ning Mythos darajasidagi modeli, ommaviy foydalanish uchun xavfsiz qilib chiqarilgan. Kompaniyaning o'zi ta'kidlashicha, uning qobiliyatlari Anthropic hozirgacha ommaviy taqdim etgan har qanday modeldan yuqori — dasturiy muhandislik, bilim bilan ishlash, ko'rish va ilmiy tadqiqot kabi deyarli barcha sinovlarda state-of-the-art natija.",
          "Narxi ham diqqatga sazovor: 1 million kirish tokeni uchun $10, chiqish tokeni uchun $50 — bu avvalgi Claude Mythos Preview'dan ikki baravardan ko'proq arzon. Kuchliroq model + past narx — bu AI-avtomatlashtirish loyihalari uchun amaliy ma'noga ega.",
        ],
      },
      {
        heading: "Eksport nazorati voqeasi",
        paragraphs: [
          "12-iyun kuni AQSh hukumati Claude Fable 5 va Claude Mythos 5'ga eksport nazoratini joriy qildi. Sabab — Amazon tadqiqotchilari modelning xavfsizlik choralarini aylanib o'tish usulini topgani: dasturiy zaifliklarni aniqlashga undash orqali, model zaiflikni qanday ekspluatatsiya qilish mumkinligini ko'rsatuvchi kod yaratgan.",
          "30-iyun kuni AQSh hukumati bu nazoratni bekor qildi, va 1-iyuldan Claude Fable 5 butun dunyo foydalanuvchilariga — Claude Platform, Claude.ai, Claude Code va Claude Cowork orqali — qayta ochildi. Anthropic yangi klassifikatorlar bilan kiberxavfsizlik bo'yicha suiiste'mol xavfini yanada ko'proq bloklashini e'lon qildi.",
        ],
      },
      {
        heading: "Bu O'zbekiston biznesi uchun nimani anglatadi?",
        paragraphs: [
          "Har safar yangi, kuchliroq va arzonroq model chiqqanida, AI-avtomatlashtirish (chatbot, AI agent, ish jarayonlarini avtomatlashtirish) narxi pasayadi, sifati esa oshadi. Tezcode kabi kompaniyalar mijozlar uchun aynan shu eng ilg'or modellardan foydalanib, tezroq va sifatliroq yechimlar taklif qila oladi.",
          "Bu voqea shuni ham ko'rsatdi: kuchli AI modellarni joriy etishda xavfsizlik masalasi jiddiy — hatto Anthropic kabi yetakchi kompaniya ham vaqtincha cheklovga uchradi. AI agent qurishda xavfsizlik choralarini boshidanoq hisobga olish — vaqtinchalik emas, doimiy talab.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Claude Fable 5 qachon chiqdi?",
          a: "Anthropic Claude Fable 5'ni 2026-yil 9-iyunda e'lon qildi.",
        },
        {
          q: "Claude Fable 5 narxi qancha?",
          a: "1 million kirish tokeni uchun $10, 1 million chiqish tokeni uchun $50 — Claude Mythos Preview'dan ikki baravardan ko'proq arzon.",
        },
        {
          q: "Nega Claude Fable 5 vaqtincha to'xtatilgan edi?",
          a: "12-iyun kuni AQSh hukumati xavfsizlik zaifligi (Amazon tadqiqotchilari topgan jailbreak usuli) tufayli eksport nazoratini joriy qildi. 30-iyun kuni bu nazorat bekor qilindi.",
        },
        {
          q: "Claude Fable 5 hozir ishlatish mumkinmi?",
          a: "Ha. 2026-yil 1-iyuldan Claude Fable 5 Claude Platform, Claude.ai, Claude Code va Claude Cowork orqali butun dunyoda qayta mavjud, yangi xavfsizlik klassifikatorlari bilan.",
        },
        {
          q: "Bu Tezcode ishiga qanday ta'sir qiladi?",
          a: "Tezcode mijozlar uchun AI agent va avtomatlashtirish yechimlarini qurishda eng ilg'or modellardan foydalanadi — yangi, kuchliroq va arzonroq modellar sifat va narx bo'yicha to'g'ridan-to'g'ri foyda beradi.",
        },
      ],
    },
    cta: {
      title: "Biznesingiz uchun AI agent kerakmi?",
      subtitle:
        "Tezcode eng ilg'or AI modellardan foydalanib biznesingiz uchun AI agent va avtomatlashtirish yechimlarini quradi. Jamoamiz bilan bog'laning.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "Мир ИИ / Новость",
      title: "Claude Fable 5: самая мощная модель Anthropic и что это значит для бизнеса",
      subtitle:
        "Anthropic выпустила Claude Fable 5, временно приостановила доступ из-за экспортного контроля США, а затем снова открыла к ней доступ по всему миру. Взгляд Tezcode — что это значит для проектов ИИ-автоматизации в Узбекистане.",
      dateLabel: "2 июля 2026",
      readTime: "5 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "9 июня 2026 года Anthropic выпустила Claude Fable 5 — самую способную модель, которую компания когда-либо делала общедоступной, с лидирующими результатами почти по всем ИИ-бенчмаркам (разработка ПО, работа со знаниями, зрение, научные исследования). Цена — $10 за 1 млн входных токенов и $50 за выходные токены, это более чем вдвое дешевле Claude Mythos Preview. 12 июня власти США ввели экспортный контроль из-за уязвимости (метод обхода защиты, найденный исследователями Amazon), а 30 июня отменили его — с 1 июля Fable 5 снова доступна по всему миру с новыми классификаторами безопасности.",
    },
    sections: [
      {
        heading: "Что такое Claude Fable 5?",
        paragraphs: [
          "Claude Fable 5 — модель уровня Mythos от Anthropic, выпущенная в безопасном виде для широкого использования. По заявлению компании, её возможности превосходят любую модель, которую Anthropic когда-либо делала общедоступной — state-of-the-art результаты почти во всех тестируемых областях: разработка ПО, работа со знаниями, зрение, научные исследования.",
          "Цена тоже примечательна: $10 за 1 млн входных токенов, $50 за выходные токены — более чем вдвое дешевле предыдущей Claude Mythos Preview. Более мощная модель по более низкой цене имеет прямое практическое значение для проектов ИИ-автоматизации.",
        ],
      },
      {
        heading: "История с экспортным контролем",
        paragraphs: [
          "12 июня власти США ввели экспортный контроль на Claude Fable 5 и Claude Mythos 5. Причина — исследователи Amazon нашли способ обойти защитные механизмы модели: попросив её найти уязвимости в ПО, они получили код, демонстрирующий, как можно эксплуатировать одну из уязвимостей.",
          "30 июня власти США отменили этот контроль, и с 1 июля Claude Fable 5 снова стала доступна пользователям по всему миру — через Claude Platform, Claude.ai, Claude Code и Claude Cowork. Anthropic сообщила о новых классификаторах, блокирующих больше сценариев злоупотребления в области кибербезопасности.",
        ],
      },
      {
        heading: "Что это значит для бизнеса в Узбекистане?",
        paragraphs: [
          "Каждый раз, когда выходит более мощная и более дешёвая модель, стоимость ИИ-автоматизации (чат-боты, ИИ-агенты, автоматизация процессов) снижается, а качество растёт. Компании вроде Tezcode могут использовать именно такие передовые модели, чтобы предлагать клиентам более быстрые и качественные решения.",
          "Эта история также показала: вопрос безопасности при внедрении мощных ИИ-моделей остаётся серьёзным — даже такая ведущая компания, как Anthropic, столкнулась с временными ограничениями. Закладывать безопасность с самого начала при создании ИИ-агентов — не разовая задача, а постоянное требование.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Когда вышла Claude Fable 5?",
          a: "Anthropic анонсировала Claude Fable 5 9 июня 2026 года.",
        },
        {
          q: "Сколько стоит Claude Fable 5?",
          a: "$10 за 1 млн входных токенов и $50 за 1 млн выходных токенов — более чем вдвое дешевле Claude Mythos Preview.",
        },
        {
          q: "Почему Claude Fable 5 временно приостанавливали?",
          a: "12 июня власти США ввели экспортный контроль из-за уязвимости — метода обхода защиты, найденного исследователями Amazon. 30 июня контроль был отменён.",
        },
        {
          q: "Можно ли использовать Claude Fable 5 сейчас?",
          a: "Да. С 1 июля 2026 года Claude Fable 5 снова доступна по всему миру через Claude Platform, Claude.ai, Claude Code и Claude Cowork, с новыми классификаторами безопасности.",
        },
        {
          q: "Как это влияет на работу Tezcode?",
          a: "Tezcode использует самые передовые модели при создании ИИ-агентов и решений автоматизации для клиентов — новые, более мощные и доступные модели напрямую влияют на качество и стоимость.",
        },
      ],
    },
    cta: {
      title: "Нужен ИИ-агент для вашего бизнеса?",
      subtitle:
        "Tezcode строит ИИ-агентов и решения автоматизации для бизнеса на самых передовых моделях. Свяжитесь с нашей командой.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI world / News",
      title: "Claude Fable 5: Anthropic's most capable model, and what it means for business",
      subtitle:
        "Anthropic launched Claude Fable 5, temporarily pulled it under US export controls, then relaunched it globally. Tezcode's take on what it means for AI automation projects in Uzbekistan.",
      dateLabel: "July 2, 2026",
      readTime: "5 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "On June 9, 2026, Anthropic released Claude Fable 5 — the most capable model the company has ever made generally available, state-of-the-art on nearly all tested AI benchmarks (software engineering, knowledge work, vision, scientific research). Pricing is $10 per million input tokens and $50 per million output tokens, more than half the price of Claude Mythos Preview. On June 12, the US government applied export controls after Amazon researchers found a way to bypass its safeguards; the controls were lifted on June 30, and as of July 1 Fable 5 is available globally again with new safety classifiers.",
    },
    sections: [
      {
        heading: "What is Claude Fable 5?",
        paragraphs: [
          "Claude Fable 5 is Anthropic's Mythos-class model, made safe for general use. Per the company, its capabilities exceed any model Anthropic has ever made generally available — state-of-the-art results on nearly every benchmark tested, including software engineering, knowledge work, vision, and scientific research.",
          "The pricing stands out too: $10 per million input tokens and $50 per million output tokens — more than half the price of the previous Claude Mythos Preview. A more capable model at a lower price has direct, practical value for AI automation projects.",
        ],
      },
      {
        heading: "The export-control episode",
        paragraphs: [
          "On June 12, the US government applied export controls to Claude Fable 5 and Claude Mythos 5. The trigger was a report that Amazon researchers had found a way to bypass Fable 5's safeguards — by prompting it to identify software vulnerabilities, they got the model to produce code demonstrating how one could be exploited.",
          "On June 30, the US government lifted those controls, and as of July 1 Claude Fable 5 became available again to users worldwide — via the Claude Platform, Claude.ai, Claude Code, and Claude Cowork. Anthropic said it redeployed the model with new classifiers to target and block more cybersecurity-related misuse.",
        ],
      },
      {
        heading: "What does this mean for businesses in Uzbekistan?",
        paragraphs: [
          "Every time a newer, more capable, and cheaper model ships, the cost of AI automation — chatbots, AI agents, workflow automation — drops while quality rises. Companies like Tezcode can put exactly these frontier models to work, delivering faster and better solutions for clients.",
          "The episode is also a reminder: safety matters when deploying powerful AI models — even a leading company like Anthropic hit a temporary restriction. Building safety in from the start, not as an afterthought, is a standing requirement when building AI agents, not a one-time concern.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "When was Claude Fable 5 released?",
          a: "Anthropic announced Claude Fable 5 on June 9, 2026.",
        },
        {
          q: "How much does Claude Fable 5 cost?",
          a: "$10 per million input tokens and $50 per million output tokens — more than half the price of Claude Mythos Preview.",
        },
        {
          q: "Why was Claude Fable 5 temporarily unavailable?",
          a: "On June 12, the US government applied export controls after a safety bypass method was found by Amazon researchers. The controls were lifted on June 30.",
        },
        {
          q: "Is Claude Fable 5 available now?",
          a: "Yes. As of July 1, 2026, Claude Fable 5 is available globally again via the Claude Platform, Claude.ai, Claude Code, and Claude Cowork, with new safety classifiers.",
        },
        {
          q: "How does this affect Tezcode's work?",
          a: "Tezcode builds AI agents and automation solutions for clients using the most capable models available — newer, stronger, and cheaper models translate directly into better quality and lower cost.",
        },
      ],
    },
    cta: {
      title: "Need an AI agent for your business?",
      subtitle:
        "Tezcode builds AI agents and automation solutions for business using the most capable models available. Get in touch with our team.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
