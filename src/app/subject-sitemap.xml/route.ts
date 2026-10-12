import {
  SITEMAP_RESPONSE_HEADERS,
  getSubjectSitemapUrls,
  renderUrlSetXml,
} from "@/data/sitemap-config";

export const revalidate = 3600;

export async function GET() {
  const urls = getSubjectSitemapUrls();
  const xml = renderUrlSetXml(urls);
  return new Response(xml, {
    status: 200,
    headers: SITEMAP_RESPONSE_HEADERS,
  });
}
