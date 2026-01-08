import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_DECLINED,
  COOKIE_CONSENT_KEY,
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

function loadGtag() {
  console.log("loadGtag called");

  if (!GoogleAnalyticsID || typeof window === "undefined") return;
  // Avoid injecting multiple times
  if (document.querySelector(`script[src*="${GoogleAnalyticsID}"]`)) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (): void {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  // disable automatic page_view, in SPA rotings we will track manually
  window.gtag("config", GoogleAnalyticsID, { send_page_view: false });
  trackEvent(EVENT_NAME_OPEN_APP, {
    referrer: document?.referrer ? new URL(document.referrer).hostname : "noReferrer", // localStorage(ORIGIN_REFERRER) not ready yet
    origin: localStorage.getItem(ORIGIN_QUERY_PARAM_URL) || "noOrigin",
  });
}

export function enableAnalytics() {
  console.log("enableAnalytics called");

  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_ACCEPTED);
  loadGtag();
}

export function disableAnalytics() {
  console.log("disableAnalytics called");

  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_DECLINED);
  // Prevent further calls
  try {
    window.gtag = undefined;
  } catch (e) {
    console.log(e);
  }
}

export function isAnalyticsAllowed() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_ACCEPTED;
}

// track every added event e.g: trackEvent(EVENT_NAME_OPEN_TAB, { tab: pathName });
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!isAnalyticsAllowed() || typeof window === "undefined" || !window.gtag) return;
  console.log("trackEvent called, name:", name, "params:", {
    ...params,
    referrer: localStorage.getItem(ORIGIN_REFERRER) || "noReferrer",
    origin: localStorage.getItem(ORIGIN_QUERY_PARAM_URL) || "noOrigin",
  });
  window.gtag("event", name, {
    ...params,
    referrer: localStorage.getItem(ORIGIN_REFERRER) || "noReferrer",
    origin: localStorage.getItem(ORIGIN_QUERY_PARAM_URL) || "noOrigin",
  });
}
