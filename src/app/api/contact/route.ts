import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(["demo", "partnership", "investor", "career", "other"]).optional(),
  message: z.string().min(10),
  locale: z.string().optional().default("uz"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await sendTelegramNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      locale: data.locale,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.issues }, { status: 422 });
    }
    console.error("[Contact API] Error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
