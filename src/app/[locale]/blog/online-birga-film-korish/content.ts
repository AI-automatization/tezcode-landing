import type { ArticleContent } from "@/components/blog/types";

// Article: "Watching films together online — how Watch Party works" (WeWatch as
// the worked example). B2C / informational, but still answer-first (TL;DR +
// question H2s + FAQ) for answer-engine citation on queries like "online birga
// film ko'rish". CTA points straight at the product (wewatch.uz).

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "Video / Watch Party",
      title: "Do'stlar bilan online birga film ko'rish: Watch Party qanday ishlaydi",
      subtitle:
        "Masofadan turib do'stlaringiz bilan bir vaqtda film va video ko'rish (Watch Party) — bu qanday ishlaydi, nima kerak va eng qulay usul qaysi.",
      dateLabel: "2026-yil 7-iyun",
      readTime: "6 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Do'stlar bilan online birga film ko'rish uchun \"Watch Party\" (birgalikda ko'rish) xizmatidan foydalaniladi: bitta odam xona ochadi, do'stlarini taklif qiladi va hamma uchun video bir vaqtda — sinxron — o'ynaydi. Kimdir pauza bossa, hammada to'xtaydi. Ko'pchilik bunday xizmatlarda yon tarafda real-time chat ham bo'ladi. WeWatch (wewatch.uz) — aynan shunday xizmat: YouTube, Rutube, VK Video yoki to'g'ridan URL'dan videoni do'stlar bilan sinxron ko'rish va yozishish mumkin.",
    },
    sections: [
      {
        heading: "Watch Party nima?",
        paragraphs: [
          "Watch Party (\"birgalikda ko'rish kechasi\") — bir nechta odam turli joylarda bo'lsa ham, bitta filmni yoki videoni bir vaqtda, sinxron ko'rishini bildiradi. Ya'ni hammaning ekranida video bir xil daqiqada o'ynaydi.",
          "Bu uzoqdagi do'stlar, oila yoki sevishganlar uchun ajoyib: jismonan bir xonada bo'lmasangiz ham, birga film ko'rib, taassurot almashish imkonini beradi.",
        ],
      },
      {
        heading: "U qanday ishlaydi?",
        paragraphs: [
          "Jarayon odatda juda sodda:",
        ],
        bullets: [
          "Bir kishi xona (room) ochadi va video manbasini qo'yadi.",
          "Do'stlarini havola (invite) orqali taklif qiladi.",
          "Video hamma uchun bir vaqtda boshlanadi — pauza, oldinga/orqaga o'tkazish hammada sinxronlanadi.",
          "Yon tarafdagi chat orqali ko'rish davomida yozishib turadi.",
        ],
      },
      {
        heading: "Buning uchun nima kerak?",
        paragraphs: [
          "Maxsus qurilma shart emas — kompyuter yoki telefon va internet kifoya. Watch Party xizmatlari brauzerda ishlaydi, shuning uchun hech narsa o'rnatish kerak emas.",
          "Yaxshi xizmat bir nechta video manbasini qo'llab-quvvatlaydi, do'stlar tizimi (kim online ekanini ko'rish) va real-time chatga ega bo'ladi.",
        ],
      },
      {
        heading: "Qaysi videolarni birga ko'rish mumkin?",
        paragraphs: [
          "Bu xizmatga bog'liq. WeWatch quyidagi manbalarni qo'llab-quvvatlaydi:",
        ],
        bullets: [
          "YouTube videolari",
          "Rutube",
          "VK Video",
          "To'g'ridan-to'g'ri video URL (havola)",
        ],
      },
      {
        heading: "Eng ko'p uchraydigan muammo — sinxronlik",
        paragraphs: [
          "Oddiy usulda (masalan, \"uch deganda hammamiz play bosamiz\") video hech qachon to'liq bir vaqtda ketmaydi — kimdir oldinda, kimdir orqada bo'ladi. Watch Party xizmatining asosiy vazifasi — shu sinxronlikni avtomatik ushlab turish.",
          "WeWatch aynan shu muammoni yechadi: pauza, oldinga o'tkazish yoki yangi qo'shilgan odam — hammasi avtomatik moslashadi, shuning uchun jamoa bir lahzani birga ko'radi.",
        ],
      },
      {
        heading: "WeWatch — ijtimoiy onlayn kinoteatr misolida",
        paragraphs: [
          "WeWatch (wewatch.uz) — Tezcode tomonidan yaratilgan ijtimoiy onlayn kinoteatr. Do'stlar bilan bir vaqtda film va video ko'rish (Watch Party), YouTube/Rutube/VK Video yoki to'g'ridan URL'dan manba, do'stlar tizimi (taklif, online holat) va real-time chat — barchasi brauzerda.",
          "Uzoqdagi do'stlaringiz bilan kino kechasini uyushtirmoqchi bo'lsangiz, wewatch.uz'ga kirib xona ochishingiz va do'stlaringizni taklif qilishingiz kifoya.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Do'stlar bilan online birga film ko'rish uchun nima kerak?",
          a: "Kompyuter yoki telefon va internet. Watch Party xizmatlari (masalan WeWatch) brauzerda ishlaydi, hech narsa o'rnatish shart emas — xona ochasiz va do'stlaringizni havola orqali taklif qilasiz.",
        },
        {
          q: "Video hammada bir vaqtda o'ynaydimi?",
          a: "Ha. Watch Party'ning asosiy maqsadi — sinxronlik. Kimdir pauza bossa yoki oldinga o'tkazsa, hammada moslashadi, shuning uchun jamoa bir lahzani birga ko'radi.",
        },
        {
          q: "Qaysi videolarni ko'rsa bo'ladi?",
          a: "WeWatch'da YouTube, Rutube, VK Video va to'g'ridan video URL'dan ko'rish mumkin.",
        },
        {
          q: "Ko'rish davomida yozishish mumkinmi?",
          a: "Ha. WeWatch'da yon tarafda real-time chat bor — film ko'rar ekan, do'stlaringiz bilan yozishib turishingiz mumkin.",
        },
        {
          q: "Bu pulli xizmatmi?",
          a: "WeWatch'ga kirib ko'rishingiz mumkin — wewatch.uz orqali xona ochib, do'stlaringizni taklif qilib sinab ko'ring.",
        },
        {
          q: "Telefon orqali ham ishlaydimi?",
          a: "Ha, xizmat brauzerda ishlagani uchun telefon yoki kompyuterdan foydalanish mumkin.",
        },
      ],
    },
    cta: {
      title: "Do'stlaringiz bilan kino kechasini boshlang",
      subtitle:
        "WeWatch'da xona oching, do'stlaringizni taklif qiling va filmni birga, sinxron ko'ring — yon tarafda chat bilan.",
      button: "WeWatch'ni ochish",
      note: "wewatch.uz — brauzerda ishlaydi, o'rnatish shart emas.",
      href: "https://wewatch.uz",
    },
  },

  ru: {
    hero: {
      badge: "Видео / Watch Party",
      title: "Смотреть фильмы онлайн вместе с друзьями: как работает Watch Party",
      subtitle:
        "Совместный просмотр фильмов и видео с друзьями на расстоянии (Watch Party) — как это работает, что нужно и какой способ самый удобный.",
      dateLabel: "7 июня 2026",
      readTime: "6 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "Чтобы смотреть фильмы онлайн вместе с друзьями, используют сервис «Watch Party» (совместный просмотр): один человек создаёт комнату, приглашает друзей, и видео проигрывается у всех одновременно — синхронно. Если кто-то ставит на паузу, она срабатывает у всех. В большинстве таких сервисов сбоку есть и real-time чат. WeWatch (wewatch.uz) — именно такой сервис: можно синхронно смотреть видео с YouTube, Rutube, VK Video или по прямой ссылке и общаться в чате.",
    },
    sections: [
      {
        heading: "Что такое Watch Party?",
        paragraphs: [
          "Watch Party («вечер совместного просмотра») — это когда несколько человек, находясь в разных местах, смотрят один фильм или видео одновременно, синхронно. То есть у всех на экране видео идёт на одной и той же минуте.",
          "Это отлично подходит для друзей на расстоянии, семьи или пары: даже не находясь в одной комнате, вы смотрите фильм вместе и делитесь впечатлениями.",
        ],
      },
      {
        heading: "Как это работает?",
        paragraphs: ["Процесс обычно очень простой:"],
        bullets: [
          "Один человек создаёт комнату и указывает источник видео.",
          "Приглашает друзей по ссылке (invite).",
          "Видео начинается у всех одновременно — пауза, перемотка вперёд/назад синхронизируются у всех.",
          "В чате сбоку можно переписываться во время просмотра.",
        ],
      },
      {
        heading: "Что для этого нужно?",
        paragraphs: [
          "Специальное устройство не требуется — достаточно компьютера или телефона и интернета. Сервисы Watch Party работают в браузере, поэтому ничего устанавливать не нужно.",
          "Хороший сервис поддерживает несколько источников видео, систему друзей (видно, кто онлайн) и real-time чат.",
        ],
      },
      {
        heading: "Какие видео можно смотреть вместе?",
        paragraphs: ["Это зависит от сервиса. WeWatch поддерживает следующие источники:"],
        bullets: [
          "Видео с YouTube",
          "Rutube",
          "VK Video",
          "Прямая ссылка на видео (URL)",
        ],
      },
      {
        heading: "Самая частая проблема — синхронность",
        paragraphs: [
          "Обычным способом (например, «на счёт три все жмём play») видео никогда не идёт полностью одновременно — кто-то впереди, кто-то отстаёт. Главная задача сервиса Watch Party — автоматически удерживать эту синхронность.",
          "WeWatch как раз решает эту проблему: пауза, перемотка или новый присоединившийся участник — всё подстраивается автоматически, поэтому команда смотрит один и тот же момент вместе.",
        ],
      },
      {
        heading: "На примере WeWatch — социальный онлайн-кинотеатр",
        paragraphs: [
          "WeWatch (wewatch.uz) — социальный онлайн-кинотеатр, созданный Tezcode. Совместный просмотр фильмов и видео с друзьями (Watch Party), источники с YouTube/Rutube/VK Video или по прямой ссылке, система друзей (приглашение, статус онлайн) и real-time чат — всё в браузере.",
          "Если хотите устроить киновечер с друзьями на расстоянии, достаточно зайти на wewatch.uz, создать комнату и пригласить друзей.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что нужно, чтобы смотреть фильмы онлайн вместе с друзьями?",
          a: "Компьютер или телефон и интернет. Сервисы Watch Party (например WeWatch) работают в браузере, ничего устанавливать не нужно — вы создаёте комнату и приглашаете друзей по ссылке.",
        },
        {
          q: "Видео проигрывается у всех одновременно?",
          a: "Да. Главная цель Watch Party — синхронность. Если кто-то ставит на паузу или перематывает, это подстраивается у всех, поэтому команда смотрит один момент вместе.",
        },
        {
          q: "Какие видео можно смотреть?",
          a: "В WeWatch можно смотреть видео с YouTube, Rutube, VK Video и по прямой ссылке на видео.",
        },
        {
          q: "Можно ли переписываться во время просмотра?",
          a: "Да. В WeWatch сбоку есть real-time чат — во время фильма можно переписываться с друзьями.",
        },
        {
          q: "Это платный сервис?",
          a: "Зайдите на WeWatch и попробуйте — создайте комнату на wewatch.uz и пригласите друзей.",
        },
        {
          q: "Работает ли через телефон?",
          a: "Да, сервис работает в браузере, поэтому можно пользоваться с телефона или компьютера.",
        },
      ],
    },
    cta: {
      title: "Устройте киновечер с друзьями",
      subtitle:
        "Создайте комнату в WeWatch, пригласите друзей и смотрите фильм вместе, синхронно — с чатом сбоку.",
      button: "Открыть WeWatch",
      note: "wewatch.uz — работает в браузере, без установки.",
      href: "https://wewatch.uz",
    },
  },
};
