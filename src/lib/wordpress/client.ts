import { SanityPost } from '@/sanity/types';
import { WordPressRawPost, WordPressRegionTerm } from './types';
import { mapWordPressPostToSanity } from './mapper';

function getWpBaseUrl(): string {
  const url = process.env.WP_API_URL || '';
  return url.trim().replace(/\/+$/, '');
}

// In-memory cache for region terms
let regionTermsCache: Record<string, number> | null = null;

export async function getRegionTermsMap(): Promise<Record<string, number>> {
  if (regionTermsCache) {
    return regionTermsCache;
  }

  const baseUrl = getWpBaseUrl();
  const fallbackMap: Record<string, number> = {
    au: 11,
    us: 12,
    ca: 13,
    nz: 14,
  };

  if (!baseUrl) {
    regionTermsCache = fallbackMap;
    return regionTermsCache;
  }

  try {
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/region?per_page=100`, {
      next: { revalidate: 3600, tags: ['blog'] },
    });
    if (res.ok) {
      const terms: WordPressRegionTerm[] = await res.json();
      if (Array.isArray(terms) && terms.length > 0) {
        const map: Record<string, number> = {};
        for (const term of terms) {
          if (term.slug && term.id) {
            map[term.slug.toLowerCase()] = term.id;
          }
        }
        regionTermsCache = { ...fallbackMap, ...map };
        return regionTermsCache;
      }
    }
  } catch (err) {
    console.warn('[WordPress] Failed to fetch region terms from WP REST API, using default map:', err);
  }

  regionTermsCache = fallbackMap;
  return regionTermsCache;
}

export async function fetchAllWordPressPosts(queryFilter: string = ''): Promise<WordPressRawPost[]> {
  const baseUrl = getWpBaseUrl();
  if (!baseUrl) {
    return [];
  }

  const allPosts: WordPressRawPost[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const sep = queryFilter.includes('?') ? '&' : (queryFilter ? '&' : '?');
    const url = `${baseUrl}/wp-json/wp/v2/posts${queryFilter ? (queryFilter.startsWith('?') ? queryFilter : `?${queryFilter}`) : '?'}${queryFilter ? '&' : ''}_embed=1&per_page=100&page=${page}`;

    try {
      const res = await fetch(url, {
        next: { revalidate: 60, tags: ['blog'] },
      });

      if (!res.ok) {
        break;
      }

      const totalPagesHeader = res.headers.get('X-WP-TotalPages');
      if (totalPagesHeader) {
        const parsed = parseInt(totalPagesHeader, 10);
        if (!isNaN(parsed) && parsed > 0) {
          totalPages = parsed;
        }
      }

      const posts: WordPressRawPost[] = await res.json();
      if (!Array.isArray(posts) || posts.length === 0) {
        break;
      }

      allPosts.push(...posts);
      page++;
    } catch (err) {
      console.warn(`[WordPress] Error fetching page ${page} from ${url}:`, err);
      break;
    }
  }

  return allPosts;
}

export async function getWpPostsByRegion(region: string): Promise<SanityPost[]> {
  const cleanRegion = (region || 'au').toLowerCase().trim();
  const regionMap = await getRegionTermsMap();
  const regionId = regionMap[cleanRegion];

  const query = regionId ? `?region=${regionId}` : '';
  const rawPosts = await fetchAllWordPressPosts(query);

  return rawPosts.map((post) => mapWordPressPostToSanity(post, cleanRegion));
}

export async function getWpPostBySlugAndRegion(
  slug: string,
  region: string
): Promise<SanityPost | null> {
  const baseUrl = getWpBaseUrl();
  if (!baseUrl || !slug) {
    return null;
  }

  const cleanRegion = (region || 'au').toLowerCase().trim();
  const regionMap = await getRegionTermsMap();
  const regionId = regionMap[cleanRegion];

  try {
    const url = `${baseUrl}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
    const res = await fetch(url, {
      next: { revalidate: 60, tags: ['blog'] },
    });

    if (!res.ok) {
      return null;
    }

    const posts: WordPressRawPost[] = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }

    // If regionId is known, try to find matching post by region first
    if (regionId) {
      const match = posts.find((p) => {
        if (Array.isArray(p.region) && p.region.includes(regionId)) {
          return true;
        }
        if (p._embedded && Array.isArray(p._embedded['wp:term'])) {
          const regTerm = p._embedded['wp:term'].flat().find((t) => t.taxonomy === 'region');
          return regTerm && regTerm.slug.toLowerCase() === cleanRegion;
        }
        return false;
      });
      if (match) {
        return mapWordPressPostToSanity(match, cleanRegion);
      }
    }

    // Default to first match if no region-specific variant
    return mapWordPressPostToSanity(posts[0], cleanRegion);
  } catch (err) {
    console.warn(`[WordPress] Failed to fetch post by slug "${slug}":`, err);
    return null;
  }
}

export async function getWpRelatedPosts(
  slug: string,
  region: string
): Promise<SanityPost[]> {
  try {
    const regionPosts = await getWpPostsByRegion(region);
    return regionPosts
      .filter((p) => p.slug !== slug)
      .slice(0, 3);
  } catch (err) {
    console.warn(`[WordPress] Failed to fetch related posts for "${slug}":`, err);
    return [];
  }
}

export async function getWpAllSlugsByRegion(region: string): Promise<string[]> {
  try {
    const posts = await getWpPostsByRegion(region);
    return posts.map((p) => p.slug);
  } catch (err) {
    console.warn(`[WordPress] Failed to fetch slugs for region "${region}":`, err);
    return [];
  }
}

export async function getWpAllSlugsForSitemap(): Promise<
  Array<{
    slug: string;
    region: string;
    publishedAt?: string;
    _updatedAt?: string;
    noindex?: boolean;
    imageUrl?: string;
  }>
> {
  try {
    const rawPosts = await fetchAllWordPressPosts();
    return rawPosts.map((wp) => {
      const mapped = mapWordPressPostToSanity(wp);
      return {
        slug: mapped.slug,
        region: mapped.region,
        publishedAt: mapped.publishedAt,
        _updatedAt: mapped._updatedAt || mapped.publishedAt,
        noindex: mapped.noindex,
        imageUrl: mapped.imageUrl,
      };
    });
  } catch (err) {
    console.warn('[WordPress] Failed to fetch sitemap slugs:', err);
    return [];
  }
}

