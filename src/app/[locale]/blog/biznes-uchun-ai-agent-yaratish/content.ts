import type { ArticleContent } from "@/components/blog/types";

// Pillar article: "Building an AI agent for business in Tashkent (2026)".
// Written answer-first (TL;DR up top, question-style H2s, deep sections, FAQ) so
// ChatGPT / Perplexity / Google AI Overviews can lift a clean, quotable answer
// for queries like "Toshkentda biznes uchun AI agent yaratish" and
// "biznesim uchun AI agent kim yasaydi". uz is the master (~3000+ words); ru is a
// full translation; other locales fall back to uz at render time.
//
// Honesty rules respected: no fabricated Tezcode client numbers, no fake
// testimonials. Industry-level ("24/7 javob", "takroriy ishlarni avtomatlashtirish")
// framing only. The "AI Office" 12-department product is described as an
// approach in R&D, not a finished product.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "AI Agent / 2026",
      title: "Toshkentda biznes uchun AI agent yaratish: to'liq qo'llanma (2026)",
      subtitle:
        "AI agent nima, chatbotdan farqi, qaysi biznesga kerak, qanday ishlaydi, qancha turadi va uni 6 qadamda qanday yaratish kerak — O'zbekiston bizneslari uchun amaliy qo'llanma.",
      dateLabel: "2026-yil 14-iyun",
      readTime: "14 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "AI agent — bu nafaqat javob beradigan, balki vazifani oxirigacha bajaradigan dastur: mijozga javob beradi, ma'lumotni CRM yoki 1C ga yozadi, buyurtma rasmiylashtiradi va xodimni faqat zarur bo'lganda jalb qiladi. Toshkentda biznes uchun AI agent yaratish odatda 6 qadamda kechadi: tahlil → dizayn → integratsiya → test → ishga tushirish → qo'llab-quvvatlash. Narx tayyor shablon emas, balki sizning ehtiyojingizga (qaysi model, qanday integratsiya, qancha murakkablik) bog'liq. Tezcode — 2024-yilda Toshkentda tashkil topgan 16 kishilik jamoa — Claude va GPT asosida o'zbek va rus tilida ishlaydigan AI agentlar quradi va bepul konsultatsiya beradi.",
    },
    sections: [
      {
        heading: "AI agent nima va chatbotdan farqi nimada?",
        paragraphs: [
          "AI agent — bu maqsadga erishish uchun mustaqil qaror qabul qila oladigan va amaliy vazifani bajara oladigan dastur. Oddiy chatbot savolga matn bilan javob beradi va shu yerda to'xtaydi. AI agent esa javob berishdan tashqari harakat qiladi: ma'lumot qidiradi, tizimga yozadi, buyurtma yaratadi, hisob-faktura yuboradi yoki xodimga vazifa tashlaydi.",
          "Farqni sodda misol bilan ko'rsatamiz. Mijoz \"sochlarim uchun shampun bormi?\" deb so'rasa, oddiy chatbot \"ha, bizda shampunlar bor\" deydi. AI agent esa ombor bazasidan qoldiqni tekshiradi, mos mahsulotni topadi, narxini aytadi, mijoz xohlasa buyurtmani CRM ga kiritadi va kuryerlik bo'limiga signal yuboradi — odam aralashuvisiz.",
          "Ya'ni asosiy farq: chatbot — gaplashadi, agent — ish bajaradi. Texnik tilda buni \"tool calling\" (agent tashqi tizim funksiyalarini chaqiradi) va \"orkestratsiya\" (bir nechta qadamni ketma-ket bajarish) deb ataladi. 2026-yilda zamonaviy AI agentlar aynan shu sababli oddiy \"savol-javob\" botlardan ancha foydaliroq bo'lib qoldi.",
          "Yana bir muhim farq — kontekst va xotira. Yaxshi qurilgan agent oldingi suhbatni, mijozning buyurtmalar tarixini va sizning biznes qoidalaringizni hisobga oladi. Shuning uchun u har gal noldan boshlamaydi, balki haqiqiy yordamchidek ishlaydi.",
          "Qisqacha jadval sifatida: chatbot — ssenariy bo'yicha (\"agar shunday so'rasa, shunday javob ber\") ishlaydigan, cheklangan tugmali tizim; AI agent esa erkin matnni tushunadigan, qaror qabul qiladigan va tashqi tizimlarda harakat qiladigan tizim. Birinchisi 5 yil oldingi texnologiya, ikkinchisi — 2026-yil standarti.",
        ],
      },
      {
        heading: "Qaysi biznesga AI agent kerak?",
        paragraphs: [
          "AI agent har bir biznesga bir xil darajada kerak emas. Lekin quyidagi belgilar mavjud bo'lsa — bu kuchli signal:",
          "Eng katta foydani takroriy, bir xil ko'rinishdagi muloqot va jarayonlar ko'p bo'lgan bizneslar oladi. O'zbekistonda bu odatda quyidagi sohalar. Har biri yonida — agent aynan nima qiladi:",
        ],
        bullets: [
          "Belgi: kuniga o'nlab bir xil savollarga javob berasiz (\"narxi qancha?\", \"manzilingiz qayerda?\", \"ish vaqtingiz?\").",
          "Belgi: mijozlar kechqurun yoki dam olish kunlari yozadi, lekin operator yo'q — lidlar sovib qoladi.",
          "Belgi: ma'lumotni qo'lda bir tizimdan ikkinchisiga ko'chirasiz (Telegram'dan Excel'ga, Excel'dan 1C ga).",
          "Savdo va e-commerce — mahsulot tanlash, qoldiq tekshirish, buyurtma qabul qilish, yetkazib berish holatini aytish.",
          "Klinika va tibbiyot markazlari — qabulga yozish, eslatma yuborish, ko'p uchraydigan savollarga javob, qayta qo'ng'iroqsiz navbat.",
          "Restoran va HoReCa — bron qilish, menyu bo'yicha maslahat, yetkazib berish buyurtmasi.",
          "Xizmat ko'rsatish (ta'lim, go'zallik, remont, logistika) — yozilish, eslatma, narx hisoblash, lid kvalifikatsiyasi.",
        ],
      },
      {
        heading: "AI agent turlari: qaysi biri sizga mos?",
        paragraphs: [
          "Amaliyotda bizneslar ko'pincha quyidagi turlardan bittasini yoki bir nechtasini birga ishlatadi. Har birining vazifasi alohida:",
        ],
        bullets: [
          "Mijoz xizmati (support) agenti — savollarga 24/7 javob beradi, ko'p uchraydigan muammolarni o'zi hal qiladi, murakkab holatlarni operatorga uzatadi.",
          "Sotuv / lid agenti — kiruvchi mijozni \"qizdiradi\", ehtiyojini aniqlaydi, mos taklif beradi va aloqa ma'lumotini CRM ga yozadi.",
          "Buyurtma agenti — mahsulot tanlashdan to to'lov va yetkazishgacha bo'lgan jarayonni boshqaradi, qoldiq va narxni real bazadan tekshiradi.",
          "Ichki avtomatizatsiya agenti — xodimlar uchun: hujjat tayyorlaydi, hisobotni yig'adi, ma'lumotni tizimlar o'rtasida ko'chiradi, vazifalarni taqsimlaydi.",
          "Ko'p agentli \"AI ofis\" yondashuvi — bir nechta agent o'zaro ish bo'lishadi (biri sotuv, biri qo'llab-quvvatlash, biri hisobot) va dirijyor-agent ularni boshqaradi.",
        ],
      },
      {
        heading: "AI agent qanday ishlaydi? (texnik, lekin sodda tilda)",
        paragraphs: [
          "Ko'pchilik \"AI agent\" deganda sehrli qutini tasavvur qiladi. Aslida u bir nechta aniq qismdan iborat va har biri tushunarli vazifani bajaradi.",
          "1. LLM (til modeli) — agentning \"miyasi\". Bu GPT (OpenAI) yoki Claude (Anthropic) kabi katta til modeli bo'lib, matnni tushunadi, qaror chiqaradi va javob shakllantiradi. Model tanlovi sifat, tezlik va narxga ta'sir qiladi.",
          "2. Bilim bazasi (RAG) — agent sizning haqiqiy ma'lumotlaringizdan javob berishi uchun kerak. RAG (Retrieval-Augmented Generation) yondashuvida agent javob berishdan oldin sizning hujjatlaringiz, narxlar ro'yxati, FAQ va katalogingizdan to'g'ri parchani topib oladi. Shu sababli u \"o'ylab topmaydi\", balki sizning haqiqatingiz asosida javob beradi.",
          "3. Integratsiya (tool'lar) — agentni biznes tizimlaringizga ulaydi: CRM, 1C, ombor bazasi, Telegram, sayt, to'lov tizimi. Aynan shu qism agentni \"gapiradigan bot\"dan \"ish bajaradigan yordamchi\"ga aylantiradi.",
          "4. Ko'p tillilik — O'zbekistonda agent o'zbek va rus tilida (ko'pincha bitta suhbatda aralash) tabiiy ishlashi shart. Zamonaviy modellar buni yaxshi uddalaydi, lekin to'g'ri sozlash va test talab qilinadi.",
          "Soddalashtirilgan zanjir shunday: mijoz yozadi → agent niyatni tushunadi → kerak bo'lsa bilim bazasidan ma'lumot oladi → kerak bo'lsa tizimga murojaat qiladi (qoldiq, buyurtma) → javob beradi yoki vazifani bajaradi → natijani yozib qo'yadi.",
          "Real misol bilan ko'raylik. Mijoz Telegram'da yozadi: \"Salom, qizimga 6 yoshga sovg'a kerak, 200 mingacha bormi?\". Agent niyatni tushunadi (sovg'a + yosh + byudjet), katalogdan shu shartga mos mahsulotlarni topadi, ombordagi qoldiqni tekshiradi, 3 ta variant taklif qiladi, mijoz tanlaganini buyurtmaga qo'shadi, manzil va telefonni so'raydi va buyurtmani CRM ga yozib, yetkazib berish bo'limiga signal yuboradi. Bularning hammasi bitta suhbatda, operator aralashuvisiz. Faqat to'lov bo'yicha nizo yoki nostandart so'rov chiqsa — odamga uzatadi.",
        ],
      },
      {
        heading: "AI agentdan real foyda nima? (halol baho)",
        paragraphs: [
          "Bu yerda halol bo'lish muhim: har bir biznes uchun aniq raqamlar har xil va biz o'ylab topilgan \"mijozlarimiz savdoni X% oshirdi\" degan da'volarni keltirmaymiz. Buning o'rniga sohada kuzatiladigan umumiy tendentsiyalarni aytamiz — natija sizning jarayoningizga bog'liq.",
        ],
        bullets: [
          "24/7 javob — mijoz kechasi yoki bayramda yozsa ham javob darrov keladi, lid sovib qolmaydi.",
          "Takroriy ishlarni avtomatlashtirish — bir xil savollar va qo'lda ma'lumot ko'chirish odam vaqtini yeyishini to'xtatadi.",
          "Tez javob vaqti — mijoz minutlab kutmaydi, bu konversiyaga ijobiy ta'sir qiladi.",
          "Operatorlar yukini kamaytirish — oddiy savollarni agent oladi, odam faqat murakkab holatlar bilan shug'ullanadi.",
          "Bir xil sifat — agent charchamaydi, kayfiyatdan qat'i nazar bir xil to'g'ri va xushmuomala javob beradi.",
          "Ma'lumot va tahlil — har bir suhbat yoziladi, eng ko'p so'raladigan savollar va lid manbalari ko'rinadi.",
        ],
      },
      {
        heading: "AI agent odamni almashtiradimi?",
        paragraphs: [
          "Yo'q. Muhim nuqta: AI agent odamni butunlay almashtirmaydi. U takroriy va ko'p vaqt oladigan qismni o'z zimmasiga oladi, xodimlaringiz esa qiymatli ishga — murakkab kelishuvlar va munosabatlarga — vaqt topadi. To'g'ri qurilgan tizimda agent va odam birga ishlaydi: agent birinchi qatorda, odam murakkab va qiymatli holatlarda.",
        ],
      },
      {
        heading: "AI agentni qanday yaratish kerak? — 6 qadam",
        paragraphs: [
          "Yaxshi AI agent shunchaki \"botni yoqib qo'yish\" emas. Ishonchli natija quyidagi 6 bosqichdan o'tadi. Bu jarayon Tezcode ning AI agent xizmat sahifasida (tezcode.dev/ai-agent) batafsil ko'rsatilgan, AI chatbot yechimlari esa tezcode.dev/ai-chatbot sahifasida.",
        ],
        bullets: [
          "1. Tahlil — qaysi muammoni hal qilamiz? Qaysi jarayon takroriy va avtomatlashtirishga arziydi? Muvaffaqiyat mezoni nima? Bu bosqichni o'tkazib yuborish — eng keng tarqalgan xato.",
          "2. Dizayn — agentning vazifasi, suhbat oqimi, qaysi savollarni o'zi hal qiladi va qachon odamga uzatadi belgilanadi. Til (uz/ru), ohang va biznes qoidalari shu yerda yoziladi.",
          "3. Integratsiya — agent CRM, 1C, ombor, Telegram yoki saytga ulanadi va bilim bazasi (RAG) sizning haqiqiy ma'lumotlaringiz bilan to'ldiriladi.",
          "4. Test — agent real ssenariylarda sinaladi: noto'g'ri javoblar, \"qiyin\" mijozlar, chegaraviy holatlar. Bu bosqich sifatni belgilaydi.",
          "5. Ishga tushirish — agent jonli kanalga (sayt, Telegram, Instagram) ulanadi, dastlab cheklangan hajmda, keyin to'liq.",
          "6. Qo'llab-quvvatlash va yaxshilash — real suhbatlar tahlil qilinadi, javoblar va bilim bazasi yangilanadi, agent vaqt o'tgani sayin aniqroq bo'ladi.",
        ],
      },
      {
        heading: "AI agent qurish uchun sizdan nima kerak bo'ladi?",
        paragraphs: [
          "Ko'p biznes egasi \"men texnik odam emasman, qiyin bo'lsa kerak\" deb o'ylaydi. Aslida sizdan kod yozish emas, balki biznesingizni yaxshi tushuntirish talab qilinadi. Quyidagilar agentni aniq va foydali qiladi:",
        ],
        bullets: [
          "Ko'p uchraydigan savollar ro'yxati — mijozlar odatda nima so'raydi va siz qanday javob berasiz. Telegram yoki Instagram tarixini ko'rib chiqish kifoya.",
          "Narxlar va katalog — mahsulot/xizmatlar, narxlari va asosiy shartlar. Bu agentning bilim bazasiga aylanadi.",
          "Biznes qoidalari — chegirma chegaralari, ish vaqti, yetkazib berish shartlari, qaysi holatda odamga uzatish kerakligi.",
          "Tizimlaringizga kirish — qaysi CRM, 1C yoki ombor ishlatasiz; integratsiya uchun texnik kirish kerak bo'ladi.",
          "Ohang va til — agent qanday gapirishi kerak: rasmiy yoki samimiy, asosan o'zbekmi yoki rusmi.",
          "Mas'ul odam — sizning tarafdan bitta odam savollarga javob bersa, loyiha ancha tez va sifatli ketadi.",
        ],
      },
      {
        heading: "AI agent narxi nimaga bog'liq?",
        paragraphs: [
          "Eng ko'p beriladigan savol — \"qancha turadi?\". Halol javob: tayyor narx yo'q, chunki AI agent kostyum kabi — sizning o'lchamingizga tikiladi. Narx quyidagilarga bog'liq:",
        ],
        bullets: [
          "Model — qaysi LLM (GPT, Claude) va qaysi versiyasi ishlatiladi; bu sifat va doimiy ishlash xarajatiga ta'sir qiladi.",
          "Integratsiya soni — faqat saytga ulanadimi yoki CRM, 1C, ombor, to'lov tizimi va Telegram'ga ham? Har bir ulanish ish hajmini oshiradi.",
          "Murakkablik — oddiy FAQ agentmi yoki buyurtmani oxirigacha rasmiylashtiradigan, ko'p qadamli mantiqqa ega agentmi.",
          "Bilim bazasi hajmi — qancha hujjat, katalog va qoida agentga \"o'rgatiladi\".",
          "Til va ohang — o'zbek/rus aralash muloqot, brend ovozi va biznes qoidalarini sozlash.",
          "Qo'llab-quvvatlash — ishga tushgandan keyin yangilash, kuzatish va yaxshilash darajasi.",
          "To'g'ri yondashuv — avval bepul konsultatsiyada ehtiyojni aniqlash, keyin shu ehtiyojga mos aniq taklif olish. \"Hammaga bir xil narx\" degan taklifdan ehtiyot bo'ling: u ko'pincha sizning real jarayoningizga to'g'ri kelmaydi.",
        ],
      },
      {
        heading: "Eng ko'p uchraydigan xatolar",
        paragraphs: [
          "AI agent loyihalari ko'pincha texnologiya emas, balki yondashuv sababli muvaffaqiyatsiz bo'ladi. Eng keng tarqalgan xatolar:",
        ],
        bullets: [
          "Maqsadsiz boshlash — \"hamma qiladi, bizam qilamiz\" deb aniq vazifasiz agent qurish. Avval qaysi muammoni hal qilishini belgilang.",
          "Bilim bazasini e'tiborsiz qoldirish — agent sizning haqiqiy ma'lumotlaringizdan oziqlanmasa, noto'g'ri yoki umumiy javob beradi.",
          "Integratsiyasiz qoldirish — CRM/1C ga ulanmagan agent shunchaki chatbotga aylanadi va asosiy foydani bermaydi.",
          "Odamga uzatish yo'lini qo'ymaslik — murakkab holatda agent operatorga uza olmasa, mijoz asabiylashadi.",
          "Test bosqichini qisqartirish — sinovsiz ishga tushirilgan agent jonli mijoz oldida xato qiladi va ishonchni yo'qotadi.",
          "Bir marta qurib unutish — agent yashaydigan tizim; muntazam yangilanmasa, vaqt o'tib eskiradi.",
        ],
      },
      {
        heading: "Tayyor platforma, no-code yoki nolga qurish — qaysi biri?",
        paragraphs: [
          "AI agentni amalga oshirishning bir necha yo'li bor va to'g'ri tanlov biznesingiz murakkabligiga bog'liq:",
        ],
        bullets: [
          "Tayyor SaaS chatbot platformalari — tez va arzon boshlanadi, lekin ko'pincha O'zbekiston tizimlari (1C, mahalliy CRM, to'lov) bilan chuqur integratsiya va o'zbek tilini yetarli darajada qo'llab-quvvatlamaydi. Oddiy FAQ uchun yetarli, jiddiy avtomatizatsiya uchun cheklangan.",
          "No-code konstruktorlar — texnik bilim kam talab qiladi, lekin murakkablik oshgani sayin chegaraga uriladi va integratsiyalar cheklanadi.",
          "Buyurtma (custom) yechim — biznesingizga aniq moslashtirilgan agent, har qanday tizim bilan integratsiya, to'liq nazorat va ma'lumotlar xavfsizligi. Murakkabroq jarayonlar va o'sib boruvchi biznes uchun eng to'g'ri yo'l.",
          "Amaliy maslahat: agar maqsadingiz faqat saytdagi oddiy savol-javob bo'lsa, tayyor yechimdan boshlash mumkin. Lekin agent sizning ombor, CRM yoki buyurtma jarayoningiz bilan ishlashi kerak bo'lsa — buyurtma yechim uzoq muddatda arzonroq va ishonchliroq chiqadi, chunki har bir cheklovga qayta-qayta urilmaysiz.",
        ],
      },
      {
        heading: "Tezcode bilan AI agent yaratish",
        paragraphs: [
          "Tezcode — 2024-yilda Toshkentda tashkil topgan, 16 kishilik AI Software Factory jamoasi. Biznes uchun AI agentlar, AI chatbotlar va buyurtma dasturlar quramiz. Asoschi — Bekzod Mirzaaliyev.",
          "Biz agentlarni Claude (Anthropic) va GPT (OpenAI) modellari asosida quramiz, o'zbek va rus tilida ishlashga sozlaymiz va sizning mavjud tizimingizga — CRM, 1C, Telegram, sayt — ulaymiz. Ish yuqorida tasvirlangan 6 qadam bo'yicha kechadi, har bosqichda siz bilan kelishib.",
          "Bizning R&D yo'nalishimizda \"AI ofis\" yondashuvi ham bor — bunda bir nechta agent (sotuv, qo'llab-quvvatlash, hisobot va boshqa bo'limlar) o'zaro ish bo'lishadi. Bu hozircha ishlab chiqilayotgan yondashuv, tugallangan qutiga solingan mahsulot emas — lekin biznesingiz uchun shu yo'nalishda yechim qurish mumkin.",
          "Boshlash uchun siz aniq biror narsa sotib olishingiz shart emas: avval bepul konsultatsiyada biznesingizga AI agent mosligini va undan qanday foyda olishingiz mumkinligini birga baholaymiz.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "AI agent nima?",
          a: "AI agent — bu nafaqat javob beradigan, balki vazifani bajaradigan dastur. U mijozga javob beradi, ma'lumotni CRM yoki 1C ga yozadi, buyurtma rasmiylashtiradi va kerak bo'lsa xodimga uzatadi. Asosi — GPT yoki Claude kabi katta til modeli, sizning bilim bazangiz va biznes tizimlaringizga integratsiya.",
        },
        {
          q: "AI agent chatbotdan nimasi bilan farq qiladi?",
          a: "Chatbot savolga matn bilan javob beradi va shu yerda to'xtaydi. AI agent esa harakat qiladi: ombordan qoldiqni tekshiradi, buyurtma yaratadi, ma'lumotni tizimga yozadi va murakkab holatni operatorga uzatadi. Sodda qilib: chatbot gaplashadi, agent ish bajaradi.",
        },
        {
          q: "Qaysi biznesga AI agent kerak?",
          a: "Takroriy savollar va jarayonlar ko'p bo'lgan bizneslarga — savdo va e-commerce, klinika, restoran, ta'lim, go'zallik va xizmat ko'rsatish sohalariga. Agar kuniga o'nlab bir xil savolga javob bersangiz, kechqurun lidlar javobsiz qolsa yoki ma'lumotni qo'lda bir tizimdan ikkinchisiga ko'chirsangiz — AI agent foyda beradi.",
        },
        {
          q: "AI agent mavjud CRM, 1C yoki Telegram bilan ishlaydimi?",
          a: "Ha. To'g'ri qurilgan AI agent integratsiya orqali mavjud CRM, 1C, ombor bazasi, sayt va Telegram bilan ishlaydi. Aynan shu integratsiya agentni oddiy chatbotdan farqlaydi — u nafaqat gapiradi, balki sizning tizimlaringizda real harakat qiladi.",
        },
        {
          q: "AI agent o'zbek tilida ishlaydimi?",
          a: "Ha. Zamonaviy til modellari o'zbek va rus tilida, ko'pincha bitta suhbatda aralash, tabiiy ishlaydi. Tezcode agentlarni aynan O'zbekiston bizneslari uchun uz/ru muloqotga sozlaydi va testdan o'tkazadi.",
        },
        {
          q: "AI agent narxi qancha?",
          a: "Aniq tayyor narx yo'q — u modelga, integratsiyalar soniga, murakkablikka va bilim bazasi hajmiga bog'liq. To'g'ri yo'l — bepul konsultatsiyada ehtiyojni aniqlab, shu ehtiyojga mos aniq taklif olish. \"Hammaga bir xil narx\" odatda real jarayonga to'g'ri kelmaydi.",
        },
        {
          q: "AI agent qancha vaqtda tayyor bo'ladi?",
          a: "Bu agent murakkabligiga bog'liq. Oddiy FAQ va lid agenti nisbatan tez ishga tushadi; CRM/1C va buyurtma jarayoniga chuqur ulangan ko'p qadamli agent ko'proq vaqt oladi. Aniq muddat tahlil bosqichidan keyin beriladi.",
        },
        {
          q: "Ma'lumotlarim xavfsizmi?",
          a: "Ha, bu jiddiy yondashuvni talab qiladi. Yaxshi qurilgan agentda kirish huquqlari cheklanadi, maxfiy ma'lumotlar himoyalanadi va agent faqat o'ziga ruxsat berilgan tizimlarga murojaat qiladi. Xavfsizlik talablari loyihaning boshida kelishiladi.",
        },
      ],
    },
    cta: {
      title: "Biznesingiz uchun AI agent yasashni o'ylayapsizmi?",
      subtitle:
        "Tezcode jamoasi biznesingizni tahlil qilib, AI agent mosligini va undan qanday foyda olishingiz mumkinligini birga baholaydi. Bepul konsultatsiya oling.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "AI Agent / 2026",
      title: "Создание AI-агента для бизнеса в Ташкенте: полное руководство (2026)",
      subtitle:
        "Что такое AI-агент, чем он отличается от чат-бота, какому бизнесу нужен, как работает, сколько стоит и как создать его за 6 шагов — практическое руководство для бизнеса в Узбекистане.",
      dateLabel: "14 июня 2026",
      readTime: "14 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "AI-агент — это программа, которая не просто отвечает, а доводит задачу до конца: отвечает клиенту, записывает данные в CRM или 1С, оформляет заказ и привлекает сотрудника только при необходимости. Создание AI-агента для бизнеса в Ташкенте обычно проходит за 6 шагов: анализ → дизайн → интеграция → тестирование → запуск → поддержка. Цена — это не готовый шаблон, она зависит от ваших потребностей (какая модель, какие интеграции, какая сложность). Tezcode — команда из 16 человек, основанная в Ташкенте в 2024 году — создаёт AI-агентов на базе Claude и GPT, работающих на узбекском и русском, и даёт бесплатную консультацию.",
    },
    sections: [
      {
        heading: "Что такое AI-агент и чем он отличается от чат-бота?",
        paragraphs: [
          "AI-агент — это программа, которая способна самостоятельно принимать решения и выполнять практическую задачу ради достижения цели. Обычный чат-бот отвечает на вопрос текстом и на этом останавливается. AI-агент же помимо ответа действует: ищет данные, записывает в систему, создаёт заказ, отправляет счёт или ставит задачу сотруднику.",
          "Покажем разницу на простом примере. Если клиент спрашивает «есть ли шампунь для волос?», обычный чат-бот скажет «да, у нас есть шампуни». AI-агент же проверит остаток на складе, найдёт подходящий товар, назовёт цену, при желании клиента оформит заказ в CRM и подаст сигнал в отдел доставки — без участия человека.",
          "То есть главное отличие: чат-бот — разговаривает, агент — выполняет работу. На техническом языке это называют «tool calling» (агент вызывает функции внешних систем) и «оркестрация» (выполнение нескольких шагов подряд). Именно поэтому в 2026 году современные AI-агенты стали гораздо полезнее простых ботов «вопрос-ответ».",
          "Ещё одно важное отличие — контекст и память. Хорошо построенный агент учитывает предыдущий разговор, историю заказов клиента и ваши бизнес-правила. Поэтому он не начинает каждый раз с нуля, а работает как настоящий помощник.",
          "Коротко: чат-бот работает по сценарию («если спросили так — ответь так») с ограниченным набором кнопок; AI-агент понимает свободный текст, принимает решения и действует во внешних системах. Первое — технология пятилетней давности, второе — стандарт 2026 года.",
        ],
      },
      {
        heading: "Какому бизнесу нужен AI-агент?",
        paragraphs: [
          "AI-агент нужен не каждому бизнесу в одинаковой мере. Но если есть следующие признаки — это сильный сигнал:",
          "Наибольшую выгоду получают бизнесы с большим количеством повторяющихся, однотипных коммуникаций и процессов. В Узбекистане это обычно следующие сферы — рядом с каждой указано, что именно делает агент:",
        ],
        bullets: [
          "Признак: вы по десятку раз в день отвечаете на одни и те же вопросы («сколько стоит?», «где вы находитесь?», «время работы?»).",
          "Признак: клиенты пишут вечером или в выходные, но оператора нет — лиды остывают.",
          "Признак: вы вручную переносите данные из одной системы в другую (из Telegram в Excel, из Excel в 1С).",
          "Торговля и e-commerce — выбор товара, проверка остатков, приём заказа, статус доставки.",
          "Клиники и медцентры — запись на приём, напоминания, ответы на частые вопросы, очередь без обзвона.",
          "Рестораны и HoReCa — бронь, советы по меню, заказ на доставку.",
          "Сфера услуг (образование, красота, ремонт, логистика) — запись, напоминания, расчёт цены, квалификация лидов.",
        ],
      },
      {
        heading: "Типы AI-агентов: какой подходит вам?",
        paragraphs: [
          "На практике бизнесы чаще всего используют один или несколько из следующих типов. У каждого своя задача:",
        ],
        bullets: [
          "Агент клиентской поддержки (support) — отвечает на вопросы 24/7, сам решает частые проблемы, сложные случаи передаёт оператору.",
          "Агент продаж / лидов — «прогревает» входящего клиента, выявляет потребность, даёт подходящее предложение и записывает контакт в CRM.",
          "Агент заказов — ведёт процесс от выбора товара до оплаты и доставки, проверяет остаток и цену по реальной базе.",
          "Агент внутренней автоматизации — для сотрудников: готовит документы, собирает отчёты, переносит данные между системами, распределяет задачи.",
          "Подход «AI-офис» с несколькими агентами — несколько агентов делят работу (один — продажи, другой — поддержка, третий — отчёты), а агент-дирижёр управляет ими.",
        ],
      },
      {
        heading: "Как работает AI-агент? (технически, но простым языком)",
        paragraphs: [
          "Многие представляют «AI-агента» как волшебную коробку. На деле он состоит из нескольких чётких частей, и каждая выполняет понятную задачу.",
          "1. LLM (языковая модель) — «мозг» агента. Это большая языковая модель вроде GPT (OpenAI) или Claude (Anthropic), которая понимает текст, принимает решения и формирует ответ. Выбор модели влияет на качество, скорость и стоимость.",
          "2. База знаний (RAG) — нужна, чтобы агент отвечал на основе ваших реальных данных. В подходе RAG (Retrieval-Augmented Generation) агент перед ответом находит нужный фрагмент в ваших документах, прайсе, FAQ и каталоге. Поэтому он не «придумывает», а отвечает на основе вашей реальности.",
          "3. Интеграция (инструменты) — подключает агента к вашим бизнес-системам: CRM, 1С, складская база, Telegram, сайт, платёжная система. Именно эта часть превращает агента из «болтающего бота» в «помощника, выполняющего работу».",
          "4. Многоязычность — в Узбекистане агент должен естественно работать на узбекском и русском (часто вперемешку в одном разговоре). Современные модели справляются с этим хорошо, но требуется правильная настройка и тестирование.",
          "Упрощённая цепочка такая: клиент пишет → агент понимает намерение → при необходимости берёт данные из базы знаний → при необходимости обращается к системе (остаток, заказ) → отвечает или выполняет задачу → записывает результат.",
          "Разберём на реальном примере. Клиент пишет в Telegram: «Здравствуйте, нужен подарок дочке на 6 лет, есть до 200 тысяч?». Агент понимает намерение (подарок + возраст + бюджет), находит в каталоге подходящие товары, проверяет остаток на складе, предлагает 3 варианта, добавляет выбранный в заказ, спрашивает адрес и телефон и записывает заказ в CRM, подавая сигнал в отдел доставки. Всё это в одном разговоре, без участия оператора. Только при споре по оплате или нестандартном запросе он передаёт человеку.",
        ],
      },
      {
        heading: "В чём реальная польза от AI-агента? (честная оценка)",
        paragraphs: [
          "Здесь важно быть честными: точные цифры у каждого бизнеса разные, и мы не приводим выдуманных заявлений вроде «наши клиенты подняли продажи на X%». Вместо этого назовём общие тенденции, наблюдаемые в отрасли — результат зависит от вашего процесса.",
        ],
        bullets: [
          "Ответ 24/7 — даже если клиент пишет ночью или в праздник, ответ приходит сразу, лид не остывает.",
          "Автоматизация рутины — одинаковые вопросы и ручной перенос данных перестают съедать время людей.",
          "Быстрое время ответа — клиент не ждёт минутами, это положительно влияет на конверсию.",
          "Снижение нагрузки на операторов — простые вопросы берёт агент, человек занимается только сложными случаями.",
          "Стабильное качество — агент не устаёт и независимо от настроения отвечает одинаково корректно и вежливо.",
          "Данные и аналитика — каждый разговор записывается, видны самые частые вопросы и источники лидов.",
        ],
      },
      {
        heading: "Заменяет ли AI-агент человека?",
        paragraphs: [
          "Нет. Важный момент: AI-агент не заменяет человека полностью. Он берёт на себя повторяющуюся и затратную по времени часть, а ваши сотрудники находят время для ценной работы — сложных сделок и отношений. В правильно построенной системе агент и человек работают вместе: агент на первой линии, человек — в сложных и ценных случаях.",
        ],
      },
      {
        heading: "Как создать AI-агента? — 6 шагов",
        paragraphs: [
          "Хороший AI-агент — это не просто «включить бота». Надёжный результат проходит через следующие 6 этапов. Этот процесс подробно описан на странице услуги AI-агента Tezcode (tezcode.dev/ai-agent), а решения по AI-чат-ботам — на странице tezcode.dev/ai-chatbot.",
        ],
        bullets: [
          "1. Анализ — какую проблему решаем? Какой процесс повторяется и стоит автоматизации? Каков критерий успеха? Пропуск этого этапа — самая частая ошибка.",
          "2. Дизайн — определяются задача агента, поток разговора, какие вопросы он решает сам и когда передаёт человеку. Здесь же прописываются язык (uz/ru), тон и бизнес-правила.",
          "3. Интеграция — агент подключается к CRM, 1С, складу, Telegram или сайту, а база знаний (RAG) наполняется вашими реальными данными.",
          "4. Тестирование — агент проверяется на реальных сценариях: неверные ответы, «сложные» клиенты, граничные случаи. Этот этап определяет качество.",
          "5. Запуск — агент подключается к живому каналу (сайт, Telegram, Instagram), сначала на ограниченном объёме, затем полностью.",
          "6. Поддержка и улучшение — реальные разговоры анализируются, ответы и база знаний обновляются, со временем агент становится точнее.",
        ],
      },
      {
        heading: "Что понадобится от вас для создания AI-агента?",
        paragraphs: [
          "Многие владельцы бизнеса думают: «я не технарь, наверное это сложно». На деле от вас требуется не писать код, а хорошо объяснить свой бизнес. Следующее делает агента точным и полезным:",
        ],
        bullets: [
          "Список частых вопросов — что обычно спрашивают клиенты и как вы отвечаете. Достаточно просмотреть историю в Telegram или Instagram.",
          "Цены и каталог — товары/услуги, цены и основные условия. Это становится базой знаний агента.",
          "Бизнес-правила — пределы скидок, часы работы, условия доставки, в каких случаях передавать человеку.",
          "Доступ к вашим системам — какие CRM, 1С или склад вы используете; для интеграции нужен технический доступ.",
          "Тон и язык — как должен говорить агент: формально или дружелюбно, в основном на узбекском или русском.",
          "Ответственный человек — если с вашей стороны один человек отвечает на вопросы, проект идёт быстрее и качественнее.",
        ],
      },
      {
        heading: "От чего зависит цена AI-агента?",
        paragraphs: [
          "Самый частый вопрос — «сколько стоит?». Честный ответ: готовой цены нет, потому что AI-агент как костюм — шьётся по вашим меркам. Цена зависит от:",
        ],
        bullets: [
          "Модель — какая LLM (GPT, Claude) и какая её версия используется; это влияет на качество и стоимость постоянной работы.",
          "Количество интеграций — только сайт или ещё CRM, 1С, склад, платёжная система и Telegram? Каждое подключение увеличивает объём работ.",
          "Сложность — простой FAQ-агент или агент с многошаговой логикой, оформляющий заказ до конца.",
          "Объём базы знаний — сколько документов, каталог и правил «обучают» агента.",
          "Язык и тон — узбекско-русское смешанное общение, голос бренда и настройка бизнес-правил.",
          "Поддержка — уровень обновления, мониторинга и улучшения после запуска.",
          "Правильный подход — сначала на бесплатной консультации определить потребность, а затем получить точное предложение под неё. Остерегайтесь предложений «единая цена для всех»: они часто не подходят под ваш реальный процесс.",
        ],
      },
      {
        heading: "Самые частые ошибки",
        paragraphs: [
          "Проекты AI-агентов чаще проваливаются из-за подхода, а не технологий. Самые распространённые ошибки:",
        ],
        bullets: [
          "Старт без цели — строить агента без чёткой задачи «все делают, и мы сделаем». Сначала определите, какую проблему он решает.",
          "Игнорирование базы знаний — если агент не питается вашими реальными данными, он даёт неверные или общие ответы.",
          "Отсутствие интеграции — агент без подключения к CRM/1С превращается в обычный чат-бот и не даёт основной пользы.",
          "Нет пути передачи человеку — если в сложном случае агент не может передать оператору, клиент раздражается.",
          "Сокращение этапа тестирования — запущенный без проверки агент ошибается перед живым клиентом и теряет доверие.",
          "Построить и забыть — агент живая система; без регулярного обновления он со временем устаревает.",
        ],
      },
      {
        heading: "Готовая платформа, no-code или разработка с нуля — что выбрать?",
        paragraphs: [
          "Реализовать AI-агента можно несколькими путями, и правильный выбор зависит от сложности вашего бизнеса:",
        ],
        bullets: [
          "Готовые SaaS-платформы чат-ботов — стартуют быстро и дёшево, но часто не дают глубокой интеграции с узбекскими системами (1С, локальные CRM, оплата) и слабо поддерживают узбекский язык. Для простого FAQ достаточно, для серьёзной автоматизации ограниченно.",
          "No-code конструкторы — требуют мало технических знаний, но с ростом сложности упираются в потолок, а интеграции ограничены.",
          "Заказное (custom) решение — агент, точно настроенный под ваш бизнес, интеграция с любыми системами, полный контроль и безопасность данных. Лучший путь для более сложных процессов и растущего бизнеса.",
          "Практический совет: если ваша цель — простые вопросы-ответы на сайте, можно начать с готового решения. Но если агент должен работать с вашим складом, CRM или процессом заказов — заказное решение в долгосрочной перспективе дешевле и надёжнее, потому что вы не упираетесь раз за разом в ограничения.",
        ],
      },
      {
        heading: "Создание AI-агента с Tezcode",
        paragraphs: [
          "Tezcode — команда AI Software Factory из 16 человек, основанная в Ташкенте в 2024 году. Мы создаём AI-агентов, AI-чат-ботов и заказное ПО для бизнеса. Основатель — Бекзод Мирзаалиев.",
          "Мы строим агентов на базе моделей Claude (Anthropic) и GPT (OpenAI), настраиваем их на работу на узбекском и русском и подключаем к вашим существующим системам — CRM, 1С, Telegram, сайту. Работа идёт по описанным выше 6 шагам, согласовывая каждый этап с вами.",
          "В нашем R&D-направлении есть и подход «AI-офис» — когда несколько агентов (продажи, поддержка, отчёты и другие отделы) делят работу между собой. Это пока разрабатываемый подход, а не готовый коробочный продукт — но под ваш бизнес можно построить решение в этом направлении.",
          "Чтобы начать, вам необязательно сразу что-то покупать: сначала на бесплатной консультации мы вместе оценим, подходит ли вашему бизнесу AI-агент и какую пользу вы можете из него извлечь.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что такое AI-агент?",
          a: "AI-агент — это программа, которая не просто отвечает, а выполняет задачу. Он отвечает клиенту, записывает данные в CRM или 1С, оформляет заказ и при необходимости передаёт сотруднику. В основе — большая языковая модель вроде GPT или Claude, ваша база знаний и интеграция с бизнес-системами.",
        },
        {
          q: "Чем AI-агент отличается от чат-бота?",
          a: "Чат-бот отвечает на вопрос текстом и на этом останавливается. AI-агент действует: проверяет остаток на складе, создаёт заказ, записывает данные в систему и передаёт сложный случай оператору. Проще говоря: чат-бот разговаривает, агент выполняет работу.",
        },
        {
          q: "Какому бизнесу нужен AI-агент?",
          a: "Бизнесам с большим количеством повторяющихся вопросов и процессов — торговле и e-commerce, клиникам, ресторанам, образованию, красоте и сфере услуг. Если вы по десятку раз в день отвечаете на одни и те же вопросы, вечером лиды остаются без ответа или вы вручную переносите данные между системами — AI-агент будет полезен.",
        },
        {
          q: "Работает ли AI-агент с существующими CRM, 1С или Telegram?",
          a: "Да. Правильно построенный AI-агент через интеграцию работает с существующими CRM, 1С, складской базой, сайтом и Telegram. Именно эта интеграция отличает агента от обычного чат-бота — он не просто говорит, а реально действует в ваших системах.",
        },
        {
          q: "Работает ли AI-агент на узбекском языке?",
          a: "Да. Современные языковые модели естественно работают на узбекском и русском, часто вперемешку в одном разговоре. Tezcode настраивает и тестирует агентов именно под uz/ru-общение для бизнеса в Узбекистане.",
        },
        {
          q: "Сколько стоит AI-агент?",
          a: "Готовой фиксированной цены нет — она зависит от модели, количества интеграций, сложности и объёма базы знаний. Правильный путь — на бесплатной консультации определить потребность и получить точное предложение под неё. «Единая цена для всех» обычно не подходит под реальный процесс.",
        },
        {
          q: "За какое время будет готов AI-агент?",
          a: "Это зависит от сложности агента. Простой FAQ- и лид-агент запускается относительно быстро; многошаговый агент, глубоко подключённый к CRM/1С и процессу заказов, занимает больше времени. Точный срок даётся после этапа анализа.",
        },
        {
          q: "Мои данные в безопасности?",
          a: "Да, это требует серьёзного подхода. В хорошо построенном агенте ограничиваются права доступа, защищаются конфиденциальные данные, и агент обращается только к разрешённым ему системам. Требования к безопасности согласуются в начале проекта.",
        },
      ],
    },
    cta: {
      title: "Думаете о создании AI-агента для вашего бизнеса?",
      subtitle:
        "Команда Tezcode проанализирует ваш бизнес и вместе оценит, подходит ли вам AI-агент и какую пользу вы можете извлечь. Получите бесплатную консультацию.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "AI Agent / 2026",
      title: "Building an AI agent for business in Tashkent: a complete guide (2026)",
      subtitle:
        "What an AI agent is, how it differs from a chatbot, which businesses need one, how it works, what it costs and how to build one in 6 steps — a practical guide for businesses in Uzbekistan.",
      dateLabel: "June 14, 2026",
      readTime: "14 min read",
    },
    tldr: {
      label: "Short answer",
      text:
        "An AI agent is software that does not just answer but carries a task through to the end: it replies to the customer, writes data into your CRM or 1C, places the order and brings in a human only when needed. Building an AI agent for business in Tashkent usually takes 6 steps: analysis → design → integration → testing → launch → support. The price is not a ready-made template — it depends on your needs (which model, which integrations, how much complexity). Tezcode — a 16-person team founded in Tashkent in 2024 — builds AI agents on top of Claude and GPT that work in Uzbek and Russian, and offers a free consultation.",
    },
    sections: [
      {
        heading: "What is an AI agent and how does it differ from a chatbot?",
        paragraphs: [
          "An AI agent is software that can make decisions on its own and carry out a practical task in order to reach a goal. An ordinary chatbot answers a question with text and stops there. An AI agent, beyond answering, acts: it looks up data, writes to a system, creates an order, sends an invoice or assigns a task to an employee.",
          "Here is the difference in a simple example. If a customer asks \"do you have shampoo for hair?\", an ordinary chatbot says \"yes, we have shampoos.\" An AI agent instead checks the stock balance in your inventory, finds a matching product, states its price, places the order in the CRM if the customer wants, and signals the delivery team — with no human involved.",
          "So the core difference is: a chatbot talks, an agent does the work. In technical terms this is called \"tool calling\" (the agent calls functions in external systems) and \"orchestration\" (running several steps in sequence). This is exactly why, in 2026, modern AI agents have become far more useful than simple question-and-answer bots.",
          "Another important difference is context and memory. A well-built agent takes the previous conversation, the customer's order history and your business rules into account. So it does not start from scratch every time — it works like a real assistant.",
          "In short: a chatbot runs on a script (\"if asked this, answer that\") with a limited set of buttons; an AI agent understands free text, makes decisions and acts in external systems. The first is five-year-old technology; the second is the 2026 standard.",
        ],
      },
      {
        heading: "Which business needs an AI agent?",
        paragraphs: [
          "Not every business needs an AI agent to the same degree. But if the following signs are present, it is a strong signal:",
          "The biggest benefit goes to businesses with a lot of repetitive, similar communication and processes. In Uzbekistan these are usually the following fields — next to each is what exactly the agent does:",
        ],
        bullets: [
          "Sign: you answer the same questions dozens of times a day (\"how much is it?\", \"where are you located?\", \"what are your hours?\").",
          "Sign: customers write in the evening or on weekends, but there is no operator — leads go cold.",
          "Sign: you manually move data from one system to another (from Telegram to Excel, from Excel to 1C).",
          "Retail and e-commerce — product selection, stock checks, taking orders, delivery status.",
          "Clinics and medical centers — appointment booking, reminders, answers to common questions, a queue without phone calls.",
          "Restaurants and HoReCa — reservations, menu advice, delivery orders.",
          "Services (education, beauty, repair, logistics) — sign-ups, reminders, price estimates, lead qualification.",
        ],
      },
      {
        heading: "Types of AI agents: which one fits you?",
        paragraphs: [
          "In practice, businesses most often use one or several of the following types. Each has its own job:",
        ],
        bullets: [
          "Customer support agent — answers questions 24/7, resolves common issues itself, and hands complex cases to an operator.",
          "Sales / lead agent — \"warms up\" an incoming customer, identifies the need, offers a suitable option and writes the contact into the CRM.",
          "Order agent — runs the process from product selection to payment and delivery, checking stock and price against the real database.",
          "Internal automation agent — for employees: prepares documents, gathers reports, moves data between systems and distributes tasks.",
          "Multi-agent \"AI office\" approach — several agents share the work (one for sales, one for support, one for reporting) while an orchestrator agent manages them.",
        ],
      },
      {
        heading: "How does an AI agent work? (technical, but in plain language)",
        paragraphs: [
          "Many people picture an \"AI agent\" as a magic box. In reality it is made of several clear parts, and each one does an understandable job.",
          "1. LLM (language model) — the agent's \"brain.\" This is a large language model like GPT (OpenAI) or Claude (Anthropic) that understands text, makes decisions and forms answers. The model choice affects quality, speed and cost.",
          "2. Knowledge base (RAG) — needed so the agent answers from your real data. In the RAG (Retrieval-Augmented Generation) approach, the agent finds the right snippet in your documents, price list, FAQ and catalog before answering. That is why it does not \"make things up\" but answers based on your reality.",
          "3. Integration (tools) — connects the agent to your business systems: CRM, 1C, inventory database, Telegram, website, payment system. This is exactly the part that turns the agent from a \"talking bot\" into an \"assistant that does the work.\"",
          "4. Multilingual support — in Uzbekistan the agent must work naturally in Uzbek and Russian (often mixed within a single conversation). Modern models handle this well, but it requires proper tuning and testing.",
          "The simplified chain is: the customer writes → the agent understands the intent → if needed it pulls data from the knowledge base → if needed it queries a system (stock, order) → it answers or completes the task → it records the result.",
          "Let us look at a real example. A customer writes in Telegram: \"Hi, I need a gift for my daughter who is turning 6, do you have something up to 200 thousand?\" The agent understands the intent (gift + age + budget), finds matching products in the catalog, checks stock in the warehouse, offers 3 options, adds the chosen one to the order, asks for the address and phone, and records the order in the CRM while signaling the delivery team. All of this in one conversation, with no operator involved. Only if there is a payment dispute or a non-standard request does it hand off to a human.",
        ],
      },
      {
        heading: "What is the real benefit of an AI agent? (an honest assessment)",
        paragraphs: [
          "Being honest matters here: the exact numbers differ for every business, and we do not cite made-up claims like \"our clients raised sales by X%.\" Instead we name the general trends observed in the industry — the result depends on your process.",
        ],
        bullets: [
          "24/7 answers — even if a customer writes at night or on a holiday, the reply comes instantly and the lead does not go cold.",
          "Automating routine — repeated questions and manual data transfer stop eating up people's time.",
          "Fast response time — the customer does not wait for minutes, which positively affects conversion.",
          "Lower load on operators — the agent takes the simple questions, so people deal only with complex cases.",
          "Consistent quality — the agent does not get tired and answers correctly and politely regardless of mood.",
          "Data and analytics — every conversation is recorded, and the most common questions and lead sources become visible.",
        ],
      },
      {
        heading: "Does an AI agent replace a human?",
        paragraphs: [
          "No. The important point: an AI agent does not replace a human entirely. It takes on the repetitive, time-consuming part, while your employees gain time for valuable work — complex deals and relationships. In a properly built system the agent and the human work together: the agent on the front line, the human on complex and high-value cases.",
        ],
      },
      {
        heading: "How do you build an AI agent? — 6 steps",
        paragraphs: [
          "A good AI agent is not just \"switching on a bot.\" A reliable result goes through the following 6 stages. This process is described in detail on Tezcode's AI agent service page (tezcode.dev/ai-agent), while AI chatbot solutions are on the tezcode.dev/ai-chatbot page.",
        ],
        bullets: [
          "1. Analysis — which problem are we solving? Which process is repetitive and worth automating? What is the success criterion? Skipping this stage is the most common mistake.",
          "2. Design — the agent's job, the conversation flow, which questions it handles itself and when it hands off to a human are defined. Language (uz/ru), tone and business rules are written down here.",
          "3. Integration — the agent connects to the CRM, 1C, inventory, Telegram or website, and the knowledge base (RAG) is filled with your real data.",
          "4. Testing — the agent is checked against real scenarios: wrong answers, \"difficult\" customers, edge cases. This stage determines quality.",
          "5. Launch — the agent connects to a live channel (website, Telegram, Instagram), first at a limited volume, then fully.",
          "6. Support and improvement — real conversations are analyzed, answers and the knowledge base are updated, and the agent becomes more accurate over time.",
        ],
      },
      {
        heading: "What will be needed from you to build an AI agent?",
        paragraphs: [
          "Many business owners think \"I'm not a technical person, this is probably hard.\" In fact, what is required from you is not to write code but to explain your business well. The following make the agent accurate and useful:",
        ],
        bullets: [
          "A list of common questions — what customers usually ask and how you answer. Reviewing your Telegram or Instagram history is enough.",
          "Prices and catalog — products/services, prices and key terms. This becomes the agent's knowledge base.",
          "Business rules — discount limits, working hours, delivery terms, and in which cases to hand off to a human.",
          "Access to your systems — which CRM, 1C or inventory you use; technical access is needed for integration.",
          "Tone and language — how the agent should speak: formal or friendly, mainly in Uzbek or Russian.",
          "A responsible person — if one person on your side answers questions, the project moves faster and with better quality.",
        ],
      },
      {
        heading: "What does the price of an AI agent depend on?",
        paragraphs: [
          "The most frequent question is \"how much does it cost?\" The honest answer: there is no ready price, because an AI agent is like a suit — it is tailored to your measurements. The price depends on:",
        ],
        bullets: [
          "Model — which LLM (GPT, Claude) and which version is used; this affects quality and the ongoing running cost.",
          "Number of integrations — only the website, or also CRM, 1C, inventory, payment system and Telegram? Each connection increases the workload.",
          "Complexity — a simple FAQ agent or an agent with multi-step logic that completes an order end to end.",
          "Knowledge base size — how many documents, the catalog and rules the agent is \"trained\" on.",
          "Language and tone — mixed Uzbek/Russian communication, brand voice and tuning of business rules.",
          "Support — the level of updating, monitoring and improvement after launch.",
          "The right approach — first identify the need in a free consultation, then get a precise proposal tailored to it. Be wary of \"one price for everyone\" offers: they often do not fit your real process.",
        ],
      },
      {
        heading: "The most common mistakes",
        paragraphs: [
          "AI agent projects more often fail because of the approach, not the technology. The most common mistakes:",
        ],
        bullets: [
          "Starting without a goal — building an agent with no clear task, \"everyone does it, so we will too.\" First define which problem it solves.",
          "Ignoring the knowledge base — if the agent is not fed your real data, it gives wrong or generic answers.",
          "Leaving it without integration — an agent not connected to CRM/1C turns into an ordinary chatbot and does not deliver the main benefit.",
          "No handoff path to a human — if the agent cannot pass a complex case to an operator, the customer gets frustrated.",
          "Cutting the testing stage short — an agent launched without checks makes mistakes in front of a live customer and loses trust.",
          "Build it once and forget — an agent is a living system; without regular updates it becomes outdated over time.",
        ],
      },
      {
        heading: "Ready-made platform, no-code or building from scratch — which one?",
        paragraphs: [
          "There are several ways to implement an AI agent, and the right choice depends on the complexity of your business:",
        ],
        bullets: [
          "Ready-made SaaS chatbot platforms — start fast and cheap, but often lack deep integration with Uzbek systems (1C, local CRMs, payment) and weakly support the Uzbek language. Enough for a simple FAQ, limited for serious automation.",
          "No-code builders — require little technical knowledge, but as complexity grows they hit a ceiling, and integrations are limited.",
          "Custom solution — an agent precisely tuned to your business, integration with any system, full control and data security. The best path for more complex processes and a growing business.",
          "Practical advice: if your goal is just simple Q&A on the website, you can start with a ready-made solution. But if the agent must work with your inventory, CRM or order process, a custom solution is cheaper and more reliable in the long run, because you do not keep hitting the same limits over and over.",
        ],
      },
      {
        heading: "Building an AI agent with Tezcode",
        paragraphs: [
          "Tezcode is a 16-person AI Software Factory team founded in Tashkent in 2024. We build AI agents, AI chatbots and custom software for business. The founder is Bekzod Mirzaaliyev.",
          "We build agents on top of Claude (Anthropic) and GPT (OpenAI) models, tune them to work in Uzbek and Russian, and connect them to your existing systems — CRM, 1C, Telegram, website. The work follows the 6 steps described above, agreeing each stage with you.",
          "Our R&D direction also includes the \"AI office\" approach — where several agents (sales, support, reporting and other departments) share the work between them. This is still a developing approach, not a finished boxed product — but a solution in this direction can be built for your business.",
          "To get started you do not have to buy anything right away: first, in a free consultation, we assess together whether an AI agent fits your business and what benefit you can get from it.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is an AI agent?",
          a: "An AI agent is software that does not just answer but carries out a task. It replies to the customer, writes data into your CRM or 1C, places the order and, when needed, hands off to an employee. At its core are a large language model like GPT or Claude, your knowledge base and integration with your business systems.",
        },
        {
          q: "How does an AI agent differ from a chatbot?",
          a: "A chatbot answers a question with text and stops there. An AI agent acts: it checks stock in the warehouse, creates an order, writes data to the system and hands a complex case to an operator. Simply put: a chatbot talks, an agent does the work.",
        },
        {
          q: "Which business needs an AI agent?",
          a: "Businesses with a lot of repetitive questions and processes — retail and e-commerce, clinics, restaurants, education, beauty and the service sector. If you answer the same questions dozens of times a day, leads go unanswered in the evening, or you manually move data between systems, an AI agent will be useful.",
        },
        {
          q: "Does an AI agent work with existing CRM, 1C or Telegram?",
          a: "Yes. A properly built AI agent works through integration with your existing CRM, 1C, inventory database, website and Telegram. This integration is exactly what distinguishes an agent from an ordinary chatbot — it does not just talk, it really acts in your systems.",
        },
        {
          q: "Does the AI agent work in the Uzbek language?",
          a: "Yes. Modern language models work naturally in Uzbek and Russian, often mixed within a single conversation. Tezcode tunes and tests agents specifically for uz/ru communication for businesses in Uzbekistan.",
        },
        {
          q: "How much does an AI agent cost?",
          a: "There is no fixed ready price — it depends on the model, the number of integrations, the complexity and the size of the knowledge base. The right path is to identify the need in a free consultation and get a precise proposal tailored to it. \"One price for everyone\" usually does not fit a real process.",
        },
        {
          q: "How long does it take to build an AI agent?",
          a: "It depends on the agent's complexity. A simple FAQ and lead agent launches relatively quickly; a multi-step agent deeply connected to CRM/1C and the order process takes longer. The exact timeline is given after the analysis stage.",
        },
        {
          q: "Is my data safe?",
          a: "Yes, this requires a serious approach. In a well-built agent, access rights are restricted, confidential data is protected, and the agent only queries the systems it is allowed to. Security requirements are agreed at the start of the project.",
        },
      ],
    },
    cta: {
      title: "Thinking about building an AI agent for your business?",
      subtitle:
        "The Tezcode team will analyze your business and assess together whether an AI agent fits you and what benefit you can get from it. Get a free consultation.",
      button: "Contact via Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
