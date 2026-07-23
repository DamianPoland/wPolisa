import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new Ratelimit instance
const redis = new Redis({
  url: "https://eternal-dingo-170551.upstash.io",
  token: "gQAAAAAAApo3AAIgcDI1NDU4NTYwNzJkMWE0MzVlOWQ1YmQ3ZTM3N2Q2NDFhOQ", // Private upsplash key - do not expose in client-side code!
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "300 s"), // Limit definition: 3 requests per 300 seconds
  analytics: true, // Optional statistics in Upstash Dashboard
});

// Middleware function to handle rate limiting
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

    // If over the limit - return rate limit response
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

// matcher config to apply middleware to specific routes
export const config = {
  matcher: "/api/:path*",
};
