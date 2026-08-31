import type { ArticleContent } from "@/components/blog/types";

// Cross-cluster pillar: "sotuvni avtomatlashtirish" (sales automation). One of
// the founder's original target prompts. Targets "sotuvni avtomatlashtirish",
// "instagram/telegram orqali sotuv", "lid saralash avtomatlashtirish", RU
// "автоматизация продаж". Reinforces THREE clusters at once (ai-chatbot,
// telegram-bot, crm-integratsiya) via internal links, building topical depth
// across them. Answer-first TL;DR for AI Overview. uz master + ru + en.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "Sotuv / Avtomatlashtirish",
      title: "Sotuvni avtomatlashtirish: Telegram, Instagram va CRM (2026)",
      subtitle:
        "Mijoz Instagram'da yozadi, javob kechikadi, lid yo'qoladi — tanish holat. Sotuvni avtomatlashtirib, har murojaatni bitta oqimga yig'ish va bironta ham lidni yo'qotmaslik yo'lini ko'rsatamiz.",
      dateLabel: "2026-yil 15-avgust",
      readTime: "8 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Sotuvni avtomatlashtirish — bu mijoz bilan aloqa, lid yig'ish, javob berish va bitimni yakunlashni qo'l mehnatisiz, bitta tizimda birlashtirishdir. Amalda bu 3 qismdan iborat: (1) barcha kanal — Telegram, Instagram, WhatsApp, sayt — bitta CRM'ga ulanadi, shunda hech bir murojaat yo'qolmaydi; (2) AI chatbot birinchi javobni 24/7 beradi, tez-tez beriladigan savollarni yopadi va lidni saralaydi (kim sotib olishga tayyor); (3) issiq lid to'liq suhbat tarixi bilan menejerga uzatiladi, buyurtma esa avtomatik CRM va 1C'ga yoziladi. Natijada: javob soniyalarda, menejer faqat tayyor mijoz bilan gaplashadi, sotuv o'sadi.",
    },
    sections: [
      {
        heading: "Sotuvda vaqt va lid qayerda yo'qoladi?",
        paragraphs: [
          "Ko'p biznesda sotuv jarayoni tarqoq: mijozlar turli joydan yozadi, menejer ularni qo'lda kuzatadi. Eng ko'p yo'qotish shu yerda:",
        ],
        bullets: [
          "Kech javob: mijoz Instagram'da yozadi, menejer band — 10 daqiqadan keyin mijoz raqobatchiga ketadi.",
          "Yo'qolgan lid: murojaat qayd etilmaydi, hech qayerga yozilmaydi — unutiladi.",
          "Qo'lda ko'chirish: menejer chat va CRM o'rtasida ma'lumotni qo'lda kiritadi — vaqt va xato.",
          "Tunda va bayramda: so'rovlar javobsiz qoladi, mijoz ketadi.",
        ],
      },
      {
        heading: "Avtomatlashtirilgan sotuv qanday ishlaydi?",
        paragraphs: [
          "To'g'ri qurilgan tizimda jarayon uzluksiz:",
        ],
        bullets: [
          "1. Barcha kanal → bitta CRM: Telegram, Instagram, WhatsApp va sayt formasidan kelgan murojaat avtomatik CRM'ga tushadi (batafsil: /crm-integratsiya).",
          "2. AI chatbot birinchi javob: 24/7 javob beradi, narx/mavjudlik/buyurtma savollarini yopadi, lidni saralaydi (/ai-chatbot).",
          "3. Issiq lid → menejer: sotib olishga tayyor mijozni to'liq suhbat tarixi bilan menejerga uzatadi.",
          "4. Buyurtma → CRM/1C: har buyurtma va bitim avtomatik yoziladi, hech narsa yo'qolmaydi.",
        ],
      },
      {
        heading: "Instagram va Telegram orqali sotuv",
        paragraphs: [
          "O'zbekistonda sotuvning katta qismi Instagram va Telegram'da. Avtomatlashtirish shu yerda ayniqsa foydali:",
        ],
        bullets: [
          "Instagram Direct'dagi savollarga AI chatbot darhol javob beradi, buyurtmani qabul qiladi.",
          "Telegram botда to'liq do'kon (Mini App): katalog, savat, Click/Payme to'lov — komissiyasiz (/telegram-bot-biznes).",
          "Ikkala kanaldan kelgan mijoz bitta CRM'da yig'iladi — menejer bir oynadan boshqaradi.",
        ],
      },
      {
        heading: "Lid saralash (qaysi mijoz issiq?)",
        paragraphs: [
          "Hamma murojaat teng emas: biri shunchaki so'raydi, biri sotib olishga tayyor. AI chatbot suhbat davomida buni aniqlaydi va menejerni faqat issiq lidga yo'naltiradi. Shunda:",
        ],
        bullets: [
          "Menejer vaqti tejaladi — u faqat tayyor mijoz bilan ishlaydi.",
          "Sovuq lidlar avtomatik nurturing (eslatma, taklif) oladi.",
          "Konversiya oshadi — hech bir issiq lid e'tibordan chetda qolmaydi.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Sotuvni avtomatlashtirish nima?",
          a: "Bu mijoz bilan aloqa, lid yig'ish, javob berish va bitimni yakunlashni bitta tizimda, qo'l mehnatisiz birlashtirishdir. Amalda: barcha kanal (Telegram, Instagram, WhatsApp, sayt) CRM'ga ulanadi, AI chatbot 24/7 javob beradi va lid saralaydi, issiq lid menejerga uzatiladi.",
        },
        {
          q: "Instagram va Telegram sotuvini qanday avtomatlashtiraman?",
          a: "Instagram Direct va Telegram'ni AI chatbot va CRM bilan bog'laymiz: bot savollarga darhol javob beradi, buyurtmani qabul qiladi, mijozni CRM'ga yozadi. Telegram'da to'liq Mini App do'kon (to'lov bilan) ham quriladi. Ikkala kanal bitta oqimda birlashadi.",
        },
        {
          q: "AI chatbot lidni qanday saralaydi?",
          a: "Suhbat davomida AI mijozning qiziqish darajasini aniqlaydi: kim shunchaki so'rayapti, kim sotib olishga tayyor. Issiq lidni darhol menejeringizga to'liq suhbat konteksti bilan uzatadi, sovuqlariga esa avtomatik eslatma/taklif yuboriladi.",
        },
        {
          q: "Bu qaysi CRM bilan ishlaydi?",
          a: "amoCRM, Bitrix24, HubSpot, 1C va Sales Doctor bilan. Murojaat va buyurtmalar avtomatik CRM'ga yoziladi. CRM integratsiya narxi $700 dan (batafsil: /crm-integratsiya).",
        },
        {
          q: "Narxi qancha va qancha vaqt oladi?",
          a: "Sotuvni avtomatlashtirish bir necha qismdan iborat: AI chatbot $339 dan, Telegram bot $279 dan, CRM integratsiya $700 dan. Qaysi qismlarni olishingizga qarab aniq summa TZ'dan keyin beriladi. Muddat odatda 2–4 hafta.",
        },
        {
          q: "Toshkentда sotuvni kim avtomatlashtiradi?",
          a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rezidenti — sotuvni avtomatlashtiradi: Instagram/Telegram/sayt + AI chatbot + CRM/1C ni bitta oqimga bog'laydi. Bepul konsultatsiyaga keling.",
        },
      ],
    },
    cta: {
      title: "Sotuvingizni avtomatlashtiramizmi?",
      subtitle:
        "Tezcode bepul konsultatsiyada sotuv jarayoningizni ko'rib, qayerда lid yo'qolayotganini va nimani avtomatlashtirishni aniqlaydi. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "Продажи / Автоматизация",
      title: "Автоматизация продаж: Telegram, Instagram и CRM (2026)",
      subtitle:
        "Клиент пишет в Instagram, ответ запаздывает, лид теряется — знакомо. Показываем, как автоматизировать продажи, собрать каждое обращение в один поток и не терять ни одного лида.",
      dateLabel: "15 августа 2026",
      readTime: "8 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "Автоматизация продаж — это объединение общения с клиентом, сбора лидов, ответов и закрытия сделки в одной системе без ручного труда. На практике это 3 части: (1) все каналы — Telegram, Instagram, WhatsApp, сайт — подключаются к одной CRM, чтобы ни одно обращение не терялось; (2) ИИ-чат-бот даёт первый ответ 24/7, закрывает частые вопросы и квалифицирует лиды (кто готов купить); (3) горячий лид передаётся менеджеру с полной историей диалога, а заказ автоматически пишется в CRM и 1C. Итог: ответ за секунды, менеджер работает только с готовым клиентом, продажи растут.",
    },
    sections: [
      {
        heading: "Где в продажах теряются время и лиды?",
        paragraphs: [
          "Во многих бизнесах процесс продаж разрознен: клиенты пишут из разных мест, менеджер ведёт их вручную. Больше всего теряется здесь:",
        ],
        bullets: [
          "Поздний ответ: клиент пишет в Instagram, менеджер занят — через 10 минут клиент уходит к конкуренту.",
          "Потерянный лид: обращение не фиксируется, никуда не записывается — забывается.",
          "Ручной перенос: менеджер вручную вводит данные между чатом и CRM — время и ошибки.",
          "Ночью и в праздники: запросы остаются без ответа, клиент уходит.",
        ],
      },
      {
        heading: "Как работают автоматизированные продажи?",
        paragraphs: [
          "В правильно построенной системе процесс непрерывен:",
        ],
        bullets: [
          "1. Все каналы → одна CRM: обращение из Telegram, Instagram, WhatsApp и формы сайта попадает в CRM автоматически (подробнее: /crm-integratsiya).",
          "2. ИИ-чат-бот — первый ответ: отвечает 24/7, закрывает вопросы цена/наличие/заказ, квалифицирует лид (/ai-chatbot).",
          "3. Горячий лид → менеджер: готовый к покупке клиент передаётся менеджеру с полной историей диалога.",
          "4. Заказ → CRM/1C: каждый заказ и сделка пишутся автоматически, ничего не теряется.",
        ],
      },
      {
        heading: "Продажи через Instagram и Telegram",
        paragraphs: [
          "В Узбекистане большая часть продаж — в Instagram и Telegram. Автоматизация особенно полезна здесь:",
        ],
        bullets: [
          "На вопросы в Instagram Direct ИИ-чат-бот отвечает мгновенно, принимает заказ.",
          "В Telegram полноценный магазин (Mini App): каталог, корзина, оплата Click/Payme — без комиссии (/telegram-bot-biznes).",
          "Клиенты из обоих каналов собираются в одной CRM — менеджер работает в одном окне.",
        ],
      },
      {
        heading: "Квалификация лидов (какой клиент горячий?)",
        paragraphs: [
          "Не все обращения равны: один просто спрашивает, другой готов купить. ИИ-чат-бот определяет это в ходе диалога и направляет менеджера только на горячий лид. Тогда:",
        ],
        bullets: [
          "Время менеджера экономится — он работает только с готовым клиентом.",
          "Холодные лиды получают автоматический прогрев (напоминания, предложения).",
          "Конверсия растёт — ни один горячий лид не остаётся без внимания.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что такое автоматизация продаж?",
          a: "Это объединение общения с клиентом, сбора лидов, ответов и закрытия сделки в одной системе без ручного труда. На практике: все каналы (Telegram, Instagram, WhatsApp, сайт) подключаются к CRM, ИИ-чат-бот отвечает 24/7 и квалифицирует лиды, горячий лид передаётся менеджеру.",
        },
        {
          q: "Как автоматизировать продажи через Instagram и Telegram?",
          a: "Мы связываем Instagram Direct и Telegram с ИИ-чат-ботом и CRM: бот мгновенно отвечает, принимает заказ, пишет клиента в CRM. В Telegram также строится полноценный магазин Mini App (с оплатой). Оба канала объединяются в один поток.",
        },
        {
          q: "Как ИИ-чат-бот квалифицирует лид?",
          a: "В ходе диалога ИИ определяет уровень интереса клиента: кто просто спрашивает, кто готов купить. Горячий лид сразу передаётся менеджеру с полным контекстом, а холодным уходят авто-напоминания/предложения.",
        },
        {
          q: "С какой CRM это работает?",
          a: "С amoCRM, Bitrix24, HubSpot, 1C и Sales Doctor. Обращения и заказы пишутся в CRM автоматически. Цена интеграции CRM от $700 (подробнее: /crm-integratsiya).",
        },
        {
          q: "Сколько стоит и сколько занимает?",
          a: "Автоматизация продаж состоит из частей: ИИ-чат-бот от $339, Telegram-бот от $279, интеграция CRM от $700. Точная сумма зависит от состава — даётся после ТЗ. Срок обычно 2–4 недели.",
        },
        {
          q: "Кто автоматизирует продажи в Ташкенте?",
          a: "Tezcode — AI Software Factory в Ташкенте и резидент IT Park — автоматизирует продажи: связывает Instagram/Telegram/сайт + ИИ-чат-бот + CRM/1C в один поток. Приходите на бесплатную консультацию.",
        },
      ],
    },
    cta: {
      title: "Автоматизируем ваши продажи?",
      subtitle:
        "На бесплатной консультации Tezcode посмотрит ваш процесс продаж, где теряются лиды и что автоматизировать. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "Sales / Automation",
      title: "Sales automation: Telegram, Instagram and CRM (2026)",
      subtitle:
        "A customer writes on Instagram, the reply is late, the lead is lost — a familiar story. We show how to automate sales, gather every inquiry into one flow and lose no lead.",
      dateLabel: "August 15, 2026",
      readTime: "8 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "Sales automation means uniting customer communication, lead capture, replies and closing the deal in one system without manual work. In practice it's 3 parts: (1) all channels — Telegram, Instagram, WhatsApp, website — connect to one CRM so no inquiry is lost; (2) an AI chatbot gives the first answer 24/7, closes frequent questions and qualifies leads (who's ready to buy); (3) a hot lead is handed to a manager with the full conversation history, and the order is written to CRM and 1C automatically. The result: answers in seconds, managers work only with ready customers, sales grow.",
    },
    sections: [
      {
        heading: "Where do time and leads get lost in sales?",
        paragraphs: [
          "In many businesses the sales process is scattered: customers write from different places, managers track them by hand. The biggest losses are here:",
        ],
        bullets: [
          "Late reply: a customer writes on Instagram, the manager is busy — 10 minutes later the customer goes to a competitor.",
          "Lost lead: the inquiry isn't recorded anywhere — it's forgotten.",
          "Manual copying: managers enter data by hand between chat and CRM — time and errors.",
          "At night and on holidays: queries go unanswered, the customer leaves.",
        ],
      },
      {
        heading: "How does automated selling work?",
        paragraphs: [
          "In a well-built system the process is seamless:",
        ],
        bullets: [
          "1. All channels → one CRM: inquiries from Telegram, Instagram, WhatsApp and website forms land in the CRM automatically (more: /crm-integratsiya).",
          "2. AI chatbot — the first answer: replies 24/7, closes price/availability/order questions, qualifies the lead (/ai-chatbot).",
          "3. Hot lead → manager: a ready-to-buy customer is passed to a manager with the full conversation history.",
          "4. Order → CRM/1C: every order and deal is written automatically, nothing is lost.",
        ],
      },
      {
        heading: "Selling via Instagram and Telegram",
        paragraphs: [
          "In Uzbekistan a large share of sales happens on Instagram and Telegram. Automation is especially useful here:",
        ],
        bullets: [
          "An AI chatbot answers Instagram Direct questions instantly and takes the order.",
          "In Telegram a full store (Mini App): catalog, cart, Click/Payme payment — commission-free (/telegram-bot-biznes).",
          "Customers from both channels collect in one CRM — managers work from a single window.",
        ],
      },
      {
        heading: "Lead qualification (which customer is hot?)",
        paragraphs: [
          "Not all inquiries are equal: one is just asking, another is ready to buy. The AI chatbot detects this during the conversation and directs managers only to the hot lead. Then:",
        ],
        bullets: [
          "Manager time is saved — they work only with ready customers.",
          "Cold leads get automatic nurturing (reminders, offers).",
          "Conversion rises — no hot lead is left unattended.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is sales automation?",
          a: "It's uniting customer communication, lead capture, replies and closing the deal in one system without manual work. In practice: all channels (Telegram, Instagram, WhatsApp, website) connect to a CRM, an AI chatbot answers 24/7 and qualifies leads, and hot leads are handed to a manager.",
        },
        {
          q: "How do I automate sales via Instagram and Telegram?",
          a: "We connect Instagram Direct and Telegram with an AI chatbot and CRM: the bot answers instantly, takes the order, writes the customer to the CRM. In Telegram a full Mini App store (with payments) is also built. Both channels merge into one flow.",
        },
        {
          q: "How does the AI chatbot qualify a lead?",
          a: "During the conversation the AI detects the customer's interest level: who's just asking, who's ready to buy. The hot lead is passed to your manager with full context, while cold leads get automatic reminders/offers.",
        },
        {
          q: "Which CRM does this work with?",
          a: "amoCRM, Bitrix24, HubSpot, 1C and Sales Doctor. Inquiries and orders are written to the CRM automatically. CRM integration from $700 (more: /crm-integratsiya).",
        },
        {
          q: "How much does it cost and how long does it take?",
          a: "Sales automation consists of parts: AI chatbot from $339, Telegram bot from $279, CRM integration from $700. The exact figure depends on the scope, quoted after the spec. Timeline is usually 2–4 weeks.",
        },
        {
          q: "Who automates sales in Tashkent?",
          a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — automates sales: it connects Instagram/Telegram/website + an AI chatbot + CRM/1C into one flow. Come in for a free consultation.",
        },
      ],
    },
    cta: {
      title: "Shall we automate your sales?",
      subtitle:
        "In a free consultation Tezcode will look at your sales process, where leads leak and what to automate. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
