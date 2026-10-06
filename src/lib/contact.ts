import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max, "too_long").optional();

// "https://t.me/name", "t.me/name/", "@name" and "name" all become "@name".
// Anything that is not a plain profile link (e.g. "t.me/+invite") is returned
// as-is so validation can reject it.
export function normalizeTelegramUsername(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const match = /^(?:(?:https?:\/\/)?(?:www\.)?(?:t\.me|telegram\.me|telegram\.dog)\/)?@?([A-Za-z0-9_]+)\/?(?:[?#].*)?$/i.exec(trimmed);
  return match ? `@${match[1]}` : trimmed;
}

// Shared by the browser and API: at least one usable reply channel is required.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "name_length").max(100, "too_long"),
  email: z.string().trim().max(200, "too_long").refine((value) => !value || z.email().safeParse(value).success, "email_invalid").optional(),
  phone: z.string().trim().max(50, "too_long").refine(
    (value) => !value || (/^\+?[\d\s().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7),
    "phone_invalid",
  ).optional(),
  // Visitors paste whatever Telegram shows them ("t.me/name", a full link or
  // "@name"); accept all of them and store the canonical "@name".
  telegramUsername: z.string().trim().max(100, "too_long").transform(normalizeTelegramUsername).refine(
    (value) => !value || /^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(value),
    "telegram_invalid",
  ).optional(),
  subject: z.enum(["demo", "partnership", "investor", "career", "other"]).optional(),
  message: optionalText(2000),
  country: optionalText(80),
  service: optionalText(200),
  locale: z.enum(["uz", "ru", "en", "ar", "uk"]).optional(),
  // Page path only: no URL queries or fragments containing customer data.
  sourcePage: z.string().max(300).regex(/^\/(?!\/)[a-zA-Z0-9/_-]*$/).optional(),
  attribution: z.object({
    source: z.string().max(80).regex(/^[a-zA-Z0-9_.-]+$/).optional(),
    medium: z.string().max(80).regex(/^[a-zA-Z0-9_.-]+$/).optional(),
    campaign: z.string().max(80).regex(/^[a-zA-Z0-9_.-]+$/).optional(),
    referrerHost: z.string().max(200).regex(/^[a-zA-Z0-9.-]+$/).optional(),
  }).optional(),
  // Honeypots. Deliberately NOT constrained here: this schema also backs the
  // browser resolver, and a password manager writing into an off-screen input
  // would otherwise fail validation with no visible error and silently kill a
  // real submission. The API checks them with isHoneypotFilled() instead.
  _hp: z.string().max(200).optional(),
  _hp2: z.string().max(200).optional(),
}).superRefine((data, context) => {
  if (!data.email && !data.phone && !data.telegramUsername) {
    // Reported on the phone field: it is the first contact input visitors see
    // (email lives behind the optional "more details" toggle).
    context.addIssue({ code: "custom", path: ["phone"], message: "contact_required" });
  }
});

export type ContactData = z.infer<typeof contactSchema>;

// A bot that fills the hidden fields is dropped by the API; humans never see
// them, so anything non-empty here is treated as automated traffic.
export function isHoneypotFilled(data: Pick<ContactData, "_hp" | "_hp2">) {
  return Boolean(data._hp?.trim() || data._hp2?.trim());
}
