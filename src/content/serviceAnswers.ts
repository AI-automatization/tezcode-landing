import type { ServiceLang, ServicePageCopy } from "@/components/service-page/types";

// "Short answers" blocks for the four priority services (uz + ru). Every
// figure here repeats what the service page and /tariflar already state —
// prices, timelines and channels must stay in sync with those pages.

type Answers = NonNullable<ServicePageCopy["answers"]>;
type ByLang = Partial<Record<ServiceLang, Answers>>;

const BADGE = { uz: "Qisqa javoblar", ru: "Коротко о главном" };

export const CHATBOT_TASHKENT_ANSWERS: ByLang = {
  uz: {
    badge: BADGE.uz,
    items: [
      {
        q: "Toshkentda biznes uchun chatbot yaratish qancha turadi?",
        a: "Tezcode'da AI chatbot yaratish $339 dan boshlanadi. CRM yoki 1C integratsiyasi qo'shilsa narx oshadi — aniq summani bepul konsultatsiyadan keyin yozma taklifda beramiz. To'lov: 30% oldindan.",
      },
      {
        q: "Chatbot necha kunda ishga tushadi?",
        a: "Oddiy FAQ yoki buyurtma boti 1–2 haftada tayyor bo'ladi. Bilim bazasi va CRM integratsiyali AI yordamchi 2–3 haftada ishlaydigan MVP bo'ladi, keyin real suhbatlar asosida sozlanadi.",
      },
      {
        q: "Chatbot qaysi kanallarda ishlaydi?",
        a: "Telegram, Instagram, WhatsApp va saytda. Bitta bot barcha kanalda javob beradi va murakkab savolni operatorga o'tkazadi.",
      },
      {
        q: "Bot o'zbek tilida javob beradimi?",
        a: "Ha, o'zbek va rus tilida. Mijoz bitta xabarda ikki tilni aralashtirib yozsa ham tushunadi.",
      },
      {
        q: "Chatbot va AI agentning farqi nima?",
        a: "Chatbot savolga javob beradi. AI agent esa amal ham bajaradi: buyurtmani rasmiylashtiradi, ma'lumotni CRM'ga yozadi va menejerga vazifa beradi.",
      },
    ],
  },
  ru: {
    badge: BADGE.ru,
    items: [
      {
        q: "Сколько стоит чат-бот для бизнеса в Ташкенте?",
        a: "Разработка ИИ-чат-бота в Tezcode — от $339 (≈ от 4 млн сум). С интеграцией CRM или 1С цена выше — точную сумму фиксируем в письменном предложении после бесплатной консультации. Оплата: 30% предоплата.",
      },
      {
        q: "За сколько дней можно запустить чат-бота?",
        a: "Простой FAQ- или заказной бот — за 1–2 недели. ИИ-ассистент с базой знаний и интеграцией CRM — рабочий MVP за 2–3 недели, затем донастройка на реальных диалогах.",
      },
      {
        q: "В каких каналах работает чат-бот?",
        a: "В Telegram, Instagram, WhatsApp и на сайте. Один бот отвечает во всех каналах и передаёт сложные вопросы оператору.",
      },
      {
        q: "Отвечает ли бот на узбекском языке?",
        a: "Да, на узбекском и русском — даже если клиент смешивает языки в одном сообщении.",
      },
      {
        q: "Чем чат-бот отличается от ИИ-агента?",
        a: "Чат-бот отвечает на вопросы. ИИ-агент ещё и действует: оформляет заказ, записывает данные в CRM и ставит задачу менеджеру.",
      },
    ],
  },
};

