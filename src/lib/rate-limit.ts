import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Rate limiter with two backends:
//   1. Upstash Redis  — when UPSTASH_REDIS_REST_URL + _TOKEN are set (multi-instance safe).
//   2. In-memory Map  — fallback for local dev and single-instance deploys.
//
// Production on Railway with >1 replica MUST set Upstash env vars,
// otherwise each replica enforces its own quota.

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const memoryStore = new Map<string, RateLimitEntry>();

if (
  typeof globalThis !== "undefined" &&
  !(globalThis as { __tcRateCleanup?: boolean }).__tcRateCleanup
) {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of memoryStore.entries()) {
      if (entry.resetAt < now) memoryStore.delete(key);
    }
  }, 5 * 60 * 1000);
  (globalThis as { __tcRateCleanup?: boolean }).__tcRateCleanup = true;
}

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: number;
};

// Cache one limiter per windowMs+max combo — Upstash docs recommend reusing instances.
const upstashLimiters = new Map<string, Ratelimit>();

function getUpstashLimiter(max: number, windowMs: number): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const cacheKey = `${max}:${windowMs}`;
  const cached = upstashLimiters.get(cacheKey);
  if (cached) return cached;

  // Upstash expects a duration string like "1 h", "60 s", "10 m"
  const windowSec = Math.ceil(windowMs / 1000);
  const limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(max, `${windowSec} s`),
    analytics: false,
    prefix: "tc_rl",
  });
  upstashLimiters.set(cacheKey, limiter);
  return limiter;
}

export async function rateLimit(
  key: string,
  options: { max: number; windowMs: number },
): Promise<RateLimitResult> {
  const upstash = getUpstashLimiter(options.max, options.windowMs);

  if (upstash) {
    const result = await upstash.limit(key);
    return {
      ok: result.success,
      remaining: result.remaining,
      resetAt: result.reset,
    };
  }

  const now = Date.now();
  const entry = memoryStore.get(key);

  if (!entry || entry.resetAt < now) {
    const resetAt = now + options.windowMs;
    memoryStore.set(key, { count: 1, resetAt });
    return { ok: true, remaining: options.max - 1, resetAt };
  }

  if (entry.count >= options.max) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return {
    ok: true,
    remaining: options.max - entry.count,
    resetAt: entry.resetAt,
  };
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
