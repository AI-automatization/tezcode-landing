import type { ArticleContent } from "@/components/blog/types";

// Pillar post for the Telegram-bot cluster (the weakest cluster: the service
// page had no supporting content). Targets the exact query "biznes uchun
// telegram bot" plus "telegram bot yaratish", "telegram bot narxi", "telegram
// do'kon / mini app", RU "телеграм бот для бизнеса". Answer-first TL;DR with a
// crisp definition so Google AI Overview can lift it (the pattern that got the
// CRM page cited); builds topical depth to lift /telegram-bot-biznes on the
// crowded head term. uz master, full ru + en. Real Tezcode capabilities only.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "Telegram bot / Qo'llanma",
      title: "Biznes uchun Telegram bot: nima, narxi va qanday yaratiladi (2026)",
      subtitle:
        "Buyurtma qabul qilish, to'lov olish va mijozga 24/7 javob berish — bularning hammasi Telegram botда. Biznesga bot nega kerak, qancha turadi va qanday tanlash — amaliy qo'llanma.",
      dateLabel: "2026-yil 15-avgust",
      readTime: "8 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Biznes uchun Telegram bot — bu mijozlar bilan Telegram orqali avtomatik ishlaydigan dastur: buyurtma qabul qiladi, Click/Payme orqali to'lov oladi, savollarga 24/7 javob beradi, mijozga eslatma yuboradi va ma'lumotni CRM'ga yozadi — operatorsiz. O'zbekistonda Telegram eng ko'p ishlatiladigan messenjer, shuning uchun mijozga yangi ilova yuklatish shart emas. Narx odatda: oddiy buyurtma/FAQ boti ~$279 dan, to'lov va Mini App do'koni bilan ko'proq, AI qatlami (erkin savollarga javob) qo'shilsa yana ko'proq — aniq summa TZ'dan keyin. Muddat: oddiy bot 1–2 hafta, murakkab 2–4 hafta.",
    },
    sections: [
      {
        heading: "Biznes uchun Telegram bot nima qiladi?",
        paragraphs: [
          "Telegram bot — bu sizning biznesingiz nomidan mijoz bilan avtomatik gaplashadigan dastur. U quyidagilarni bajaradi:",
        ],
        bullets: [
          "Buyurtma qabul qilish: mijoz mahsulot tanlaydi, savatga qo'shadi, buyurtma beradi — operatorsiz, kechasi ham.",
          "To'lov olish: Click yoki Payme ulanib, mijoz to'lovni to'g'ridan chatda amalga oshiradi.",
          "24/7 javob: narx, manzil, ish vaqti, yetkazib berish kabi tez-tez beriladigan savollarga darhol javob.",
          "Eslatma va xabar: aksiya, buyurtma holati, eslatma — mijozga avtomatik yuboriladi.",
          "CRM'ga yozish: har buyurtma va mijoz amoCRM, Bitrix24 yoki 1C'ga avtomatik tushadi.",
        ],
      },
      {
        heading: "Nega aynan Telegram?",
        paragraphs: [
          "O'zbekistonda Telegram — eng commu, eng ko'p ishlatiladigan messenjer. Bu biznes uchun katta afzallik:",
        ],
        bullets: [
          "Mijozga yangi ilova yuklatish shart emas — u allaqachon Telegram'da.",
          "Bot mijozni o'z kanalida kutib oladi: reklama, kanal va bot bir joyda.",
          "Mini App orqali to'liq do'kon (katalog, savat, to'lov) Telegram ichида ochiladi — sayt ham shart emas.",
        ],
      },
      {
        heading: "Telegram bot turlari",
        paragraphs: [
          "Biznes ehtiyojiga qarab bir necha xil bot bo'ladi:",
        ],
        bullets: [
          "Oddiy buyurtma/FAQ boti: menyu, savol-javob, buyurtma qabul qilish — kichik biznes uchun eng tez start.",
          "Telegram do'kon (Mini App): katalog, savat, Click/Payme to'lov — Instagram'ni komissiyasiz do'konga aylantiradi.",
          "AI botli: erkin savolni tabiiy tilda tushunadigan, bazangiz bo'yicha javob beradigan AI qatlami qo'shiladi.",
          "CRM/1C integratsiyali: buyurtma va mijoz avtomatik tizimingizga yoziladi.",
        ],
      },
      {
        heading: "Telegram bot narxi qancha?",
        paragraphs: [
          "Bitta universal narx yo'q — bot nima qilishiga bog'liq. Tezcode'da boshlang'ich narxlar:",
        ],
        bullets: [
          "Oddiy buyurtma/FAQ boti: $279 dan.",
          "Mini App do'kon (to'lov bilan): ish hajmiga qarab yuqoriroq, TZ'dan keyin.",
          "AI qatlami (erkin savol-javob): AI chatbot $339 dan — Telegram botga qo'shiladi.",
          "CRM/1C integratsiya: alohida ish (CRM integratsiya $700 dan).",
        ],
      },
      {
        heading: "Qanday yaratiladi — 4 qadam",
        paragraphs: [
          "Tezcode'da jarayon aniq va bosqichma-bosqich:",
        ],
        bullets: [
          "1. Bepul konsultatsiya: bot nima qilishi kerak — buyurtma, to'lov, savol-javob — 30 daqiqada aniqlaymiz.",
          "2. Yozma taklif (TZ): aniq imkoniyatlar, narx va muddat bilan.",
          "3. Yaratish va test: 1–4 hafta ichida bot tayyor, real buyurtmalarda sinaysiz.",
          "4. Ishga tushirish + qo'llab-quvvatlash: kanallar va CRM'ga ulaymiz, keyin ham qo'llab-quvvatlaymiz.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Biznes uchun Telegram bot nima?",
          a: "Bu mijozlar bilan Telegram orqali avtomatik ishlaydigan dastur: buyurtma qabul qiladi, Click/Payme orqali to'lov oladi, savollarga 24/7 javob beradi va ma'lumotni CRM'ga yozadi — operatorsiz. O'zbekistonda Telegram eng ko'p ishlatilgani uchun mijozga qulay.",
        },
        {
          q: "Telegram bot narxi qancha (2026)?",
          a: "Oddiy buyurtma/FAQ boti $279 dan. Mini App do'kon (to'lov bilan) va AI qatlami qo'shilsa narx oshadi. AI chatbot $339 dan, CRM integratsiya $700 dan. Aniq summa bepul konsultatsiya va TZ'dan keyin yozma beriladi.",
        },
        {
          q: "Telegram do'kon (Mini App) nima?",
          a: "Mini App — Telegram ichida ochiladigan to'liq do'kon: katalog, savat, buyurtma va Click/Payme to'lov. Mijoz saytga o'tmaydi, hammasi Telegram'da bo'ladi. Instagram'ni komissiyasiz Telegram do'koniga aylantirish uchun ideal.",
        },
        {
          q: "Botga AI qo'shsa bo'ladimi?",
          a: "Ha. Oddiy tugmali bot faqat menyu bo'yicha yuradi; AI qatlami qo'shilsa, bot erkin savolni tabiiy tilda tushunadi va sizning bazangiz bo'yicha javob beradi (o'zbek va rus tilida). Ko'p biznes oddiy botdan boshlab, keyin AI qo'shadi.",
        },
        {
          q: "Bot to'lovni qabul qila oladimi?",
          a: "Ha. Click va Payme to'lov tizimlari botga ulanadi — mijoz to'lovni to'g'ridan chatда amalga oshiradi, buyurtma esa sizga (yoki CRM'ga) tushadi.",
        },
        {
          q: "Qancha vaqtда tayyor bo'ladi?",
          a: "Oddiy buyurtma/FAQ boti 1–2 hafta. To'lov, Mini App yoki AI qatlami bilan murakkab bot 2–4 hafta. Muddat TZ'da qat'iy belgilanadi.",
        },
        {
          q: "Toshkentда biznes uchun Telegram bot kim yasaydi?",
          a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rezidenti — biznes uchun Telegram bot va Mini App do'kon yaratadi (buyurtma, Click/Payme to'lov, CRM integratsiya, AI qatlami). Batafsil: tezcode.dev/telegram-bot-biznes.",
        },
      ],
    },
    cta: {
      title: "Biznesingiz uchun Telegram bot kerakmi?",
      subtitle:
        "Tezcode bepul 30 daqiqalik konsultatsiyada botingiz nima qilishini va aniq narxini aniqlaydi. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "Telegram-бот / Руководство",
      title: "Telegram-бот для бизнеса: что это, цена и как сделать (2026)",
      subtitle:
        "Приём заказов, оплата и ответы клиентам 24/7 — всё в Telegram-боте. Зачем бизнесу бот, сколько он стоит и как выбрать — практическое руководство.",
      dateLabel: "15 августа 2026",
      readTime: "8 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "Telegram-бот для бизнеса — это программа, которая автоматически работает с клиентами в Telegram: принимает заказы, берёт оплату через Click/Payme, отвечает на вопросы 24/7, отправляет напоминания и пишет данные в CRM — без оператора. В Узбекистане Telegram — самый используемый мессенджер, поэтому клиенту не нужно ставить новое приложение. Цена обычно: простой бот заказов/FAQ от ~$279, с оплатой и Mini App-магазином дороже, с ИИ-слоем (ответы на произвольные вопросы) ещё дороже — точная сумма после ТЗ. Срок: простой бот 1–2 недели, сложный 2–4 недели.",
    },
    sections: [
      {
        heading: "Что делает Telegram-бот для бизнеса?",
        paragraphs: [
          "Telegram-бот — это программа, которая от имени вашего бизнеса автоматически общается с клиентом. Он делает следующее:",
        ],
        bullets: [
          "Приём заказов: клиент выбирает товар, добавляет в корзину, оформляет заказ — без оператора, даже ночью.",
          "Оплата: подключаются Click или Payme, клиент оплачивает прямо в чате.",
          "Ответы 24/7: на частые вопросы (цена, адрес, часы работы, доставка) — мгновенно.",
          "Напоминания и рассылки: акции, статус заказа, напоминания — автоматически.",
          "Запись в CRM: каждый заказ и клиент попадают в amoCRM, Bitrix24 или 1C автоматически.",
        ],
      },
      {
        heading: "Почему именно Telegram?",
        paragraphs: [
          "В Узбекистане Telegram — самый распространённый мессенджер. Для бизнеса это большое преимущество:",
        ],
        bullets: [
          "Клиенту не нужно ставить новое приложение — он уже в Telegram.",
          "Бот встречает клиента на своём канале: реклама, канал и бот в одном месте.",
          "Через Mini App полноценный магазин (каталог, корзина, оплата) открывается внутри Telegram — сайт тоже не нужен.",
        ],
      },
      {
        heading: "Виды Telegram-ботов",
        paragraphs: [
          "В зависимости от нужд бизнеса бывает несколько типов:",
        ],
        bullets: [
          "Простой бот заказов/FAQ: меню, вопросы-ответы, приём заказов — самый быстрый старт для малого бизнеса.",
          "Telegram-магазин (Mini App): каталог, корзина, оплата Click/Payme — превращает Instagram в магазин без комиссии.",
          "С ИИ: добавляется ИИ-слой, который понимает произвольные вопросы и отвечает по вашей базе.",
          "С интеграцией CRM/1C: заказ и клиент автоматически пишутся в вашу систему.",
        ],
      },
      {
        heading: "Сколько стоит Telegram-бот?",
        paragraphs: [
          "Единой цены нет — зависит от того, что делает бот. Стартовые цены в Tezcode:",
        ],
        bullets: [
          "Простой бот заказов/FAQ: от $279.",
          "Mini App магазин (с оплатой): зависит от объёма работ, после ТЗ.",
          "ИИ-слой (ответы на произвольные вопросы): ИИ-чат-бот от $339 — добавляется к Telegram-боту.",
          "Интеграция CRM/1C: отдельная работа (интеграция CRM от $700).",
        ],
      },
      {
        heading: "Как делается — 4 шага",
        paragraphs: [
          "В Tezcode процесс чёткий и поэтапный:",
        ],
        bullets: [
          "1. Бесплатная консультация: что должен делать бот — заказы, оплата, ответы — определяем за 30 минут.",
          "2. Письменное предложение (ТЗ): с точными возможностями, ценой и сроком.",
          "3. Разработка и тест: за 1–4 недели бот готов, вы тестируете на реальных заказах.",
          "4. Запуск + поддержка: подключаем каналы и CRM, поддерживаем и дальше.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что такое Telegram-бот для бизнеса?",
          a: "Это программа, которая автоматически работает с клиентами в Telegram: принимает заказы, берёт оплату через Click/Payme, отвечает на вопросы 24/7 и пишет данные в CRM — без оператора. Удобно, потому что в Узбекистане Telegram — самый популярный мессенджер.",
        },
        {
          q: "Сколько стоит Telegram-бот (2026)?",
          a: "Простой бот заказов/FAQ от $279. С Mini App магазином (с оплатой) и ИИ-слоем цена растёт. ИИ-чат-бот от $339, интеграция CRM от $700. Точная сумма — письменно после бесплатной консультации и ТЗ.",
        },
        {
          q: "Что такое Telegram-магазин (Mini App)?",
          a: "Mini App — полноценный магазин внутри Telegram: каталог, корзина, заказ и оплата Click/Payme. Клиент не уходит на сайт, всё в Telegram. Идеально, чтобы превратить Instagram в Telegram-магазин без комиссии.",
        },
        {
          q: "Можно добавить ИИ к боту?",
          a: "Да. Простой кнопочный бот работает по меню; с ИИ-слоем бот понимает произвольные вопросы на естественном языке и отвечает по вашей базе (на узбекском и русском). Многие начинают с простого бота и потом добавляют ИИ.",
        },
        {
          q: "Может ли бот принимать оплату?",
          a: "Да. Click и Payme подключаются к боту — клиент оплачивает прямо в чате, а заказ приходит вам (или в CRM).",
        },
        {
          q: "За сколько времени будет готов?",
          a: "Простой бот заказов/FAQ 1–2 недели. Сложный, с оплатой, Mini App или ИИ-слоем — 2–4 недели. Срок жёстко фиксируется в ТЗ.",
        },
        {
          q: "Кто делает Telegram-бот для бизнеса в Ташкенте?",
          a: "Tezcode — AI Software Factory в Ташкенте и резидент IT Park — создаёт Telegram-ботов и Mini App магазины для бизнеса (заказы, оплата Click/Payme, интеграция CRM, ИИ-слой). Подробнее: tezcode.dev/ru/telegram-bot-biznes.",
        },
      ],
    },
    cta: {
      title: "Нужен Telegram-бот для вашего бизнеса?",
      subtitle:
        "На бесплатной 30-минутной консультации Tezcode определит, что должен делать ваш бот и сколько он стоит. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "Telegram bot / Guide",
      title: "A Telegram bot for business: what it is, price and how to build it (2026)",
      subtitle:
        "Taking orders, payments and answering customers 24/7 — all in a Telegram bot. Why a business needs one, what it costs and how to choose — a practical guide.",
      dateLabel: "August 15, 2026",
      readTime: "8 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "A Telegram bot for business is a program that works with customers automatically inside Telegram: it takes orders, collects payment via Click/Payme, answers questions 24/7, sends reminders and writes data to your CRM — with no operator. In Uzbekistan Telegram is the most-used messenger, so customers don't need to install a new app. Price usually: a simple orders/FAQ bot from ~$279, more with payments and a Mini App store, more again with an AI layer (free-form answers) — the exact figure after the spec. Timeline: a simple bot 1–2 weeks, a complex one 2–4 weeks.",
    },
    sections: [
      {
        heading: "What does a business Telegram bot do?",
        paragraphs: [
          "A Telegram bot is a program that talks to customers automatically on behalf of your business. It does the following:",
        ],
        bullets: [
          "Takes orders: the customer picks a product, adds to cart, checks out — no operator, even at night.",
          "Collects payment: Click or Payme connect, and the customer pays right in the chat.",
          "Answers 24/7: frequent questions (price, address, hours, delivery) — instantly.",
          "Reminders and broadcasts: promos, order status, reminders — automatically.",
          "Writes to CRM: every order and customer lands in amoCRM, Bitrix24 or 1C automatically.",
        ],
      },
      {
        heading: "Why Telegram specifically?",
        paragraphs: [
          "In Uzbekistan Telegram is the most widespread messenger. For business that's a big advantage:",
        ],
        bullets: [
          "The customer doesn't need to install a new app — they're already on Telegram.",
          "The bot meets the customer on your own channel: ads, channel and bot in one place.",
          "Via a Mini App a full store (catalog, cart, payment) opens inside Telegram — no website needed either.",
        ],
      },
      {
        heading: "Types of Telegram bots",
        paragraphs: [
          "Depending on business needs, there are several types:",
        ],
        bullets: [
          "Simple orders/FAQ bot: menu, Q&A, order taking — the fastest start for small business.",
          "Telegram store (Mini App): catalog, cart, Click/Payme payment — turns Instagram into a commission-free store.",
          "With AI: an AI layer is added that understands free-form questions and answers from your knowledge base.",
          "With CRM/1C integration: orders and customers are written to your system automatically.",
        ],
      },
      {
        heading: "How much does a Telegram bot cost?",
        paragraphs: [
          "There's no single price — it depends on what the bot does. Starting prices at Tezcode:",
        ],
        bullets: [
          "Simple orders/FAQ bot: from $279.",
          "Mini App store (with payments): higher by scope, after the spec.",
          "AI layer (free-form Q&A): AI chatbot from $339 — added to the Telegram bot.",
          "CRM/1C integration: separate work (CRM integration from $700).",
        ],
      },
      {
        heading: "How it's built — 4 steps",
        paragraphs: [
          "At Tezcode the process is clear and staged:",
        ],
        bullets: [
          "1. Free consultation: what the bot should do — orders, payments, answers — decided in 30 minutes.",
          "2. Written proposal (spec): with exact features, price and timeline.",
          "3. Build and test: the bot is ready in 1–4 weeks, you test it on real orders.",
          "4. Launch + support: we connect channels and CRM, and support it afterward.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is a Telegram bot for business?",
          a: "It's a program that works with customers automatically inside Telegram: it takes orders, collects payment via Click/Payme, answers questions 24/7 and writes data to your CRM — with no operator. It's convenient because Telegram is the most-used messenger in Uzbekistan.",
        },
        {
          q: "How much does a Telegram bot cost (2026)?",
          a: "A simple orders/FAQ bot from $279. With a Mini App store (with payments) and an AI layer the price rises. AI chatbot from $339, CRM integration from $700. The exact figure is quoted in writing after a free consultation and spec.",
        },
        {
          q: "What is a Telegram store (Mini App)?",
          a: "A Mini App is a full store inside Telegram: catalog, cart, order and Click/Payme payment. The customer doesn't leave for a website — everything is in Telegram. Ideal to turn Instagram into a commission-free Telegram store.",
        },
        {
          q: "Can AI be added to the bot?",
          a: "Yes. A simple button bot follows a menu; with an AI layer the bot understands free-form questions in natural language and answers from your knowledge base (in Uzbek and Russian). Many start with a simple bot and add AI later.",
        },
        {
          q: "Can the bot take payments?",
          a: "Yes. Click and Payme connect to the bot — the customer pays right in the chat, and the order comes to you (or your CRM).",
        },
        {
          q: "How long does it take to be ready?",
          a: "A simple orders/FAQ bot is 1–2 weeks. A complex one with payments, a Mini App or an AI layer is 2–4 weeks. The timeline is fixed firmly in the spec.",
        },
        {
          q: "Who builds a business Telegram bot in Tashkent?",
          a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — builds Telegram bots and Mini App stores for business (orders, Click/Payme payment, CRM integration, AI layer). More: tezcode.dev/en/telegram-bot-biznes.",
        },
      ],
    },
    cta: {
      title: "Need a Telegram bot for your business?",
      subtitle:
        "In a free 30-minute consultation Tezcode will determine what your bot should do and what it costs. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
