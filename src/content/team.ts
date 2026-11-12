// Single source of truth for the Tezcode team. Team.tsx renders it and every
// "N-person team" claim on the site uses TEAM_SIZE, so adding a member here
// (scripts/team-to-landing on the Claude side) updates the count everywhere.

export type Member = {
  name: string;
  role: string;
  telegram?: string;
  isFounder?: boolean;
  profileSlug?: string; // if set, card links to /jamoa/<slug>
  profileHref?: string; // explicit profile path (e.g. top-level founder pages)
  photo?: string; // /team/<file>.jpg — shown instead of initials when present
};

export const TEAM: Member[] = [
  {
    name: "Bekzod Mirzaaliyev",
    role: "Founder",
    telegram: "@webdevelopertk",
    isFounder: true,
    profileHref: "/bekzod-mirzaaliyev",
    photo: "/team/bekzod-mirzaaliyev.jpg",
  },
  {
    name: "Abdulaziz Yormatov",
    role: "COO",
    photo: "/team/abdulaziz-yormatov.jpg",
    telegram: "@mr_abdulaziz_yormatov",
    profileSlug: "abdulaziz-yormatov",
  },
  {
    name: "Abdulloh Isroilov",
    role: "AI Engineer",
    telegram: "@abufdx",
    profileSlug: "abdulloh-isroilov",
    photo: "/team/abdulloh-isroilov-v2.jpg",
  },
  {
    name: "Azimjon Qurbonov",
    role: "AI Engineer",
    telegram: "@Azim090",
    photo: "/team/azimjon-qurbonov.jpg",
  },
  {
    name: "Diyor Raxmatullayev",
    role: "AI Engineer",
    telegram: "@diyor_011",
    profileSlug: "diyor-raxmatullayev",
    photo: "/team/diyor-raxmatullayev-v2.jpg",
  },
  {
    name: "Sardor Madaliyev",
    role: "AI Engineer",
    telegram: "@madaliev_s",
    profileHref: "/sardor-madaliyev",
    photo: "/team/sardor-madaliyev-v3.jpg",
  },
  {
    name: "Ziyoda Mirzakirova",
    role: "AI Engineer",
    telegram: "@mirzakiirova",
    profileSlug: "ziyoda-mirzakirova",
  },
  {
    name: "Emirhan Ertan",
    role: "AI Engineer",
    telegram: "@Emirhan7788",
    profileSlug: "emirhan-ertan",
  },
  {
    name: "Behruz Satimboyev",
    role: "AI Engineer",
    telegram: "@behruz_237",
    profileSlug: "behruz-satimboyev",
    photo: "/team/behruz-satimboyev.jpg",
  },
  {
    name: "Abubakir Ilhomov",
    role: "AI Engineer",
    telegram: "@abubakirilhomov",
    profileSlug: "abubakir-ilhomov",
    photo: "/team/abubakir-ilhomov-v2.jpg",
  },
  {
    name: "Ibrat Tursunov",
    role: "AI Engineer",
    telegram: "@tursunov_078",
    profileSlug: "ibrat-tursunov",
  },
  {
    name: "Polatbek Ismoilov",
    role: "AI Engineer",
    telegram: "@ismailov_0011",
    profileSlug: "polatbek-ismoilov",
  },
  {
    name: "Abdulaziz Mirzayev",
    role: "AI Engineer",
    telegram: "@mirzaevvv011",
    profileSlug: "abdulaziz-mirzayev",
    photo: "/team/abdulaziz-mirzayev-v2.jpg",
  },
  {
    name: "Jafarbek Ulugbekov",
    role: "AI Engineer",
    telegram: "@JafarbekUlugbekov",
    profileSlug: "jafarbek-ulugbekov",
  },
  {
    name: "Javodbek Abdusalimov",
    role: "AI Engineer",
    telegram: "@Javodbe411",
    profileSlug: "javodbek-abdusalimov",
    photo: "/team/javodbek-abdusalimov-v2.jpg",
  },
  {
    name: "Habibulloh Shuhratov",
    role: "AI Engineer",
    telegram: "@shuhratov_HH",
    profileSlug: "habibulloh-shuhratov",
  },
  {
    name: "Abdulaziz Atxamov",
    role: "AI Engineer",
    telegram: "@abdulazizatxamov262",
    profileSlug: "abdulaziz-atxamov",
    photo: "/team/abdulaziz-atxamov.jpg",
  },
  {
    name: "Ibrohim Sobirov",
    role: "AI Engineer",
    telegram: "@Sinus_30gradus",
    profileSlug: "ibrohim-sobirov",
  },
  {
    name: "Yusuf Kasimov",
    role: "AI Engineer",
    telegram: "@ky_747",
    profileSlug: "yusuf-kasimov",
    photo: "/team/yusuf-kasimov.jpg",
  },
  {
    name: "Jamoliddin Sadriddinov",
    role: "AI Engineer",
    telegram: "@jamkaILZ",
    profileSlug: "jamoliddin-sadriddinov",
    photo: "/team/jamoliddin-sadriddinov.jpg",
  },
  {
    name: "Odilbek Qodirov",
    role: "AI Engineer",
    telegram: "@kodirov_odilbek",
    profileSlug: "odilbek-qodirov",
    photo: "/team/odilbek-qodirov.jpg",
  },
];

