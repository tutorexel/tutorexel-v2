"use client";

import React, { useState, useMemo } from "react";
import { SanityPost } from "@/sanity/types";
import { getRegionConfig } from "@/data/regions";
import BlogHero from "./BlogHero";
import BlogFeatured from "./BlogFeatured";
import BlogLibrary from "./BlogLibrary";
import BlogFinalCta from "./BlogFinalCta";
import "@/app/blog/blog.css";

interface BlogListViewProps {
  posts: SanityPost[];
  region?: string;
}

export default function BlogListView({ posts = [], region = "us" }: BlogListViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const regionConfig = useMemo(() => getRegionConfig(region), [region]);

  return (
    <div className="blog-listing-page">
      {/* 1. Hero with search and autocomplete suggestions */}
      <BlogHero
        posts={posts}
        regionConfig={regionConfig}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. "Start here" Featured Articles Grid */}
      <BlogFeatured posts={posts} region={region} />

      {/* 3. "Browse the library" article grid, inline CTA, and show more */}
      <BlogLibrary
        posts={posts}
        regionConfig={regionConfig}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery("")}
      />

      {/* 4. Final Call to Action Section */}
      <BlogFinalCta regionConfig={regionConfig} />
    </div>
  );
}
