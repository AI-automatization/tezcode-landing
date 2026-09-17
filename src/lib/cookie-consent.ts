export const CONSENT_KEY = "tc_cookie_consent";
export const CONSENT_EVENT = "tc:cookie-consent";
export type Consent = "all" | "essential";
let memoryConsent: Consent | null = null;

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(CONSENT_KEY) ?? "null");
    if (stored && typeof stored === "object" && "value" in stored &&
      (stored.value === "all" || stored.value === "essential")) return stored.value;
  } catch { /* Storage can be unavailable in private browsing. */ }
  return memoryConsent;
}

export function saveConsent(value: Consent) {
  memoryConsent = value;
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, ts: Date.now() }));
  } catch { /* Keep the choice for this page even if storage is blocked. */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function subscribeConsent(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY || event.key === null) {
      memoryConsent = null;
      listener();
    }
  };
  window.addEventListener(CONSENT_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}