// Russian role labels (cards default to English roles; in the ru locale the
// TeamCard shows these instead so the About page reads natively in Russian).
export const ROLE_RU: Record<string, string> = {
  "Bekzod Mirzaaliyev": "Основатель",
  "Abdulaziz Yormatov": "COO · Операционный директор",
  "Abdulloh Isroilov": "ИИ-инженер",
  "Azimjon Qurbonov": "ИИ-инженер",
  "Diyor Raxmatullayev": "ИИ-инженер",
  "Sardor Madaliyev": "ИИ-инженер",
  "Ziyoda Mirzakirova": "ИИ-инженер",
  "Emirhan Ertan": "ИИ-инженер",
  "Behruz Satimboyev": "ИИ-инженер",
  "Abubakir Ilhomov": "ИИ-инженер",
  "Ibrat Tursunov": "ИИ-инженер",
  "Polatbek Ismoilov": "ИИ-инженер",
  "Abdulaziz Mirzayev": "ИИ-инженер",
  "Jafarbek Ulugbekov": "ИИ-инженер",
  "Javodbek Abdusalimov": "ИИ-инженер",
  "Habibulloh Shuhratov": "ИИ-инженер",
  "Abdulaziz Atxamov": "ИИ-инженер",
  "Ibrohim Sobirov": "ИИ-инженер",
  "Yusuf Kasimov": "ИИ-инженер",
  "Jamoliddin Sadriddinov": "ИИ-инженер",
  "Odilbek Qodirov": "ИИ-инженер",
};

// Russian (Cyrillic) name spellings — shown in the ru locale so the About page
// reads natively. Transliterations follow common UZ→RU usage; a member can
// request a different spelling.
export const NAME_RU: Record<string, string> = {
  "Bekzod Mirzaaliyev": "Бекзод Мирзаалиев",
  "Abdulaziz Yormatov": "Абдулазиз Ёрматов",
  "Abdulloh Isroilov": "Абдулло Исроилов",
  "Azimjon Qurbonov": "Азимжон Курбонов",
  "Diyor Raxmatullayev": "Диёр Рахматуллаев",
  "Sardor Madaliyev": "Сардор Мадалиев",
  "Ziyoda Mirzakirova": "Зиёда Мирзакирова",
  "Emirhan Ertan": "Эмирхан Эртан",
  "Behruz Satimboyev": "Бехруз Сатимбоев",
  "Abubakir Ilhomov": "Абубакир Илхомов",
  "Ibrat Tursunov": "Ибрат Турсунов",
  "Polatbek Ismoilov": "Полатбек Исмоилов",
  "Abdulaziz Mirzayev": "Абдулазиз Мирзаев",
  "Jafarbek Ulugbekov": "Джафарбек Улугбеков",
  "Javodbek Abdusalimov": "Джаводбек Абдусалимов",
  "Habibulloh Shuhratov": "Хабибулло Шухратов",
  "Abdulaziz Atxamov": "Абдулазиз Атхамов",
  "Ibrohim Sobirov": "Иброхим Собиров",
  "Yusuf Kasimov": "Юсуф Касимов",
  "Jamoliddin Sadriddinov": "Джамолиддин Садриддинов",
  "Odilbek Qodirov": "Одилбек Кодиров",
};

export const TEAM_SIZE = TEAM.length;
