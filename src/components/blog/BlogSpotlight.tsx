"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SanityPost } from "@/sanity/types";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";
import { getPostImageUrl } from "@/sanity/image";
import {
  normalizeCategoryKey,
  CategoryIcon,
} from "@/utils/blogUtils";

interface BlogSpotlightProps {
  posts: SanityPost[];
  regionConfig: RegionConfig;
}

function SpotlightItem({ post, region }: { post: SanityPost; region: string }) {
  const [imageError, setImageError] = useState(false);
  const catKey = normalizeCategoryKey(post.category);
  const postUrl = getRegionalHref(`/blog/${post.slug}`, region);
  const imageUrl = getPostImageUrl(post.mainImage, post.imageUrl);

  return (
    <article className="spot-item" data-cat={catKey}>
      <div className={`thumb ${imageError ? "noimg" : "has-img"}`}>
        {!imageError && imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="120px"
            className="spot-cover-img"
            onError={() => setImageError(true)}
            unoptimized={imageUrl.startsWith("http")}
          />
        ) : null}
        <span className="fb" aria-hidden="true">
          <CategoryIcon catKey={catKey} />
        </span>
      </div>

      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>

      <Link href={postUrl} className="cover">
        <span className="sr">{post.title}</span>
      </Link>
    </article>
  );
}

export default function BlogSpotlight({ posts, regionConfig }: BlogSpotlightProps) {
  const spotData = regionConfig.spotlight;

  // Filter relevant posts for spotlight (exam prep or study skills or top posts)
  const spotlightPosts = posts.filter((p) => {
    const k = normalizeCategoryKey(p.category);
    return k === "examprep";
  });

  // If fewer than 2 exam prep posts, backfill with general / study posts
  const displayPosts =
    spotlightPosts.length >= 2
      ? spotlightPosts.slice(0, 3)
      : [
          ...spotlightPosts,
          ...posts
            .filter((p) => !spotlightPosts.some((sp) => sp.slug === p.slug))
            .slice(0, 3 - spotlightPosts.length),
        ];

  return (
    <section className="spot" aria-labelledby="spotH">
      <div className="wrap spot-grid">
        <div>
          <h2 id="spotH">{spotData.title}</h2>
          <p className="lede">{spotData.lede}</p>

          <div className="spot-actions">
            <Link
              className="btn btn-hi"
              href={getRegionalHref(spotData.assessmentBtnHref, regionConfig.code)}
            >
              {spotData.assessmentBtnText}
            </Link>
            {spotData.programBtnText && (
              <Link
                className="btn btn-ghost"
                href={getRegionalHref(spotData.programBtnHref, regionConfig.code)}
              >
                {spotData.programBtnText}
              </Link>
            )}
          </div>

          {spotData.practiceLinks && spotData.practiceLinks.length > 0 && (
            <>
              <p className="spot-sub">{spotData.subTitle}</p>
              <div className="spot-links">
                {spotData.practiceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={getRegionalHref(link.href, regionConfig.code)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <div>
          <div className="spot-list" id="spotList">
            {displayPosts.map((post) => (
              <SpotlightItem
                key={post._id || post.slug}
                post={post}
                region={regionConfig.code}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4-Step Prep Rail */}
      <div className="wrap">
        <div className="rail">
          <p className="rail-title">{spotData.railTitle}</p>
          <ol className="rail-steps">
            {spotData.railSteps.map((s) => (
              <li key={s.step}>
                <span className="rs-n">{s.step}</span>
                <b>{s.title}</b>
                <span>{s.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
