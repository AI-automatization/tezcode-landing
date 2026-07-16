import { brandIconResponse } from "@/lib/brand-icons";

// Deterministic favicon: content-hash ETag + fixed Last-Modified,
// so deploys don't change its HTTP identity (see lib/brand-icons.ts).
export const dynamic = "force-static";

export function GET() {
  return brandIconResponse("favicon.ico", "image/x-icon");
}
