/**
 * Sanity CMS Block Content Schema (Portable Text)
 * Enables standard editorial formatting + custom TutorExel rich content components
 */

export const blockContent = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 (Tracked in Table of Contents)', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule: any) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: false,
              },
            ],
          },
        ],
      },
    },
    // Inline Image
    {
      type: 'image',
      title: 'Inline Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    // Table Block
    {
      type: 'object',
      name: 'table',
      title: 'Comparison Table',
      fields: [
        {
          name: 'rows',
          type: 'array',
          title: 'Table Rows',
          of: [
            {
              type: 'object',
              name: 'tableRow',
              fields: [
                {
                  name: 'isHeader',
                  type: 'boolean',
                  title: 'Header Row',
                  initialValue: false,
                },
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Row Cells',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    },
    // 11 Rich Custom Blocks
    { type: 'numberedCards' },
    { type: 'iconTiles' },
    { type: 'calloutBox' },
    { type: 'timelineList' },
    { type: 'featureGrid' },
    { type: 'midCta' },
    { type: 'pullQuote' },
    { type: 'quoteList' },
    { type: 'trioCards' },
    { type: 'checklist' },
    { type: 'endCta' },
  ],
};
