export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanityTable {
  _type: 'table';
  _key: string;
  rows?: Array<{
    _key: string;
    _type: 'tableRow';
    isHeader?: boolean;
    cells?: string[];
  }>;
}

export type PresetIcon =
  | 'clock'
  | 'eye'
  | 'user'
  | 'home'
  | 'book'
  | 'calendar'
  | 'chart'
  | 'check'
  | 'star'
  | 'target'
  | 'doc'
  | 'bulb'
  | 'shield'
  | 'list';

export interface NumberedCardItem {
  title: string;
  points?: string[];
}

export interface NumberedCardBlock {
  _type: 'numberedCards';
  _key?: string;
  items?: NumberedCardItem[];
}

export interface IconTileItem {
  icon: PresetIcon | string;
  title: string;
  text?: string;
}

export interface IconTilesBlock {
  _type: 'iconTiles';
  _key?: string;
  tiles?: IconTileItem[];
}

export interface CalloutBoxBlock {
  _type: 'calloutBox';
  _key?: string;
  variant?: 'warn' | 'info' | 'success';
  title?: string;
  text?: string;
  points?: string[];
}

export interface TimelineStepItem {
  title: string;
  text?: string;
}

export interface TimelineListBlock {
  _type: 'timelineList';
  _key?: string;
  steps?: TimelineStepItem[];
}

export interface FeatureGridItem {
  icon: PresetIcon | string;
  title: string;
  text?: string;
}

export interface FeatureGridBlock {
  _type: 'featureGrid';
  _key?: string;
  features?: FeatureGridItem[];
}

export interface MidCtaBlock {
  _type: 'midCta';
  _key?: string;
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonPath: string;
}

export interface PullQuoteBlock {
  _type: 'pullQuote';
  _key?: string;
  quote: string;
  attribution?: string;
  style?: 'standard' | 'big';
}

export interface ChecklistBlock {
  _type: 'checklist';
  _key?: string;
  items?: string[];
}

export interface QuoteListBlock {
  _type: 'quoteList';
  _key?: string;
  quotes?: string[];
}

export interface TrioCardItem {
  title: string;
  text: string;
}

export interface TrioCardsBlock {
  _type: 'trioCards';
  _key?: string;
  cards?: TrioCardItem[];
}

export interface EndCtaBlock {
  _type: 'endCta';
  _key?: string;
  text: string;
  buttonLabel?: string;
  buttonPath?: string;
}

export type SectionLayout =
  | 'richText'
  | 'numberedCards'
  | 'iconTiles'
  | 'callout'
  | 'timeline'
  | 'featureGrid'
  | 'quoteCards'
  | 'trioCards'
  | 'checklist'
  | 'midCta'
  | 'endCta'
  | 'pullQuoteBig';

export interface ArticleSection {
  _key?: string;
  heading: string;
  intro?: any[];
  layout: SectionLayout;
  items?: Array<{ title: string; points?: string[]; text?: string }> | string[];
  tiles?: Array<{ icon: PresetIcon | string; title: string; text?: string }>;
  variant?: 'warn' | 'info' | 'success';
  title?: string;
  points?: string[];
  steps?: Array<{ title: string; text?: string }>;
  features?: Array<{ icon: PresetIcon | string; title: string; text?: string }>;
  quotes?: string[];
  cards?: Array<{ title: string; text: string }>;
  checklistItems?: string[];
  ctaHeading?: string;
  subtext?: string;
  text?: string;
  buttonLabel?: string;
  buttonPath?: string;
  quote?: string;
  attribution?: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  category: string;
  region: 'au' | 'us' | 'ca' | 'nz';
  excerpt?: string;
  dek?: string; // Subtitle / Dek fallback to excerpt
  featured?: boolean;
  mainImage?: SanityImage;
  imageUrl?: string;
  author?: string;
  date?: string; // Formatted date string (e.g. "December 20, 2024")
  readTime?: string; // Optional custom read time override from CMS (e.g. "6 min read")

  // TAB: Intro
  introHeading?: string;
  introText?: any[];
  introPullQuote?: string;

  // TAB: Numbered Cards
  ncHeading?: string;
  ncIntro?: string;
  ncItems?: Array<{ title: string; points?: string[] }>;

  // TAB: Icon Tiles
  tilesHeading?: string;
  tilesIntro?: string;
  tiles?: Array<{ icon: PresetIcon | string; title: string; text?: string }>;
  tilesCalloutTitle?: string;
  tilesCalloutPoints?: string[];

  // TAB: Timeline
  tlHeading?: string;
  tlIntro?: string;
  tlSteps?: Array<{ title: string; text?: string }>;
  midCtaHeading?: string;
  midCtaSubtext?: string;
  midCtaButtonLabel?: string;
  midCtaButtonPath?: string;

  // TAB: Feature Grid
  fgHeading?: string;
  fgIntro?: string;
  features?: Array<{ icon: PresetIcon | string; title: string; text?: string }>;

  // TAB: Quotes
  qHeading?: string;
  qIntro?: string;
  quotes?: string[];
  qClosing?: string;

  // TAB: Trio
  trioHeading?: string;
  trioIntro?: string;
  trioCards?: Array<{ title: string; text?: string }>;
  trioPullQuote?: string;

  // TAB: Checklist
  clHeading?: string;
  clIntro?: string;
  clItems?: string[];

  // TAB: End CTA
  endHeading?: string;
  endText?: string;
  endButtonLabel?: string;
  endButtonPath?: string;
  closingLine?: string;

  // TAB: SEO
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  noindex?: boolean;

  // TAB: Legacy Body
  body?: any[];
  sections?: ArticleSection[];
}

export interface RegionalAlternatesParams {
  slug: string;
  region: string;
}
