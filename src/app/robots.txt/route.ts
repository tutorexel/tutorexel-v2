import { safeRedisGet } from "@/lib/admin-redis";
import { DEFAULT_ROBOTS_TXT } from "@/lib/seo-defaults";

export const dynamic = "force-dynamic";

function sanitizeRobotsTxt(text: string): string {
  const lines = text.split(/\r?\n/);
  const filtered = lines.filter((l) => !/^Disallow:\s*\/_next\/?\s*$/i.test(l.trim()));
  const output: string[] = [];

  for (let i = 0; i < filtered.length; i++) {
    const line = filtered[i];
    output.push(line);

    if (/^Allow:\s*\/\s*$/i.test(line.trim())) {
      const nextLine = filtered[i + 1]?.trim();
      if (nextLine !== "Allow: /_next/static/") {
        output.push("Allow: /_next/static/");
      }
    }
  }

  return output.join("\n");
}

export async function GET() {
  const raw = await safeRedisGet<string>("seo:robots:current", DEFAULT_ROBOTS_TXT);
  const content = sanitizeRobotsTxt(raw || DEFAULT_ROBOTS_TXT);

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
