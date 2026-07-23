import { notFound } from "next/navigation";

// Catch-all for any unmatched path under a locale. Triggers the localized
// branded 404 at src/app/[locale]/not-found.tsx (Next.js default 404 otherwise
// renders the bare /_not-found for unmatched routes). Real routes take priority
// over this catch-all, so it only fires for genuinely missing pages.
export default function CatchAllNotFound() {
  notFound();
}
