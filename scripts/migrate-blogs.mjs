import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('\x1b[31m%s\x1b[0m', '=======================================================');
  console.error('\x1b[31m%s\x1b[0m', 'ERROR: SANITY_API_WRITE_TOKEN environment variable missing!');
  console.error('\x1b[33m%s\x1b[0m', 'Please provide a write token to run the migration:');
  console.error('\x1b[36m%s\x1b[0m', 'PowerShell:');
  console.error('  $env:SANITY_API_WRITE_TOKEN="your_token_here"; node scripts/migrate-blogs.mjs');
  console.error('\x1b[36m%s\x1b[0m', 'Bash/macOS:');
  console.error('  SANITY_API_WRITE_TOKEN="your_token_here" node scripts/migrate-blogs.mjs');
  console.error('\x1b[31m%s\x1b[0m', '=======================================================');
  process.exit(1);
}

const client = createClient({
  projectId: '9asz4y68',
  dataset: 'production',
  apiVersion: '2024-03-01',
  token,
  useCdn: false,
});

function generateKey() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function parseHtmlToAst(html) {
  let cleaned = html
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<hr\s*\/?>/gi, '<hr></hr>')
    .replace(/<br\s*\/?>/gi, '<br></br>');

  const root = { type: 'element', tagName: 'root', children: [] };
  const stack = [root];

  const tokenRegex = /(<\/?([a-zA-Z0-9]+)(?:\s+[^>]*)?>|[^<]+)/g;
  let match;

  while ((match = tokenRegex.exec(cleaned)) !== null) {
    const token = match[0];
    const tagNameMatch = match[2];

    if (token.startsWith('</')) {
      const closeTag = tagNameMatch.toLowerCase();
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tagName === closeTag) {
          stack.splice(i);
          break;
        }
      }
    } else if (token.startsWith('<')) {
      const openTag = tagNameMatch.toLowerCase();
      const attrs = {};
      const attrRegex = /([a-zA-Z0-9_-]+)(?:=["']([^"']*)["'])?/g;
      const tagContent = token.slice(1, -1);
      let attrMatch;
      while ((attrMatch = attrRegex.exec(tagContent)) !== null) {
        if (attrMatch[1].toLowerCase() !== openTag) {
          attrs[attrMatch[1].toLowerCase()] = attrMatch[2] !== undefined ? attrMatch[2] : true;
        }
      }

      const node = {
        type: 'element',
        tagName: openTag,
        attributes: attrs,
        children: []
      };

      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else {
      if (token.length > 0) {
        stack[stack.length - 1].children.push({
          type: 'text',
          text: token
        });
      }
    }
  }

  return root;
}

function astToInline(nodes) {
  const children = [];
  const markDefs = [];

  function traverse(nodeList, activeMarks) {
    for (const node of nodeList) {
      if (node.type === 'text') {
        const text = decodeHtmlEntities(node.text);
        if (text.length > 0) {
          children.push({
            _type: 'span',
            _key: generateKey(),
            text,
            marks: Array.from(activeMarks),
          });
        }
      } else if (node.type === 'element') {
        const tag = node.tagName;
        if (tag === 'br') {
          children.push({
            _type: 'span',
            _key: generateKey(),
            text: '\n',
            marks: Array.from(activeMarks),
          });
        } else if (tag === 'b' || tag === 'strong') {
          const nextMarks = new Set(activeMarks);
          nextMarks.add('strong');
          traverse(node.children, nextMarks);
        } else if (tag === 'i' || tag === 'em') {
          const nextMarks = new Set(activeMarks);
          nextMarks.add('em');
          traverse(node.children, nextMarks);
        } else if (tag === 'u') {
          const nextMarks = new Set(activeMarks);
          nextMarks.add('underline');
          traverse(node.children, nextMarks);
        } else if (tag === 's' || tag === 'strike') {
          const nextMarks = new Set(activeMarks);
          nextMarks.add('strike-through');
          traverse(node.children, nextMarks);
        } else if (tag === 'code') {
          const nextMarks = new Set(activeMarks);
          nextMarks.add('code');
          traverse(node.children, nextMarks);
        } else if (tag === 'a') {
          const href = node.attributes?.href || '';
          const linkKey = generateKey();
          markDefs.push({
            _key: linkKey,
            _type: 'link',
            href,
          });
          const nextMarks = new Set(activeMarks);
          nextMarks.add(linkKey);
          traverse(node.children, nextMarks);
        } else {
          traverse(node.children, activeMarks);
        }
      }
    }
  }

  traverse(nodes, new Set());

  if (children.length === 0) {
    children.push({
      _type: 'span',
      _key: generateKey(),
      text: '',
      marks: [],
    });
  }

  return { children, markDefs };
}

