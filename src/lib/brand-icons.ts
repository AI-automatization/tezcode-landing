import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

// Brand icons are served through explicit route handlers (not the app-dir
// file convention) so their HTTP identity is DETERMINISTIC across deploys:
// the file convention re-emits icons on every build with a fresh
// mtime-based ETag/Last-Modified, which made Google-Favicon treat the
// unchanged icon as "new" on each push and temporarily drop it from SERP.
// Here the ETag is a content hash and Last-Modified is a fixed date — both
// change only when the icon bytes actually change.

// Bump this date ONLY when an icon file is actually replaced.
export const ICONS_UPDATED = "Wed, 24 Jun 2026 00:00:00 GMT";

export function brandIconResponse(file: string, contentType: string) {
  const buf = readFileSync(path.join(process.cwd(), "src/assets/brand", file));
  const etag = `"${createHash("md5").update(buf).digest("hex")}"`;
  return new Response(new Uint8Array(buf), {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(buf.length),
      // 1 day: long enough to be cheap, short enough that a real icon
      // change propagates quickly (Google-Favicon re-fetches on its own
      // schedule and just needs stable validators).
      "Cache-Control": "public, max-age=86400",
      ETag: etag,
      "Last-Modified": ICONS_UPDATED,
    },
  });
}
