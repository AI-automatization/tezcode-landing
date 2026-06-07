// Central registry of published blog articles. Drives the blog index cards and
// the sitemap. Each article's full body lives in its own folder
// (src/app/[locale]/blog/<slug>/content.ts); this file only carries the
// lightweight listing metadata so the index and sitemap stay cheap.

import type { ArticleMeta } from "@/components/blog/types";

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "online-birga-film-korish",
    datePublished: "2026-06-07",
    category: "Video / Watch Party",
    list: {
      uz: {
        title: "Do'stlar bilan online birga film ko'rish: Watch Party qanday ishlaydi",
        excerpt:
          "Masofadan turib do'stlar bilan bir vaqtda film va video ko'rish (Watch Party) qanday ishlaydi, nima kerak va qaysi manbalardan ko'rsa bo'ladi. WeWatch misolida.",
      },
      ru: {
        title: "Смотреть фильмы онлайн вместе с друзьями: как работает Watch Party",
        excerpt:
          "Как работает совместный просмотр фильмов и видео с друзьями (Watch Party), что нужно и какие источники поддерживаются. На примере WeWatch.",
      },
    },
  },
  {
    slug: "xodim-nazorati-tizimi",
    datePublished: "2026-06-07",
    category: "HR / Nazorat",
    list: {
      uz: {
        title: "Xodimlar ish vaqti va vazifalarini nazorat qilish tizimi qanday tanlanadi",
        excerpt:
          "Xodimlar ish vaqti, vazifa va samaradorlikni nazorat qilish tizimini tanlash qo'llanmasi: vazifa boshqaruvi, davomat, hisobotlar va nazorat-ishonch muvozanati.",
      },
      ru: {
        title: "Как выбрать систему контроля рабочего времени и задач сотрудников",
        excerpt:
          "Руководство по выбору системы контроля рабочего времени, задач и продуктивности: управление задачами, посещаемость, отчёты и баланс контроля и доверия.",
      },
    },
  },
  {
    slug: "klinika-uchun-crm",
    datePublished: "2026-06-07",
    category: "CRM / Klinika",
    list: {
      uz: {
        title: "Klinika uchun CRM qanday tanlanadi",
        excerpt:
          "Klinika, tibbiyot markazi yoki stomatologiya uchun CRM tanlash qo'llanmasi: qabullar, bemor bazasi, moliyaviy hisobot, rollar va eng ko'p uchraydigan xatolar.",
      },
      ru: {
        title: "Как выбрать CRM для клиники",
        excerpt:
          "Руководство по выбору CRM для клиники, медцентра или стоматологии: приёмы, база пациентов, финансовый отчёт, роли и частые ошибки.",
      },
    },
  },
  {
    slug: "pos-tizimi-tanlash",
    datePublished: "2026-06-07",
    category: "POS / Savdo",
    list: {
      uz: {
        title: "O'zbekistonda do'kon uchun POS tizimi qanday tanlanadi",
        excerpt:
          "Do'kon, market yoki kosmetika do'koni uchun POS tizimi tanlash bo'yicha amaliy qo'llanma: qanday imkoniyatlar shart, offline ishlash nega muhim va xatolardan qanday qochish.",
      },
      ru: {
        title: "Как выбрать POS-систему для магазина в Узбекистане",
        excerpt:
          "Практическое руководство по выбору POS-системы для магазина или маркета: какие функции обязательны, почему важна офлайн-работа и как избежать ошибок.",
      },
    },
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
