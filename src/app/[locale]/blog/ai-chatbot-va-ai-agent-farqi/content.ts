import type { ArticleContent } from "@/components/blog/types";

// Cluster article supporting the AI-agent pillar: "AI chatbot vs AI agent —
// what is the difference?". Written answer-first (TL;DR up top, question-style
// H2s, comparison, FAQ) so ChatGPT / Perplexity / Google AI Overviews can lift
// a clean, quotable answer for queries like "AI chatbot va AI agent farqi" and
// "chatbot vs agent". uz is the master; ru is a full translation; en included.
// Internally links to the pillar (/blog/biznes-uchun-ai-agent-yaratish) and the
// service pages /ai-agent and /ai-chatbot.
//
// Honesty rules respected: no fabricated client numbers, no fake testimonials.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI Agent / 2026",
      title: "AI chatbot va AI agent farqi nima? (2026 qo'llanma)",
      subtitle:
        "Chatbot gaplashadi, agent ish bajaradi — lekin bu nimani anglatadi? Farqni misollar bilan tushuntiramiz, qaysi biri sizning biznesingizga kerakligini aniqlashga yordam beramiz.",
      dateLabel: "2026-yil 17-iyun",
      readTime: "9 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "AI chatbot va AI agent o'rtasidagi asosiy farq — harakat qilish qobiliyatida. Chatbot savolga matn bilan javob beradi va shu yerda to'xtaydi (\"ha, bizda bor\"). AI agent esa javob berishdan tashqari amaliy vazifani bajaradi: ombordan qoldiqni tekshiradi, buyurtma yaratadi, ma'lumotni CRM yoki 1C ga yozadi va murakkab holatni odamga uzatadi. Sodda qilib: chatbot — gaplashadi, agent — ish bajaradi. Agar sizga faqat saytdagi savol-javob kerak bo'lsa — chatbot yetarli; agar buyurtma, integratsiya yoki real harakat kerak bo'lsa — AI agent kerak.",
    },
    sections: [
      {
        heading: "AI chatbot nima?",
        paragraphs: [
          "AI chatbot — bu foydalanuvchi bilan matn (yoki ovoz) orqali suhbatlashadigan dastur. Zamonaviy AI chatbot katta til modeli (GPT, Claude) asosida ishlaydi, shuning uchun u tayyor tugmalar emas, erkin matnni tushunadi va tabiiy javob beradi.",
          "Lekin chatbotning asosiy vazifasi — ma'lumot berish va suhbatlashish. U sizning ko'p uchraydigan savollaringizga javob beradi, mahsulot haqida gapiradi, ish vaqtini aytadi. Suhbat tugagach, u hech narsa \"bajarmaydi\" — ya'ni buyurtmani o'zi rasmiylashtirmaydi, tizimga yozmaydi.",
          "Tezcode chatbot yechimlari haqida batafsil ma'lumot tezcode.dev/ai-chatbot sahifasida.",
        ],
      },
      {
        heading: "AI agent nima?",
        paragraphs: [
          "AI agent — bu nafaqat javob beradigan, balki maqsadga erishish uchun amaliy vazifani oxirigacha bajaradigan dastur. U chatbotning barcha imkoniyatlariga ega, lekin ustiga harakat qiladi: tizimga yozadi, buyurtma yaratadi, hisob-faktura yuboradi, ma'lumotni bir tizimdan ikkinchisiga ko'chiradi.",
          "Texnik tilda buni \"tool calling\" (agent tashqi tizim funksiyalarini chaqiradi) va \"orkestratsiya\" (bir nechta qadamni ketma-ket bajarish) deb ataladi. Aynan shu agentni oddiy chatbotdan kuchliroq qiladi.",
          "AI agent qanday quriladi va biznesingizga mosligini bilish uchun batafsil pillar qo'llanmamizni o'qing: \"Toshkentda biznes uchun AI agent yaratish\" (/blog/biznes-uchun-ai-agent-yaratish). Xizmat sahifasi esa tezcode.dev/ai-agent.",
        ],
      },
      {
        heading: "Asosiy farq: gapirish va ish bajarish",
        paragraphs: [
          "Eng sodda farqni bitta misol bilan ko'rsatamiz. Mijoz \"sochlarim uchun shampun bormi va qancha turadi?\" deb so'rasa:",
        ],
        bullets: [
          "Chatbot: \"Ha, bizda shampunlar bor. Narxi 45 mingdan boshlanadi. Yana savolingiz bormi?\" — ya'ni ma'lumot beradi, lekin amal qilmaydi.",
          "AI agent: ombor bazasidan aniq mahsulotni va qoldiqni tekshiradi, narxini aytadi, mijoz xohlasa buyurtmani CRM ga kiritadi, manzil so'raydi va yetkazib berish bo'limiga signal yuboradi.",
          "Ya'ni chatbot suhbatning oxirida \"to'xtaydi\", agent esa suhbatni real natijaga (buyurtma, yozuv, vazifa) aylantiradi.",
        ],
      },
      {
        heading: "Taqqoslash jadvali: chatbot va agent",
        paragraphs: [
          "Quyida ikkalasining asosiy farqlari bir joyda:",
        ],
        bullets: [
          "Vazifa: chatbot — savolga javob beradi; agent — vazifani bajaradi.",
          "Tizim bilan ishlash: chatbot — odatda ulanmagan (faqat gaplashadi); agent — CRM, 1C, ombor, to'lov tizimiga ulanadi.",
          "Natija: chatbot — matn javobi; agent — buyurtma, yozuv, hisobot yoki xodimga vazifa.",
          "Murakkablik: chatbot — sodda va tez ishga tushadi; agent — ko'proq integratsiya va test talab qiladi.",
          "Narx: chatbot — odatda arzonroq; agent — ish hajmiga qarab qimmatroq, lekin ko'proq foyda beradi.",
          "Qachon mos: chatbot — oddiy FAQ va ma'lumot uchun; agent — buyurtma, avtomatizatsiya va real harakat uchun.",
        ],
      },
      {
        heading: "Qaysi biri sizning biznesingizga kerak?",
        paragraphs: [
          "Tanlovni soddalashtiramiz. Quyidagi savollarga javob bering:",
        ],
        bullets: [
          "Agar maqsadingiz faqat saytda yoki Telegram'da mijozlarning ko'p uchraydigan savollariga javob berish bo'lsa — AI chatbot yetarli.",
          "Agar agent ombor qoldig'ini tekshirishi, buyurtma rasmiylashtirishi yoki ma'lumotni CRM/1C ga yozishi kerak bo'lsa — sizga AI agent kerak.",
          "Agar siz hozir oddiy chatbotdan boshlab, keyin uni agentga o'stirishni xohlasangiz — bu ham mumkin: to'g'ri qurilgan tizimni bosqichma-bosqich kengaytirish mumkin.",
          "Ko'pchilik biznes uchun amaliy yo'l: chatbot sifatida boshlab (tez foyda), real ehtiyoj ko'ringach integratsiyalar qo'shib agentga o'tkazish.",
        ],
      },
      {
        heading: "Eng ko'p uchraydigan tushunmovchilik",
        paragraphs: [
          "Bozorda \"AI agent\" so'zi ko'pincha oddiy chatbotni qimmatroq sotish uchun ishlatiladi. Shuning uchun taklif olayotganda aniq so'rang: agent qaysi tizimlarga ulanadi va u real qanday harakat qiladi?",
          "Agar javob \"u savollarga javob beradi\" bo'lsa — bu chatbot, garchi \"agent\" deb atalsa ham. Haqiqiy agent har doim biror amalni bajaradi: yozadi, yaratadi yoki uzatadi. Bu farqni tushunish sizni ortiqcha to'lovdan saqlaydi.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI chatbot va AI agent o'rtasidagi asosiy farq nima?",
          a: "Asosiy farq — harakat qilish qobiliyatida. Chatbot savolga matn bilan javob beradi va to'xtaydi. AI agent esa javob berishdan tashqari amaliy vazifani bajaradi: ombor qoldig'ini tekshiradi, buyurtma yaratadi, ma'lumotni CRM yoki 1C ga yozadi va murakkab holatni odamga uzatadi. Sodda qilib: chatbot gaplashadi, agent ish bajaradi.",
        },
        {
          q: "Menga chatbot yetarlimi yoki AI agent kerakmi?",
          a: "Agar sizga faqat saytda yoki Telegram'da savol-javob kerak bo'lsa — chatbot yetarli. Agar agent ombor, buyurtma yoki CRM/1C bilan real ishlashi kerak bo'lsa — AI agent kerak. Ko'pchilik biznes chatbotdan boshlab, keyin uni agentga o'stiradi.",
        },
        {
          q: "AI chatbot ham GPT yoki Claude asosida ishlaydimi?",
          a: "Ha. Zamonaviy AI chatbot ham, AI agent ham GPT (OpenAI) yoki Claude (Anthropic) kabi katta til modeli asosida ishlaydi. Farq modelda emas, balki agentning tashqi tizimlarga ulanib amaliy harakat qila olishida.",
        },
        {
          q: "AI agent chatbotdan qimmatroqmi?",
          a: "Odatda ha, chunki agent qo'shimcha integratsiya va test talab qiladi (CRM, 1C, ombor, to'lov). Lekin u shuncha ko'p foyda beradi — buyurtmani o'zi rasmiylashtiradi, ma'lumotni avtomatik yozadi. Aniq narx ehtiyojga bog'liq; bepul konsultatsiyada baholanadi.",
        },
        {
          q: "Chatbotni keyin AI agentga aylantirsa bo'ladimi?",
          a: "Ha. To'g'ri arxitektura bilan qurilgan tizimni bosqichma-bosqich kengaytirish mumkin: avval savol-javob (chatbot), keyin integratsiyalar va amaliy vazifalar qo'shib agentga o'tkazish. Bu amaliy va xarajatni vaqtga taqsimlaydigan yo'l.",
        },
        {
          q: "AI agent o'zbek va rus tilida ishlaydimi?",
          a: "Ha. Zamonaviy modellar o'zbek va rus tilida, ko'pincha bitta suhbatda aralash, tabiiy ishlaydi. Tezcode chatbot va agentlarni aynan O'zbekiston bizneslari uchun uz/ru muloqotga sozlaydi va testdan o'tkazadi.",
        },
      ],
    },
    cta: {
      title: "Chatbot kerakmi yoki AI agent — bilmayapsizmi?",
      subtitle:
        "Tezcode jamoasi biznesingizni tahlil qilib, sizga chatbot yetarli ekanmi yoki AI agent kerakligini birga aniqlaydi. Bepul konsultatsiya oling.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "AI Agent / 2026",
      title: "В чём разница между ИИ-чат-ботом и ИИ-агентом? (руководство 2026)",
      subtitle:
        "Чат-бот разговаривает, агент выполняет работу — но что это значит? Объясняем разницу на примерах и помогаем понять, что именно нужно вашему бизнесу.",
      dateLabel: "17 июня 2026",
      readTime: "9 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "Главное отличие ИИ-чат-бота от ИИ-агента — в способности действовать. Чат-бот отвечает на вопрос текстом и на этом останавливается («да, у нас есть»). ИИ-агент же помимо ответа выполняет практическую задачу: проверяет остаток на складе, создаёт заказ, записывает данные в CRM или 1С и передаёт сложный случай человеку. Проще говоря: чат-бот разговаривает, агент выполняет работу. Если вам нужны только вопросы-ответы на сайте — чат-бота достаточно; если нужны заказы, интеграция или реальные действия — нужен ИИ-агент.",
    },
    sections: [
      {
        heading: "Что такое ИИ-чат-бот?",
        paragraphs: [
          "ИИ-чат-бот — это программа, которая общается с пользователем через текст (или голос). Современный ИИ-чат-бот работает на базе большой языковой модели (GPT, Claude), поэтому он понимает свободный текст, а не только готовые кнопки, и отвечает естественно.",
          "Но основная задача чат-бота — давать информацию и общаться. Он отвечает на ваши частые вопросы, рассказывает о товаре, называет часы работы. После завершения разговора он ничего не «выполняет» — то есть сам не оформляет заказ и не записывает в систему.",
          "Подробнее о решениях ИИ-чат-ботов Tezcode — на странице tezcode.dev/ai-chatbot.",
        ],
      },
      {
        heading: "Что такое ИИ-агент?",
        paragraphs: [
          "ИИ-агент — это программа, которая не просто отвечает, а доводит практическую задачу до конца ради достижения цели. Он обладает всеми возможностями чат-бота, но сверх того действует: записывает в систему, создаёт заказ, отправляет счёт, переносит данные из одной системы в другую.",
          "На техническом языке это называют «tool calling» (агент вызывает функции внешних систем) и «оркестрация» (выполнение нескольких шагов подряд). Именно это делает агента сильнее обычного чат-бота.",
          "Чтобы узнать, как строится ИИ-агент и подходит ли он вашему бизнесу, прочитайте наше подробное руководство: «Создание ИИ-агента для бизнеса в Ташкенте» (/blog/biznes-uchun-ai-agent-yaratish). Страница услуги — tezcode.dev/ai-agent.",
        ],
      },
      {
        heading: "Главное отличие: говорить или выполнять работу",
        paragraphs: [
          "Покажем самое простое отличие на одном примере. Если клиент спрашивает «есть ли шампунь для волос и сколько он стоит?»:",
        ],
        bullets: [
          "Чат-бот: «Да, у нас есть шампуни. Цена от 45 тысяч. Ещё вопросы?» — то есть даёт информацию, но не действует.",
          "ИИ-агент: проверяет конкретный товар и остаток по складской базе, называет цену, при желании клиента оформляет заказ в CRM, спрашивает адрес и подаёт сигнал в отдел доставки.",
          "То есть чат-бот «останавливается» в конце разговора, а агент превращает разговор в реальный результат (заказ, запись, задача).",
        ],
      },
      {
        heading: "Таблица сравнения: чат-бот и агент",
        paragraphs: [
          "Ниже основные отличия в одном месте:",
        ],
        bullets: [
          "Задача: чат-бот — отвечает на вопрос; агент — выполняет задачу.",
          "Работа с системами: чат-бот — обычно не подключён (только говорит); агент — подключается к CRM, 1С, складу, платёжной системе.",
          "Результат: чат-бот — текстовый ответ; агент — заказ, запись, отчёт или задача сотруднику.",
          "Сложность: чат-бот — прост и быстро запускается; агент — требует больше интеграции и тестирования.",
          "Цена: чат-бот — обычно дешевле; агент — дороже в зависимости от объёма работ, но даёт больше пользы.",
          "Когда подходит: чат-бот — для простого FAQ и информации; агент — для заказов, автоматизации и реальных действий.",
        ],
      },
      {
        heading: "Что из этого нужно вашему бизнесу?",
        paragraphs: [
          "Упростим выбор. Ответьте на следующие вопросы:",
        ],
        bullets: [
          "Если ваша цель — только отвечать на частые вопросы клиентов на сайте или в Telegram, достаточно ИИ-чат-бота.",
          "Если агент должен проверять остаток на складе, оформлять заказ или записывать данные в CRM/1С — вам нужен ИИ-агент.",
          "Если вы хотите начать с простого чат-бота, а затем вырастить его в агента — это тоже возможно: правильно построенную систему можно расширять поэтапно.",
          "Практический путь для большинства бизнесов: начать как чат-бот (быстрая польза), а когда проявится реальная потребность — добавить интеграции и перевести в агента.",
        ],
      },
      {
        heading: "Самое частое недопонимание",
        paragraphs: [
          "На рынке слово «ИИ-агент» часто используют, чтобы дороже продать обычный чат-бот. Поэтому, получая предложение, чётко спрашивайте: к каким системам подключается агент и что именно он реально делает?",
          "Если ответ «он отвечает на вопросы» — это чат-бот, даже если его называют «агентом». Настоящий агент всегда выполняет действие: записывает, создаёт или передаёт. Понимание этой разницы убережёт вас от переплаты.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "В чём главное отличие ИИ-чат-бота от ИИ-агента?",
          a: "Главное отличие — в способности действовать. Чат-бот отвечает на вопрос текстом и останавливается. ИИ-агент помимо ответа выполняет практическую задачу: проверяет остаток на складе, создаёт заказ, записывает данные в CRM или 1С и передаёт сложный случай человеку. Проще говоря: чат-бот разговаривает, агент выполняет работу.",
        },
        {
          q: "Мне достаточно чат-бота или нужен ИИ-агент?",
          a: "Если вам нужны только вопросы-ответы на сайте или в Telegram — достаточно чат-бота. Если агент должен реально работать со складом, заказами или CRM/1С — нужен ИИ-агент. Многие бизнесы начинают с чат-бота, а затем выращивают его в агента.",
        },
        {
          q: "ИИ-чат-бот тоже работает на базе GPT или Claude?",
          a: "Да. И современный ИИ-чат-бот, и ИИ-агент работают на базе большой языковой модели вроде GPT (OpenAI) или Claude (Anthropic). Разница не в модели, а в том, что агент подключается к внешним системам и может выполнять практические действия.",
        },
        {
          q: "ИИ-агент дороже чат-бота?",
          a: "Обычно да, потому что агент требует дополнительной интеграции и тестирования (CRM, 1С, склад, оплата). Но он и пользы даёт больше — сам оформляет заказ, автоматически записывает данные. Точная цена зависит от потребности; оценивается на бесплатной консультации.",
        },
        {
          q: "Можно ли потом превратить чат-бот в ИИ-агента?",
          a: "Да. Систему, построенную на правильной архитектуре, можно расширять поэтапно: сначала вопросы-ответы (чат-бот), затем добавить интеграции и практические задачи и перевести в агента. Это практичный путь, распределяющий затраты во времени.",
        },
        {
          q: "Работает ли ИИ-агент на узбекском и русском?",
          a: "Да. Современные модели естественно работают на узбекском и русском, часто вперемешку в одном разговоре. Tezcode настраивает и тестирует чат-боты и агентов именно под uz/ru-общение для бизнеса в Узбекистане.",
        },
      ],
    },
    cta: {
      title: "Не знаете, что нужно — чат-бот или ИИ-агент?",
      subtitle:
        "Команда Tezcode проанализирует ваш бизнес и вместе определит, достаточно ли вам чат-бота или нужен ИИ-агент. Получите бесплатную консультацию.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI Agent / 2026",
      title: "What is the difference between an AI chatbot and an AI agent? (2026 guide)",
      subtitle:
        "A chatbot talks, an agent does the work — but what does that mean? We explain the difference with examples and help you figure out what your business actually needs.",
      dateLabel: "June 17, 2026",
      readTime: "9 min read",
    },
    tldr: {
      label: "Short answer",
      text:
        "The main difference between an AI chatbot and an AI agent is the ability to act. A chatbot answers a question with text and stops there (\"yes, we have it\"). An AI agent, beyond answering, carries out a practical task: it checks stock in the warehouse, creates an order, writes data into a CRM or 1C, and hands a complex case to a human. Simply put: a chatbot talks, an agent does the work. If you only need Q&A on your website, a chatbot is enough; if you need orders, integration or real actions, you need an AI agent.",
    },
    sections: [
      {
        heading: "What is an AI chatbot?",
        paragraphs: [
          "An AI chatbot is software that talks with the user through text (or voice). A modern AI chatbot runs on a large language model (GPT, Claude), so it understands free text rather than just preset buttons and answers naturally.",
          "But the chatbot's main job is to give information and converse. It answers your common questions, talks about products, states your working hours. Once the conversation ends, it does not \"do\" anything — it does not place the order itself or write it into a system.",
          "More on Tezcode's AI chatbot solutions is on the tezcode.dev/ai-chatbot page.",
        ],
      },
      {
        heading: "What is an AI agent?",
        paragraphs: [
          "An AI agent is software that does not just answer but carries a practical task through to the end in order to reach a goal. It has all the capabilities of a chatbot, but on top of that it acts: it writes to a system, creates an order, sends an invoice, moves data from one system to another.",
          "In technical terms this is called \"tool calling\" (the agent calls functions in external systems) and \"orchestration\" (running several steps in sequence). This is exactly what makes an agent stronger than an ordinary chatbot.",
          "To learn how an AI agent is built and whether it fits your business, read our detailed pillar guide: \"Building an AI agent for business in Tashkent\" (/blog/biznes-uchun-ai-agent-yaratish). The service page is tezcode.dev/ai-agent.",
        ],
      },
      {
        heading: "The core difference: talking vs. doing the work",
        paragraphs: [
          "Let us show the simplest difference with one example. If a customer asks \"do you have shampoo for hair and how much is it?\":",
        ],
        bullets: [
          "Chatbot: \"Yes, we have shampoos. The price starts at 45 thousand. Any other questions?\" — that is, it gives information but does not act.",
          "AI agent: checks the specific product and stock balance against the inventory database, states the price, places the order in the CRM if the customer wants, asks for the address and signals the delivery team.",
          "So the chatbot \"stops\" at the end of the conversation, while the agent turns the conversation into a real result (an order, a record, a task).",
        ],
      },
      {
        heading: "Comparison table: chatbot vs. agent",
        paragraphs: [
          "Here are the main differences in one place:",
        ],
        bullets: [
          "Job: chatbot — answers a question; agent — carries out a task.",
          "Working with systems: chatbot — usually not connected (only talks); agent — connects to CRM, 1C, inventory, payment system.",
          "Result: chatbot — a text answer; agent — an order, a record, a report or a task for an employee.",
          "Complexity: chatbot — simple and launches quickly; agent — requires more integration and testing.",
          "Price: chatbot — usually cheaper; agent — more expensive depending on the workload, but delivers more value.",
          "When it fits: chatbot — for simple FAQ and information; agent — for orders, automation and real actions.",
        ],
      },
      {
        heading: "Which one does your business need?",
        paragraphs: [
          "Let us simplify the choice. Answer the following questions:",
        ],
        bullets: [
          "If your goal is only to answer customers' common questions on your website or Telegram, an AI chatbot is enough.",
          "If the agent must check stock balances, place orders or write data into CRM/1C, you need an AI agent.",
          "If you want to start with a simple chatbot and later grow it into an agent, that is possible too: a properly built system can be expanded in stages.",
          "The practical path for most businesses: start as a chatbot (quick value), then add integrations and move to an agent once a real need appears.",
        ],
      },
      {
        heading: "The most common misunderstanding",
        paragraphs: [
          "In the market, the word \"AI agent\" is often used to sell an ordinary chatbot at a higher price. So when you receive a proposal, ask clearly: which systems does the agent connect to, and what does it actually do?",
          "If the answer is \"it answers questions,\" it is a chatbot, even if it is called an \"agent.\" A real agent always performs an action: it writes, creates or hands off. Understanding this difference protects you from overpaying.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is the main difference between an AI chatbot and an AI agent?",
          a: "The main difference is the ability to act. A chatbot answers a question with text and stops. An AI agent, beyond answering, carries out a practical task: it checks stock in the warehouse, creates an order, writes data into a CRM or 1C, and hands a complex case to a human. Simply put: a chatbot talks, an agent does the work.",
        },
        {
          q: "Is a chatbot enough for me, or do I need an AI agent?",
          a: "If you only need Q&A on your website or Telegram, a chatbot is enough. If the agent must really work with your inventory, orders or CRM/1C, you need an AI agent. Many businesses start with a chatbot and then grow it into an agent.",
        },
        {
          q: "Does an AI chatbot also run on GPT or Claude?",
          a: "Yes. Both a modern AI chatbot and an AI agent run on a large language model like GPT (OpenAI) or Claude (Anthropic). The difference is not the model but the fact that the agent connects to external systems and can perform practical actions.",
        },
        {
          q: "Is an AI agent more expensive than a chatbot?",
          a: "Usually yes, because an agent requires additional integration and testing (CRM, 1C, inventory, payment). But it also delivers more value — it places the order itself and records data automatically. The exact price depends on the need and is assessed in a free consultation.",
        },
        {
          q: "Can a chatbot be turned into an AI agent later?",
          a: "Yes. A system built on the right architecture can be expanded in stages: first Q&A (chatbot), then add integrations and practical tasks and move it to an agent. This is a practical path that spreads the cost over time.",
        },
        {
          q: "Does an AI agent work in Uzbek and Russian?",
          a: "Yes. Modern models work naturally in Uzbek and Russian, often mixed within a single conversation. Tezcode tunes and tests chatbots and agents specifically for uz/ru communication for businesses in Uzbekistan.",
        },
      ],
    },
    cta: {
      title: "Not sure what you need — a chatbot or an AI agent?",
      subtitle:
        "The Tezcode team will analyze your business and determine together whether a chatbot is enough or you need an AI agent. Get a free consultation.",
      button: "Contact via Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
