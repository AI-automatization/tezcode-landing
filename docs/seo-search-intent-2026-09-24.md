# Search intent improvements — 2026-09-24

## Evidence and scope

The baseline below is supplied by Sardor from Search Console. The reporting
window, country/device filters and query-to-URL breakdown were not supplied.
Page assignments are based on repository content, not a verified GSC landing
page report. Positions are baseline averages, not rankings achieved by this work.

No new landing pages, redirects or canonical changes were needed. Existing
service pages handle commercial intent; existing articles handle learning and
comparison intent. The earlier Telegram city-page change remains separate.

| Query | Impressions | Clicks | Position | Existing primary page / intent |
|---|---:|---:|---:|---|
| ai agent yaratish | 68 | — | 6 | `/ai-agent`: custom development; the existing agent guide explains the steps |
| bepul agent | 141 | 0 | 8.7 | `/blog/biznes-uchun-ai-agent-yaratish`: free trial limits and costs; `/ai-agent` clarifies what the free consultation includes |
| ai uzbek tilida | — | — | 8.3 | `/blog/ai-ozbek-tilida`: practical Uzbek prompts and answer evaluation |
| ai avtomatizatsiya biznes Toshkent | — | — | 6.4 | `/ai-avtomatizatsiya`: AI tasks, pilot and integrations |
| разработка ai решений ташкент | — | — | 10 | `/ru/ai-avtomatizatsiya`: local AI development |
| автоматизация бизнес процессов ташкент | — | — | 12 | `/ru/biznes-avtomatlashtirish`: process mapping and system integration |
| avtomatizatsiya O'zbekiston | — | — | 11.5 | `/biznes-avtomatlashtirish`: process automation across Uzbekistan; broad query intent remains provisional |
| pos tizimi | — | — | 14 | `/pos-tizimi`: product capabilities, price and demo |
| ombor qoldig'i dasturi | — | — | 4.5 | `/pos-tizimi`: inventory accounting within retail POS |

## Findings and changes

- Agent development already has detailed service coverage. Its title now shows
  the published starting price, while the guide title focuses on learning the
  six-step process. Free consultation is explicitly distinguished from free
  agent development. No unconfirmed free product is advertised.
- The Uzbek-language article explained the market but lacked examples readers
  could try. It now includes prompts, source-checking criteria and contextual
  links to chatbot/agent services. Unsupported blanket claims about named
  competing tools were removed from the edited Uzbek sections.
- The Russian process-automation title overlapped the AI service page. Titles,
  introductions, FAQs and cross-links now distinguish AI work on unstructured
  input from rule-based process integration. The Uzbek AI introduction replaces
  unsupported percentage/time guarantees with measurable pilot criteria.
- POS already covers inventory, so a separate warehouse landing page would
  duplicate that coverage. The existing page now explains stock arithmetic,
  inventory checks, offline synchronization limits and POS-versus-warehouse
  selection. The POS selection guide links directly to those capabilities.
- Two translated articles emitted Uzbek metadata and Article/FAQ schemas even
  on Russian and English routes. They now use the published content language;
  untranslated locales retain the existing Uzbek canonical fallback.
- Blog sections can now contain typed, locale-aware anchor links rather than
  plain-text URLs. No new dependency or client state is required.

## Verification

Passed: `npm run type-check`, `npm run check:seo` (19 published articles),
`npm run check:script` (221 files), and `git diff --check`. The changed content,
metadata, renderer and checks were also reviewed through `git diff`.

Passed: `npm run check:seo -- http://localhost:3100`. This additionally checks rendered
metadata, canonical URLs, article language, complete FAQ schema contents,
breadcrumb URLs and contextual article links. It also runs the existing
rendered sitemap, localization, redirect and contact-form regression checks.

## After deployment

1. Record the actual deployment date; these commits alone do not publish changes.
2. Export the nine queries with their landing URLs, impressions, clicks, CTR and
   average position using consistent country/device filters. Check whether the
   proposed primary pages match the URLs Google currently selects.
3. Compare the first complete 28-day period after recrawling with the previous
   28 days. Inspect query/page pairs, not only site-wide averages. Small samples
   such as 68 impressions require longer observation before conclusions.
4. Track qualified inquiries alongside clicks. Free-tool traffic may not be a
   fit for a paid development service; do not change that offer merely to gain
   clicks. If two pages alternate for the same query, compare intent and actual
   performance before consolidating anything.

Top-3 is the objective, not a guaranteed outcome. Google can choose a different
snippet from page content. Sources: [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet),
[title guidance](https://developers.google.com/search/docs/appearance/title-link),
[crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
