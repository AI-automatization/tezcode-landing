// Check that published sitemap locales match the actual article translations.
// Optional: pass a running site origin to verify rendered SEO output as well.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

function initializer(file, name) {
  const source = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (declaration.name.getText(source) === name) return declaration.initializer;
    }
  }
  throw new Error(`${file}: missing ${name}`);
}

function property(object, name) {
  assert.ok(ts.isObjectLiteralExpression(object));
  const result = object.properties.find((item) =>
    ts.isPropertyAssignment(item) && item.name.getText().replaceAll('"', "") === name,
  );
  assert.ok(result, `Missing property ${name}`);
  return result.initializer;
}

function availableLocales(article) {
  const value = property(article, "availableLocales");
  assert.ok(ts.isArrayLiteralExpression(value));
  return value.elements.map((item) => item.text).sort();
}

function keys(object) {
  assert.ok(ts.isObjectLiteralExpression(object));
  return object.properties.map((item) => item.name.getText().replaceAll('"', "")).sort();
}

const articles = initializer("src/app/[locale]/blog/articles.ts", "ARTICLES");
assert.ok(ts.isArrayLiteralExpression(articles));
for (const article of articles.elements) {
  const slug = property(article, "slug").text;
  const content = initializer(`src/app/[locale]/blog/${slug}/content.ts`, "CONTENT");
  assert.deepEqual(availableLocales(article), keys(content), `${slug}: published/body locale mismatch`);
}
process.stdout.write(`Verified translation coverage for ${articles.elements.length} published articles.\n`);

