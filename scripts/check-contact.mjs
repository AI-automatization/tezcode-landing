// Exercise the real schema, API, delivery adapter and analytics helpers with
// mocked transport. This script never sends a message or loads real credentials.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
function load(file, mocks = {}, globals = {}) {
  const compiled = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const context = {
    module, exports: module.exports,
    require: (name) => name in mocks ? mocks[name] : require(name),
    console: { warn() {}, error() {} },
    URL, URLSearchParams, AbortSignal, SyntaxError,
    ...globals,
  };
  runInNewContext(compiled, context, { filename: resolve(file) });
  return module.exports;
}

const contact = load("src/lib/contact.ts");
const markets = load("src/lib/markets.ts");
for (const [slug, market] of [["central-asia", "central-asia"], ["europe", "europe"]]) {
  for (const prefix of ["", "/uz", "/ru", "/en", "/ar", "/uk"]) {
    assert.equal(markets.getMarketFromPath(`${prefix}/regions/${slug}`), market);
    assert.equal(markets.getMarketFromPath(`${prefix}/regions/${slug}/`), market);
  }
}
for (const country of ["kazakhstan", "kyrgyzstan", "tajikistan", "turkmenistan"]) {
  assert.equal(markets.getMarketFromPath(`/ru/markets/${country}`), "general");
}
for (const path of ["/", "/ru", "/ru/aloqa", "/ru/regions/unknown", "/ru/regions/central-asia?email=private"]) {
  assert.equal(markets.getMarketFromPath(path), "general");
}
const valid = { name: "Test Customer", email: "test@example.com", phone: "", locale: "ru", service: "Website accessibility review and custom integrations", country: "Узбекистан", sourcePage: "/ru/regions/central-asia" };
assert.equal(contact.contactSchema.safeParse(valid).success, true);
assert.equal(contact.contactSchema.safeParse({ ...valid, service: "automation" }).success, true);
assert.equal(contact.contactSchema.safeParse({ ...valid, service: "" }).success, true);
assert.equal(contact.contactSchema.parse({ ...valid, service: `  ${valid.service}  ` }).service, valid.service);
assert.equal(contact.contactSchema.safeParse({ ...valid, email: "", phone: "+7 (700) 123-45-67" }).success, true);
assert.equal(contact.contactSchema.safeParse({ ...valid, email: "   ", phone: "+44 20 7946 0123" }).success, true);
for (const patch of [
  { email: "", phone: "" }, { email: "invalid" }, { phone: "abcdefg" },
  { phone: "123" }, { name: " " }, { locale: "invalid" },
  { service: "x".repeat(201) }, { service: ["automation"] },
  { sourcePage: "/contact?email=private@example.com" },
  { attribution: { source: "person@example.com" } },
]) assert.equal(contact.contactSchema.safeParse({ ...valid, ...patch }).success, false, JSON.stringify(patch));

// Honeypots stay out of the schema so an autofilled hidden input can never
// block a real submission in the browser; the API screens them separately.
for (const patch of [{ _hp: "bot" }, { _hp2: "bot@example.com" }]) {
  assert.equal(contact.contactSchema.safeParse({ ...valid, ...patch }).success, true, JSON.stringify(patch));
  assert.equal(contact.isHoneypotFilled(patch), true, JSON.stringify(patch));
}
assert.equal(contact.isHoneypotFilled(valid), false);
assert.equal(contact.isHoneypotFilled({ _hp: "", _hp2: "   " }), false);

let delivered = [];
let deliveryResult = true;
let rateAllowed = true;
let rateThrows = false;
const api = load("src/app/api/contact/route.ts", {
  "@/lib/contact": contact,
  "next/server": { NextResponse: { json: (body, init) => Response.json(body, init) } },
  "@/lib/telegram": { sendTelegramNotification: async (data) => { delivered.push(data); return deliveryResult; } },
  "@/lib/rate-limit": {
    getClientIp: () => "test",
    rateLimit: async () => {
      if (rateThrows) throw new Error("Test backend unavailable");
      return { ok: rateAllowed, remaining: 4, resetAt: Date.now() + 60000 };
    },
  },
});
const submit = (body) => api.POST(new Request("https://example.test/api/contact", { method: "POST", body: JSON.stringify(body) }));
assert.equal((await submit(valid)).status, 200);
assert.equal(delivered[0].locale, "ru");
assert.equal(delivered[0].sourcePage, "/ru/regions/central-asia");
assert.equal(delivered[0].service, valid.service);
assert.equal((await submit({ name: "Legacy", phone: "+998901234567" })).status, 200);
assert.equal(delivered[1].locale, "uz");
for (const slug of ["central-asia", "europe"]) {
  const sourcePage = `/ru/regions/${slug}`;
  assert.equal((await submit({ ...valid, sourcePage, country: "" })).status, 200);
  assert.equal(delivered.at(-1).sourcePage, sourcePage);
  assert.equal(delivered.at(-1).country, "");
}
const beforeInvalid = delivered.length;
const invalid = await submit({ ...valid, email: "", phone: "" });
assert.equal(invalid.status, 422);
// The 422 body must not enumerate fields or checks back to a spammer.
assert.deepEqual(Object.keys(await invalid.json()).sort(), ["message", "success"]);
// A honeypot hit is answered like a success and never delivered, so the bot
// cannot tell which field gave it away.
const trapped = await submit({ ...valid, _hp: "bot" });
assert.equal(trapped.status, 200);
assert.equal((await trapped.json()).success, true);
assert.equal((await submit({ ...valid, _hp2: "bot@example.com" })).status, 200);
assert.equal(delivered.length, beforeInvalid);
const malformed = await api.POST(new Request("https://example.test/api/contact", { method: "POST", body: "{" }));
assert.equal(malformed.status, 400);
deliveryResult = false;
const failed = await submit(valid);
assert.equal(failed.status, 502);
assert.equal((await failed.json()).success, false);
rateAllowed = false;
const throttled = await submit(valid);
assert.equal(throttled.status, 429);
assert.ok(Number(throttled.headers.get("retry-after")) > 0);
rateThrows = true;
assert.equal((await submit(valid)).status, 500);

