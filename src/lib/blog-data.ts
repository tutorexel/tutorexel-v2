import { SanityPost } from '@/sanity/types';
import * as sanity from '@/sanity/client';
import * as wp from '@/lib/wordpress/client';

export function isWordPressSource(): boolean {
  return (process.env.BLOG_SOURCE || '').toLowerCase().trim() === 'wordpress';
}

export function formatPostDate(dateString: string | undefined): string {
  return sanity.formatPostDate(dateString);
}

export async function getPostsByRegion(region: string): Promise<SanityPost[]> {
  if (isWordPressSource()) {
    try {
      const posts = await wp.getWpPostsByRegion(region);
      if (posts && posts.length > 0) {
        return posts;
      }
    } catch (err) {
      console.warn(`[WordPress] Failed to fetch posts for region "${region}", falling back to Sanity:`, err);
    }
  }
  return sanity.getPostsByRegion(region);
}

export async function getPostBySlugAndRegion(
  slug: string,
  region: string
): Promise<SanityPost | null> {
  if (isWordPressSource()) {
    try {
      const post = await wp.getWpPostBySlugAndRegion(slug, region);
      if (post) {
        return post;
      }
    } catch (err) {
      console.warn(`[WordPress] Failed to fetch post "${slug}" for region "${region}", falling back to Sanity:`, err);
    }
  }
  return sanity.getPostBySlugAndRegion(slug, region);
}

export async function getRelatedPosts(
  slug: string,
  region: string
): Promise<SanityPost[]> {
  if (isWordPressSource()) {
    try {
      const related = await wp.getWpRelatedPosts(slug, region);
      if (related && related.length > 0) {
        return related;
      }
    } catch (err) {
      console.warn(`[WordPress] Failed to fetch related posts for "${slug}", falling back to Sanity:`, err);
    }
  }
  return sanity.getRelatedPosts(slug, region);
}

export async function getAllSlugsByRegion(region: string): Promise<string[]> {
  if (isWordPressSource()) {
    try {
      const slugs = await wp.getWpAllSlugsByRegion(region);
      if (slugs && slugs.length > 0) {
        return slugs;
      }
    } catch (err) {
      console.warn(`[WordPress] Failed to fetch slugs for region "${region}", falling back to Sanity:`, err);
    }
  }
  return sanity.getAllSlugsByRegion(region);
}

export async function getAllSlugsForSitemap(): Promise<
  Array<{
    slug: string;
    region: string;
    publishedAt?: string;
    _updatedAt?: string;
    noindex?: boolean;
    imageUrl?: string;
  }>
> {
  if (isWordPressSource()) {
    try {
      const slugs = await wp.getWpAllSlugsForSitemap();
      if (slugs && slugs.length > 0) {
        return slugs;
      }
    } catch (err) {
      console.warn('[WordPress] Failed to fetch sitemap slugs, falling back to Sanity:', err);
    }
  }
  return sanity.getAllSlugsForSitemap();
}