function parseTableNode(tableNode) {
  const rows = [];

  function findRows(node) {
    if (node.type === 'element') {
      if (node.tagName === 'tr') {
        let isHeader = false;
        const cells = [];
        for (const cellNode of node.children) {
          if (cellNode.type === 'element' && (cellNode.tagName === 'th' || cellNode.tagName === 'td')) {
            if (cellNode.tagName === 'th') isHeader = true;
            function getCellText(n) {
              if (n.type === 'text') return n.text;
              return (n.children || []).map(getCellText).join('');
            }
            const cellText = decodeHtmlEntities(getCellText(cellNode).trim());
            cells.push(cellText);
          }
        }
        if (cells.length > 0) {
          rows.push({
            _key: generateKey(),
            _type: 'tableRow',
            isHeader,
            cells,
          });
        }
      } else {
        for (const child of node.children) {
          findRows(child);
        }
      }
    }
  }

  findRows(tableNode);

  return {
    _type: 'table',
    _key: generateKey(),
    rows,
  };
}

function processListItems(listNode, listType, level, blocks) {
  for (const child of listNode.children) {
    if (child.type === 'element') {
      if (child.tagName === 'li') {
        const inlineNodes = [];
        const nestedLists = [];

        for (const liChild of child.children) {
          if (liChild.type === 'element' && (liChild.tagName === 'ul' || liChild.tagName === 'ol')) {
            nestedLists.push(liChild);
          } else {
            inlineNodes.push(liChild);
          }
        }

        const { children, markDefs } = astToInline(inlineNodes);
        blocks.push({
          _type: 'block',
          _key: generateKey(),
          style: 'normal',
          listItem: listType,
          level,
          children,
          markDefs,
        });

        for (const nestedList of nestedLists) {
          const nestedType = nestedList.tagName === 'ul' ? 'bullet' : 'number';
          processListItems(nestedList, nestedType, level + 1, blocks);
        }
      } else if (child.tagName === 'ul' || child.tagName === 'ol') {
        const nestedType = child.tagName === 'ul' ? 'bullet' : 'number';
        processListItems(child, nestedType, level + 1, blocks);
      }
    }
  }
}

function jsxToPortableText(rawJsx) {
  const ast = parseHtmlToAst(rawJsx);
  const blocks = [];

  for (const node of ast.children) {
    if (node.type === 'text') {
      const text = decodeHtmlEntities(node.text).trim();
      if (text.length > 0) {
        blocks.push({
          _type: 'block',
          _key: generateKey(),
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: generateKey(),
              text,
              marks: [],
            },
          ],
          markDefs: [],
        });
      }
    } else if (node.type === 'element') {
      const tag = node.tagName;

      if (tag === 'hr') {
        blocks.push({
          _type: 'break',
          _key: generateKey(),
          style: 'lineBreak',
        });
      } else if (tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5') {
        const style = tag === 'h5' ? 'h4' : tag;
        const { children, markDefs } = astToInline(node.children);
        blocks.push({
          _type: 'block',
          _key: generateKey(),
          style,
          children,
          markDefs,
        });
      } else if (tag === 'p') {
        const { children, markDefs } = astToInline(node.children);
        blocks.push({
          _type: 'block',
          _key: generateKey(),
          style: 'normal',
          children,
          markDefs,
        });
      } else if (tag === 'blockquote') {
        const { children, markDefs } = astToInline(node.children);
        blocks.push({
          _type: 'block',
          _key: generateKey(),
          style: 'blockquote',
          children,
          markDefs,
        });
      } else if (tag === 'ul' || tag === 'ol') {
        const listType = tag === 'ul' ? 'bullet' : 'number';
        processListItems(node, listType, 1, blocks);
      } else if (tag === 'table') {
        blocks.push(parseTableNode(node));
      } else if (tag === 'div') {
        let aNode = null;
        function findA(n) {
          if (n.type === 'element') {
            if (n.tagName === 'a') {
              aNode = n;
              return;
            }
            for (const c of n.children) {
              findA(c);
              if (aNode) return;
            }
          }
        }
        findA(node);

        if (aNode) {
          const href = aNode.attributes?.href || '';
          function getText(n) {
            if (n.type === 'text') return n.text;
            return (n.children || []).map(getText).join('');
          }
          const text = decodeHtmlEntities(getText(aNode).trim());
          const linkKey = generateKey();
          blocks.push({
            _type: 'block',
            _key: generateKey(),
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: generateKey(),
                text,
                marks: ['strong', linkKey],
              },
            ],
            markDefs: [
              {
                _key: linkKey,
                _type: 'link',
                href,
              },
            ],
          });
        }
      }
    }
  }

  return blocks;
}

