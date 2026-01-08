import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_DECLINED,
  COOKIE_CONSENT_KEY,
  COOKIE_DECLINE_DATE_KEY,
  EVENT_NAME_OPEN_APP,
  ORIGIN_QUERY_PARAM_URL,
  ORIGIN_REFERRER,
} from "@/utils/constants";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Can be visible on FE TODO: for wPolisa.pl "G-4CWK2QT3K0", rest is "G-3DYKBD2L2Y"
const GoogleAnalyticsID = "G-3DYKBD2L2Y";
let isEventOpenAppSent = false;

function loadGtagScript() {
  if (!GoogleAnalyticsID || typeof window === "undefined" || !window.gtag) return;
  // Avoid injecting multiple times
  if (document.querySelector(`script[src*="${GoogleAnalyticsID}"]`)) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  // disable automatic page_view, in SPA routing is tracking manually
  window.gtag("config", GoogleAnalyticsID, { send_page_view: false });
}

// Update Consent Mode state via gtag
function updateGtagConsent(isAccepted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  const state = isAccepted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

// Try to clear GA cookies (best-effort)
function clearGACookies() {
  if (typeof document === "undefined") return;
  try {
    document.cookie
      .split(";")
      .map((c) => c.trim().split("=")[0])
      .forEach((name) => {
        if (name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gat") || name.startsWith("_gac")) {
          document.cookie = `${name}=; Max-Age=0; path=/;`;
          document.cookie = `${name}=; Max-Age=0; domain=${location.hostname}; path=/;`;
        }
      });
  } catch {
    // ignore
  }
}

export function initConsentMode() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (): void {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  // set default consent to denied (Consent Mode v2 recommended pattern)
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const isAccepted = localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_ACCEPTED;
  updateGtagConsent(isAccepted);

  // initialize gtag with dataLayer if not already done
  loadGtagScript();

  // Send the "open_app" event, if previously accepted with full info, if not only with referrer and origin
  if (!isEventOpenAppSent) {
    trackEvent(EVENT_NAME_OPEN_APP, {});
    isEventOpenAppSent = true;
  }
}

export function enableAnalytics() {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_ACCEPTED);
  localStorage.removeItem(COOKIE_DECLINE_DATE_KEY); // Clear any previous decline date when user accepts
  loadGtagScript();
  updateGtagConsent(true);
  // fire initial app-open event after granting consent
  if (!isEventOpenAppSent) {
    trackEvent(EVENT_NAME_OPEN_APP, {});
    isEventOpenAppSent = true;
  }
}

export function disableAnalytics() {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_DECLINED);
  localStorage.setItem(COOKIE_DECLINE_DATE_KEY, new Date().toISOString()); // Save decline timestamp so we can show the popup again after a week

  // Update Consent Mode and try to clear cookies
  try {
    updateGtagConsent(false);
    clearGACookies();
  } catch (e) {
    console.log(e);
  }
}

export function isAnalyticsAllowed() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_ACCEPTED;
}

// track every added event e.g: trackEvent("page_view", { string: string });
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  const referrerHostname = document?.referrer ? new URL(document?.referrer).hostname : "noReferrer";
  window.gtag("event", name, {
    ...params,
    referrer: localStorage.getItem(ORIGIN_REFERRER) || referrerHostname,
    origin: localStorage.getItem(ORIGIN_QUERY_PARAM_URL) || "noOrigin",
  });
}
