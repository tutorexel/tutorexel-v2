"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import CTA from "@/components/home/CTA";
import "./blog.css";

// Get unique categories from blogs
const blogCategories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category)))];

function CalendarIcon() {
  return (
    <svg
      className="blog-card__date-icon"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.792 4.167H5.208A2.083 2.083 0 003.125 6.25v14.583a2.083 2.083 0 002.083 2.084h14.584a2.083 2.083 0 002.083-2.084V6.25a2.083 2.083 0 00-2.083-2.083zM16.667 2.083V6.25M8.333 2.083V6.25M3.125 10.417h18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogs
      : blogs.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Banner Section (Contact page style) */}
      <section className="blog-banner">
        <div className="blog-banner__decoration blog-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--1"
          />
        </div>
        <div className="blog-banner__decoration blog-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="blog-banner__content">
            <h1 className="blog-banner__title">
              TutorExel{" "}
              <span className="blog-banner__title-highlight">Learning Hub</span>
              <span className="blog-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="blog-banner__subtitle">
              Tips, guides, and insights for Australian parents and students.
              From NAPLAN preparation to everyday study strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-filter">
        <div className="container">
          <div className="blog-filter__tabs">
            {blogCategories.map((category) => (
              <button
                key={category}
                className={`blog-filter__tab ${
                  activeCategory === category ? "blog-filter__tab--active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="blog-filter__line"></div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        <div className="container">
          <div className="blog-grid__list">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
              >
                <div className="blog-card__image-wrapper">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="blog-card__image"
                  />
                  <div className="blog-card__image-overlay"></div>
                  <span className="blog-card__badge">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <h3 className="blog-card__title">
                    <Link href={`/blog/${post.slug}`} className="blog-card__title-link">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__date">
                    <CalendarIcon />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card__btn"
                    aria-label={`Read more: ${post.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <p className="blog-grid__empty">
                No posts found in this category yet. Check back soon!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Same as Home Page */}
      <CTA />
    </>
  );
}
