import React from "react";
import { SanityPost } from "@/sanity/types";

export type CategoryKey = "general" | "math" | "english" | "examprep" | "health";

export interface CategoryMeta {
  key: CategoryKey;
  name: string;
  shortDesc: string;
  colorVar: string;
  bgVar: string;
}

export const CATEGORIES_META: Record<CategoryKey, CategoryMeta> = {
  general: {
    key: "general",
    name: "General",
    shortDesc: "How our classes, reports & tutoring portal work",
    colorVar: "var(--c-general)",
    bgVar: "var(--c-general-bg)",
  },
  math: {
    key: "math",
    name: "Mathematics",
    shortDesc: "Problem solving, numeracy & foundation skills",
    colorVar: "var(--c-math)",
    bgVar: "var(--c-math-bg)",
  },
  english: {
    key: "english",
    name: "English",
    shortDesc: "Reading comprehension, writing & vocabulary",
    colorVar: "var(--c-english)",
    bgVar: "var(--c-english-bg)",
  },
  examprep: {
    key: "examprep",
    name: "Exam Prep",
    shortDesc: "Test formats, timing strategies & calm prep",
    colorVar: "var(--c-examprep)",
    bgVar: "var(--c-examprep-bg)",
  },
  health: {
    key: "health",
    name: "Health",
    shortDesc: "Screen balance, focus habits & student wellbeing",
    colorVar: "var(--c-health)",
    bgVar: "var(--c-health-bg)",
  },
};

/**
 * Normalizes any category string from Sanity or mock data into a CategoryKey.
 */
export function normalizeCategoryKey(
  rawCategory: string = "",
  title: string = "",
  slug: string = ""
): CategoryKey {
  const combined = `${rawCategory} ${title} ${slug}`.toLowerCase().trim();
  if (combined.includes("naplan") || combined.includes("icas") || combined.includes("exam")) return "examprep";
  if (combined.includes("parent")) return "english";
  if (combined.includes("math") || combined.includes("study")) return "math";
  if (combined.includes("health") || combined.includes("wellbeing") || combined.includes("screen")) return "health";
  if (combined.includes("eng")) return "english";
  return "general";
}

/**
 * Returns the proper display name for a category matching the visual designs.
 */
export function getCategoryDisplayName(
  rawCategory: string = "",
  title: string = "",
  slug: string = ""
): string {
  const combined = `${rawCategory} ${title} ${slug}`.toLowerCase();
  if (combined.includes("naplan") || combined.includes("icas")) return "NAPLAN & ICAS";
  if (combined.includes("parent")) return "Parent Guides";
  if (combined.includes("math")) return "Mathematics";
  if (combined.includes("english")) return "English";
  if (combined.includes("health") || combined.includes("wellbeing")) return "Health";
  const key = normalizeCategoryKey(rawCategory, title, slug);
  return CATEGORIES_META[key]?.name || rawCategory || "General";
}

/**
 * Returns the 4 category keys used in the HTML design: parents, naplan, study, inside
 */
export function getHtmlCatKey(
  rawCategory: string = "",
  title: string = "",
  slug: string = ""
): "parents" | "naplan" | "study" | "inside" {
  const combined = `${rawCategory} ${title} ${slug}`.toLowerCase().trim();
  if (combined.includes("naplan") || combined.includes("icas") || combined.includes("exam") || combined.includes("test")) {
    return "naplan";
  }
  if (combined.includes("parent")) {
    return "parents";
  }
  if (combined.includes("study") || combined.includes("math") || combined.includes("learn") || combined.includes("skill")) {
    return "study";
  }
  return "inside";
}

/**
 * Calculates reading time in minutes from post body and excerpt word counts.
 * Average reading speed: 220 words per minute (matching HTML design formula).
 */
export function getReadingTime(post: SanityPost): string {
  if (post.readTime?.trim()) {
    return post.readTime.trim();
  }

  let wordCount = 0;

  if (post.excerpt) {
    wordCount += post.excerpt.trim().split(/\s+/).length;
  }

  if (Array.isArray(post.body)) {
    for (const block of post.body) {
      if (block._type === "block" && Array.isArray(block.children)) {
        for (const child of block.children) {
          if (child.text) {
            wordCount += child.text.trim().split(/\s+/).length;
          }
        }
      }
    }
  }

  // Base fallback if body is not populated in listing query
  if (wordCount < 50) {
    wordCount = 750; // typical 3-4 min article length
  }

  const minutes = Math.max(1, Math.round(wordCount / 220));
  return `${minutes} min read`;
}

/**
 * Formats a date string into readable format (e.g. "5 March 2025" or "15 January 2025").
 */
export function formatBlogDate(dateStr?: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr.includes("T") ? dateStr : `${dateStr}T00:00:00`);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * SVG icons for each category matching the target design
 */
export function CategoryIcon({ catKey, className = "" }: { catKey: string; className?: string }) {
  const key = (catKey || "").toLowerCase();

  if (key === "parents" || key === "english") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M13.5 20c.3-2.8 2.1-4.5 4.5-4.5 2.2 0 4 1.8 4 4.5" />
      </svg>
    );
  }

  if (key === "naplan" || key === "examprep") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9" />
      </svg>
    );
  }

  if (key === "study" || key === "math") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z" />
    </svg>
  );
}