async function runMigration() {
  let blogsFile = path.resolve(__dirname, '../../tutorexel-v2/src/data/blogs.jsx');
  if (!fs.existsSync(blogsFile)) {
    blogsFile = path.resolve(__dirname, '../src/data/blogs.jsx');
  }
  console.log(`Reading source blogs from: ${blogsFile}`);
  const fileContent = fs.readFileSync(blogsFile, 'utf8');

  const posts = fileContent.split(/  \{\s*\n\s*id:\s*(\d+),/g);
  const parsedPosts = [];

  for (let i = 1; i < posts.length; i += 2) {
    const id = parseInt(posts[i], 10);
    const body = posts[i + 1];

    const slugMatch = body.match(/slug:\s*["']([^"']+)["']/);
    const dateMatch = body.match(/date:\s*["']([^"']+)["']/);
    const titleMatch = body.match(/title:\s*["']([^"']+)["']/);
    const categoryMatch = body.match(/category:\s*["']([^"']+)["']/);
    const imageMatch = body.match(/image:\s*["']([^"']+)["']/);
    const excerptMatch = body.match(/excerpt:\s*["']([^"']+)["']/);

    const contentStart = body.indexOf('content: (');
    const contentEnd = body.lastIndexOf('</>');
    const rawJsx = body.substring(contentStart + 10, contentEnd).trim();

    parsedPosts.push({
      id,
      slug: slugMatch ? slugMatch[1] : '',
      date: dateMatch ? dateMatch[1] : '',
      title: titleMatch ? titleMatch[1] : '',
      category: categoryMatch ? categoryMatch[1] : '',
      image: imageMatch ? imageMatch[1] : '',
      excerpt: excerptMatch ? excerptMatch[1] : '',
      rawJsx,
    });
  }

  console.log(`Found ${parsedPosts.length} posts to migrate.\n`);

  for (let i = 0; i < parsedPosts.length; i++) {
    const post = parsedPosts[i];
    const indexStr = `[${i + 1}/${parsedPosts.length}]`;
    console.log(`${indexStr} Processing "${post.title}" (${post.slug})...`);

    // 1. Upload main image
    let mainImageAsset = null;
    if (post.image) {
      let localImagePath = path.resolve(__dirname, '../../tutorexel-v2/public', post.image.replace(/^\//, ''));
      if (!fs.existsSync(localImagePath)) {
        localImagePath = path.resolve(__dirname, '../public', post.image.replace(/^\//, ''));
      }
      if (fs.existsSync(localImagePath)) {
        try {
          console.log(`  -> Uploading image: ${path.basename(localImagePath)}`);
          const stream = fs.createReadStream(localImagePath);
          const asset = await client.assets.upload('image', stream, {
            filename: path.basename(localImagePath),
          });
          mainImageAsset = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
            alt: post.title,
          };
          console.log(`  -> Uploaded asset ID: ${asset._id}`);
        } catch (uploadErr) {
          console.warn(`  -> Warning: Failed to upload image ${localImagePath}:`, uploadErr.message);
        }
      } else {
        console.warn(`  -> Warning: Local image file not found: ${localImagePath}`);
      }
    }

    // 2. Convert JSX to Portable Text blocks
    const bodyBlocks = jsxToPortableText(post.rawJsx);

    // 3. Prepare document
    const documentId = `post-${post.slug}`;
    const publishedAt = new Date(post.date).toISOString();

    const sanityDoc = {
      _id: documentId,
      _type: 'post',
      title: post.title,
      slug: {
        _type: 'slug',
        current: post.slug,
      },
      publishedAt,
      category: post.category,
      region: 'au',
      excerpt: post.excerpt,
      body: bodyBlocks,
    };

    if (mainImageAsset) {
      sanityDoc.mainImage = mainImageAsset;
    }

    // 4. Save to Sanity (idempotent createOrReplace)
    await client.createOrReplace(sanityDoc);
    console.log(`  ✓ Successfully migrated as document _id: "${documentId}"\n`);
  }

  console.log('\x1b[32m%s\x1b[0m', `=======================================================`);
  console.log('\x1b[32m%s\x1b[0m', `MIGRATION COMPLETE: All ${parsedPosts.length} posts migrated to Sanity (region: au).`);
  console.log('\x1b[32m%s\x1b[0m', `=======================================================`);
}

runMigration().catch((err) => {
  console.error('\x1b[31m%s\x1b[0m', 'Migration failed with error:');
  console.error(err);
  process.exit(1);
});