let outgoing;
const telegram = load("src/lib/telegram.ts", {}, {
  process: { env: { TELEGRAM_BOT_TOKEN: "test-token", TELEGRAM_CHAT_ID: "test-chat" } },
  fetch: async (_url, options) => { outgoing = JSON.parse(options.body); return { ok: true, json: async () => ({ ok: true }) }; },
});
assert.equal(await telegram.sendTelegramNotification({ ...valid, name: "A_[B]", message: "*literal*", attribution: { source: "google", campaign: "kz-pilot" } }), true);
assert.equal(outgoing.parse_mode, undefined);
assert.match(outgoing.text, /A_\[B\]/);
assert.match(outgoing.text, /Узбекистан/);
assert.ok(outgoing.text.includes(`Xizmat: ${valid.service}`));
assert.match(outgoing.text, /kz-pilot/);
const noToken = load("src/lib/telegram.ts", {}, { process: { env: {} }, fetch: () => { throw new Error("Must not call transport"); } });
assert.equal(await noToken.sendTelegramNotification(valid), false);

function storage() {
  const data = new Map();
  return { getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: (key) => data.delete(key), data };
}
const localStorage = storage();
const sessionStorage = storage();
const window = Object.assign(new EventTarget(), {
  localStorage,
  location: { search: "?utm_source=google&utm_medium=organic&utm_campaign=regional-pilot&email=private@example.com", hostname: "example.test", pathname: "/ru/regions/central-asia" },
});
const globals = { window, sessionStorage, CustomEvent: class extends Event {}, document: { referrer: "https://www.google.com/search?q=private" } };
const consent = load("src/lib/cookie-consent.ts", {}, globals);
const analytics = load("src/lib/lead-analytics.ts", { "./cookie-consent": consent }, globals);
const captured = [];
window.gtag = (...args) => captured.push(args);
window.posthog = { capture: (...args) => captured.push(args) };
const properties = { language: "ru", service: "Contact private@example.com about our website", market: "central-asia" };
assert.equal(consent.readConsent(), null);
assert.equal(analytics.getLeadAttribution(), undefined);
analytics.trackLead(properties);
assert.equal(captured.length, 0);
consent.saveConsent("essential");
analytics.trackLead(properties);
assert.equal(captured.length, 0);
consent.saveConsent("all");
const attribution = analytics.getLeadAttribution();
assert.equal(attribution.source, "google");
assert.equal(attribution.referrerHost, "www.google.com");
assert.doesNotMatch(JSON.stringify(attribution), /private|email=|search\?/);
window.location.search = "";
assert.equal(analytics.getLeadAttribution().campaign, "regional-pilot");
analytics.trackLead(properties);
assert.equal(captured.length, 2);
assert.equal(captured[0][1], "generate_lead");
assert.equal(Object.keys(captured[0][2]).sort().join(","), "language,market");
assert.doesNotMatch(JSON.stringify(captured), /private@example\.com|website/);
analytics.trackContactClick({ language: "ru", market: "central-asia", channel: "email" });
assert.equal(captured[2][1], "contact_click");
window.gtag = () => { throw new Error("Test blocked provider"); };
assert.doesNotThrow(() => analytics.trackLead(properties));
consent.saveConsent("essential");
const count = captured.length;
analytics.trackLead(properties);
assert.equal(captured.length, count);
window.localStorage = { getItem() { throw new Error("Blocked"); }, setItem() { throw new Error("Blocked"); } };
assert.doesNotThrow(() => consent.saveConsent("all"));
assert.equal(consent.readConsent(), "all");
process.stdout.write("Contact checks passed: email/phone, validation, API failures, rate limits, mocked delivery, consent and attribution. No external messages sent.\n");
