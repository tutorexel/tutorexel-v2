"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { SanityPost, ArticleSection } from "@/sanity/types";
import { getPostImageUrl } from "@/sanity/image";
import { getRegionalHref } from "@/utils/regionalLinks";
import {
  getHtmlCatKey,
  getCategoryDisplayName,
  formatBlogDate,
  getReadingTime,
  CategoryIcon,
} from "@/utils/blogUtils";
import PortableTextRenderer from "./PortableTextRenderer";
import PresetIconSvg from "./BlogBlockIcons";
import "@/app/blog/[slug]/blog-article.css";

interface BlogArticleViewProps {
  post: SanityPost;
  relatedPosts?: SanityPost[];
  region?: string;
  localFallback?: any;
}

interface TocItem {
  id: string;
  text: string;
}

function slugify(text: string | undefined): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createIntroComponents(region: string = "au"): PortableTextComponents {
  return {
    block: {
      normal: ({ children }) => <p>{children}</p>,
      pullQuote: ({ children }) => <blockquote className="pull">{children}</blockquote>,
      blockquote: ({ children }) => <blockquote className="pull">{children}</blockquote>,
    },
    marks: {
      strong: ({ children }) => <b>{children}</b>,
      em: ({ children }) => <i>{children}</i>,
      underline: ({ children }) => <u>{children}</u>,
      pullQuote: ({ children }) => <blockquote className="pull">{children}</blockquote>,
      link: ({ value, children }) => {
        const href = value?.href || "#";
        const isInternal = href.startsWith("/") || href.includes("tutorexel.com");
        const target = value?.blank ? "_blank" : undefined;
        const rel = value?.blank ? "noopener noreferrer" : undefined;
        if (isInternal && href.startsWith("/")) {
          return (
            <Link href={getRegionalHref(href, region)} target={target} rel={rel}>
              {children}
            </Link>
          );
        }
        return (
          <a href={href} target={target} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };
}

// Fallback renderer for legacy array-based post.sections
function LegacySectionLayoutRenderer({
  section,
  region = "au",
}: {
  section: ArticleSection;
  region?: string;
}) {
  switch (section.layout) {
    case "richText":
      return null;

    case "numberedCards": {
      const items = (Array.isArray(section.items) ? section.items : []) as Array<{
        title?: string;
        points?: string[];
        text?: string;
      }>;
      if (items.length === 0) return null;
      return (
        <ol className="num-cards">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.title && <b>{item.title}</b>}
              {item.points && Array.isArray(item.points) && item.points.length > 0 && (
                <ul>
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              )}
              {item.text && <p>{item.text}</p>}
            </li>
          ))}
        </ol>
      );
    }

    case "iconTiles": {
      const tiles = section.tiles;
      if (!tiles || !Array.isArray(tiles) || tiles.length === 0) return null;
      return (
        <div className="tiles">
          {tiles.map((tile, idx) => (
            <div key={idx} className="tile">
              <span className="tile-ic">
                <PresetIconSvg name={tile.icon} size={22} />
              </span>
              <b>{tile.title}</b>
              {tile.text && <p>{tile.text}</p>}
            </div>
          ))}
        </div>
      );
    }

    case "callout": {
      const variant = section.variant || "warn";
      const title = section.title;
      const text = section.text;
      const points = Array.isArray(section.points)
        ? section.points
        : typeof section.points === "string"
        ? [section.points]
        : [];
      return (
        <aside className={`callout callout--${variant}`}>
          {title && <b>{title}</b>}
          {text && <p>{text}</p>}
          {points.length > 0 && (
            <ul>
              {points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          )}
        </aside>
      );
    }

    case "timeline": {
      const steps = section.steps;
      if (!steps || !Array.isArray(steps) || steps.length === 0) return null;
      return (
        <ol className="benefits">
          {steps.map((step, idx) => (
            <li key={idx}>
              <b>{step.title}</b>
              {step.text && <span>{step.text}</span>}
            </li>
          ))}
        </ol>
      );
    }

    case "featureGrid": {
      const features = section.features;
      if (!features || !Array.isArray(features) || features.length === 0) return null;
      return (
        <div className="feats">
          {features.map((feat, idx) => (
            <div key={idx} className="feat-i">
              <span className="tile-ic">
                <PresetIconSvg name={feat.icon} size={22} />
              </span>
              <b>{feat.title}</b>
              {feat.text && <p>{feat.text}</p>}
            </div>
          ))}
        </div>
      );
    }

    case "quoteCards": {
      const quotes = section.quotes;
      if (!quotes || !Array.isArray(quotes) || quotes.length === 0) return null;
      return (
        <div className="quotes">
          {quotes.map((q, idx) => (
            <figure key={idx} className="q">
              <blockquote>{q}</blockquote>
            </figure>
          ))}
        </div>
      );
    }

    case "trioCards": {
      const cards = section.cards;
      if (!cards || !Array.isArray(cards) || cards.length === 0) return null;
      return (
        <div className="trio">
          {cards.map((c, idx) => (
            <div key={idx}>
              <b>{c.title}</b>
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      );
    }

    case "checklist": {
      const items =
        section.checklistItems ||
        (Array.isArray(section.items) ? (section.items as string[]) : []);
      if (!items || items.length === 0) return null;
      return (
        <ul className="checks">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      );
    }

    case "midCta": {
      const ctaHeading = section.ctaHeading || section.heading;
      const subtext = section.subtext;
      const buttonLabel = section.buttonLabel || "Take the free test";
      const buttonPath = section.buttonPath || "/free-assessment";
      const href = getRegionalHref(buttonPath, region);
      return (
        <aside className="mid-cta">
          <div>
            <b>{ctaHeading}</b>
            {subtext && <span>{subtext}</span>}
          </div>
          <Link className="btn btn-hi" href={href}>
            {buttonLabel}{" "}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </aside>
      );
    }

    case "endCta": {
      const ctaText =
        section.text ||
        "The best place to start is with our Free Diagnostic Test. In just one session, you’ll know exactly where your child stands and what they need to grow.";
      const buttonLabel = section.buttonLabel || "Take the Free Diagnostic Test Today";
      const buttonPath = section.buttonPath || "/free-assessment";
      const href = getRegionalHref(buttonPath, region);
      return (
        <div className="end-cta">
          <p>{ctaText}</p>
          <Link className="btn end-btn" href={href}>
            {buttonLabel}{" "}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      );
    }

    case "pullQuoteBig": {
      const quote = section.quote;
      if (!quote) return null;
      return (
        <blockquote className="pull pull--big">
          {quote}
          {section.attribution && (
            <cite className="pull-attribution">— {section.attribution}</cite>
          )}
        </blockquote>
      );
    }

    default:
      return null;
  }
}

export default function BlogArticleView({
  post,
  relatedPosts = [],
  region = "au",
  localFallback,
}: BlogArticleViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTocId, setActiveTocId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);
  const [domTocItems, setDomTocItems] = useState<TocItem[]>([]);
  const [clientReadTime, setClientReadTime] = useState<string>("");
  const proseRef = useRef<HTMLElement>(null);

  // Check if any of the new tabbed section fields are filled
  const hasNewTemplate = useMemo(() => {
    return Boolean(
      post.introHeading ||
      (post.introText && Array.isArray(post.introText) && post.introText.length > 0) ||
      post.introPullQuote ||
      post.ncHeading ||
      post.ncIntro ||
      (post.ncItems && post.ncItems.length > 0) ||
      post.tilesHeading ||
      post.tilesIntro ||
      (post.tiles && post.tiles.length > 0) ||
      post.tlHeading ||
      post.tlIntro ||
      (post.tlSteps && post.tlSteps.length > 0) ||
      post.midCtaHeading ||
      post.fgHeading ||
      post.fgIntro ||
      (post.features && post.features.length > 0) ||
      post.qHeading ||
      post.qIntro ||
      (post.quotes && post.quotes.length > 0) ||
      post.trioHeading ||
      post.trioIntro ||
      (post.trioCards && post.trioCards.length > 0) ||
      post.trioPullQuote ||
      post.clHeading ||
      post.clIntro ||
      (post.clItems && post.clItems.length > 0) ||
      post.endHeading ||
      post.endText ||
      post.endButtonLabel
    );
  }, [post]);

  const hasLegacySections = Boolean(
    !hasNewTemplate && post.sections && Array.isArray(post.sections) && post.sections.length > 0
  );

  const introComponents = useMemo(() => createIntroComponents(region), [region]);

  // Category & Metadata
  const catKey = getHtmlCatKey(post.category, post.title, post.slug);
  const categoryDisplayName = getCategoryDisplayName(post.category, post.title, post.slug);
  const publishedDate = formatBlogDate(post.publishedAt || post.date);
  const readingTime = getReadingTime(post);
  const featuredImgSrc = getPostImageUrl(post.mainImage, post.imageUrl);

  // Author details
  const authorName = post.author?.trim() || "TutorExel Team";
  const authorInitials = useMemo(() => {
    if (!post.author || post.author.toLowerCase().includes("tutorexel")) return "TE";
    const parts = post.author.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [post.author]);

  // Dek / Subtitle with excerpt fallback
  const dekText = post.dek?.trim() || post.excerpt?.trim() || "";

  // Canonical Post URL for sharing
  const canonicalPath = region === "au" ? `/blog/${post.slug}` : `/${region}/blog/${post.slug}`;
  const canonicalUrl = `https://www.tutorexel.com${canonicalPath}`;

  // Section presence flags (empty sections are completely skipped)
  const showIntroSection = Boolean(
    post.introHeading ||
    (post.introText && Array.isArray(post.introText) && post.introText.length > 0) ||
    post.introPullQuote
  );

  const showNcSection = Boolean(
    post.ncItems && Array.isArray(post.ncItems) && post.ncItems.length > 0
  );

  const showTilesSection = Boolean(
    post.tiles && Array.isArray(post.tiles) && post.tiles.length > 0
  );

  const showTimelineSection = Boolean(
    (post.tlSteps && Array.isArray(post.tlSteps) && post.tlSteps.length > 0) ||
    post.midCtaHeading
  );

  const showFgSection = Boolean(
    post.features && Array.isArray(post.features) && post.features.length > 0
  );

  const showQuotesSection = Boolean(
    post.quotes && Array.isArray(post.quotes) && post.quotes.length > 0
  );

  const showTrioSection = Boolean(
    (post.trioCards && Array.isArray(post.trioCards) && post.trioCards.length > 0) ||
    post.trioPullQuote
  );

  const showChecklistSection = Boolean(
    post.clItems && Array.isArray(post.clItems) && post.clItems.length > 0
  );

  const showEndCtaSection = Boolean(
    post.endHeading || post.endText || post.endButtonLabel || post.closingLine
  );

  // Extract H2 headings from tabbed template, sections, or body for SSR Table of Contents
  const tocItems: TocItem[] = useMemo(() => {
    if (hasNewTemplate) {
      const items: TocItem[] = [];

      // 1. Intro
      if (showIntroSection && post.introHeading?.trim()) {
        items.push({ id: slugify(post.introHeading), text: post.introHeading.trim() });
      }

      // 2. Numbered Cards
      if (showNcSection && post.ncHeading?.trim()) {
        items.push({ id: slugify(post.ncHeading), text: post.ncHeading.trim() });
      }

      // 3. Icon Tiles
      if (showTilesSection && post.tilesHeading?.trim()) {
        items.push({ id: slugify(post.tilesHeading), text: post.tilesHeading.trim() });
      }

      // 4. Timeline
      if (showTimelineSection && post.tlHeading?.trim()) {
        items.push({ id: slugify(post.tlHeading), text: post.tlHeading.trim() });
      }

      // 5. Feature Grid
      if (showFgSection && post.fgHeading?.trim()) {
        items.push({ id: slugify(post.fgHeading), text: post.fgHeading.trim() });
      }

      // 6. Quotes
      if (showQuotesSection && post.qHeading?.trim()) {
        items.push({ id: slugify(post.qHeading), text: post.qHeading.trim() });
      }

      // 7. Trio
      if (showTrioSection && post.trioHeading?.trim()) {
        items.push({ id: slugify(post.trioHeading), text: post.trioHeading.trim() });
      }

      // 8. Checklist
      if (showChecklistSection && post.clHeading?.trim()) {
        items.push({ id: slugify(post.clHeading), text: post.clHeading.trim() });
      }

      // 9. End CTA
      if (showEndCtaSection && post.endHeading?.trim()) {
        items.push({ id: slugify(post.endHeading), text: post.endHeading.trim() });
      }

      return items;
    }

    if (hasLegacySections && Array.isArray(post.sections) && post.sections.length > 0) {
      return post.sections
        .filter((sec) => Boolean(sec.heading?.trim()))
        .map((sec, idx) => {
          const text = sec.heading.trim();
          const id = slugify(text) || `s${idx + 1}`;
          return { id, text };
        });
    }

    const items: TocItem[] = [];
    if (Array.isArray(post.body)) {
      for (const block of post.body) {
        if (block._type === "block" && block.style === "h2") {
          const text = (block.children || [])
            .map((c: any) => c.text || "")
            .join("")
            .trim();
          if (text) {
            const id = slugify(text);
            items.push({ id, text });
          }
        }
      }
    }
    return items;
  }, [
    hasNewTemplate,
    hasLegacySections,
    showIntroSection,
    showNcSection,
    showTilesSection,
    showTimelineSection,
    showFgSection,
    showQuotesSection,
    showTrioSection,
    showChecklistSection,
    showEndCtaSection,
    post,
  ]);

  // Client-side DOM scan for H2s and word count calculation
  useEffect(() => {
    if (proseRef.current) {
      const h2s = Array.from(proseRef.current.querySelectorAll("h2"));
      const items = h2s
        .map((h2, idx) => {
          if (!h2.id) {
            const text = h2.textContent || "";
            h2.id = slugify(text) || `s${idx + 1}`;
          }
          return { id: h2.id, text: h2.textContent || "" };
        })
        .filter((item) => Boolean(item.text));

      if (items.length > 0) {
        setDomTocItems(items);
      }

      const text = proseRef.current.innerText?.trim() || "";
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      if (words > 0) {
        setClientReadTime(`${Math.max(1, Math.round(words / 220))} min read`);
      }
    }
  }, [hasNewTemplate, post, localFallback]);

  const activeTocList = tocItems.length > 0 ? tocItems : domTocItems;
  const displayReadingTime = post.readTime?.trim() || clientReadTime || readingTime;

  // Scrollspy & Reading Progress Bar listener (matching target HTML script)
  useEffect(() => {
    const handleScroll = () => {
      const prose = proseRef.current;
      if (!prose) return;

      const r = prose.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      if (total > 0) {
        const p = Math.min(1, Math.max(0, -r.top / total));
        setScrollProgress(p * 100);
      }

      const h2Elements = Array.from(prose.querySelectorAll("h2[id]"));
      if (h2Elements.length === 0) return;

      let cur = h2Elements[0] as HTMLElement;
      for (const h of h2Elements) {
        if (h.getBoundingClientRect().top < 150) {
          cur = h as HTMLElement;
        }
      }
      setActiveTocId(cur.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTocList]);

  // Handle Copy Link matching HTML script
  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(canonicalUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }
    } catch (err) {
      console.warn("Failed to copy link:", err);
    }
  };

  // WhatsApp and Facebook share links matching HTML design
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${post.title} ${canonicalUrl}`
  )}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    canonicalUrl
  )}`;

  // Side CTA Assessment button href
  const assessmentHref = getRegionalHref(
    selectedYear ? `/free-assessment?year=${selectedYear}` : "/free-assessment",
    region
  );

  // Related articles: same region as current post, excluding current post, up to 3 most recent
  const effectiveRelatedPosts = useMemo(() => {
    const currentRegion = (post.region || region || "au").toLowerCase();
    if (!relatedPosts || relatedPosts.length === 0) return [];
    return relatedPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          (p.region || "au").toLowerCase() === currentRegion
      )
      .slice(0, 3);
  }, [relatedPosts, post.slug, post.region, region]);

  return (
    <div className="art-page">
      {/* 1. Progress Bar (Exact matching .progress and span#prog) */}
      <div className="progress" aria-hidden="true">
        <span id="prog" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* 2. Article Hero (Exact matching .art-hero) */}
      <section className="art-hero">
        <svg
          className="bb-line bb-line--left"
          viewBox="0 0 200 260"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-20 60c40-30 70 10 60 60s-40 90 10 110 60-60 80-120 50-40 70-10"
            stroke="#FFD9B8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="bb-line bb-line--right"
          viewBox="0 0 200 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 120c40-40 120-90 150-60s-40 80-30 130 60 60 70 110"
            stroke="#FFD9B8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="wrap art-hero-in">
          {/* Breadcrumb */}
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={getRegionalHref("/", region)}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={getRegionalHref("/blog", region)}>Learning Hub</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{categoryDisplayName}</span>
          </nav>

          {/* Category Pill */}
          <span className="cat" data-c={catKey}>
            {categoryDisplayName}
          </span>

          {/* Title (H1) */}
          <h1 className="art-title">{post.title}</h1>

          {/* Dek / Subtitle */}
          {dekText && <p className="art-dek">{dekText}</p>}

          {/* Meta Row */}
          <div className="art-meta">
            <span className="av av--lg" aria-hidden="true">
              {authorInitials}
            </span>
            <span className="am-who">
              <b>{authorName}</b>
              <span>{publishedDate ? `Published ${publishedDate}` : "Published"}</span>
            </span>
            <span className="am-sep" aria-hidden="true" />
            <span className="am-stat">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span id="readTime">{displayReadingTime}</span>
            </span>
            <span className="am-share">
              <button
                type="button"
                className="share"
                data-share="copy"
                aria-label="Copy link"
                onClick={handleCopyLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                  <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                </svg>
              </button>
              <a
                className="share"
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21Z" />
                </svg>
              </a>
              <a
                className="share"
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z" />
                </svg>
              </a>
              <span
                className={`copied ${copied ? "on" : ""}`}
                id="copied"
                role="status"
              >
                {copied ? "Link copied" : ""}
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* 3. Featured Image (Wrapped in .wrap with fallback SVG) */}
      <div className="wrap">
        <figure
          className={`art-figure ${imageError || !featuredImgSrc ? "noimg" : ""}`}
          data-cat={catKey}
        >
          {featuredImgSrc && !imageError ? (
            <img
              src={featuredImgSrc}
              alt={post.title}
              onError={() => setImageError(true)}
            />
          ) : null}
          <span className="fb" aria-hidden="true">
            <CategoryIcon catKey={catKey} />
          </span>
        </figure>
      </div>

      {/* 4. Two-Column Layout (.wrap.art-layout) */}
      <div className="wrap art-layout">
        {/* Left Column: Article Body */}
        <article className="prose" id="prose" ref={proseRef}>
          {hasNewTemplate ? (
            <>
              {/* =======================================================
                  1. INTRO SECTION (TAB: Intro)
                  Skipped if empty
                  ======================================================= */}
              {showIntroSection && (
                <React.Fragment>
                  {post.introHeading && (
                    <h2 id={slugify(post.introHeading)}>{post.introHeading}</h2>
                  )}
                  {post.introText && Array.isArray(post.introText) && post.introText.length > 0 ? (
                    post.introPullQuote ? (
                      <React.Fragment>
                        <PortableText value={[post.introText[0]]} components={introComponents} />
                        <blockquote className="pull">
                          {post.introPullQuote.startsWith('“') || post.introPullQuote.startsWith('"')
                            ? post.introPullQuote
                            : `“${post.introPullQuote}”`}
                        </blockquote>
                        {post.introText.length > 1 && (
                          <PortableText value={post.introText.slice(1)} components={introComponents} />
                        )}
                      </React.Fragment>
                    ) : (
                      <PortableText value={post.introText} components={introComponents} />
                    )
                  ) : post.introText && typeof post.introText === "string" ? (
                    <React.Fragment>
                      <p>{post.introText}</p>
                      {post.introPullQuote && (
                        <blockquote className="pull">
                          {post.introPullQuote.startsWith('“') || post.introPullQuote.startsWith('"')
                            ? post.introPullQuote
                            : `“${post.introPullQuote}”`}
                        </blockquote>
                      )}
                    </React.Fragment>
                  ) : (
                    post.introPullQuote && (
                      <blockquote className="pull">
                        {post.introPullQuote.startsWith('“') || post.introPullQuote.startsWith('"')
                          ? post.introPullQuote
                          : `“${post.introPullQuote}”`}
                      </blockquote>
                    )
                  )}
                </React.Fragment>
              )}

              {/* =======================================================
                  2. NUMBERED CARDS SECTION (TAB: Numbered Cards)
                  Skipped if no ncItems
                  ======================================================= */}
              {showNcSection && (
                <React.Fragment>
                  {post.ncHeading && (
                    <h2 id={slugify(post.ncHeading)}>{post.ncHeading}</h2>
                  )}
                  {post.ncIntro && <p>{post.ncIntro}</p>}
                  <ol className="num-cards">
                    {post.ncItems!.map((item, idx) => (
                      <li key={idx}>
                        {item.title && <b>{item.title}</b>}
                        {item.points && Array.isArray(item.points) && item.points.length > 0 && (
                          <ul>
                            {item.points.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </React.Fragment>
              )}

              {/* =======================================================
                  3. ICON TILES SECTION (TAB: Icon Tiles)
                  Skipped if no tiles
                  ======================================================= */}
              {showTilesSection && (
                <React.Fragment>
                  {post.tilesHeading && (
                    <h2 id={slugify(post.tilesHeading)}>{post.tilesHeading}</h2>
                  )}
                  {post.tilesIntro && <p>{post.tilesIntro}</p>}
                  <div className="tiles">
                    {post.tiles!.map((tile, idx) => (
                      <div key={idx} className="tile">
                        <span className="tile-ic">
                          <PresetIconSvg name={tile.icon} size={22} />
                        </span>
                        <b>{tile.title}</b>
                        {tile.text && <p>{tile.text}</p>}
                      </div>
                    ))}
                  </div>
                  {(post.tilesCalloutTitle ||
                    (post.tilesCalloutPoints && post.tilesCalloutPoints.length > 0)) && (
                    <aside className="callout callout--warn">
                      {post.tilesCalloutTitle && <b>{post.tilesCalloutTitle}</b>}
                      {Array.isArray(post.tilesCalloutPoints) &&
                        post.tilesCalloutPoints.length > 0 && (
                          <ul>
                            {post.tilesCalloutPoints.map((pt, idx) => (
                              <li key={idx}>{pt}</li>
                            ))}
                          </ul>
                        )}
                    </aside>
                  )}
                </React.Fragment>
              )}

              {/* =======================================================
                  4. TIMELINE SECTION (+ midCta) (TAB: Timeline)
                  Skipped if no tlSteps and no midCta
                  ======================================================= */}
              {showTimelineSection && (
                <React.Fragment>
                  {post.tlHeading && (
                    <h2 id={slugify(post.tlHeading)}>{post.tlHeading}</h2>
                  )}
                  {post.tlIntro && <p>{post.tlIntro}</p>}
                  {post.tlSteps && Array.isArray(post.tlSteps) && post.tlSteps.length > 0 && (
                    <ol className="benefits">
                      {post.tlSteps.map((step, idx) => (
                        <li key={idx}>
                          <b>{step.title}</b>
                          {step.text && <span>{step.text}</span>}
                        </li>
                      ))}
                    </ol>
                  )}
                  {post.midCtaHeading && (
                    <aside className="mid-cta">
                      <div>
                        <b>{post.midCtaHeading}</b>
                        {post.midCtaSubtext && <span>{post.midCtaSubtext}</span>}
                      </div>
                      <Link
                        className="btn btn-hi"
                        href={getRegionalHref(post.midCtaButtonPath || "/free-assessment", region)}
                      >
                        <span>{post.midCtaButtonLabel || "Take the free test"}</span>{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </aside>
                  )}
                </React.Fragment>
              )}

              {/* =======================================================
                  5. FEATURE GRID SECTION (TAB: Feature Grid)
                  Skipped if no features
                  ======================================================= */}
              {showFgSection && (
                <React.Fragment>
                  {post.fgHeading && (
                    <h2 id={slugify(post.fgHeading)}>{post.fgHeading}</h2>
                  )}
                  {post.fgIntro && <p>{post.fgIntro}</p>}
                  <div className="feats">
                    {post.features!.map((feat, idx) => (
                      <div key={idx} className="feat-i">
                        <span className="tile-ic">
                          <PresetIconSvg name={feat.icon} size={22} />
                        </span>
                        <b>{feat.title}</b>
                        {feat.text && <p>{feat.text}</p>}
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}

              {/* =======================================================
                  6. QUOTES SECTION (TAB: Quotes)
                  Skipped if no quotes
                  ======================================================= */}
              {showQuotesSection && (
                <React.Fragment>
                  {post.qHeading && (
                    <h2 id={slugify(post.qHeading)}>{post.qHeading}</h2>
                  )}
                  {post.qIntro && <p>{post.qIntro}</p>}
                  <div className="quotes">
                    {post.quotes!.map((quote, idx) => (
                      <figure key={idx} className="q">
                        <blockquote>{quote}</blockquote>
                      </figure>
                    ))}
                  </div>
                  {post.qClosing && <p>{post.qClosing}</p>}
                </React.Fragment>
              )}

              {/* =======================================================
                  7. TRIO SECTION (TAB: Trio)
                  Skipped if no trioCards and no trioPullQuote
                  ======================================================= */}
              {showTrioSection && (
                <React.Fragment>
                  {post.trioHeading && (
                    <h2 id={slugify(post.trioHeading)}>{post.trioHeading}</h2>
                  )}
                  {post.trioIntro && <p>{post.trioIntro}</p>}
                  {post.trioCards && Array.isArray(post.trioCards) && post.trioCards.length > 0 && (
                    <div className="trio">
                      {post.trioCards.map((card, idx) => (
                        <div key={idx}>
                          <b>{card.title}</b>
                          {card.text && <span>{card.text}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                  {post.trioPullQuote && (
                    <blockquote className="pull pull--big">{post.trioPullQuote}</blockquote>
                  )}
                </React.Fragment>
              )}

              {/* =======================================================
                  8. CHECKLIST SECTION (TAB: Checklist)
                  Skipped if no clItems
                  ======================================================= */}
              {showChecklistSection && (
                <React.Fragment>
                  {post.clHeading && (
                    <h2 id={slugify(post.clHeading)}>{post.clHeading}</h2>
                  )}
                  {post.clIntro && <p>{post.clIntro}</p>}
                  <ul className="checks">
                    {post.clItems!.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </React.Fragment>
              )}

              {/* =======================================================
                  9. END CTA SECTION (TAB: End CTA)
                  Skipped if empty
                  ======================================================= */}
              {showEndCtaSection && (
                <React.Fragment>
                  {post.endHeading && (
                    <h2 id={slugify(post.endHeading)}>{post.endHeading}</h2>
                  )}
                  {(post.endText || post.endButtonLabel) && (
                    <div className="end-cta">
                      {post.endText && <p>{post.endText}</p>}
                      <Link
                        className="btn end-btn"
                        href={getRegionalHref(post.endButtonPath || "/free-assessment", region)}
                      >
                        <span>{post.endButtonLabel || "Take the Free Diagnostic Test Today"}</span>{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </div>
                  )}
                  {post.closingLine && <p className="closing">{post.closingLine}</p>}
                </React.Fragment>
              )}
            </>
          ) : hasLegacySections ? (
            /* Legacy generic sections array fallback */
            post.sections!.map((sec, idx) => {
              const sectionId = slugify(sec.heading) || `s${idx + 1}`;
              return (
                <React.Fragment key={sec._key || idx}>
                  {sec.heading && <h2 id={sectionId}>{sec.heading}</h2>}
                  {sec.intro && Array.isArray(sec.intro) && sec.intro.length > 0 && (
                    <PortableText value={sec.intro} components={introComponents} />
                  )}
                  {sec.intro && typeof sec.intro === "string" && (
                    <p>{sec.intro}</p>
                  )}
                  <LegacySectionLayoutRenderer section={sec} region={region} />
                </React.Fragment>
              );
            })
          ) : (
            /* Legacy single body fallback for all 22 existing posts */
            <PortableTextRenderer
              value={post.body}
              fallbackContent={localFallback?.content}
              region={region}
            />
          )}

          {/* Author Box at Bottom of Article */}
          <div className="author-box">
            <span className="av av--xl" aria-hidden="true">
              {authorInitials}
            </span>
            <div>
              <b>
                Written by {authorName.toLowerCase().includes("tutorexel") ? "the TutorExel Team" : authorName}
              </b>
              <p>
                Live online tutoring in Maths, English and Science for Years 2 to 7, plus
                piano and guitar lessons.
              </p>
              <Link href={getRegionalHref("/about", region)}>
                About TutorExel{" "}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        {/* Right Column: Sticky Side Rail */}
        <aside className="side-rail">
          {/* Auto-generated Table of Contents */}
          {activeTocList.length > 0 && (
            <div className="toc" id="toc">
              <p className="toc-title">On this page</p>
              <ol id="tocList">
                {activeTocList.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeTocId === item.id ? "on" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                          setActiveTocId(item.id);
                          if (typeof window !== "undefined" && window.history) {
                            window.history.pushState(null, "", `#${item.id}`);
                          }
                        }
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Free Diagnostic Test Side Card */}
          <div className="side-cta">
            <b>Free diagnostic test</b>
            <p>Pick your child’s year level to get started.</p>
            <div
              className="yr-pick yr-pick--light"
              role="radiogroup"
              aria-label="Your child's year level"
            >
              {[2, 3, 4, 5, 6, 7].map((y) => (
                <button
                  key={y}
                  type="button"
                  className="yr-chip"
                  role="radio"
                  aria-checked={selectedYear === y}
                  data-y={y}
                  onClick={() => setSelectedYear(selectedYear === y ? null : y)}
                >
                  Year {y}
                </button>
              ))}
            </div>
            <Link className="btn btn-hi side-btn" id="sideBtn" href={assessmentHref}>
              {selectedYear
                ? `Book a free Year ${selectedYear} assessment`
                : "Book the free assessment"}
            </Link>
            <a
              className="side-wa"
              href="https://wa.me/61470330548"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21Z" />
              </svg>{" "}
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </div>

      {/* 5. Keep Reading Related Articles Section */}
      {effectiveRelatedPosts.length > 0 && (
        <section className="more-reads" aria-labelledby="moreH">
        <div className="wrap">
          <div className="mr-head">
            <h2 id="moreH">Keep reading</h2>
            <Link href={getRegionalHref("/blog", region)}>
              All articles{" "}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="grid">
            {effectiveRelatedPosts.map((related) => {
              const relCatKey = getHtmlCatKey(related.category, related.title, related.slug);
              const relCatName = getCategoryDisplayName(
                related.category,
                related.title,
                related.slug
              );
              const relImg = getPostImageUrl(related.mainImage, related.imageUrl);
              const relDate = formatBlogDate(related.publishedAt || related.date);
              const relUrl = getRegionalHref(`/blog/${related.slug}`, region);

              return (
                <article key={related._id || related.slug} className="post" data-cat={relCatKey}>
                  <div className="thumb">
                    {relImg ? (
                      <img
                        src={relImg}
                        alt={related.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fb = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fb) fb.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <span
                      className="fb"
                      aria-hidden="true"
                      style={{ display: relImg ? "none" : "flex" }}
                    >
                      <CategoryIcon catKey={relCatKey} />
                    </span>
                  </div>

                  <div className="post-body">
                    <span>
                      <span className="cat">{relCatName}</span>
                    </span>
                    <h3>{related.title}</h3>
                    <p>{related.dek || related.excerpt}</p>
                    <div className="byline">
                      <span className="av" aria-hidden="true">
                        {authorInitials}
                      </span>
                      <span>
                        <b>{authorName}</b>
                        <span className="meta">{relDate}</span>
                      </span>
                      <span className="go" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <Link className="cover" href={relUrl}>
                    <span className="sr">{related.title}</span>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Explore Our Subjects */}
          <div className="subj">
            <b>Explore Our Subjects</b>
            <div className="subj-links">
              <Link href={getRegionalHref("/subjects/year-3/maths", region)}>
                Year 3 Maths
              </Link>
              <Link href={getRegionalHref("/subjects/year-5/maths", region)}>
                Year 5 Maths
              </Link>
              <Link href={getRegionalHref("/subjects/year-5/english", region)}>
                Year 5 English
              </Link>
              <Link href={getRegionalHref("/subjects/year-7/english", region)}>
                Year 7 English
              </Link>
              <Link href={getRegionalHref("/naplan-preparation", region)}>
                NAPLAN Prep
              </Link>
              <Link href={getRegionalHref("/pricing", region)}>
                Pricing
              </Link>
              <Link href={getRegionalHref("/free-trial", region)} className="hot">
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 6. Final CTA Section (Exact matching .final and .final-card) */}
      <section className="final">
        <div className="wrap">
          <div className="final-card">
            <div className="final-img">
              <div className="final-art" aria-hidden="true">
                <svg className="fa-spark" viewBox="0 0 24 24">
                  <path
                    d="M12 0l2.2 8.3L22 5.6l-5.3 6.4L24 16l-8.6-.6L12 24l-3.4-8.6L0 16l7.3-4L2 5.6l7.8 2.7Z"
                    fill="#F7A23B"
                  />
                </svg>
                <div className="fa-stat fa-stat--1">
                  <b>100%</b>
                  <span>Curriculum aligned</span>
                </div>
                <div className="fa-stat fa-stat--2">
                  <b>15+ years</b>
                  <span>Qualified teachers</span>
                </div>
                <div className="fa-stat fa-stat--3">
                  <b>1:1 or small group</b>
                  <span>Live online classes</span>
                </div>
              </div>
              <img
                src="/images/cta/lady_image.webp"
                alt="Happy student learning online"
                onError={(e) => e.currentTarget.remove()}
              />
            </div>

            <div className="final-txt">
              <h2>Ready to See Your Child Excel?</h2>
              <p>
                Join hundreds of Worldwide families who trust TutorExel for their children&apos;s
                education. Book your FREE trial class today, no credit card required.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href={getRegionalHref("/enroll", region)}>
                  Book Online Now
                </Link>
                <a
                  className="btn btn-wa"
                  href="https://wa.me/61470330548"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" />
                  </svg>
                  +61 470-330-548
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
