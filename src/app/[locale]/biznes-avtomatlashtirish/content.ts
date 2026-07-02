import type { ServicePageContent } from "@/components/service-page/types";

// Content for /biznes-avtomatlashtirish — target keyword: "biznes avtomatlashtirish" /
// "biznes jarayonlarini avtomatlashtirish" / "автоматизация бизнеса".
// Only confirmed Tezcode facts. No fabricated client counts or percentages.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "Biznes avtomatlashtirish — Tezcode",
      title1: "Biznes jarayonlarini",
      titleAccent: "avtomatlashtirish",
      title2: "",
      subtitle:
        "Qo'lda Excel, Telegram va qog'ozda olib boriladigan ishlarni bitta tizimga jamlaymiz. Hisobot, buyurtma, ombor, mijoz — barchasi avtomatik. Tezcode Software Factory.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov faqat MVP tayyor bo'lganda",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Nimani avtomatlashtiramiz?",
    },
    capabilities: {
      badge: "Yo'nalishlar",
      title: "Qaysi jarayonlarni",
      titleAccent: "avtomatlashtiramiz?",
      subtitle:
        "Vaqt va xato ko'p bo'ladigan har bir qo'l ish — avtomatlashtirishga arziydi. Eng ko'p so'raladiganlar.",
      items: [
        { icon: "bar-chart-2", title: "Hisobot va analitika", desc: "Savdo, xarajat, foyda bir joyda. Kunlik va oylik hisobot avtomatik tuziladi — Excel'ni qo'lda yangilash kerak emas." },
        { icon: "receipt", title: "Buyurtma va sotuv", desc: "Buyurtma qabul qilish, holatini kuzatish, mijozga avtomatik xabar. Hech bir buyurtma yo'qolmaydi yoki unutilmaydi." },
        { icon: "package", title: "Ombor va inventarizatsiya", desc: "Qoldiqni real vaqtda ko'rish, mahsulot tugaganda ogohlantirish, ta'minotchiga buyurtma eslatma." },
        { icon: "users", title: "Mijozlar (CRM)", desc: "Barcha mijoz tarixi, eslatmalar, takroriy sotuv. Mijoz kim, qachon nima olgani — bitta joyda." },
        { icon: "banknote", title: "Moliya va to'lovlar", desc: "Kirim-chiqim nazorati, to'lov eslatmalari, qarzdorlik hisobi. Pul oqimi shaffof ko'rinadi." },
        { icon: "link-2", title: "Integratsiya", desc: "Telegram, Google Sheets, 1C, to'lov tizimi, kassa — barchasini bitta avtomatik oqimga bog'laymiz." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "tartibli tizimga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Hozirgi ish jarayoningizni o'rganamiz: qaysi qadam ko'p vaqt oladi, qayerda xato chiqadi. Majburiyat yo'q.", icon: "message-circle" },
        { num: "02", title: "Jarayon auditi + taklif", desc: "Qaysi jarayonni avtomatlashtirish foydali — aniq reja, narx va muddat bilan yozma taklif.", icon: "search" },
        { num: "03", title: "MVP yaratish", desc: "2-4 hafta ichida ishlovchi tizim. Har hafta ko'rsatamiz, siz sinab fikr berasiz.", icon: "zap" },
        { num: "04", title: "Joriy etish + qo'llab-quvvatlash", desc: "Jamoangizni o'rgatamiz, tizimga ulaymiz, ishlashini kuzatamiz va yaxshilab boramiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qurgan",
      titleAccent: "tizimlar",
      subtitle: "Tezcode o'z mahsulotlarida biznesni avtomatlashtirgan — quyidagilar real ishlovchi misollar.",
      items: [
        { tag: "01", title: "RAOS — do'kon avtomatizatsiyasi", desc: "Kassa, ombor, mijoz CRM, hisobot bitta dasturda. Sotuv va qoldiq avtomatik hisoblanadi, qo'lda Excel to'ldirish yo'q." },
        { tag: "02", title: "AI Office — boshqaruvni avtomatlashtirish", desc: "12 bo'limli virtual ofis. Tezcode o'zi shu tizim bilan 14 dasturchi va ko'plab loyihani boshqaradi." },
        { tag: "03", title: "CoreMed — klinika jarayonlari", desc: "Qabul, jadval, hisobot va moliya bir tizimda. Tibbiy biznes uchun to'liq avtomatlashtirish." },
        { tag: "04", title: "Telegram orqali avtomatizatsiya", desc: "Buyurtma qabul qilish, eslatma, hisobotni Telegramga jo'natish — kichik biznes uchun arzon birinchi qadam." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Qaysi jarayon",
      titleAccent: "ko'p vaqtingizni oladi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada aniqlaymiz va birinchi qadamni rejalashtiramiz.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Biznes avtomatlashtirish haqida ko'p so'raladigan savollar.",
      items: [
        { q: "Biznes avtomatlashtirish nima?", a: "Biznes avtomatlashtirish — bu qo'lda bajariladigan takroriy ishlarni (hisobot, buyurtma, ombor nazorati, mijoz bilan aloqa) dasturiy tizim yordamida avtomatik bajartirish. Maqsad: vaqtni tejash, xatoni kamaytirish va real raqamlarni ko'rish." },
        { q: "Kichik biznesga ham kerakmi?", a: "Ha. Aynan kichik biznesda har bir soat qimmat. Telegram bot yoki avtomatik hisobot kabi arzon yechimdan boshlab, eng ko'p vaqt oladigan bitta jarayonni avtomatlashtirsangiz — natija darrov seziladi." },
        { q: "Tayyor dastur (Bitrix, AmoCRM) o'rniga nega buyurtma tizim?", a: "Tayyor SaaS universal — sizning o'ziga xos jarayoningizga 60% mos keladi, qolgani ortiqcha. Tezcode noldan sizning ish oqimingizga moslab quradi, shuning uchun tizim to'liq ishlatiladi." },
        { q: "Qancha vaqtda tayyor bo'ladi?", a: "Oddiy avtomatizatsiya — 1-2 hafta. To'liqroq tizim — 2-4 hafta MVP, keyin bosqichma-bosqich kengaytiriladi. Har hafta ishlovchi versiyani ko'rsatamiz." },
        { q: "Narxi qancha?", a: "Aniq narx faqat jarayon auditidan keyin beriladi, chunki har biznes har xil. Konsultatsiya bepul, to'lov esa faqat MVP tayyor bo'lganda boshlanadi." },
        { q: "Hozirgi tizimlarim (1C, kassa, Telegram) bilan ishlaydimi?", a: "Ha. Biz Telegram, Google Sheets, 1C, to'lov va kassa tizimlari bilan integratsiya quramiz, shunda avtomatizatsiya hozirgi ish oqimingiz ichida ishlaydi." },
      ],
    },
    service: {
      name: "Biznes avtomatlashtirish xizmati — Tezcode",
      description:
        "Biznes jarayonlarini avtomatlashtirish: hisobot, buyurtma, ombor, CRM, moliya va integratsiya. Buyurtma asosida tizim, Toshkent, O'zbekiston.",
      serviceType: "Biznes jarayonlarini avtomatlashtirish",
    },
  },

  ru: {
    hero: {
      badge: "Автоматизация бизнеса — Tezcode",
      title1: "Автоматизация",
      titleAccent: "бизнес-процессов",
      title2: "",
      subtitle:
        "Объединяем работу, которая ведётся вручную в Excel, Telegram и на бумаге, в одну систему. Отчёты, заказы, склад, клиенты — всё автоматически. Tezcode Software Factory.",
      trust: "Бесплатная 30-мин консультация • Оплата только после готового MVP",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что автоматизируем?",
    },
    capabilities: {
      badge: "Направления",
      title: "Какие процессы",
      titleAccent: "автоматизируем?",
      subtitle: "Любая ручная работа, где много времени и ошибок, заслуживает автоматизации. Самые частые запросы.",
      items: [
        { icon: "bar-chart-2", title: "Отчёты и аналитика", desc: "Продажи, расходы, прибыль в одном месте. Ежедневный и месячный отчёт строится автоматически — не нужно вручную обновлять Excel." },
        { icon: "receipt", title: "Заказы и продажи", desc: "Приём заказа, отслеживание статуса, автоуведомление клиенту. Ни один заказ не теряется и не забывается." },
        { icon: "package", title: "Склад и инвентаризация", desc: "Остатки в реальном времени, оповещение о заканчивающемся товаре, напоминание о заказе поставщику." },
        { icon: "users", title: "Клиенты (CRM)", desc: "Вся история клиента, напоминания, повторные продажи. Кто клиент, когда и что покупал — в одном месте." },
        { icon: "banknote", title: "Финансы и платежи", desc: "Контроль прихода-расхода, напоминания об оплате, учёт задолженности. Денежный поток прозрачен." },
        { icon: "link-2", title: "Интеграция", desc: "Telegram, Google Sheets, 1C, платёжная система, касса — соединяем всё в единый автоматический поток." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага к",
      titleAccent: "упорядоченной системе",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Изучаем текущий процесс: какой шаг отнимает время, где возникают ошибки. Без обязательств.", icon: "message-circle" },
        { num: "02", title: "Аудит процессов + предложение", desc: "Какой процесс выгодно автоматизировать — план, цена и срок в письменном виде.", icon: "search" },
        { num: "03", title: "Создание MVP", desc: "Рабочая система за 2-4 недели. Показываем каждую неделю, вы тестируете и даёте обратную связь.", icon: "zap" },
        { num: "04", title: "Внедрение + поддержка", desc: "Обучаем команду, подключаем к системе, следим за работой и улучшаем.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "Системы,",
      titleAccent: "которые мы построили",
      subtitle: "Tezcode автоматизировал бизнес в своих продуктах — вот реально работающие примеры.",
      items: [
        { tag: "01", title: "RAOS — автоматизация магазина", desc: "Касса, склад, CRM, отчёты в одной программе. Продажи и остатки считаются автоматически, без ручного Excel." },
        { tag: "02", title: "AI Office — автоматизация управления", desc: "Виртуальный офис из 12 отделов. Tezcode сам управляет с его помощью 14 разработчиками и множеством проектов." },
        { tag: "03", title: "CoreMed — процессы клиники", desc: "Приём, расписание, отчёты и финансы в одной системе. Полная автоматизация для медицинского бизнеса." },
        { tag: "04", title: "Автоматизация через Telegram", desc: "Приём заказов, напоминания, отправка отчётов в Telegram — недорогой первый шаг для малого бизнеса." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Какой процесс",
      titleAccent: "отнимает больше всего времени?",
      subtitle: "Определим на бесплатной 30-минутной консультации и спланируем первый шаг.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы об автоматизации бизнеса.",
      items: [
        { q: "Что такое автоматизация бизнеса?", a: "Автоматизация бизнеса — это выполнение повторяющейся ручной работы (отчёты, заказы, контроль склада, связь с клиентом) с помощью программной системы автоматически. Цель: экономить время, снижать ошибки и видеть реальные цифры." },
        { q: "Нужна ли она малому бизнесу?", a: "Да. Именно в малом бизнесе каждый час ценен. Начав с недорогого решения вроде Telegram-бота или автоматического отчёта и автоматизировав один самый затратный процесс, вы сразу почувствуете результат." },
        { q: "Зачем заказная система вместо готовой (Bitrix, AmoCRM)?", a: "Готовый SaaS универсален — он подходит вашему уникальному процессу примерно на 60%, остальное лишнее. Tezcode строит с нуля под ваш рабочий поток, поэтому система используется полностью." },
        { q: "Сколько времени занимает?", a: "Простая автоматизация — 1-2 недели. Более полная система — MVP за 2-4 недели, затем расширяется поэтапно. Каждую неделю показываем рабочую версию." },
        { q: "Сколько это стоит?", a: "Точная цена даётся только после аудита процессов, ведь бизнесы разные. Консультация бесплатна, оплата начинается только после готового MVP." },
        { q: "Работает ли с моими системами (1C, касса, Telegram)?", a: "Да. Мы строим интеграцию с Telegram, Google Sheets, 1C, платёжными и кассовыми системами, чтобы автоматизация работала внутри вашего текущего процесса." },
      ],
    },
    service: {
      name: "Услуга автоматизации бизнеса — Tezcode",
      description:
        "Автоматизация бизнес-процессов: отчёты, заказы, склад, CRM, финансы и интеграция. Система на заказ, Ташкент, Узбекистан.",
      serviceType: "Автоматизация бизнес-процессов",
    },
  },

  en: {
    hero: {
      badge: "Business automation — Tezcode",
      title1: "Business process",
      titleAccent: "automation",
      title2: "",
      subtitle:
        "We bring work that runs manually across Excel, Telegram and paper into one system. Reports, orders, inventory, customers — all automatic. Tezcode Software Factory.",
      trust: "Free 30-min consultation • You pay only after MVP is delivered",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What do we automate?",
    },
    capabilities: {
      badge: "Areas",
      title: "Which processes",
      titleAccent: "do we automate?",
      subtitle: "Any manual task with lots of time and errors is worth automating. The most requested ones.",
      items: [
        { icon: "bar-chart-2", title: "Reports & analytics", desc: "Sales, costs, profit in one place. Daily and monthly reports build automatically — no manual Excel updates." },
        { icon: "receipt", title: "Orders & sales", desc: "Take orders, track status, auto-notify the customer. No order is lost or forgotten." },
        { icon: "package", title: "Inventory", desc: "Real-time stock, low-stock alerts, reorder reminders to suppliers." },
        { icon: "users", title: "Customers (CRM)", desc: "Full customer history, reminders, repeat sales. Who the customer is, when and what they bought — in one place." },
        { icon: "banknote", title: "Finance & payments", desc: "Income-expense control, payment reminders, debt tracking. Cash flow becomes transparent." },
        { icon: "link-2", title: "Integration", desc: "Telegram, Google Sheets, 1C, payment gateways, POS — wired into one automated flow." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to an",
      titleAccent: "organised system",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We study your current process: which step eats time, where errors appear. No obligations.", icon: "message-circle" },
        { num: "02", title: "Process audit + proposal", desc: "Which process is worth automating — a clear plan, price and timeline in writing.", icon: "search" },
        { num: "03", title: "Build the MVP", desc: "A working system in 2-4 weeks. We demo weekly, you test and give feedback.", icon: "zap" },
        { num: "04", title: "Rollout + support", desc: "We train your team, connect it to your systems, monitor and keep improving.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "Systems",
      titleAccent: "we have built",
      subtitle: "Tezcode automated business in its own products — these are real, working examples.",
      items: [
        { tag: "01", title: "RAOS — store automation", desc: "Register, inventory, CRM, reports in one app. Sales and stock are calculated automatically, no manual Excel." },
        { tag: "02", title: "AI Office — management automation", desc: "A 12-department virtual office. Tezcode itself runs 14 developers and many projects with it." },
        { tag: "03", title: "CoreMed — clinic processes", desc: "Appointments, schedules, reports and finance in one system. Full automation for the medical business." },
        { tag: "04", title: "Automation via Telegram", desc: "Take orders, send reminders, push reports to Telegram — an affordable first step for small business." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Which process",
      titleAccent: "eats most of your time?",
      subtitle: "We'll figure it out in a free 30-minute consultation and plan the first step.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about business automation.",
      items: [
        { q: "What is business automation?", a: "Business automation means having a software system perform repetitive manual work (reports, orders, inventory control, customer communication) automatically. The goal: save time, reduce errors and see real numbers." },
        { q: "Does a small business need it?", a: "Yes. In a small business every hour is precious. Starting with an affordable solution like a Telegram bot or automated report and automating your single most time-consuming process, you feel the result immediately." },
        { q: "Why custom instead of ready tools (Bitrix, AmoCRM)?", a: "Off-the-shelf SaaS is generic — it fits your unique process about 60%, the rest is overhead. Tezcode builds from scratch around your workflow, so the system is fully used." },
        { q: "How long does it take?", a: "Simple automation — 1-2 weeks. A fuller system — an MVP in 2-4 weeks, then expanded step by step. We show a working version every week." },
        { q: "How much does it cost?", a: "An exact price comes only after the process audit, since businesses differ. The consultation is free, and you pay only once the MVP is delivered." },
        { q: "Will it work with my systems (1C, POS, Telegram)?", a: "Yes. We build integrations with Telegram, Google Sheets, 1C, payment and POS systems so the automation works inside your current process." },
      ],
    },
    service: {
      name: "Business automation service — Tezcode",
      description:
        "Business process automation: reports, orders, inventory, CRM, finance and integration. Custom-built system, Tashkent, Uzbekistan.",
      serviceType: "Business process automation",
    },
  },

  ar: {
    hero: {
      badge: "أتمتة الأعمال — Tezcode",
      title1: "أتمتة",
      titleAccent: "عمليات الأعمال",
      title2: "",
      subtitle:
        "نجمع العمل الذي يُدار يدوياً عبر Excel وTelegram والورق في نظام واحد. التقارير والطلبات والمخزون والعملاء — كل ذلك تلقائياً. Tezcode Software Factory.",
      trust: "استشارة 30 دقيقة مجانية • الدفع فقط بعد تسليم MVP",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا نؤتمت؟",
    },
    capabilities: {
      badge: "المجالات",
      title: "أي عمليات",
      titleAccent: "نؤتمت؟",
      subtitle: "أي عمل يدوي يستهلك الوقت ويكثر فيه الخطأ يستحق الأتمتة. الأكثر طلباً.",
      items: [
        { icon: "bar-chart-2", title: "التقارير والتحليلات", desc: "المبيعات والمصاريف والأرباح في مكان واحد. يُبنى التقرير اليومي والشهري تلقائياً — بلا تحديث يدوي لـ Excel." },
        { icon: "receipt", title: "الطلبات والمبيعات", desc: "استقبال الطلب، تتبع الحالة، إشعار تلقائي للعميل. لا يضيع أي طلب ولا يُنسى." },
        { icon: "package", title: "المخزون والجرد", desc: "أرصدة فورية، تنبيه عند نفاد المنتج، تذكير بإعادة الطلب للمورّد." },
        { icon: "users", title: "العملاء (CRM)", desc: "كل سجل العميل، التذكيرات، المبيعات المتكررة. من العميل ومتى وماذا اشترى — في مكان واحد." },
        { icon: "banknote", title: "المالية والمدفوعات", desc: "مراقبة الدخل والمصروف، تذكير بالدفع، حساب الديون. يصبح التدفق النقدي شفافاً." },
        { icon: "link-2", title: "التكامل", desc: "Telegram وGoogle Sheets و1C وبوابة الدفع ونقطة البيع — نربطها في تدفق تلقائي واحد." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "نظام منظم",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ندرس عمليتك الحالية: أي خطوة تستهلك الوقت، وأين تظهر الأخطاء. بلا التزام.", icon: "message-circle" },
        { num: "02", title: "تدقيق العمليات + عرض", desc: "أي عملية يستحق أتمتتها — خطة وسعر وموعد مكتوبة.", icon: "search" },
        { num: "03", title: "بناء MVP", desc: "نظام عامل خلال 2-4 أسابيع. نعرض كل أسبوع، وأنت تختبر وتعطي ملاحظات.", icon: "zap" },
        { num: "04", title: "التطبيق + الدعم", desc: "ندرّب فريقك، نربطه بأنظمتك، نراقب ونحسّن.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "أنظمة",
      titleAccent: "بنيناها",
      subtitle: "أتمتت Tezcode الأعمال في منتجاتها — هذه أمثلة عاملة حقيقية.",
      items: [
        { tag: "01", title: "RAOS — أتمتة المتجر", desc: "كاشير، مخزون، CRM، تقارير في تطبيق واحد. تُحسب المبيعات والأرصدة تلقائياً بلا Excel يدوي." },
        { tag: "02", title: "AI Office — أتمتة الإدارة", desc: "مكتب افتراضي بـ 12 قسماً. تدير Tezcode به 14 مطوراً ومشاريع كثيرة." },
        { tag: "03", title: "CoreMed — عمليات العيادة", desc: "المواعيد والجداول والتقارير والمالية في نظام واحد. أتمتة كاملة للأعمال الطبية." },
        { tag: "04", title: "أتمتة عبر Telegram", desc: "استقبال الطلبات، التذكيرات، إرسال التقارير إلى Telegram — خطوة أولى ميسورة للأعمال الصغيرة." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "أي عملية",
      titleAccent: "تستهلك معظم وقتك؟",
      subtitle: "سنحدد ذلك في استشارة مجانية مدتها 30 دقيقة ونخطط للخطوة الأولى.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن أتمتة الأعمال.",
      items: [
        { q: "ما هي أتمتة الأعمال؟", a: "أتمتة الأعمال تعني جعل نظام برمجي ينفّذ العمل اليدوي المتكرر (التقارير، الطلبات، مراقبة المخزون، التواصل مع العميل) تلقائياً. الهدف: توفير الوقت، تقليل الأخطاء، ورؤية أرقام حقيقية." },
        { q: "هل تحتاجها الأعمال الصغيرة؟", a: "نعم. في الأعمال الصغيرة كل ساعة ثمينة. بالبدء بحل ميسور مثل بوت Telegram أو تقرير تلقائي وأتمتة أكثر عملية تستهلك وقتك، تشعر بالنتيجة فوراً." },
        { q: "لماذا نظام مخصص بدل أدوات جاهزة (Bitrix، AmoCRM)؟", a: "الـ SaaS الجاهز عام — يناسب عمليتك الفريدة بنحو 60٪، والباقي زائد. تبني Tezcode من الصفر حول سير عملك، فيُستخدم النظام بالكامل." },
        { q: "كم يستغرق؟", a: "أتمتة بسيطة — 1-2 أسبوع. نظام أكمل — MVP خلال 2-4 أسابيع ثم يُوسّع تدريجياً. نعرض نسخة عاملة كل أسبوع." },
        { q: "كم التكلفة؟", a: "يُعطى السعر الدقيق بعد تدقيق العمليات فقط، لأن الأعمال تختلف. الاستشارة مجانية، والدفع يبدأ بعد تسليم MVP فقط." },
        { q: "هل يعمل مع أنظمتي (1C، نقطة البيع، Telegram)؟", a: "نعم. نبني تكاملاً مع Telegram وGoogle Sheets و1C وأنظمة الدفع ونقاط البيع لتعمل الأتمتة داخل عمليتك الحالية." },
      ],
    },
    service: {
      name: "خدمة أتمتة الأعمال — Tezcode",
      description:
        "أتمتة عمليات الأعمال: التقارير، الطلبات، المخزون، CRM، المالية والتكامل. نظام مبني حسب الطلب، طشقند، أوزبكستان.",
      serviceType: "أتمتة عمليات الأعمال",
    },
  },

  uk: {
    hero: {
      badge: "Автоматизація бізнесу — Tezcode",
      title1: "Автоматизація",
      titleAccent: "бізнес-процесів",
      title2: "",
      subtitle:
        "Об'єднуємо роботу, що ведеться вручну в Excel, Telegram і на папері, в одну систему. Звіти, замовлення, склад, клієнти — все автоматично. Tezcode Software Factory.",
      trust: "Безкоштовна 30-хв консультація • Оплата лише після готового MVP",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що автоматизуємо?",
    },
    capabilities: {
      badge: "Напрямки",
      title: "Які процеси",
      titleAccent: "автоматизуємо?",
      subtitle: "Будь-яка ручна робота, де багато часу й помилок, варта автоматизації. Найчастіші запити.",
      items: [
        { icon: "bar-chart-2", title: "Звіти та аналітика", desc: "Продажі, витрати, прибуток в одному місці. Щоденний і місячний звіт будується автоматично — не треба вручну оновлювати Excel." },
        { icon: "receipt", title: "Замовлення та продажі", desc: "Прийом замовлення, відстеження статусу, автосповіщення клієнту. Жодне замовлення не губиться і не забувається." },
        { icon: "package", title: "Склад та інвентаризація", desc: "Залишки в реальному часі, сповіщення про закінчення товару, нагадування про замовлення постачальнику." },
        { icon: "users", title: "Клієнти (CRM)", desc: "Уся історія клієнта, нагадування, повторні продажі. Хто клієнт, коли і що купував — в одному місці." },
        { icon: "banknote", title: "Фінанси та платежі", desc: "Контроль приходу-витрат, нагадування про оплату, облік заборгованості. Грошовий потік прозорий." },
        { icon: "link-2", title: "Інтеграція", desc: "Telegram, Google Sheets, 1C, платіжна система, каса — поєднуємо все в єдиний автоматичний потік." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "впорядкованої системи",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Вивчаємо поточний процес: який крок забирає час, де виникають помилки. Без зобов'язань.", icon: "message-circle" },
        { num: "02", title: "Аудит процесів + пропозиція", desc: "Який процес вигідно автоматизувати — план, ціна та термін письмово.", icon: "search" },
        { num: "03", title: "Створення MVP", desc: "Робоча система за 2-4 тижні. Показуємо щотижня, ви тестуєте і даєте відгук.", icon: "zap" },
        { num: "04", title: "Впровадження + підтримка", desc: "Навчаємо команду, підключаємо до системи, стежимо за роботою і покращуємо.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "Системи,",
      titleAccent: "які ми побудували",
      subtitle: "Tezcode автоматизував бізнес у своїх продуктах — ось реально працюючі приклади.",
      items: [
        { tag: "01", title: "RAOS — автоматизація магазину", desc: "Каса, склад, CRM, звіти в одному додатку. Продажі та залишки рахуються автоматично, без ручного Excel." },
        { tag: "02", title: "AI Office — автоматизація управління", desc: "Віртуальний офіс із 12 відділів. Tezcode сам керує ним 14 розробниками та багатьма проектами." },
        { tag: "03", title: "CoreMed — процеси клініки", desc: "Прийом, розклад, звіти і фінанси в одній системі. Повна автоматизація для медичного бізнесу." },
        { tag: "04", title: "Автоматизація через Telegram", desc: "Прийом замовлень, нагадування, надсилання звітів у Telegram — недорогий перший крок для малого бізнесу." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Який процес",
      titleAccent: "забирає найбільше часу?",
      subtitle: "Визначимо на безкоштовній 30-хвилинній консультації та сплануємо перший крок.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про автоматизацію бізнесу.",
      items: [
        { q: "Що таке автоматизація бізнесу?", a: "Автоматизація бізнесу — це виконання повторюваної ручної роботи (звіти, замовлення, контроль складу, зв'язок із клієнтом) за допомогою програмної системи автоматично. Мета: економити час, знижувати помилки і бачити реальні цифри." },
        { q: "Чи потрібна вона малому бізнесу?", a: "Так. Саме в малому бізнесі кожна година цінна. Почавши з недорогого рішення на кшталт Telegram-бота чи автоматичного звіту й автоматизувавши один найбільш витратний процес, ви одразу відчуєте результат." },
        { q: "Навіщо замовна система замість готової (Bitrix, AmoCRM)?", a: "Готовий SaaS універсальний — він підходить вашому унікальному процесу приблизно на 60%, решта зайве. Tezcode будує з нуля під ваш робочий потік, тому система використовується повністю." },
        { q: "Скільки часу займає?", a: "Проста автоматизація — 1-2 тижні. Повніша система — MVP за 2-4 тижні, потім розширюється поетапно. Щотижня показуємо робочу версію." },
        { q: "Скільки це коштує?", a: "Точна ціна дається лише після аудиту процесів, адже бізнеси різні. Консультація безкоштовна, оплата починається лише після готового MVP." },
        { q: "Чи працює з моїми системами (1C, каса, Telegram)?", a: "Так. Ми будуємо інтеграцію з Telegram, Google Sheets, 1C, платіжними та касовими системами, щоб автоматизація працювала всередині вашого поточного процесу." },
      ],
    },
    service: {
      name: "Послуга автоматизації бізнесу — Tezcode",
      description:
        "Автоматизація бізнес-процесів: звіти, замовлення, склад, CRM, фінанси та інтеграція. Система на замовлення, Ташкент, Узбекистан.",
      serviceType: "Автоматизація бізнес-процесів",
    },
  },
};
