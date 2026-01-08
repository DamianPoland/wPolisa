"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent, initConsentMode } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initConsentMode();
  }, []);

  useEffect(() => {
    // event page_view jest standardowy w Google Analytics i trzeba go użyć przy każdej zmianie strony w SPA
    trackEvent("page_view", {
      page_path: pathName + (searchParams.toString() ? `?${searchParams.toString()}` : ""),
      page_title: document.title,
    });
  }, [pathName, searchParams]);

  return null;
}
