"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { SanityPost } from "@/sanity/types";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";
import {
  normalizeCategoryKey,
  getCategoryDisplayName,
  CATEGORIES_META,
  CategoryKey,
  CategoryIcon,
} from "@/utils/blogUtils";
import BlogArticleCard from "./BlogArticleCard";

interface BlogLibraryProps {
  posts: SanityPost[];
  regionConfig: RegionConfig;
  searchQuery: string;
  onClearSearch: () => void;
  featuredSlugs?: string[];
}

export default function BlogLibrary({
  posts,
  regionConfig,
  searchQuery,
  onClearSearch,
  featuredSlugs = [],
}: BlogLibraryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"new" | "old">("new");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [showStickyBar, setShowStickyBar] = useState(false);
  const topicsRef = useRef<HTMLDivElement>(null);
  const libraryRef = useRef<HTMLElement>(null);

  // IntersectionObserver to show sticky bar when topics scroll away
  useEffect(() => {
    let topicsGone = false;
    let libVisible = true;

    const checkSticky = () => {
      setShowStickyBar(topicsGone && libVisible);
    };

    const topicsEl = topicsRef.current;
    const libEl = libraryRef.current;

    if (!topicsEl || !libEl) return;

    const topicsObserver = new IntersectionObserver(
      ([entry]) => {
        topicsGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        checkSticky();
      },
      { rootMargin: "-80px 0px 0px 0px" }
    );

    const libObserver = new IntersectionObserver(
      ([entry]) => {
        libVisible = entry.isIntersecting;
        checkSticky();
      },
      { rootMargin: "-140px 0px -40% 0px" }
    );

    topicsObserver.observe(topicsEl);
    libObserver.observe(libEl);

    return () => {
      topicsObserver.disconnect();
      libObserver.disconnect();
    };
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: posts.length };
    Object.keys(CATEGORIES_META).forEach((key) => {
      counts[key] = 0;
    });

    posts.forEach((post) => {
      const key = normalizeCategoryKey(post.category);
      if (counts[key] !== undefined) {
        counts[key] += 1;
      }
    });

    return counts;
  }, [posts]);

  // Topic card definitions
  const topicDefinitions: Array<{
    key: string;
    label: string;
    desc: string;
    catAttr: string;
  }> = [
    {
      key: "all",
      label: "All topics",
      desc: "Every guide in one place",
      catAttr: "all",
    },
    ...Object.values(CATEGORIES_META).map((c) => ({
      key: c.key,
      label: c.name,
      desc: c.shortDesc,
      catAttr: c.key,
    })),
  ];

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    const list = posts.filter((post) => {
      const catKey = normalizeCategoryKey(post.category);

      // Only exclude featured posts from the library grid if there are more than 3 posts in total
      if (
        posts.length > 3 &&
        activeCategory === "all" &&
        !trimmed &&
        featuredSlugs.includes(post.slug)
      ) {
        return false;
      }

      // Category filter
      if (activeCategory !== "all" && catKey !== activeCategory) {
        return false;
      }

      // Search query filter
      if (trimmed) {
        const title = (post.title || "").toLowerCase();
        const excerpt = (post.excerpt || "").toLowerCase();
        const catName = getCategoryDisplayName(post.category).toLowerCase();
        if (
          !title.includes(trimmed) &&
          !excerpt.includes(trimmed) &&
          !catName.includes(trimmed)
        ) {
          return false;
        }
      }

      return true;
    });

    if (sortOrder === "old") {
      return [...list].reverse();
    }

    return list;
  }, [posts, activeCategory, searchQuery, sortOrder, featuredSlugs]);

  const handleCategorySelect = (key: string, scroll = false) => {
    setActiveCategory(key);
    setVisibleCount(9);
    if (scroll) {
      document.getElementById("gridTop")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const currentTopicLabel =
    activeCategory === "all"
      ? "All topics"
      : CATEGORIES_META[activeCategory as CategoryKey]?.name || "Guides";

  const statusText = searchQuery.trim()
    ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "article" : "articles"} matching "${searchQuery.trim()}"`
    : filteredPosts.length === 0
    ? activeCategory === "all"
      ? "Guides coming soon"
      : `No articles in ${currentTopicLabel} yet`
    : `Showing ${filteredPosts.length} articles${
        activeCategory === "all" && posts.length > 3 ? ", plus 3 featured above" : ` in ${currentTopicLabel}`
      }`;

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;

  return (
    <section className="lib" id="library" ref={libraryRef} aria-labelledby="libH">
      <div className="wrap">
        <div className="lib-head">
          <div>
            <h2 id="libH">Browse the library</h2>
            <p className="status" id="status" aria-live="polite">
              {statusText}
            </p>
          </div>

          <div className="sort" role="group" aria-label="Sort articles">
            <button
              type="button"
              data-s="new"
              aria-pressed={sortOrder === "new"}
              onClick={() => setSortOrder("new")}
            >
              Newest
            </button>
            <button
              type="button"
              data-s="old"
              aria-pressed={sortOrder === "old"}
              onClick={() => setSortOrder("old")}
            >
              Oldest
            </button>
          </div>
        </div>

        {/* Topic filter cards */}
        <div className="topics" id="topics" ref={topicsRef} role="toolbar" aria-label="Filter by topic">
          {topicDefinitions.map((t) => {
            const isSelected = activeCategory === t.key;
            const count = categoryCounts[t.key] || 0;
            return (
              <button
                key={t.key}
                type="button"
                className="topic"
                data-k={t.key}
                data-cat={t.catAttr}
                aria-pressed={isSelected}
                onClick={() => handleCategorySelect(t.key, false)}
              >
                <span className="topic-ic">
                  {t.key === "all" ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
                    </svg>
                  ) : (
                    <CategoryIcon catKey={t.key} />
                  )}
                </span>
                <span className="topic-txt">
                  <b>{t.label}</b>
                  <small>{t.desc}</small>
                </span>
                <span className="topic-n">{count}</span>
                <span className="topic-check" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Compact Sticky Filter Bar (slides in on scroll) */}
      <div className={`lib-bar ${showStickyBar ? "show" : ""}`} id="libBar">
        <div className="wrap lib-bar-in">
          <span className="lib-bar-title">{currentTopicLabel}</span>
          <div className="tabs" role="toolbar" aria-label="Filter by topic">
            {topicDefinitions.map((t) => {
              const isSelected = activeCategory === t.key;
              const count = categoryCounts[t.key] || 0;
              return (
                <button
                  key={t.key}
                  type="button"
                  className="tab"
                  data-cat={t.catAttr}
                  aria-pressed={isSelected}
                  onClick={() => handleCategorySelect(t.key, true)}
                >
                  {t.label} <span>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid container with anchor for smooth scrolling */}
      <div className="wrap" id="gridTop">
        {filteredPosts.length === 0 ? (
          <div className="empty">
            {searchQuery.trim() ? (
              <>
                <h3>No articles match &ldquo;{searchQuery.trim()}&rdquo;</h3>
                <p className="meta">
                  Try a broader term like &ldquo;tutor&rdquo;, &ldquo;math&rdquo; or &ldquo;prep&rdquo;, or clear the search to see all articles.
                </p>
                <p>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      onClearSearch();
                      setActiveCategory("all");
                    }}
                  >
                    Clear search
                  </button>
                </p>
              </>
            ) : activeCategory !== "all" ? (
              <>
                <h3>No articles found in {currentTopicLabel} yet</h3>
                <p className="meta">
                  We are adding new guides regularly. Explore all topics to see available articles.
                </p>
                <p>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setActiveCategory("all")}
                  >
                    View all topics
                  </button>
                </p>
              </>
            ) : (
              <>
                <h3>Guides coming soon</h3>
                <p className="meta">
                  We are publishing new curriculum-aligned guides for {regionConfig.demonym} students. In the meantime, explore our programs or take a free assessment.
                </p>
                <p>
                  <Link
                    href={getRegionalHref("/free-assessment", regionConfig.code)}
                    className="btn btn-hi"
                  >
                    Take the free assessment
                  </Link>
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="grid" id="grid">
            {displayedPosts.map((post, index) => {
              const card = (
                <BlogArticleCard
                  key={post._id || post.slug}
                  post={post}
                  region={regionConfig.code}
                />
              );

              // Inject the inline CTA after 6 items if there are more than 6 items total
              if (index === 5 && displayedPosts.length > 6) {
                return (
                  <React.Fragment key={post._id || post.slug}>
                    {card}
                    <aside className="inline-cta" key="inline-cta-box">
                      <svg
                        className="ic-deco"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <circle
                          cx="160"
                          cy="40"
                          r="70"
                          fill="rgba(255,255,255,.08)"
                        />
                        <circle
                          cx="30"
                          cy="190"
                          r="50"
                          fill="rgba(255,255,255,.07)"
                        />
                      </svg>
                      <div className="ic-copy">
                        <h3>Not sure where your child stands?</h3>
                        <p>
                          Pick their {regionConfig.yearLabel.toLowerCase()} level and book a free diagnostic assessment with a personalised report.
                        </p>
                        <div
                          className="yr-pick"
                          role="radiogroup"
                          aria-label={`Your child's ${regionConfig.yearLabel.toLowerCase()} level`}
                        >
                          {regionConfig.yearLevels.map((lvl) => {
                            const isChecked = selectedYear === lvl;
                            return (
                              <button
                                key={lvl}
                                type="button"
                                className="yr-chip"
                                role="radio"
                                aria-checked={isChecked}
                                onClick={() => setSelectedYear(lvl)}
                              >
                                {regionConfig.yearLabel} {lvl}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <Link
                        className="btn"
                        href={getRegionalHref("/free-assessment", regionConfig.code)}
                      >
                        {selectedYear
                          ? `Book a free ${regionConfig.yearLabel} ${selectedYear} assessment`
                          : "Book the free assessment"}
                      </Link>
                    </aside>
                  </React.Fragment>
                );
              }

              return card;
            })}
          </div>
        )}

        {/* Pagination "Show more articles" button */}
        {hasMore && (
          <div className="more">
            <button
              type="button"
              className="btn btn-ghost"
              id="moreBtn"
              onClick={handleShowMore}
            >
              Show more articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
