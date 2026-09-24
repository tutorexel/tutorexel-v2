"use client";

import React from "react";
import { SanityPost } from "@/sanity/types";
import BlogArticleCard from "./BlogArticleCard";

interface BlogFeaturedProps {
  posts: SanityPost[];
  region?: string;
}

export default function BlogFeatured({ posts = [], region = "au" }: BlogFeaturedProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  // 1. First look for posts explicitly marked featured === true
  let featuredPosts = posts.filter((p) => p.featured === true);

  // 2. If fewer than 3 posts are marked featured, backfill from known benchmark slugs or top posts
  if (featuredPosts.length < 3) {
    const preferredSlugs = [
      "why-national-assessments-matter-naplan-icas",
      "stress-to-strategy-naplan-icas-prep-saves-time",
      "parents-guide-choosing-right-online-tutor",
    ];

    const fallbackMatches: SanityPost[] = [];
    for (const slug of preferredSlugs) {
      const match = posts.find((p) => p.slug === slug);
      if (match && !featuredPosts.some((f) => f.slug === match.slug)) {
        fallbackMatches.push(match);
      }
    }

    featuredPosts = [...featuredPosts, ...fallbackMatches];

    // If still less than 3, just fill with the most recent posts
    if (featuredPosts.length < 3) {
      for (const post of posts) {
        if (!featuredPosts.some((f) => f.slug === post.slug)) {
          featuredPosts.push(post);
          if (featuredPosts.length >= 3) break;
        }
      }
    }
  }

  const [leadPost, ...sidePosts] = featuredPosts.slice(0, 3);

  if (!leadPost) {
    return null;
  }

  return (
    <section className="feat" aria-labelledby="featH">
      <div className="wrap">
        <div className="feat-head">
          <h2 id="featH">Start here</h2>
        </div>

        <div className="feat-grid">
          <BlogArticleCard
            post={leadPost}
            region={region}
            isLead={true}
            eager={true}
          />

          {sidePosts.length > 0 && (
            <div className="side">
              {sidePosts.map((post) => (
                <BlogArticleCard
                  key={post._id || post.slug}
                  post={post}
                  region={region}
                  className="mini"
                  eager={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
