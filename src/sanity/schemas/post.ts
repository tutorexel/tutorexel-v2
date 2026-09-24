/**
 * Sanity CMS Document Schema for Blog Articles (post)
 * Fixed, Tabbed Section-Based Template aligned with tutorexel-blog-article.html
 */

export const PRESET_ICONS = [
  { title: 'Clock / Time', value: 'clock' },
  { title: 'Eye / Vision', value: 'eye' },
  { title: 'User / Person', value: 'user' },
  { title: 'Home / House', value: 'home' },
  { title: 'Book / Reading', value: 'book' },
  { title: 'Calendar / Schedule', value: 'calendar' },
  { title: 'Chart / Progress', value: 'chart' },
  { title: 'Check / Success', value: 'check' },
  { title: 'Star / Feature', value: 'star' },
  { title: 'Target / Goal', value: 'target' },
  { title: 'Document / Test', value: 'doc' },
  { title: 'Lightbulb / Idea', value: 'bulb' },
  { title: 'Shield / Safety', value: 'shield' },
  { title: 'List / Outline', value: 'list' },
];

export const post = {
  name: 'post',
  title: 'Blog Article',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'intro', title: 'Intro' },
    { name: 'numberedCards', title: 'Numbered Cards' },
    { name: 'iconTiles', title: 'Icon Tiles' },
    { name: 'timeline', title: 'Timeline' },
    { name: 'featureGrid', title: 'Feature Grid' },
    { name: 'quotes', title: 'Quotes' },
    { name: 'trio', title: 'Trio' },
    { name: 'checklist', title: 'Checklist' },
    { name: 'endCta', title: 'End CTA' },
    { name: 'seo', title: 'SEO' },
    { name: 'legacy', title: 'Legacy Body' },
  ],
  fields: [
    // =========================================================================
    // TAB: HERO
    // =========================================================================
    {
      name: 'title',
      title: 'Article Title (H1)',
      type: 'string',
      group: 'hero',
      description: 'The main H1 heading of the article',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'hero',
      description: 'Canonical URL slug (e.g. "why-students-need-more-than-school-support")',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dek',
      title: 'Dek / Subtitle',
      type: 'text',
      group: 'hero',
      rows: 3,
      description: 'The introductory subtitle paragraph shown prominently below the H1 title in the article hero.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'hero',
      description: 'Used for category pill, badge styling, and filtering in the Learning Hub',
      options: {
        list: [
          { title: 'Parent Guides', value: 'Parent Guides' },
          { title: 'NAPLAN & ICAS', value: 'NAPLAN & ICAS' },
          { title: 'Study Skills', value: 'Study Skills' },
          { title: 'Inside TutorExel', value: 'Inside TutorExel' },
          { title: 'Maths', value: 'Maths' },
          { title: 'English', value: 'English' },
          { title: 'Science', value: 'Science' },
          { title: 'Exam Prep', value: 'Exam Prep' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      initialValue: 'Parent Guides',
    },
    {
      name: 'mainImage',
      title: 'Featured Hero Image',
      type: 'image',
      group: 'hero',
      description: 'Featured article banner image shown between hero and article body',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and screen readers',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      group: 'hero',
      description: 'Displayed in the article meta bar and the author box at the bottom of the article',
      initialValue: 'TutorExel Team',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'hero',
      description: 'Publication date shown in the article meta bar',
      validation: (Rule: any) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'region',
      title: 'Target Country / Region',
      type: 'string',
      group: 'hero',
      description: 'Which regional site this post belongs to',
      options: {
        list: [
          { title: 'Australia (AU)', value: 'au' },
          { title: 'United States (US)', value: 'us' },
          { title: 'Canada (CA)', value: 'ca' },
          { title: 'New Zealand (NZ)', value: 'nz' },
        ],
      },
      initialValue: 'au',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      group: 'hero',
      description: 'Highlight as lead article or in hero sections',
      initialValue: false,
    },
    {
      name: 'readTime',
      title: 'Reading Time Override',
      type: 'string',
      group: 'hero',
      description: 'Optional override (e.g. "6 min read"). If left empty, calculated automatically from word count.',
    },
    {
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      group: 'hero',
      rows: 3,
      description: 'Summary used for related post cards, search listings, and social sharing cards',
    },

    // =========================================================================
    // TAB: INTRO
    // =========================================================================
    {
      name: 'introHeading',
      title: 'Intro Section Heading (H2)',
      type: 'string',
      group: 'intro',
      description: 'Heading for the introduction section (e.g. "Understanding the New Demands of Learning")',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'blockContent',
      group: 'intro',
      description: 'Portable Text for the introduction (paragraphs, bold, italic, links).',
    },
    {
      name: 'introPullQuote',
      title: 'Intro Pull Quote (Optional)',
      type: 'string',
      group: 'intro',
      description: 'Renders as the gradient pull-quote under the question (e.g. "Is school alone enough to help my child succeed?")',
    },

    // =========================================================================
    // TAB: NUMBERED CARDS
    // =========================================================================
    {
      name: 'ncHeading',
      title: 'Numbered Cards Heading (H2)',
      type: 'string',
      group: 'numberedCards',
      description: 'Section heading (e.g. "The Changing Landscape of Education in 2025")',
    },
    {
      name: 'ncIntro',
      title: 'Numbered Cards Intro Text',
      type: 'text',
      group: 'numberedCards',
      rows: 2,
      description: 'Introductory sentence above the cards (e.g. "Education today looks very different from even five years ago. Here’s why:")',
    },
    {
      name: 'ncItems',
      title: 'Numbered Cards',
      type: 'array',
      group: 'numberedCards',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },

    // =========================================================================
    // TAB: ICON TILES
    // =========================================================================
    {
      name: 'tilesHeading',
      title: 'Tiles Section Heading (H2)',
      type: 'string',
      group: 'iconTiles',
      description: 'Section heading (e.g. "Why School Support Alone Isn’t Enough")',
    },
    {
      name: 'tilesIntro',
      title: 'Tiles Intro Text',
      type: 'text',
      group: 'iconTiles',
      rows: 2,
      description: 'Introductory sentence above tiles (e.g. "While schools do their best, relying only on classroom teaching can leave gaps. Here’s why:")',
    },
    {
      name: 'tiles',
      title: 'Tiles (Icon + Title + Text)',
      type: 'array',
      group: 'iconTiles',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Preset',
              type: 'string',
              options: { list: PRESET_ICONS },
              initialValue: 'clock',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Tile Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Tile Text',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'tilesCalloutTitle',
      title: 'Callout Title (Optional)',
      type: 'string',
      group: 'iconTiles',
      description: 'Title for the warning callout box following the tiles (e.g. "For parents, this often shows up as:")',
    },
    {
      name: 'tilesCalloutPoints',
      title: 'Callout Points (Optional)',
      type: 'array',
      group: 'iconTiles',
      of: [{ type: 'string' }],
      description: 'Bullet points inside the warning callout box.',
    },

    // =========================================================================
    // TAB: TIMELINE
    // =========================================================================
    {
      name: 'tlHeading',
      title: 'Timeline Section Heading (H2)',
      type: 'string',
      group: 'timeline',
      description: 'Section heading (e.g. "How Additional Support Makes a Difference")',
    },
    {
      name: 'tlIntro',
      title: 'Timeline Intro Text',
      type: 'text',
      group: 'timeline',
      rows: 2,
      description: 'Introductory sentence above the timeline steps.',
    },
    {
      name: 'tlSteps',
      title: 'Timeline Steps (Numbered with Connector Line)',
      type: 'array',
      group: 'timeline',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Step Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'midCtaHeading',
      title: 'Mid-Article CTA Heading (Optional)',
      type: 'string',
      group: 'timeline',
      description: 'Heading for the dark CTA card following the timeline (e.g. "See where your child stands in one session")',
    },
    {
      name: 'midCtaSubtext',
      title: 'Mid-Article CTA Subtext (Optional)',
      type: 'string',
      group: 'timeline',
      description: 'Subtext for the CTA card (e.g. "Free diagnostic test, then a personalised learning plan.")',
    },
    {
      name: 'midCtaButtonLabel',
      title: 'Mid-Article CTA Button Label (Optional)',
      type: 'string',
      group: 'timeline',
      description: 'Label on the button (e.g. "Take the free test")',
    },
    {
      name: 'midCtaButtonPath',
      title: 'Mid-Article CTA Button Path (Optional)',
      type: 'string',
      group: 'timeline',
      description: 'Target path or URL (e.g. "/free-assessment")',
    },

    // =========================================================================
    // TAB: FEATURE GRID
    // =========================================================================
    {
      name: 'fgHeading',
      title: 'Feature Grid Heading (H2)',
      type: 'string',
      group: 'featureGrid',
      description: 'Section heading (e.g. "The TutorExel Approach in 2025")',
    },
    {
      name: 'fgIntro',
      title: 'Feature Grid Intro Text',
      type: 'text',
      group: 'featureGrid',
      rows: 2,
      description: 'Introductory text above the 2-column feature cards.',
    },
    {
      name: 'features',
      title: 'Features (2-Column Grid)',
      type: 'array',
      group: 'featureGrid',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Preset',
              type: 'string',
              options: { list: PRESET_ICONS },
              initialValue: 'doc',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    },

    // =========================================================================
    // TAB: QUOTES
    // =========================================================================
    {
      name: 'qHeading',
      title: 'Quotes Section Heading (H2)',
      type: 'string',
      group: 'quotes',
      description: 'Section heading (e.g. "For Parents: Why This Matters")',
    },
    {
      name: 'qIntro',
      title: 'Quotes Intro Text',
      type: 'text',
      group: 'quotes',
      rows: 2,
      description: 'Introductory text above quotes (e.g. "Parents often tell us:")',
    },
    {
      name: 'quotes',
      title: 'Quotes (Testimonial Quote Cards)',
      type: 'array',
      group: 'quotes',
      of: [{ type: 'string' }],
    },
    {
      name: 'qClosing',
      title: 'Quotes Closing Text (Optional)',
      type: 'text',
      group: 'quotes',
      rows: 3,
      description: 'Paragraphs following the quote cards (e.g. "These concerns are real, and they’re exactly what TutorExel is designed to address...")',
    },

    // =========================================================================
    // TAB: TRIO
    // =========================================================================
    {
      name: 'trioHeading',
      title: 'Trio Section Heading (H2)',
      type: 'string',
      group: 'trio',
      description: 'Section heading (e.g. "Keeping Learning Stress-Free")',
    },
    {
      name: 'trioIntro',
      title: 'Trio Intro Text',
      type: 'text',
      group: 'trio',
      rows: 2,
      description: 'Introductory text above the 3 cards.',
    },
    {
      name: 'trioCards',
      title: 'Trio Cards (3-Column Cards)',
      type: 'array',
      group: 'trio',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Card Text',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'trioPullQuote',
      title: 'Big Centered Pull Quote (Optional)',
      type: 'string',
      group: 'trio',
      description: 'Large pull-quote banner following the trio cards (e.g. "The goal is not more pressure. It’s more confidence.")',
    },

    // =========================================================================
    // TAB: CHECKLIST
    // =========================================================================
    {
      name: 'clHeading',
      title: 'Checklist Section Heading (H2)',
      type: 'string',
      group: 'checklist',
      description: 'Section heading (e.g. "The Way Forward in 2025")',
    },
    {
      name: 'clIntro',
      title: 'Checklist Intro Text',
      type: 'text',
      group: 'checklist',
      rows: 2,
      description: 'Introductory text above checklist.',
    },
    {
      name: 'clItems',
      title: 'Checklist Items (Green Checkmarks)',
      type: 'array',
      group: 'checklist',
      of: [{ type: 'string' }],
    },

    // =========================================================================
    // TAB: END CTA
    // =========================================================================
    {
      name: 'endHeading',
      title: 'End CTA Heading (H2)',
      type: 'string',
      group: 'endCta',
      description: 'Section heading (e.g. "Ready to Take the Next Step?")',
    },
    {
      name: 'endText',
      title: 'End CTA Banner Text',
      type: 'text',
      group: 'endCta',
      rows: 3,
      description: 'Text inside the gradient CTA card.',
    },
    {
      name: 'endButtonLabel',
      title: 'End CTA Button Label',
      type: 'string',
      group: 'endCta',
      description: 'Button text (e.g. "Take the Free Diagnostic Test Today")',
    },
    {
      name: 'endButtonPath',
      title: 'End CTA Button Path',
      type: 'string',
      group: 'endCta',
      description: 'Button destination (e.g. "/free-assessment")',
    },
    {
      name: 'closingLine',
      title: 'Closing Sentence (Optional)',
      type: 'text',
      group: 'endCta',
      rows: 2,
      description: 'Italic closing sentence below the CTA card (e.g. "In 2025 and beyond, school alone isn’t always enough...")',
    },

    // =========================================================================
    // TAB: SEO
    // =========================================================================
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Overrides the browser tab title tag (defaults to Article Title | TutorExel)',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Custom search snippet description (defaults to Excerpt or Dek)',
    },
    {
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      group: 'seo',
      description: 'Primary target keyword for content optimization',
    },
    {
      name: 'noindex',
      title: 'Hide from search engines (noindex)',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    },

    // =========================================================================
    // TAB: LEGACY BODY
    // =========================================================================
    {
      name: 'body',
      title: 'Legacy Article Body',
      type: 'blockContent',
      group: 'legacy',
      description: 'Legacy rich text content for existing 22 posts. If any new section tabs are populated, the fixed template renders instead.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }: any) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        title,
        subtitle: `${subtitle || 'Uncategorized'} • ${formattedDate}`,
        media,
      };
    },
  },
};
