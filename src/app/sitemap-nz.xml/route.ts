import {
  SITEMAP_RESPONSE_HEADERS,
  getRegionSitemapUrls,
  renderUrlSetXml,
} from "@/data/sitemap-config";

export const revalidate = 300;

export async function GET() {
  const urls = await getRegionSitemapUrls("nz");
  const xml = renderUrlSetXml(urls);
  return new Response(xml, {
    status: 200,
    headers: SITEMAP_RESPONSE_HEADERS,
  });
}
