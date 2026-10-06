import type { ArticleContent } from "@/components/blog/types";

// Answer-first article for the "need" intent: "ai agent kerak", "biznesim
// uchun ai agent kerak", "нужен ли AI агент бизнесу". The /ai-agent service
// page and the pillar guide cover "how to build / what it costs"; this page
// answers "do I need one at all", which is what AI Overviews quote for these
// queries. The TL;DR states the answer in the first sentences.
//
// Facts only from the site: $400 starting price, 1–2 / 2–4 week timelines,
// 30% upfront, free 30-minute consultation, model/API and hosting billed
// separately. No client numbers or savings claims.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI Agent / Qo'llanma",
      title: "Biznesingizga AI agent kerakmi? 5 ta belgi va narxlar (2026)",
      subtitle:
        "AI agent har bir biznesga kerak emas. Qachon u haqiqiy foyda beradi, qachon oddiy chatbot yetarli va qancha turishini oddiy tilda tushuntiramiz.",
      dateLabel: "2026-yil 6-oktyabr",
      readTime: "7 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Biznesingizga AI agent kerak, agar xodimlaringiz har kuni bir xil ishni qo'lda takrorlasa: bir xil savollarga javob berish, buyurtmani qabul qilib CRM yoki 1C ga yozish, lidlarni saralash, hisobot yig'ish. Sizga faqat savollarga javob beradigan yordamchi kerak bo'lsa, oddiy AI chatbot yetarli. Javobdan keyin amal kerak bo'lsa (buyurtma yaratish, tizimga yozish, xodimga vazifa berish), AI agent kerak. Toshkentdagi Tezcode'da biznes uchun maxsus AI agent $400 dan boshlanadi, oddiy agent 1–2 haftada ishga tushadi.",
    },
    sections: [
      {
        heading: "AI agent nima va u nima qiladi?",
        paragraphs: [
          "AI agent — sun'iy intellekt asosidagi raqamli xodim. U mijoz yoki xodim yozgan matnni tushunadi, javob beradi va eng muhimi, ishni oxirigacha bajaradi: CRM'ga lid kiritadi, ombordagi qoldiqni tekshiradi, buyurtma yaratadi, menejerga xabar yuboradi.",
          "Oddiy chatbot faqat gaplashadi. AI agent esa sizning tizimlaringizga (Telegram, AmoCRM, Bitrix24, 1C, Google Sheets, Click/Payme) ulanadi va ular ichida amal qiladi. Farqi batafsil alohida maqolada tushuntirilgan.",
        ],
        links: [
          { href: "/blog/ai-chatbot-va-ai-agent-farqi", label: "AI chatbot va AI agent farqi" },
        ],
      },
      {
        heading: "Biznesingizga AI agent kerakligining 5 ta belgisi",
        paragraphs: [
          "Quyidagilardan ikki-uchtasi sizga tanish bo'lsa, AI agent haqida o'ylash vaqti keldi:",
        ],
        bullets: [
          "Bir xil savollar kuniga o'nlab marta keladi: narx, yetkazib berish, ish vaqti, mahsulot bor-yo'qligi. Menejer vaqtining katta qismi shunga ketadi.",
          "Kechasi va dam olish kunlari yozgan mijozlar javobsiz qoladi, ertalab ular allaqachon raqobatchidan sotib olgan bo'ladi.",
          "Buyurtma yoki lid Telegram'dan qo'lda CRM yoki 1C ga ko'chiriladi, ba'zilari unutiladi.",
          "Lidlarning qaysi biri jiddiy, qaysi biri shunchaki so'rayotganini ajratishga vaqt yetmaydi.",
          "Har kuni yoki har hafta bir xil hisobot qo'lda yig'iladi: sotuv, qoldiq, xodimlar davomati.",
        ],
      },
      {
        heading: "Qachon AI agent kerak emas?",
        paragraphs: [
          "Halol javob: ba'zi bizneslarga hozircha AI agent shart emas. Pulni bekorga sarflamaslik uchun quyidagilarni tekshiring.",
        ],
        bullets: [
          "Murojaatlar kuniga bir nechta bo'lsa, ularni bitta menejer bemalol yopsa, agent o'zini oqlamaydi.",
          "Sizga faqat ko'p beriladigan savollarga javob kerak bo'lsa, arzonroq AI chatbot yetarli.",
          "Jarayonning o'zi tartibsiz bo'lsa (narxlar, qoldiq yoki mijozlar bazasi hech qayerda yozilmagan), avval tartib kerak. Agent tartibsiz jarayonni avtomatlashtira olmaydi.",
          "Har bir holat noyob va chuqur mutaxassis qarori talab qilsa, agent faqat yordamchi bo'ladi, odamning o'rnini bosmaydi.",
        ],
        links: [
          { href: "/ai-chatbot", label: "AI chatbot xizmati" },
        ],
      },
      {
        heading: "AI agent qaysi ishlarda eng ko'p foyda beradi?",
        paragraphs: [
          "Eng yaxshi natija takroriy, qoidasi aniq va tizimga yozilishi kerak bo'lgan ishlarda bo'ladi:",
        ],
        bullets: [
          "Sotuv agenti: Telegram yoki saytdagi murojaatga darhol javob beradi, mijozdan kerakli ma'lumotni so'raydi, lidni CRM'ga yozadi va menejerga uzatadi.",
          "Buyurtma agenti: qoldiqni tekshiradi, narxni aytadi, buyurtmani rasmiylashtiradi va to'lov havolasini yuboradi.",
          "Qo'llab-quvvatlash agenti: 24/7 savollarga o'zbek va rus tilida javob beradi, murakkab holatni odamga o'tkazadi.",
          "Hisobot agenti: ma'lumotlarni CRM, 1C yoki Google Sheets'dan yig'ib, kunlik yoki haftalik xulosani Telegram'ga yuboradi.",
        ],
      },
      {
        heading: "AI agent qancha turadi va qancha vaqtda tayyor bo'ladi?",
        paragraphs: [
          "Tezcode'da biznes uchun maxsus AI agent yaratish $400 dan boshlanadi. Aniq narx integratsiyalar soni va stsenariy murakkabligiga bog'liq va bepul konsultatsiyadan keyin yozma taklifda beriladi.",
          "Muddat: oddiy agent 1–2 hafta, bir nechta tizimga ulanadigan agent 2–4 haftada ishlaydigan MVP bo'ladi. To'lov 30% oldindan, qolgani bosqichlar bo'yicha.",
          "Bitta muhim nuqta: agent ishlashi uchun AI model (API) va server (hosting) xarajatlari alohida bo'ladi. Ular foydalanish hajmiga bog'liq va taklifda oldindan hisoblab beriladi.",
        ],
        links: [
          { href: "/ai-agent", label: "AI agent yaratish xizmati" },
          { href: "/tariflar", label: "Tariflar va narxlar" },
        ],
      },
      {
        heading: "AI agentni qanday boshlash kerak?",
        paragraphs: [
          "Eng xavfsiz yo'l — kichikdan boshlash:",
        ],
        bullets: [
          "Agent bajarishi kerak bo'lgan bitta aniq vazifani tanlang, masalan, Telegram'dagi murojaatlarga javob berib, lidni CRM'ga yozish.",
          "Qaysi tizimlardan foydalanishingizni yozib chiqing: CRM, 1C, Google Sheets, to'lov tizimi.",
          "Bepul 30 daqiqalik konsultatsiyada tayyor vosita yetarlimi yoki maxsus agent kerakmi, birga aniqlaymiz.",
          "Agentni avval \"odam tasdiqlaydi\" rejimida ishga tushiring: muhim amallarni u faqat sizning tasdig'ingiz bilan bajaradi. Natija ko'ringach, keyingi vazifani qo'shasiz.",
        ],
        links: [
          { href: "/blog/biznes-uchun-ai-agent-yaratish", label: "AI agent qanday yaratiladi: 6 qadam" },
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Biznesimga AI agent kerakligini qanday bilaman?",
          a: "Xodimlaringiz har kuni bir xil ishni qo'lda takrorlasa (bir xil savollarga javob, buyurtmani CRM yoki 1C ga yozish, lidlarni saralash, hisobot yig'ish), AI agent foyda beradi. Murojaatlar kam bo'lsa yoki faqat savol-javob kerak bo'lsa, oddiy AI chatbot yetarli.",
        },
        {
          q: "AI agent bilan AI chatbotning farqi nima?",
          a: "Chatbot savolga javob beradi va to'xtaydi. AI agent javobdan keyin amal ham qiladi: buyurtma yaratadi, ma'lumotni CRM yoki 1C ga yozadi, menejerga vazifa beradi. Sodda qilib: chatbot gaplashadi, agent ish bajaradi.",
        },
        {
          q: "Biznes uchun AI agent qancha turadi?",
          a: "Tezcode'da maxsus AI agent yaratish $400 dan boshlanadi. Aniq narx integratsiyalar va stsenariy murakkabligiga bog'liq. AI model (API) va hosting xarajatlari alohida bo'lib, taklifda oldindan hisoblanadi. Dastlabki 30 daqiqalik konsultatsiya bepul.",
        },
        {
          q: "AI agent qancha vaqtda ishga tushadi?",
          a: "Oddiy agent odatda 1–2 haftada, bir nechta tizimga ulanadigan agent 2–4 haftada ishlaydigan MVP sifatida tayyor bo'ladi. Aniq muddat stsenariy tasdiqlangach yozma beriladi.",
        },
        {
          q: "AI agent o'zbek tilida ishlaydimi?",
          a: "Ha. Zamonaviy AI modellar o'zbek va rus tilida, bitta suhbatda aralash bo'lsa ham tushunadi va javob beradi. Tezcode agentlarni O'zbekiston bizneslari uchun uz/ru muloqotga sozlaydi va sinovdan o'tkazadi.",
        },
        {
          q: "AI agent xato qilsa nima bo'ladi?",
          a: "Agentning barcha suhbatlari va amallari qayd etiladi. \"Odam tasdiqlaydi\" rejimida muhim amallar faqat sizning tasdig'ingiz bilan bajariladi, murakkab holatlar esa xodimga o'tkaziladi. Agentni istalgan paytda to'xtatib turish mumkin.",
        },
      ],
    },
    cta: {
      title: "Biznesingizga AI agent kerakmi — birga aniqlaymiz",
      subtitle:
        "Bepul 30 daqiqalik konsultatsiyada jarayoningizni ko'rib chiqamiz va AI agent foyda beradimi yoki oddiy chatbot yetarlimi, ochiq aytamiz.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "AI Agent / Руководство",
      title: "Нужен ли вашему бизнесу ИИ-агент? 5 признаков и цены (2026)",
      subtitle:
        "ИИ-агент нужен не каждому бизнесу. Простым языком объясняем, когда он действительно приносит пользу, когда хватит обычного чат-бота и сколько это стоит.",
      dateLabel: "6 октября 2026",
      readTime: "7 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "ИИ-агент нужен вашему бизнесу, если сотрудники каждый день вручную повторяют одну и ту же работу: отвечают на одинаковые вопросы, принимают заказы и переносят их в CRM или 1С, сортируют лиды, собирают отчёты. Если нужен только помощник, который отвечает на вопросы, достаточно обычного ИИ-чат-бота. Если после ответа нужно действие (создать заказ, записать данные, поставить задачу сотруднику), нужен ИИ-агент. В Tezcode (Ташкент) разработка ИИ-агента для бизнеса стоит от $400, простой агент запускается за 1–2 недели.",
    },
    sections: [
      {
        heading: "Что такое ИИ-агент и что он делает?",
        paragraphs: [
          "ИИ-агент — это цифровой сотрудник на основе искусственного интеллекта. Он понимает текст клиента или сотрудника, отвечает и, главное, доводит задачу до конца: заносит лид в CRM, проверяет остаток на складе, создаёт заказ, отправляет уведомление менеджеру.",
          "Обычный чат-бот только разговаривает. ИИ-агент подключается к вашим системам (Telegram, AmoCRM, Bitrix24, 1С, Google Sheets, Click/Payme) и действует внутри них. Подробнее о разнице — в отдельной статье.",
        ],
        links: [
          { href: "/blog/ai-chatbot-va-ai-agent-farqi", label: "Разница между чат-ботом и ИИ-агентом" },
        ],
      },
      {
        heading: "5 признаков того, что вашему бизнесу нужен ИИ-агент",
        paragraphs: [
          "Если вам знакомы два-три пункта из списка, пора задуматься об ИИ-агенте:",
        ],
        bullets: [
          "Одни и те же вопросы приходят десятки раз в день: цена, доставка, график работы, наличие товара. На это уходит большая часть времени менеджера.",
          "Клиенты, написавшие ночью или в выходные, остаются без ответа, а утром уже купили у конкурента.",
          "Заказы и лиды вручную переносятся из Telegram в CRM или 1С, часть из них теряется.",
          "Не хватает времени отделить серьёзные лиды от тех, кто просто спрашивает.",
          "Каждый день или неделю вручную собирается один и тот же отчёт: продажи, остатки, посещаемость сотрудников.",
        ],
      },
      {
        heading: "Когда ИИ-агент не нужен?",
        paragraphs: [
          "Честный ответ: некоторым бизнесам ИИ-агент пока не нужен. Чтобы не потратить деньги впустую, проверьте следующее.",
        ],
        bullets: [
          "Если обращений несколько в день и один менеджер спокойно их закрывает, агент не окупится.",
          "Если нужны только ответы на частые вопросы, хватит более дешёвого ИИ-чат-бота.",
          "Если сам процесс не упорядочен (цены, остатки или база клиентов нигде не записаны), сначала нужен порядок. Агент не автоматизирует хаос.",
          "Если каждый случай уникален и требует решения эксперта, агент будет только помощником, а не заменой человеку.",
        ],
        links: [
          { href: "/ai-chatbot", label: "Услуга ИИ-чат-бота" },
        ],
      },
      {
        heading: "Где ИИ-агент приносит больше всего пользы?",
        paragraphs: [
          "Лучший результат — в повторяющихся задачах с понятными правилами, результат которых нужно записать в систему:",
        ],
        bullets: [
          "Агент продаж: сразу отвечает на обращение в Telegram или на сайте, уточняет нужные данные, записывает лид в CRM и передаёт менеджеру.",
          "Агент заказов: проверяет остаток, называет цену, оформляет заказ и отправляет ссылку на оплату.",
          "Агент поддержки: 24/7 отвечает на узбекском и русском языках, сложные случаи передаёт человеку.",
          "Агент отчётов: собирает данные из CRM, 1С или Google Sheets и отправляет ежедневную или еженедельную сводку в Telegram.",
        ],
      },
      {
        heading: "Сколько стоит ИИ-агент и сколько времени занимает запуск?",
        paragraphs: [
          "В Tezcode разработка ИИ-агента для бизнеса стоит от $400. Точная цена зависит от количества интеграций и сложности сценария и фиксируется в письменном предложении после бесплатной консультации.",
          "Сроки: простой агент — 1–2 недели, агент с подключением к нескольким системам — рабочий MVP за 2–4 недели. Оплата: 30% предоплата, остальное по этапам.",
          "Важный момент: для работы агента отдельно оплачиваются ИИ-модель (API) и сервер (хостинг). Эти расходы зависят от объёма использования и заранее рассчитываются в предложении.",
        ],
        links: [
          { href: "/ai-agent", label: "Разработка ИИ-агента" },
          { href: "/tariflar", label: "Тарифы и цены" },
        ],
      },
      {
        heading: "С чего начать внедрение ИИ-агента?",
        paragraphs: [
          "Самый безопасный путь — начать с малого:",
        ],
        bullets: [
          "Выберите одну конкретную задачу для агента, например: отвечать на обращения в Telegram и записывать лид в CRM.",
          "Перечислите системы, которыми вы пользуетесь: CRM, 1С, Google Sheets, платёжная система.",
          "На бесплатной 30-минутной консультации вместе определим, хватит ли готового инструмента или нужен агент под заказ.",
          "Сначала запустите агента в режиме «подтверждает человек»: важные действия он выполняет только после вашего одобрения. Когда появится результат, добавите следующую задачу.",
        ],
        links: [
          { href: "/blog/biznes-uchun-ai-agent-yaratish", label: "Как создать ИИ-агента: 6 шагов" },
        ],
      },
    ],
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Как понять, нужен ли моему бизнесу ИИ-агент?",
          a: "Если сотрудники каждый день вручную повторяют одну и ту же работу (отвечают на одинаковые вопросы, переносят заказы в CRM или 1С, сортируют лиды, собирают отчёты), ИИ-агент принесёт пользу. Если обращений мало или нужны только ответы на вопросы, достаточно обычного ИИ-чат-бота.",
        },
        {
          q: "Чем ИИ-агент отличается от ИИ-чат-бота?",
          a: "Чат-бот отвечает на вопрос и на этом останавливается. ИИ-агент после ответа ещё и действует: создаёт заказ, записывает данные в CRM или 1С, ставит задачу менеджеру. Проще говоря: чат-бот разговаривает, агент выполняет работу.",
        },
        {
          q: "Сколько стоит ИИ-агент для бизнеса?",
          a: "В Tezcode разработка ИИ-агента стоит от $400. Точная цена зависит от интеграций и сложности сценария. Расходы на ИИ-модель (API) и хостинг оплачиваются отдельно и заранее рассчитываются в предложении. Первая 30-минутная консультация бесплатна.",
        },
        {
          q: "Сколько времени занимает запуск ИИ-агента?",
          a: "Простой агент обычно готов за 1–2 недели, агент с подключением к нескольким системам — рабочий MVP за 2–4 недели. Точный срок фиксируется письменно после утверждения сценария.",
        },
        {
          q: "Работает ли ИИ-агент на узбекском языке?",
          a: "Да. Современные ИИ-модели понимают узбекский и русский языки и отвечают на них, даже если они смешаны в одном диалоге. Tezcode настраивает и тестирует агентов для общения на uz/ru для бизнеса в Узбекистане.",
        },
        {
          q: "Что будет, если ИИ-агент ошибётся?",
          a: "Все диалоги и действия агента записываются. В режиме «подтверждает человек» важные действия выполняются только после вашего одобрения, а сложные случаи передаются сотруднику. Агента можно приостановить в любой момент.",
        },
      ],
    },
    cta: {
      title: "Нужен ли вашему бизнесу ИИ-агент — определим вместе",
      subtitle:
        "На бесплатной 30-минутной консультации разберём ваш процесс и честно скажем, принесёт ли пользу ИИ-агент или хватит обычного чат-бота.",
      button: "Написать в Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },
};
