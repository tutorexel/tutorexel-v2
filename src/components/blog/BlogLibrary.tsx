"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { SanityPost } from "@/sanity/types";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";
import { getCategoryDisplayName } from "@/utils/blogUtils";
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
}: BlogLibraryProps) {
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Reset pagination when search query changes
  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery]);

  // Filter posts (by search query if any) - render all posts without category filtering
  const filteredPosts = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) {
      return posts;
    }

    return posts.filter((post) => {
      const title = (post.title || "").toLowerCase();
      const excerpt = (post.excerpt || "").toLowerCase();
      const catName = getCategoryDisplayName(post.category).toLowerCase();
      return (
        title.includes(trimmed) ||
        excerpt.includes(trimmed) ||
        catName.includes(trimmed)
      );
    });
  }, [posts, searchQuery]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;

  return (
    <section className="lib" id="library" aria-labelledby="libH">
      <div className="wrap" id="gridTop">
        <div className="lib-head">
          <h2 id="libH">Browse the library</h2>
        </div>

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
                    onClick={onClearSearch}
                  >
                    Clear search
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