export const TELEGRAM_TASHKENT_ANSWERS: ByLang = {
  uz: {
    badge: BADGE.uz,
    items: [
      {
        q: "Toshkentda Telegram bot yaratish qancha turadi?",
        a: "Tezcode'da Telegram bot yaratish $279 dan boshlanadi. Click/Payme to'lov, katalog yoki CRM integratsiyasi qo'shilsa narx oshadi — aniq summani yozma taklifda beramiz. To'lov: 30% oldindan.",
      },
      {
        q: "Telegram bot necha kunda tayyor bo'ladi?",
        a: "Ishlaydigan bot 1–2 haftada tayyor bo'ladi: konsultatsiyada vazifani aniqlaymiz, keyin ssenariy va TZ, bot yig'iladi va Click/Payme, CRM yoki Google Sheets'ga ulanadi.",
      },
      {
        q: "Bot orqali to'lov qabul qilsa bo'ladimi?",
        a: "Ha, Click va Payme orqali. Mijoz buyurtma beradi va to'lovni to'g'ridan-to'g'ri Telegram ichida qiladi.",
      },
      {
        q: "Telegram ichida do'kon ochsa bo'ladimi?",
        a: "Ha, Telegram Mini App orqali: katalog, savatcha va buyurtma rasmiylashtirish alohida sayt yoki ilovasiz ishlaydi.",
      },
      {
        q: "Telegram botga AI kerakmi?",
        a: "Buyurtma, to'lov va eslatmalar uchun oddiy bot yetarli. Bot erkin matnni tushunib, savollarga javob berishi kerak bo'lsa, AI qatlamini qo'shamiz.",
      },
    ],
  },
  ru: {
    badge: BADGE.ru,
    items: [
      {
        q: "Сколько стоит Telegram-бот для бизнеса в Ташкенте?",
        a: "Разработка Telegram-бота в Tezcode — от $279 (≈ от 3,5 млн сум). С оплатой Click/Payme, каталогом или интеграцией CRM цена выше — точную сумму фиксируем в письменном предложении. Оплата: 30% предоплата.",
      },
      {
        q: "За сколько дней будет готов Telegram-бот?",
        a: "Рабочий бот — за 1–2 недели: на консультации определяем задачу, затем сценарий и ТЗ, сборка и подключение к Click/Payme, CRM или Google Sheets.",
      },
      {
        q: "Можно ли принимать оплату через бота?",
        a: "Да, через Click и Payme: клиент оформляет заказ и оплачивает прямо в Telegram.",
      },
      {
        q: "Можно ли сделать магазин внутри Telegram?",
        a: "Да, через Telegram Mini App: каталог, корзина и оформление заказа работают без отдельного сайта и приложения.",
      },
      {
        q: "Нужен ли Telegram-боту ИИ?",
        a: "Для заказов, оплаты и напоминаний достаточно обычного бота. ИИ-слой добавляем, когда бот должен понимать свободный текст и отвечать на вопросы.",
      },
    ],
  },
};

export const AI_AGENT_ANSWERS: ByLang = {
  uz: {
    badge: BADGE.uz,
    items: [
      {
        q: "Biznes uchun AI agent yaratish qancha turadi?",
        a: "Tezcode'da AI agent yaratish $400 dan boshlanadi. Narx integratsiyalar soni va ssenariy murakkabligiga bog'liq, bepul konsultatsiyadan keyin yozma taklifda beriladi. AI model (API) va hosting xarajatlari alohida.",
      },
      {
        q: "AI agent qancha vaqtda ishga tushadi?",
        a: "Oddiy agent 1–2 haftada, bir nechta tizimga ulanadigan agent 2–4 haftada ishlaydigan MVP bo'ladi.",
      },
      {
        q: "AI agent qaysi tizimlar bilan ishlaydi?",
        a: "Telegram, amoCRM, Bitrix24, 1C, POS tizimlari, Google Sheets, Click/Payme va saytingiz bilan. Tizimingizda API bo'lsa, unga ham ulaymiz.",
      },
      {
        q: "AI agent chatbotdan nimasi bilan farq qiladi?",
        a: "Chatbot savolga javob beradi. AI agent javobdan keyin amal qiladi: buyurtma yaratadi, CRM'ga yozadi va menejerga vazifa beradi.",
      },
      {
        q: "AI agent xato qilsa nima bo'ladi?",
        a: "Barcha suhbat va amallar qayd etiladi. \"Odam tasdiqlaydi\" rejimida muhim amallar faqat sizning roziligingiz bilan bajariladi, agentni istalgan paytda to'xtatish mumkin.",
      },
    ],
  },
  ru: {
    badge: BADGE.ru,
    items: [
      {
        q: "Сколько стоит ИИ-агент для бизнеса?",
        a: "Разработка ИИ-агента в Tezcode — от $400. Цена зависит от количества интеграций и сложности сценария и фиксируется в письменном предложении после бесплатной консультации. Расходы на ИИ-модель (API) и хостинг — отдельно.",
      },
      {
        q: "За какой срок запускается ИИ-агент?",
        a: "Простой агент — за 1–2 недели, агент с подключением к нескольким системам — рабочий MVP за 2–4 недели.",
      },
      {
        q: "С какими системами работает ИИ-агент?",
        a: "С Telegram, amoCRM, Bitrix24, 1С, POS-системами, Google Sheets, Click/Payme и вашим сайтом. Если у вашей системы есть API — подключим и её.",
      },
      {
        q: "Чем ИИ-агент отличается от чат-бота?",
        a: "Чат-бот отвечает на вопросы. ИИ-агент после ответа действует: создаёт заказ, записывает данные в CRM и ставит задачу менеджеру.",
      },
      {
        q: "Что будет, если ИИ-агент ошибётся?",
        a: "Все диалоги и действия агента записываются. В режиме «подтверждает человек» важные действия выполняются только после вашего одобрения, а агента можно остановить в любой момент.",
      },
    ],
  },
};

