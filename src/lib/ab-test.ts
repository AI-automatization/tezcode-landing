import { cookies } from "next/headers";

export type ABVariant = "a" | "b";

const COOKIE_PREFIX = "tc_ab_";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Get or assign A/B variant for a test, persists via cookie.
 * Server-component compatible (Next.js 16 async cookies).
 */
export async function getABVariant(testName: string): Promise<ABVariant> {
  const store = await cookies();
  const cookieName = `${COOKIE_PREFIX}${testName}`;
  const existing = store.get(cookieName)?.value as ABVariant | undefined;

  if (existing === "a" || existing === "b") {
    return existing;
  }

  // 50/50 split — deterministic per request (not random across SSR/CSR)
  const variant: ABVariant = Math.random() < 0.5 ? "a" : "b";
  store.set(cookieName, variant, {
    maxAge: ONE_YEAR,
    path: "/",
    sameSite: "lax",
  });
  return variant;
}

/**
 * Active A/B tests config — single source of truth.
 * Add new tests here, then use `await getABVariant("test_name")` in pages/components.
 */
export const AB_TESTS = {
  hero_headline: {
    description: "Hero headline variant A vs B",
    a: { weight: 50 },
    b: { weight: 50 },
  },
  cta_primary: {
    description: "Primary CTA copy variant",
    a: { weight: 50 },
    b: { weight: 50 },
  },
} as const;

export type ABTestName = keyof typeof AB_TESTS;
