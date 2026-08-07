import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-video-analitika — target keywords: "AI video analitika Toshkent",
// "видеоаналитика Ташкент", "распознавание лиц", "ANPR Узбекистан",
// "AI kamera Toshkent", "yuz tanish davomat", "kaska nazorati". Only confirmed
// Tezcode facts: we make EXISTING IP cameras smart with AI as a SERVICE — four
// use cases (people counting, face recognition attendance, workplace safety/PPE,
// ANPR). Works with existing cameras, real-time alerts, on-prem or cloud.
// Quote-based pricing only (no fixed price) — 30% upfront, rest in stages.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI video analitika — Toshkent",
      title1: "Kameralaringizni",
      titleAccent: "AI bilan avtomatlashtirish",
      title2: "",
      subtitle:
        "AI video analitika — bu kameralaringizdagi tasvirni real vaqtda tahlil qiladigan sun'iy intellekt: odamlarni sanaydi, yuz orqali davomatni belgilaydi, kaska va himoya kiyimini nazorat qiladi va avto raqamlarni o'qiydi. Yangi jihoz sotib olish shart emas — biz sizning mavjud IP kameralaringizga ulanib, ular ko'rgan narsani hodisaga aylantiramiz va Telegram yoki dashboardga darhol xabar yuboramiz. On-premise (ichki server) yoki bulutda ishlaydi.",
      trust: "IT Park rezidenti • Mavjud kameralar bilan ishlaydi • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "AI kamera nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "AI video analitika",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Bitta AI qatlami mavjud kameralaringizni bir nechta vazifaga o'rgatadi — odam sanashdan avto raqam o'qishgacha. Hammasi real vaqtda, operator doim ekranga qarab o'tirmasdan.",
      items: [
        { icon: "users", title: "Odam aniqlash va sanash", desc: "Kirgan-chiqqan odamlar sonini avtomatik sanaydi: do'konga tashrif (footfall), navbat uzunligi, zal to'lganligi va eng gavjum soatlar. Marketing va xodimlarni rejalashtirish uchun aniq raqamlar." },
        { icon: "clipboard-list", title: "Yuz tanish orqali davomat", desc: "Xodim yoki mehmon yuzini tanib, kirish-chiqishni avtomatik belgilaydi — turniketsiz. Davomat jurnali, ruxsat nazorati, qora ro'yxat (blacklist) va VIP mijozni tanib xabar berish." },
        { icon: "life-buoy", title: "Ish xavfsizligi nazorati", desc: "Zavod va qurilishda kaska, jilet va himoya kiyimini kiymagan xodimni aniqlaydi; xavfli zonaga (stanok, yuk ko'targich) kirishni sezadi va darhol ogohlantiradi. Baxtsiz hodisa oldini olish." },
        { icon: "search", title: "Avto raqam tanish (ANPR)", desc: "Avtomobil davlat raqamini o'qiydi va bazaga yozadi: parkovka va hudud kirishini avtomatlashtirish, shlagbaumni ruxsat etilgan mashinaga ochish, mehmon va o'z transportini ajratish." },
        { icon: "wifi", title: "Mavjud kameralar bilan ishlaydi", desc: "Yangi kamera yoki maxsus jihoz sotib olish shart emas. RTSP/ONVIF ni qo'llaydigan IP kameralaringizga ulanamiz — AI qatlami mavjud videokuzatuv tizimingiz ustiga qo'shiladi." },
        { icon: "bell", title: "Real vaqtda ogohlantirish", desc: "Hodisa yuz berganda — kaskasiz xodim, notanish yuz, ruxsatsiz mashina — Telegram, dashboard yoki xavfsizlik pultiga soniyalarda xabar boradi, skrinshot va vaqt bilan. Yozuvni keyin ham arxivdan topasiz." },
      ],
    },
    tech: {
      badge: "Texnologiya",
      title: "Qanday texnologiyada",
      titleAccent: "quramiz?",
      subtitle:
        "Mavjud videokuzatuv ustiga qo'shiladigan zamonaviy kompyuter ko'rish (computer vision) qatlami — sizning tarmog'ingizda yoki bulutda.",
      items: [
        { name: "Kompyuter ko'rish modellari", desc: "Obyekt aniqlash (detection) va kuzatish (tracking) modellari odam, transport va jihozni tasvirdan ajratadi. Har bir use-case uchun aniqlik sizning kamera burchagi va yorug'ligiga moslab sozlanadi." },
        { name: "Yuz tanish va ANPR/OCR", desc: "Yuz embeddinglari orqali shaxsni taqqoslash va raqam plastinkasini o'qish uchun OCR. Baza sizning xodimlar, mijozlar yoki ruxsat etilgan transport ro'yxatingiz asosida quriladi." },
        { name: "RTSP / ONVIF ulanishi", desc: "IP kameralarning standart protokollari. Hikvision, Dahua va boshqa RTSP oqim beradigan kameralarga to'g'ridan-to'g'ri ulanamiz — videoregistrator (NVR) o'z joyida qoladi." },
        { name: "On-premise yoki bulut", desc: "Maxfiylik muhim bo'lsa — hamma tahlil sizning ichki serveringizda (GPU) ishlaydi, video tashqariga chiqmaydi. Yengil holatlarda esa bulutli ishlov arzonroq bo'ladi." },
        { name: "Xabar va integratsiya", desc: "Telegram bot, dashboard va webhook orqali hodisalarni tizimingizga uzatamiz — CRM, davomat tizimi yoki xavfsizlik pultiga. Barcha hodisalar vaqt tamg'asi bilan arxivlanadi." },
        { name: "Dashboard va hisobot", desc: "Odam oqimi, davomat, buzilishlar va avto kirish bo'yicha grafik va hisobotlar. Kunlik, haftalik yoki soatlik kesimda — qaror qabul qilish uchun tayyor raqamlar." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "aqlli kameraga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam yozma taklif, aniq narx (TZ dan keyin) va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Kameralar auditi", desc: "Mavjud kameralaringizni tekshiramiz: modeli, joylashuvi, burchagi, yorug'ligi va RTSP/ONVIF qo'llab-quvvatlashi. Qaysi vazifa qaysi kameradan real ishlashini aniqlaymiz.", icon: "search" },
        { num: "02", title: "AI modellarni ulash", desc: "Kerakli use-case uchun modellarni ulaymiz: odam sanash, yuz tanish, kaska nazorati yoki ANPR. Bazani (xodimlar, ruxsat etilgan transport) sizning ma'lumotlaringiz asosida quramiz.", icon: "bot" },
        { num: "03", title: "Ogohlantirish va dashboard sozlash", desc: "Qaysi hodisada kimga xabar borishini belgilaymiz — Telegram, dashboard yoki pult. Hisobot va grafiklarni sozlaymiz, notoq'ri signallarni (false alarm) kamaytiramiz.", icon: "bar-chart-2" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Tizimni jonli rejimga o'tkazamiz, jamoangizni o'rgatamiz va aniqlikni kuzatib boramiz. Yangi kamera yoki yangi vazifa qo'shilsa — tizim kengaytiriladi.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Ssenariylar va real misollar",
      title: "Qaysi biznesga",
      titleAccent: "qanday foyda?",
      subtitle:
        "To'rt asosiy use-case turli sohalarda qanday ishlashi. Har bir misol mavjud kameralar ustiga qo'shiladi — yangi jihoz talab qilinmaydi.",
      items: [
        { tag: "01", title: "Do'kon va savdo markazi", desc: "Kirgan tashrifchilar sonini sanaydi, eng gavjum soatlarni va kassa oldidagi navbatni ko'rsatadi. Marketing samarasini (konversiya) va smenaga qancha xodim kerakligini aniq raqam bilan bilib olasiz." },
        { tag: "02", title: "Zavod va qurilish maydoni", desc: "Kaska va jiletsiz xodimni, xavfli zonaga kirishni real vaqtda aniqlaydi va usta yoki xavfsizlik bo'limiga darhol xabar yuboradi. Buzilishlar jurnali va baxtsiz hodisa oldini olish." },
        { tag: "03", title: "Ofis va biznes markazi", desc: "Yuz orqali davomat va kirish nazorati — turniket va propuska kartasisiz. Kim qachon kelgani avtomatik yoziladi, notanish yuz kirsa xavfsizlikka signal boradi." },
        { tag: "04", title: "Parkovka va zakrit hudud", desc: "Avto raqamni o'qib, ruxsat etilgan mashinaga shlagbaumni avtomatik ochadi, mehmon transportini ajratadi va kirish-chiqish jurnalini yuritadi. Qorovul har bir mashinani qo'lda yozib o'tirmaydi." },
        { tag: "05", title: "Restoran va xizmat ko'rsatish", desc: "Zal to'lganligi va navbatni kuzatib, xizmat tezligini nazorat qiladi; VIP yoki qaytgan mijoz yuzini tanib, administratorga oldindan xabar beradi." },
        { tag: "06", title: "Ombor va logistika", desc: "Yuklash-tushirish zonasida xavfsizlik qoidalarini nazorat qiladi, transport raqamini ANPR bilan qayd etadi va hudud bo'ylab odam oqimini tahlil qiladi." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "Bir martalik ulash $990 dan boshlanadi. Keyin AI ishlashini o'zingiz boshqarasiz — hosting va foydalanishni o'zingiz to'laysiz. Aniq narx kamera soni va vazifalarga bog'liq.",
      factors: [
        { title: "Kameralar soni", price: "$990 dan", desc: "Nechta kamera va nechta nuqta tahlil qilinadi — asosiy omil. Bitta kirish kamerasidan butun zavod perimetrigacha; jarayon bosqichma-bosqich kengaytiriladi." },
        { title: "Use-case murakkabligi", price: "TZ dan keyin", desc: "Oddiy odam sanash bir narx, yuz tanish yoki ANPR baza bilan boshqa. Bir nechta vazifa birlashtirilsa, murakkablik va narx oshadi." },
        { title: "On-premise yoki bulut", price: "TZ dan keyin", desc: "Maxfiylik uchun ichki GPU server kerak bo'lsa — jihoz va sozlash hisobga olinadi. Bulutli ishlov ko'p holatda arzonroq startni beradi." },
      ],
      note:
        "Aniq narx bepul konsultatsiya, kameralar auditi va TZ (texnik topshiriq) kelishilgandan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich, natijani ko'rib. Yashirin to'lovlar yo'q — hammasi shartnomada.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Kameralaringiz",
      titleAccent: "ishlab bersinmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada qaysi kameralar qaysi vazifada real foyda berishini aniqlaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "AI video analitika haqida ko'p so'raladigan savollar.",
      items: [
        { q: "AI video analitika qancha turadi?", a: "$990 dan (bir martalik ulash) boshlanadi — bu AI ni mavjud kameralaringizga ulash uchun bir martalik to'lov, obuna emas. Ulashdan keyin AI ishlashini o'zingiz boshqarasiz: hosting va foydalanishni (API/server) o'zingiz to'laysiz. Aniq narx kameralar soni va vazifa murakkabligiga (odam sanash, yuz tanish yoki ANPR) bog'liq — bepul konsultatsiya va kameralar auditidan keyin yozma taklifda aniqlaymiz." },
        { q: "Mavjud kameralar bilan ishlaydimi?", a: "Ha — bu xizmatning asosiy g'oyasi. Yangi kamera yoki maxsus jihoz sotib olish shart emas. RTSP/ONVIF ni qo'llaydigan IP kameralaringizga (Hikvision, Dahua va boshqalar) to'g'ridan-to'g'ri ulanamiz. AI qatlami mavjud videokuzatuv ustiga qo'shiladi, videoregistrator o'z joyida qoladi." },
        { q: "Yuz tanish qonuniymi?", a: "Yuz tanishni qonuniy asosda qo'llash mumkin: xodimlar davomati uchun ularning roziligi bilan, o'z hududingizda xavfsizlik maqsadida. Muhimi — ma'lumotlarni himoya qilish va faqat kelishilgan maqsadda ishlatish. Biz tizimni sizning ichki serveringizda (on-premise) qurishimiz mumkin, shunda yuz ma'lumotlari tashqariga umuman chiqmaydi. Aniq huquqiy tafsilotlarni loyihaga qarab kelishamiz." },
        { q: "Yangi kamera o'rnatish kerakmi?", a: "Odatda yo'q. Agar mavjud kameralar kerakli burchak va sifatni bersa — ular yetarli. Faqat ba'zi nuqtada (masalan, avto raqam uchun to'g'ri burchak yoki past yorug'lik) qo'shimcha kamera tavsiya qilinishi mumkin. Buni kameralar auditida ochiq aytamiz, majburlamaymiz." },
        { q: "Ma'lumotlar qayerda saqlanadi — bulutdami?", a: "Ikkala variant ham bor. Maxfiylik muhim bo'lsa, hamma tahlil sizning ichki serveringizda (on-premise) ishlaydi va video tashqariga chiqmaydi. Yengilroq holatlarda bulutli ishlov arzonroq bo'ladi. Qaysi biri to'g'ri kelishini birga hal qilamiz." },
        { q: "Ogohlantirish qanday keladi?", a: "Hodisa yuz berganda — kaskasiz xodim, notanish yuz, ruxsatsiz mashina yoki navbat cho'zilishi — Telegram, dashboard yoki xavfsizlik pultiga soniyalarda xabar boradi. Xabarda skrinshot, vaqt va joy bo'ladi; yozuvni keyin ham arxivdan topasiz." },
        { q: "Kaska va himoya kiyimini nazorat qila oladimi?", a: "Ha. Tizim kaska, jilet yoki himoya kiyimini kiymagan xodimni aniqlaydi va xavfli zonaga kirishni sezadi. Buzilish yuz berganda usta yoki xavfsizlik bo'limiga darhol signal boradi va jurnalga yoziladi — bu baxtsiz hodisa oldini olishga yordam beradi." },
        { q: "Qancha vaqtda ishga tushadi?", a: "Aniq muddat kameralar soni va use-case ga bog'liq. Odatda bitta vazifa (masalan, kirish nuqtasida odam sanash yoki ANPR) uchun pilot tizim bir necha hafta ichida ishga tushadi. Kengroq loyiha bosqichma-bosqich yoyiladi. Aniq muddat yozma taklifda qat'iy belgilanadi." },
        { q: "Kameradan odam (mijoz) sanash mumkinmi?", a: "Ha. Tizim kirgan va chiqqan odamlarni avtomatik sanaydi: do'konga kunlik tashrif (footfall), navbat uzunligi, zal to'lganligi va eng gavjum soatlar. Bu raqamlar marketing samarasini o'lchash va smenaga qancha xodim kerakligini rejalashtirishda ishlatiladi — barchasi dashboardda grafik ko'rinishida." },
        { q: "Yuz tanish orqali xodimlar davomatini yuritish mumkinmi?", a: "Ha. Kamera xodim yuzini tanib, kirish va chiqishni avtomatik belgilaydi — turniket yoki propuska kartasi kerak emas. Davomat jurnali o'zi shakllanadi: kim qachon kelgani, kechikish va ishdan erta ketish ko'rinib turadi. Kech kelgan yoki notanish yuz kirsa, Telegramga darhol xabar boradi." },
        { q: "Avtomobil raqamlarini (ANPR) o'qiy oladimi?", a: "Ha. Tizim avtomobil davlat raqamini o'qiydi va bazaga yozadi: ruxsat etilgan mashinaga shlagbaumni avtomatik ochadi, mehmon va o'z transportini ajratadi, kirish-chiqish jurnalini yuritadi. Qorovul har bir mashinani qo'lda yozib o'tirmaydi — hammasi avtomatik." },
        { q: "Toshkentda AI video analitika kim qiladi?", a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rasmiy rezidenti (guvohnoma 6237). Mavjud kameralaringizni AI bilan aqlli qilamiz: odam sanash, yuz tanish orqali davomat, ish xavfsizligi nazorati va avto raqam tanish. Bepul konsultatsiyaga kelib, loyihangizni muhokama qilishingiz mumkin: Toshkent, Amir Temur shoh ko'chasi, 10." },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "AI video analitikaga yaqin Tezcode yechimlari.",
      links: [
        { href: "/xodim-nazorati", label: "Xodim nazorati", desc: "Ish vaqti, davomat va samaradorlikni raqamli nazorat — video davomat bilan tabiiy birlashadi." },
        { href: "/ai-agent", label: "AI agent", desc: "Kamera ko'rgan hodisani keyingi harakatga aylantiradigan AI agent — o'zi qaror qabul qiladi va vazifani bajaradi." },
        { href: "/for-businesses", label: "Biznes uchun", desc: "AI biznesingizning qaysi qismiga eng katta foyda berishini — savdo, xavfsizlik yoki jarayonlar — bepul auditda aniqlaymiz." },
      ],
    },
    updated: "Yangilangan: 2026-yil 23-iyul",
    heroImage: {
      src: "/images/ai-video/hero.jpg",
      alt: "AI video analitika — kameralarni AI bilan avtomatlashtirish, operatorlar markazi",
    },
    showcase: {
      badge: "REAL MISOLLAR",
      title: "AI kamerada",
      titleAccent: "qanday ko'rinadi",
      subtitle: "Mavjud kameralaringiz AI bilan shunday ishlaydi.",
      items: [
        {
          src: "/images/ai-video/face.jpg",
          alt: "Yuzni tanish orqali davomat — ofis turniketida xodimni AI tanidi",
          caption: "Yuzni tanish orqali davomat",
        },
        {
          src: "/images/ai-video/safety.jpg",
          alt: "Ish xavfsizligi — qurilishda kaska va himoya jiletni AI nazorat qiladi",
          caption: "Ish xavfsizligi — kaska va forma nazorati",
        },
        {
          src: "/images/ai-video/anpr.jpg",
          alt: "Avto raqam tanish (ANPR) — shlagbaum oldida mashina raqamini AI o'qidi",
          caption: "Avto raqam tanish (ANPR)",
        },
      ],
    },
    service: {
      name: "AI video analitika — mavjud kameralarni aqlli qilish — Tezcode",
      description:
        "AI video analitika Toshkentda: mavjud IP kameralarni AI bilan aqlli qilish — odam aniqlash va sanash, yuz tanish orqali davomat, ish xavfsizligi (kaska/PPE) nazorati va avto raqam tanish (ANPR). Real vaqtda ogohlantirish, on-premise yoki bulut. Tezcode — IT Park rezidenti, O'zbekiston.",
      serviceType: "AI video analitika / kompyuter ko'rish tizimini joriy etish",
    },
  },

  ru: {
    hero: {
      badge: "AI-видеоаналитика — Ташкент",
      title1: "Автоматизация камер",
      titleAccent: "с помощью ИИ",
      title2: "",
      subtitle:
        "AI-видеоаналитика — это искусственный интеллект, который в реальном времени анализирует изображение с ваших камер: считает людей, отмечает посещаемость по лицу, контролирует каски и спецодежду и распознаёт автомобильные номера. Новое оборудование покупать не нужно — мы подключаемся к вашим существующим IP-камерам, превращаем то, что они видят, в события и мгновенно шлём уведомление в Telegram или на дашборд. Работает on-premise (на вашем сервере) или в облаке.",
      trust: "Резидент IT Park • Работает с существующими камерами • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что умеет AI-камера?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "AI-видеоаналитика?",
      subtitle:
        "Один слой AI обучает ваши существующие камеры нескольким задачам — от подсчёта людей до чтения автономеров. Всё в реальном времени, без оператора, который постоянно смотрит в экран.",
      items: [
        { icon: "users", title: "Обнаружение и подсчёт людей", desc: "Автоматически считает вошедших и вышедших: посещаемость магазина (footfall), длину очереди, заполненность зала и часы пик. Точные цифры для маркетинга и планирования смен." },
        { icon: "clipboard-list", title: "Посещаемость по распознаванию лиц", desc: "Узнаёт лицо сотрудника или гостя и автоматически фиксирует вход-выход — без турникета. Журнал посещаемости, контроль доступа, чёрный список (blacklist) и уведомление о VIP-клиенте." },
        { icon: "life-buoy", title: "Контроль охраны труда", desc: "На заводе и стройке выявляет сотрудника без каски, жилета или спецодежды; замечает вход в опасную зону (станок, кран) и сразу предупреждает. Профилактика несчастных случаев." },
        { icon: "search", title: "Распознавание автономеров (ANPR)", desc: "Читает госномер автомобиля и пишет в базу: автоматизация парковки и въезда, открытие шлагбаума разрешённой машине, разделение гостевого и служебного транспорта." },
        { icon: "wifi", title: "Работает с существующими камерами", desc: "Покупать новые камеры или специальное оборудование не нужно. Подключаемся к вашим IP-камерам по RTSP/ONVIF — слой AI добавляется поверх существующего видеонаблюдения." },
        { icon: "bell", title: "Уведомления в реальном времени", desc: "Когда происходит событие — сотрудник без каски, незнакомое лицо, машина без доступа — уведомление за секунды уходит в Telegram, на дашборд или пульт охраны, со скриншотом и временем. Запись потом найдёте в архиве." },
      ],
    },
    tech: {
      badge: "Технология",
      title: "На какой технологии",
      titleAccent: "мы строим?",
      subtitle:
        "Современный слой компьютерного зрения (computer vision) поверх существующего видеонаблюдения — в вашей сети или в облаке.",
      items: [
        { name: "Модели компьютерного зрения", desc: "Модели обнаружения (detection) и трекинга выделяют на кадре человека, транспорт и оборудование. Точность под каждый use-case настраивается под угол и освещение ваших камер." },
        { name: "Распознавание лиц и ANPR/OCR", desc: "Сравнение личности через эмбеддинги лица и OCR для чтения номерной пластины. База строится на вашем списке сотрудников, клиентов или разрешённого транспорта." },
        { name: "Подключение RTSP / ONVIF", desc: "Стандартные протоколы IP-камер. Подключаемся напрямую к камерам Hikvision, Dahua и другим, отдающим RTSP-поток — видеорегистратор (NVR) остаётся на месте." },
        { name: "On-premise или облако", desc: "Если важна приватность — весь анализ работает на вашем внутреннем сервере (GPU), видео не выходит наружу. В лёгких случаях облачная обработка дешевле." },
        { name: "Уведомления и интеграция", desc: "Передаём события в вашу систему через Telegram-бот, дашборд и webhook — в CRM, систему посещаемости или на пульт охраны. Все события архивируются с меткой времени." },
        { name: "Дашборд и отчёты", desc: "Графики и отчёты по потоку людей, посещаемости, нарушениям и въезду авто. В суточном, недельном или почасовом разрезе — готовые цифры для решений." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "умной камеры",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг — с письменным предложением, точной ценой (после ТЗ) и сроком.",
      steps: [
        { num: "01", title: "Аудит камер", desc: "Проверяем ваши камеры: модель, расположение, угол, освещение и поддержку RTSP/ONVIF. Определяем, какая задача с какой камеры реально сработает.", icon: "search" },
        { num: "02", title: "Подключение AI-моделей", desc: "Подключаем модели под нужный use-case: подсчёт людей, распознавание лиц, контроль касок или ANPR. Базу (сотрудники, разрешённый транспорт) строим на ваших данных.", icon: "bot" },
        { num: "03", title: "Настройка уведомлений и дашборда", desc: "Определяем, при каком событии кому уходит сигнал — Telegram, дашборд или пульт. Настраиваем отчёты и графики, снижаем ложные срабатывания (false alarm).", icon: "bar-chart-2" },
        { num: "04", title: "Запуск + поддержка", desc: "Переводим систему в боевой режим, обучаем команду и следим за точностью. Появилась новая камера или задача — систему расширяем.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Сценарии и реальные примеры",
      title: "Какому бизнесу",
      titleAccent: "какая польза?",
      subtitle:
        "Как четыре основных use-case работают в разных отраслях. Каждый пример добавляется поверх существующих камер — новое оборудование не требуется.",
      items: [
        { tag: "01", title: "Магазин и торговый центр", desc: "Считает вошедших посетителей, показывает часы пик и очередь у кассы. Вы точными цифрами узнаёте эффективность маркетинга (конверсию) и сколько сотрудников нужно в смену." },
        { tag: "02", title: "Завод и стройплощадка", desc: "В реальном времени выявляет сотрудника без каски и жилета, вход в опасную зону и сразу шлёт сигнал мастеру или в отдел ТБ. Журнал нарушений и профилактика несчастных случаев." },
        { tag: "03", title: "Офис и бизнес-центр", desc: "Посещаемость и контроль доступа по лицу — без турникета и карты-пропуска. Кто когда пришёл, фиксируется автоматически; при незнакомом лице — сигнал охране." },
        { tag: "04", title: "Парковка и закрытая территория", desc: "Читает автономер и автоматически открывает шлагбаум разрешённой машине, отделяет гостевой транспорт и ведёт журнал въезда-выезда. Охраннику не нужно вручную записывать каждую машину." },
        { tag: "05", title: "Ресторан и сфера услуг", desc: "Отслеживает заполненность зала и очередь, контролирует скорость обслуживания; узнаёт лицо VIP или вернувшегося клиента и заранее уведомляет администратора." },
        { tag: "06", title: "Склад и логистика", desc: "Контролирует правила безопасности в зоне погрузки, фиксирует номер транспорта через ANPR и анализирует поток людей по территории." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "стоимость?",
      subtitle:
        "Разовое подключение — от $990. Дальше вы сами управляете работой AI: хостинг и использование оплачиваете самостоятельно. Точная цена зависит от числа камер и задач.",
      factors: [
        { title: "Количество камер", price: "от $990", desc: "Сколько камер и точек анализируется — главный фактор. От одной камеры на входе до периметра целого завода; проект расширяется поэтапно." },
        { title: "Сложность use-case", price: "После ТЗ", desc: "Простой подсчёт людей — одна цена, распознавание лиц или ANPR с базой — другая. При объединении нескольких задач сложность и цена растут." },
        { title: "On-premise или облако", price: "После ТЗ", desc: "Если для приватности нужен внутренний GPU-сервер — учитывается оборудование и настройка. Облачная обработка чаще даёт более дешёвый старт." },
      ],
      note:
        "Точная цена даётся письменно после бесплатной консультации, аудита камер и согласования ТЗ (технического задания). Оплата: 30% предоплата, остальное поэтапно, по результату. Скрытых платежей нет — всё в договоре.",
    },
    cta: {
      badge: "Время начать",
      title: "Пусть ваши камеры",
      titleAccent: "работают?",
      subtitle: "На бесплатной 30-минутной консультации определим, какие камеры под какую задачу дадут реальную пользу. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы об AI-видеоаналитике.",
      items: [
        { q: "Сколько стоит AI-видеоаналитика?", a: "От $990 (разовое подключение) — это единоразовая плата за подключение AI к вашим существующим камерам, а не подписка. После подключения вы сами управляете работой AI: хостинг и использование (API/сервер) оплачиваете самостоятельно. Точная цена зависит от числа камер и сложности задачи (подсчёт людей, распознавание лиц или ANPR) — уточняем в письменном предложении после бесплатной консультации и аудита камер." },
        { q: "Работает ли с существующими камерами?", a: "Да — это основная идея услуги. Покупать новые камеры или специальное оборудование не нужно. Подключаемся напрямую к вашим IP-камерам по RTSP/ONVIF (Hikvision, Dahua и другие). Слой AI добавляется поверх существующего видеонаблюдения, видеорегистратор остаётся на месте." },
        { q: "Законно ли распознавание лиц?", a: "Распознавание лиц можно применять на законных основаниях: для учёта посещаемости сотрудников с их согласия, для безопасности на вашей территории. Важно защищать данные и использовать их только по согласованной цели. Мы можем построить систему на вашем внутреннем сервере (on-premise), тогда данные о лицах вообще не выходят наружу. Конкретные юридические детали согласуем под проект." },
        { q: "Нужно ли ставить новые камеры?", a: "Обычно нет. Если существующие камеры дают нужный угол и качество — их достаточно. Лишь в отдельных точках (например, правильный угол для автономера или слабое освещение) может понадобиться дополнительная камера. Скажем об этом прямо на аудите камер, без навязывания." },
        { q: "Где хранятся данные — в облаке?", a: "Есть оба варианта. Если важна приватность, весь анализ работает на вашем внутреннем сервере (on-premise) и видео не выходит наружу. В более лёгких случаях облачная обработка дешевле. Что подходит именно вам — решаем вместе." },
        { q: "Как приходят уведомления?", a: "Когда происходит событие — сотрудник без каски, незнакомое лицо, машина без доступа или растущая очередь — уведомление за секунды уходит в Telegram, на дашборд или пульт охраны. В уведомлении есть скриншот, время и место; запись потом найдёте в архиве." },
        { q: "Может ли контролировать каски и спецодежду?", a: "Да. Система выявляет сотрудника без каски, жилета или спецодежды и замечает вход в опасную зону. При нарушении сразу идёт сигнал мастеру или в отдел ТБ и запись в журнал — это помогает предотвращать несчастные случаи." },
        { q: "За сколько времени запустится?", a: "Точный срок зависит от числа камер и use-case. Обычно пилот под одну задачу (например, подсчёт людей на входе или ANPR) запускается за несколько недель. Более широкий проект разворачивается поэтапно. Точный срок жёстко фиксируется в письменном предложении." },
        { q: "Можно ли считать посетителей по камере?", a: "Да. Система автоматически считает вошедших и вышедших: дневной трафик магазина (footfall), длину очереди, заполненность зала и часы пик. Эти цифры используются для оценки эффективности маркетинга и расчёта нужного числа сотрудников в смену — всё в виде графиков на дашборде." },
        { q: "Можно ли вести учёт рабочего времени по распознаванию лиц?", a: "Да. Камера распознаёт лицо сотрудника и автоматически отмечает вход и выход — турникет и карта-пропуск не нужны. Журнал посещаемости формируется сам: кто во сколько пришёл, видны опоздания и ранний уход. При позднем приходе или незнакомом лице сразу приходит уведомление в Telegram." },
        { q: "Может ли считывать автономера (ANPR)?", a: "Да. Система считывает госномер автомобиля и записывает в базу: автоматически открывает шлагбаум разрешённой машине, отделяет гостевой транспорт от своего, ведёт журнал въезда-выезда. Охраннику не нужно вручную записывать каждую машину — всё автоматически." },
        { q: "Кто делает AI-видеоаналитику в Ташкенте?", a: "Tezcode — AI Software Factory в Ташкенте и официальный резидент IT Park (свидетельство 6237). Делаем ваши существующие камеры умными с помощью AI: подсчёт людей, посещаемость по лицу, контроль охраны труда и распознавание автономеров. Можно прийти на бесплатную консультацию и обсудить проект: Ташкент, проспект Амира Темура, 10." },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Решения Tezcode, близкие к AI-видеоаналитике.",
      links: [
        { href: "/xodim-nazorati", label: "Контроль сотрудников", desc: "Цифровой контроль рабочего времени, посещаемости и эффективности — естественно объединяется с видео-посещаемостью." },
        { href: "/ai-agent", label: "AI-агент", desc: "AI-агент, превращающий увиденное камерой событие в следующее действие — сам принимает решение и выполняет задачу." },
        { href: "/for-businesses", label: "Для бизнеса", desc: "На бесплатном аудите определим, где AI даст бизнесу наибольший эффект — продажи, безопасность или процессы." },
      ],
    },
    updated: "Обновлено: 23 июля 2026",
    heroImage: {
      src: "/images/ai-video/hero.jpg",
      alt: "AI-видеоаналитика — автоматизация камер с помощью AI, операторский центр",
    },
    showcase: {
      badge: "РЕАЛЬНЫЕ ПРИМЕРЫ",
      title: "Как это выглядит",
      titleAccent: "на AI-камере",
      subtitle: "Так ваши существующие камеры работают с AI.",
      items: [
        {
          src: "/images/ai-video/face.jpg",
          alt: "Учёт посещаемости по лицу — AI распознал сотрудника на офисном турникете",
          caption: "Учёт посещаемости по лицу",
        },
        {
          src: "/images/ai-video/safety.jpg",
          alt: "Охрана труда — AI контролирует каску и защитный жилет на стройке",
          caption: "Охрана труда — контроль каски и формы",
        },
        {
          src: "/images/ai-video/anpr.jpg",
          alt: "Распознавание автономеров (ANPR) — AI считал номер машины у шлагбаума",
          caption: "Распознавание автономеров (ANPR)",
        },
      ],
    },
    service: {
      name: "AI-видеоаналитика — умные камеры на базе существующих — Tezcode",
      description:
        "AI-видеоаналитика в Ташкенте: делаем существующие IP-камеры умными с помощью AI — обнаружение и подсчёт людей, посещаемость по распознаванию лиц, контроль охраны труда (каски/СИЗ) и распознавание автономеров (ANPR). Уведомления в реальном времени, on-premise или облако. Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "AI-видеоаналитика / внедрение системы компьютерного зрения",
    },
  },

  en: {
    hero: {
      badge: "AI video analytics — Tashkent",
      title1: "Camera automation",
      titleAccent: "with AI",
      title2: "",
      subtitle:
        "AI video analytics is artificial intelligence that analyses your camera feed in real time: it counts people, marks attendance by face, checks helmets and workwear, and reads vehicle number plates. No new hardware to buy — we connect to your existing IP cameras, turn what they see into events, and send an instant alert to Telegram or a dashboard. Runs on-premise (on your server) or in the cloud.",
      trust: "IT Park resident • Works with existing cameras • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can an AI camera do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can",
      titleAccent: "AI video analytics do?",
      subtitle:
        "One AI layer teaches your existing cameras several jobs — from counting people to reading number plates. All in real time, without an operator staring at a screen.",
      items: [
        { icon: "users", title: "People detection & counting", desc: "Counts people in and out automatically: store footfall, queue length, room occupancy and peak hours. Precise numbers for marketing and staff planning." },
        { icon: "clipboard-list", title: "Attendance by face recognition", desc: "Recognises a staff member or guest and logs entry and exit automatically — no turnstile. Attendance log, access control, blacklist and VIP-customer alerts." },
        { icon: "life-buoy", title: "Workplace safety control", desc: "On factories and construction sites it spots workers without a helmet, vest or workwear; detects entry into a danger zone (machine, crane) and alerts instantly. Accident prevention." },
        { icon: "search", title: "Number-plate recognition (ANPR)", desc: "Reads a vehicle's plate and logs it to a database: parking and access automation, opening the barrier for an allowed car, separating guest and company transport." },
        { icon: "wifi", title: "Works with existing cameras", desc: "No need to buy new cameras or special hardware. We connect to your IP cameras over RTSP/ONVIF — the AI layer is added on top of your existing CCTV." },
        { icon: "bell", title: "Real-time alerts", desc: "When an event happens — a worker without a helmet, an unknown face, a car without access — an alert reaches Telegram, a dashboard or the security desk within seconds, with a screenshot and timestamp. The recording stays in the archive." },
      ],
    },
    tech: {
      badge: "Technology",
      title: "What technology",
      titleAccent: "we build on?",
      subtitle:
        "A modern computer-vision layer on top of your existing CCTV — in your network or in the cloud.",
      items: [
        { name: "Computer-vision models", desc: "Detection and tracking models isolate people, vehicles and equipment in the frame. Accuracy per use case is tuned to your cameras' angle and lighting." },
        { name: "Face recognition & ANPR/OCR", desc: "Identity matching via face embeddings and OCR to read the plate. The database is built from your list of staff, customers or allowed vehicles." },
        { name: "RTSP / ONVIF connectivity", desc: "The standard IP-camera protocols. We connect directly to Hikvision, Dahua and other cameras that provide an RTSP stream — the NVR stays in place." },
        { name: "On-premise or cloud", desc: "If privacy matters, all analysis runs on your internal server (GPU) and video never leaves the premises. For lighter cases, cloud processing is cheaper." },
        { name: "Alerts & integration", desc: "We pass events to your systems via a Telegram bot, dashboard and webhooks — into a CRM, an attendance system or the security desk. Every event is archived with a timestamp." },
        { name: "Dashboard & reports", desc: "Charts and reports on people flow, attendance, violations and vehicle entry. In daily, weekly or hourly views — numbers ready for decisions." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to a",
      titleAccent: "smart camera",
      subtitle: "First 30 minutes are free. Then every step comes with a written proposal, a clear price (after the spec) and a clear timeline.",
      steps: [
        { num: "01", title: "Camera audit", desc: "We check your cameras: model, placement, angle, lighting and RTSP/ONVIF support. We determine which task realistically works from which camera.", icon: "search" },
        { num: "02", title: "Connect the AI models", desc: "We connect the models for your use case: people counting, face recognition, helmet control or ANPR. The database (staff, allowed vehicles) is built from your data.", icon: "bot" },
        { num: "03", title: "Configure alerts & dashboard", desc: "We define which event alerts whom — Telegram, dashboard or security desk. We set up reports and charts and reduce false alarms.", icon: "bar-chart-2" },
        { num: "04", title: "Launch + support", desc: "We take the system live, train your team and monitor accuracy. When a new camera or task appears, we extend the system.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Scenarios & real examples",
      title: "Which business gets",
      titleAccent: "which benefit?",
      subtitle:
        "How the four core use cases work across industries. Each example is added on top of existing cameras — no new hardware required.",
      items: [
        { tag: "01", title: "Retail & shopping malls", desc: "Counts visitors coming in, shows peak hours and the queue at the till. You learn marketing effectiveness (conversion) and how many staff a shift needs — in hard numbers." },
        { tag: "02", title: "Factory & construction site", desc: "Spots workers without a helmet or vest and entries into danger zones in real time, alerting the foreman or safety team instantly. Violation log and accident prevention." },
        { tag: "03", title: "Office & business centre", desc: "Attendance and access control by face — no turnstile or access card. Who arrived when is logged automatically; an unknown face triggers a security alert." },
        { tag: "04", title: "Parking & restricted area", desc: "Reads the plate and opens the barrier automatically for an allowed car, separates guest transport and keeps an entry-exit log. The guard no longer records every car by hand." },
        { tag: "05", title: "Restaurants & services", desc: "Tracks room occupancy and queues to monitor service speed; recognises a VIP or returning customer's face and alerts the manager in advance." },
        { tag: "06", title: "Warehouse & logistics", desc: "Enforces safety rules in the loading zone, logs vehicle plates via ANPR and analyses people flow across the site." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What does the price",
      titleAccent: "depend on?",
      subtitle:
        "One-time setup starts from $990. After that you run the AI yourself — you pay for your own hosting and usage. The exact price depends on the number of cameras and tasks.",
      factors: [
        { title: "Number of cameras", price: "from $990", desc: "How many cameras and points are analysed is the main factor. From one entrance camera to a whole factory perimeter; the project scales in stages." },
        { title: "Use-case complexity", price: "After the spec", desc: "Simple people counting is one price; face recognition or ANPR with a database is another. Combining several tasks raises complexity and price." },
        { title: "On-premise or cloud", price: "After the spec", desc: "If an internal GPU server is needed for privacy, hardware and setup are factored in. Cloud processing usually gives a cheaper start." },
      ],
      note:
        "The exact price comes in a written proposal after the free consultation, camera audit and agreed spec. Payment: 30% upfront, the rest in stages, based on results. No hidden fees — everything is in the contract.",
    },
    cta: {
      badge: "Time to start",
      title: "Let your cameras",
      titleAccent: "do the work?",
      subtitle: "In a free 30-minute consultation we'll pinpoint which cameras deliver real value for which task. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about AI video analytics.",
      items: [
        { q: "How much does AI video analytics cost?", a: "From $990 (one-time setup) — a single connection fee to link AI to your existing cameras, not a subscription. After setup you run the AI yourself: you pay for your own hosting and usage (API/server). The exact price depends on the number of cameras and the complexity of the task (people counting, face recognition or ANPR) — we confirm it in a written proposal after a free consultation and camera audit." },
        { q: "Does it work with existing cameras?", a: "Yes — that's the whole idea of the service. There's no need to buy new cameras or special hardware. We connect directly to your IP cameras over RTSP/ONVIF (Hikvision, Dahua and others). The AI layer is added on top of your existing CCTV; the NVR stays in place." },
        { q: "Is face recognition legal?", a: "Face recognition can be used on legal grounds: for staff attendance with their consent, and for security on your own premises. The key is protecting the data and using it only for the agreed purpose. We can build the system on your internal server (on-premise), so face data never leaves the premises. Specific legal details are agreed per project." },
        { q: "Do I need to install new cameras?", a: "Usually not. If your existing cameras give the needed angle and quality, they are enough. Only at certain points (for example, the right angle for a number plate, or low light) might an extra camera be recommended. We say this openly during the camera audit, without pushing." },
        { q: "Where is the data stored — in the cloud?", a: "Both options exist. If privacy matters, all analysis runs on your internal server (on-premise) and video never leaves the premises. In lighter cases, cloud processing is cheaper. We decide together what fits you." },
        { q: "How do alerts arrive?", a: "When an event happens — a worker without a helmet, an unknown face, a car without access, or a growing queue — an alert reaches Telegram, a dashboard or the security desk within seconds. The alert includes a screenshot, time and place; the recording is later found in the archive." },
        { q: "Can it monitor helmets and workwear?", a: "Yes. The system detects a worker without a helmet, vest or workwear and notices entry into a danger zone. On a violation, an alert goes to the foreman or safety team at once and is logged — this helps prevent accidents." },
        { q: "How fast does it launch?", a: "The exact timeline depends on the number of cameras and the use case. A pilot for a single task (for example, people counting at an entrance, or ANPR) usually launches within a few weeks. A broader project rolls out in stages. The exact timeline is firmly fixed in the written proposal." },
        { q: "Can it count visitors from the camera?", a: "Yes. The system automatically counts people entering and leaving: daily store footfall, queue length, hall occupancy and peak hours. These numbers help measure marketing performance and plan how many staff each shift needs — all shown as charts on the dashboard." },
        { q: "Can it track staff attendance by face recognition?", a: "Yes. The camera recognises an employee's face and automatically logs entry and exit — no turnstile or access card needed. The attendance log builds itself: who arrived when, with late arrivals and early leaving visible. On a late arrival or an unknown face, an alert goes to Telegram at once." },
        { q: "Can it read car number plates (ANPR)?", a: "Yes. The system reads a vehicle's number plate and records it in a database: it automatically opens the barrier for an allowed car, separates guest vehicles from your own, and keeps an entry-exit log. The guard doesn't have to log every car by hand — it's all automatic." },
        { q: "Who does AI video analytics in Tashkent?", a: "Tezcode — an AI Software Factory in Tashkent and an official IT Park resident (certificate 6237) — makes your existing cameras smart with AI: people counting, attendance by face, workplace-safety control and number-plate recognition. Come in for a free consultation to discuss your project: 10 Amir Temur Avenue, Tashkent." },
      ],
    },
    related: {
      badge: "Related services",
      title: "You may also",
      titleAccent: "find useful",
      subtitle: "Tezcode solutions close to AI video analytics.",
      links: [
        { href: "/xodim-nazorati", label: "Employee monitoring", desc: "Digital control of work time, attendance and productivity — a natural fit with video attendance." },
        { href: "/ai-agent", label: "AI agent", desc: "An AI agent that turns an event a camera sees into the next action — it decides and completes the task itself." },
        { href: "/for-businesses", label: "For business", desc: "In a free audit we'll pinpoint where AI delivers the biggest impact — sales, security or operations." },
      ],
    },
    updated: "Updated: July 23, 2026",
    heroImage: {
      src: "/images/ai-video/hero.jpg",
      alt: "AI video analytics — automating cameras with AI, a security operations room",
    },
    showcase: {
      badge: "REAL EXAMPLES",
      title: "What it looks like",
      titleAccent: "on an AI camera",
      subtitle: "This is how your existing cameras work with AI.",
      items: [
        {
          src: "/images/ai-video/face.jpg",
          alt: "Face-recognition attendance — AI recognises an employee at an office turnstile",
          caption: "Face-recognition attendance",
        },
        {
          src: "/images/ai-video/safety.jpg",
          alt: "Workplace safety — AI checks helmet and hi-vis vest on a construction site",
          caption: "Workplace safety — PPE control",
        },
        {
          src: "/images/ai-video/anpr.jpg",
          alt: "License-plate recognition (ANPR) — AI reads a car's plate at a gate barrier",
          caption: "License-plate recognition (ANPR)",
        },
      ],
    },
    service: {
      name: "AI video analytics — smart cameras on your existing hardware — Tezcode",
      description:
        "AI video analytics in Tashkent: making existing IP cameras smart with AI — people detection and counting, attendance by face recognition, workplace-safety (helmet/PPE) control and number-plate recognition (ANPR). Real-time alerts, on-premise or cloud. Tezcode — IT Park resident, Uzbekistan.",
      serviceType: "AI video analytics / computer-vision system deployment",
    },
  },

  ar: {
    hero: {
      badge: "تحليلات الفيديو بالذكاء الاصطناعي — طشقند",
      title1: "أتمتة الكاميرات",
      titleAccent: "بالذكاء الاصطناعي",
      title2: "",
      subtitle:
        "تحليلات الفيديو بالذكاء الاصطناعي هي ذكاء اصطناعي يحلل بث كاميراتك في الوقت الحقيقي: يعدّ الأشخاص، ويسجّل الحضور بالوجه، ويراقب الخوذ وملابس العمل، ويقرأ لوحات أرقام المركبات. لا حاجة لشراء أجهزة جديدة — نتصل بكاميرات IP الحالية لديك، ونحوّل ما تراه إلى أحداث، ونرسل تنبيهًا فوريًا إلى Telegram أو لوحة التحكم. يعمل on-premise (على خادمك) أو في السحابة.",
      trust: "مقيم في IT Park • يعمل مع الكاميرات الحالية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا تفعل الكاميرا الذكية؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا تفعل",
      titleAccent: "تحليلات الفيديو الذكية؟",
      subtitle:
        "طبقة AI واحدة تعلّم كاميراتك الحالية عدة مهام — من عدّ الأشخاص إلى قراءة لوحات الأرقام. كل ذلك في الوقت الحقيقي دون موظف يحدّق في الشاشة باستمرار.",
      items: [
        { icon: "users", title: "اكتشاف الأشخاص وعدّهم", desc: "يعدّ الداخلين والخارجين تلقائيًا: زيارات المتجر (footfall)، طول الطابور، امتلاء القاعة وساعات الذروة. أرقام دقيقة للتسويق وتخطيط المناوبات." },
        { icon: "clipboard-list", title: "الحضور عبر التعرف على الوجه", desc: "يتعرف على وجه الموظف أو الضيف ويسجّل الدخول والخروج تلقائيًا — دون بوابة. سجل الحضور، التحكم في الوصول، القائمة السوداء وتنبيه العميل المميز (VIP)." },
        { icon: "life-buoy", title: "مراقبة سلامة العمل", desc: "في المصنع وموقع البناء يكتشف الموظف بلا خوذة أو سترة أو ملابس واقية؛ يلاحظ الدخول إلى منطقة خطرة (آلة، رافعة) ويحذّر فورًا. الوقاية من الحوادث." },
        { icon: "search", title: "التعرف على لوحات المركبات (ANPR)", desc: "يقرأ لوحة رقم السيارة ويسجلها في قاعدة البيانات: أتمتة المواقف والدخول، فتح الحاجز للسيارة المسموح لها، فصل مركبات الضيوف عن مركبات العمل." },
        { icon: "wifi", title: "يعمل مع الكاميرات الحالية", desc: "لا حاجة لشراء كاميرات جديدة أو أجهزة خاصة. نتصل بكاميرات IP لديك عبر RTSP/ONVIF — تُضاف طبقة AI فوق نظام المراقبة الحالي." },
        { icon: "bell", title: "تنبيهات في الوقت الحقيقي", desc: "عند وقوع حدث — موظف بلا خوذة، وجه غير معروف، سيارة بلا صلاحية — يصل التنبيه خلال ثوانٍ إلى Telegram أو لوحة التحكم أو مركز الأمن، مع لقطة شاشة ووقت. يبقى التسجيل في الأرشيف." },
      ],
    },
    tech: {
      badge: "التقنية",
      title: "على أي تقنية",
      titleAccent: "نبني؟",
      subtitle:
        "طبقة رؤية حاسوبية (computer vision) حديثة فوق نظام المراقبة الحالي — في شبكتك أو في السحابة.",
      items: [
        { name: "نماذج الرؤية الحاسوبية", desc: "نماذج الاكتشاف (detection) والتتبع تعزل الشخص والمركبة والمعدات في الإطار. تُضبط الدقة لكل حالة استخدام حسب زاوية وإضاءة كاميراتك." },
        { name: "التعرف على الوجه وANPR/OCR", desc: "مطابقة الهوية عبر تضمينات الوجه وOCR لقراءة اللوحة. تُبنى القاعدة من قائمة موظفيك أو عملائك أو المركبات المسموح لها." },
        { name: "اتصال RTSP / ONVIF", desc: "البروتوكولات المعيارية لكاميرات IP. نتصل مباشرة بكاميرات Hikvision وDahua وغيرها التي تعطي بث RTSP — يبقى مسجل الفيديو (NVR) في مكانه." },
        { name: "on-premise أو السحابة", desc: "إذا كانت الخصوصية مهمة — يعمل كل التحليل على خادمك الداخلي (GPU) ولا يخرج الفيديو للخارج. في الحالات الأخف تكون المعالجة السحابية أرخص." },
        { name: "التنبيهات والتكامل", desc: "نمرر الأحداث إلى أنظمتك عبر بوت Telegram ولوحة التحكم وwebhook — إلى CRM أو نظام الحضور أو مركز الأمن. تُؤرشف كل الأحداث بطابع زمني." },
        { name: "لوحة التحكم والتقارير", desc: "رسوم وتقارير عن تدفق الأشخاص والحضور والمخالفات ودخول المركبات. بمقاطع يومية أو أسبوعية أو بالساعة — أرقام جاهزة للقرار." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "كاميرا ذكية",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بعرض مكتوب وسعر واضح (بعد المواصفات) وموعد.",
      steps: [
        { num: "01", title: "تدقيق الكاميرات", desc: "نفحص كاميراتك: الطراز، الموضع، الزاوية، الإضاءة ودعم RTSP/ONVIF. نحدد أي مهمة تعمل فعليًا من أي كاميرا.", icon: "search" },
        { num: "02", title: "ربط نماذج AI", desc: "نربط النماذج لحالة الاستخدام المطلوبة: عدّ الأشخاص، التعرف على الوجه، مراقبة الخوذ أو ANPR. نبني القاعدة (الموظفون، المركبات المسموح لها) من بياناتك.", icon: "bot" },
        { num: "03", title: "ضبط التنبيهات ولوحة التحكم", desc: "نحدد عند أي حدث يذهب التنبيه ولمن — Telegram أو لوحة التحكم أو المركز. نضبط التقارير والرسوم ونقلل الإنذارات الكاذبة.", icon: "bar-chart-2" },
        { num: "04", title: "الإطلاق + الدعم", desc: "ننقل النظام إلى التشغيل الفعلي، ندرّب فريقك ونراقب الدقة. عند إضافة كاميرا أو مهمة جديدة نوسّع النظام.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "سيناريوهات وأمثلة حقيقية",
      title: "أي عمل يحصل على",
      titleAccent: "أي فائدة؟",
      subtitle:
        "كيف تعمل حالات الاستخدام الأربع الأساسية في قطاعات مختلفة. كل مثال يُضاف فوق الكاميرات الحالية — دون أجهزة جديدة.",
      items: [
        { tag: "01", title: "المتجر ومركز التسوق", desc: "يعدّ الزوار الداخلين، يُظهر ساعات الذروة والطابور عند الصندوق. تعرف فعالية التسويق (التحويل) وعدد الموظفين المطلوب للمناوبة بأرقام دقيقة." },
        { tag: "02", title: "المصنع وموقع البناء", desc: "يكتشف الموظف بلا خوذة أو سترة والدخول إلى منطقة خطرة في الوقت الحقيقي، ويرسل إشارة فورية للمشرف أو قسم السلامة. سجل مخالفات ووقاية من الحوادث." },
        { tag: "03", title: "المكتب ومركز الأعمال", desc: "الحضور والتحكم في الوصول بالوجه — دون بوابة أو بطاقة. يُسجَّل من حضر ومتى تلقائيًا؛ وعند وجه غير معروف تذهب إشارة للأمن." },
        { tag: "04", title: "المواقف والمنطقة المغلقة", desc: "يقرأ رقم السيارة ويفتح الحاجز تلقائيًا للسيارة المسموح لها، يفصل مركبات الضيوف ويحتفظ بسجل الدخول والخروج. لا يسجل الحارس كل سيارة يدويًا." },
        { tag: "05", title: "المطعم وقطاع الخدمات", desc: "يتابع امتلاء القاعة والطابور لمراقبة سرعة الخدمة؛ يتعرف على وجه العميل المميز أو العائد ويبلّغ المدير مسبقًا." },
        { tag: "06", title: "المستودع واللوجستيات", desc: "يفرض قواعد السلامة في منطقة التحميل، يسجل رقم المركبة عبر ANPR ويحلل تدفق الأشخاص عبر الموقع." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا يتوقف",
      titleAccent: "السعر؟",
      subtitle:
        "يبدأ التركيب لمرة واحدة من 990$. بعد ذلك تدير عمل الذكاء الاصطناعي بنفسك — تدفع الاستضافة والاستخدام بنفسك. السعر الدقيق يعتمد على عدد الكاميرات والمهام.",
      factors: [
        { title: "عدد الكاميرات", price: "من 990$", desc: "كم كاميرا ونقطة تُحلَّل هو العامل الأساسي. من كاميرا مدخل واحدة إلى محيط مصنع كامل؛ يتوسع المشروع تدريجيًا." },
        { title: "تعقيد حالة الاستخدام", price: "بعد المواصفات", desc: "عدّ الأشخاص البسيط سعر، والتعرف على الوجه أو ANPR بقاعدة بيانات سعر آخر. دمج عدة مهام يرفع التعقيد والسعر." },
        { title: "on-premise أو سحابة", price: "بعد المواصفات", desc: "إذا احتجت خادم GPU داخلي للخصوصية تُحتسب الأجهزة والإعداد. المعالجة السحابية غالبًا تعطي بداية أرخص." },
      ],
      note:
        "يُعطى السعر الدقيق في عرض مكتوب بعد الاستشارة المجانية وتدقيق الكاميرات والاتفاق على المواصفات (المهمة التقنية). الدفع: 30% مقدمًا والباقي على مراحل حسب النتائج. لا رسوم خفية — كل شيء في العقد.",
    },
    cta: {
      badge: "وقت البدء",
      title: "دع كاميراتك",
      titleAccent: "تعمل؟",
      subtitle: "في استشارة مجانية مدتها 30 دقيقة نحدد أي كاميرا تعطي فائدة حقيقية لأي مهمة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن تحليلات الفيديو بالذكاء الاصطناعي.",
      items: [
        { q: "كم تكلف تحليلات الفيديو الذكية؟", a: "من 990$ (تركيب لمرة واحدة) — وهي رسوم لمرة واحدة لربط الذكاء الاصطناعي بكاميراتك الحالية، وليست اشتراكًا. بعد التركيب تدير عمل الذكاء الاصطناعي بنفسك: تدفع الاستضافة والاستخدام (API/الخادم) بنفسك. السعر الدقيق يعتمد على عدد الكاميرات وتعقيد المهمة (عدّ الأشخاص، التعرف على الوجه أو ANPR) — نحدده في عرض مكتوب بعد استشارة مجانية وتدقيق الكاميرات." },
        { q: "هل يعمل مع الكاميرات الحالية؟", a: "نعم — هذه هي الفكرة الأساسية للخدمة. لا حاجة لشراء كاميرات جديدة أو أجهزة خاصة. نتصل مباشرة بكاميرات IP لديك عبر RTSP/ONVIF (Hikvision وDahua وغيرها). تُضاف طبقة AI فوق نظام المراقبة الحالي، ويبقى مسجل الفيديو في مكانه." },
        { q: "هل التعرف على الوجه قانوني؟", a: "يمكن استخدام التعرف على الوجه على أسس قانونية: لتسجيل حضور الموظفين بموافقتهم، وللأمن في منطقتك الخاصة. المهم حماية البيانات واستخدامها للغرض المتفق عليه فقط. يمكننا بناء النظام على خادمك الداخلي (on-premise)، فلا تخرج بيانات الوجوه للخارج إطلاقًا. نتفق على التفاصيل القانونية الدقيقة حسب المشروع." },
        { q: "هل يجب تركيب كاميرات جديدة؟", a: "عادة لا. إذا أعطت الكاميرات الحالية الزاوية والجودة المطلوبة فهي كافية. فقط في نقاط معينة (مثل الزاوية الصحيحة للوحة السيارة أو الإضاءة الضعيفة) قد نوصي بكاميرا إضافية. نقول ذلك بصراحة في تدقيق الكاميرات دون إلزام." },
        { q: "أين تُحفظ البيانات — في السحابة؟", a: "يتوفر الخياران. إذا كانت الخصوصية مهمة، يعمل كل التحليل على خادمك الداخلي (on-premise) ولا يخرج الفيديو للخارج. في الحالات الأخف تكون المعالجة السحابية أرخص. نقرر معًا ما يناسبك." },
        { q: "كيف تصل التنبيهات؟", a: "عند وقوع حدث — موظف بلا خوذة، وجه غير معروف، سيارة بلا صلاحية أو طابور متزايد — يصل التنبيه خلال ثوانٍ إلى Telegram أو لوحة التحكم أو مركز الأمن. يتضمن التنبيه لقطة شاشة ووقتًا ومكانًا؛ ويُوجد التسجيل لاحقًا في الأرشيف." },
        { q: "هل يمكنه مراقبة الخوذ وملابس العمل؟", a: "نعم. يكتشف النظام الموظف بلا خوذة أو سترة أو ملابس واقية ويلاحظ الدخول إلى منطقة خطرة. عند المخالفة تذهب إشارة فورًا للمشرف أو قسم السلامة وتُسجَّل — وهذا يساعد على منع الحوادث." },
        { q: "خلال كم من الوقت يبدأ العمل؟", a: "يعتمد الموعد الدقيق على عدد الكاميرات وحالة الاستخدام. عادة يُطلَق مشروع تجريبي لمهمة واحدة (مثل عدّ الأشخاص عند المدخل أو ANPR) خلال أسابيع قليلة. المشروع الأوسع يُنشر على مراحل. يُثبَّت الموعد الدقيق في العرض المكتوب." },
        { q: "هل يمكن عدّ الزوار عبر الكاميرا؟", a: "نعم. يعدّ النظام تلقائيًا الداخلين والخارجين: عدد زوار المتجر اليومي (footfall)، وطول الطابور، وامتلاء القاعة وساعات الذروة. تُستخدم هذه الأرقام لقياس فعالية التسويق وتخطيط عدد الموظفين المطلوب لكل وردية — كل ذلك كرسوم بيانية على لوحة التحكم." },
        { q: "هل يمكن تسجيل حضور الموظفين بالتعرف على الوجه؟", a: "نعم. تتعرّف الكاميرا على وجه الموظف وتسجّل الدخول والخروج تلقائيًا — دون بوابة أو بطاقة دخول. يتكوّن سجل الحضور من تلقاء نفسه: من أتى ومتى، مع ظهور التأخير والمغادرة المبكرة. عند التأخّر أو ظهور وجه غير معروف يصل تنبيه فوري إلى Telegram." },
        { q: "هل يمكنه قراءة لوحات السيارات (ANPR)؟", a: "نعم. يقرأ النظام لوحة السيارة ويسجّلها في قاعدة البيانات: يفتح الحاجز تلقائيًا للسيارة المصرّح لها، ويفصل مركبات الضيوف عن مركباتك، ويحتفظ بسجل الدخول والخروج. لا يحتاج الحارس إلى تدوين كل سيارة يدويًا — كل شيء تلقائي." },
        { q: "من يقدم تحليلات الفيديو الذكية في طشقند؟", a: "Tezcode — مصنع برمجيات AI في طشقند ومقيم رسمي في IT Park (شهادة 6237) — يجعل كاميراتك الحالية ذكية بالذكاء الاصطناعي: عدّ الأشخاص، الحضور بالوجه، مراقبة سلامة العمل والتعرف على لوحات المركبات. يمكنك زيارتنا لاستشارة مجانية ومناقشة مشروعك: طشقند، شارع أمير تيمور 10." },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضًا",
      subtitle: "حلول Tezcode القريبة من تحليلات الفيديو الذكية.",
      links: [
        { href: "/xodim-nazorati", label: "مراقبة الموظفين", desc: "تحكم رقمي في وقت العمل والحضور والإنتاجية — يتكامل طبيعيًا مع الحضور بالفيديو." },
        { href: "/ai-agent", label: "وكيل AI", desc: "وكيل AI يحوّل الحدث الذي تراه الكاميرا إلى الإجراء التالي — يقرر وينفذ المهمة بنفسه." },
        { href: "/for-businesses", label: "للأعمال", desc: "في تدقيق مجاني نحدد أين يحقق AI أكبر أثر — المبيعات أو الأمن أو العمليات." },
      ],
    },
    updated: "آخر تحديث: 23 يوليو 2026",
    heroImage: {
      src: "/images/ai-video/hero.jpg",
      alt: "تحليلات الفيديو بالذكاء الاصطناعي — أتمتة الكاميرات بالذكاء الاصطناعي، غرفة عمليات الأمن",
    },
    showcase: {
      badge: "أمثلة حقيقية",
      title: "كيف يبدو ذلك",
      titleAccent: "على كاميرا AI",
      subtitle: "هكذا تعمل كاميراتك الحالية مع الذكاء الاصطناعي.",
      items: [
        {
          src: "/images/ai-video/face.jpg",
          alt: "الحضور عبر التعرف على الوجه — الذكاء الاصطناعي يتعرف على الموظف عند بوابة المكتب",
          caption: "الحضور عبر التعرف على الوجه",
        },
        {
          src: "/images/ai-video/safety.jpg",
          alt: "سلامة العمل — الذكاء الاصطناعي يراقب الخوذة والسترة الواقية في موقع البناء",
          caption: "سلامة العمل — مراقبة الخوذة والزي",
        },
        {
          src: "/images/ai-video/anpr.jpg",
          alt: "التعرف على لوحات المركبات (ANPR) — الذكاء الاصطناعي يقرأ لوحة السيارة عند الحاجز",
          caption: "التعرف على لوحات المركبات (ANPR)",
        },
      ],
    },
    service: {
      name: "تحليلات الفيديو بالذكاء الاصطناعي — كاميرات ذكية على أجهزتك الحالية — Tezcode",
      description:
        "تحليلات الفيديو بالذكاء الاصطناعي في طشقند: جعل كاميرات IP الحالية ذكية بالذكاء الاصطناعي — اكتشاف الأشخاص وعدّهم، الحضور عبر التعرف على الوجه، مراقبة سلامة العمل (الخوذ/معدات الوقاية) والتعرف على لوحات المركبات (ANPR). تنبيهات في الوقت الحقيقي، on-premise أو سحابة. Tezcode — مقيم IT Park، أوزبكستان.",
      serviceType: "تحليلات الفيديو الذكية / تطبيق نظام الرؤية الحاسوبية",
    },
  },

  uk: {
    hero: {
      badge: "AI-відеоаналітика — Ташкент",
      title1: "Автоматизація камер",
      titleAccent: "за допомогою ШІ",
      title2: "",
      subtitle:
        "AI-відеоаналітика — це штучний інтелект, який у реальному часі аналізує зображення з ваших камер: рахує людей, відмічає відвідуваність за обличчям, контролює каски й спецодяг і розпізнає автомобільні номери. Купувати нове обладнання не потрібно — ми підключаємося до ваших наявних IP-камер, перетворюємо те, що вони бачать, на події й миттєво надсилаємо сповіщення в Telegram або на дашборд. Працює on-premise (на вашому сервері) або в хмарі.",
      trust: "Резидент IT Park • Працює з наявними камерами • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що вміє AI-камера?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "AI-відеоаналітика?",
      subtitle:
        "Один шар AI навчає ваші наявні камери кільком завданням — від підрахунку людей до читання автономерів. Усе в реальному часі, без оператора, який постійно дивиться в екран.",
      items: [
        { icon: "users", title: "Виявлення та підрахунок людей", desc: "Автоматично рахує тих, хто увійшов і вийшов: відвідуваність магазину (footfall), довжину черги, заповненість залу та години пік. Точні цифри для маркетингу й планування змін." },
        { icon: "clipboard-list", title: "Відвідуваність за розпізнаванням облич", desc: "Розпізнає обличчя співробітника чи гостя й автоматично фіксує вхід-вихід — без турнікета. Журнал відвідуваності, контроль доступу, чорний список і сповіщення про VIP-клієнта." },
        { icon: "life-buoy", title: "Контроль охорони праці", desc: "На заводі та будівництві виявляє співробітника без каски, жилета чи спецодягу; помічає вхід у небезпечну зону (верстат, кран) і одразу попереджає. Профілактика нещасних випадків." },
        { icon: "search", title: "Розпізнавання автономерів (ANPR)", desc: "Читає держномер автомобіля й пише в базу: автоматизація паркування та в'їзду, відкриття шлагбаума дозволеній машині, розділення гостьового та службового транспорту." },
        { icon: "wifi", title: "Працює з наявними камерами", desc: "Купувати нові камери чи спеціальне обладнання не потрібно. Підключаємося до ваших IP-камер по RTSP/ONVIF — шар AI додається поверх наявного відеоспостереження." },
        { icon: "bell", title: "Сповіщення в реальному часі", desc: "Коли стається подія — співробітник без каски, незнайоме обличчя, машина без доступу — сповіщення за секунди йде в Telegram, на дашборд або пульт охорони, зі скріншотом і часом. Запис потім знайдете в архіві." },
      ],
    },
    tech: {
      badge: "Технологія",
      title: "На якій технології",
      titleAccent: "ми будуємо?",
      subtitle:
        "Сучасний шар комп'ютерного зору (computer vision) поверх наявного відеоспостереження — у вашій мережі або в хмарі.",
      items: [
        { name: "Моделі комп'ютерного зору", desc: "Моделі виявлення (detection) і трекінгу виділяють у кадрі людину, транспорт і обладнання. Точність під кожен use-case налаштовується під кут і освітлення ваших камер." },
        { name: "Розпізнавання облич та ANPR/OCR", desc: "Порівняння особи через ембединги обличчя й OCR для читання номерної пластини. База будується на вашому списку співробітників, клієнтів або дозволеного транспорту." },
        { name: "Підключення RTSP / ONVIF", desc: "Стандартні протоколи IP-камер. Підключаємося напряму до камер Hikvision, Dahua та інших, що дають RTSP-потік — відеореєстратор (NVR) залишається на місці." },
        { name: "On-premise або хмара", desc: "Якщо важлива приватність — весь аналіз працює на вашому внутрішньому сервері (GPU), відео не виходить назовні. У легших випадках хмарна обробка дешевша." },
        { name: "Сповіщення та інтеграція", desc: "Передаємо події у вашу систему через Telegram-бот, дашборд і webhook — у CRM, систему відвідуваності або на пульт охорони. Усі події архівуються з міткою часу." },
        { name: "Дашборд і звіти", desc: "Графіки та звіти щодо потоку людей, відвідуваності, порушень і в'їзду авто. У добовому, тижневому чи погодинному розрізі — готові цифри для рішень." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "розумної камери",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок — з письмовою пропозицією, точною ціною (після ТЗ) та терміном.",
      steps: [
        { num: "01", title: "Аудит камер", desc: "Перевіряємо ваші камери: модель, розташування, кут, освітлення й підтримку RTSP/ONVIF. Визначаємо, яке завдання з якої камери реально спрацює.", icon: "search" },
        { num: "02", title: "Підключення AI-моделей", desc: "Підключаємо моделі під потрібний use-case: підрахунок людей, розпізнавання облич, контроль касок або ANPR. Базу (співробітники, дозволений транспорт) будуємо на ваших даних.", icon: "bot" },
        { num: "03", title: "Налаштування сповіщень і дашборда", desc: "Визначаємо, за якої події кому йде сигнал — Telegram, дашборд чи пульт. Налаштовуємо звіти й графіки, зменшуємо хибні спрацювання (false alarm).", icon: "bar-chart-2" },
        { num: "04", title: "Запуск + підтримка", desc: "Переводимо систему в бойовий режим, навчаємо команду й стежимо за точністю. З'явилася нова камера чи завдання — систему розширюємо.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Сценарії та реальні приклади",
      title: "Якому бізнесу",
      titleAccent: "яка користь?",
      subtitle:
        "Як чотири основні use-case працюють у різних галузях. Кожен приклад додається поверх наявних камер — нове обладнання не потрібне.",
      items: [
        { tag: "01", title: "Магазин і торговий центр", desc: "Рахує відвідувачів, що заходять, показує години пік і чергу біля каси. Ви точними цифрами дізнаєтеся ефективність маркетингу (конверсію) і скільки співробітників потрібно на зміну." },
        { tag: "02", title: "Завод і будмайданчик", desc: "У реальному часі виявляє співробітника без каски й жилета, вхід у небезпечну зону і одразу шле сигнал майстру або у відділ ОП. Журнал порушень і профілактика нещасних випадків." },
        { tag: "03", title: "Офіс і бізнес-центр", desc: "Відвідуваність і контроль доступу за обличчям — без турнікета й картки-перепустки. Хто коли прийшов, фіксується автоматично; при незнайомому обличчі — сигнал охороні." },
        { tag: "04", title: "Паркування і закрита територія", desc: "Читає автономер і автоматично відкриває шлагбаум дозволеній машині, відокремлює гостьовий транспорт і веде журнал в'їзду-виїзду. Охоронцю не треба вручну записувати кожну машину." },
        { tag: "05", title: "Ресторан і сфера послуг", desc: "Відстежує заповненість залу й чергу, контролює швидкість обслуговування; розпізнає обличчя VIP чи клієнта, що повернувся, і заздалегідь сповіщає адміністратора." },
        { tag: "06", title: "Склад і логістика", desc: "Контролює правила безпеки в зоні завантаження, фіксує номер транспорту через ANPR і аналізує потік людей територією." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "вартість?",
      subtitle:
        "Разове підключення — від $990. Далі ви самі керуєте роботою AI: хостинг і використання оплачуєте самостійно. Точна ціна залежить від кількості камер і завдань.",
      factors: [
        { title: "Кількість камер", price: "від $990", desc: "Скільки камер і точок аналізується — головний фактор. Від однієї камери на вході до периметра цілого заводу; проєкт розширюється поетапно." },
        { title: "Складність use-case", price: "Після ТЗ", desc: "Простий підрахунок людей — одна ціна, розпізнавання облич або ANPR з базою — інша. При об'єднанні кількох завдань складність і ціна зростають." },
        { title: "On-premise або хмара", price: "Після ТЗ", desc: "Якщо для приватності потрібен внутрішній GPU-сервер — враховується обладнання і налаштування. Хмарна обробка частіше дає дешевший старт." },
      ],
      note:
        "Точна ціна дається письмово після безкоштовної консультації, аудиту камер і узгодження ТЗ (технічного завдання). Оплата: 30% передоплата, решта поетапно, за результатом. Прихованих платежів немає — усе в договорі.",
    },
    cta: {
      badge: "Час починати",
      title: "Хай ваші камери",
      titleAccent: "працюють?",
      subtitle: "На безкоштовній 30-хвилинній консультації визначимо, які камери під яке завдання дадуть реальну користь. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про AI-відеоаналітику.",
      items: [
        { q: "Скільки коштує AI-відеоаналітика?", a: "Від $990 (разове підключення) — це одноразова плата за підключення AI до ваших наявних камер, а не підписка. Після підключення ви самі керуєте роботою AI: хостинг і використання (API/сервер) оплачуєте самостійно. Точна ціна залежить від кількості камер і складності завдання (підрахунок людей, розпізнавання облич або ANPR) — уточнюємо в письмовій пропозиції після безкоштовної консультації та аудиту камер." },
        { q: "Чи працює з наявними камерами?", a: "Так — це основна ідея послуги. Купувати нові камери чи спеціальне обладнання не потрібно. Підключаємося напряму до ваших IP-камер по RTSP/ONVIF (Hikvision, Dahua та інші). Шар AI додається поверх наявного відеоспостереження, відеореєстратор залишається на місці." },
        { q: "Чи законне розпізнавання облич?", a: "Розпізнавання облич можна застосовувати на законних підставах: для обліку відвідуваності співробітників за їхньою згодою, для безпеки на вашій території. Важливо захищати дані й використовувати їх лише за узгодженою метою. Ми можемо побудувати систему на вашому внутрішньому сервері (on-premise), тоді дані про обличчя взагалі не виходять назовні. Конкретні юридичні деталі узгоджуємо під проєкт." },
        { q: "Чи потрібно ставити нові камери?", a: "Зазвичай ні. Якщо наявні камери дають потрібний кут і якість — їх достатньо. Лише в окремих точках (наприклад, правильний кут для автономера чи слабке освітлення) може знадобитися додаткова камера. Скажемо про це прямо на аудиті камер, без нав'язування." },
        { q: "Де зберігаються дані — у хмарі?", a: "Є обидва варіанти. Якщо важлива приватність, весь аналіз працює на вашому внутрішньому сервері (on-premise) і відео не виходить назовні. У легших випадках хмарна обробка дешевша. Що підходить саме вам — вирішуємо разом." },
        { q: "Як приходять сповіщення?", a: "Коли стається подія — співробітник без каски, незнайоме обличчя, машина без доступу чи зростаюча черга — сповіщення за секунди йде в Telegram, на дашборд або пульт охорони. У сповіщенні є скріншот, час і місце; запис потім знайдете в архіві." },
        { q: "Чи може контролювати каски й спецодяг?", a: "Так. Система виявляє співробітника без каски, жилета чи спецодягу й помічає вхід у небезпечну зону. При порушенні одразу йде сигнал майстру або у відділ ОП і запис у журнал — це допомагає запобігати нещасним випадкам." },
        { q: "За скільки часу запуститься?", a: "Точний термін залежить від кількості камер і use-case. Зазвичай пілот під одне завдання (наприклад, підрахунок людей на вході або ANPR) запускається за кілька тижнів. Ширший проєкт розгортається поетапно. Точний термін жорстко фіксується в письмовій пропозиції." },
        { q: "Чи можна рахувати відвідувачів по камері?", a: "Так. Система автоматично рахує тих, хто увійшов і вийшов: денний трафік магазину (footfall), довжину черги, заповненість залу та години пік. Ці цифри використовуються для оцінки ефективності маркетингу й розрахунку потрібної кількості співробітників у зміну — усе у вигляді графіків на дашборді." },
        { q: "Чи можна вести облік робочого часу за розпізнаванням облич?", a: "Так. Камера розпізнає обличчя співробітника й автоматично відмічає вхід і вихід — турнікет і картка-перепустка не потрібні. Журнал відвідуваності формується сам: хто о котрій прийшов, видно запізнення та ранній вихід. За пізнього приходу чи незнайомого обличчя одразу приходить сповіщення в Telegram." },
        { q: "Чи може зчитувати автономери (ANPR)?", a: "Так. Система зчитує держномер автомобіля й записує в базу: автоматично відкриває шлагбаум дозволеній машині, відділяє гостьовий транспорт від власного, веде журнал в'їзду-виїзду. Охоронцю не потрібно вручну записувати кожну машину — усе автоматично." },
        { q: "Хто робить AI-відеоаналітику в Ташкенті?", a: "Tezcode — AI Software Factory в Ташкенті та офіційний резидент IT Park (свідоцтво 6237) — робить ваші наявні камери розумними за допомогою AI: підрахунок людей, відвідуваність за обличчям, контроль охорони праці та розпізнавання автономерів. Можна прийти на безкоштовну консультацію й обговорити проєкт: Ташкент, проспект Аміра Темура, 10." },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Рішення Tezcode, близькі до AI-відеоаналітики.",
      links: [
        { href: "/xodim-nazorati", label: "Контроль співробітників", desc: "Цифровий контроль робочого часу, відвідуваності та ефективності — природно поєднується з відео-відвідуваністю." },
        { href: "/ai-agent", label: "AI-агент", desc: "AI-агент, що перетворює побачену камерою подію на наступну дію — сам ухвалює рішення і виконує завдання." },
        { href: "/for-businesses", label: "Для бізнесу", desc: "На безкоштовному аудиті визначимо, де AI дасть бізнесу найбільший ефект — продажі, безпека чи процеси." },
      ],
    },
    updated: "Оновлено: 23 липня 2026",
    heroImage: {
      src: "/images/ai-video/hero.jpg",
      alt: "AI-відеоаналітика — автоматизація камер за допомогою AI, операторський центр",
    },
    showcase: {
      badge: "РЕАЛЬНІ ПРИКЛАДИ",
      title: "Як це виглядає",
      titleAccent: "на AI-камері",
      subtitle: "Так ваші наявні камери працюють з AI.",
      items: [
        {
          src: "/images/ai-video/face.jpg",
          alt: "Облік відвідуваності за обличчям — AI розпізнав співробітника на офісному турнікеті",
          caption: "Облік відвідуваності за обличчям",
        },
        {
          src: "/images/ai-video/safety.jpg",
          alt: "Охорона праці — AI контролює каску й захисний жилет на будівництві",
          caption: "Охорона праці — контроль каски й форми",
        },
        {
          src: "/images/ai-video/anpr.jpg",
          alt: "Розпізнавання автономерів (ANPR) — AI зчитав номер машини біля шлагбаума",
          caption: "Розпізнавання автономерів (ANPR)",
        },
      ],
    },
    service: {
      name: "AI-відеоаналітика — розумні камери на наявному обладнанні — Tezcode",
      description:
        "AI-відеоаналітика в Ташкенті: робимо наявні IP-камери розумними за допомогою AI — виявлення та підрахунок людей, відвідуваність за розпізнаванням облич, контроль охорони праці (каски/ЗІЗ) та розпізнавання автономерів (ANPR). Сповіщення в реальному часі, on-premise або хмара. Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "AI-відеоаналітика / впровадження системи комп'ютерного зору",
    },
  },
};
