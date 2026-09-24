import { createClient } from 'next-sanity';
import {
  POSTS_BY_REGION_QUERY,
  POST_BY_SLUG_AND_REGION_QUERY,
  RELATED_POSTS_QUERY,
  ALL_SLUGS_BY_REGION_QUERY,
  ALL_SLUGS_FOR_SITEMAP_QUERY,
} from './queries';
import { SanityPost } from './types';
import { blogs as localBlogs } from '@/data/blogs';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9asz4y68';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export function formatPostDate(dateString: string | undefined): string {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  } catch {
    return dateString;
  }
}

// Map local blogs to SanityPost format as fallback prior to migration execution
function getLocalFallbackPosts(): SanityPost[] {
  return localBlogs.map((b) => ({
    _id: `local-${b.id}`,
    title: b.title,
    slug: b.slug,
    publishedAt: new Date(b.date).toISOString(),
    date: b.date,
    category: b.category,
    region: 'au',
    excerpt: b.excerpt,
    imageUrl: b.image,
    body: undefined, // fallback renders content if needed
    featured: [4, 8, 18].includes(b.id),
  }));
}

export async function getPostsByRegion(region: string): Promise<SanityPost[]> {
  try {
    const posts: SanityPost[] = await client.fetch(
      POSTS_BY_REGION_QUERY,
      { region },
      { next: { revalidate: 60 } }
    );

    if (posts && posts.length > 0) {
      return posts.map((post) => ({
        ...post,
        date: formatPostDate(post.publishedAt),
      }));
    }
  } catch (err) {
    console.warn(`[Sanity] Failed to fetch posts for region "${region}":`, err);
  }

  // Graceful fallback for AU if migration has not been run yet
  if (region === 'au') {
    return getLocalFallbackPosts();
  }

  return [];
}

export async function getPostBySlugAndRegion(
  slug: string,
  region: string
): Promise<SanityPost | null> {
  try {
    const post: SanityPost | null = await client.fetch(
      POST_BY_SLUG_AND_REGION_QUERY,
      { slug, region },
      { next: { revalidate: 60 } }
    );

    if (post) {
      return {
        ...post,
        date: formatPostDate(post.publishedAt),
      };
    }
  } catch (err) {
    console.warn(`[Sanity] Failed to fetch post "${slug}" for region "${region}":`, err);
  }

  // Graceful fallback for AU if migration has not been run yet
  if (region === 'au') {
    const local = localBlogs.find((b) => b.slug === slug);
    if (local) {
      return {
        _id: `local-${local.id}`,
        title: local.title,
        slug: local.slug,
        publishedAt: new Date(local.date).toISOString(),
        date: local.date,
        category: local.category,
        region: 'au',
        excerpt: local.excerpt,
        imageUrl: local.image,
        body: undefined,
      };
    }
  }

  return null;
}

export async function getRelatedPosts(
  slug: string,
  region: string
): Promise<SanityPost[]> {
  const cleanRegion = (region || '').trim().toLowerCase();
  try {
    const related: SanityPost[] = await client.fetch(
      RELATED_POSTS_QUERY,
      { slug, region: cleanRegion },
      { next: { revalidate: 60 } }
    );

    if (Array.isArray(related)) {
      return related.map((post) => ({
        ...post,
        date: formatPostDate(post.publishedAt),
      }));
    }
  } catch (err) {
    console.warn(`[Sanity] Failed to fetch related posts for "${slug}":`, err);
    // Fallback for AU if migration has not been run yet
    if (cleanRegion === 'au') {
      return getLocalFallbackPosts()
        .filter((p) => p.slug !== slug)
        .slice(0, 3);
    }
  }

  return [];
}

export async function getAllSlugsByRegion(region: string): Promise<string[]> {
  try {
    const results: Array<{ slug: string }> = await client.fetch(
      ALL_SLUGS_BY_REGION_QUERY,
      { region },
      { next: { revalidate: 60 } }
    );

    if (results && results.length > 0) {
      return results.map((r) => r.slug);
    }
  } catch (err) {
    console.warn(`[Sanity] Failed to fetch slugs for region "${region}":`, err);
  }

  // Fallback for AU if migration has not been run yet
  if (region === 'au') {
    return localBlogs.map((b) => b.slug);
  }

  return [];
}

export async function getAllSlugsForSitemap(): Promise<
  Array<{ slug: string; region: string; publishedAt?: string; _updatedAt?: string }>
> {
  try {
    const results: Array<{
      slug: string;
      region: string;
      publishedAt?: string;
      _updatedAt?: string;
    }> = await client.fetch(ALL_SLUGS_FOR_SITEMAP_QUERY, {}, { next: { revalidate: 3600 } });

    if (results && results.length > 0) {
      return results;
    }
  } catch (err) {
    console.warn('[Sanity] Failed to fetch sitemap posts:', err);
  }

  // Fallback for AU
  return localBlogs.map((b) => ({
    slug: b.slug,
    region: 'au',
    publishedAt: new Date(b.date).toISOString(),
    _updatedAt: new Date().toISOString(),
  }));
}
