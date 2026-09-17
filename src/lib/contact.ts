import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max, "too_long").optional();

// Shared by the browser and API: at least one usable reply channel is required.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "name_length").max(100, "too_long"),
  email: z.string().trim().max(200, "too_long").refine((value) => !value || z.email().safeParse(value).success, "email_invalid").optional(),
  phone: z.string().trim().max(50, "too_long").refine(
    (value) => !value || (/^\+?[\d\s().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7),
    "phone_invalid",
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
  if (!data.email && !data.phone) {
    context.addIssue({ code: "custom", path: ["email"], message: "contact_required" });
  }
});

export type ContactData = z.infer<typeof contactSchema>;

// A bot that fills the hidden fields is dropped by the API; humans never see
// them, so anything non-empty here is treated as automated traffic.
export function isHoneypotFilled(data: Pick<ContactData, "_hp" | "_hp2">) {
  return Boolean(data._hp?.trim() || data._hp2?.trim());
}
