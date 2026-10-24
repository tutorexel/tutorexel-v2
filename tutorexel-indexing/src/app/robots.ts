import type { MetadataRoute } from "next";

// Replaces the current robots.ts.
// - /_next/ is NOT blocked (Google needs CSS, JS and images to render pages).
// - noindex pages (enroll, thank-you, careers/apply) are NOT blocked, so crawlers can see the noindex.
// - Search and AI crawlers are listed explicitly so the intent is visible.

const SITE = "https://www.tutorexel.com";
const PRIVATE = ["/api/", "/admin", "/admin/"];

const SEARCH_AND_AI_BOTS = [
  "Googlebot",
  "Google-Extended", // Gemini training/grounding, not Search ranking
  "Bingbot", // Bing + Copilot, also a ChatGPT source
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT fetching a page for a user
  "GPTBot", // OpenAI training
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "DuckAssistBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: SEARCH_AND_AI_BOTS, allow: "/", disallow: PRIVATE },
      { userAgent: "*", allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
