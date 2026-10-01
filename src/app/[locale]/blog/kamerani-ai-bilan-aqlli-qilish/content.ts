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
      title: "Kameraga AI qanday ulanadi: kamera talablari va narxi (2026)",
      subtitle:
        "Kameraga AI ulash uchun avval vazifa, tasvir tiniqligi, rakurs, yorug'lik va IP oqim tekshiriladi. Mavjud kamera mos bo'lsa, undan foydalaniladi; xira yoki mos kelmaydigan kamera sozlanishi, qo'shilishi yoki almashtirilishi mumkin.",
      dateLabel: "2026-yil 15-avgust",
      readTime: "7 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Kameraga AI ulash jarayoni vazifani aniqlash va kamera oqimini tekshirishdan boshlanadi. IP kamera RTSP/ONVIF orqali video bersa ham, xira tasvir yoki noto'g'ri rakurs aniqlikka xalaqit qilishi mumkin. Auditdan keyin mavjud kamerani ulash, uni sozlash yoki qo'shimcha/yangi kamera kerakligi aytiladi. AI odam sanashi, yuz orqali davomat, kaska nazorati yoki ANPR ni bajarishi mumkin. Toshkentda Tezcode integratsiyasi $990 dan boshlanadi; server va foydalanish xarajatlari alohida hisoblanadi.",
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
          "Real-time ogohlantirish: anomaliya (odam yiqildi, ruxsatsiz kirish, olomon) bo'lsa darhol Telegram/dashboardga signal.",
        ],
      },
      {
        heading: "Mavjud kamerani ishlatish mumkinmi?",
        paragraphs: [
          "Buni faqat kamera oqimi va tasviri tanlangan vazifaga mos bo'lsa aytish mumkin. RTSP/ONVIF mosligi zarur, lekin o'zi yetarli emas.",
        ],
        bullets: [
          "Tasvir tiniqligi, rakurs, yorug'lik, kamera modeli va RTSP/ONVIF oqimi tekshiriladi.",
          "Kamera mos bo'lsa, AI mavjud oqimga ulanadi va NVR qolishi mumkin.",
          "Tasvir xira yoki vazifa uchun rakurs noto'g'ri bo'lsa, kamera sozlanadi, qo'shiladi yoki almashtiriladi.",
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
          "Video va tahlil sizning tizimingiz doirasida qoladi, uchinchi tomonga berilmaydi. Tezcode — IT Park rasmiy rezidenti (guvohnoma №6237), rasmiy shartnoma va maxfiylik majburiyatlari bilan ishlaydi. Tizim lokal serverda yoki sizning infratuzilmangizda ishlashi mumkin.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI video analitika nima?",
          a: "Bu kamera oqimini AI yordamida real vaqtda tahlil qilish: odam sanash, yuz tanish orqali davomat, ish xavfsizligi nazorati va avto raqam tanish (ANPR). Mavjud kamera faqat vazifaga mos tasvir sifati va oqimni bersa ishlatiladi; xira tasvirda sozlash yoki kamera yangilash kerak bo'lishi mumkin.",
        },
        {
          q: "Mavjud kameramga AI ulash mumkinmi?",
          a: "Bu kamera modeli va tanlangan vazifaga bog'liq. Avval RTSP/ONVIF oqimi, tasvir tiniqligi, rakurs va yorug'lik tekshiriladi. Xira tasvir AI aniqligini pasaytirishi mumkin; audit natijasiga qarab sozlash, qo'shimcha kamera yoki almashtirish tavsiya qilinadi. Mos kamera bo'lsa, odatda AI ni mavjud oqimga ulash mumkin.",
        },
        {
          q: "Do'konda odam sanash qanday ishlaydi?",
          a: "AI kameradagi tasvirdan odamlarni aniqlaydi va kirgan/chiqqanlarni sanaydi. Natijada kun va soat bo'yicha aniq footfall raqami olasiz — band soatlar, smena rejasi va konversiya (necha kishi kirib, necha xarid qilgani) uchun.",
        },
        {
          q: "Yuz tanish orqali davomat ishonchli mi?",
          a: "Ha. Xodim kamera oldidan o'tganda yuzi tanib olinadi va kelgan-ketgan vaqti avtomatik qayd etiladi. Barmoq skaner yoki qo'lda jurnal shart emas. Aniqlik yorug'lik va kamera joylashuviga bog'liq — o'rnatishda buni sozlaymiz.",
        },
        {
          q: "Narxi qancha?",
          a: "AI video analitika $990 dan boshlanadi — bu bir martalik ulash. Yakuniy narx kamera soni va vazifalarga bog'liq; auditda mavjud kameralar mosligi ham tekshiriladi. Qo'shimcha kamera yoki server kerak bo'lsa, xarajatlar alohida hisoblanadi.",
        },
        {
          q: "Toshkentda kamerani AI bilan kim aqlli qiladi?",
          a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rezidenti — kamera mosligini avval tekshirib, AI video analitika ulaydi: odam sanash, yuz orqali davomat, ish xavfsizligi va ANPR. Batafsil: tezcode.dev/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Kameralaringizni AI bilan aqlli qilaymizmi?",
      subtitle:
        "Tezcode bepul auditda kamera tasviri va oqimini tekshirib, qaysi vazifalar ishlashi hamda qo'shimcha jihoz kerakligini aniqlaydi. Majburiyat yo'q.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "ИИ-видеоаналитика / Руководство",
      title: "Как подключить ИИ к камере видеонаблюдения: требования и цена в Ташкенте (2026)",
      subtitle:
        "Чтобы подключить ИИ к камере, сначала проверяют задачу, чёткость изображения, ракурс, освещение и видеопоток. Подходящую камеру можно использовать; размытое или неподходящее изображение может потребовать настройки, дополнительной или новой камеры.",
      dateLabel: "15 августа 2026",
      readTime: "7 минут чтения",
    },
    tldr: {
      label: "Короткий ответ",
      text:
        "Подключение ИИ к камере начинается с выбора задачи и проверки видеопотока. Поддержки RTSP/ONVIF недостаточно: размытое изображение, плохое освещение или неподходящий ракурс могут снизить точность. После аудита определяют, можно ли подключить существующую камеру, нужно ли её настроить или потребуется дополнительная/новая камера. ИИ может считать людей, отмечать посещаемость по лицу, контролировать каски и распознавать номера (ANPR). Интеграция Tezcode в Ташкенте — от $990; сервер и использование оплачиваются отдельно.",
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
        heading: "Можно ли использовать существующую камеру?",
        paragraphs: [
          "Это зависит от задачи и качества видеопотока. Поддержка RTSP/ONVIF необходима, но сама по себе не гарантирует точное распознавание.",
        ],
        bullets: [
          "Проверяем чёткость изображения, ракурс, освещение, модель камеры и поток RTSP/ONVIF.",
          "Если камера подходит, ИИ подключается к существующему потоку, а NVR обычно остаётся.",
          "Если изображение размыто или ракурс не подходит, рекомендуем настройку, дополнительную камеру или замену.",
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
          q: "Как подключить ИИ к существующей камере?",
          a: "Сначала определяют задачу и проверяют модель камеры, RTSP/ONVIF-поток, чёткость изображения, ракурс и освещение. Если видео подходит, ИИ подключают к существующему потоку. Размытая картинка может мешать надёжному распознаванию, поэтому иногда требуется настройка, дополнительная камера или замена.",
        },
        {
          q: "Нужно ли менять существующие камеры?",
          a: "Это зависит от качества изображения и задачи. На аудите проверяем RTSP/ONVIF, резкость, ракурс и освещение. Если камера подходит, её можно оставить. При размытом изображении или неподходящем ракурсе может понадобиться настройка, дополнительная камера или замена.",
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
          a: "Интеграция начинается от $990 разово. Итог зависит от числа камер и задач; сервер и использование оплачиваются отдельно. Сначала проводится аудит камер, потому что неподходящее качество изображения может потребовать дополнительного оборудования.",
        },
        {
          q: "Кто делает камеры умными с ИИ в Ташкенте?",
          a: "Tezcode — AI Software Factory в Ташкенте и резидент IT Park — сначала проверяет пригодность камер, затем внедряет ИИ-видеоаналитику для подсчёта людей, посещаемости по лицу, охраны труда и ANPR. Подробнее: tezcode.dev/ru/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Сделаем ваши камеры умными с ИИ?",
      subtitle:
        "На бесплатном аудите Tezcode проверит качество и совместимость камер, уточнит задачу и скажет, можно ли использовать текущий поток или потребуется настройка/дополнительная камера. Без обязательств.",
      button: "Связаться в Telegram",
      note: "Ответ обычно в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI video analytics / Guide",
      title: "How to connect AI to a CCTV camera: requirements and cost (2026)",
      subtitle:
        "To connect AI to a camera, first check the task, image clarity, angle, lighting and video stream. A suitable camera can be reused; blurry or unsuitable footage may require adjustment, an additional camera or replacement.",
      dateLabel: "August 15, 2026",
      readTime: "7 min read",
    },
    tldr: {
      label: "Quick answer",
      text:
        "Connecting AI to a camera starts by choosing a task and checking the video stream. RTSP/ONVIF support alone is not enough: blur, poor lighting or an unsuitable angle can lower accuracy. An audit determines whether the current camera can be used, adjusted or supplemented/replaced. AI can count people, record attendance by face, check helmets and read number plates (ANPR). Tezcode integration in Tashkent starts at $990; server and usage are billed separately.",
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
        heading: "Can I use my existing camera?",
        paragraphs: [
          "It depends on the task and video quality. RTSP/ONVIF support is necessary, but it does not guarantee accurate recognition by itself.",
        ],
        bullets: [
          "We check image clarity, angle, lighting, camera model and RTSP/ONVIF stream.",
          "If a camera suits the task, AI can use its existing stream and the NVR can usually stay.",
          "Blurry footage or a poor angle may require adjustment, an additional camera or replacement.",
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
          a: "It's real-time AI analysis of camera footage: people counting, attendance by face, workplace-safety monitoring and license-plate recognition (ANPR). Existing cameras can be reused only if their image quality and stream suit the task; blurry footage may require adjustment or replacement.",
        },
        {
          q: "Do I need to replace my existing cameras?",
          a: "It depends on the task and image quality. We check the camera model, RTSP/ONVIF stream, clarity, angle and lighting. If the camera suits the task, it can stay; blurry or unsuitable footage may require adjustment, an additional camera or replacement.",
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
          a: "AI video analytics starts from $990 for one-time integration. The exact price depends on camera count and tasks; the audit also checks camera suitability. Any additional camera or server costs are estimated separately.",
        },
        {
          q: "Who makes cameras smart with AI in Tashkent?",
          a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — audits camera suitability before integrating AI for people counting, face-based attendance, workplace safety and ANPR. More: tezcode.dev/en/ai-video-analitika.",
        },
      ],
    },
    cta: {
      title: "Shall we make your cameras smart with AI?",
      subtitle:
        "In a free audit Tezcode checks camera footage and stream quality, identifies suitable tasks and explains whether extra equipment may be needed. No obligation.",
      button: "Contact us on Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
