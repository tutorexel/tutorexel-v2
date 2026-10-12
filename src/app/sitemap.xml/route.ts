import {
  SITEMAP_BASE_URL,
  SITEMAP_RESPONSE_HEADERS,
  STATIC_LAST_MODIFIED,
  getPageSitemapUrls,
  getSubjectSitemapUrls,
  getExamPrepSitemapUrls,
  getCoCurricularSitemapUrls,
  getOnlineTutoringSitemapUrls,
  getBlogSitemapUrls,
  renderSitemapIndexXml,
  type SitemapIndexEntry,
} from "@/data/sitemap-config";

export const revalidate = 3600;

export async function GET() {
  const sitemaps: SitemapIndexEntry[] = [];

  const pageUrls = getPageSitemapUrls();
  if (pageUrls.length > 0) {
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/page-sitemap.xml`,
      lastmod: STATIC_LAST_MODIFIED,
    });
  }

  const subjectUrls = getSubjectSitemapUrls();
  if (subjectUrls.length > 0) {
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/subject-sitemap.xml`,
      lastmod: STATIC_LAST_MODIFIED,
    });
  }

  const examPrepUrls = getExamPrepSitemapUrls();
  if (examPrepUrls.length > 0) {
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/exam-prep-sitemap.xml`,
      lastmod: STATIC_LAST_MODIFIED,
    });
  }

  const coCurricularUrls = getCoCurricularSitemapUrls();
  if (coCurricularUrls.length > 0) {
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/co-curricular-sitemap.xml`,
      lastmod: STATIC_LAST_MODIFIED,
    });
  }

  const onlineTutoringUrls = getOnlineTutoringSitemapUrls();
  if (onlineTutoringUrls.length > 0) {
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/online-tutoring-sitemap.xml`,
      lastmod: STATIC_LAST_MODIFIED,
    });
  }

  const blogUrls = await getBlogSitemapUrls();
  if (blogUrls.length > 0) {
    let latestBlogDate = STATIC_LAST_MODIFIED;
    for (const b of blogUrls) {
      if (b.lastmod > latestBlogDate) {
        latestBlogDate = b.lastmod;
      }
    }
    sitemaps.push({
      loc: `${SITEMAP_BASE_URL}/blog-sitemap.xml`,
      lastmod: latestBlogDate,
    });
  }

  const xml = renderSitemapIndexXml(sitemaps);
  return new Response(xml, {
    status: 200,
    headers: SITEMAP_RESPONSE_HEADERS,
  });
}
