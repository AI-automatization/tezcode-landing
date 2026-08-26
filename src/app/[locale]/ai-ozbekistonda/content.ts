import type { ServicePageContent } from "@/components/service-page/types";

// Country-level umbrella /ai-ozbekistonda — target queries: RU «внедрение ИИ в
// бизнес Узбекистан» / «ИИ для бизнеса Узбекистан» (aisolution.uz's
// /ai-dlya-biznesa currently wins these), uz "O'zbekistonda AI joriy qilish" /
// "sun'iy intellekt O'zbekiston". Existing pages are city-level
// (/ai-avtomatizatsiya/[city]) — this is the country-wide hub that links down
// to the city and service pages. RU copy is the PRIMARY target.
// FACTS RULE: only claims already published on the site / llms.txt are used
// (founded 2024, 16-person team, IT Park resident №6237, Google 5.0 (6 reviews),
// RAOS / WeWatch / ClinicaGo / WorkControl / Salomat AI, prices from /tariflar,
// case numbers from /case-studies). NO invented totals — competitor-style
// "120+ внедрений" counters are left as TODO placeholders below.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "O'zbekiston bo'ylab AI joriy qilish — Tezcode",
      title1: "O'zbekistonda biznesga",
      titleAccent: "AI joriy qilish",
      title2: "",
      subtitle:
        "O'zbekistonda AI joriy qilish — bu takroriy ishlarni (mijozga javob, hisobot, buyurtma qayd etish, kamera nazorati) sun'iy intellektga topshirib, jamoani asosiy ishga bo'shatish. Tezcode — Toshkentdagi AI Software Factory va IT Park Uzbekistan rasmiy rezidenti — AI agentlar, chatbotlar, jarayon avtomatizatsiyasi, AI video analitika va ovozli assistentlarni butun O'zbekiston bo'ylab joriy qiladi: yechimlar o'zbek (lotin va kiril), rus va ingliz tillarida ishlaydi, mavjud tizimlaringiz (1C, CRM, Telegram, Click/Payme) bilan integratsiya qilinadi.",
      // TODO(Sardor): real raqam qo'yish — nechta loyiha/joriy etish bo'lganini
      // trust satriga qo'shish (raqobatchi "120+ внедрений" deb yozadi).
      trust: "IT Park rezidenti (№6237) • 16 kishilik jamoa • Google reytingi 5.0 • Bepul 30 daqiqa konsultatsiya",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Nimalarni joriy qilamiz?",
    },
    capabilities: {
      badge: "Yo'nalishlar",
      title: "Biznesingizga nimani",
      titleAccent: "joriy qilamiz?",
      subtitle:
        "AI'ni O'zbekiston bozorining realligiga moslab joriy qilamiz: mijozlar Telegram'da yozadi, hisob 1C'da yuritiladi, muloqot o'zbek va rus tillarida ketadi — yechimlarimiz shu muhitda ishlashga qurilgan.",
      items: [
        { icon: "bot", title: "AI agentlar", desc: "O'zi qaror qabul qilib, vazifani boshidan oxirigacha bajaradigan AI agentlar: sotuv, lid saralash, mijoz xizmati, ichki avtomatizatsiya. Narx $400 dan." },
        { icon: "message-circle", title: "AI chatbotlar", desc: "Telegram, Instagram, WhatsApp va saytda 24/7 javob beradigan chatbot: narx, katalog, buyurtma holati — o'zbek va rus tillarida. Narx $339 dan." },
        { icon: "zap", title: "Jarayonlar avtomatizatsiyasi", desc: "Hisobot, ariza, hujjat aylanishini AI'ga topshirish: 3 soatlik hisobot 1 daqiqada tayyor, qo'lda kiritishdagi xatolar 90% gacha kamayadi." },
        { icon: "monitor", title: "AI video analitika", desc: "Mavjud kameralarni aqlli qilish: odam aniqlash va sanash, yuz orqali davomat, ish xavfsizligi (kaska/forma), avto raqam tanish (ANPR). Narx $990 dan." },
        { icon: "phone", title: "Ovozli assistentlar", desc: "Ovoz orqali gaplashadigan AI (STT → LLM → TTS): o'zimizning Salomat AI tibbiy assistentimiz aynan shu texnologiyada o'zbek va rus tillarida ishlaydi." },
        { icon: "link-2", title: "1C / CRM integratsiya", desc: "AI mavjud tizimlaringiz ichida ishlaydi: 1C, amoCRM, Bitrix24, Google Sheets, Click/Payme. CRM integratsiya xizmati $700 dan." },
      ],
    },
    tech: {
      badge: "Texnologiyalar",
      title: "Qanday texnologiyalar",
      titleAccent: "bilan quramiz?",
      subtitle:
        "Har loyihaga moda uchun emas, masalaga mos vosita tanlaymiz — O'zbekiston bozorida real ishlayotgan stack.",
      items: [
        { name: "OpenAI GPT-4o", desc: "Tabiiy tilni tushunish, mijoz bilan suhbat va murakkab matnli vazifalar uchun asosiy model." },
        { name: "Claude (Anthropic)", desc: "Uzun hujjatlar, shartnoma tahlili va ishonchli javob talab qilinadigan jarayonlar uchun." },
        { name: "LangChain / LangGraph", desc: "Ko'p qadamli avtomatlashtirish: vositalarni chaqirish, shartli oqimlar, bir nechta AI agentni birga ishlatish." },
        { name: "RAG (Retrieval-Augmented Generation)", desc: "AI sizning bazangiz — narxlar, hujjatlar, FAQ — asosida javob beradi, o'zidan to'qib chiqarmaydi." },
        { name: "Computer Vision (video analitika)", desc: "Odam aniqlash va sanash, yuz tanish, kaska/forma nazorati, ANPR — mavjud IP kameralar bilan." },
        { name: "Integratsiya (Telegram, 1C, CRM)", desc: "Telegram Bot API, amoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — AI mavjud tizimingiz ichida ishlaydi." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "AI joriy qilamiz",
      subtitle:
        "Birinchi 30 daqiqa bepul. Keyin har qadam yozma taklif, aniq narx va aniq muddat bilan boradi — O'zbekistonning istalgan shahridan onlayn boshlash mumkin.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "30 daqiqada biznesingizni o'rganamiz: qaysi ish eng ko'p vaqt olyapti, qayerda xato va kechikish ko'p. Toshkentda — ofisda, boshqa hududlardan — onlayn.", icon: "message-circle" },
        { num: "02", title: "AI audit + yozma taklif", desc: "Jarayonlaringizni ko'rib chiqamiz: nimani AI bajara oladi, qaysi tizimlar bilan integratsiya kerak. Natija — TZ, aniq narx va muddat. Narx TZ'dan keyin qat'iy.", icon: "search" },
        { num: "03", title: "MVP yaratish", desc: "2-4 hafta ichida ishlovchi birinchi versiya. Har hafta demo: real ma'lumotda sinab, fikr bildirasiz — yo'nalish erta to'g'rilanadi.", icon: "zap" },
        { num: "04", title: "Joriy etish + qo'llab-quvvatlash", desc: "Yechimni tizimlaringizga ulaymiz, jamoani o'rgatamiz, birinchi haftalarda birga kuzatamiz. Masofaviy qo'llab-quvvatlash butun O'zbekiston bo'ylab ishlaydi.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Sohalar",
      title: "Qaysi sohalarga",
      titleAccent: "AI joriy qilganmiz?",
      subtitle:
        "Tezcode AI'ni sotibgina qolmaydi — o'z mahsulotlarida (RAOS, ClinicaGo, Salomat AI, WorkControl) har kuni ishlatadi. Quyida real sohalar va real natijalar.",
      items: [
        { tag: "01", title: "Savdo va do'konlar", desc: "RAOS POS: kassa, ombor, hisobot bir joyda. Keys: Yunusabaddagi oziq-ovqat do'koni 30 kunda Excel'dan POS'ga o'tdi — oyiga ~800 ming so'm tejov." },
        { tag: "02", title: "Klinikalar va tibbiyot", desc: "ClinicaGo CRM (live) + Salomat AI. Keys: Mirzo Ulug'bekdagi klinikada navbat vaqti 40% qisqardi, kunlik bemor 32 tadan 45 taga oshdi." },
        { tag: "03", title: "Restoran va kafe", desc: "POS + AI chatbot (buyurtma, bron) + video analitika (zal nazorati) — restoran uchun alohida sahifamizda batafsil." },
        { tag: "04", title: "Salon va xizmat ko'rsatish", desc: "Onlayn bron boti, eslatmalar (kelmay qolishni kamaytiradi), mijozlar bazasi va sodiqlik dasturi." },
        { tag: "05", title: "Ta'lim markazlari", desc: "Lidlarni qayd etish va saralash, to'lov nazorati, ota-onalarga avtomatik xabarnoma — Telegram orqali." },
        { tag: "06", title: "Ishlab chiqarish va ofis", desc: "WorkControl xodim nazorati, AI video analitika (davomat, ish xavfsizligi), avtomatik hisobotlar." },
      ],
    },
    pricing: {
      badge: "Narxlar",
      title: "O'zbekistonda AI joriy qilish",
      titleAccent: "qancha turadi?",
      subtitle:
        "Yashirin to'lovlar yo'q: tayyor yechimlar narxi ochiq, individual loyiha narxi TZ tasdiqlangach qat'iy belgilanadi.",
      factors: [
        { title: "Tayyor AI yechimlar", price: "$279 dan", desc: "Telegram bot $279 dan, AI chatbot $339 dan, AI agent $400 dan, AI video analitika $990 dan — eng tez boshlanadigan yo'l." },
        { title: "Obuna tariflari", price: "$0 – $200/oy", desc: "Starter — $0 (kichik biznes uchun boshlang'ich imkoniyatlar), Pro — $200/oy (kengaytirilgan AI, 30 xodimgacha, 24/7 qo'llab-quvvatlash)." },
        { title: "Individual loyiha", price: "MVP $1000 dan", desc: "Jarayoningizga noldan quriladigan AI yechim: chuqur integratsiya (1C, CRM, to'lov tizimlari). Aniq narx TZ tasdiqlangach yoziladi." },
      ],
      note: "To'lov tartibi: 30% oldindan, qolgani bosqichma-bosqich. Konsultatsiya va dastlabki baholash bepul — O'zbekistonning istalgan hududidan.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Biznesingizga AI'ni",
      titleAccent: "birga joriy qilamizmi?",
      subtitle:
        "30 daqiqalik bepul konsultatsiyada qaysi jarayondan boshlash eng ko'p foyda berishini aniqlaymiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle:
        "O'zbekistonda AI joriy qilish haqida eng ko'p so'raladigan savollar — qisqa va aniq javoblar bilan.",
      items: [
        {
          q: "O'zbekistonda biznesga AI joriy qilish qancha turadi?",
          a: "Tayyor yechimlar: Telegram bot $279 dan, AI chatbot $339 dan, AI agent $400 dan, AI video analitika $990 dan, individual loyiha (MVP) $1000 dan. Obuna tariflari: Starter $0, Pro $200/oy. Aniq narx bepul konsultatsiya va TZ'dan keyin yozma taklifda beriladi. To'lov 30% oldindan, qolgani bosqichma-bosqich — yashirin qo'shimchalar yo'q.",
        },
        {
          q: "AI o'zbek tilida ishlaydimi?",
          a: "Ha. Tezcode yechimlari o'zbek (lotin va kiril), rus va ingliz tillarida ishlaydi — mijoz qaysi tilda yozsa, bot o'sha tilda javob beradi. O'zbekiston bozori uchun bu bizda standart talab: Salomat AI ovozli assistentimiz ham o'zbek va rus tillarida gaplashadi.",
        },
        {
          q: "AI joriy qilish qancha vaqt oladi?",
          a: "Oddiy avtomatlashtirish (Telegram bot, avtomatik hisobot) — 1-2 hafta. To'liqroq AI yechimning ishlovchi MVP versiyasi — 2-4 hafta. Har hafta demo ko'rsatamiz, natijani jarayonda kuzatib borasiz.",
        },
        {
          q: "O'zbekistonda AI joriy qilishni kim qiladi?",
          a: "Tezcode — Toshkentdagi AI Software Factory: 2024-yilda tashkil topgan, IT Park Uzbekistan rasmiy rezidenti (guvohnoma №6237), 16 kishilik jamoa, Google Business reytingi 5.0. Ishlab turgan mahsulotlar: RAOS (POS), ClinicaGo (klinika CRM), WeWatch, WorkControl. Manzil: Toshkent, Amir Temur shoh ko'chasi, 10. Telefon: +998 91 777 66 09.",
        },
        {
          q: "Qaysi shaharlarda ishlaysizlar?",
          a: "Ofisimiz Toshkentda, lekin butun O'zbekiston bo'ylab ishlaymiz: joriy etish va qo'llab-quvvatlash masofadan amalga oshiriladi. Toshkent va Samarqand uchun alohida sahifalarimiz bor; Buxoro, Andijon, Namangan, Farg'ona va boshqa hududlardan ham onlayn boshlash mumkin.",
        },
        {
          q: "Mavjud tizimlarimni (1C, CRM) almashtirish kerakmi?",
          a: "Yo'q. AI'ni mavjud ish oqimingiz ichiga joriy qilamiz: 1C, amoCRM, Bitrix24, Google Sheets, Telegram, Click/Payme bilan integratsiya quramiz. Maqsad — jamoani yangi dasturga majburlamasdan, hozirgi tizimlaringizni aqlli qilish.",
        },
        {
          q: "Nimadan boshlash kerak?",
          a: "30 daqiqalik bepul konsultatsiyadan. Unda qaysi takroriy jarayon eng ko'p vaqt olayotganini aniqlaymiz va qaysi AI yechim eng tez natija berishini aytamiz. Texnik bilim shart emas — jarayoningizni oddiy so'zlab bersangiz kifoya.",
        },
      ],
    },
    related: {
      badge: "Bog'liq sahifalar",
      title: "Xizmatlar va",
      titleAccent: "shaharlar bo'yicha",
      subtitle:
        "Har yo'nalish va yirik shaharlar uchun alohida sahifalarimiz bor — o'zingizga mosini tanlang.",
      links: [
        { href: "/ai-avtomatizatsiya", label: "AI avtomatlashtirish", desc: "Jarayonlarni AI bilan avtomatlashtirish — asosiy xizmat sahifasi." },
        { href: "/ai-agent", label: "AI agent yasash", desc: "O'zi qaror qabul qiladigan AI agentlar — sotuv, qo'llab-quvvatlash, ichki avtomatizatsiya." },
        { href: "/ai-chatbot", label: "AI chatbot", desc: "Telegram/Instagram/sayt uchun 24/7 AI chatbot — eng tez boshlanadigan yechim." },
        { href: "/ai-avtomatizatsiya/toshkent", label: "AI avtomatlashtirish — Toshkent", desc: "Poytaxtdagi bizneslar uchun AI avtomatlashtirish sahifasi." },
        { href: "/ai-avtomatizatsiya/samarqand", label: "AI avtomatlashtirish — Samarqand", desc: "Samarqanddagi bizneslar uchun AI avtomatlashtirish sahifasi." },
        { href: "/ai-chatbot/toshkent", label: "AI chatbot — Toshkent", desc: "Toshkent bizneslari uchun AI chatbot yasatish." },
      ],
    },
    updated: "Yangilangan: 2026-yil 26-avgust",
    service: {
      name: "O'zbekistonda biznesga AI joriy qilish — Tezcode",
      description:
        "Butun O'zbekiston bo'ylab biznesga AI joriy qilish: AI agentlar, chatbotlar, jarayon avtomatizatsiyasi, AI video analitika, ovozli assistentlar. O'zbek va rus tillarida, 1C/CRM integratsiyasi bilan. Tezcode — IT Park rezidenti, Toshkent.",
      serviceType: "AI joriy qilish / sun'iy intellekt yechimlari",
    },
  },

  ru: {
    hero: {
      badge: "Внедрение ИИ по всему Узбекистану — Tezcode",
      title1: "Внедрение ИИ в бизнес",
      titleAccent: "в Узбекистане",
      title2: "",
      subtitle:
        "Внедрение ИИ в бизнес в Узбекистане — это передача рутинных задач (ответы клиентам, отчёты, регистрация заказов, контроль по камерам) искусственному интеллекту, чтобы команда занималась главным. Tezcode — AI Software Factory в Ташкенте и официальный резидент IT Park Uzbekistan — внедряет AI-агентов, чат-ботов, автоматизацию процессов, AI-видеоаналитику и голосовых ассистентов по всей стране: решения работают на узбекском (латиница и кириллица), русском и английском и интегрируются с вашими системами — 1C, CRM, Telegram, Click/Payme.",
      // TODO(Sardor): real raqam qo'yish — количество реализованных внедрений
      // для trust-строки (у конкурента цитируется «120+ внедрений»).
      trust: "Резидент IT Park (№6237) • Команда 16 человек • Рейтинг Google 5.0 • Бесплатная 30-мин консультация",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что мы внедряем?",
    },
    capabilities: {
      badge: "Направления",
      title: "Что мы внедряем",
      titleAccent: "в ваш бизнес?",
      subtitle:
        "Мы внедряем ИИ с учётом реальности узбекистанского рынка: клиенты пишут в Telegram, учёт ведётся в 1C, общение идёт на узбекском и русском — наши решения построены именно под эту среду.",
      items: [
        { icon: "bot", title: "AI-агенты", desc: "Агенты, которые сами принимают решения и доводят задачу до конца: продажи, квалификация лидов, поддержка клиентов, внутренняя автоматизация. Цена от $400." },
        { icon: "message-circle", title: "AI-чат-боты", desc: "Чат-бот, отвечающий 24/7 в Telegram, Instagram, WhatsApp и на сайте: цены, каталог, статус заказа — на узбекском и русском. Цена от $339." },
        { icon: "zap", title: "Автоматизация процессов", desc: "Отчёты, заявки и документооборот передаются ИИ: отчёт, занимавший 3 часа, готов за 1 минуту, ошибки ручного ввода снижаются до 90%." },
        { icon: "monitor", title: "AI-видеоаналитика", desc: "Существующие камеры становятся умными: детекция и подсчёт людей, учёт посещаемости по лицам, охрана труда (каска/форма), распознавание автономеров (ANPR). Цена от $990." },
        { icon: "phone", title: "Голосовые ассистенты", desc: "ИИ, который разговаривает голосом (STT → LLM → TTS): наш медицинский ассистент Salomat AI работает именно на этой технологии на узбекском и русском." },
        { icon: "link-2", title: "Интеграция с 1C / CRM", desc: "ИИ работает внутри ваших систем: 1C, amoCRM, Bitrix24, Google Sheets, Click/Payme. Услуга CRM-интеграции от $700." },
      ],
    },
    tech: {
      badge: "Технологии",
      title: "На каких технологиях",
      titleAccent: "мы строим?",
      subtitle:
        "Для каждого проекта выбираем инструмент под задачу, а не под моду — стек, реально работающий на рынке Узбекистана.",
      items: [
        { name: "OpenAI GPT-4o", desc: "Основная модель для понимания естественного языка, диалога с клиентом и сложных текстовых задач." },
        { name: "Claude (Anthropic)", desc: "Для длинных документов, анализа договоров и процессов, где нужны надёжные, безопасные ответы." },
        { name: "LangChain / LangGraph", desc: "Многошаговая автоматизация: вызов инструментов, условные потоки, совместная работа нескольких AI-агентов." },
        { name: "RAG (Retrieval-Augmented Generation)", desc: "ИИ отвечает на основе вашей базы — цены, документы, FAQ — и не выдумывает от себя." },
        { name: "Computer Vision (видеоаналитика)", desc: "Детекция и подсчёт людей, распознавание лиц, контроль каски/формы, ANPR — на существующих IP-камерах." },
        { name: "Интеграция (Telegram, 1C, CRM)", desc: "Telegram Bot API, amoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — ИИ работает внутри вашей текущей системы." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "Внедряем ИИ",
      titleAccent: "за 4 шага",
      subtitle:
        "Первые 30 минут бесплатно. Дальше каждый шаг идёт с письменным предложением, точной ценой и сроком — начать можно онлайн из любого города Узбекистана.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "За 30 минут изучаем ваш бизнес: какая работа отнимает больше всего времени, где ошибки и задержки. В Ташкенте — в офисе, из других регионов — онлайн.", icon: "message-circle" },
        { num: "02", title: "ИИ-аудит + письменное предложение", desc: "Разбираем процессы: что может выполнять ИИ, с какими системами нужна интеграция. Результат — ТЗ, точная цена и срок. Цена фиксируется после ТЗ.", icon: "search" },
        { num: "03", title: "Создание MVP", desc: "За 2-4 недели — первая рабочая версия. Каждую неделю демо: вы тестируете на реальных данных и даёте обратную связь — курс корректируем рано.", icon: "zap" },
        { num: "04", title: "Внедрение + поддержка", desc: "Подключаем решение к вашим системам, обучаем команду, первые недели следим вместе. Удалённая поддержка работает по всему Узбекистану.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Отрасли",
      title: "В какие отрасли",
      titleAccent: "мы внедряем ИИ?",
      subtitle:
        "Tezcode не только продаёт ИИ — мы используем его в собственных продуктах (RAOS, ClinicaGo, Salomat AI, WorkControl) каждый день. Ниже реальные отрасли и реальные результаты.",
      items: [
        { tag: "01", title: "Торговля и магазины", desc: "RAOS POS: касса, склад и отчёты в одном месте. Кейс: продуктовый магазин в Юнусабаде за 30 дней перешёл с Excel на POS — экономия ~800 тыс. сумов в месяц." },
        { tag: "02", title: "Клиники и медицина", desc: "ClinicaGo CRM (live) + Salomat AI. Кейс: в клинике в Мирзо-Улугбекском районе время очереди сократилось на 40%, приём вырос с 32 до 45 пациентов в день." },
        { tag: "03", title: "Рестораны и кафе", desc: "POS + AI-чат-бот (заказы, бронь) + видеоаналитика (контроль зала) — подробно на отдельной странице для ресторанов." },
        { tag: "04", title: "Салоны и сфера услуг", desc: "Бот онлайн-записи, автонапоминания (снижают неявки), база клиентов и программа лояльности." },
        { tag: "05", title: "Учебные центры", desc: "Фиксация и квалификация лидов, контроль оплат, автоматические уведомления родителям — через Telegram." },
        { tag: "06", title: "Производство и офисы", desc: "Контроль сотрудников WorkControl, AI-видеоаналитика (посещаемость, охрана труда), автоматические отчёты." },
      ],
    },
    pricing: {
      badge: "Цены",
      title: "Сколько стоит внедрение ИИ",
      titleAccent: "в Узбекистане?",
      subtitle:
        "Никаких скрытых платежей: цены готовых решений открыты, стоимость индивидуального проекта фиксируется после утверждения ТЗ.",
      factors: [
        { title: "Готовые AI-решения", price: "от $279", desc: "Telegram-бот от $279, AI-чат-бот от $339, AI-агент от $400, AI-видеоаналитика от $990 — самый быстрый способ начать." },
        { title: "Подписочные тарифы", price: "$0 – $200/мес", desc: "Starter — $0 (стартовые возможности для малого бизнеса), Pro — $200/мес (продвинутый AI, до 30 сотрудников, поддержка 24/7)." },
        { title: "Индивидуальный проект", price: "MVP от $1000", desc: "ИИ-решение, построенное с нуля под ваш процесс: глубокая интеграция (1C, CRM, платёжные системы). Точная цена — после утверждения ТЗ." },
      ],
      note: "Порядок оплаты: 30% предоплата, остальное поэтапно. Консультация и первичная оценка бесплатны — из любого региона Узбекистана.",
    },
    cta: {
      badge: "Время начать",
      title: "Внедрим ИИ в ваш бизнес",
      titleAccent: "вместе?",
      subtitle:
        "На бесплатной 30-минутной консультации определим, с какого процесса начать, чтобы получить максимальную отдачу. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle:
        "Самые частые вопросы о внедрении ИИ в бизнес в Узбекистане — с короткими и конкретными ответами.",
      items: [
        {
          q: "Сколько стоит внедрение ИИ в Узбекистане?",
          a: "Готовые решения: Telegram-бот от $279, AI-чат-бот от $339, AI-агент от $400, AI-видеоаналитика от $990, индивидуальный проект (MVP) от $1000. Подписочные тарифы: Starter $0, Pro $200/мес. Точная цена даётся в письменном предложении после бесплатной консультации и ТЗ. Оплата: 30% предоплата, остальное поэтапно — без скрытых доплат.",
        },
        {
          q: "Работает ли AI на узбекском языке?",
          a: "Да. Решения Tezcode работают на узбекском (латиница и кириллица), русском и английском — бот отвечает на том языке, на котором пишет клиент. Для рынка Узбекистана это наш стандарт: голосовой ассистент Salomat AI тоже говорит на узбекском и русском.",
        },
        {
          q: "Сколько занимает внедрение ИИ?",
          a: "Простая автоматизация (Telegram-бот, автоматический отчёт) — 1-2 недели. Рабочий MVP более полного ИИ-решения — 2-4 недели. Каждую неделю показываем демо, поэтому вы видите результат в процессе, а не в последний день.",
        },
        {
          q: "Кто внедряет ИИ в бизнес в Узбекистане?",
          a: "Tezcode — AI Software Factory в Ташкенте: основана в 2024 году, официальный резидент IT Park Uzbekistan (свидетельство №6237), команда 16 человек, рейтинг Google Business 5.0. Работающие продукты: RAOS (POS), ClinicaGo (CRM для клиник, live), WeWatch, WorkControl. Адрес: Ташкент, проспект Амира Темура, 10. Телефон: +998 91 777 66 09.",
        },
        {
          q: "В каких городах Узбекистана вы работаете?",
          a: "Офис находится в Ташкенте, но работаем по всей стране: внедрение и поддержка выполняются удалённо. Для Ташкента и Самарканда есть отдельные страницы; из Бухары, Андижана, Намангана, Ферганы и других регионов можно начать онлайн.",
        },
        {
          q: "Нужно ли менять существующие системы (1C, CRM)?",
          a: "Нет. Мы внедряем ИИ внутрь вашего текущего рабочего потока: строим интеграции с 1C, amoCRM, Bitrix24, Google Sheets, Telegram и платёжными системами Click/Payme. Цель — сделать умными ваши нынешние системы, а не заставлять команду переучиваться.",
        },
        {
          q: "С чего начать внедрение ИИ?",
          a: "С бесплатной 30-минутной консультации. На ней определяем, какой повторяющийся процесс съедает больше всего времени, и говорим, какое ИИ-решение окупится быстрее всего. Технические знания не нужны — достаточно описать процесс простыми словами.",
        },
      ],
    },
    related: {
      badge: "Связанные страницы",
      title: "По услугам",
      titleAccent: "и городам",
      subtitle:
        "Для каждого направления и крупных городов есть отдельные страницы — выберите подходящую.",
      links: [
        { href: "/ai-avtomatizatsiya", label: "AI-автоматизация", desc: "Автоматизация процессов с помощью ИИ — основная страница услуги." },
        { href: "/ai-agent", label: "Создание AI-агентов", desc: "AI-агенты, которые сами принимают решения — продажи, поддержка, внутренняя автоматизация." },
        { href: "/ai-chatbot", label: "AI-чат-бот", desc: "AI-чат-бот 24/7 для Telegram/Instagram/сайта — самое быстрое решение для старта." },
        { href: "/ai-avtomatizatsiya/toshkent", label: "AI-автоматизация — Ташкент", desc: "Страница AI-автоматизации для бизнеса в столице." },
        { href: "/ai-avtomatizatsiya/samarqand", label: "AI-автоматизация — Самарканд", desc: "Страница AI-автоматизации для бизнеса в Самарканде." },
        { href: "/ai-chatbot/toshkent", label: "AI-чат-бот — Ташкент", desc: "Заказать AI-чат-бота для бизнеса в Ташкенте." },
      ],
    },
    updated: "Обновлено: 26 августа 2026",
    service: {
      name: "Внедрение ИИ в бизнес в Узбекистане — Tezcode",
      description:
        "Внедрение ИИ в бизнес по всему Узбекистану: AI-агенты, чат-боты, автоматизация процессов, AI-видеоаналитика, голосовые ассистенты. На узбекском и русском, с интеграцией 1C/CRM. Tezcode — резидент IT Park, Ташкент.",
      serviceType: "Внедрение ИИ / решения на основе искусственного интеллекта",
    },
  },

  en: {
    hero: {
      badge: "AI implementation across Uzbekistan — Tezcode",
      title1: "AI implementation for business",
      titleAccent: "in Uzbekistan",
      title2: "",
      subtitle:
        "AI implementation for business in Uzbekistan means handing repetitive work — customer replies, reports, order intake, camera monitoring — to artificial intelligence so your team can focus on what matters. Tezcode, an AI Software Factory in Tashkent and an official IT Park Uzbekistan resident, implements AI agents, chatbots, process automation, AI video analytics and voice assistants nationwide: solutions work in Uzbek (Latin and Cyrillic), Russian and English, and integrate with the systems you already run — 1C, CRM, Telegram, Click/Payme.",
      // TODO(Sardor): real raqam qo'yish — number of completed implementations
      // for the trust line (the competitor quotes "120+ implementations").
      trust: "IT Park resident (No. 6237) • 16-person team • Google rating 5.0 • Free 30-min consultation",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What do we implement?",
    },
    capabilities: {
      badge: "Directions",
      title: "What we implement",
      titleAccent: "in your business",
      subtitle:
        "We implement AI around the realities of the Uzbekistan market: customers write on Telegram, accounting lives in 1C, conversations happen in Uzbek and Russian — our solutions are built for exactly this environment.",
      items: [
        { icon: "bot", title: "AI agents", desc: "Agents that make decisions and complete tasks end to end: sales, lead qualification, customer support, internal automation. From $400." },
        { icon: "message-circle", title: "AI chatbots", desc: "A chatbot answering 24/7 on Telegram, Instagram, WhatsApp and your website: prices, catalogue, order status — in Uzbek and Russian. From $339." },
        { icon: "zap", title: "Process automation", desc: "Reports, requests and document flow handed to AI: a report that took 3 hours is ready in 1 minute, manual-entry errors drop by up to 90%." },
        { icon: "monitor", title: "AI video analytics", desc: "Your existing cameras become smart: people detection and counting, face-based attendance, safety compliance (helmet/uniform), licence-plate recognition (ANPR). From $990." },
        { icon: "phone", title: "Voice assistants", desc: "AI that talks (STT → LLM → TTS): our own medical assistant Salomat AI runs on exactly this technology in Uzbek and Russian." },
        { icon: "link-2", title: "1C / CRM integration", desc: "AI works inside your systems: 1C, amoCRM, Bitrix24, Google Sheets, Click/Payme. CRM integration service from $700." },
      ],
    },
    tech: {
      badge: "Technology",
      title: "What technology",
      titleAccent: "do we build with?",
      subtitle:
        "For every project we pick the tool for the problem, not for fashion — a stack that really works in the Uzbekistan market.",
      items: [
        { name: "OpenAI GPT-4o", desc: "The core model for natural-language understanding, customer conversations and complex text tasks." },
        { name: "Claude (Anthropic)", desc: "For long documents, contract analysis and processes that need reliable, safe answers." },
        { name: "LangChain / LangGraph", desc: "Multi-step automation: tool calling, conditional flows, orchestrating several AI agents together." },
        { name: "RAG (Retrieval-Augmented Generation)", desc: "AI answers from your knowledge base — prices, documents, FAQ — without making things up." },
        { name: "Computer Vision (video analytics)", desc: "People detection and counting, face recognition, helmet/uniform monitoring, ANPR — on existing IP cameras." },
        { name: "Integration (Telegram, 1C, CRM)", desc: "Telegram Bot API, amoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — AI works inside your current system." },
      ],
    },
    process: {
      badge: "How we work",
      title: "AI implemented",
      titleAccent: "in 4 steps",
      subtitle:
        "The first 30 minutes are free. After that every step comes with a written proposal, a fixed price and a clear timeline — you can start online from any city in Uzbekistan.",
      steps: [
        { num: "01", title: "Free consultation", desc: "In 30 minutes we study your business: which work eats the most time, where errors and delays pile up. In Tashkent — at our office; from other regions — online.", icon: "message-circle" },
        { num: "02", title: "AI audit + written proposal", desc: "We dig into your processes: what AI can run, which systems need integration. The result is a spec, an exact price and a timeline. The price is fixed after the spec.", icon: "search" },
        { num: "03", title: "Build the MVP", desc: "In 2-4 weeks — the first working version. Weekly demos: you test on real data and give feedback, so we correct course early.", icon: "zap" },
        { num: "04", title: "Rollout + support", desc: "We connect the solution to your systems, train your team and watch it together during the first weeks. Remote support covers all of Uzbekistan.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Industries",
      title: "Where we have",
      titleAccent: "implemented AI",
      subtitle:
        "Tezcode doesn't just sell AI — we use it in our own products (RAOS, ClinicaGo, Salomat AI, WorkControl) every day. Below are real industries and real results.",
      items: [
        { tag: "01", title: "Retail and stores", desc: "RAOS POS: register, inventory and reports in one place. Case: a grocery store in Yunusabad moved from Excel to POS in 30 days — saving ~800,000 UZS a month." },
        { tag: "02", title: "Clinics and healthcare", desc: "ClinicaGo CRM (live) + Salomat AI. Case: a clinic in the Mirzo-Ulugbek district cut queue time by 40% and grew from 32 to 45 patients a day." },
        { tag: "03", title: "Restaurants and cafes", desc: "POS + AI chatbot (orders, reservations) + video analytics (floor monitoring) — covered in detail on our restaurant page." },
        { tag: "04", title: "Salons and services", desc: "An online booking bot, auto-reminders (cutting no-shows), a customer base and a loyalty programme." },
        { tag: "05", title: "Education centres", desc: "Lead capture and qualification, payment tracking, automatic notifications to parents — via Telegram." },
        { tag: "06", title: "Manufacturing and offices", desc: "WorkControl employee monitoring, AI video analytics (attendance, workplace safety), automated reports." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "How much does AI implementation",
      titleAccent: "cost in Uzbekistan?",
      subtitle:
        "No hidden fees: ready-made solution prices are public, and the cost of a custom project is fixed after the spec is approved.",
      factors: [
        { title: "Ready-made AI solutions", price: "from $279", desc: "Telegram bot from $279, AI chatbot from $339, AI agent from $400, AI video analytics from $990 — the fastest way to start." },
        { title: "Subscription plans", price: "$0 – $200/mo", desc: "Starter — $0 (entry features for small business), Pro — $200/mo (advanced AI, up to 30 staff, 24/7 support)." },
        { title: "Custom project", price: "MVP from $1000", desc: "An AI solution built from scratch for your process: deep integration (1C, CRM, payment systems). The exact price is fixed after the spec." },
      ],
      note: "Payment terms: 30% upfront, the rest per stage. The consultation and initial assessment are free — from any region of Uzbekistan.",
    },
    cta: {
      badge: "Time to start",
      title: "Shall we implement AI",
      titleAccent: "in your business together?",
      subtitle:
        "In a free 30-minute consultation we identify which process to start with for the biggest payoff. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle:
        "The questions we hear most often about implementing AI in business in Uzbekistan — with short, concrete answers.",
      items: [
        {
          q: "How much does AI implementation cost in Uzbekistan?",
          a: "Ready-made solutions: Telegram bot from $279, AI chatbot from $339, AI agent from $400, AI video analytics from $990, custom project (MVP) from $1000. Subscription plans: Starter $0, Pro $200/mo. The exact figure comes in a written proposal after the free consultation and spec. Payment: 30% upfront, the rest per stage — no hidden extras.",
        },
        {
          q: "Does the AI work in Uzbek?",
          a: "Yes. Tezcode solutions work in Uzbek (Latin and Cyrillic), Russian and English — the bot answers in whatever language the customer writes in. For the Uzbekistan market this is our standard: our voice assistant Salomat AI also speaks Uzbek and Russian.",
        },
        {
          q: "How long does implementation take?",
          a: "Simple automation (a Telegram bot, an automated report) — 1-2 weeks. A working MVP of a fuller AI solution — 2-4 weeks. We demo weekly, so you watch the result take shape instead of waiting for the last day.",
        },
        {
          q: "Who implements AI for business in Uzbekistan?",
          a: "Tezcode — an AI Software Factory in Tashkent: founded in 2024, an official IT Park Uzbekistan resident (certificate No. 6237), a 16-person team, a 5.0 Google Business rating. Live products: RAOS (POS), ClinicaGo (clinic CRM), WeWatch, WorkControl. Address: 10 Amir Temur Avenue, Tashkent. Phone: +998 91 777 66 09.",
        },
        {
          q: "Which cities of Uzbekistan do you work in?",
          a: "Our office is in Tashkent, but we work nationwide: implementation and support are delivered remotely. Tashkent and Samarkand have dedicated pages; from Bukhara, Andijan, Namangan, Fergana and other regions you can start online.",
        },
        {
          q: "Do I need to replace my existing systems (1C, CRM)?",
          a: "No. We implement AI inside your current workflow: we build integrations with 1C, amoCRM, Bitrix24, Google Sheets, Telegram and the Click/Payme payment systems. The goal is to make your current systems smart, not to force your team onto new software.",
        },
        {
          q: "Where should I start?",
          a: "With a free 30-minute consultation. There we identify which repetitive process consumes the most time and tell you which AI solution will pay off fastest. No technical knowledge needed — describing your process in plain words is enough.",
        },
      ],
    },
    related: {
      badge: "Related pages",
      title: "By service",
      titleAccent: "and by city",
      subtitle:
        "Every direction and major city has its own page — pick the one that fits.",
      links: [
        { href: "/ai-avtomatizatsiya", label: "AI automation", desc: "Automating processes with AI — the main service page." },
        { href: "/ai-agent", label: "AI agent development", desc: "AI agents that make decisions on their own — sales, support, internal automation." },
        { href: "/ai-chatbot", label: "AI chatbot", desc: "A 24/7 AI chatbot for Telegram/Instagram/website — the fastest solution to start with." },
        { href: "/ai-avtomatizatsiya/toshkent", label: "AI automation — Tashkent", desc: "The AI automation page for businesses in the capital." },
        { href: "/ai-avtomatizatsiya/samarqand", label: "AI automation — Samarkand", desc: "The AI automation page for businesses in Samarkand." },
        { href: "/ai-chatbot/toshkent", label: "AI chatbot — Tashkent", desc: "Order an AI chatbot for a business in Tashkent." },
      ],
    },
    updated: "Updated: August 26, 2026",
    service: {
      name: "AI implementation for business in Uzbekistan — Tezcode",
      description:
        "AI implementation for business across Uzbekistan: AI agents, chatbots, process automation, AI video analytics, voice assistants. In Uzbek and Russian, with 1C/CRM integration. Tezcode — IT Park resident, Tashkent.",
      serviceType: "AI implementation / artificial intelligence solutions",
    },
  },

  ar: {
    hero: {
      badge: "تطبيق الذكاء الاصطناعي في كل أوزبكستان — Tezcode",
      title1: "تطبيق الذكاء الاصطناعي في الأعمال",
      titleAccent: "في أوزبكستان",
      title2: "",
      subtitle:
        "تطبيق الذكاء الاصطناعي في الأعمال في أوزبكستان يعني تسليم المهام المتكررة — الرد على العملاء، التقارير، تسجيل الطلبات، مراقبة الكاميرات — إلى الذكاء الاصطناعي ليتفرغ فريقك للأهم. Tezcode — مصنع برمجيات الذكاء الاصطناعي في طشقند ومقيم رسمي في IT Park Uzbekistan — يطبّق وكلاء AI وروبوتات المحادثة وأتمتة العمليات وتحليلات الفيديو والمساعدين الصوتيين في كل البلاد: تعمل الحلول بالأوزبكية والروسية والإنجليزية وتتكامل مع أنظمتك الحالية — 1C وCRM وTelegram وClick/Payme.",
      trust: "مقيم في IT Park (رقم 6237) • فريق من 16 شخصًا • تقييم Google ‏5.0 • استشارة 30 دقيقة مجانية",
      ctaPrimary: "اطلب استشارة مجانية",
      ctaSecondary: "ماذا نطبّق؟",
    },
    capabilities: {
      badge: "الاتجاهات",
      title: "ماذا نطبّق",
      titleAccent: "في عملك؟",
      subtitle:
        "نطبّق الذكاء الاصطناعي وفق واقع سوق أوزبكستان: العملاء يكتبون على Telegram، والمحاسبة في 1C، والتواصل بالأوزبكية والروسية — حلولنا مبنية لهذه البيئة بالضبط.",
      items: [
        { icon: "bot", title: "وكلاء AI", desc: "وكلاء يتخذون القرار وينجزون المهمة من البداية إلى النهاية: المبيعات، تأهيل العملاء المحتملين، الدعم، الأتمتة الداخلية. من 400$." },
        { icon: "message-circle", title: "روبوتات محادثة AI", desc: "روبوت يجيب على مدار الساعة في Telegram وInstagram وWhatsApp والموقع: الأسعار والكتالوج وحالة الطلب — بالأوزبكية والروسية. من 339$." },
        { icon: "zap", title: "أتمتة العمليات", desc: "التقارير والطلبات وتدفق المستندات تُسلَّم للذكاء الاصطناعي: تقرير كان يستغرق 3 ساعات يجهز في دقيقة، وأخطاء الإدخال اليدوي تقل حتى 90%." },
        { icon: "monitor", title: "تحليلات فيديو AI", desc: "كاميراتك الحالية تصبح ذكية: كشف وعدّ الأشخاص، حضور بالتعرف على الوجه، سلامة العمل (خوذة/زي)، التعرف على لوحات السيارات (ANPR). من 990$." },
        { icon: "phone", title: "مساعدون صوتيون", desc: "ذكاء اصطناعي يتحدث بالصوت (STT → LLM → TTS): مساعدنا الطبي Salomat AI يعمل بهذه التقنية بالأوزبكية والروسية." },
        { icon: "link-2", title: "تكامل 1C / CRM", desc: "يعمل الذكاء الاصطناعي داخل أنظمتك: 1C وamoCRM وBitrix24 وGoogle Sheets وClick/Payme. خدمة تكامل CRM من 700$." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "نطبّق الذكاء الاصطناعي",
      titleAccent: "في 4 خطوات",
      subtitle:
        "أول 30 دقيقة مجانية. ثم كل خطوة بعرض مكتوب وسعر ومدة محددين — يمكن البدء أونلاين من أي مدينة في أوزبكستان.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "في 30 دقيقة ندرس عملك: أي عمل يستهلك أكثر الوقت وأين تتراكم الأخطاء والتأخير. في طشقند — في المكتب، ومن المناطق الأخرى — أونلاين.", icon: "message-circle" },
        { num: "02", title: "تدقيق AI + عرض مكتوب", desc: "نحلل العمليات: ماذا يستطيع الذكاء الاصطناعي تنفيذه، وأي أنظمة تحتاج تكاملًا. النتيجة — مواصفات وسعر ومدة دقيقان. يُثبَّت السعر بعد المواصفات.", icon: "search" },
        { num: "03", title: "بناء MVP", desc: "خلال 2-4 أسابيع — أول نسخة عاملة. عرض أسبوعي: تجرّب على بيانات حقيقية وتعطي ملاحظات — نصحح المسار مبكرًا.", icon: "zap" },
        { num: "04", title: "التطبيق + الدعم", desc: "نربط الحل بأنظمتك وندرّب الفريق ونراقب معًا في الأسابيع الأولى. الدعم عن بُعد يغطي كل أوزبكستان.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "القطاعات",
      title: "في أي قطاعات",
      titleAccent: "طبّقنا الذكاء الاصطناعي؟",
      subtitle:
        "Tezcode لا يبيع الذكاء الاصطناعي فقط — بل يستخدمه يوميًا في منتجاته (RAOS وClinicaGo وSalomat AI وWorkControl). قطاعات حقيقية ونتائج حقيقية.",
      items: [
        { tag: "01", title: "التجارة والمتاجر", desc: "RAOS POS: الكاشير والمخزون والتقارير في مكان واحد. حالة: متجر بقالة في يونس-آباد انتقل من Excel إلى POS خلال 30 يومًا — توفير ~800 ألف سوم شهريًا." },
        { tag: "02", title: "العيادات والرعاية الصحية", desc: "ClinicaGo CRM (يعمل) + Salomat AI. حالة: عيادة في حي ميرزو-أولوغبيك قلّصت وقت الانتظار 40% وارتفع الاستقبال من 32 إلى 45 مريضًا يوميًا." },
        { tag: "03", title: "المطاعم والمقاهي", desc: "POS + روبوت AI (طلبات وحجوزات) + تحليلات فيديو (مراقبة الصالة) — التفاصيل على صفحة المطاعم." },
        { tag: "04", title: "الصالونات والخدمات", desc: "روبوت حجز أونلاين، تذكيرات تلقائية (تقلل الغياب)، قاعدة عملاء وبرنامج ولاء." },
        { tag: "05", title: "مراكز التعليم", desc: "تسجيل وتأهيل العملاء المحتملين، متابعة المدفوعات، إشعارات تلقائية لأولياء الأمور — عبر Telegram." },
        { tag: "06", title: "الإنتاج والمكاتب", desc: "مراقبة الموظفين WorkControl، تحليلات فيديو AI (الحضور وسلامة العمل)، تقارير تلقائية." },
      ],
    },
    pricing: {
      badge: "الأسعار",
      title: "كم يكلف تطبيق الذكاء الاصطناعي",
      titleAccent: "في أوزبكستان؟",
      subtitle:
        "لا رسوم خفية: أسعار الحلول الجاهزة معلنة، وسعر المشروع المخصص يُثبَّت بعد اعتماد المواصفات.",
      factors: [
        { title: "حلول AI جاهزة", price: "من 279$", desc: "روبوت Telegram من 279$، روبوت محادثة AI من 339$، وكيل AI من 400$، تحليلات فيديو AI من 990$ — أسرع طريقة للبدء." },
        { title: "خطط الاشتراك", price: "0$ – 200$/شهر", desc: "Starter — 0$ (إمكانيات أولية للأعمال الصغيرة)، Pro — 200$/شهر (AI متقدم، حتى 30 موظفًا، دعم 24/7)." },
        { title: "مشروع مخصص", price: "MVP من 1000$", desc: "حل ذكاء اصطناعي يُبنى من الصفر لعملياتك: تكامل عميق (1C، CRM، أنظمة الدفع). السعر النهائي بعد المواصفات." },
      ],
      note: "الدفع: 30% مقدمًا والباقي على مراحل. الاستشارة والتقييم الأولي مجانيان — من أي منطقة في أوزبكستان.",
    },
    cta: {
      badge: "وقت البدء",
      title: "هل نطبّق الذكاء الاصطناعي في عملك",
      titleAccent: "معًا؟",
      subtitle:
        "في استشارة مجانية مدتها 30 دقيقة نحدد العملية التي تعطي أكبر عائد للبدء بها. دون التزامات.",
      button: "راسلنا على Telegram",
      note: "أو اكتب إلى tezcode@tezcode.dev — تتواصل مباشرة مع بيكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة",
      titleAccent: "وأجوبة",
      subtitle:
        "أكثر الأسئلة تكرارًا عن تطبيق الذكاء الاصطناعي في الأعمال في أوزبكستان — بأجوبة قصيرة ومحددة.",
      items: [
        { q: "كم يكلف تطبيق الذكاء الاصطناعي في أوزبكستان؟", a: "حلول جاهزة: روبوت Telegram من 279$، روبوت محادثة AI من 339$، وكيل AI من 400$، تحليلات فيديو من 990$، مشروع مخصص (MVP) من 1000$. اشتراكات: Starter ‏0$، Pro ‏200$/شهر. السعر الدقيق في عرض مكتوب بعد الاستشارة المجانية والمواصفات. الدفع: 30% مقدمًا والباقي على مراحل." },
        { q: "هل يعمل الذكاء الاصطناعي بالأوزبكية؟", a: "نعم. تعمل حلول Tezcode بالأوزبكية (لاتينية وسيريلية) والروسية والإنجليزية — يجيب الروبوت باللغة التي يكتب بها العميل. مساعدنا الصوتي Salomat AI يتحدث الأوزبكية والروسية أيضًا." },
        { q: "كم يستغرق التطبيق؟", a: "أتمتة بسيطة (روبوت Telegram، تقرير تلقائي) — 1-2 أسبوع. نسخة MVP عاملة لحل أشمل — 2-4 أسابيع. نعرض تجريبيًا كل أسبوع فترى النتيجة أثناء العمل." },
        { q: "من يطبّق الذكاء الاصطناعي في الأعمال في أوزبكستان؟", a: "Tezcode — مصنع برمجيات الذكاء الاصطناعي في طشقند: تأسس 2024، مقيم رسمي في IT Park Uzbekistan (شهادة رقم 6237)، فريق من 16 شخصًا، تقييم Google ‏5.0. منتجات تعمل: RAOS وClinicaGo وWeWatch وWorkControl. الهاتف: ‎+998 91 777 66 09." },
        { q: "في أي مدن أوزبكستان تعملون؟", a: "مكتبنا في طشقند لكننا نعمل في كل البلاد: التطبيق والدعم عن بُعد. لطشقند وسمرقند صفحات مخصصة؛ ومن بخارى وأنديجان ونمنغان وفرغانة وغيرها يمكن البدء أونلاين." },
        { q: "هل يجب استبدال أنظمتي الحالية (1C، CRM)؟", a: "لا. نطبّق الذكاء الاصطناعي داخل تدفق عملك الحالي: تكامل مع 1C وamoCRM وBitrix24 وGoogle Sheets وTelegram وClick/Payme. الهدف جعل أنظمتك الحالية ذكية لا إجبار الفريق على برامج جديدة." },
        { q: "من أين أبدأ؟", a: "من استشارة مجانية مدتها 30 دقيقة: نحدد فيها العملية المتكررة الأكثر استهلاكًا للوقت ونخبرك أي حل يؤتي ثماره أسرع. لا حاجة لمعرفة تقنية — يكفي وصف عمليتك بكلمات بسيطة." },
      ],
    },
    related: {
      badge: "صفحات ذات صلة",
      title: "حسب الخدمة",
      titleAccent: "وحسب المدينة",
      subtitle: "لكل اتجاه وللمدن الكبرى صفحات مستقلة — اختر ما يناسبك.",
      links: [
        { href: "/ai-avtomatizatsiya", label: "أتمتة AI", desc: "أتمتة العمليات بالذكاء الاصطناعي — صفحة الخدمة الرئيسية." },
        { href: "/ai-agent", label: "بناء وكلاء AI", desc: "وكلاء AI يتخذون القرار بأنفسهم — المبيعات والدعم والأتمتة الداخلية." },
        { href: "/ai-chatbot", label: "روبوت محادثة AI", desc: "روبوت AI على مدار الساعة لـ Telegram/Instagram/الموقع — أسرع حل للبدء." },
        { href: "/ai-avtomatizatsiya/toshkent", label: "أتمتة AI — طشقند", desc: "صفحة أتمتة AI لأعمال العاصمة." },
        { href: "/ai-avtomatizatsiya/samarqand", label: "أتمتة AI — سمرقند", desc: "صفحة أتمتة AI لأعمال سمرقند." },
        { href: "/ai-chatbot/toshkent", label: "روبوت AI — طشقند", desc: "اطلب روبوت محادثة AI لعملك في طشقند." },
      ],
    },
    service: {
      name: "تطبيق الذكاء الاصطناعي في الأعمال في أوزبكستان — Tezcode",
      description:
        "تطبيق الذكاء الاصطناعي في الأعمال في كل أوزبكستان: وكلاء AI، روبوتات محادثة، أتمتة العمليات، تحليلات فيديو، مساعدون صوتيون. بالأوزبكية والروسية مع تكامل 1C/CRM. ‏Tezcode — مقيم IT Park، طشقند.",
      serviceType: "تطبيق الذكاء الاصطناعي / حلول الذكاء الاصطناعي",
    },
  },

  uk: {
    hero: {
      badge: "Впровадження ШІ по всьому Узбекистану — Tezcode",
      title1: "Впровадження ШІ в бізнес",
      titleAccent: "в Узбекистані",
      title2: "",
      subtitle:
        "Впровадження ШІ в бізнес в Узбекистані — це передача рутинних задач (відповіді клієнтам, звіти, реєстрація замовлень, контроль камер) штучному інтелекту, щоб команда займалася головним. Tezcode — AI Software Factory в Ташкенті та офіційний резидент IT Park Uzbekistan — впроваджує AI-агентів, чат-ботів, автоматизацію процесів, AI-відеоаналітику та голосових асистентів по всій країні: рішення працюють узбецькою (латиниця та кирилиця), російською й англійською та інтегруються з вашими системами — 1C, CRM, Telegram, Click/Payme.",
      trust: "Резидент IT Park (№6237) • Команда 16 людей • Рейтинг Google 5.0 • Безкоштовна 30-хв консультація",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що ми впроваджуємо?",
    },
    capabilities: {
      badge: "Напрями",
      title: "Що ми впроваджуємо",
      titleAccent: "у ваш бізнес?",
      subtitle:
        "Ми впроваджуємо ШІ з урахуванням реалій узбецького ринку: клієнти пишуть у Telegram, облік ведеться в 1C, спілкування йде узбецькою та російською — наші рішення побудовані саме під це середовище.",
      items: [
        { icon: "bot", title: "AI-агенти", desc: "Агенти, що самі ухвалюють рішення й доводять задачу до кінця: продажі, кваліфікація лідів, підтримка клієнтів, внутрішня автоматизація. Від $400." },
        { icon: "message-circle", title: "AI-чат-боти", desc: "Чат-бот, що відповідає 24/7 у Telegram, Instagram, WhatsApp і на сайті: ціни, каталог, статус замовлення — узбецькою та російською. Від $339." },
        { icon: "zap", title: "Автоматизація процесів", desc: "Звіти, заявки та документообіг передаються ШІ: звіт, що займав 3 години, готовий за 1 хвилину, помилки ручного введення знижуються до 90%." },
        { icon: "monitor", title: "AI-відеоаналітика", desc: "Наявні камери стають розумними: детекція та підрахунок людей, облік відвідуваності за обличчями, охорона праці (каска/форма), розпізнавання автономерів (ANPR). Від $990." },
        { icon: "phone", title: "Голосові асистенти", desc: "ШІ, що розмовляє голосом (STT → LLM → TTS): наш медичний асистент Salomat AI працює саме на цій технології узбецькою та російською." },
        { icon: "link-2", title: "Інтеграція з 1C / CRM", desc: "ШІ працює всередині ваших систем: 1C, amoCRM, Bitrix24, Google Sheets, Click/Payme. Послуга CRM-інтеграції від $700." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "Впроваджуємо ШІ",
      titleAccent: "за 4 кроки",
      subtitle:
        "Перші 30 хвилин безкоштовно. Далі кожен крок іде з письмовою пропозицією, точною ціною та строком — почати можна онлайн з будь-якого міста Узбекистану.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "За 30 хвилин вивчаємо ваш бізнес: яка робота забирає найбільше часу, де помилки й затримки. У Ташкенті — в офісі, з інших регіонів — онлайн.", icon: "message-circle" },
        { num: "02", title: "ШІ-аудит + письмова пропозиція", desc: "Розбираємо процеси: що може виконувати ШІ, з якими системами потрібна інтеграція. Результат — ТЗ, точна ціна і строк. Ціна фіксується після ТЗ.", icon: "search" },
        { num: "03", title: "Створення MVP", desc: "За 2-4 тижні — перша робоча версія. Щотижня демо: ви тестуєте на реальних даних і даєте зворотний зв'язок — курс коригуємо рано.", icon: "zap" },
        { num: "04", title: "Впровадження + підтримка", desc: "Підключаємо рішення до ваших систем, навчаємо команду, перші тижні стежимо разом. Віддалена підтримка працює по всьому Узбекистану.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Галузі",
      title: "У які галузі",
      titleAccent: "ми впроваджуємо ШІ?",
      subtitle:
        "Tezcode не лише продає ШІ — ми щодня використовуємо його у власних продуктах (RAOS, ClinicaGo, Salomat AI, WorkControl). Нижче реальні галузі та реальні результати.",
      items: [
        { tag: "01", title: "Торгівля та магазини", desc: "RAOS POS: каса, склад і звіти в одному місці. Кейс: продуктовий магазин у Юнусабаді за 30 днів перейшов з Excel на POS — економія ~800 тис. сумів на місяць." },
        { tag: "02", title: "Клініки та медицина", desc: "ClinicaGo CRM (live) + Salomat AI. Кейс: у клініці в Мірзо-Улугбецькому районі час черги скоротився на 40%, прийом зріс із 32 до 45 пацієнтів на день." },
        { tag: "03", title: "Ресторани та кафе", desc: "POS + AI-чат-бот (замовлення, бронь) + відеоаналітика (контроль залу) — детально на окремій сторінці для ресторанів." },
        { tag: "04", title: "Салони та сфера послуг", desc: "Бот онлайн-запису, автонагадування (знижують неявки), база клієнтів і програма лояльності." },
        { tag: "05", title: "Навчальні центри", desc: "Фіксація та кваліфікація лідів, контроль оплат, автоматичні сповіщення батькам — через Telegram." },
        { tag: "06", title: "Виробництво та офіси", desc: "Контроль співробітників WorkControl, AI-відеоаналітика (відвідуваність, охорона праці), автоматичні звіти." },
      ],
    },
    pricing: {
      badge: "Ціни",
      title: "Скільки коштує впровадження ШІ",
      titleAccent: "в Узбекистані?",
      subtitle:
        "Жодних прихованих платежів: ціни готових рішень відкриті, вартість індивідуального проєкту фіксується після затвердження ТЗ.",
      factors: [
        { title: "Готові AI-рішення", price: "від $279", desc: "Telegram-бот від $279, AI-чат-бот від $339, AI-агент від $400, AI-відеоаналітика від $990 — найшвидший спосіб почати." },
        { title: "Підписні тарифи", price: "$0 – $200/міс", desc: "Starter — $0 (стартові можливості для малого бізнесу), Pro — $200/міс (просунутий AI, до 30 співробітників, підтримка 24/7)." },
        { title: "Індивідуальний проєкт", price: "MVP від $1000", desc: "ШІ-рішення, побудоване з нуля під ваш процес: глибока інтеграція (1C, CRM, платіжні системи). Точна ціна — після затвердження ТЗ." },
      ],
      note: "Порядок оплати: 30% передоплата, решта поетапно. Консультація та первинна оцінка безкоштовні — з будь-якого регіону Узбекистану.",
    },
    cta: {
      badge: "Час почати",
      title: "Впровадимо ШІ у ваш бізнес",
      titleAccent: "разом?",
      subtitle:
        "На безкоштовній 30-хвилинній консультації визначимо, з якого процесу почати, щоб отримати максимальну віддачу. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті питання",
      title: "Питання та",
      titleAccent: "відповіді",
      subtitle:
        "Найчастіші питання про впровадження ШІ в бізнес в Узбекистані — з короткими та конкретними відповідями.",
      items: [
        { q: "Скільки коштує впровадження ШІ в Узбекистані?", a: "Готові рішення: Telegram-бот від $279, AI-чат-бот від $339, AI-агент від $400, AI-відеоаналітика від $990, індивідуальний проєкт (MVP) від $1000. Підписки: Starter $0, Pro $200/міс. Точна ціна — у письмовій пропозиції після безкоштовної консультації та ТЗ. Оплата: 30% передоплата, решта поетапно." },
        { q: "Чи працює AI узбецькою мовою?", a: "Так. Рішення Tezcode працюють узбецькою (латиниця та кирилиця), російською й англійською — бот відповідає тією мовою, якою пише клієнт. Голосовий асистент Salomat AI також говорить узбецькою та російською." },
        { q: "Скільки триває впровадження?", a: "Проста автоматизація (Telegram-бот, автоматичний звіт) — 1-2 тижні. Робочий MVP повнішого ШІ-рішення — 2-4 тижні. Щотижня показуємо демо, тож ви бачите результат у процесі." },
        { q: "Хто впроваджує ШІ в бізнес в Узбекистані?", a: "Tezcode — AI Software Factory в Ташкенті: заснована 2024 року, офіційний резидент IT Park Uzbekistan (свідоцтво №6237), команда 16 людей, рейтинг Google 5.0. Працюючі продукти: RAOS, ClinicaGo, WeWatch, WorkControl. Телефон: +998 91 777 66 09." },
        { q: "У яких містах Узбекистану ви працюєте?", a: "Офіс у Ташкенті, але працюємо по всій країні: впровадження та підтримка виконуються віддалено. Для Ташкента й Самарканда є окремі сторінки; з Бухари, Андижана, Намангана, Фергани та інших регіонів можна почати онлайн." },
        { q: "Чи потрібно міняти наявні системи (1C, CRM)?", a: "Ні. Ми впроваджуємо ШІ всередину вашого поточного робочого потоку: будуємо інтеграції з 1C, amoCRM, Bitrix24, Google Sheets, Telegram і платіжними системами Click/Payme. Мета — зробити розумними ваші нинішні системи." },
        { q: "З чого почати?", a: "З безкоштовної 30-хвилинної консультації. На ній визначаємо, який повторюваний процес з'їдає найбільше часу, і кажемо, яке ШІ-рішення окупиться найшвидше. Технічні знання не потрібні." },
      ],
    },
    related: {
      badge: "Пов'язані сторінки",
      title: "За послугами",
      titleAccent: "та містами",
      subtitle: "Для кожного напряму та великих міст є окремі сторінки — оберіть свою.",
      links: [
        { href: "/ai-avtomatizatsiya", label: "AI-автоматизація", desc: "Автоматизація процесів за допомогою ШІ — основна сторінка послуги." },
        { href: "/ai-agent", label: "Створення AI-агентів", desc: "AI-агенти, що самі ухвалюють рішення — продажі, підтримка, внутрішня автоматизація." },
        { href: "/ai-chatbot", label: "AI-чат-бот", desc: "AI-чат-бот 24/7 для Telegram/Instagram/сайту — найшвидше рішення для старту." },
        { href: "/ai-avtomatizatsiya/toshkent", label: "AI-автоматизація — Ташкент", desc: "Сторінка AI-автоматизації для бізнесу в столиці." },
        { href: "/ai-avtomatizatsiya/samarqand", label: "AI-автоматизація — Самарканд", desc: "Сторінка AI-автоматизації для бізнесу в Самарканді." },
        { href: "/ai-chatbot/toshkent", label: "AI-чат-бот — Ташкент", desc: "Замовити AI-чат-бота для бізнесу в Ташкенті." },
      ],
    },
    service: {
      name: "Впровадження ШІ в бізнес в Узбекистані — Tezcode",
      description:
        "Впровадження ШІ в бізнес по всьому Узбекистану: AI-агенти, чат-боти, автоматизація процесів, AI-відеоаналітика, голосові асистенти. Узбецькою та російською, з інтеграцією 1C/CRM. Tezcode — резидент IT Park, Ташкент.",
      serviceType: "Впровадження ШІ / рішення на основі штучного інтелекту",
    },
  },
};
