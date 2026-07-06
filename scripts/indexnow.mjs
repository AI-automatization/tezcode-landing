// IndexNow submitter — tells Bing (and Yandex) about new/changed URLs instantly
// instead of waiting for the next crawl. Bing's index feeds ChatGPT search, so
// fast (re)indexing here directly speeds up AI-answer visibility.
//
// Usage:
//   node scripts/indexnow.mjs               # submit every URL from all locale sitemaps
//   node scripts/indexnow.mjs /ai-chatbot   # submit specific path(s) only
//
// Run after each production deploy (or when key pages change).

const HOST = "www.tezcode.dev";
const BASE_URL = `https://${HOST}`;
const KEY = "5e902adfbc196846b7105f8414982c6b"; // must match public/<key>.txt
const LOCALES = ["uz", "ru", "en", "ar", "uk"];

async function collectSitemapUrls() {
  const urls = [];
  for (const locale of LOCALES) {
    const res = await fetch(`${BASE_URL}/sitemap/${locale}.xml`);
    if (!res.ok) {
      console.error(`sitemap ${locale}: HTTP ${res.status} — skipping`);
      continue;
    }
    const xml = await res.text();
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return [...new Set(urls)];
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${BASE_URL}${p}`))
  : await collectSitemapUrls();

if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}

// IndexNow accepts up to 10,000 URLs per POST; we stay far below that.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${BASE_URL}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = submitted, 202 = accepted (key check pending) — both are success.
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URL submitted`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
