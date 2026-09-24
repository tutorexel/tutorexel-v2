"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SanityPost } from "@/sanity/types";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";
import {
  normalizeCategoryKey,
  getCategoryDisplayName,
  CategoryIcon,
} from "@/utils/blogUtils";

interface BlogHeroProps {
  posts: SanityPost[];
  regionConfig: RegionConfig;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  topicCount: number;
}

export default function BlogHero({
  posts,
  regionConfig,
  searchQuery,
  onSearchChange,
  topicCount,
}: BlogHeroProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Suggestions filtered by title or excerpt
  const trimmed = searchQuery.trim().toLowerCase();
  const suggestions = trimmed
    ? posts
        .filter((p) => {
          const t = (p.title || "").toLowerCase();
          const e = (p.excerpt || "").toLowerCase();
          const c = (p.category || "").toLowerCase();
          return t.includes(trimmed) || e.includes(trimmed) || c.includes(trimmed);
        })
        .slice(0, 5)
    : [];

  const totalMatches = trimmed
    ? posts.filter((p) => {
        const t = (p.title || "").toLowerCase();
        const e = (p.excerpt || "").toLowerCase();
        const c = (p.category || "").toLowerCase();
        return t.includes(trimmed) || e.includes(trimmed) || c.includes(trimmed);
      }).length
    : 0;

  // Keyboard shortcut '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement !== inputRef.current &&
        !["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Enter") {
        setShowSuggestions(false);
        document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        e.preventDefault();
        const target = suggestions[selectedIndex];
        const url = getRegionalHref(`/blog/${target.slug}`, regionConfig.code);
        window.location.href = url;
      } else {
        setShowSuggestions(false);
        document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handlePopularClick = (tag: string) => {
    onSearchChange(tag);
    setShowSuggestions(false);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClear = () => {
    onSearchChange("");
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const scrollToLibrary = () => {
    setShowSuggestions(false);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="blog-banner" aria-label="Blog introduction">
      {/* Decorative SVG elements from mockup */}
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
      <svg
        className="bb-spark bb-spark--l"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"
          fill="#FFD2B8"
        />
      </svg>
      <svg
        className="bb-spark bb-spark--r"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"
          fill="#FFD2B8"
        />
      </svg>
      <svg
        className="bb-arrows"
        viewBox="0 0 120 70"
        aria-hidden="true"
      >
        <g fill="#FAD0D0">
          <path d="M10 10l14 4-10 10z" />
          <path d="M42 4l14 4-10 10z" />
          <path d="M78 2l14 4-10 10z" />
          <path d="M30 38l14 4-10 10z" />
        </g>
      </svg>

      <div className="wrap blog-banner__content">
        <h1 className="blog-banner__title">
          {regionConfig.hero.title}{" "}
          <span className="blog-banner__title-highlight">
            {regionConfig.hero.titleHighlight}
          </span>
          <svg
            className="blog-banner__title-star"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 0l2.2 8.3L22 5.6l-5.3 6.4L24 16l-8.6-.6L12 24l-3.4-8.6L0 16l7.3-4L2 5.6l7.8 2.7Z"
              fill="#F7A23B"
            />
          </svg>
        </h1>

        <p className="blog-banner__subtitle">{regionConfig.hero.subtitle}</p>

        {/* Search input with keyboard shortcut & suggestions dropdown */}
        <div className="search-wrap" ref={wrapRef}>
          <label className="search" htmlFor="q">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="m20 20-4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="sr">Search articles</span>
            <input
              ref={inputRef}
              id="q"
              type="search"
              placeholder={regionConfig.hero.searchPlaceholder}
              autoComplete="off"
              role="combobox"
              aria-expanded={showSuggestions}
              aria-controls="sugg"
              aria-autocomplete="list"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSuggestions(true);
                setSelectedIndex(-1);
              }}
              onFocus={() => {
                if (searchQuery.trim()) setShowSuggestions(true);
              }}
              onKeyDown={handleInputKeyDown}
            />

            {searchQuery ? (
              <button
                type="button"
                className="search-clear-btn"
                aria-label="Clear search query"
                onClick={handleClear}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <kbd className="kbd" aria-hidden="true">
                /
              </kbd>
            )}
          </label>

          {/* Autocomplete Suggestions */}
          {showSuggestions && trimmed && (
            <div className="sugg" id="sugg" role="listbox">
              {suggestions.length > 0 ? (
                <>
                  {suggestions.map((post, i) => {
                    const catKey = normalizeCategoryKey(post.category);
                    const postUrl = getRegionalHref(`/blog/${post.slug}`, regionConfig.code);
                    const isSelected = i === selectedIndex;
                    return (
                      <Link
                        key={post._id || post.slug}
                        className={`sg ${isSelected ? "on" : ""}`}
                        role="option"
                        id={`sg${i}`}
                        aria-selected={isSelected}
                        href={postUrl}
                        data-cat={catKey}
                        onClick={() => setShowSuggestions(false)}
                      >
                        <span className="sg-ic">
                          <CategoryIcon catKey={catKey} />
                        </span>
                        <span className="sg-t">
                          <b>{post.title}</b>
                          <small>{getCategoryDisplayName(post.category)}</small>
                        </span>
                      </Link>
                    );
                  })}
                  <button
                    className="sg-all"
                    type="button"
                    onClick={scrollToLibrary}
                  >
                    See all {totalMatches} results in the library
                  </button>
                </>
              ) : (
                <p className="sg-empty">
                  No guides match &ldquo;{searchQuery}&rdquo;. Try words like &ldquo;tutor&rdquo;, &ldquo;practice&rdquo;, or &ldquo;exam&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Popular chips */}
        <div className="popular">
          <span>Popular:</span>
          {regionConfig.hero.popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handlePopularClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Hero stats */}
        <ul className="hero-stats">
          <li>
            <span className="hs-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm2 14h13" />
              </svg>
            </span>
            <span>
              <b>{posts.length || 22}</b> free guides
            </span>
          </li>
          <li>
            <span className="hs-ic">
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
            </span>
            <span>
              <b>{topicCount || 5}</b> topics
            </span>
          </li>
          <li>
            <span className="hs-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
              </svg>
            </span>
            <span>
              For <b>{regionConfig.yearLabel}s 2 to 7</b>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
