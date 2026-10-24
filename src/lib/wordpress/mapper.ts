import { SanityPost } from '@/sanity/types';
import { WordPressRawPost } from './types';

export function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8230;/g, '...')
    .replace(/&#(\d+);/g, (_, code) => {
      const num = parseInt(code, 10);
      if (num === 8211 || num === 8212) return '-';
      return String.fromCharCode(num);
    });
}

export function stripHtml(html: string): string {
  if (!html) return '';
  const withoutTags = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return decodeHtmlEntities(withoutTags);
}

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

export function mapWordPressPostToSanity(
  wp: WordPressRawPost,
  regionHint?: string
): SanityPost {
  const meta = wp.meta || {};

  // Extract featured image from _embedded['wp:featuredmedia']
  let featuredImageUrl: string | undefined = undefined;
  let featuredImageAlt = '';
  if (wp._embedded && Array.isArray(wp._embedded['wp:featuredmedia']) && wp._embedded['wp:featuredmedia'].length > 0) {
    const media = wp._embedded['wp:featuredmedia'][0];
    if (media.source_url) {
      featuredImageUrl = media.source_url;
      featuredImageAlt = decodeHtmlEntities(media.alt_text || wp.title?.rendered || '');
    }
  }

  // Extract category from _embedded['wp:term']
  let categoryName = 'General';
  let postRegion: 'au' | 'us' | 'ca' | 'nz' = (regionHint as any) || 'au';

  if (wp._embedded && Array.isArray(wp._embedded['wp:term'])) {
    const allTerms = wp._embedded['wp:term'].flat();
    const catTerm = allTerms.find((t) => t.taxonomy === 'category');
    if (catTerm && catTerm.name) {
      categoryName = decodeHtmlEntities(catTerm.name);
    }

    const regTerm = allTerms.find((t) => t.taxonomy === 'region');
    if (regTerm && ['au', 'us', 'ca', 'nz'].includes(regTerm.slug.toLowerCase())) {
      postRegion = regTerm.slug.toLowerCase() as 'au' | 'us' | 'ca' | 'nz';
    }
  }

  // Parse tx_sections if string
  let sections: any = wp.tx_sections;
  if (typeof sections === 'string' && sections.trim().startsWith('{')) {
    try {
      sections = JSON.parse(sections);
    } catch {
      sections = {};
    }
  }
  if (!sections || typeof sections !== 'object') {
    sections = {};
  }

  const cleanTitle = decodeHtmlEntities(wp.title?.rendered || '');
  const cleanExcerpt = stripHtml(wp.excerpt?.rendered || '');
  const publishedDate = wp.date_gmt
    ? (wp.date_gmt.endsWith('Z') ? wp.date_gmt : `${wp.date_gmt}Z`)
    : wp.date;
  const updatedDate = wp.modified_gmt
    ? (wp.modified_gmt.endsWith('Z') ? wp.modified_gmt : `${wp.modified_gmt}Z`)
    : wp.modified;

  const noindex = Array.isArray(meta.rank_math_robots)
    ? meta.rank_math_robots.includes('noindex')
    : false;

  const sanityPost: SanityPost = {
    _id: `wp-${wp.id}`,
    _updatedAt: updatedDate,
    title: cleanTitle,
    slug: wp.slug,
    publishedAt: publishedDate,
    date: formatPostDate(publishedDate),
    category: categoryName,
    region: postRegion,
    excerpt: cleanExcerpt,
    dek: meta.dek ? decodeHtmlEntities(meta.dek) : undefined,
    featured: Boolean(meta.featured),
    imageUrl: featuredImageUrl,
    mainImage: featuredImageUrl
      ? ({
          _type: 'image',
          asset: { _ref: '', _type: 'reference' },
          alt: featuredImageAlt,
          url: featuredImageUrl,
        } as any)
      : undefined,
    author: meta.author_name ? decodeHtmlEntities(meta.author_name) : 'TutorExel Team',
    readTime: meta.read_time ? String(meta.read_time).trim() : undefined,
    metaTitle: meta.rank_math_title ? decodeHtmlEntities(meta.rank_math_title) : undefined,
    metaDescription: meta.rank_math_description ? decodeHtmlEntities(meta.rank_math_description) : undefined,
    focusKeyword: meta.rank_math_focus_keyword || undefined,
    noindex: noindex,
    body: undefined,
    bodyHtml: wp.content?.rendered || '',

    // 1. intro
    introHeading: sections.intro?.introHeading || undefined,
    introText: sections.intro?.introText || undefined,
    introPullQuote: sections.intro?.introPullQuote || undefined,

    // 2. numberedCards
    ncHeading: sections.numberedCards?.ncHeading || undefined,
    ncIntro: sections.numberedCards?.ncIntro || undefined,
    ncItems: sections.numberedCards?.ncItems || undefined,

    // 3. tiles
    tilesHeading: sections.tiles?.tilesHeading || undefined,
    tilesIntro: sections.tiles?.tilesIntro || undefined,
    tiles: sections.tiles?.tiles || undefined,
    tilesCalloutTitle: sections.tiles?.tilesCalloutTitle || undefined,
    tilesCalloutPoints: sections.tiles?.tilesCalloutPoints || undefined,

    // 4. timeline
    tlHeading: sections.timeline?.tlHeading || undefined,
    tlIntro: sections.timeline?.tlIntro || undefined,
    tlSteps: sections.timeline?.tlSteps || undefined,
    midCtaHeading: sections.midCta?.midCtaHeading || undefined,
    midCtaSubtext: sections.midCta?.midCtaSubtext || undefined,
    midCtaButtonLabel: sections.midCta?.midCtaButtonLabel || undefined,
    midCtaButtonPath: sections.midCta?.midCtaButtonPath || undefined,

    // 5. featureGrid
    fgHeading: sections.featureGrid?.fgHeading || undefined,
    fgIntro: sections.featureGrid?.fgIntro || undefined,
    features: sections.featureGrid?.features || undefined,

    // 6. quotes
    qHeading: sections.quotes?.qHeading || undefined,
    qIntro: sections.quotes?.qIntro || undefined,
    quotes: sections.quotes?.quotes || undefined,
    qClosing: sections.quotes?.qClosing || undefined,

    // 7. trio
    trioHeading: sections.trio?.trioHeading || undefined,
    trioIntro: sections.trio?.trioIntro || undefined,
    trioCards: sections.trio?.trioCards || undefined,
    trioPullQuote: sections.trio?.trioPullQuote || undefined,

    // 8. checklist
    clHeading: sections.checklist?.clHeading || undefined,
    clIntro: sections.checklist?.clIntro || undefined,
    clItems: sections.checklist?.clItems || undefined,

    // 9. endCta
    endHeading: sections.endCta?.endHeading || undefined,
    endText: sections.endCta?.endText || undefined,
    endButtonLabel: sections.endCta?.endButtonLabel || undefined,
    endButtonPath: sections.endCta?.endButtonPath || undefined,
    closingLine: sections.endCta?.closingLine || undefined,
  };

  return sanityPost;
}