const origin = process.argv[2];
if (origin) {
  const profiles = initializer("src/content/team-profiles.ts", "TEAM_PROFILES");
  assert.ok(ts.isArrayLiteralExpression(profiles));
  const uzOnlyPaths = [
    "/tools", "/tools/free-code-review", "/tools/free-mvp-roadmap", "/tools/roi-calculator",
    "/bekzod-mirzaaliyev", "/sardor-madaliyev",
    ...profiles.elements.map((profile) => `/jamoa/${property(profile, "slug").text}`),
  ];
  const locales = ["uz", "ru", "en", "ar", "uk"];
  const marketPaths = ["/regions/central-asia", "/regions/europe"];
  const canonicalOrigin = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.tezcode.dev";
  const urlFor = (locale, path) => `${canonicalOrigin}${locale === "uz" ? "" : `/${locale}`}${path}`;
  const pathFor = (locale, path) => `${locale === "uz" ? "" : `/${locale}`}${path}`;
  async function get(path) {
    const response = await fetch(new URL(path, origin), {
      headers: { "User-Agent": "Bingbot" },
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 200, path);
    assert.doesNotMatch(response.headers.get("link") ?? "", /hreflang=/, `${path}: conflicting HTTP alternates`);
    return response.text();
  }
  function links(html) {
    return [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) =>
      Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), match[2]])),
    );
  }
  for (const locale of locales) {
    const xml = await get(`/sitemap/${locale}.xml`);
    const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
    for (const path of uzOnlyPaths) {
      const entry = entries.find((item) => item.includes(`<loc>${urlFor(locale, path)}</loc>`));
      assert.equal(Boolean(entry), locale === "uz", `${locale}${path}: only published translations in sitemap`);
      if (entry) {
        assert.deepEqual([...entry.matchAll(/hreflang="([^"]+)"/g)].map((match) => match[1]).sort(),
          ["uz", "x-default"], `${path}: no untranslated sitemap alternates`);
      }
    }
    for (const path of marketPaths) {
      const marketEntry = entries.find((item) => item.includes(`<loc>${urlFor(locale, path)}</loc>`));
      assert.equal(Boolean(marketEntry), true, `Market sitemap: ${locale}${path}`);
      if (marketEntry) {
        assert.deepEqual([...marketEntry.matchAll(/hreflang="([^"]+)"/g)].map((match) => match[1]).sort(), [...locales, "x-default"].sort());
      }
    }
    for (const article of articles.elements) {
      const path = `/blog/${property(article, "slug").text}`;
      const available = availableLocales(article);
      const entry = entries.find((item) => item.includes(`<loc>${urlFor(locale, path)}</loc>`));
      assert.equal(Boolean(entry), available.includes(locale), `Sitemap ${locale}: ${path}`);
      if (entry) {
        const alternates = [...entry.matchAll(/hreflang="([^"]+)"/g)].map((match) => match[1]).sort();
        assert.deepEqual(alternates, [...available, "x-default"].sort(), `Sitemap alternates: ${path}`);
      }
    }
  }
  for (const [slug, available] of [
    ["suniy-intellekt-xizmatlari", ["uz", "ru", "en"]],
    ["pos-tizimi-tanlash", ["uz", "ru"]],
    ["biznesni-ai-bilan-avtomatlashtirish", ["uz", "ru"]],
  ]) {
    for (const locale of ["uz", "en", "ar"]) {
      const path = `/blog/${slug}`;
      const html = await get(`${locale === "uz" ? "" : `/${locale}`}${path}`);
      const tags = links(html);
      assert.equal(tags.find((tag) => tag.rel === "canonical")?.href,
        urlFor(available.includes(locale) ? locale : "uz", path));
      assert.deepEqual(tags.filter((tag) => tag.hreflang).map((tag) => tag.hreflang).sort(),
        [...available, "x-default"].sort());
    }
  }
  for (const locale of locales) {
    const path = "/ai-avtomatizatsiya";
    const html = await get(`${locale === "uz" ? "" : `/${locale}`}${path}`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title);
    assert.equal(links(html).find((tag) => tag.rel === "canonical")?.href, urlFor(locale, path));
    if (locale !== "uz") assert.doesNotMatch(title, /avtomatlashtirish|Toshkentda/);
    if (locale === "en") assert.match(title, /AI Business Automation/);
  }
  for (const [locale, path, alternateLocales = ["uz"]] of [
    ["ar", "/tools"],
    ["en", "/tools"],
    ["ru", "/tools"],
    ["ar", "/tools/free-mvp-roadmap"],
    ["ar", "/bekzod-mirzaaliyev"],
    ["ru", "/bekzod-mirzaaliyev"],
    ["en", "/jamoa/diyor-raxmatullayev"],
    ["ar", "/blog/biznes-uchun-ai-agent-yaratish", ["uz", "ru", "en"]],
  ]) {
    const html = await get(`/${locale}${path}`);
    const tags = links(html);
    assert.equal(tags.find((tag) => tag.rel === "canonical")?.href, urlFor("uz", path), `${locale}${path}: Uzbek fallback canonical`);
    assert.deepEqual(tags.filter((tag) => tag.hreflang).map((tag) => tag.hreflang).sort(), [...alternateLocales, "x-default"].sort(), `${locale}${path}: fallback alternates`);
  }
  const home = await get("/en");
  // Priority articles must serve metadata and JSON-LD in the rendered language,
  // including the Uzbek fallback on untranslated URLs.
  for (const slug of ["ai-ozbek-tilida", "biznes-uchun-ai-agent-yaratish"]) {
    const content = initializer(`src/app/[locale]/blog/${slug}/content.ts`, "CONTENT");
    const metadata = initializer(`src/app/[locale]/blog/${slug}/page.tsx`, "META");
    for (const locale of locales) {
      const effectiveLocale = keys(content).includes(locale) ? locale : "uz";
      const copy = property(content, effectiveLocale);
      const path = `/blog/${slug}`;
      const html = await get(pathFor(locale, path));
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .map((match) => JSON.parse(match[1]));
      const article = schemas.find((schema) => schema["@type"] === "BlogPosting");
      assert.ok(article, `${locale}${path}: article schema`);
      assert.equal(article.inLanguage, effectiveLocale);
      assert.equal(article.url, urlFor(effectiveLocale, path));
      assert.equal(article.headline, property(property(copy, "hero"), "title").text);
      const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
      const items = property(property(copy, "faq"), "items");
      assert.ok(faq);
      assert.deepEqual(faq.mainEntity.map((item) => [item.name, item.acceptedAnswer.text]),
        items.elements.map((item) => [property(item, "q").text, property(item, "a").text]));
      const title = property(property(metadata, effectiveLocale), "title").text;
      const escapedTitle = title.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
      assert.ok(html.includes(`<title>${escapedTitle} | Tezcode</title>`), `${locale}${path}: localized title`);
      assert.equal(links(html).find((tag) => tag.rel === "canonical")?.href, urlFor(effectiveLocale, path));
      const breadcrumb = schemas.find((schema) => schema["@type"] === "BreadcrumbList");
      assert.equal(breadcrumb?.itemListElement.at(-1)?.item, article.url);
    }
  }
  // These must be actual anchors in the rendered article body, not URL text
  // or links that exist only inside React's serialized data.
  for (const [slug, destinations] of [
    ["ai-ozbek-tilida", ["/ai-chatbot", "/ai-agent"]],
    ["biznes-uchun-ai-agent-yaratish", ["/ai-agent", "/blog/ai-ozbek-tilida"]],
    ["pos-tizimi-tanlash", ["/pos-tizimi"]],
  ]) {
    const html = await get(`/blog/${slug}`);
    const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    const bodyArticles = [...visible.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)]
      .map((match) => match[1]).join(" ");
    for (const path of destinations) {
      assert.ok(bodyArticles.includes(`href="${path}"`), `${slug}: contextual link to ${path}`);
    }
  }
  process.stdout.write("Verified priority article metadata, localized schemas, fallback URLs and contextual links.\n");
  assert.match(home, /<title>AI Business Automation &amp; Custom AI Agents \| Tezcode<\/title>/);
  const visible = home.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  assert.doesNotMatch(visible, /\b(?:Yechimlar|Mahsulotlar|Batafsil)\b/);
  const marketTitles = new Set();
  for (const locale of locales) for (const path of marketPaths) {
    const market = await get(pathFor(locale, path));
    const marketLinks = links(market);
    assert.equal(marketLinks.find((tag) => tag.rel === "canonical")?.href, urlFor(locale, path));
    assert.deepEqual(marketLinks.filter((tag) => tag.hreflang).map((tag) => tag.hreflang).sort(), [...locales, "x-default"].sort());
    assert.equal(marketLinks.find((tag) => tag.hreflang === "x-default")?.href, urlFor("uz", path));
    assert.equal([...market.matchAll(/<h1\b/g)].length, 1, `${path}: one page heading`);
    marketTitles.add(market.match(/<title>(.*?)<\/title>/)?.[1]);
    const country = market.match(/<input\b[^>]*id="contact-country"[^>]*>/)?.[0];
    assert.ok(country);
    assert.ok(country.includes("placeholder="));
    assert.doesNotMatch(country, /value="[^"]+"/);
    assert.match(market, /<input\b[^>]*id="contact-service"[^>]*type="text"/);
    const visible = market.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    for (const related of marketPaths) assert.ok(visible.includes(`href="${pathFor(locale, related)}"`), `${path}: link to ${related}`);
    const schemas = [...market.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const service = schemas.find((schema) => schema["@type"] === "Service" && schema.url === urlFor(locale, path));
    assert.ok(service, `${path}: service schema`);
    const slug = path.split("/").at(-1);
    const areas = service.areaServed.map((area) => area.name).sort();
    assert.deepEqual(areas, slug === "central-asia"
      ? ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"].sort()
      : ["Europe"]);
    assert.ok(visible.length > 1000, `${locale}${path}: localized content rendered`);
    const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
    assert.ok(faq);
    assert.ok(faq.mainEntity.length >= 3, `${path}: localized FAQ schema`);
  }
  assert.equal(marketTitles.size, marketPaths.length * locales.length, "Every localized region page needs its own title");
  for (const country of ["kazakhstan", "kyrgyzstan", "tajikistan", "turkmenistan"]) {
    const retired = await fetch(new URL(`/ru/markets/${country}`, origin), { redirect: "manual", headers: { "User-Agent": "Bingbot" } });
    assert.equal(retired.status, 404, `${country}: removed legacy URL`);
  }
  for (const legacyPath of ["/ru/hududlar/markaziy-osiyo", "/ru/markets/central-asia"]) {
    const removed = await fetch(new URL(legacyPath, origin), { redirect: "manual", headers: { "User-Agent": "Bingbot" } });
    assert.equal(removed.status, 404, `${legacyPath}: obsolete regional URL`);
  }
  const missingMarket = await fetch(new URL("/ru/regions/unknown-market", origin), { headers: { "User-Agent": "Bingbot" } });
  assert.equal(missingMarket.status, 404);
  for (const [path, destination] of [
    ["/pos-tizimi/buxoro", "/pos-tizimi"],
    ["/ru/pos-tizimi/buxoro", "/ru/pos-tizimi"],
    ["/ai-avtomatizatsiya/namangan", "/ai-avtomatizatsiya"],
    ["/ru/ai-avtomatizatsiya/namangan", "/ru/ai-avtomatizatsiya"],
  ]) {
    const retired = await fetch(new URL(path, origin), { redirect: "manual", headers: { "User-Agent": "Bingbot" } });
    assert.equal(retired.status, 308, `${path}: retired-city redirect`);
    assert.equal(retired.headers.get("location"), destination, `${path}: redirect destination`);
  }
  const llms = await get("/llms.txt");
  for (const path of marketPaths) for (const locale of locales) assert.ok(llms.includes(pathFor(locale, path)));
  for (const locale of locales) {
    const contact = await get(`${locale === "uz" ? "" : `/${locale}`}/aloqa`);
    const email = contact.match(/<input\b[^>]*id="contact-email"[^>]*>/)?.[0];
    const phone = contact.match(/<input\b[^>]*id="contact-phone"[^>]*>/)?.[0];
    assert.ok(email, `${locale}: email field`);
    assert.ok(phone, `${locale}: phone field`);
    assert.doesNotMatch(email, /\srequired[\s=>]/);
    assert.doesNotMatch(phone, /\srequired[\s=>]/);
    assert.match(contact, /id="contact-country"/);
    assert.match(contact, /<input\b[^>]*id="contact-service"[^>]*type="text"/);
    assert.doesNotMatch(contact, /<select\b[^>]*id="contact-service"/);
    // Analytics tags must not load during server rendering before consent.
    assert.doesNotMatch(contact, /<script[^>]*src="https:\/\/www\.googletagmanager\.com/);
  }
  process.stdout.write("Verified five localized regional page variants, sitemap alternates, removed legacy URLs, regional links, schema, unknown-region 404, service titles and multilingual contact forms.\n");
}
