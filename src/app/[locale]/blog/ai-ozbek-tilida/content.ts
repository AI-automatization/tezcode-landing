import type { ArticleContent } from "@/components/blog/types";

// Genuinely-useful, differentiated pillar: "AI o'zbek tilida ishlaydimi?".
// Plays to Tezcode's real edge — most off-the-shelf tools (ChatGPT wrappers,
// ManyChat) handle Uzbek poorly; Tezcode tunes uz/ru specifically. Targets
// "AI o'zbek tilida", "o'zbekcha chatbot", "o'zbek tilida AI agent", RU
// "AI на узбекском". Answer-first for AI Overview; reinforces the ai-chatbot /
// ai-agent clusters. uz master + ru + en. Honest, no fabricated claims.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI / O'zbek tili",
      title: "AI o'zbek tilida: foydalanish va tekshirish misollari",
      subtitle:
        "AIga o'zbekcha savol berish, javob uslubini belgilash va biznes ma'lumotlari bilan sinash uchun amaliy namunalar. Chatbot va agent tanlashda nimalarni tekshirish kerak?",
      dateLabel: "2026-yil 15-avgust",
      readTime: "7 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "AI bilan o'zbek tilida savol-javob qilish, matn tayyorlash va hujjatni qisqartirish mumkin. Natija model, topshiriq va berilgan ma'lumotga bog'liq: ism, raqam va mazmunni tekshiring. Biznes chatboti uchun esa narxnoma, xizmatlar va ko'p beriladigan savollarni bilim bazasiga kiritib, mijozlaringiz yozadigan uslubda sinov o'tkazing.",
    },
    sections: [
      {
        heading: "AIga o'zbek tilida qanday topshiriq berish kerak?",
        paragraphs: [
          "Vazifa, kerakli ma'lumot va javob shaklini birga yozing. Masalan: «Quyidagi mahsulot tavsifini o'zbek lotin yozuvida 3 gapga qisqartir. Narx yoki yangi xususiyat qo'shma: [tavsif]». Bu topshiriqda til, uzunlik va manbadan chiqmaslik talabi aniq.",
          "Biznes savol-javobi uchun: «Faqat quyidagi narxnomaga tayanib javob ber. Ma'lumot bo'lmasa, bilmasligingni ayt va operatorga murojaat qilishni taklif et: [narxnoma]. Mijoz savoli: yetkazib berish qancha?» Natijani narxnoma bilan solishtiring; ko'rsatma berishning o'zi xatosiz javobni kafolatlamaydi."
        ],
        bullets: [
          "Bitta savolni rasmiy va kundalik uslubda yozib, javoblar bir xil ma'noni berishini tekshiring.",
          "Mahsulot nomi, narx va sanalar o'zgarmaganini solishtiring.",
          "Bazada yo'q xizmat haqida so'rang: tizim javob to'qimasdan, aniqlashtirish so'rashi kerak."
        ],
        links: [
          {
            href: "/ai-chatbot",
            label: "Biznes uchun o'zbekcha AI chatbot"
          },
          {
            href: "/ai-agent",
            label: "CRM bilan ishlaydigan AI agent"
          }
        ]
      },
      {
        heading: "O'zbekcha javob sifatini nima belgilaydi?",
        paragraphs: [
          "Tayyor botni baholashda uning nomidan ko'ra, sizning savollaringizga bergan javobini tekshirish foydaliroq. Sinov to'plamiga quyidagilarni kiriting:"
        ],
        bullets: [
          "Yozuv: mijoz ishlatadigan alifbo va apostrof variantlarini tekshiring.",
          "Aralash til: o'zbekcha gap ichidagi ruscha atama ma'nosini saqlaydimi?",
          "So'zlashuv: qisqartmalar va imlo xatolari bilan yozilgan savolni tushunadimi?",
          "Sohaviy ma'lumot: narx va xizmat shartlarini berilgan manbaga mos qaytaradimi?"
        ],
      },
      {
        heading: "Zamonaviy AI o'zbekchani qanday tushunadi?",
        paragraphs: [
          "GPT-4o va Claude darajasidagi katta til modellari o'zbek tilini allaqachon yaxshi biladi — ular ko'p tilli. To'g'ri sozlanganda:",
        ],
        bullets: [
          "Lotin va kirill yozuvini ham tushunadi va javob beradi.",
          "Aralash til (o'zbekcha-ruscha) suhbatni tabiiy olib boradi.",
          "Sizning bazangiz bo'yicha (RAG) javob beradi — umumiy ChatGPT emas, aynan sizning narx va xizmatlaringiz.",
          "So'zlashuv uslubini sozlash mumkin — rasmiy yoki do'stona, sizning brendingizga mos.",
        ],
      },
      {
        heading: "Yaxshi o'zbek tilli bot qanday quriladi?",
        paragraphs: [
          "Faqat modelni ulash yetmaydi — sifat sozlashda. To'g'ri jarayon:",
        ],
        bullets: [
          "Sizning bazangiz: narxnoma, xizmatlar, tez-tez beriladigan savollar o'zbek/rus tilida bilim bazasiga aylantiriladi.",
          "Lotin/kirill va aralash til uchun alohida sozlash va cheklovlar.",
          "Real o'zbekcha suhbatlarda test — bot qayerda qiynalayotganini topib, tuzatib boriladi.",
          "Bazada yo'q narsani o'ylab topmasligi uchun cheklov — noto'g'ri javob berish o'rniga operatorga uzatadi.",
        ],
      },
      {
        heading: "Tezcode'ning farqi",
        paragraphs: [
          "Tezcode botni biznes hujjatlari asosida o'zbek va rus tillarida sozlaydi. Ishga tushirishdan oldin yozuv variantlari, aralash til, narx savollari va operatorga uzatish holatlarini tekshiramiz. Faqat javob berish kerak bo'lsa chatbot, CRMda amal bajarish kerak bo'lsa agent ssenariysi ko'rib chiqiladi."
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI o'zbek tilida ishlaydimi?",
          a: "Ha. Zamonaviy AI (GPT, Claude darajasidagi modellar) o'zbek tilida — lotin va kirill yozuvida, hatto o'zbekcha-ruscha aralash yozganda ham ishlaydi. Lekin sifat sozlashga bog'liq: bot sizning bazangiz bo'yicha uz/ru tiliga alohida sozlanishi kerak.",
        },
        {
          q: "O'zbekcha AI javobining sifatini qanday tekshiraman?",
          a: "Mijozlaringizning odatiy savollaridan sinov to'plami tuzing: imlo xatosi, aralash til, narx va bazada yo'q xizmat haqidagi savollar bo'lsin. Har javobni manba bilan solishtiring. To'g'rilik, tushunarlilik va operatorga o'z vaqtida uzatishni alohida baholang."
        },
        {
          q: "Bot lotin va kirill ikkalasini ham tushunadimi?",
          a: "To'g'ri sozlanganda — ha. Mijoz lotin yoki kirill yozuvida yozsa ham bot tushunadi va javob beradi. Tezcode botlarni ikkala yozuv uchun ham alohida sozlaydi.",
        },
        {
          q: "Bot o'zbekcha-ruscha aralash gapni tushunadimi?",
          a: "Ha. O'zbekistonda odamlar ko'pincha bir jumlada o'zbekcha-ruscha aralash yozadi. To'g'ri sozlangan bot buni tabiiy tushunadi — bu Tezcode alohida e'tibor beradigan narsa.",
        },
        {
          q: "Bot noto'g'ri o'zbekcha javob bersa nima bo'ladi?",
          a: "Botni tasdiqlangan bilim bazasiga tayantirish xatolarni kamaytirishi mumkin, lekin butunlay yo'q qilmaydi. Muhim javoblarni tekshirish, yetarli ma'lumot bo'lmaganda operatorga uzatish va xato suhbatlarni qayta sinash kerak.",
        },
        {
          q: "Toshkentda o'zbek tilli AI chatbot kim yasaydi?",
          a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rezidenti — o'zbek va rus tilida AI chatbot va agentlar yaratadi. Botni sizning hujjatlaringiz asosida quramiz, lotin/kirill va aralash tilni alohida sozlaymiz. Batafsil: tezcode.dev/ai-chatbot.",
        },
      ],
    },
    cta: {
      title: "O'zbek tilida ishlaydigan AI kerakmi?",
      subtitle:
        "Tezcode bepul konsultatsiyada biznesingizni ko'rib, o'zbek/rus tilli AI chatbot yoki agent sizga qanday foyda berishini aniqlaydi. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "ИИ / Узбекский язык",
      title: "Работает ли ИИ (AI) на узбекском? Полный ответ для чат-ботов и агентов (2026)",
      subtitle:
        "Многие думают: «Понимает ли ИИ узбекский?». Честный ответ: современный ИИ работает на узбекском, но качество зависит от настройки. Почему готовые боты плохо справляются с узбекским и как сделать правильно — объясняем.",
      dateLabel: "15 августа 2026",
      readTime: "7 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "Да, современный ИИ (модели уровня GPT, Claude) работает на узбекском — в латинице и кириллице, даже при смешанном узбекско-русском тексте. Но качество зависит от настройки: готовые зарубежные платформы (ManyChat, простые боты на ChatGPT) понимают узбекский поверхностно, путают разговорный стиль и отраслевые термины. Для хорошего результата бот нужно отдельно настроить под ваш контент (прайс, услуги, вопросы-ответы) на uz/ru и протестировать на реальных диалогах. Tezcode как раз строит ботов под узбекско-русское общение для бизнеса в Узбекистане.",
    },
    sections: [
      {
        heading: "Почему готовые боты плохо справляются с узбекским?",
        paragraphs: [
          "Узбекский язык для ИИ непрост — по нескольким причинам:",
        ],
        bullets: [
          "Две письменности: узбекский пишут и латиницей, и кириллицей. Многие готовые боты хорошо понимают только одну.",
          "Смешанный язык (code-switching): в Узбекистане в одном предложении смешивают узбекский и русский. Это сбивает ИИ с толку.",
          "Разговорный стиль: официальный узбекский и бытовой отличаются. Готовый бот часто отвечает книжно.",
          "Мало данных: в интернете узбекского текста меньше, чем английского, поэтому модели лучше знают английский.",
        ],
      },
      {
        heading: "Как современный ИИ понимает узбекский?",
        paragraphs: [
          "Большие языковые модели уровня GPT-4o и Claude уже хорошо знают узбекский — они многоязычны. При правильной настройке:",
        ],
        bullets: [
          "Понимает и латиницу, и кириллицу — и отвечает в обеих.",
          "Естественно ведёт смешанный (узбекско-русский) диалог.",
          "Отвечает по вашей базе (RAG) — не универсальный ChatGPT, а именно ваши цены и услуги.",
          "Разговорный стиль настраивается — официальный или дружелюбный, под ваш бренд.",
        ],
      },
      {
        heading: "Как строится хороший узбекоязычный бот?",
        paragraphs: [
          "Просто подключить модель мало — качество в настройке. Правильный процесс:",
        ],
        bullets: [
          "Ваша база: прайс, услуги, частые вопросы превращаются в базу знаний на uz/ru.",
          "Отдельная настройка и ограничения для латиницы/кириллицы и смешанного языка.",
          "Тест на реальных узбекских диалогах — находим, где бот путается, и исправляем.",
          "Ограничение, чтобы бот не выдумывал то, чего нет в базе: вместо неверного ответа он передаёт вопрос оператору.",
        ],
      },
      {
        heading: "Отличие Tezcode",
        paragraphs: [
          "В Ташкенте чат-ботов делают многие, но узбекский язык — именно наш фокус:",
          "Мы строим бота на основе ваших документов на узбекском и русском, отдельно настраиваем латиницу/кириллицу и смешанный язык, тестируем на реальных диалогах. Готовые зарубежные платформы именно здесь и буксуют. Подробнее: ИИ-чат-бот (/ai-chatbot), ИИ-агент (/ai-agent).",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Работает ли ИИ на узбекском?",
          a: "Да. Современный ИИ (модели уровня GPT, Claude) работает на узбекском — в латинице и кириллице, даже при смешанном узбекско-русском тексте. Но качество зависит от настройки: бот нужно отдельно настроить под вашу базу на uz/ru.",
        },
        {
          q: "Почему готовые боты (ManyChat, простой ChatGPT) плохо справляются с узбекским?",
          a: "Они понимают узбекский поверхностно: плохо ловят разницу латиница/кириллица, смешанный язык (узбекско-русский) и разговорный стиль. Узбекского текста в интернете меньше, поэтому модели лучше знают английский. Нужна отдельная настройка.",
        },
        {
          q: "Понимает ли бот и латиницу, и кириллицу?",
          a: "При правильной настройке — да. Клиент пишет латиницей или кириллицей — бот понимает и отвечает. Tezcode настраивает ботов под обе письменности.",
        },
        {
          q: "Понимает ли бот смешанный узбекско-русский?",
          a: "Да. В Узбекистане часто смешивают узбекский и русский в одном предложении. Правильно настроенный бот понимает это естественно — и именно на это Tezcode делает особый упор.",
        },
        {
          q: "Что если бот ответит неправильно по-узбекски?",
          a: "Чтобы этого избежать, бот отвечает только по вашей базе и не выдумывает то, чего в ней нет. Если он не уверен — передаёт вопрос оператору. Тестируем на реальных диалогах и постоянно улучшаем качество.",
        },
        {
          q: "Кто делает узбекоязычный ИИ-чат-бот в Ташкенте?",
          a: "Tezcode — AI Software Factory в Ташкенте и резидент IT Park — создаёт ИИ-чат-ботов и агентов на узбекском и русском. Строим бота на основе ваших документов, отдельно настраиваем латиницу/кириллицу и смешанный язык. Подробнее: tezcode.dev/ru/ai-chatbot.",
        },
      ],
    },
    cta: {
      title: "Нужен ИИ, работающий на узбекском?",
      subtitle:
        "На бесплатной консультации Tezcode посмотрит ваш бизнес и определит, какую пользу даст ИИ-чат-бот или агент на uz/ru. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI / Uzbek language",
      title: "Does AI work in Uzbek? A full answer for chatbots and agents (2026)",
      subtitle:
        "Many businesses wonder: 'Does AI understand Uzbek?' The honest answer: modern AI works in Uzbek, but quality depends on tuning. Why off-the-shelf bots struggle with Uzbek and how to do it right — explained.",
      dateLabel: "August 15, 2026",
      readTime: "7 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "Yes, modern AI (GPT/Claude-class models) works in Uzbek — in both Latin and Cyrillic script, even with mixed Uzbek-Russian text. But quality depends on tuning: off-the-shelf foreign platforms (ManyChat, plain ChatGPT bots) understand Uzbek superficially and confuse the conversational style and domain terms. For a good result the bot must be tuned specifically to your content (price list, services, FAQs) in uz/ru and tested on real conversations. Tezcode builds bots tuned for Uzbek-Russian communication for businesses in Uzbekistan.",
    },
    sections: [
      {
        heading: "Why do off-the-shelf bots struggle with Uzbek?",
        paragraphs: [
          "Uzbek isn't easy for AI — for several reasons:",
        ],
        bullets: [
          "Two scripts: Uzbek is written in both Latin and Cyrillic. Many ready bots handle only one well.",
          "Code-switching: in Uzbekistan people write a mix of Uzbek and Russian in one sentence. This confuses AI.",
          "Conversational style: formal Uzbek and everyday speech differ. Ready bots often reply in a bookish way.",
          "Less data: there's far less Uzbek text online than English, so models know English better.",
        ],
      },
      {
        heading: "How does modern AI understand Uzbek?",
        paragraphs: [
          "GPT-4o and Claude-class large language models already know Uzbek well — they're multilingual. When tuned correctly:",
        ],
        bullets: [
          "It understands and replies in both Latin and Cyrillic.",
          "It handles a mixed (Uzbek-Russian) conversation naturally.",
          "It answers from your knowledge base (RAG) — not generic ChatGPT, but your prices and services.",
          "The conversational style is tunable — formal or friendly, to match your brand.",
        ],
      },
      {
        heading: "How is a good Uzbek-language bot built?",
        paragraphs: [
          "Just connecting a model isn't enough — quality is in the tuning. The right process:",
        ],
        bullets: [
          "Your base: price list, services and FAQs are turned into a uz/ru knowledge base.",
          "Separate tuning and constraints for Latin/Cyrillic and mixed language.",
          "Testing on real Uzbek conversations — find where the bot stumbles and fix it.",
          "A constraint so it doesn't invent what's not in the base — it hands off to an agent instead of answering wrong.",
        ],
      },
      {
        heading: "Tezcode's difference",
        paragraphs: [
          "Many in Tashkent build chatbots, but the Uzbek language is our focus:",
          "We build the bot from your documents in Uzbek and Russian, tune Latin/Cyrillic and mixed language separately, and test on real conversations. Off-the-shelf foreign platforms fail exactly here. More: AI chatbot (/ai-chatbot), AI agent (/ai-agent).",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Does AI work in Uzbek?",
          a: "Yes. Modern AI (GPT/Claude-class models) works in Uzbek — in Latin and Cyrillic, even with mixed Uzbek-Russian text. But quality depends on tuning: the bot must be tuned specifically to your base in uz/ru.",
        },
        {
          q: "Why do ready bots (ManyChat, plain ChatGPT) handle Uzbek poorly?",
          a: "They understand Uzbek superficially: they miss the Latin/Cyrillic difference, mixed language (Uzbek-Russian) and conversational style. There's less Uzbek text online, so models know English better. Dedicated tuning is needed.",
        },
        {
          q: "Does the bot understand both Latin and Cyrillic?",
          a: "When tuned correctly — yes. Whether the customer writes in Latin or Cyrillic, the bot understands and replies. Tezcode tunes bots for both scripts.",
        },
        {
          q: "Does the bot understand mixed Uzbek-Russian?",
          a: "Yes. In Uzbekistan people often write a mix of Uzbek and Russian in one sentence. A properly tuned bot understands this naturally — something Tezcode puts special focus on.",
        },
        {
          q: "What if the bot answers incorrectly in Uzbek?",
          a: "To prevent that, the bot only answers from your base and doesn't invent what isn't there. When unsure, it hands the question to an agent. We test on real conversations and continuously improve quality.",
        },
        {
          q: "Who builds an Uzbek-language AI chatbot in Tashkent?",
          a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — builds AI chatbots and agents in Uzbek and Russian. We build the bot from your documents and tune Latin/Cyrillic and mixed language separately. More: tezcode.dev/en/ai-chatbot.",
        },
      ],
    },
    cta: {
      title: "Need AI that works in Uzbek?",
      subtitle:
        "In a free consultation Tezcode will look at your business and determine how an Uzbek/Russian AI chatbot or agent can help. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
