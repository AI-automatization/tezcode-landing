import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-chatbot — target keywords: "AI chatbot yasash", "AI yordamchi",
// "telegram bot biznes uchun", "AI assistant Uzbekistan", "чат-бот для бизнеса",
// "AI ассистент", "AI customer service bot". Only confirmed Tezcode facts — we
// BUILD custom AI assistants/chatbots as a service. No fabricated client counts.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI chatbot va yordamchi — Tezcode",
      title1: "Biznesingiz uchun",
      titleAccent: "AI chatbot va yordamchi",
      title2: "",
      subtitle:
        "Mijozlarga 24/7 javob beradigan, lidlarni saralaydigan va buyurtma qabul qiladigan AI yordamchi. Telegram, Instagram, WhatsApp va veb-saytda. Tezcode sizning biznesingizga moslab quradi.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "AI yordamchi nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "AI yordamchi",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Bitta AI yordamchi bir nechta kanalda ishlaydi va jamoangizning takroriy ishini o'z bo'yniga oladi.",
      items: [
        { icon: "message-circle", title: "24/7 mijoz xizmati", desc: "Telegram, Instagram Direct, WhatsApp va veb-saytda kechayu kunduz javob beradi. Tez-tez beriladigan savollarga o'zi javob beradi." },
        { icon: "flame", title: "Lidlarni saralash (Cold/Warm/Hot)", desc: "AI har bir mijozning 'qiziqish darajasini' aniqlaydi va tayyor (issiq) mijozni darhol operatorga to'liq kontekst bilan uzatadi." },
        { icon: "book-open", title: "Sizning bazangiz bo'yicha javob (RAG)", desc: "AI sizning hujjatlar, narx va xizmatlaringiz asosida aniq javob beradi — umumiy ChatGPT emas, sizning biznesingizni biladi." },
        { icon: "link-2", title: "CRM va 1C integratsiyasi", desc: "AmoCRM, Bitrix24, 1C, Google Sheets — yordamchi mavjud tizimingizga ulanadi, mijoz va buyurtmalar avtomatik yoziladi." },
        { icon: "globe", title: "Ko'p tilli", desc: "O'zbek, rus va ingliz tilida bir vaqtning o'zida muloqot qiladi — mijoz qaysi tilda yozsa, shu tilda javob oladi." },
        { icon: "shopping-cart", title: "Buyurtma va bron qabul qilish", desc: "Mahsulot tanlash, buyurtma rasmiylashtirish, vaqt bron qilish va eslatma yuborish — operatorsiz, bot orqali." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "AI yordamchiga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Mijozlaringiz qanday savol beradi, qaysi ish ko'p vaqt oladi — o'rganamiz. Majburiyat yo'q.", icon: "message-circle" },
        { num: "02", title: "Stsenariy + taklif", desc: "Yordamchi qaysi savollarga javob beradi, qaysi kanalda ishlaydi — aniq stsenariy, narx va muddat bilan yozma taklif.", icon: "search" },
        { num: "03", title: "MVP yaratish", desc: "1-3 hafta ichida ishlovchi AI yordamchi. Sinab ko'rasiz, fikr berasiz, biz sozlaymiz.", icon: "zap" },
        { num: "04", title: "Joriy etish + qo'llab-quvvatlash", desc: "Kanallar va CRM ga ulaymiz, javoblar sifatini kuzatamiz va yaxshilab boramiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qurgan",
      titleAccent: "AI yechimlar",
      subtitle: "Tezcode o'z mahsulotlarida AI ni kunlik ishlatadi — quyidagilar real ishlovchi misollar.",
      items: [
        { tag: "01", title: "Salomat AI — ovozli tibbiy yordamchi", desc: "CoreMed ekotizimida bemor bilan ovoz orqali gaplashadigan AI assistent (STT → LLM → TTS). Murakkab AI yordamchini ham qura olamiz." },
        { tag: "02", title: "Telegram savdo va buyurtma boti", desc: "Buyurtma qabul qilish, eslatma yuborish, savollarga javob — kichik biznes uchun arzon va tez yechim." },
        { tag: "03", title: "RAOS ichidagi AI", desc: "Savdo platformasida ma'lumotni avtomatik yig'ish va tahlil. Tezcode ni real mahsulotda ishlatadi." },
        { tag: "04", title: "Ko'p kanalli AI yordamchi", desc: "Bitta yordamchi Telegram, Instagram va veb-saytda bir vaqtda ishlaydi — mijoz qayerdan yozsa, javob oladi." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Mijozlaringizga AI",
      titleAccent: "javob bersinmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada yordamchingiz nima qilishini aniqlaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "AI chatbot va yordamchi haqida ko'p so'raladigan savollar.",
      items: [
        { q: "AI chatbot nima va menga kerakmi?", a: "AI chatbot — bu mijozlar bilan tabiiy tilda yozishadigan, savollarga javob beradigan va buyurtma qabul qiladigan AI yordamchi. Agar mijozlaringiz bir xil savollarni ko'p berса yoki operatorlar javobga ulgurmasa — sizga kerak." },
        { q: "Qaysi kanallarda ishlaydi?", a: "Telegram, Instagram Direct, WhatsApp va veb-saytda. Bitta AI yordamchi bir nechta kanalda bir vaqtda ishlay oladi — mijoz qaysi kanaldan yozsa, o'sha yerda javob oladi." },
        { q: "O'zbek va rus tilida javob beradimi?", a: "Ha. Yordamchi o'zbek, rus va ingliz tilida muloqot qiladi. Mijoz qaysi tilda yozsa, shu tilda javob oladi." },
        { q: "Mavjud CRM yoki 1C ga ulanadimi?", a: "Ha. Biz AmoCRM, Bitrix24, 1C, Google Sheets va boshqa tizimlar bilan integratsiya quramiz — mijoz va buyurtmalar avtomatik yoziladi." },
        { q: "Qancha vaqtda tayyor bo'ladi va narxi qancha?", a: "Oddiy bot — 1-2 hafta, to'liqroq AI yordamchi — 2-3 hafta MVP. Aniq narx konsultatsiyadan keyin beriladi, to'lov 30% oldindan, qolgani bosqichma-bosqich." },
        { q: "Bot javob bera olmasa nima bo'ladi?", a: "Murakkab yoki nozik savolni AI o'zi jonli operatorga to'liq suhbat konteksti bilan uzatadi. Shunday qilib mijoz hech qachon javobsiz qolmaydi." },
      ],
    },
    service: {
      name: "AI chatbot va yordamchi yaratish — Tezcode",
      description:
        "Biznes uchun AI chatbot va yordamchi yaratish: Telegram, Instagram, WhatsApp va veb-saytda 24/7 mijoz xizmati, lid kvalifikatsiyasi, CRM/1C integratsiyasi, ko'p tilli. Toshkent, O'zbekiston.",
      serviceType: "AI chatbot / AI yordamchi ishlab chiqish",
    },
  },

  ru: {
    hero: {
      badge: "AI чат-бот и ассистент — Tezcode",
      title1: "AI чат-бот и ассистент",
      titleAccent: "для вашего бизнеса",
      title2: "",
      subtitle:
        "AI-ассистент, который отвечает клиентам 24/7, квалифицирует лиды и принимает заказы. В Telegram, Instagram, WhatsApp и на сайте. Tezcode строит его под ваш бизнес.",
      trust: "Бесплатная 30-мин консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что умеет AI-ассистент?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "AI-ассистент?",
      subtitle: "Один AI-ассистент работает в нескольких каналах и берёт на себя рутину вашей команды.",
      items: [
        { icon: "message-circle", title: "Поддержка клиентов 24/7", desc: "Отвечает круглосуточно в Telegram, Instagram Direct, WhatsApp и на сайте. На частые вопросы отвечает сам." },
        { icon: "flame", title: "Квалификация лидов (Cold/Warm/Hot)", desc: "AI определяет 'температуру' каждого клиента и сразу передаёт горячего лида менеджеру с полным контекстом." },
        { icon: "book-open", title: "Ответы по вашей базе (RAG)", desc: "AI отвечает на основе ваших документов, цен и услуг — не общий ChatGPT, а ассистент, который знает ваш бизнес." },
        { icon: "link-2", title: "Интеграция с CRM и 1C", desc: "AmoCRM, Bitrix24, 1C, Google Sheets — ассистент подключается к вашей системе, клиенты и заказы пишутся автоматически." },
        { icon: "globe", title: "Многоязычность", desc: "Общается на узбекском, русском и английском одновременно — клиент получает ответ на своём языке." },
        { icon: "shopping-cart", title: "Приём заказов и брони", desc: "Выбор товара, оформление заказа, бронирование времени и напоминания — без оператора, через бота." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "AI-ассистента",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Какие вопросы задают клиенты, какая работа отнимает время — изучаем. Без обязательств.", icon: "message-circle" },
        { num: "02", title: "Сценарий + предложение", desc: "На какие вопросы отвечает ассистент, в каких каналах работает — сценарий, цена и срок письменно.", icon: "search" },
        { num: "03", title: "Создание MVP", desc: "Рабочий AI-ассистент за 1-3 недели. Вы тестируете, даёте обратную связь, мы настраиваем.", icon: "zap" },
        { num: "04", title: "Внедрение + поддержка", desc: "Подключаем к каналам и CRM, следим за качеством ответов и улучшаем.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "AI-решения,",
      titleAccent: "которые мы построили",
      subtitle: "Tezcode использует AI в своих продуктах ежедневно — вот реально работающие примеры.",
      items: [
        { tag: "01", title: "Salomat AI — голосовой медицинский ассистент", desc: "В экосистеме CoreMed AI-ассистент общается с пациентом голосом (STT → LLM → TTS). Мы строим и сложных AI-ассистентов." },
        { tag: "02", title: "Telegram-бот продаж и заказов", desc: "Приём заказов, напоминания, ответы на вопросы — недорогое и быстрое решение для малого бизнеса." },
        { tag: "03", title: "AI внутри RAOS", desc: "В торговой платформе AI автоматически собирает и анализирует данные. Tezcode применяет AI в реальном продукте." },
        { tag: "04", title: "Многоканальный AI-ассистент", desc: "Один ассистент работает в Telegram, Instagram и на сайте одновременно — клиент пишет откуда угодно и получает ответ." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Пусть AI отвечает",
      titleAccent: "вашим клиентам?",
      subtitle: "Определим возможности вашего ассистента на бесплатной 30-минутной консультации. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы об AI-чат-боте и ассистенте.",
      items: [
        { q: "Что такое AI-чат-бот и нужен ли он мне?", a: "AI-чат-бот — это ассистент, который переписывается с клиентами на естественном языке, отвечает на вопросы и принимает заказы. Если клиенты часто задают одни и те же вопросы или операторы не успевают отвечать — он вам нужен." },
        { q: "В каких каналах он работает?", a: "В Telegram, Instagram Direct, WhatsApp и на сайте. Один AI-ассистент может работать сразу в нескольких каналах — клиент получает ответ там, откуда написал." },
        { q: "Отвечает ли на узбекском и русском?", a: "Да. Ассистент общается на узбекском, русском и английском. Клиент получает ответ на том языке, на котором написал." },
        { q: "Подключится ли к моей CRM или 1C?", a: "Да. Мы строим интеграцию с AmoCRM, Bitrix24, 1C, Google Sheets и другими системами — клиенты и заказы записываются автоматически." },
        { q: "Сколько времени и сколько стоит?", a: "Простой бот — 1-2 недели, более полный AI-ассистент — MVP за 2-3 недели. Точная цена даётся после консультации, оплата — 30% предоплата." },
        { q: "Что если бот не сможет ответить?", a: "Сложный или деликатный вопрос AI сам передаёт живому оператору с полным контекстом переписки. Так клиент никогда не остаётся без ответа." },
      ],
    },
    service: {
      name: "Создание AI-чат-бота и ассистента — Tezcode",
      description:
        "Создание AI-чат-бота и ассистента для бизнеса: поддержка клиентов 24/7 в Telegram, Instagram, WhatsApp и на сайте, квалификация лидов, интеграция с CRM/1C, многоязычность. Ташкент, Узбекистан.",
      serviceType: "Разработка AI-чат-бота / AI-ассистента",
    },
  },

  en: {
    hero: {
      badge: "AI chatbot & assistant — Tezcode",
      title1: "An AI chatbot & assistant",
      titleAccent: "for your business",
      title2: "",
      subtitle:
        "An AI assistant that answers customers 24/7, qualifies leads and takes orders — on Telegram, Instagram, WhatsApp and your website. Tezcode builds it around your business.",
      trust: "Free 30-min consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can the AI assistant do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can the",
      titleAccent: "AI assistant do?",
      subtitle: "One AI assistant works across several channels and takes the repetitive work off your team.",
      items: [
        { icon: "message-circle", title: "24/7 customer support", desc: "Answers around the clock on Telegram, Instagram Direct, WhatsApp and your website. Handles FAQs by itself." },
        { icon: "flame", title: "Lead qualification (Cold/Warm/Hot)", desc: "AI reads each lead's 'temperature' and instantly hands a hot lead to a human with full context." },
        { icon: "book-open", title: "Answers from your knowledge base (RAG)", desc: "AI answers from your documents, prices and services — not generic ChatGPT, but an assistant that knows your business." },
        { icon: "link-2", title: "CRM & 1C integration", desc: "AmoCRM, Bitrix24, 1C, Google Sheets — the assistant connects to your system; leads and orders are logged automatically." },
        { icon: "globe", title: "Multilingual", desc: "Talks in Uzbek, Russian and English at once — customers get a reply in the language they wrote in." },
        { icon: "shopping-cart", title: "Orders & bookings", desc: "Product selection, order checkout, time booking and reminders — handled by the bot, no operator needed." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to your",
      titleAccent: "AI assistant",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We study what customers ask and which work eats the most time. No obligations.", icon: "message-circle" },
        { num: "02", title: "Scenario + proposal", desc: "Which questions the assistant answers, which channels it runs in — a scenario, price and timeline in writing.", icon: "search" },
        { num: "03", title: "Build the MVP", desc: "A working AI assistant in 1-3 weeks. You test, give feedback, we tune.", icon: "zap" },
        { num: "04", title: "Rollout + support", desc: "We connect it to channels and CRM, monitor answer quality and keep improving.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "AI solutions",
      titleAccent: "we have built",
      subtitle: "Tezcode uses AI in its own products daily — these are real, working examples.",
      items: [
        { tag: "01", title: "Salomat AI — voice medical assistant", desc: "In the CoreMed ecosystem, an AI assistant talks to patients by voice (STT → LLM → TTS). We build complex AI assistants too." },
        { tag: "02", title: "Telegram sales & order bot", desc: "Takes orders, sends reminders, answers questions — an affordable, fast solution for small business." },
        { tag: "03", title: "AI inside RAOS", desc: "In the retail platform, AI gathers and analyses data automatically. Tezcode uses AI in a real product." },
        { tag: "04", title: "Multichannel AI assistant", desc: "One assistant runs on Telegram, Instagram and the website at once — customers write from anywhere and get an answer." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Let AI answer",
      titleAccent: "your customers?",
      subtitle: "We'll scope your assistant in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about the AI chatbot and assistant.",
      items: [
        { q: "What is an AI chatbot and do I need one?", a: "An AI chatbot is an assistant that chats with customers in natural language, answers questions and takes orders. If customers keep asking the same questions or your operators can't keep up, you need one." },
        { q: "Which channels does it work in?", a: "Telegram, Instagram Direct, WhatsApp and your website. One AI assistant can run across several channels at once — customers get a reply where they wrote." },
        { q: "Does it answer in Uzbek and Russian?", a: "Yes. The assistant talks in Uzbek, Russian and English. Customers get a reply in the language they used." },
        { q: "Will it connect to my CRM or 1C?", a: "Yes. We build integrations with AmoCRM, Bitrix24, 1C, Google Sheets and other systems — leads and orders are logged automatically." },
        { q: "How long and how much does it cost?", a: "A simple bot — 1-2 weeks; a fuller AI assistant — an MVP in 2-3 weeks. An exact price comes after the consultation, payment starts with a 30% deposit." },
        { q: "What if the bot can't answer?", a: "The AI hands a complex or sensitive question to a human operator with the full conversation context, so a customer is never left without an answer." },
      ],
    },
    service: {
      name: "AI chatbot & assistant development — Tezcode",
      description:
        "Building AI chatbots and assistants for business: 24/7 customer support on Telegram, Instagram, WhatsApp and websites, lead qualification, CRM/1C integration, multilingual. Tashkent, Uzbekistan.",
      serviceType: "AI chatbot / AI assistant development",
    },
  },

  ar: {
    hero: {
      badge: "شات بوت ومساعد ذكي — Tezcode",
      title1: "شات بوت ومساعد ذكي",
      titleAccent: "لأعمالك",
      title2: "",
      subtitle:
        "مساعد ذكي يرد على العملاء 24/7، يصنّف العملاء المحتملين ويستقبل الطلبات — على Telegram وInstagram وWhatsApp وموقعك. تبنيه Tezcode حول أعمالك.",
      trust: "استشارة 30 دقيقة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يفعل المساعد الذكي؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "المساعد الذكي؟",
      subtitle: "مساعد ذكي واحد يعمل في عدة قنوات ويتولى الأعمال المتكررة عن فريقك.",
      items: [
        { icon: "message-circle", title: "دعم العملاء 24/7", desc: "يرد على مدار الساعة في Telegram وInstagram Direct وWhatsApp وموقعك. يجيب عن الأسئلة الشائعة بنفسه." },
        { icon: "flame", title: "تصنيف العملاء (Cold/Warm/Hot)", desc: "يحدد الذكاء الاصطناعي 'حرارة' كل عميل ويحوّل العميل الجاهز فوراً إلى موظف مع السياق الكامل." },
        { icon: "book-open", title: "إجابات من قاعدتك (RAG)", desc: "يجيب الذكاء الاصطناعي اعتماداً على مستنداتك وأسعارك وخدماتك — ليس ChatGPT عاماً بل مساعد يعرف أعمالك." },
        { icon: "link-2", title: "تكامل مع CRM و1C", desc: "AmoCRM وBitrix24 و1C وGoogle Sheets — يتصل المساعد بنظامك، ويُسجَّل العملاء والطلبات تلقائياً." },
        { icon: "globe", title: "متعدد اللغات", desc: "يتحدث الأوزبكية والروسية والإنجليزية معاً — يحصل العميل على رد بلغته." },
        { icon: "shopping-cart", title: "استقبال الطلبات والحجوزات", desc: "اختيار المنتج، إتمام الطلب، حجز المواعيد والتذكيرات — عبر البوت دون موظف." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "المساعد الذكي",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ندرس ما يسأله العملاء وأي عمل يستهلك الوقت. بلا التزام.", icon: "message-circle" },
        { num: "02", title: "سيناريو + عرض", desc: "أي أسئلة يجيب عنها المساعد، وفي أي قنوات يعمل — سيناريو وسعر وموعد مكتوبة.", icon: "search" },
        { num: "03", title: "بناء MVP", desc: "مساعد ذكي عامل خلال 1-3 أسابيع. تختبره وتعطي ملاحظات ونضبطه.", icon: "zap" },
        { num: "04", title: "التطبيق + الدعم", desc: "نربطه بالقنوات وCRM، نراقب جودة الإجابات ونحسّن.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "حلول ذكاء اصطناعي",
      titleAccent: "بنيناها",
      subtitle: "تستخدم Tezcode الذكاء الاصطناعي في منتجاتها يومياً — هذه أمثلة عاملة حقيقية.",
      items: [
        { tag: "01", title: "Salomat AI — مساعد طبي صوتي", desc: "في منظومة CoreMed، مساعد ذكي يحدث المريض بالصوت (STT → LLM → TTS). نبني مساعدين أذكياء معقدين أيضاً." },
        { tag: "02", title: "بوت Telegram للمبيعات والطلبات", desc: "استقبال الطلبات، التذكيرات، الإجابة عن الأسئلة — حل سريع وميسور للأعمال الصغيرة." },
        { tag: "03", title: "ذكاء اصطناعي داخل RAOS", desc: "في منصة التجارة، يجمع الذكاء الاصطناعي البيانات ويحللها تلقائياً. تطبّق Tezcode الذكاء الاصطناعي في منتج حقيقي." },
        { tag: "04", title: "مساعد ذكي متعدد القنوات", desc: "مساعد واحد يعمل في Telegram وInstagram والموقع معاً — يكتب العميل من أي مكان ويحصل على رد." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "دع الذكاء الاصطناعي",
      titleAccent: "يرد على عملائك؟",
      subtitle: "سنحدد إمكانيات مساعدك في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن الشات بوت والمساعد الذكي.",
      items: [
        { q: "ما هو الشات بوت الذكي وهل أحتاجه؟", a: "الشات بوت الذكي مساعد يتحدث مع العملاء بلغة طبيعية، يجيب عن الأسئلة ويستقبل الطلبات. إذا كان العملاء يكررون الأسئلة نفسها أو لا يلحق الموظفون بالرد — فأنت بحاجة إليه." },
        { q: "في أي قنوات يعمل؟", a: "Telegram وInstagram Direct وWhatsApp والموقع. يمكن لمساعد واحد العمل في عدة قنوات معاً — يحصل العميل على رد حيث كتب." },
        { q: "هل يرد بالأوزبكية والروسية؟", a: "نعم. يتحدث المساعد الأوزبكية والروسية والإنجليزية. يحصل العميل على رد باللغة التي كتب بها." },
        { q: "هل يتصل بـ CRM أو 1C لدي؟", a: "نعم. نبني تكاملاً مع AmoCRM وBitrix24 و1C وGoogle Sheets وأنظمة أخرى — يُسجَّل العملاء والطلبات تلقائياً." },
        { q: "كم يستغرق وكم التكلفة؟", a: "بوت بسيط — 1-2 أسبوع، ومساعد ذكي أكمل — MVP خلال 2-3 أسابيع. يُعطى السعر بعد الاستشارة، والدفع يبدأ بدفعة مقدمة 30%." },
        { q: "ماذا لو لم يستطع البوت الإجابة؟", a: "يحوّل الذكاء الاصطناعي السؤال المعقد أو الحساس إلى موظف بشري مع سياق المحادثة الكامل، فلا يبقى العميل دون رد." },
      ],
    },
    service: {
      name: "تطوير شات بوت ومساعد ذكي — Tezcode",
      description:
        "بناء شات بوت ومساعد ذكي للأعمال: دعم عملاء 24/7 على Telegram وInstagram وWhatsApp والمواقع، تصنيف العملاء، تكامل CRM/1C، متعدد اللغات. طشقند، أوزبكستان.",
      serviceType: "تطوير شات بوت / مساعد ذكي",
    },
  },

  uk: {
    hero: {
      badge: "AI чат-бот і асистент — Tezcode",
      title1: "AI чат-бот і асистент",
      titleAccent: "для вашого бізнесу",
      title2: "",
      subtitle:
        "AI-асистент, який відповідає клієнтам 24/7, кваліфікує ліди та приймає замовлення — у Telegram, Instagram, WhatsApp і на сайті. Tezcode будує його під ваш бізнес.",
      trust: "Безкоштовна 30-хв консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що вміє AI-асистент?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "AI-асистент?",
      subtitle: "Один AI-асистент працює в кількох каналах і бере на себе рутину вашої команди.",
      items: [
        { icon: "message-circle", title: "Підтримка клієнтів 24/7", desc: "Відповідає цілодобово в Telegram, Instagram Direct, WhatsApp і на сайті. На часті питання відповідає сам." },
        { icon: "flame", title: "Кваліфікація лідів (Cold/Warm/Hot)", desc: "AI визначає 'температуру' кожного клієнта і відразу передає гарячий лід менеджеру з повним контекстом." },
        { icon: "book-open", title: "Відповіді за вашою базою (RAG)", desc: "AI відповідає на основі ваших документів, цін і послуг — не загальний ChatGPT, а асистент, який знає ваш бізнес." },
        { icon: "link-2", title: "Інтеграція з CRM і 1C", desc: "AmoCRM, Bitrix24, 1C, Google Sheets — асистент підключається до вашої системи, клієнти та замовлення пишуться автоматично." },
        { icon: "globe", title: "Багатомовність", desc: "Спілкується узбецькою, російською та англійською одночасно — клієнт отримує відповідь своєю мовою." },
        { icon: "shopping-cart", title: "Прийом замовлень і броні", desc: "Вибір товару, оформлення замовлення, бронювання часу та нагадування — через бота, без оператора." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "AI-асистента",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Які питання ставлять клієнти, яка робота забирає час — вивчаємо. Без зобов'язань.", icon: "message-circle" },
        { num: "02", title: "Сценарій + пропозиція", desc: "На які питання відповідає асистент, у яких каналах працює — сценарій, ціна та термін письмово.", icon: "search" },
        { num: "03", title: "Створення MVP", desc: "Робочий AI-асистент за 1-3 тижні. Ви тестуєте, даєте відгук, ми налаштовуємо.", icon: "zap" },
        { num: "04", title: "Впровадження + підтримка", desc: "Підключаємо до каналів і CRM, стежимо за якістю відповідей і покращуємо.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "AI-рішення,",
      titleAccent: "які ми побудували",
      subtitle: "Tezcode використовує AI у своїх продуктах щодня — ось реально працюючі приклади.",
      items: [
        { tag: "01", title: "Salomat AI — голосовий медичний асистент", desc: "В екосистемі CoreMed AI-асистент спілкується з пацієнтом голосом (STT → LLM → TTS). Ми будуємо і складних AI-асистентів." },
        { tag: "02", title: "Telegram-бот продажів і замовлень", desc: "Прийом замовлень, нагадування, відповіді на питання — недороге і швидке рішення для малого бізнесу." },
        { tag: "03", title: "AI всередині RAOS", desc: "У торговій платформі AI автоматично збирає та аналізує дані. Tezcode застосовує AI у реальному продукті." },
        { tag: "04", title: "Багатоканальний AI-асистент", desc: "Один асистент працює в Telegram, Instagram і на сайті одночасно — клієнт пише звідки завгодно і отримує відповідь." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Хай AI відповідає",
      titleAccent: "вашим клієнтам?",
      subtitle: "Визначимо можливості вашого асистента на безкоштовній 30-хвилинній консультації. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про AI-чат-бот і асистент.",
      items: [
        { q: "Що таке AI-чат-бот і чи потрібен він мені?", a: "AI-чат-бот — це асистент, який листується з клієнтами природною мовою, відповідає на питання і приймає замовлення. Якщо клієнти часто ставлять однакові питання або оператори не встигають відповідати — він вам потрібен." },
        { q: "У яких каналах він працює?", a: "У Telegram, Instagram Direct, WhatsApp і на сайті. Один AI-асистент може працювати одразу в кількох каналах — клієнт отримує відповідь там, звідки написав." },
        { q: "Чи відповідає узбецькою та російською?", a: "Так. Асистент спілкується узбецькою, російською та англійською. Клієнт отримує відповідь тією мовою, якою написав." },
        { q: "Чи підключиться до моєї CRM або 1C?", a: "Так. Ми будуємо інтеграцію з AmoCRM, Bitrix24, 1C, Google Sheets та іншими системами — клієнти та замовлення записуються автоматично." },
        { q: "Скільки часу і скільки коштує?", a: "Простий бот — 1-2 тижні, повніший AI-асистент — MVP за 2-3 тижні. Точна ціна дається після консультації, оплата — 30% передоплати." },
        { q: "Що якщо бот не зможе відповісти?", a: "Складне або делікатне питання AI сам передає живому оператору з повним контекстом листування. Так клієнт ніколи не залишається без відповіді." },
      ],
    },
    service: {
      name: "Створення AI-чат-бота та асистента — Tezcode",
      description:
        "Створення AI-чат-бота та асистента для бізнесу: підтримка клієнтів 24/7 у Telegram, Instagram, WhatsApp і на сайті, кваліфікація лідів, інтеграція з CRM/1C, багатомовність. Ташкент, Узбекистан.",
      serviceType: "Розробка AI-чат-бота / AI-асистента",
    },
  },
};
