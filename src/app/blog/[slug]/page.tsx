import { Metadata } from "next";
import { getRegionalAlternates } from "@/utils/seo";
import { notFound } from "next/navigation";
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
  const slugs = await getAllSlugsByRegion("au");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugAndRegion(slug, "au");
  if (!post) return { title: "Post Not Found | TutorExel" };

  const imgSrc = getPostImageUrl(post.mainImage, post.imageUrl);
  const metaTitle = post.metaTitle?.trim() || `${post.title} | TutorExel`;
  const metaDescription = post.metaDescription?.trim() || post.dek?.trim() || post.excerpt || "";

  return {
    title: metaTitle,
    description: metaDescription,
    robots: post.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://tutorexel.com/blog/${post.slug}`,
      siteName: "TutorExel",
      locale: "en",
      type: "article",
      images: [{ url: imgSrc, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imgSrc],
    },
    alternates: getRegionalAlternates('/blog/' + post.slug, 'au'),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlugAndRegion(slug, "au");

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.region || "au");
  const localFallback = localBlogs.find((b) => b.slug === slug);
  const featuredImgSrc = getPostImageUrl(post.mainImage, post.imageUrl);

  const datePublished = post.publishedAt
    ? new Date(post.publishedAt).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const blogPostSchema = createBlogPostingSchema({
    title: post.title,
    excerpt: post.excerpt || post.dek || "",
    image: featuredImgSrc,
    datePublished,
    slug: post.slug,
  });

  const blogBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Learning Hub", url: "https://tutorexel.com/blog" },
    { name: post.title, url: `https://tutorexel.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={blogBreadcrumbSchema} />
      <BlogArticleView
        post={post}
        relatedPosts={relatedPosts}
        region="au"
        localFallback={localFallback}
      />
    </>
  );
}
