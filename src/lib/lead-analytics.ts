import { readConsent } from "./cookie-consent";
import type { ContactData } from "./contact";
import type { LeadMarket } from "./markets";

type Attribution = NonNullable<ContactData["attribution"]>;
const ATTRIBUTION_KEY = "tc_lead_attribution";
const campaignValue = (value: string | null) =>
  value && /^[a-zA-Z0-9_.-]{1,80}$/.test(value) ? value : undefined;

// Store first-touch campaign codes only after analytics consent. Full URLs,
// query strings and contact details are never sent as conversion properties.
export function getLeadAttribution(): Attribution | undefined {
  if (typeof window === "undefined" || readConsent() !== "all") return undefined;
  try {
    const previous: unknown = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "null");
    if (previous && typeof previous === "object") {
      const saved = previous as Record<string, unknown>;
      return {
        source: campaignValue(typeof saved.source === "string" ? saved.source : null),
        medium: campaignValue(typeof saved.medium === "string" ? saved.medium : null),
        campaign: campaignValue(typeof saved.campaign === "string" ? saved.campaign : null),
        referrerHost: typeof saved.referrerHost === "string" && /^[a-zA-Z0-9.-]{1,200}$/.test(saved.referrerHost)
          ? saved.referrerHost : undefined,
      };
    }
  } catch { /* Attribution must not prevent a contact request. */ }
  const query = new URLSearchParams(window.location.search);
  let referrerHost: string | undefined;
  try {
    const host = new URL(document.referrer).hostname;
    if (host !== window.location.hostname && /^[a-zA-Z0-9.-]{1,200}$/.test(host)) referrerHost = host;
  } catch { /* Direct visits have no referrer. */ }
  const attribution: Attribution = {
    source: campaignValue(query.get("utm_source")),
    medium: campaignValue(query.get("utm_medium")),
    campaign: campaignValue(query.get("utm_campaign")),
    referrerHost,
  };
  try { sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution)); } catch { /* Optional storage. */ }
  return attribution;
}

type LeadProperties = {
  language: string;
  market: LeadMarket;
};

type ContactClickProperties = {
  language: string;
  channel: "email" | "phone" | "telegram" | "form";
  market: LeadMarket;
};

function trackEvent(name: "generate_lead" | "contact_click", properties: LeadProperties | ContactClickProperties) {
  if (typeof window === "undefined" || readConsent() !== "all") return;
  const analyticsWindow = window as Window & {
    gtag?: (command: "event", name: string, parameters: LeadProperties | ContactClickProperties) => void;
    posthog?: { capture: (name: string, parameters: LeadProperties | ContactClickProperties) => void };
  };
  // Analytics failures must never turn an accepted enquiry into an error.
  try { analyticsWindow.gtag?.("event", name, properties); } catch { /* Optional provider. */ }
  try { analyticsWindow.posthog?.capture(name, properties); } catch { /* Optional provider. */ }
}

export function trackLead({ language, market }: LeadProperties) {
  // Free-text enquiry fields may contain personal data. Only send fixed context.
  trackEvent("generate_lead", { language, market });
}

export function trackContactClick(properties: ContactClickProperties) {
  trackEvent("contact_click", properties);
}
