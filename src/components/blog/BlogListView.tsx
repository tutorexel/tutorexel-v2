"use client";

import React, { useState, useMemo } from "react";
import { SanityPost } from "@/sanity/types";
import { getRegionConfig } from "@/data/regions";
import BlogHero from "./BlogHero";
import BlogFeatured from "./BlogFeatured";
import BlogLibrary from "./BlogLibrary";
import BlogSpotlight from "./BlogSpotlight";
import BlogPricing from "./BlogPricing";
import BlogFinalCta from "./BlogFinalCta";
import "@/app/blog/blog.css";

interface BlogListViewProps {
  posts: SanityPost[];
  region?: string;
}

export default function BlogListView({ posts = [], region = "au" }: BlogListViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const regionConfig = useMemo(() => getRegionConfig(region), [region]);

  // Identify featured post slugs so Library doesn't duplicate them on default initial view
  const featuredSlugs = useMemo(() => {
    let feat = posts.filter((p) => p.featured === true);
    if (feat.length < 3) {
      const preferred = [
        "why-national-assessments-matter-naplan-icas",
        "stress-to-strategy-naplan-icas-prep-saves-time",
        "parents-guide-choosing-right-online-tutor",
      ];
      const fallback: SanityPost[] = [];
      for (const slug of preferred) {
        const match = posts.find((p) => p.slug === slug);
        if (match && !feat.some((f) => f.slug === match.slug)) {
          fallback.push(match);
        }
      }
      feat = [...feat, ...fallback];
      if (feat.length < 3) {
        for (const p of posts) {
          if (!feat.some((f) => f.slug === p.slug)) {
            feat.push(p);
            if (feat.length >= 3) break;
          }
        }
      }
    }
    return feat.slice(0, 3).map((p) => p.slug);
  }, [posts]);

  return (
    <div className="blog-listing-page">
      {/* 1. Hero with search, autocomplete suggestions, and popular tag chips */}
      <BlogHero
        posts={posts}
        regionConfig={regionConfig}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        topicCount={5}
      />

      {/* 2. "Start here" Featured Articles Grid */}
      <BlogFeatured posts={posts} region={region} />

      {/* 3. "Browse the library" with Topic cards, sticky bar, article grid, inline CTA, and show more */}
      <BlogLibrary
        posts={posts}
        regionConfig={regionConfig}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery("")}
        featuredSlugs={featuredSlugs}
      />

      {/* 4. Region-Aware Spotlight Section (NAPLAN/ICAS for AU, SAT/ACT for US, EQAO for CA, NCEA for NZ) */}
      <BlogSpotlight posts={posts} regionConfig={regionConfig} />

      {/* 5. Region-Aware Pricing Plans Section */}
      <BlogPricing regionConfig={regionConfig} />

      {/* 6. Final Call to Action Section */}
      <BlogFinalCta regionConfig={regionConfig} />
    </div>
  );
}
