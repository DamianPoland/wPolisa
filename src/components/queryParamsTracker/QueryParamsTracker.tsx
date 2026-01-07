"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QUERY_PARAM_ORIGIN } from "@/utils/constants";

export default function QueryParamsTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Wykona się tylko raz przy zamontowaniu aplikacji
    const originParam = searchParams.get(QUERY_PARAM_ORIGIN);
    if (originParam) {
      localStorage.setItem(QUERY_PARAM_ORIGIN, originParam);
    } else {
      localStorage.removeItem(QUERY_PARAM_ORIGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // Komponent nic nie renderuje
}
