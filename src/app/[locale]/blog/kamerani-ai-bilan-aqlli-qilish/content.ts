import type { ArticleContent } from "@/components/blog/types";

// Cluster support for the WINNING video-analytics page (/ai-video-analitika
// ranks #1 + AI Overview). No supporting blog existed. Targets "kamera ai",
// "odam sanash", "yuz tanish davomat", "ANPR avto raqam", RU "видеоаналитика
// для магазина". Answer-first for AI Overview; reinforces the cluster to defend
// and expand the win. uz master + ru + en. Honest capabilities only.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI video analitika / Qo'llanma",
      title: "Kamerangizni AI bilan aqlli qilish: odam sanash, davomat va xavfsizlik (2026)",
      subtitle:
        "Sizda kameralar bor, lekin ular faqat yozib turadi. AI video analitika o'sha kameralarni aqlli qiladi: odam sanaydi, yuzni tanib davomat yuritadi, xavfsizlikni nazorat qiladi. Yangi kamera shart emas.",
      dateLabel: "2026-yil 15-avgust",
      readTime: "7 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "AI video analitika — bu mavjud IP kameralaringizdan kelayotgan tasvirni sun'iy intellekt yordamida real vaqtda tahlil qilish. Yangi kamera olish shart emas — dasturiy qatlam eski kameralar ustiga qo'shiladi. Asosiy imkoniyatlar: odam aniqlash va sanash (footfall — do'konga qancha mijoz kirgani), yuzni tanish orqali xodim davomati, ish xavfsizligi nazorati (kaska/forma, taqiqlangan hududga kirish), avto raqam tanish (ANPR — avtoturargoh, kirish-chiqish). Anomaliya bo'lsa Telegram yoki dashboardга real-time ogohlantirish keladi. Tezcode buni Toshkentда $990 dan (bir martalik ulash) o'rnatadi.",
    },
    sections: [
      {
        heading: "AI video analitika nima qiladi?",
        paragraphs: [
          "Oddiy kamera faqat yozadi — kimdir keyin ko'rishi kerak. AI video analitika esa tasvirni o'zi tushunadi va harakat qiladi:",
        ],
        bullets: [
          "Odam sanash (footfall): do'kon yoki obyektga qancha odam kirdi/chiqdi — kun va soat bo'yicha aniq raqam.",
          "Yuzni tanish orqali davomat: xodim kelgan-ketgan vaqti avtomatik qayd etiladi — qo'lda jurnal yoki barmoq skaner shart emas.",
          "Ish xavfsizligi: kaska yoki forma yo'qligini, taqiqlangan hududga kirishni aniqlaydi va ogohlantiradi.",
          "Avto raqam tanish (ANPR): avtoturargoh, kirish-chiqish, ruxsat berilgan mashinalar nazorati.",
          "Real-time ogohlantirish: anomaliya (odam yiqildi, ruxsatsiz kirish, olomon) bo'lsa darhol Telegram/dashboardга signal.",
        ],
      },
      {
        heading: "Nega yangi kamera shart emas?",
        paragraphs: [
          "Eng katta afzallik: AI qatlami sizning mavjud kameralaringiz ustiga qo'shiladi.",
        ],
        bullets: [
          "Mavjud IP kameralar (Hikvision, Dahua va boshqalar) bilan ishlaydi — ularni almashtirmaysiz.",
          "Faqat dasturiy qatlam qo'shiladi, kamera va NVR o'z joyida qoladi.",
          "Bu tejamli: minglab dollarlik yangi kamera tizimi o'rniga mavjudini aqlli qilasiz.",
        ],
      },
      {
        heading: "Qaysi biznesga qanday foyda?",
        paragraphs: [
          "AI video analitika turli sohaga mos:",
        ],
        bullets: [
          "Do'kon va savdo markazi: odam oqimini sanab, band soatlar va konversiyani bilasiz — smena va tovar rejasi aniqlashadi.",
          "Restoran va kafe: mehmonlar oqimini sanab, smena va zaxira rejalashtiriladi (batafsil: /ai-restoran-uchun).",
          "Ishlab chiqarish va qurilish: ish xavfsizligi nazorati (kaska/forma), xavfli hudud.",
          "Ofis va korxona: yuz tanish orqali davomat, kirish nazorati.",
          "Avtoturargoh va logistika: ANPR bilan mashina kirish-chiqishi.",
        ],
      },
      {
        heading: "Ma'lumot xavfsizmi?",
        paragraphs: [
          "Video va tahlil sizning tizimingiz doirasida qoladi, uchinchi tomonga berilmaydi. Tezcode — IT Park rasmiy rezidenti (guvohnoma №6237), rasmiy shartnoma va maxfiylik majburiyatlari bilan ishlaydi. Tizim lokal serverда yoki sizning infratuzilmangizда ishlashi mumkin.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI video analitika nima?",
          a: "Bu mavjud IP kameralaringizdan kelayotgan tasvirni AI yordamida real vaqtда tahlil qilish: odam sanash, yuz tanish orqali davomat, ish xavfsizligi nazorati, avto raqam tanish (ANPR). Yangi kamera shart emas — dasturiy qatlam eski kameralar ustiga qo'shiladi.",
        },
        {
          q: "Mavjud kameralarimni almashtirishim kerakmi?",
          a: "Yo'q. AI qatlami sizning mavjud IP kameralaringiz (Hikvision, Dahua va boshqalar) bilan ishlaydi. Kamera va NVR o'z joyida qoladi, faqat dasturiy qatlam qo'shiladi. Bu yangi tizim olishдан ancha tejamli.",
        },
        {
          q: "Do'konда odam sanash qanday ishlaydi?",
          a: "AI kameradagi tasvirdan odamlarni aniqlaydi va kirgan/chiqqanlarni sanaydi. Natijada kun va soat bo'yicha aniq footfall raqami olasiz — band soatlar, smena rejasi va konversiya (necha kishi kirib, necha xarid qilgani) uchun.",
        },
        {
          q: "Yuz tanish orqali davomat ishonchli mi?",
          a: "Ha. Xodim kamera oldidan o'tganda yuzi tanib olinadi va kelgan-ketgan vaqti avtomatik qayd etiladi. Barmoq skaner yoki qo'lda jurnal shart emas. Aniqlik yorug'lik va kamera joylashuviga bog'liq — o'rnatishда buni sozlaymiz.",
        },
        {
          q: "Narxi qancha?",
          a: "AI video analitika $990 dan boshlanadi — bu bir martalik ulash. Mavjud kameralaringiz bilan ishlaydi, keyin tizimni o'zingiz boshqarasiz. Aniq narx kamera soni va vazifalarга (odam sanash, davomat, ANPR) bog'liq.",
        },
        {
          q: "Toshkentда kamerani AI bilan kim aqlli qiladi?",
          a: "Tezcode — Toshkentдаги AI Software Factory va IT Park rezidenti — mavjud kameralarni AI bilan aqlli qiladi: odam sanash, yuz tanish davomati, ish xavfsizligi, ANPR. Batafsil: tezcode.dev/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Kameralaringizni AI bilan aqlli qilaymizmi?",
      subtitle:
        "Tezcode bepul konsultatsiyada mavjud kameralaringizni ko'rib, qaysi AI imkoniyatlari (odam sanash, davomat, ANPR) sizga foyda berishini aniqlaydi. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "ИИ-видеоаналитика / Руководство",
      title: "Сделайте камеры умными с ИИ: подсчёт людей, посещаемость и безопасность (2026)",
      subtitle:
        "У вас есть камеры, но они только записывают. ИИ-видеоаналитика делает их умными: считает людей, ведёт учёт посещаемости по лицу, контролирует безопасность. Новые камеры не нужны.",
      dateLabel: "15 августа 2026",
      readTime: "7 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "ИИ-видеоаналитика — это анализ изображения с ваших существующих IP-камер с помощью ИИ в реальном времени. Новые камеры не нужны — программный слой добавляется поверх старых. Основные возможности: детекция и подсчёт людей (footfall — сколько клиентов зашло), учёт посещаемости сотрудников по лицу, контроль охраны труда (каска/форма, вход в запретную зону), распознавание автономеров (ANPR — парковка, въезд-выезд). При аномалии приходит уведомление в Telegram или на дашборд. Tezcode внедряет это в Ташкенте от $990 (разовое подключение).",
    },
    sections: [
      {
        heading: "Что делает ИИ-видеоаналитика?",
        paragraphs: [
          "Обычная камера только записывает — кто-то должен потом смотреть. ИИ-видеоаналитика сама понимает изображение и действует:",
        ],
        bullets: [
          "Подсчёт людей (footfall): сколько людей зашло/вышло — точная цифра по дням и часам.",
          "Учёт посещаемости по лицу: время прихода/ухода сотрудника фиксируется автоматически — без журнала и отпечатка.",
          "Охрана труда: определяет отсутствие каски/формы, вход в запретную зону и предупреждает.",
          "Распознавание автономеров (ANPR): парковка, въезд-выезд, контроль разрешённых машин.",
          "Уведомления в реальном времени: при аномалии (человек упал, несанкционированный вход, толпа) — сигнал в Telegram/дашборд.",
        ],
      },
      {
        heading: "Почему не нужны новые камеры?",
        paragraphs: [
          "Главное преимущество: ИИ-слой добавляется поверх ваших существующих камер.",
        ],
        bullets: [
          "Работает с существующими IP-камерами (Hikvision, Dahua и др.) — их не меняют.",
          "Добавляется только программный слой, камеры и NVR остаются на месте.",
          "Это экономно: вместо новой системы за тысячи долларов вы делаете умной существующую.",
        ],
      },
      {
        heading: "Какому бизнесу какая польза?",
        paragraphs: [
          "ИИ-видеоаналитика подходит разным отраслям:",
        ],
        bullets: [
          "Магазин и ТЦ: считая поток людей, вы знаете часы пик и конверсию — план смен и товара уточняется.",
          "Ресторан и кафе: подсчёт потока гостей для планирования смен и запасов (подробнее: /ai-restoran-uchun).",
          "Производство и стройка: контроль охраны труда (каска/форма), опасные зоны.",
          "Офис и предприятие: посещаемость по лицу, контроль входа.",
          "Парковка и логистика: ANPR для въезда-выезда машин.",
        ],
      },
      {
        heading: "Данные в безопасности?",
        paragraphs: [
          "Видео и анализ остаются в пределах вашей системы, третьим лицам не передаются. Tezcode — официальный резидент IT Park (свидетельство №6237), работаем по договору и с обязательствами по конфиденциальности. Система может работать на локальном сервере или в вашей инфраструктуре.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что такое ИИ-видеоаналитика?",
          a: "Это анализ изображения с ваших существующих IP-камер с помощью ИИ в реальном времени: подсчёт людей, учёт посещаемости по лицу, контроль охраны труда, распознавание автономеров (ANPR). Новые камеры не нужны — программный слой добавляется поверх старых.",
        },
        {
          q: "Нужно ли менять существующие камеры?",
          a: "Нет. ИИ-слой работает с вашими существующими IP-камерами (Hikvision, Dahua и др.). Камеры и NVR остаются на месте, добавляется только программный слой. Это гораздо экономнее покупки новой системы.",
        },
        {
          q: "Как работает подсчёт людей в магазине?",
          a: "ИИ определяет людей на изображении с камеры и считает зашедших/вышедших. В итоге вы получаете точную цифру footfall по дням и часам — для часов пик, плана смен и конверсии (сколько зашло и сколько купило).",
        },
        {
          q: "Надёжен ли учёт посещаемости по лицу?",
          a: "Да. Когда сотрудник проходит мимо камеры, его лицо распознаётся и время прихода/ухода фиксируется автоматически. Без отпечатка и журнала. Точность зависит от освещения и расположения камеры — мы настраиваем это при внедрении.",
        },
        {
          q: "Сколько это стоит?",
          a: "ИИ-видеоаналитика от $990 — это разовое подключение. Работает с вашими существующими камерами, дальше системой управляете сами. Точная цена зависит от числа камер и задач (подсчёт людей, посещаемость, ANPR).",
        },
        {
          q: "Кто делает камеры умными с ИИ в Ташкенте?",
          a: "Tezcode — AI Software Factory в Ташкенте и резидент IT Park — делает существующие камеры умными с ИИ: подсчёт людей, посещаемость по лицу, охрана труда, ANPR. Подробнее: tezcode.dev/ru/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Сделаем ваши камеры умными с ИИ?",
      subtitle:
        "На бесплатной консультации Tezcode посмотрит ваши существующие камеры и определит, какие возможности ИИ (подсчёт людей, посещаемость, ANPR) дадут вам пользу. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI video analytics / Guide",
      title: "Make your cameras smart with AI: people counting, attendance and safety (2026)",
      subtitle:
        "You have cameras, but they only record. AI video analytics makes them smart: it counts people, tracks attendance by face, and monitors safety. No new cameras needed.",
      dateLabel: "August 15, 2026",
      readTime: "7 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "AI video analytics is real-time AI analysis of the feed from your existing IP cameras. No new cameras needed — a software layer is added on top of the old ones. Core capabilities: person detection and counting (footfall — how many customers entered), attendance via face recognition, workplace-safety monitoring (helmet/uniform, entry into restricted zones), and license-plate recognition (ANPR — parking, entry/exit). On an anomaly, an alert goes to Telegram or a dashboard. Tezcode deploys this in Tashkent from $990 (one-time setup).",
    },
    sections: [
      {
        heading: "What does AI video analytics do?",
        paragraphs: [
          "A normal camera only records — someone has to watch later. AI video analytics understands the image itself and acts:",
        ],
        bullets: [
          "People counting (footfall): how many entered/left — an exact number by day and hour.",
          "Attendance by face: an employee's arrival/departure time is logged automatically — no logbook or fingerprint.",
          "Workplace safety: detects a missing helmet/uniform or entry into a restricted zone and alerts.",
          "License-plate recognition (ANPR): parking, entry/exit, control of allowed vehicles.",
          "Real-time alerts: on an anomaly (a fall, unauthorized entry, a crowd) — a signal to Telegram/dashboard.",
        ],
      },
      {
        heading: "Why no new cameras are needed",
        paragraphs: [
          "The biggest advantage: the AI layer is added on top of your existing cameras.",
        ],
        bullets: [
          "Works with existing IP cameras (Hikvision, Dahua and others) — you don't replace them.",
          "Only a software layer is added; cameras and NVR stay in place.",
          "It's economical: instead of a new camera system for thousands of dollars, you make your existing one smart.",
        ],
      },
      {
        heading: "Which business gains what?",
        paragraphs: [
          "AI video analytics fits various industries:",
        ],
        bullets: [
          "Retail and malls: counting foot traffic, you learn peak hours and conversion — refining shifts and stock.",
          "Restaurants and cafés: counting guest flow for shift and stock planning (more: /ai-restoran-uchun).",
          "Manufacturing and construction: workplace-safety monitoring (helmet/uniform), hazardous zones.",
          "Offices and enterprises: attendance by face, entry control.",
          "Parking and logistics: ANPR for vehicle entry/exit.",
        ],
      },
      {
        heading: "Is the data safe?",
        paragraphs: [
          "Video and analysis stay within your own system and aren't shared with third parties. Tezcode is an official IT Park resident (certificate №6237); we work under contract with confidentiality commitments. The system can run on a local server or in your own infrastructure.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is AI video analytics?",
          a: "It's real-time AI analysis of the feed from your existing IP cameras: people counting, attendance by face, workplace-safety monitoring, license-plate recognition (ANPR). No new cameras needed — a software layer is added on top of the old ones.",
        },
        {
          q: "Do I need to replace my existing cameras?",
          a: "No. The AI layer works with your existing IP cameras (Hikvision, Dahua and others). Cameras and NVR stay in place; only a software layer is added. This is far more economical than buying a new system.",
        },
        {
          q: "How does people counting work in a store?",
          a: "The AI detects people in the camera feed and counts those entering/leaving. You get an exact footfall number by day and hour — for peak hours, shift planning and conversion (how many entered and how many bought).",
        },
        {
          q: "Is attendance by face reliable?",
          a: "Yes. When an employee passes the camera, their face is recognized and arrival/departure is logged automatically. No fingerprint or logbook. Accuracy depends on lighting and camera placement — we tune this at deployment.",
        },
        {
          q: "How much does it cost?",
          a: "AI video analytics starts from $990 — a one-time setup. It works with your existing cameras, and then you manage the system yourself. The exact price depends on the number of cameras and tasks (people counting, attendance, ANPR).",
        },
        {
          q: "Who makes cameras smart with AI in Tashkent?",
          a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — makes existing cameras smart with AI: people counting, face-based attendance, workplace safety, ANPR. More: tezcode.dev/en/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Shall we make your cameras smart with AI?",
      subtitle:
        "In a free consultation Tezcode will look at your existing cameras and determine which AI capabilities (people counting, attendance, ANPR) will benefit you. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
