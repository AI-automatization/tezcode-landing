import type { ServicePageContent } from "@/components/service-page/types";

// Content for /telegram-bot-biznes — target keywords: "Telegram bot yasash",
// "Telegram bot biznes uchun", "Telegram bot Toshkent", "телеграм бот для бизнеса Ташкент",
// "заказать телеграм бота", "Telegram bot development Uzbekistan".
// Tezcode genuinely builds Telegram bots (grammY stack — RAOS, MaxSavdo). No fabricated
// metrics, no fabricated client counts. Honest ranges only; payment 30% upfront.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "Telegram bot biznes uchun — O'zbekiston",
      title1: "Biznes uchun",
      titleAccent: "Telegram bot yaratish",
      title2: "",
      subtitle:
        "Biznes uchun Telegram bot — bu buyurtma qabul qiladigan, Click/Payme orqali to'lov oladigan, savollarga javob beradigan va mijozga eslatma yuboradigan dastur — operatorsiz, 24/7. Telegram O'zbekistonda eng ko'p ishlatiladigan messenjer, shuning uchun mijozga yangi ilova yuklatish shart emas — bot uni o'z kanalida kutib oladi. Tezcode — Toshkentdagi AI Software Factory — botni katalog, CRM, Telegram do'kon (Mini App) va kerak bo'lsa AI qatlami bilan biznesingizga moslab quradi.",
      trust: "IT Park rezidenti • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Bot nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "Telegram bot",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Telegram — O'zbekistonda eng ko'p ishlatiladigan kanal. Bot mijoz bilan o'sha yerda ishlaydi: savdo, to'lov, xabarnoma va boshqaruv — hammasi bitta oynada.",
      items: [
        { icon: "shopping-cart", title: "Buyurtma qabul qilish", desc: "Mahsulot katalogi, savatcha, buyurtma rasmiylashtirish — hammasi bot ichida. Mijoz saytsiz, ilovasiz buyurtma beradi; buyurtma darhol sizga va tizimingizga tushadi." },
        { icon: "credit-card", title: "Click / Payme to'lov", desc: "Bot ichida onlayn to'lov — Click va Payme integratsiyasi rasmiy API orqali. To'lovdan keyin buyurtma avtomatik tasdiqlanadi, pul sizning hisobingizga tushadi." },
        { icon: "message-circle", title: "Savol-javob va qo'llab-quvvatlash", desc: "Tez-tez beriladigan savollarga — narx, manzil, ish vaqti, yetkazib berish — bot o'zi javob beradi, murakkabini operatorga uzatadi. 24/7 ishlaydi." },
        { icon: "bell", title: "Eslatma va xabarnoma", desc: "Buyurtma holati, aksiya, bron eslatmasi — mijozga avtomatik Telegram xabar. SMS'dan arzon va tezroq, yetkazilgani esa ko'rinadi." },
        { icon: "store", title: "Telegram do'kon (Mini App)", desc: "Telegram ichida to'liq do'kon oynasi (Mini App) — katalog, savat, to'lov. Ilova kabi ishlaydi, lekin yuklab olish shart emas — hammasi Telegram ichida." },
        { icon: "bot", title: "AI javoblar (ixtiyoriy qatlam)", desc: "Erkin yozilgan savollarga AI sizning bazangiz asosida javob beradi. Oddiy tugmali botdan boshlab, keyin uni AI chatbot darajasiga o'stirish mumkin." },
        { icon: "users", title: "Guruh va kanal boshqaruvi", desc: "Kanalga e'lon joylash, guruhda a'zolarni qabul qilish va moderatsiya, jamoa uchun ichki xabarnomalar — bot orqali avtomatik." },
        { icon: "link-2", title: "CRM / Sheets / admin panel", desc: "Buyurtma va mijozlar Google Sheets, CRM yoki admin panelga avtomatik tushadi. Mahsulot va narxlarni o'zingiz tahrirlaysiz — dasturchi kerak emas." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "ishlovchi botga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam yozma taklif, aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Bot nima qilishi kerak — buyurtma, qo'llab-quvvatlash, to'lov, bron? 30 daqiqada o'rganamiz. Majburiyat yo'q: bot foyda bermasa, ochiq aytamiz.", icon: "message-circle" },
        { num: "02", title: "Stsenariy + yozma taklif", desc: "Bot oqimi (flow), tugmalar, kerakli integratsiyalar — aniq stsenariy, narx va muddat bilan yozma texnik taklif (TZ) tayyorlaymiz.", icon: "search" },
        { num: "03", title: "MVP yaratish", desc: "1–2 hafta ichida ishlovchi bot. Real buyurtmalarda sinab ko'rasiz, fikr berasiz — biz stsenariy va matnlarni sozlaymiz.", icon: "zap" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Botni jonli ishga tushiramiz, to'lov va CRM'ni ulaymiz, jamoangizni admin panelga o'rgatamiz, ishlashini kuzatib yaxshilab boramiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qurgan",
      titleAccent: "Telegram yechimlar",
      subtitle: "Tezcode Telegram texnologiyasini o'z mahsulotlarida har kuni ishlatadi — sizga taklif qilayotganimiz nazariya emas.",
      items: [
        { tag: "01", title: "MaxSavdo — Telegram do'kon platformasi", desc: "Telegram'ga o'rnatilgan do'kon va checkout (Mini App) — sotuvchi 5 daqiqada Telegram'da do'kon ochadi. Real ishlovchi mahsulot." },
        { tag: "02", title: "Buyurtma va yetkazib berish boti", desc: "Katalog → savat → to'lov → kuryer. Kichik biznes uchun arzon va tez sotuv kanali — sayt va ilovasiz." },
        { tag: "03", title: "Bron va navbat boti", desc: "Klinika, salon, restoran uchun — vaqt bron qilish, eslatma yuborish, bekor qilish bot orqali. Administrator telefonda o'tirmaydi." },
        { tag: "04", title: "Bildirishnoma boti", desc: "Hisobot, ogohlantirish va eslatmalarni avtomatik Telegram'ga jo'natish — jamoa yoki mijoz uchun. Hech bir muhim xabar o'tib ketmaydi." },
      ],
    },
    tech: {
      badge: "Texnologiyalar",
      title: "Bot qanday",
      titleAccent: "texnologiyada quriladi?",
      subtitle:
        "Konstruktor emas — kod. Botlarimiz o'z mahsulotlarimizda (RAOS, MaxSavdo) har kuni ishlab turgan stack'da yoziladi.",
      items: [
        { name: "Telegram Bot API + webhook", desc: "Telegramning rasmiy Bot API'si: tugmalar, inline rejim, media, guruh va kanal boshqaruvi. Xabarlar webhook orqali keladi — javob soniyalarda, kutish yo'q." },
        { name: "grammY + TypeScript", desc: "Bot mantig'ini grammY freymvorkida, TypeScript'da yozamiz — RAOS va MaxSavdo'da ishlab turgan stack. Xatolar kompilyatsiyada ushlanadi, bot barqaror ishlaydi." },
        { name: "Mini App (veb-do'kon)", desc: "Telegram do'kon oynasi zamonaviy veb-texnologiyalarda quriladi: katalog, savat, checkout Telegram ichida ochiladi — alohida ilova ishlab chiqish shart emas." },
        { name: "Click / Payme API", desc: "To'lovlar rasmiy Click va Payme API orqali qabul qilinadi: to'lov holati botga avtomatik qaytadi, buyurtma tasdiqlanadi, karta ma'lumotlari bizda saqlanmaydi." },
        { name: "Admin panel", desc: "Mahsulot, narx, matn va buyurtmalarni boshqarish uchun veb admin panel (yoki soddaroq holatda Google Sheets). Har mayda o'zgarish uchun dasturchi kerak emas." },
        { name: "AI/LLM qatlami (ixtiyoriy)", desc: "Erkin savollarga javob kerak bo'lsa, botga AI qatlami qo'shamiz — u sizning bazangiz asosida javob beradi. Bu AI chatbot xizmatimiz bilan bir xil texnologiya." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "Telegram botda bitta universal narx bo'lmaydi — hajm funksiyalar, to'lov va integratsiyalar soniga qarab o'zgaradi. Shuning uchun aniq narxni konsultatsiya va TZ'dan keyin yozma beramiz.",
      factors: [
        { title: "Oddiy bot (savol-javob, buyurtma)", price: "≈1 hafta", desc: "Tugmali menyu, tez-tez beriladigan savollar, buyurtma qabul qilish va operatorga uzatish. Kichik biznes uchun eng tez va arzon start." },
        { title: "To'lovli bot / Telegram do'kon", price: "1–2 hafta MVP", desc: "Katalog, savat, Click/Payme to'lov, Mini App vitrina, buyurtmalar admin panelda. Sayt o'rnini bosadigan to'liq savdo kanali." },
        { title: "Murakkab yechim (AI, CRM, 1C)", price: "Individual", desc: "AI qatlami, CRM/1C integratsiyasi, guruh-kanal boshqaruvi, maxsus stsenariylar — muddat va narx TZ asosida belgilanadi." },
      ],
      note:
        "Aniq narx bepul konsultatsiya va TZ'dan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich, natijani ko'rib. Yashirin to'lovlar yo'q — hammasi shartnomada.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Telegram'da bot",
      titleAccent: "ishga tushiramizmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada botingiz nima qilishini aniqlaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Biznes uchun Telegram bot haqida ko'p so'raladigan savollar.",
      items: [
        { q: "Telegram bot biznesimga nima foyda beradi?", a: "Bot 24/7 buyurtma qabul qiladi, savollarga javob beradi, to'lov oladi va eslatma yuboradi — operatorsiz. Telegram O'zbekistonda eng ko'p ishlatiladigan messenjer, shuning uchun mijozga yangi ilova yuklatish shart emas — u allaqachon shu yerda. Kechasi yozgan mijoz ham javob va buyurtma tasdig'ini darhol oladi." },
        { q: "Bot ichida to'lov qabul qilish va Telegram do'kon (Mini App) qilsa bo'ladimi?", a: "Ha, ikkalasi ham bo'ladi. Click va Payme'ni rasmiy API orqali ulaymiz — mijoz bot ichida to'laydi, buyurtma avtomatik tasdiqlanadi, pul to'g'ridan-to'g'ri sizning merchant hisobingizga tushadi, karta ma'lumotlari bizda saqlanmaydi, mijoz ma'lumotlari esa uchinchi tomonga berilmaydi. Mini App esa Telegram ichida ochiladigan to'liq do'kon oynasi (katalog, savatcha, to'lov) — alohida ilova yuklash shart emas. Kichik savdo uchun bu sayt va mobil ilova o'rnini bosadigan eng tez yechim, buni o'z MaxSavdo platformamizda har kuni ko'ramiz." },
        { q: "Narxi qancha va to'lov qanday?", a: "Telegram bot $279 dan boshlanadi. Aniq narx funksiyalar soni (katalog, to'lov, Mini App), integratsiyalar (CRM, 1C, Sheets) va AI qatlami bor-yo'qligiga bog'liq — bepul konsultatsiya va TZ'dan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich. Yashirin to'lovlar yo'q — hammasi shartnomada." },
        { q: "Qancha vaqtda tayyor bo'ladi?", a: "Oddiy savol-javob va buyurtma boti — taxminan 1 hafta. To'lov va katalogli to'liqroq bot — 1–2 haftada MVP. AI qatlami yoki bir nechta integratsiya bo'lsa, muddat TZ'da aniq belgilanadi va yozma taklifda qat'iy qayd etiladi — jarayonni bosqichma-bosqich ko'rib borasiz." },
        { q: "Boshlash uchun mendan qanday ma'lumot kerak?", a: "Ko'p narsa kerak emas: bot nima qilishi (buyurtma, bron, savol-javob), mahsulot yoki xizmatlar ro'yxati va narxlar, tez-tez beriladigan savollar, to'lov kerak bo'lsa — Click/Payme merchant ma'lumotlaringiz; tayyor TZ talab qilinmaydi. Birinchi qadam — Tezcode bilan 30 daqiqalik bepul konsultatsiya: +998 91 777 66 09 raqamiga qo'ng'iroq qiling yoki Telegram orqali yozing, bot foyda bermasa, buni ochiq aytamiz. Keyin stsenariy va TZ tuziladi, bot 1–2 haftada quriladi va Click/Payme, CRM yoki Sheets'ga ulanadi." },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "Telegram bot bilan birga ko'p ishlatiladigan Tezcode yechimlari.",
      links: [
        { href: "/ai-chatbot", label: "AI chatbot", desc: "Botingizni aqlli qiling — AI erkin savollarga sizning bazangiz asosida javob beradi, lidlarni saralaydi va operatorga uzatadi." },
        { href: "/pos-tizimi", label: "POS tizimi (RAOS)", desc: "Bot orqali kelgan buyurtmalarni kassaga ulang — kassa, ombor va hisobot bitta dasturda." },
      ],
    },
    service: {
      name: "Telegram bot yaratish — Tezcode",
      description:
        "Biznes uchun Telegram bot yaratish Toshkentda: buyurtma qabul qilish, Click/Payme to'lov, qo'llab-quvvatlash, eslatma, Telegram do'kon (Mini App), guruh-kanal boshqaruvi, CRM integratsiyasi va AI qatlami. Tezcode — IT Park rezidenti, O'zbekiston.",
      serviceType: "Telegram bot ishlab chiqish",
    },
  },

  ru: {
    hero: {
      badge: "Telegram-бот для бизнеса — Узбекистан",
      title1: "Разработка Telegram-бота",
      titleAccent: "для бизнеса",
      title2: "",
      subtitle:
        "Telegram-бот для бизнеса — это программа, которая принимает заказы, берёт оплату через Click/Payme, отвечает на вопросы и отправляет клиенту напоминания — без оператора, 24/7. Telegram — самый используемый мессенджер в Узбекистане, поэтому клиенту не нужно скачивать новое приложение — бот встречает его в привычном канале. Tezcode — AI Software Factory в Ташкенте — строит бота под ваш бизнес: каталог, CRM, Telegram-магазин (Mini App) и при необходимости ИИ-слой (AI).",
      trust: "Резидент IT Park • Бесплатная 30-мин консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что умеет бот?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "Telegram-бот?",
      subtitle:
        "Telegram — самый используемый канал в Узбекистане. Бот работает с клиентом прямо там: продажи, оплата, уведомления и управление — всё в одном окне.",
      items: [
        { icon: "shopping-cart", title: "Приём заказов", desc: "Каталог товаров, корзина, оформление заказа — всё внутри бота. Клиент заказывает без сайта и приложения; заказ сразу попадает к вам и в вашу систему." },
        { icon: "credit-card", title: "Оплата Click / Payme", desc: "Онлайн-оплата внутри бота — интеграция Click и Payme через официальные API. После оплаты заказ подтверждается автоматически, деньги идут на ваш счёт." },
        { icon: "message-circle", title: "Вопросы и поддержка", desc: "На частые вопросы — цена, адрес, график, доставка — бот отвечает сам, сложные передаёт оператору. Работает 24/7." },
        { icon: "bell", title: "Напоминания и уведомления", desc: "Статус заказа, акции, напоминание о брони — автоматическое сообщение в Telegram. Дешевле и быстрее SMS, доставка видна." },
        { icon: "store", title: "Telegram-магазин (Mini App)", desc: "Полноценная витрина внутри Telegram (Mini App) — каталог, корзина, оплата. Работает как приложение, но скачивать ничего не нужно." },
        { icon: "bot", title: "AI-ответы (опциональный слой)", desc: "На свободно написанные вопросы AI отвечает по вашей базе. Можно начать с простого кнопочного бота и позже дорастить его до AI-чат-бота." },
        { icon: "users", title: "Управление группами и каналами", desc: "Публикация постов в канал, приём участников и модерация в группе, внутренние уведомления для команды — автоматически через бота." },
        { icon: "link-2", title: "CRM / Sheets / админ-панель", desc: "Заказы и клиенты попадают в Google Sheets, CRM или админ-панель автоматически. Товары и цены вы редактируете сами — без разработчика." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "рабочего бота",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг — с письменным предложением, точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Что должен делать бот — заказы, поддержка, оплата, бронь? Разбираем за 30 минут. Без обязательств: если бот не окупится — скажем честно.", icon: "message-circle" },
        { num: "02", title: "Сценарий + письменное предложение", desc: "Flow бота, кнопки, нужные интеграции — готовим сценарий и ТЗ с точной ценой и сроком в письменном виде.", icon: "search" },
        { num: "03", title: "Создание MVP", desc: "Рабочий бот за 1–2 недели. Вы тестируете на реальных заказах, даёте обратную связь — мы настраиваем сценарий и тексты.", icon: "zap" },
        { num: "04", title: "Запуск + поддержка", desc: "Запускаем бота, подключаем оплату и CRM, обучаем команду админ-панели, следим за работой и улучшаем.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "Telegram-решения,",
      titleAccent: "которые мы построили",
      subtitle: "Tezcode использует технологии Telegram в своих продуктах ежедневно — то, что мы предлагаем, не теория.",
      items: [
        { tag: "01", title: "MaxSavdo — платформа Telegram-магазинов", desc: "Магазин и checkout внутри Telegram (Mini App) — продавец открывает магазин за 5 минут. Реально работающий продукт." },
        { tag: "02", title: "Бот заказов и доставки", desc: "Каталог → корзина → оплата → курьер. Недорогой и быстрый канал продаж для малого бизнеса — без сайта и приложения." },
        { tag: "03", title: "Бот брони и очереди", desc: "Для клиники, салона, ресторана — бронь времени, напоминания, отмена через бота. Администратор не сидит на телефоне." },
        { tag: "04", title: "Бот уведомлений", desc: "Автоматическая отправка отчётов, оповещений и напоминаний в Telegram — для команды или клиента. Ни одно важное сообщение не теряется." },
      ],
    },
    tech: {
      badge: "Технологии",
      title: "На чём",
      titleAccent: "строится бот?",
      subtitle:
        "Не конструктор — код. Наши боты пишутся на стеке, который каждый день работает в наших продуктах (RAOS, MaxSavdo).",
      items: [
        { name: "Telegram Bot API + webhook", desc: "Официальный Bot API Telegram: кнопки, inline-режим, медиа, управление группами и каналами. Сообщения приходят по webhook — ответ за секунды, без ожидания." },
        { name: "grammY + TypeScript", desc: "Логику бота пишем на фреймворке grammY на TypeScript — стек, работающий в RAOS и MaxSavdo. Ошибки ловятся на компиляции, бот работает стабильно." },
        { name: "Mini App (веб-витрина)", desc: "Витрина Telegram-магазина строится на современных веб-технологиях: каталог, корзина и checkout открываются внутри Telegram — отдельное приложение разрабатывать не нужно." },
        { name: "API Click / Payme", desc: "Платежи принимаются через официальные API Click и Payme: статус оплаты автоматически возвращается в бота, заказ подтверждается, данные карт у нас не хранятся." },
        { name: "Админ-панель", desc: "Веб-панель для управления товарами, ценами, текстами и заказами (или, в простом случае, Google Sheets). Для мелких изменений разработчик не нужен." },
        { name: "AI/LLM-слой (опционально)", desc: "Если нужны ответы на свободные вопросы, добавляем к боту AI-слой — он отвечает по вашей базе. Та же технология, что и в нашей услуге AI-чат-бота." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "стоимость?",
      subtitle:
        "У Telegram-бота нет одной универсальной цены — объём зависит от функций, оплаты и числа интеграций. Поэтому точную цену даём письменно после консультации и ТЗ.",
      factors: [
        { title: "Простой бот (вопросы, заказы)", price: "≈1 неделя", desc: "Кнопочное меню, частые вопросы, приём заказов и передача оператору. Самый быстрый и недорогой старт для малого бизнеса." },
        { title: "Бот с оплатой / Telegram-магазин", price: "1–2 недели MVP", desc: "Каталог, корзина, оплата Click/Payme, витрина Mini App, заказы в админ-панели. Полноценный канал продаж вместо сайта." },
        { title: "Сложное решение (AI, CRM, 1C)", price: "Индивидуально", desc: "AI-слой, интеграция с CRM/1C, управление группами и каналами, особые сценарии — срок и цена определяются по ТЗ." },
      ],
      note:
        "Точная цена даётся письменно после бесплатной консультации и ТЗ. Оплата: 30% предоплата, остальное поэтапно, по результату. Скрытых платежей нет — всё в договоре.",
    },
    cta: {
      badge: "Время начать",
      title: "Запустим бота",
      titleAccent: "в Telegram?",
      subtitle: "На бесплатной 30-минутной консультации определим, что будет делать ваш бот. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Самые частые вопросы о Telegram-боте для бизнеса.",
      items: [
        { q: "Чем Telegram-бот полезен моему бизнесу?", a: "Бот принимает заказы 24/7, отвечает на вопросы, берёт оплату и отправляет напоминания — без оператора. Telegram — самый используемый мессенджер в Узбекистане, поэтому клиенту не нужно скачивать новое приложение — он уже там. Даже клиент, написавший ночью, сразу получает ответ и подтверждение заказа." },
        { q: "Можно ли принимать оплату в боте и сделать Telegram-магазин (Mini App)?", a: "Да, возможно и то, и другое. Подключаем Click и Payme через официальные API — клиент платит внутри бота, заказ подтверждается автоматически, деньги идут напрямую на ваш мерчант-счёт, данные карт у нас не хранятся, а данные клиентов третьим лицам не передаются. Mini App — полноценная витрина внутри Telegram (каталог, корзина, оплата), отдельное приложение скачивать не нужно. Для малой торговли это самая быстрая замена сайту и мобильному приложению — мы видим это ежедневно на нашей платформе MaxSavdo." },
        { q: "Сколько стоит и как устроена оплата?", a: "Telegram-бот от $279 (≈ от 3.5 млн сум). Точная стоимость зависит от набора функций (каталог, оплата, Mini App), интеграций (CRM, 1C, Sheets) и наличия ИИ-слоя (AI) — даётся письменно после бесплатной консультации и ТЗ. Оплата: 30% предоплата, остальное поэтапно. Скрытых платежей нет — всё в договоре." },
        { q: "Как быстро бот будет готов?", a: "Простой бот с вопросами и заказами — примерно 1 неделя. Более полный бот с оплатой и каталогом — MVP за 1–2 недели. Если есть AI-слой или несколько интеграций, срок фиксируется в ТЗ и письменном предложении — процесс вы видите поэтапно." },
        { q: "Какие данные нужны от меня, чтобы начать?", a: "Немного: что должен делать бот (заказы, бронь, вопросы-ответы), список товаров или услуг с ценами, частые вопросы, а если нужна оплата — данные мерчанта Click/Payme; готовое ТЗ не требуется. Первый шаг — бесплатная 30-минутная консультация с Tezcode: позвоните на +998 91 777 66 09 или напишите в Telegram, и если бот не принесёт пользы, мы скажем об этом честно. Затем составляются сценарий и ТЗ, бот собирается за 1–2 недели и подключается к Click/Payme, CRM или Sheets." },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Решения Tezcode, которые часто используют вместе с Telegram-ботом.",
      links: [
        { href: "/ai-chatbot", label: "AI-чат-бот", desc: "Сделайте бота умным — AI отвечает на свободные вопросы по вашей базе, квалифицирует лиды и передаёт оператору." },
        { href: "/pos-tizimi", label: "POS-система (RAOS)", desc: "Подключите заказы из бота к кассе — касса, склад и отчёты в одной программе." },
      ],
    },
    service: {
      name: "Создание Telegram-бота — Tezcode",
      description:
        "Создание Telegram-бота для бизнеса в Ташкенте: приём заказов, оплата Click/Payme, поддержка, уведомления, Telegram-магазин (Mini App), управление группами и каналами, интеграция с CRM и ИИ-слой (AI). Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "Разработка Telegram-бота",
    },
  },

  en: {
    hero: {
      badge: "Telegram bot for business — Tashkent",
      title1: "We build a Telegram bot",
      titleAccent: "for your business",
      title2: "",
      subtitle:
        "A business Telegram bot is software that takes orders, accepts Click/Payme payments, answers questions and sends customers reminders — no operator, 24/7. Telegram is the most-used messenger in Uzbekistan, so customers don't need to install anything new — the bot meets them in their everyday channel. Tezcode — an AI Software Factory in Tashkent — builds the bot around your business: catalogue, CRM, a Telegram store (Mini App) and an AI layer if needed.",
      trust: "IT Park resident • Free 30-min consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can the bot do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can the",
      titleAccent: "Telegram bot do?",
      subtitle:
        "Telegram is the most-used channel in Uzbekistan. The bot works with your customer right there: sales, payments, notifications and management — all in one window.",
      items: [
        { icon: "shopping-cart", title: "Order taking", desc: "Product catalogue, cart, checkout — all inside the bot. Customers order without a website or app; the order lands with you and in your system instantly." },
        { icon: "credit-card", title: "Click / Payme payments", desc: "In-bot online payment — Click and Payme integration via official APIs. After payment the order is confirmed automatically and the money goes to your account." },
        { icon: "message-circle", title: "Q&A and support", desc: "The bot answers FAQs — price, address, hours, delivery — by itself and escalates complex cases to a human. Works 24/7." },
        { icon: "bell", title: "Reminders & notifications", desc: "Order status, promos, booking reminders — automatic Telegram messages. Cheaper and faster than SMS, with visible delivery." },
        { icon: "store", title: "Telegram store (Mini App)", desc: "A full storefront inside Telegram (Mini App) — catalogue, cart, payment. Works like an app, but there's nothing to download." },
        { icon: "bot", title: "AI answers (optional layer)", desc: "AI answers free-form questions from your knowledge base. Start with a simple button bot and grow it into an AI chatbot later." },
        { icon: "users", title: "Group & channel management", desc: "Posting to channels, admitting and moderating group members, internal notifications for your team — automated through the bot." },
        { icon: "link-2", title: "CRM / Sheets / admin panel", desc: "Orders and customers flow into Google Sheets, CRM or an admin panel automatically. You edit products and prices yourself — no developer needed." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to a",
      titleAccent: "working bot",
      subtitle: "First 30 minutes are free. Then every step comes with a written proposal, a clear price and a clear timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "What should the bot do — orders, support, payments, bookings? We scope it in 30 minutes. No obligations: if a bot won't pay off, we say so honestly.", icon: "message-circle" },
        { num: "02", title: "Scenario + written proposal", desc: "Bot flow, buttons, required integrations — a scenario and spec with an exact price and timeline in writing.", icon: "search" },
        { num: "03", title: "Build the MVP", desc: "A working bot in 1–2 weeks. You test it on real orders and give feedback — we tune the flow and copy.", icon: "zap" },
        { num: "04", title: "Launch + support", desc: "We launch the bot, connect payments and CRM, train your team on the admin panel, then monitor and keep improving.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "Telegram solutions",
      titleAccent: "we have built",
      subtitle: "Tezcode uses Telegram technology in its own products daily — what we offer you is not theory.",
      items: [
        { tag: "01", title: "MaxSavdo — Telegram store platform", desc: "Store and checkout inside Telegram (Mini App) — a seller opens a shop in 5 minutes. A real, working product." },
        { tag: "02", title: "Order & delivery bot", desc: "Catalogue → cart → payment → courier. An affordable, fast sales channel for small business — no website or app needed." },
        { tag: "03", title: "Booking & queue bot", desc: "For clinics, salons, restaurants — book a slot, send reminders, cancel via the bot. The administrator stays off the phone." },
        { tag: "04", title: "Notification bot", desc: "Automatic delivery of reports, alerts and reminders to Telegram — for your team or customers. No important message gets lost." },
      ],
    },
    tech: {
      badge: "Technology",
      title: "What is the bot",
      titleAccent: "built on?",
      subtitle:
        "Code, not a constructor. Our bots are written on the stack that runs daily in our own products (RAOS, MaxSavdo).",
      items: [
        { name: "Telegram Bot API + webhooks", desc: "Telegram's official Bot API: buttons, inline mode, media, group and channel management. Messages arrive via webhook — replies in seconds, no polling delay." },
        { name: "grammY + TypeScript", desc: "We write bot logic with the grammY framework in TypeScript — the stack running in RAOS and MaxSavdo. Errors are caught at compile time; the bot runs reliably." },
        { name: "Mini App (web storefront)", desc: "The Telegram store window is built with modern web technologies: catalogue, cart and checkout open inside Telegram — no separate app to develop." },
        { name: "Click / Payme APIs", desc: "Payments are accepted via the official Click and Payme APIs: the payment status returns to the bot automatically, the order is confirmed, and we never store card data." },
        { name: "Admin panel", desc: "A web panel for managing products, prices, texts and orders (or Google Sheets in simpler cases). No developer needed for small changes." },
        { name: "AI/LLM layer (optional)", desc: "If you need free-form answers, we add an AI layer that answers from your knowledge base — the same technology as our AI chatbot service." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What does the price",
      titleAccent: "depend on?",
      subtitle:
        "There is no single universal price for a Telegram bot — scope depends on features, payments and the number of integrations. That's why we give an exact price in writing after the consultation and spec.",
      factors: [
        { title: "Simple bot (Q&A, orders)", price: "≈1 week", desc: "Button menu, FAQs, order taking and human handoff. The fastest, most affordable start for a small business." },
        { title: "Payment bot / Telegram store", price: "1–2 weeks MVP", desc: "Catalogue, cart, Click/Payme payments, a Mini App storefront, orders in an admin panel. A full sales channel instead of a website." },
        { title: "Complex solution (AI, CRM, 1C)", price: "Custom", desc: "An AI layer, CRM/1C integration, group and channel management, special scenarios — timeline and price are set by the spec." },
      ],
      note:
        "The exact price comes in a written proposal after the free consultation and spec. Payment: 30% upfront, the rest step by step, based on results. No hidden fees — everything is in the contract.",
    },
    cta: {
      badge: "Time to start",
      title: "Shall we launch",
      titleAccent: "a Telegram bot?",
      subtitle: "We'll scope your bot in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The most common questions about business Telegram bots.",
      items: [
        { q: "How does a Telegram bot help my business?", a: "The bot takes orders 24/7, answers questions, accepts payments and sends reminders — without an operator. Telegram is the most-used messenger in Uzbekistan, so customers don't need to install anything new — they are already there. Even a customer writing at night gets an answer and an order confirmation immediately." },
        { q: "Can the bot accept payments, and can I get a Telegram store (Mini App)?", a: "Yes, both are possible. We connect Click and Payme via their official APIs — the customer pays inside the bot, the order is confirmed automatically, money goes directly to your merchant account, we never store card data, and customer data is never shared with third parties. A Mini App is a full storefront inside Telegram (catalogue, cart, payment), with no separate app to download. For small retail it's the fastest replacement for a website and mobile app — we see this daily on our own MaxSavdo platform." },
        { q: "How much does it cost and how does payment work?", a: "A Telegram bot starts from $279. The exact cost depends on the feature set (catalogue, payments, Mini App), integrations (CRM, 1C, Sheets) and whether there is an AI layer — it comes in writing after the free consultation and spec. Payment: 30% upfront, the rest step by step. No hidden fees — everything is in the contract, and before launch we agree separately on any hosting, maintenance, payment-provider fees and optional AI API usage." },
        { q: "How fast will the bot be ready?", a: "A simple Q&A and order bot — about 1 week. A fuller bot with payments and a catalogue — an MVP in 1–2 weeks. With an AI layer or several integrations, the timeline is fixed in the spec and written proposal — and you see progress stage by stage." },
        { q: "What information do you need from me to start?", a: "Not much: what the bot should do (orders, bookings, Q&A), a list of products or services with prices, your FAQs, and — if you need payments — your Click/Payme merchant details; no ready-made spec is required. The first step is a free 30-minute consultation with Tezcode: call +998 91 777 66 09 or write to us on Telegram, and if a bot won't pay off for you, we'll say so honestly. Then we write the scenario and spec, build the bot in 1–2 weeks and connect it to Click/Payme, CRM or Sheets." },
      ],
    },
    related: {
      badge: "Related services",
      title: "You may also",
      titleAccent: "find useful",
      subtitle: "Tezcode solutions often used together with a Telegram bot.",
      links: [
        { href: "/ai-chatbot", label: "AI chatbot", desc: "Make your bot smart — AI answers free-form questions from your knowledge base, qualifies leads and hands off to an operator." },
        { href: "/pos-tizimi", label: "POS system (RAOS)", desc: "Connect bot orders to your register — POS, inventory and reports in one app." },
      ],
    },
    service: {
      name: "Telegram bot development — Tezcode",
      description:
        "Telegram bot development for business in Tashkent: order taking, Click/Payme payments, support, notifications, a Telegram store (Mini App), group and channel management, CRM integration and an AI layer. Tezcode — IT Park resident, Uzbekistan.",
      serviceType: "Telegram bot development",
    },
  },

  ar: {
    hero: {
      badge: "بوت تيليجرام للأعمال — طشقند",
      title1: "نبني بوت تيليجرام",
      titleAccent: "لأعمالك",
      title2: "",
      subtitle:
        "بوت تيليجرام للأعمال برنامج يستقبل الطلبات، يقبل الدفع عبر Click/Payme، يجيب عن الأسئلة ويرسل التذكيرات للعميل — دون موظف، 24/7. تيليجرام هو المِرسال الأكثر استخدامًا في أوزبكستان، لذلك لا يحتاج العميل إلى تنزيل تطبيق جديد — يستقبله البوت في قناته المعتادة. تبنيه Tezcode — مصنع برمجيات AI في طشقند — حسب عملك: كتالوج وCRM ومتجر تيليجرام (Mini App) وطبقة AI عند الحاجة.",
      trust: "مقيم رسمي في IT Park • استشارة 30 دقيقة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يفعل البوت؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "بوت تيليجرام؟",
      subtitle:
        "تيليجرام هو القناة الأكثر استخدامًا في أوزبكستان. يعمل البوت مع عميلك هناك مباشرة: المبيعات والدفع والإشعارات والإدارة — كل ذلك في نافذة واحدة.",
      items: [
        { icon: "shopping-cart", title: "استقبال الطلبات", desc: "كتالوج المنتجات، السلة، إتمام الطلب — كل ذلك داخل البوت. يطلب العميل دون موقع أو تطبيق؛ يصلك الطلب وإلى نظامك فورًا." },
        { icon: "credit-card", title: "دفع Click / Payme", desc: "دفع إلكتروني داخل البوت — تكامل Click وPayme عبر الواجهات الرسمية. بعد الدفع يُؤكَّد الطلب تلقائيًا وتصل الأموال إلى حسابك." },
        { icon: "message-circle", title: "الأسئلة والدعم", desc: "يجيب البوت عن الأسئلة الشائعة — السعر والعنوان والدوام والتوصيل — بنفسه ويحوّل المعقد إلى موظف. يعمل 24/7." },
        { icon: "bell", title: "التذكيرات والإشعارات", desc: "حالة الطلب، العروض، تذكير الحجز — رسائل تلقائية في تيليجرام. أرخص وأسرع من SMS ويظهر وصولها." },
        { icon: "store", title: "متجر تيليجرام (Mini App)", desc: "واجهة متجر كاملة داخل تيليجرام (Mini App) — كتالوج، سلة، دفع. يعمل كتطبيق لكن دون تنزيل أي شيء." },
        { icon: "bot", title: "إجابات AI (طبقة اختيارية)", desc: "يجيب الذكاء الاصطناعي عن الأسئلة الحرة من قاعدة معرفتك. يمكن البدء ببوت أزرار بسيط ثم تطويره لاحقًا إلى شات بوت ذكي." },
        { icon: "users", title: "إدارة المجموعات والقنوات", desc: "نشر المنشورات في القناة، قبول الأعضاء والإشراف في المجموعة، إشعارات داخلية للفريق — تلقائيًا عبر البوت." },
        { icon: "link-2", title: "CRM / Sheets / لوحة تحكم", desc: "تصل الطلبات والعملاء إلى Google Sheets أو CRM أو لوحة التحكم تلقائيًا. تحرّر المنتجات والأسعار بنفسك — دون مطوّر." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "بوت عامل",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بعرض مكتوب وسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ماذا يجب أن يفعل البوت — طلبات، دعم، دفع، حجز؟ ندرسه في 30 دقيقة. بلا التزام: إن لم يكن البوت مجديًا نقولها بصراحة.", icon: "message-circle" },
        { num: "02", title: "سيناريو + عرض مكتوب", desc: "تدفق البوت، الأزرار، التكاملات المطلوبة — سيناريو ومواصفات (TZ) مع سعر وموعد دقيقين كتابةً.", icon: "search" },
        { num: "03", title: "بناء MVP", desc: "بوت عامل خلال 1–2 أسبوع. تختبره على طلبات حقيقية وتعطي ملاحظات — نضبط السيناريو والنصوص.", icon: "zap" },
        { num: "04", title: "الإطلاق + الدعم", desc: "نطلق البوت، نربط الدفع وCRM، ندرّب فريقك على لوحة التحكم، ثم نراقب ونحسّن باستمرار.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "حلول تيليجرام",
      titleAccent: "بنيناها",
      subtitle: "تستخدم Tezcode تقنية تيليجرام في منتجاتها يوميًا — ما نقدمه لك ليس نظرية.",
      items: [
        { tag: "01", title: "MaxSavdo — منصة متاجر تيليجرام", desc: "متجر وإتمام شراء داخل تيليجرام (Mini App) — يفتح البائع متجرًا خلال 5 دقائق. منتج حقيقي عامل." },
        { tag: "02", title: "بوت الطلبات والتوصيل", desc: "كتالوج → سلة → دفع → مندوب. قناة بيع سريعة وميسورة للأعمال الصغيرة — دون موقع أو تطبيق." },
        { tag: "03", title: "بوت الحجز والطابور", desc: "للعيادات والصالونات والمطاعم — حجز موعد، تذكيرات، إلغاء عبر البوت. لا يبقى المسؤول على الهاتف." },
        { tag: "04", title: "بوت الإشعارات", desc: "إرسال تلقائي للتقارير والتنبيهات والتذكيرات إلى تيليجرام — لفريقك أو عملائك. لا تضيع أي رسالة مهمة." },
      ],
    },
    tech: {
      badge: "التقنيات",
      title: "على ماذا",
      titleAccent: "يُبنى البوت؟",
      subtitle:
        "كود وليس منشئ بوتات جاهز. تُكتب بوتاتنا على الحزمة التقنية العاملة يوميًا في منتجاتنا (RAOS وMaxSavdo).",
      items: [
        { name: "Telegram Bot API + webhook", desc: "واجهة Bot API الرسمية لتيليجرام: أزرار، وضع inline، وسائط، إدارة المجموعات والقنوات. تصل الرسائل عبر webhook — الرد خلال ثوانٍ دون تأخير." },
        { name: "grammY + TypeScript", desc: "نكتب منطق البوت بإطار grammY بلغة TypeScript — الحزمة العاملة في RAOS وMaxSavdo. تُلتقط الأخطاء عند الترجمة ويعمل البوت باستقرار." },
        { name: "Mini App (واجهة متجر ويب)", desc: "تُبنى نافذة متجر تيليجرام بتقنيات ويب حديثة: الكتالوج والسلة وإتمام الشراء تُفتح داخل تيليجرام — لا حاجة لتطوير تطبيق منفصل." },
        { name: "واجهات Click / Payme", desc: "تُقبل المدفوعات عبر واجهات Click وPayme الرسمية: تعود حالة الدفع إلى البوت تلقائيًا ويُؤكَّد الطلب، ولا نخزّن بيانات البطاقات أبدًا." },
        { name: "لوحة التحكم", desc: "لوحة ويب لإدارة المنتجات والأسعار والنصوص والطلبات (أو Google Sheets في الحالات الأبسط). لا حاجة لمطوّر للتغييرات الصغيرة." },
        { name: "طبقة AI/LLM (اختيارية)", desc: "إذا احتجت إجابات عن أسئلة حرة نضيف طبقة AI تجيب من قاعدة معرفتك — التقنية نفسها في خدمة الشات بوت الذكي لدينا." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا يتوقف",
      titleAccent: "السعر؟",
      subtitle:
        "لا يوجد سعر واحد عام لبوت تيليجرام — يعتمد الحجم على الوظائف والدفع وعدد التكاملات. لذلك نعطي السعر الدقيق كتابةً بعد الاستشارة والمواصفات.",
      factors: [
        { title: "بوت بسيط (أسئلة، طلبات)", price: "≈أسبوع واحد", desc: "قائمة أزرار، أسئلة شائعة، استقبال الطلبات والتحويل إلى الموظف. أسرع وأرخص بداية للأعمال الصغيرة." },
        { title: "بوت بدفع / متجر تيليجرام", price: "MVP خلال 1–2 أسبوع", desc: "كتالوج، سلة، دفع Click/Payme، واجهة Mini App، الطلبات في لوحة التحكم. قناة بيع كاملة بدل الموقع." },
        { title: "حل معقد (AI، CRM، 1C)", price: "حسب الطلب", desc: "طبقة AI، تكامل CRM/1C، إدارة المجموعات والقنوات، سيناريوهات خاصة — يُحدَّد الموعد والسعر حسب المواصفات." },
      ],
      note:
        "يُعطى السعر الدقيق كتابةً بعد الاستشارة المجانية والمواصفات. الدفع: 30% مقدمًا والباقي على مراحل حسب النتائج. لا رسوم خفية — كل شيء في العقد.",
    },
    cta: {
      badge: "وقت البدء",
      title: "هل نطلق",
      titleAccent: "بوت تيليجرام؟",
      subtitle: "سنحدد ما سيفعله بوتك في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "الأسئلة الأكثر تكرارًا عن بوت تيليجرام للأعمال.",
      items: [
        { q: "كيف يفيد بوت تيليجرام أعمالي؟", a: "يستقبل البوت الطلبات 24/7، يجيب عن الأسئلة، يقبل الدفع ويرسل التذكيرات — دون موظف. تيليجرام هو المِرسال الأكثر استخدامًا في أوزبكستان، فلا يحتاج العميل إلى تنزيل تطبيق جديد — هو موجود هناك أصلًا. حتى العميل الذي يكتب ليلًا يحصل فورًا على الرد وتأكيد الطلب." },
        { q: "هل يقبل البوت المدفوعات، وهل يمكن إنشاء متجر تيليجرام (Mini App)؟", a: "نعم، كلاهما ممكن. نربط Click وPayme عبر واجهاتهما الرسمية — يدفع العميل داخل البوت ويُؤكَّد الطلب تلقائيًا، وتصل الأموال مباشرة إلى حساب التاجر الخاص بك، ولا نخزّن بيانات البطاقات أبدًا، ولا تُسلَّم بيانات العملاء لأي طرف ثالث. أما Mini App فهو واجهة متجر كاملة داخل تيليجرام (كتالوج، سلة، دفع) دون حاجة لتنزيل تطبيق منفصل. للتجارة الصغيرة هو أسرع بديل للموقع والتطبيق — نرى ذلك يوميًا في منصتنا MaxSavdo." },
        { q: "كم التكلفة وكيف يتم الدفع؟", a: "يبدأ بوت تيليجرام من $279. تعتمد التكلفة الدقيقة على مجموعة الوظائف (كتالوج، دفع، Mini App)، والتكاملات (CRM و1C وSheets)، ووجود طبقة AI — وتُعطى كتابةً بعد الاستشارة المجانية والمواصفات. الدفع: 30% مقدمًا والباقي على مراحل. لا رسوم خفية — كل شيء في العقد." },
        { q: "متى يكون البوت جاهزًا؟", a: "بوت أسئلة وطلبات بسيط — نحو أسبوع واحد. بوت أكمل مع دفع وكتالوج — MVP خلال 1–2 أسبوع. مع طبقة AI أو عدة تكاملات يُثبَّت الموعد في المواصفات والعرض المكتوب — وترى التقدم مرحلة بمرحلة." },
        { q: "ما المعلومات المطلوبة مني للبدء؟", a: "ليست كثيرة: ماذا يجب أن يفعل البوت (طلبات، حجوزات، أسئلة وأجوبة)، قائمة المنتجات أو الخدمات مع الأسعار، الأسئلة الشائعة، وإن أردت الدفع — بيانات تاجر Click/Payme؛ ولا تُطلب مواصفات جاهزة. الخطوة الأولى استشارة مجانية مع Tezcode مدتها 30 دقيقة: اتصل على ‎+998 91 777 66 09 أو راسلنا عبر تيليجرام، وإن لم يكن البوت مفيدًا لك نقول ذلك بصراحة. بعدها يُكتب السيناريو والمواصفات، ويُبنى البوت خلال 1–2 أسبوع ويُربط بـ Click/Payme أو CRM أو Sheets." },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضًا",
      subtitle: "حلول Tezcode التي تُستخدم غالبًا مع بوت تيليجرام.",
      links: [
        { href: "/ai-chatbot", label: "شات بوت AI", desc: "اجعل بوتك ذكيًا — يجيب الـAI عن الأسئلة الحرة من قاعدتك ويصنّف العملاء المحتملين ويحوّل إلى الموظف." },
        { href: "/pos-tizimi", label: "نظام POS ‏(RAOS)", desc: "اربط طلبات البوت بالكاشير — الكاشير والمخزون والتقارير في برنامج واحد." },
      ],
    },
    service: {
      name: "تطوير بوت تيليجرام — Tezcode",
      description:
        "تطوير بوت تيليجرام للأعمال في طشقند: استقبال الطلبات، دفع Click/Payme، الدعم، الإشعارات، متجر تيليجرام (Mini App)، إدارة المجموعات والقنوات، تكامل CRM وطبقة AI. Tezcode — مقيم IT Park، أوزبكستان.",
      serviceType: "تطوير بوت تيليجرام",
    },
  },

  uk: {
    hero: {
      badge: "Telegram-бот для бізнесу — Ташкент",
      title1: "Створюємо Telegram-бота",
      titleAccent: "для вашого бізнесу",
      title2: "",
      subtitle:
        "Telegram-бот для бізнесу — це програма, яка приймає замовлення, бере оплату через Click/Payme, відповідає на питання та надсилає клієнту нагадування — без оператора, 24/7. Telegram — найпопулярніший месенджер в Узбекистані, тому клієнту не треба завантажувати новий додаток — бот зустрічає його у звичному каналі. Tezcode — AI Software Factory в Ташкенті — будує бота під ваш бізнес: каталог, CRM, Telegram-магазин (Mini App) і за потреби AI-шар.",
      trust: "Резидент IT Park • Безкоштовна 30-хв консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що вміє бот?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "Telegram-бот?",
      subtitle:
        "Telegram — найпопулярніший канал в Узбекистані. Бот працює з клієнтом прямо там: продажі, оплата, сповіщення та управління — все в одному вікні.",
      items: [
        { icon: "shopping-cart", title: "Прийом замовлень", desc: "Каталог товарів, кошик, оформлення замовлення — все всередині бота. Клієнт замовляє без сайту і додатка; замовлення одразу потрапляє до вас і у вашу систему." },
        { icon: "credit-card", title: "Оплата Click / Payme", desc: "Онлайн-оплата всередині бота — інтеграція Click і Payme через офіційні API. Після оплати замовлення підтверджується автоматично, гроші йдуть на ваш рахунок." },
        { icon: "message-circle", title: "Питання і підтримка", desc: "На часті питання — ціна, адреса, графік, доставка — бот відповідає сам, складні передає оператору. Працює 24/7." },
        { icon: "bell", title: "Нагадування і сповіщення", desc: "Статус замовлення, акції, нагадування про бронь — автоматичне повідомлення в Telegram. Дешевше і швидше за SMS, доставку видно." },
        { icon: "store", title: "Telegram-магазин (Mini App)", desc: "Повноцінна вітрина всередині Telegram (Mini App) — каталог, кошик, оплата. Працює як додаток, але завантажувати нічого не треба." },
        { icon: "bot", title: "AI-відповіді (опціональний шар)", desc: "На вільно написані питання AI відповідає за вашою базою. Можна почати з простого кнопкового бота і пізніше виростити його до AI чат-бота." },
        { icon: "users", title: "Управління групами і каналами", desc: "Публікація постів у канал, прийом учасників і модерація в групі, внутрішні сповіщення для команди — автоматично через бота." },
        { icon: "link-2", title: "CRM / Sheets / адмін-панель", desc: "Замовлення і клієнти потрапляють у Google Sheets, CRM або адмін-панель автоматично. Товари і ціни ви редагуєте самі — без розробника." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "робочого бота",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок — з письмовою пропозицією, точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Що має робити бот — замовлення, підтримка, оплата, бронь? Розбираємо за 30 хвилин. Без зобов'язань: якщо бот не окупиться — скажемо чесно.", icon: "message-circle" },
        { num: "02", title: "Сценарій + письмова пропозиція", desc: "Flow бота, кнопки, потрібні інтеграції — готуємо сценарій і ТЗ з точною ціною та терміном письмово.", icon: "search" },
        { num: "03", title: "Створення MVP", desc: "Робочий бот за 1–2 тижні. Ви тестуєте на реальних замовленнях, даєте відгук — ми налаштовуємо сценарій і тексти.", icon: "zap" },
        { num: "04", title: "Запуск + підтримка", desc: "Запускаємо бота, підключаємо оплату і CRM, навчаємо команду адмін-панелі, стежимо за роботою і покращуємо.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "Telegram-рішення,",
      titleAccent: "які ми побудували",
      subtitle: "Tezcode використовує технології Telegram у своїх продуктах щодня — те, що ми пропонуємо, не теорія.",
      items: [
        { tag: "01", title: "MaxSavdo — платформа Telegram-магазинів", desc: "Магазин і checkout всередині Telegram (Mini App) — продавець відкриває магазин за 5 хвилин. Реально працюючий продукт." },
        { tag: "02", title: "Бот замовлень і доставки", desc: "Каталог → кошик → оплата → кур'єр. Недорогий і швидкий канал продажів для малого бізнесу — без сайту і додатка." },
        { tag: "03", title: "Бот броні та черги", desc: "Для клініки, салону, ресторану — бронь часу, нагадування, скасування через бота. Адміністратор не сидить на телефоні." },
        { tag: "04", title: "Бот сповіщень", desc: "Автоматичне надсилання звітів, оповіщень і нагадувань у Telegram — для команди або клієнта. Жодне важливе повідомлення не губиться." },
      ],
    },
    tech: {
      badge: "Технології",
      title: "На чому",
      titleAccent: "будується бот?",
      subtitle:
        "Не конструктор — код. Наші боти пишуться на стеку, який щодня працює в наших продуктах (RAOS, MaxSavdo).",
      items: [
        { name: "Telegram Bot API + webhook", desc: "Офіційний Bot API Telegram: кнопки, inline-режим, медіа, управління групами і каналами. Повідомлення приходять через webhook — відповідь за секунди, без очікування." },
        { name: "grammY + TypeScript", desc: "Логіку бота пишемо на фреймворку grammY на TypeScript — стек, що працює в RAOS і MaxSavdo. Помилки ловляться на компіляції, бот працює стабільно." },
        { name: "Mini App (веб-вітрина)", desc: "Вітрина Telegram-магазину будується на сучасних веб-технологіях: каталог, кошик і checkout відкриваються всередині Telegram — окремий додаток розробляти не треба." },
        { name: "API Click / Payme", desc: "Платежі приймаються через офіційні API Click і Payme: статус оплати автоматично повертається в бота, замовлення підтверджується, дані карток у нас не зберігаються." },
        { name: "Адмін-панель", desc: "Веб-панель для управління товарами, цінами, текстами і замовленнями (або Google Sheets у простішому випадку). Для дрібних змін розробник не потрібен." },
        { name: "AI/LLM-шар (опціонально)", desc: "Якщо потрібні відповіді на вільні питання, додаємо до бота AI-шар — він відповідає за вашою базою. Та сама технологія, що і в нашій послузі AI чат-бота." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "вартість?",
      subtitle:
        "У Telegram-бота немає однієї універсальної ціни — обсяг залежить від функцій, оплати і кількості інтеграцій. Тому точну ціну даємо письмово після консультації та ТЗ.",
      factors: [
        { title: "Простий бот (питання, замовлення)", price: "≈1 тиждень", desc: "Кнопкове меню, часті питання, прийом замовлень і передача оператору. Найшвидший і недорогий старт для малого бізнесу." },
        { title: "Бот з оплатою / Telegram-магазин", price: "1–2 тижні MVP", desc: "Каталог, кошик, оплата Click/Payme, вітрина Mini App, замовлення в адмін-панелі. Повноцінний канал продажів замість сайту." },
        { title: "Складне рішення (AI, CRM, 1C)", price: "Індивідуально", desc: "AI-шар, інтеграція з CRM/1C, управління групами і каналами, особливі сценарії — термін і ціна визначаються за ТЗ." },
      ],
      note:
        "Точна ціна дається письмово після безкоштовної консультації та ТЗ. Оплата: 30% передоплата, решта поетапно, за результатом. Прихованих платежів немає — все в договорі.",
    },
    cta: {
      badge: "Час починати",
      title: "Запустимо бота",
      titleAccent: "в Telegram?",
      subtitle: "Визначимо, що робитиме ваш бот, на безкоштовній 30-хвилинній консультації. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Найчастіші запитання про Telegram-бота для бізнесу.",
      items: [
        { q: "Чим Telegram-бот корисний моєму бізнесу?", a: "Бот приймає замовлення 24/7, відповідає на питання, бере оплату і надсилає нагадування — без оператора. Telegram — найпопулярніший месенджер в Узбекистані, тому клієнту не треба завантажувати новий додаток — він уже там. Навіть клієнт, який написав уночі, одразу отримує відповідь і підтвердження замовлення." },
        { q: "Чи можна приймати оплату в боті та зробити Telegram-магазин (Mini App)?", a: "Так, можливо і те, й інше. Підключаємо Click і Payme через офіційні API — клієнт платить усередині бота, замовлення підтверджується автоматично, гроші йдуть напряму на ваш мерчант-рахунок, дані карток у нас не зберігаються, а дані клієнтів третім особам не передаються. Mini App — повноцінна вітрина всередині Telegram (каталог, кошик, оплата), окремий додаток завантажувати не треба. Для малої торгівлі це найшвидша заміна сайту і мобільному додатку — ми бачимо це щодня на нашій платформі MaxSavdo." },
        { q: "Скільки коштує і як влаштована оплата?", a: "Telegram-бот від $279. Точна вартість залежить від набору функцій (каталог, оплата, Mini App), інтеграцій (CRM, 1C, Sheets) і наявності AI-шару — дається письмово після безкоштовної консультації та ТЗ. Оплата: 30% передоплата, решта поетапно. Прихованих платежів немає — все в договорі." },
        { q: "Як швидко бот буде готовий?", a: "Простий бот з питаннями і замовленнями — приблизно 1 тиждень. Повніший бот з оплатою і каталогом — MVP за 1–2 тижні. Якщо є AI-шар або кілька інтеграцій, термін фіксується в ТЗ і письмовій пропозиції — процес ви бачите поетапно." },
        { q: "Які дані потрібні від мене, щоб почати?", a: "Небагато: що має робити бот (замовлення, бронь, питання-відповіді), список товарів або послуг з цінами, часті питання, а якщо потрібна оплата — дані мерчанта Click/Payme; готове ТЗ не вимагається. Перший крок — безкоштовна 30-хвилинна консультація з Tezcode: зателефонуйте на +998 91 777 66 09 або напишіть у Telegram, і якщо бот не дасть вам користі, ми скажемо про це чесно. Потім складаються сценарій і ТЗ, бот збирається за 1–2 тижні та підключається до Click/Payme, CRM або Sheets." },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Рішення Tezcode, які часто використовують разом із Telegram-ботом.",
      links: [
        { href: "/ai-chatbot", label: "AI-чат-бот", desc: "Зробіть бота розумним — AI відповідає на вільні питання за вашою базою, кваліфікує ліди й передає оператору." },
        { href: "/pos-tizimi", label: "POS-система (RAOS)", desc: "Підключіть замовлення з бота до каси — каса, склад і звіти в одній програмі." },
      ],
    },
    service: {
      name: "Створення Telegram-бота — Tezcode",
      description:
        "Створення Telegram-бота для бізнесу в Ташкенті: прийом замовлень, оплата Click/Payme, підтримка, сповіщення, Telegram-магазин (Mini App), управління групами і каналами, інтеграція з CRM та AI-шар. Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "Розробка Telegram-бота",
    },
  },
};
