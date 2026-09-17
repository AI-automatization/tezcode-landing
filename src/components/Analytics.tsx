"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { readConsent, subscribeConsent } from "@/lib/cookie-consent";
import { getLeadAttribution, trackContactClick } from "@/lib/lead-analytics";
import { getMarketFromPath } from "@/lib/markets";

// Tracking services (all env-driven, no-op if not configured)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com";

export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  useEffect(() => {
    const allowed = readConsent() === "all";
    const providers = window as Window & {
      gtag?: (...args: unknown[]) => void;
      clarity?: (...args: unknown[]) => void;
      posthog?: { opt_in_capturing: () => void; opt_out_capturing: () => void };
    };
    if (GA_ID) Reflect.set(window, `ga-disable-${GA_ID}`, !allowed);
    providers.gtag?.("consent", "update", {
      analytics_storage: allowed ? "granted" : "denied",
      ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    });
    providers.clarity?.("consentv2", {
      analytics_Storage: allowed ? "granted" : "denied", ad_Storage: "denied",
    });
    if (allowed) {
      providers.posthog?.opt_in_capturing();
      getLeadAttribution();
    } else {
      providers.posthog?.opt_out_capturing();
      try { sessionStorage.removeItem("tc_lead_attribution"); } catch { /* Optional storage. */ }
    }
  }, [consent]);

  useEffect(() => {
    if (consent !== "all") return;
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      const channel = url.protocol === "mailto:" ? "email"
        : url.protocol === "tel:" ? "phone"
        : url.hostname === "t.me" ? "telegram"
        : url.origin === window.location.origin && (url.hash === "#contact" || /\/aloqa\/?$/.test(url.pathname)) ? "form"
        : null;
      if (channel) trackContactClick({
        channel,
        language: document.documentElement.lang,
        market: getMarketFromPath(window.location.pathname),
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  // Dev-only: without ids the whole layer is a silent no-op, and NEXT_PUBLIC_*
  // values are baked in at build time — a missing key looks exactly like
  // "consent not granted", which is how it went unnoticed before.
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    if (consent === "all" && !GA_ID && !CLARITY_ID && !POSTHOG_KEY) {
      console.warn(
        "[Analytics] Consent granted but no NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_CLARITY_ID / NEXT_PUBLIC_POSTHOG_KEY is set — nothing is being tracked. See README → Environment Variables.",
      );
    }
  }, [consent]);

  if (consent !== "all") return null;
  return (
    <>
      {/* Google Analytics 4 — traffic source, search keywords, demographics */}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'granted', ad_storage: 'denied',
                ad_user_data: 'denied', ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity — heatmaps + session recording (FREE forever) */}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${CLARITY_ID}");
            clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
          `}
        </Script>
      )}

      {/* PostHog — product analytics, funnels, A/B tests, feature flags */}
      {POSTHOG_KEY && (
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${POSTHOG_KEY}', {
              api_host: '${POSTHOG_HOST}',
              person_profiles: 'identified_only',
              autocapture: false,
              capture_pageview: true,
              capture_pageleave: true,
            });
            posthog.opt_in_capturing();
          `}
        </Script>
      )}
    </>
  );
}
