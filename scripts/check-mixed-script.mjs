#!/usr/bin/env node
/**
 * Guards the site's language rule: Uzbek copy is pure Latin, Russian and
 * Ukrainian copy pure Cyrillic.
 *
 * The recurring bug is a Cyrillic letter hiding inside Uzbek text — typically a
 * trailing suffix (-da, -ga, -dan, -lar) or a short function word typed on a
 * Cyrillic keyboard layout. It looks correct to the eye but silently breaks the
 * keyword for search engines. Commit 50fb37e (2026-09-07) cleaned a batch of
 * these; this script keeps them out.
 *
 * Two checks, both zero-false-positive by construction:
 *
 *   MIXED WORD       one word contains both Latin and Cyrillic letters.
 *                    Always wrong, in any locale.
 *
 *   CYRILLIC IN UZ   a Cyrillic letter in any string literal inside a `uz:`
 *                    block or uz.json. Catches a whole stray Cyrillic word,
 *                    which the mixed-word rule cannot see because every letter
 *                    in it is Cyrillic. Scoped to string literals with comments
 *                    stripped, so a Russian quote in a TODO is not copy and
 *                    does not trip.
 *
 * Deliberately NOT flagged: Latin brand names inside Cyrillic copy (a Russian
 * sentence naming Telegram, amoCRM or Bitrix24). That is correct and
 * unavoidable, and flagging it produced 41 false positives on this repo.
 *
 * Apostrophes are neutral word-joiners, not Latin letters — otherwise every
 * Ukrainian word containing an apostrophe would trip, and this site has a `uk`
 * locale. Backslash escapes are stripped first, or a JSON newline escape
 * followed by a Cyrillic word would read as one mixed word.
 *
 * Escape hatch: append `mixed-script-ok` to a line to skip it.
 *
 * Usage:  node scripts/check-mixed-script.mjs [path ...]     (default: src)
 *         pnpm check:script
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";

const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".md", ".json"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", "build", "out"]);
const SUPPRESS = "mixed-script-ok";

const LATIN = /[A-Za-z]/;
const CYRILLIC = /[\u0400-\u04FF]/;
const APOSTROPHES = "'’ʼ`";
const WORD = new RegExp(
  `[A-Za-z\\u0400-\\u04FF][A-Za-z\\u0400-\\u04FF${APOSTROPHES}]*`,
  "g",
);
const CYRILLIC_WORD = new RegExp(
  `[\\u0400-\\u04FF][\\u0400-\\u04FF${APOSTROPHES}]*`,
  "g",
);
/** A backslash escape (newline, quote, unicode) — not two adjacent letters. */
const ESCAPE = /\\./g;
/** Opens the Uzbek branch of a locale map: `uz: {` or `"uz": {`. */
const UZ_BLOCK_OPEN = /(?:^|[\s,{])"?uz"?\s*:\s*\{/;
/** Quoted string literals — where shipped copy lives. */
const STRING_LITERAL = /"([^"\n]*)"|'([^'\n]*)'|`([^`\n]*)`/g;
/** A `//` line comment, but never a `://` URL scheme. */
const LINE_COMMENT = /(^|[^:])\/\/.*$/;

function walk(path, out) {
  const stats = statSync(path);
  if (stats.isDirectory()) {
    for (const entry of readdirSync(path)) {
      if (SKIP_DIRS.has(entry)) continue;
      walk(join(path, entry), out);
    }
  } else if (EXTENSIONS.has(extname(path))) {
    out.push(path);
  }
  return out;
}

/** Cyrillic words found in the string literals of a line (copy, not code). */
function collectCyrillic(text) {
  const found = [];
  for (const match of text.matchAll(STRING_LITERAL)) {
    const literal = match[1] ?? match[2] ?? match[3] ?? "";
    found.push(...(literal.match(CYRILLIC_WORD) ?? []));
  }
  return found;
}

const countBraces = (text) =>
  (text.match(/\{/g) ?? []).length - (text.match(/\}/g) ?? []).length;

const roots = process.argv.slice(2);
const files = (roots.length > 0 ? roots : ["src"]).flatMap((root) => walk(root, []));

const findings = [];

for (const file of files) {
  const isUzbekFile = /^uz\.(json|ts)$/.test(basename(file));
  const lines = readFileSync(file, "utf8").split("\n");

  // Depth of the `uz:` object we are currently inside, or null when outside.
  let uzDepth = null;

  lines.forEach((raw, index) => {
    // Comments never ship, so a deliberate Cyrillic quote in a TODO is fine.
    const line = raw.replace(LINE_COMMENT, "$1").replace(ESCAPE, " ");
    const skip = raw.includes(SUPPRESS);
    const wasInsideUz = uzDepth !== null;

    if (uzDepth === null && UZ_BLOCK_OPEN.test(line)) {
      // A one-line `uz: { ... },` opens and closes on the same line, so a depth
      // of zero here means the block is already done — not that we are inside it.
      const depth = countBraces(line.slice(line.search(UZ_BLOCK_OPEN)));
      uzDepth = depth > 0 ? depth : null;
      if (uzDepth === null && !skip && CYRILLIC.test(line)) {
        const strays = collectCyrillic(line.slice(line.search(UZ_BLOCK_OPEN)));
        if (strays.length > 0) {
          findings.push({
            file,
            line: index + 1,
            kind: "Cyrillic in uz",
            detail: strays.join(" "),
          });
        }
      }
    } else if (uzDepth !== null) {
      uzDepth += countBraces(line);
      if (uzDepth <= 0) uzDepth = null;
    }

    if (skip) return;

    for (const word of line.match(WORD) ?? []) {
      if (LATIN.test(word) && CYRILLIC.test(word)) {
        findings.push({ file, line: index + 1, kind: "mixed word", detail: word });
      }
    }

    if (!isUzbekFile && !wasInsideUz && uzDepth === null) return;
    const strays = collectCyrillic(line);
    if (strays.length > 0) {
      findings.push({
        file,
        line: index + 1,
        kind: "Cyrillic in uz",
        detail: strays.join(" "),
      });
    }
  });
}

if (findings.length === 0) {
  console.log(`✓ check-mixed-script: ${files.length} files clean`);
  process.exit(0);
}

console.error(`\n✗ check-mixed-script: ${findings.length} issue(s)\n`);
for (const { file, line, kind, detail } of findings) {
  console.error(`  ${file}:${line}  [${kind}]  ${detail}`);
}
console.error(
  `\nUzbek copy must be pure Latin, Russian/Ukrainian pure Cyrillic.\n` +
    `Append "${SUPPRESS}" to a line only for a deliberate Cyrillic quote.\n`,
);
process.exit(1);
