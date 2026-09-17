import type { Locale } from "@/i18n/routing";
import { LOCALES, buildPageMetadata } from "@/lib/seo";
import { EUROPE_PATH } from "@/lib/markets";
import { getRegionPageCopy } from "@/content/regions";
import { RegionLanding } from "@/components/market-page/RegionLanding";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const pageLocale = (LOCALES as readonly string[]).includes(locale) ? locale as Locale : "uz";
  const copy = getRegionPageCopy(pageLocale, "europe");
  return buildPageMetadata({
    locale: pageLocale,
    path: EUROPE_PATH,
    title: copy.title,
    description: copy.description,
    availableLocales: LOCALES,
  });
}

export default async function EuropePage({ params }: Props) {
  const { locale } = await params;
  const pageLocale = (LOCALES as readonly string[]).includes(locale) ? locale as Locale : "uz";
  return <RegionLanding locale={pageLocale} region="europe" />;
}
