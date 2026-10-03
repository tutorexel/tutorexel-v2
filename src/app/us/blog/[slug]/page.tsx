import { Metadata } from "next";
import { buildMetadata, getRegionalAlternates, REGION_OG_LOCALE_MAP, INDEXABLE_ROBOTS, NOINDEX_ROBOTS } from "@/utils/seo";
import { notFound, permanentRedirect } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/utils/schema";
import {
  getPostBySlugAndRegion,
  getAllSlugsByRegion,
  getRelatedPosts,
} from "@/sanity/client";
import { getPostImageUrl } from "@/sanity/image";
import BlogArticleView from "@/components/blog/BlogArticleView";
import { blogs as localBlogs } from "@/data/blogs";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugsByRegion("us");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugAndRegion(slug, "us");
  if (!post) {
    const auPost = await getPostBySlugAndRegion(slug, "au");
    if (auPost) {
      return {
        title: `${auPost.title} | TutorExel`,
      };
    }
    return { title: "Post Not Found | TutorExel" };
  }

  const isSample = slug === "sample-article-us" || slug.startsWith("sample-article");
  if (isSample || post.noindex) {
    return buildMetadata({
      title: post.metaTitle?.trim() || `${post.title} | TutorExel`,
      description: post.metaDescription?.trim() || post.dek?.trim() || post.excerpt || "",
      path: `/blog/${post.slug}`,
      region: "us",
      noindex: true,
    });
  }

  const imgSrc = getPostImageUrl(post.mainImage, post.imageUrl);
  const metaTitle = post.metaTitle?.trim() || `${post.title} | TutorExel`;
  const metaDescription = post.metaDescription?.trim() || post.dek?.trim() || post.excerpt || "";
  const alternates = getRegionalAlternates('/blog/' + post.slug, 'us');
  const canonicalUrl = alternates.canonical;

  return {
    title: metaTitle,
    description: metaDescription,
    robots: post.noindex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "TutorExel",
      locale: REGION_OG_LOCALE_MAP.us,
      type: "article",
      images: [{ url: imgSrc, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imgSrc],
    },
    alternates,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlugAndRegion(slug, "us");

  if (!post) {
    const auPost = await getPostBySlugAndRegion(slug, "au");
    if (auPost) {
      permanentRedirect(`/blog/${slug}`);
    }
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.region || "us");
  const localFallback = localBlogs.find((b) => b.slug === slug);
  const featuredImgSrc = getPostImageUrl(post.mainImage, post.imageUrl);

  const datePublished = post.publishedAt
    ? new Date(post.publishedAt).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const dateModified = post._updatedAt
    ? new Date(post._updatedAt).toISOString().split('T')[0]
    : datePublished;

  const blogPostSchema = createBlogPostingSchema({
    title: post.title,
    excerpt: post.excerpt || post.dek || "",
    image: featuredImgSrc,
    datePublished,
    dateModified,
    slug: post.slug,
    region: "us",
    author: post.author || "TutorExel",
  });

  const blogBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/us" },
    { name: "Learning Hub", url: "https://www.tutorexel.com/us/blog" },
    { name: post.title, url: `https://www.tutorexel.com/us/blog/${post.slug}` },
  ]);


  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={blogBreadcrumbSchema} />
      <BlogArticleView
        post={post}
        relatedPosts={relatedPosts}
        region="us"
        localFallback={localFallback}
      />
    </>
  );
}
