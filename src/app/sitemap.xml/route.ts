import {
  SITEMAP_BASE_URL,
  SITEMAP_RESPONSE_HEADERS,
  getRegionSitemapUrls,
  getMaxLastmod,
  renderSitemapIndexXml,
  type SitemapIndexEntry,
} from "@/data/sitemap-config";

export const revalidate = 3600;

export async function GET() {
  const regions: Array<{ code: "au" | "us" | "ca" | "nz"; path: string }> = [
    { code: "au", path: "/sitemap-au.xml" },
    { code: "us", path: "/sitemap-us.xml" },
    { code: "ca", path: "/sitemap-ca.xml" },
    { code: "nz", path: "/sitemap-nz.xml" },
  ];

  const sitemaps: SitemapIndexEntry[] = [];

  for (const reg of regions) {
    const urls = await getRegionSitemapUrls(reg.code);
    if (urls.length > 0) {
      const lastmod = getMaxLastmod(urls);
      sitemaps.push({
        loc: `${SITEMAP_BASE_URL}${reg.path}`,
        lastmod,
      });
    }
  }

  const xml = renderSitemapIndexXml(sitemaps);
  return new Response(xml, {
    status: 200,
    headers: SITEMAP_RESPONSE_HEADERS,
  });
}
