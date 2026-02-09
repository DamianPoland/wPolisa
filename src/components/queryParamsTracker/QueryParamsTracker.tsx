"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ORIGIN_QUERY_PARAM, ORIGIN_QUERY_PARAM_URL, ORIGIN_REFERRER } from "@/utils/constants";

export default function QueryParamsTracker() {
  const searchParams = useSearchParams();

  // call only onece during app load
  useEffect(() => {
    // save referer in localStorage
    localStorage.setItem(ORIGIN_REFERRER, document.referrer ? new URL(document.referrer).hostname : "");

    // save origin in sessionStorage
    const originParam = searchParams.get(ORIGIN_QUERY_PARAM);
    if (originParam) {
      sessionStorage.setItem(ORIGIN_QUERY_PARAM_URL, originParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // no UI component, just a tracker
}
