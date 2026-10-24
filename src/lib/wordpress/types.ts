export interface WordPressRenderedField {
  rendered: string;
  protected?: boolean;
}

export interface WordPressEmbeddedFeaturedMedia {
  id?: number;
  source_url?: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
  };
}

export interface WordPressEmbeddedTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WordPressPostMeta {
  dek?: string;
  author_name?: string;
  read_time?: string;
  featured?: boolean;
  rank_math_title?: string;
  rank_math_description?: string;
  rank_math_focus_keyword?: string;
  rank_math_robots?: string[];
  [key: string]: any;
}

export interface WordPressRawPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  featured_media?: number;
  categories?: number[];
  region?: number[];
  meta?: WordPressPostMeta;
  tx_sections?: any;
  _embedded?: {
    'wp:featuredmedia'?: WordPressEmbeddedFeaturedMedia[];
    'wp:term'?: WordPressEmbeddedTerm[][];
    [key: string]: any;
  };
}

export interface WordPressRegionTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

