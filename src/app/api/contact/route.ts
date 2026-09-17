import { NextRequest, NextResponse } from "next/server";
import { contactSchema, isHoneypotFilled } from "@/lib/contact";
import { sendTelegramNotification } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // Rate limit: 5 submissions per hour per IP
    const rl = await rateLimit(`contact:${ip}`, {
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

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      // No issue list in the response: it would hand a spammer the field names
      // and tell it exactly which check it tripped.
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 422 },
      );
    }
    const data = parsed.data;

    // Honeypot hit: answer exactly like a real success so the bot learns
    // nothing, but never deliver it.
    if (isHoneypotFilled(data)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const delivered = await sendTelegramNotification({ ...data, locale: data.locale ?? "uz" });
    if (!delivered) {
      return NextResponse.json(
        { success: false, message: "Message could not be delivered. Please try again." },
        { status: 502 },
      );
    }

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
    if (err instanceof SyntaxError) {
      return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
    }
    console.error("[Contact API] Contact delivery failed");
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
