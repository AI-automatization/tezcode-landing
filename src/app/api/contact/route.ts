import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional(),
  subject: z
    .enum(["demo", "partnership", "investor", "career", "other"])
    .optional(),
  message: z.string().min(10).max(2000),
  locale: z.string().optional().default("uz"),
  // Honeypot — bots fill hidden fields, humans don't see them
  _hp: z.string().max(0).optional(),
  _hp2: z.string().max(0).optional(),
});

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  // Rate limit: 5 submissions per hour per IP
  const rl = rateLimit(`contact:${ip}`, {
    max: RATE_LIMIT_MAX,
    windowMs: RATE_LIMIT_WINDOW_MS,
  });

  if (!rl.ok) {
    const retryAfterSec = Math.ceil((rl.resetAt - Date.now()) / 1000);
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Try again later.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSec),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(rl.resetAt / 1000)),
        },
      },
    );
  }

  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Honeypot triggered = silent success (bot doesn't know it failed)
    if (data._hp || data._hp2) {
      console.warn("[Contact API] Honeypot triggered from IP:", ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    await sendTelegramNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      locale: data.locale,
    });

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": String(rl.remaining),
        },
      },
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.issues },
        { status: 422 },
      );
    }
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
