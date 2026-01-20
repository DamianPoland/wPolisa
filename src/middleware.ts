import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new Ratelimit instance
const redis = new Redis({
  url: "https://enjoyed-gorilla-41569.upstash.io",
  token: "AaJhAAIncDEyZDU3YWQzNDY3NmI0ZGU4YWM2MWEyNWY1ODkwYzFiZHAxNDE1Njk", // Private upsplash key - do not expose in client-side code!
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "120 s"), // Limit definition: 3 requests per 120 seconds
  analytics: true, // Optional statistics in Upstash Dashboard
});

export async function middleware(request: NextRequest) {
  // Add your endpoints filtering logic here
  if (request.nextUrl.pathname.startsWith("/api/users")) {
    // Get user IP. On localhost always returns ::1
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      (request as any).ip ||
      "127.0.0.1";

    const { success, limit, reset, remaining } = await ratelimit.limit(ip);

    // Over the limit logic
    if (!success) {
      return NextResponse.json(
        {
          error: "Zbyt wiele prób. Odczekaj chwilę.",
          retryAfter: reset,
        },
        {
          status: 429, // Too Many Requests
          headers: {
            "X-Ratelimit-Limit": limit.toString(),
            "X-Ratelimit-Remaining": remaining.toString(),
            "X-Ratelimit-Reset": reset.toString(),
          },
        }
      );
    }
  }

  return NextResponse.next();
}

// 5. matcher config to apply middleware to specific routes
export const config = {
  matcher: "/api/:path*",
};
