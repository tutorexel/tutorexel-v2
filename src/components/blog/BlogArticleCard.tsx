"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SanityPost } from "@/sanity/types";
import { getPostImageUrl } from "@/sanity/image";
import { getRegionalHref } from "@/utils/regionalLinks";
import {
  normalizeCategoryKey,
  getCategoryDisplayName,
  getReadingTime,
  formatBlogDate,
  CategoryIcon,
} from "@/utils/blogUtils";

interface BlogArticleCardProps {
  post: SanityPost;
  region?: string;
  className?: string;
  eager?: boolean;
  isLead?: boolean;
}

export default function BlogArticleCard({
  post,
  region = "au",
  className = "",
  eager = false,
  isLead = false,
}: BlogArticleCardProps) {
  const [imageError, setImageError] = useState(false);
  const isMini = className.includes("mini");
  const catKey = normalizeCategoryKey(post.category, post.title, post.slug);
  const categoryName = getCategoryDisplayName(post.category, post.title, post.slug);
  const postUrl = getRegionalHref(`/blog/${post.slug}`, region);
  const imageUrl = getPostImageUrl(post.mainImage, post.imageUrl);
  const dateFormatted = formatBlogDate(post.publishedAt || post.date);
  const readingTime = getReadingTime(post);

  // Match title punctuation from reference image ("From Stress to Strategy: How...")
  const titleDisplay = (post.title || "").replace(" — How", ": How");

  return (
    <article
      className={`post ${isLead ? "lead" : ""} ${className}`}
      data-cat={catKey}
    >
      <div className={`thumb ${imageError ? "noimg" : "has-img"}`}>
        {!imageError && imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title || "Blog post cover"}
            fill
            sizes={isLead ? "(max-width: 1000px) 100vw, 55vw" : "(max-width: 768px) 100vw, 380px"}
            className="post-cover-img"
            priority={eager}
            onError={() => setImageError(true)}
            unoptimized={imageUrl.startsWith("http")}
          />
        ) : null}
        <span className="fb" aria-hidden="true">
          <CategoryIcon catKey={catKey} />
        </span>
      </div>

      <div className="post-body">
        <div>
          <span className="cat" data-cat={catKey}>
            {categoryName}
          </span>
        </div>

        <h3>{titleDisplay}</h3>

        <p>{post.excerpt}</p>

        {isLead ? (
          <div className="lead-foot">
            <div className="byline">
              <span className="av" aria-hidden="true">
                TE
              </span>
              <div className="byline-content">
                <b>{post.author || "TutorExel Team"}</b>
                <span className="meta">
                  <span>{dateFormatted}</span>
                  <span className="meta-dot">•</span>
                  <span>{readingTime}</span>
                </span>
              </div>
            </div>
            <span className="btn btn-hi lead-btn" aria-hidden="true">
              Read article{" "}
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
        ) : (
          <div className="byline">
            <span className="av" aria-hidden="true">
              TE
            </span>
            <div className="byline-content">
              <b>{post.author || "TutorExel Team"}</b>
              <span className="meta">
                <span>{dateFormatted}</span>
                {!isMini && <span className="meta-dot">•</span>}
                {!isMini && <span>{readingTime}</span>}
              </span>
            </div>
            <span className="go" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>

      <Link href={postUrl} className="cover">
        <span className="sr">{post.title}</span>
      </Link>
    </article>
  );
}
