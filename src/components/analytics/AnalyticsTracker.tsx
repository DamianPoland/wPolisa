"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { EVENT_NAME_OPEN_TAB } from "@/utils/constants";

export default function AnalyticsTracker() {
  const pathName = usePathname();

  useEffect(() => {
    trackEvent(EVENT_NAME_OPEN_TAB, { tab: pathName === "/" ? "/home" : (pathName ?? "noPathName") });
  }, [pathName]);

  return null;
}
