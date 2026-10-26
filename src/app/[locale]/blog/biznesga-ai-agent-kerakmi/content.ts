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
        "Tadbirkorlar bilan gaplashganda eng ko'p eshitadigan savolimiz shu. Javob har doim ham \"ha\" emas.",
      dateLabel: "2026-yil 6-oktyabr",
      readTime: "6 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqasi",
      text:
        "Xodimlaringiz har kuni bir xil ishni qayta-qayta qilayotgan bo'lsa, agent kerak. Masalan, bir xil savollarga javob berish yoki Telegram'dagi buyurtmani qo'lda CRM'ga ko'chirish. Agar sizga faqat savollarga javob beradigan narsa kerak bo'lsa, oddiy chatbot yetadi, ortiqcha pul sarflamang. Agent $400 dan boshlanadi, oddiysi 1–2 haftada ishga tushadi.",
    },
    sections: [
      {
        heading: "Chatbot va agent: farqi nimada",
        paragraphs: [
          "Mijoz kechasi Telegram'ga \"shu mahsulot bormi, ertaga olib kelasizlarmi?\" deb yozdi, deylik. Chatbot \"ha, bor\" deb javob beradi va shu yerda to'xtaydi. Agent esa omborga qaraydi, buyurtmani ochadi, CRM'ga yozadi. Ertalab menejeringiz kelganda buyurtma tayyor turgan bo'ladi.",
          "Boshqacha aytganda, chatbot faqat gaplashadi, agent esa sizning dasturlaringiz ichida ishni ham qiladi. Bu AmoCRM, Bitrix24, 1C, Google Sheets yoki Click/Payme bo'lishi mumkin. Bu haqda alohida maqolamiz ham bor.",
        ],
        links: [
          { href: "/blog/ai-chatbot-va-ai-agent-farqi", label: "AI chatbot va AI agent farqi" },
        ],
      },
      {
        heading: "Sizga kerakligini qanday bilasiz",
        paragraphs: [
          "O'zingizga bir nechta savol bering. Menejeringiz kuniga necha marta \"narxi qancha\", \"yetkazib berasizlarmi\" degan savolga javob yozadi? Agar sanab bo'lmasa, bu birinchi belgi.",
          "Ikkinchisi: kechasi yoki yakshanba kuni yozgan mijozga kim javob beradi? Ko'pincha hech kim. Dushanba kuni yozsangiz, u allaqachon boshqa joydan olib bo'lgan bo'ladi.",
          "Uchinchisi buyurtmalar bilan bog'liq. Ular Telegram'dan CRM yoki 1C ga qo'lda ko'chirilsa, vaqti-vaqti bilan bittasi albatta esdan chiqadi.",
          "Yana ikkita belgi bor. Jiddiy xaridorni shunchaki so'rab qo'ygandan ajratishga hech kimning vaqti bo'lmasa. Yoki har hafta kimdir o'tirib bir xil hisobotni qo'lda yig'sa. Shulardan ikki-uchtasi sizda bor bo'lsa, agent haqida o'ylab ko'rsa bo'ladi.",
        ],
      },
      {
        heading: "Qachon kerak emas",
        paragraphs: [
          "Har kimga ham kerak emas, buni ochiq aytamiz. Kuniga besh-oltita murojaat kelsa va bitta menejer bemalol ulgursa, agent o'zini oqlamaydi.",
          "Faqat ko'p beriladigan savollarga javob kerak bo'lsa, chatbot yetadi, u ancha arzon. Yana bir holat: narxlar, qoldiq yoki mijozlar ro'yxati hech qayerda yozilmagan, hammasi bitta odamning boshida bo'lsa. Unda avval shuni tartibga keltirish kerak. Agent faqat bor tartibni tezlashtiradi, yo'q tartibni yaratib bera olmaydi.",
        ],
        links: [
          { href: "/ai-chatbot", label: "AI chatbot xizmati" },
        ],
      },
      {
        heading: "Qaysi ishlarda ko'proq foyda beradi",
        paragraphs: [
          "Eng yaxshi natija har kuni takrorlanadigan va qoidasi aniq ishlarda bo'ladi. Ko'pincha bu sotuv bo'limi: agent murojaatga darhol javob beradi, mijozdan kerakli narsani so'rab oladi va lidni menejerga tayyor holda uzatadi.",
          "Buyurtma qabul qilishda ham yaxshi ishlaydi: qoldiqni tekshiradi, narxni aytadi, to'lov havolasini yuboradi. Kecha-kunduz o'zbek va rus tilida javob berishi mumkin, qiyin savol kelsa odamga o'tkazadi. Har kuni ertalab sotuv yoki qoldiq bo'yicha qisqa hisobotni Telegram'ga tashlab turishi ham mumkin.",
        ],
      },
      {
        heading: "Qancha turadi",
        paragraphs: [
          "Biznes uchun agent $400 dan boshlanadi. Aniq narxni jarayonni ko'rmasdan aytish qiyin, chunki u agent nechta dasturga ulanishiga va qancha ish bajarishiga bog'liq.",
          "Oddiy agent 1–2 haftada tayyor bo'ladi. Bir nechta tizimga ulanadigan agentga 2–4 hafta ketadi. To'lov 30% oldindan, qolgani ish bosqichlari bo'yicha.",
          "Ko'pchilik oxirida bilib qoladigan bir narsa bor: agent ishlab turishi uchun AI model va server uchun har oy alohida to'lanadi. Bu summa murojaatlar soniga bog'liq, shuning uchun uni boshida hisoblab olgan yaxshi.",
        ],
        links: [
          { href: "/ai-agent", label: "AI agent yaratish xizmati" },
          { href: "/tariflar", label: "Tariflar va narxlar" },
        ],
      },
      {
        heading: "Qayerdan boshlash kerak",
        paragraphs: [
          "Hammasini birdan avtomatlashtirishga urinmang. Bitta ishni tanlang, masalan Telegram'dagi murojaatlarga javob berish. Qaysi dasturlardan foydalanayotganingizni yozib qo'ying.",
          "Boshida agentni shunday sozlash mumkinki, muhim ishni u faqat sizning ruxsatingiz bilan qiladi. Bir-ikki hafta kuzatasiz. Ishonch paydo bo'lgach, ruxsatni olib tashlaysiz va keyingi ishni qo'shasiz.",
        ],
        links: [
          { href: "/blog/biznes-uchun-ai-agent-yaratish", label: "AI agent qanday yaratiladi: 6 qadam" },
        ],
      },
    ],
    faq: {
      title: "Ko'p so'raladigan savollar",
      items: [
        {
          q: "Biznesimga AI agent kerakligini qanday bilaman?",
          a: "Xodimlaringiz har kuni bir xil ishni qo'lda qilsa, masalan bir xil savollarga javob bersa yoki buyurtmani CRM'ga ko'chirsa, agent foyda beradi. Murojaat kam bo'lsa yoki faqat savol-javob kerak bo'lsa, oddiy chatbot yetadi.",
        },
        {
          q: "Biznes uchun AI agent qancha turadi?",
          a: "$400 dan boshlanadi. Aniq narx agent nechta dasturga ulanishiga va qancha ish qilishiga bog'liq. AI model va server uchun har oy alohida to'lanadi, buni oldindan hisoblab beramiz. Birinchi 30 daqiqalik suhbat bepul.",
        },
        {
          q: "AI agent qancha vaqtda ishga tushadi?",
          a: "Oddiysi 1–2 haftada, bir nechta tizimga ulanadigani 2–4 haftada. Aniq muddatni ish kelishilgandan keyin yozma aytamiz.",
        },
        {
          q: "AI agent o'zbek tilida ishlaydimi?",
          a: "Ha. Mijoz o'zbekcha, ruscha yoki ikkalasini aralashtirib yozsa ham tushunadi. Ishga tushirishdan oldin uni sizning mijozlaringiz qanday yozsa, xuddi shunday xabarlar bilan sinab ko'ramiz.",
        },
        {
          q: "AI agent xato qilsa nima bo'ladi?",
          a: "Har bir suhbat va har bir amal yozib boriladi, xohlagan payt ko'rishingiz mumkin. Muhim ishlarni faqat sizning ruxsatingiz bilan qiladigan qilib sozlash mumkin. Qiyin savol kelsa, agent uni xodimga o'tkazadi. Kerak bo'lsa, istalgan payt to'xtatib qo'yasiz.",
        },
      ],
    },
    cta: {
      title: "Sizga agent kerakmi, yo'qmi, birga ko'rib chiqamiz",
      subtitle:
        "30 daqiqalik bepul suhbatda ishingizni ko'ramiz. Agent kerak bo'lmasa, shuni to'g'ridan-to'g'ri aytamiz.",
      button: "Telegram orqali bog'lanish",
      note: "Odatda bir necha soat ichida javob beramiz.",
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
