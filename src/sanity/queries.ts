export const POSTS_BY_REGION_QUERY = `
  *[_type == "post" && region == $region] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    region,
    excerpt,
    dek,
    readTime,
    featured,
    mainImage,
    "imageUrl": mainImage.asset->url
  }
`;

export const POST_BY_SLUG_AND_REGION_QUERY = `
  *[_type == "post" && slug.current == $slug && region == $region][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    region,
    excerpt,
    dek,
    readTime,
    featured,
    mainImage,
    "imageUrl": mainImage.asset->url,
    author,
    
    // TAB: Intro
    introHeading,
    introText,
    introPullQuote,

    // TAB: Numbered Cards
    ncHeading,
    ncIntro,
    ncItems,

    // TAB: Icon Tiles
    tilesHeading,
    tilesIntro,
    tiles,
    tilesCalloutTitle,
    tilesCalloutPoints,

    // TAB: Timeline
    tlHeading,
    tlIntro,
    tlSteps,
    midCtaHeading,
    midCtaSubtext,
    midCtaButtonLabel,
    midCtaButtonPath,

    // TAB: Feature Grid
    fgHeading,
    fgIntro,
    features,

    // TAB: Quotes
    qHeading,
    qIntro,
    quotes,
    qClosing,

    // TAB: Trio
    trioHeading,
    trioIntro,
    trioCards,
    trioPullQuote,

    // TAB: Checklist
    clHeading,
    clIntro,
    clItems,

    // TAB: End CTA
    endHeading,
    endText,
    endButtonLabel,
    endButtonPath,
    closingLine,

    // TAB: SEO
    metaTitle,
    metaDescription,
    focusKeyword,
    noindex,

    // TAB: Legacy Body & sections fallback
    body,
    sections
  }
`;

export const RELATED_POSTS_QUERY = `
  *[_type == "post" && region == $region && slug.current != $slug] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    region,
    excerpt,
    dek,
    readTime,
    featured,
    mainImage,
    "imageUrl": mainImage.asset->url,
    author
  }
`;

export const ALL_SLUGS_BY_REGION_QUERY = `
  *[_type == "post" && region == $region] {
    "slug": slug.current
  }
`;

export const ALL_SLUGS_FOR_SITEMAP_QUERY = `
  *[_type == "post"] {
    "slug": slug.current,
    region,
    publishedAt,
    _updatedAt
  }
`;
