/**
 * Sanity CMS Object Schemas for Rich Article Content Blocks
 * Aligned with TutorExel Blog Article Design System
 */

export const numberedCards = {
  name: 'numberedCards',
  title: 'Numbered Cards',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Card Items',
      type: 'array',
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
  ],
};

export const iconTiles = {
  name: 'iconTiles',
  title: 'Icon Tiles (Grid)',
  type: 'object',
  fields: [
    {
      name: 'tiles',
      title: 'Tiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Preset Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Clock / Time', value: 'clock' },
                  { title: 'Eye / Styles', value: 'eye' },
                  { title: 'User / Personal', value: 'user' },
                  { title: 'Home / Homework', value: 'home' },
                  { title: 'Book / Reading', value: 'book' },
                  { title: 'Calendar / Schedule', value: 'calendar' },
                  { title: 'Chart / Progress', value: 'chart' },
                  { title: 'Check / Success', value: 'check' },
                  { title: 'Star / Quality', value: 'star' },
                  { title: 'Target / Goal', value: 'target' },
                  { title: 'Document / Test', value: 'doc' },
                  { title: 'Lightbulb / Idea', value: 'bulb' },
                  { title: 'Shield / Safe', value: 'shield' },
                  { title: 'List / Structure', value: 'list' },
                ],
              },
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
              title: 'Tile Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    },
  ],
};

export const calloutBox = {
  name: 'calloutBox',
  title: 'Callout Box',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant Style',
      type: 'string',
      options: {
        list: [
          { title: 'Warning / Alert (Peach)', value: 'warn' },
          { title: 'Info / Note (Blue/Grey)', value: 'info' },
          { title: 'Success / Tip (Green)', value: 'success' },
        ],
      },
      initialValue: 'warn',
    },
    {
      name: 'title',
      title: 'Callout Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Callout Body Text',
      type: 'text',
      rows: 2,
    },
    {
      name: 'points',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export const timelineList = {
  name: 'timelineList',
  title: 'Timeline / Benefits List',
  type: 'object',
  fields: [
    {
      name: 'steps',
      title: 'Steps / Benefits',
      type: 'array',
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
  ],
};

export const featureGrid = {
  name: 'featureGrid',
  title: 'Feature Grid (2-Column Icon Cards)',
  type: 'object',
  fields: [
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Preset Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Document / Test', value: 'doc' },
                  { title: 'Calendar / Schedule', value: 'calendar' },
                  { title: 'List / Question Bank', value: 'list' },
                  { title: 'Book / Worksheets', value: 'book' },
                  { title: 'Chart / Report Card', value: 'chart' },
                  { title: 'Target / Flexible Pace', value: 'target' },
                  { title: 'Clock / Time', value: 'clock' },
                  { title: 'User / Attention', value: 'user' },
                  { title: 'Check / Quality', value: 'check' },
                  { title: 'Star / Foundation', value: 'star' },
                ],
              },
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
  ],
};

export const midCta = {
  name: 'midCta',
  title: 'Mid-Article Call to Action',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtext',
      title: 'Subtext / Subtitle',
      type: 'string',
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Take the free test',
    },
    {
      name: 'buttonPath',
      title: 'Button Relative Link Path',
      type: 'string',
      initialValue: '/free-assessment',
    },
  ],
};

export const pullQuote = {
  name: 'pullQuote',
  title: 'Pull Quote / Highlight Text',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote Text',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'attribution',
      title: 'Attribution / Author (Optional)',
      type: 'string',
    },
    {
      name: 'style',
      title: 'Quote Style',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Gradient Pull Quote', value: 'standard' },
          { title: 'Big Centered Pull Quote (with borders)', value: 'big' },
        ],
      },
      initialValue: 'standard',
    },
  ],
};

export const quoteList = {
  name: 'quoteList',
  title: 'Quote List (Parent / Student Testimonials)',
  type: 'object',
  fields: [
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export const trioCards = {
  name: 'trioCards',
  title: 'Trio Cards (3-Column Info Blocks)',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
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
              title: 'Card Description',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

export const checklist = {
  name: 'checklist',
  title: 'Checklist (Green Checkmark Items)',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Checklist Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export const endCta = {
  name: 'endCta',
  title: 'End Article Call to Action',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'CTA Text Message',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Take the Free Diagnostic Test Today',
    },
    {
      name: 'buttonPath',
      title: 'Button Relative Link Path',
      type: 'string',
      initialValue: '/free-assessment',
    },
  ],
};
