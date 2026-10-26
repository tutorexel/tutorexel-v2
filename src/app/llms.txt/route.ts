import { safeRedisGet } from "@/lib/admin-redis";
import { DEFAULT_LLMS_TXT } from "@/lib/seo-defaults";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await safeRedisGet<string>("seo:llms:current", DEFAULT_LLMS_TXT);

  return new Response(content || DEFAULT_LLMS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
