import { SITE_URL } from "./config";
import type { SubmitItem } from "./submit";

// Reads /sitemap.xml (index or single) and returns every <loc> with its <lastmod>.
export async function readSitemap(path = "/sitemap.xml"): Promise<SubmitItem[]> {
  const xml = await fetch(`${SITE_URL}${path}`, { cache: "no-store" }).then((r) => r.text());

  if (xml.includes("<sitemapindex")) {
    const children = [...xml.matchAll(/<sitemap>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/sitemap>/g)].map((m) => m[1].trim());
    const lists = await Promise.all(children.map((c) => readSitemap(new URL(c).pathname)));
    return lists.flat();
  }

  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const block = m[1];
    const loc = /<loc>(.*?)<\/loc>/.exec(block)?.[1]?.trim() ?? "";
    const lastmod = /<lastmod>(.*?)<\/lastmod>/.exec(block)?.[1]?.trim();
    return { url: loc, lastmod };
  }).filter((i) => i.url);
}
