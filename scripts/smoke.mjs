// Smoke test against a production build: start `next start`, then request every
// URL published in the sitemaps (plus a few fixed endpoints) and require a
// direct 200 — no redirects, no errors. Run after `pnpm build`.
//
//   node scripts/smoke.mjs              # starts the built app on a free port
//   node scripts/smoke.mjs http://...   # checks an already running origin
import { spawn } from "node:child_process";
import { createServer } from "node:net";

const CONCURRENCY = 8;
const TIMEOUT_MS = 30_000;

// Fixed checks on top of the sitemap: [path, expected status].
const FIXED = [
  ["/", 200],
  ["/ru", 200],
  ["/robots.txt", 200],
  ["/sitemap.xml", 200],
  ["/sitemap-index.xml", 200],
  ["/llms.txt", 200],
  ["/__smoke-test-missing-page__", 404],
];

function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function waitUntilUp(origin, child) {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    if (child?.exitCode !== null && child?.exitCode !== undefined) {
      throw new Error(`next start exited with code ${child.exitCode}`);
    }
    try {
      await fetch(`${origin}/robots.txt`, { signal: AbortSignal.timeout(2_000) });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error(`Server at ${origin} did not come up within 60s`);
}

async function get(origin, path) {
  const res = await fetch(`${origin}${path}`, {
    redirect: "manual",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const body = await res.text();
  return { status: res.status, location: res.headers.get("location"), body };
}

function locs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

// Sitemap URLs carry the canonical origin; keep only path + query.
function toPath(url) {
  const u = new URL(url);
  return `${u.pathname}${u.search}`;
}

async function sitemapPaths(origin) {
  const index = await get(origin, "/sitemap.xml");
  if (index.status !== 200) throw new Error(`/sitemap.xml returned ${index.status}`);
  const paths = new Set();
  for (const sitemapUrl of locs(index.body)) {
    const sitemap = await get(origin, toPath(sitemapUrl));
    if (sitemap.status !== 200) throw new Error(`${toPath(sitemapUrl)} returned ${sitemap.status}`);
    for (const url of locs(sitemap.body)) paths.add(toPath(url));
  }
  if (paths.size === 0) throw new Error("Sitemaps list no URLs");
  return [...paths];
}

async function run(origin) {
  const checks = [...FIXED];
  const known = new Set(FIXED.map(([p]) => p));
  for (const path of await sitemapPaths(origin)) {
    if (!known.has(path)) checks.push([path, 200]);
  }

  const failures = [];
  let next = 0;
  async function worker() {
    while (next < checks.length) {
      const [path, expected] = checks[next++];
      try {
        const { status, location } = await get(origin, path);
        if (status !== expected) {
          failures.push(`${path} → ${status}${location ? ` (Location: ${location})` : ""}, expected ${expected}`);
        }
      } catch (error) {
        failures.push(`${path} → ${error.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  if (failures.length) {
    process.stderr.write(`Smoke test FAILED: ${failures.length}/${checks.length}\n`);
    for (const line of failures.sort()) process.stderr.write(`  ${line}\n`);
    return false;
  }
  process.stdout.write(`Smoke test passed: ${checks.length} URLs OK.\n`);
  return true;
}

const external = process.argv[2]?.replace(/\/$/, "");
let child;
let ok = false;
try {
  let origin = external;
  if (!origin) {
    const port = await freePort();
    origin = `http://localhost:${port}`;
    // No -H flag: binding next start to 127.0.0.1 makes the i18n proxy's internal
    // rewrite target `localhost`, and every unprefixed page then 307s to itself.
    child = spawn("node_modules/.bin/next", ["start", "-p", String(port)], {
      stdio: ["ignore", "ignore", "inherit"],
      env: { ...process.env, NODE_ENV: "production" },
    });
  }
  await waitUntilUp(origin, child);
  ok = await run(origin);
} catch (error) {
  process.stderr.write(`Smoke test FAILED: ${error.message}\n`);
} finally {
  child?.kill("SIGTERM");
}
process.exit(ok ? 0 : 1);
