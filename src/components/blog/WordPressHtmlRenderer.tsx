import React from 'react';
import { getRegionalHref } from '@/utils/regionalLinks';

interface WordPressHtmlRendererProps {
  html: string;
  region?: string;
  className?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function sanitizeAndPrepareWpHtml(html: string, region: string = 'au'): string {
  if (!html) return '';

  let clean = html;

  // 1. Strip script tags
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // 2. Strip inline event handlers (e.g. onclick, onerror, onload)
  clean = clean.replace(/\son[a-zA-Z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');

  // 3. Strip javascript: URLs
  clean = clean.replace(/href\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, 'href="#"');

  // 4. Ensure H2 and H3 tags have IDs for Table of Contents and in-page navigation
  clean = clean.replace(/<(h[23])(\s+[^>]*)?>(.*?)<\/\1>/gi, (match, tag, attrs = '', inner) => {
    if (/id\s*=\s*["'][^"']+["']/i.test(attrs)) {
      return match;
    }
    const plainText = inner.replace(/<[^>]*>/g, '').trim();
    const id = slugify(plainText);
    if (!id) {
      return match;
    }
    return `<${tag}${attrs ? attrs : ''} id="${id}">${inner}</${tag}>`;
  });

  // 5. Wrap table tags in art-table-wrap and apply art-table class
  clean = clean.replace(/<table(\s+[^>]*)?>([\s\S]*?)<\/table>/gi, (match, attrs = '', tableBody) => {
    let cleanAttrs = attrs;
    if (/class\s*=\s*["']/i.test(cleanAttrs)) {
      cleanAttrs = cleanAttrs.replace(/class\s*=\s*["']([^"']*)["']/i, 'class="$1 art-table"');
    } else {
      cleanAttrs = ` class="art-table"${cleanAttrs}`;
    }
    return `<div class="art-table-wrap"><table${cleanAttrs}>${tableBody}</table></div>`;
  });

  // 6. Ensure pull-quote blockquotes have pull class
  clean = clean.replace(/<blockquote(\s+[^>]*)?>/gi, (match, attrs = '') => {
    if (/class\s*=\s*["']/i.test(attrs)) {
      if (/pull-quote/i.test(attrs) && !/pull/i.test(attrs)) {
        return attrs.replace(/class\s*=\s*["']([^"']*)["']/i, '<blockquote class="$1 pull">');
      }
      return match;
    }
    return '<blockquote class="pull">';
  });

  // 7. Adjust internal links for regional routing
  clean = clean.replace(/<a\s+([^>]*?)href\s*=\s*["']([^"']+)["']([^>]*)>/gi, (match, pre, href, post) => {
    let targetHref = href;
    const isInternal = targetHref.startsWith('/') || targetHref.includes('tutorexel.com');
    if (isInternal) {
      const cleanPath = targetHref.replace(/^https?:\/\/[^\/]+/, '') || '/';
      targetHref = getRegionalHref(cleanPath, region);
    }
    return `<a ${pre}href="${targetHref}"${post}>`;
  });

  return clean;
}

export default function WordPressHtmlRenderer({
  html,
  region = 'au',
  className = '',
}: WordPressHtmlRendererProps) {
  if (!html) {
    return null;
  }

  const processedHtml = React.useMemo(() => {
    return sanitizeAndPrepareWpHtml(html, region);
  }, [html, region]);

  return (
    <div
      className={`art-custom-html art-prose ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

