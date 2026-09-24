import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { getPostImageUrl } from '@/sanity/image';
import { getRegionalHref } from '@/utils/regionalLinks';
import PresetIconSvg from './BlogBlockIcons';
import {
  NumberedCardBlock,
  IconTilesBlock,
  CalloutBoxBlock,
  TimelineListBlock,
  FeatureGridBlock,
  MidCtaBlock,
  PullQuoteBlock,
  ChecklistBlock,
  QuoteListBlock,
  TrioCardsBlock,
  EndCtaBlock,
} from '@/sanity/types';

function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node) && node.props && (node.props as any).children) {
    return getNodeText((node.props as any).children);
  }
  return '';
}

export function createPortableTextComponents(region: string = 'au'): PortableTextComponents {
  return {
    block: {
      h2: ({ value, children }) => {
        const textFromBlock = Array.isArray(value?.children)
          ? value.children.map((c: any) => c.text || '').join('').trim()
          : '';
        const text = textFromBlock || getNodeText(children).trim();
        const id = text
          ? text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '')
          : undefined;
        return <h2 id={id}>{children}</h2>;
      },
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      normal: ({ children }) => <p>{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="pull">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <b>{children}</b>,
      em: ({ children }) => <i>{children}</i>,
      underline: ({ children }) => <u>{children}</u>,
      'strike-through': ({ children }) => <s>{children}</s>,
      code: ({ children }) => <code>{children}</code>,
      link: ({ value, children }) => {
        const target = value?.blank ? '_blank' : undefined;
        const rel = value?.blank ? 'noopener noreferrer' : undefined;
        return (
          <a href={value?.href} target={target} rel={rel}>
            {children}
          </a>
        );
      },
    },
    types: {
      break: () => <hr className="art-divider" />,
      divider: () => <hr className="art-divider" />,
      table: ({ value }) => {
        if (!value?.rows || !Array.isArray(value.rows) || value.rows.length === 0) {
          return null;
        }
        const headerRows = value.rows.filter((r: any) => r.isHeader);
        const bodyRows = value.rows.filter((r: any) => !r.isHeader);

        return (
          <div className="art-table-wrap">
            <table className="art-table">
              {headerRows.length > 0 && (
                <thead>
                  {headerRows.map((r: any, rIdx: number) => (
                    <tr key={r._key || rIdx}>
                      {r.cells?.map((c: string, cIdx: number) => (
                        <th key={cIdx}>{c}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
              )}
              <tbody>
                {(bodyRows.length > 0 ? bodyRows : value.rows).map((r: any, rIdx: number) => (
                  <tr key={r._key || rIdx}>
                    {r.cells?.map((c: string, cIdx: number) => (
                      <td key={cIdx}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
      image: ({ value }) => {
        if (!value?.asset) return null;
        const imgUrl = getPostImageUrl(value);
        return (
          <figure className="art-inline-figure">
            <Image
              src={imgUrl}
              alt={value.alt || ''}
              width={800}
              height={450}
              className="art-inline-img"
            />
            {value.caption && <figcaption className="art-inline-caption">{value.caption}</figcaption>}
          </figure>
        );
      },
      customHtml: ({ value }) => {
        if (!value?.html) return null;
        return (
          <div
            className="art-custom-html"
            dangerouslySetInnerHTML={{ __html: value.html }}
          />
        );
      },

      /* ===== 8 NEW RICH CONTENT BLOCKS ===== */
      // 1. numberedCards
      numberedCards: ({ value }: { value: NumberedCardBlock }) => {
        if (!value?.items || !Array.isArray(value.items) || value.items.length === 0) {
          return null;
        }
        return (
          <ol className="num-cards">
            {value.items.map((item, idx) => (
              <li key={idx}>
                <b>{item.title}</b>
                {item.points && Array.isArray(item.points) && item.points.length > 0 && (
                  <ul>
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        );
      },

      // 2. iconTiles
      iconTiles: ({ value }: { value: IconTilesBlock }) => {
        if (!value?.tiles || !Array.isArray(value.tiles) || value.tiles.length === 0) {
          return null;
        }
        return (
          <div className="tiles">
            {value.tiles.map((tile, idx) => (
              <div key={idx} className="tile">
                <span className="tile-ic">
                  <PresetIconSvg name={tile.icon} size={22} />
                </span>
                <b>{tile.title}</b>
                {tile.text && <p>{tile.text}</p>}
              </div>
            ))}
          </div>
        );
      },

      // 3. calloutBox
      calloutBox: ({ value }: { value: CalloutBoxBlock }) => {
        const variant = value?.variant || 'warn';
        const hasPoints = Array.isArray(value?.points) && value.points.length > 0;
        return (
          <aside className={`callout callout--${variant}`}>
            {value?.title && <b>{value.title}</b>}
            {value?.text && <p>{value.text}</p>}
            {hasPoints && (
              <ul>
                {value.points!.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            )}
          </aside>
        );
      },

      // 4. timelineList
      timelineList: ({ value }: { value: TimelineListBlock }) => {
        if (!value?.steps || !Array.isArray(value.steps) || value.steps.length === 0) {
          return null;
        }
        return (
          <ol className="benefits">
            {value.steps.map((step, idx) => (
              <li key={idx}>
                <b>{step.title}</b>
                {step.text && <span>{step.text}</span>}
              </li>
            ))}
          </ol>
        );
      },

      // 5. featureGrid
      featureGrid: ({ value }: { value: FeatureGridBlock }) => {
        if (!value?.features || !Array.isArray(value.features) || value.features.length === 0) {
          return null;
        }
        return (
          <div className="feats">
            {value.features.map((feat, idx) => (
              <div key={idx} className="feat-i">
                <span className="tile-ic">
                  <PresetIconSvg name={feat.icon} size={22} />
                </span>
                <b>{feat.title}</b>
                {feat.text && <p>{feat.text}</p>}
              </div>
            ))}
          </div>
        );
      },

      // 6. midCta
      midCta: ({ value }: { value: MidCtaBlock }) => {
        if (!value?.heading) return null;
        const href = getRegionalHref(value.buttonPath || '/free-assessment', region);
        return (
          <aside className="mid-cta">
            <div>
              <b>{value.heading}</b>
              {value.subtext && <span>{value.subtext}</span>}
            </div>
            <Link className="btn btn-hi" href={href}>
              {value.buttonLabel || 'Take the free test'}{' '}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </aside>
        );
      },

      // 7. pullQuote
      pullQuote: ({ value }: { value: PullQuoteBlock }) => {
        if (!value?.quote) return null;
        const isBig = value.style !== 'standard';
        return (
          <blockquote className={isBig ? "pull pull--big" : "pull"}>
            “{value.quote}”
            {value.attribution && (
              <cite className="pull-attribution">— {value.attribution}</cite>
            )}
          </blockquote>
        );
      },

      // 8. checklist
      checklist: ({ value }: { value: ChecklistBlock }) => {
        if (!value?.items || !Array.isArray(value.items) || value.items.length === 0) {
          return null;
        }
        return (
          <ul className="checks">
            {value.items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        );
      },

      // 9. quoteList
      quoteList: ({ value }: { value: QuoteListBlock }) => {
        if (!value?.quotes || !Array.isArray(value.quotes) || value.quotes.length === 0) {
          return null;
        }
        return (
          <div className="quotes">
            {value.quotes.map((q, idx) => (
              <figure key={idx} className="q">
                <blockquote>{q}</blockquote>
              </figure>
            ))}
          </div>
        );
      },

      // 10. trioCards
      trioCards: ({ value }: { value: TrioCardsBlock }) => {
        if (!value?.cards || !Array.isArray(value.cards) || value.cards.length === 0) {
          return null;
        }
        return (
          <div className="trio">
            {value.cards.map((c, idx) => (
              <div key={idx}>
                <b>{c.title}</b>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        );
      },

      // 11. endCta
      endCta: ({ value }: { value: EndCtaBlock }) => {
        if (!value?.text) return null;
        const href = getRegionalHref(value.buttonPath || '/free-assessment', region);
        return (
          <div className="end-cta">
            <p>{value.text}</p>
            <Link className="btn end-btn" href={href}>
              {value.buttonLabel || 'Take the Free Diagnostic Test Today'}{' '}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        );
      },
    },
  };
}

interface PortableTextRendererProps {
  value?: any[];
  fallbackContent?: React.ReactNode;
  region?: string;
}

export default function PortableTextRenderer({
  value,
  fallbackContent,
  region = 'au',
}: PortableTextRendererProps) {
  const components = React.useMemo(() => createPortableTextComponents(region), [region]);

  if (value && Array.isArray(value) && value.length > 0) {
    return <PortableText value={value} components={components} />;
  }

  if (fallbackContent) {
    return <>{fallbackContent}</>;
  }

  return null;
}
