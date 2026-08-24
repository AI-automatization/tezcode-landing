import { notFound } from "next/navigation";
import { TeamProfile } from "@/components/TeamProfile";
import { TEAM_PROFILES, getProfile } from "@/content/team-profiles";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getPersonSchema,
} from "@/lib/seo";

// Unknown slugs 404 instead of rendering. The parent [locale] segment fans out
// locales; this child fans out team member slugs from the profile registry.
export const dynamicParams = false;

export function generateStaticParams() {
  return TEAM_PROFILES.map((p) => ({ slug: p.slug }));
}

function sameAsOf(p: NonNullable<ReturnType<typeof getProfile>>) {
  return [
    p.telegram && `https://t.me/${p.telegram}`,
    p.instagram && `https://instagram.com/${p.instagram}`,
    p.linkedin,
  ].filter(Boolean) as string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProfile(slug);
  if (!p) return {};
  return buildPageMetadata({
    locale,
    path: `/jamoa/${slug}`,
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: [p.name, `${p.name} Tezcode`, `Tezcode ${p.role}`, ...p.skills.slice(0, 4)],
    ogTitle: `${p.name} — Tezcode`,
    ogDescription: p.metaDescription,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const p = getProfile(slug);
  if (!p) notFound();

  const personSchema = getPersonSchema({
    name: p.name,
    slug: `jamoa/${p.slug}`,
    jobTitle: p.role,
    description: p.bio.join(" "),
    knowsAbout: p.knowsAbout,
    sameAs: sameAsOf(p),
    image: p.photo,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Jamoa", url: `${BASE_URL}/#team` },
    { name: p.name, url: `${BASE_URL}/jamoa/${p.slug}` },
  ]);

  return (
    <TeamProfile
      profile={p}
      personSchema={personSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  );
}