export const VIDEO_ANALYTICS_ANSWERS: ByLang = {
  uz: {
    badge: BADGE.uz,
    items: [
      {
        q: "AI video analitika qancha turadi?",
        a: "Bir martalik ulash $990 dan boshlanadi — bu obuna emas. Server, bulut yoki API kerak bo'lsa, ular alohida to'lanadi. Yakuniy narx kameralar soni va vazifalarga bog'liq.",
      },
      {
        q: "Mening kameralarim mos keladimi?",
        a: "RTSP yoki ONVIF qo'llab-quvvatlaydigan IP kameralar mos keladi, masalan Hikvision va Dahua. Odatda yangi kamera olish shart emas — bepul auditda modellar va burchaklarni tekshiramiz.",
      },
      {
        q: "AI video analitika nima qila oladi?",
        a: "Kirgan odamlarni sanaydi, yuz orqali davomatni yuritadi, kaska va himoya vositalarini nazorat qiladi, avtomobil raqamini taniydi (ANPR) va Telegram'ga ogohlantirish yuboradi.",
      },
      {
        q: "Tizim qancha vaqtda ishga tushadi?",
        a: "Bitta vazifa (masalan, kirishda odam sanash yoki ANPR) bir necha haftada ishga tushadi, keyin tizim bosqichma-bosqich kengaytiriladi.",
      },
      {
        q: "Video qayerda tahlil qilinadi?",
        a: "Sizning serveringizda (on-premise) yoki bulutda — maxfiylik talabi va byudjetga qarab tanlaymiz.",
      },
    ],
  },
  ru: {
    badge: BADGE.ru,
    items: [
      {
        q: "Сколько стоит ИИ-видеоаналитика?",
        a: "Разовое подключение — от $990 (≈ от 12 млн сум), это не подписка. Сервер, облачная обработка или API оплачиваются отдельно, если они нужны. Итоговая цена зависит от числа камер и задач.",
      },
      {
        q: "Подойдут ли мои камеры?",
        a: "Подходят IP-камеры с RTSP или ONVIF, например Hikvision и Dahua. Новые камеры обычно покупать не нужно — на бесплатном аудите проверяем модели и углы обзора.",
      },
      {
        q: "Что умеет ИИ-видеоаналитика?",
        a: "Считает посетителей, ведёт учёт посещаемости по лицу, контролирует каски и СИЗ, распознаёт номера авто (ANPR) и отправляет уведомления в Telegram.",
      },
      {
        q: "Сколько времени занимает запуск?",
        a: "Одна задача (например, подсчёт людей на входе или ANPR) запускается за несколько недель, затем систему расширяют поэтапно.",
      },
      {
        q: "Где обрабатывается видео?",
        a: "На вашем сервере (on-premise) или в облаке — выбираем по требованиям к конфиденциальности и бюджету.",
      },
    ],
  },
};
