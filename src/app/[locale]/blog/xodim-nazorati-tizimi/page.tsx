import { BlogArticleClient } from "@/components/blog/BlogArticleClient";
import type { ArticleLang } from "@/components/blog/types";
import {
  buildPageMetadata,
  getArticleSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  BASE_URL,
} from "@/lib/seo";
import { getArticle } from "../articles";
import { CONTENT } from "./content";

const SLUG = "xodim-nazorati-tizimi";
const PATH = `/blog/${SLUG}`;

export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Xodimlar ish vaqti va vazifalarini nazorat qilish tizimi qanday tanlanadi (2026) | Tezcode",
  description:
    "Xodimlar ish vaqti, vazifalar va samaradorlikni nazorat qilish tizimini tanlash qo'llanmasi: vazifa boshqaruvi, davomat, hisobotlar, nazorat-ishonch muvozanati va xatolar.",
  keywords: [
    "xodim nazorati tizimi",
    "vazifa boshqaruvi dasturi",
    "ish vaqti nazorati",
    "xodim samaradorligi",
    "task management O'zbekiston",
    "контроль сотрудников",
    "учёт рабочего времени",
    "управление задачами",
    "WorkControl",
  ],
});

export default function XodimNazoratiTizimiPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-07";

  const copy = CONTENT.uz;
  const locale: ArticleLang = "uz";

  const articleSchema = getArticleSchema({
    headline: copy.hero.title,
    description: copy.hero.subtitle,
    path: PATH,
    locale,
    datePublished,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: copy.hero.title, url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogArticleClient content={CONTENT} />
    </>
  );
}
