"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ORIGIN_QUERY_PARAM, ORIGIN_QUERY_PARAM_URL, ORIGIN_REFERRER } from "@/utils/constants";

export default function QueryParamsTracker() {
  const searchParams = useSearchParams();

  // Wykona się tylko raz przy zamontowaniu aplikacji
  useEffect(() => {
    localStorage.setItem(ORIGIN_REFERRER, document.referrer ? new URL(document.referrer).hostname : "noReferrer");
    const originParam = searchParams.get(ORIGIN_QUERY_PARAM);
    if (originParam) {
      localStorage.setItem(ORIGIN_QUERY_PARAM_URL, originParam);
    } else {
      localStorage.removeItem(ORIGIN_QUERY_PARAM_URL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // Komponent nic nie renderuje
}
