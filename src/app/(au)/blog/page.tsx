import { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  region: "au",
});

export default async function BlogPage() {
  const posts = await getPostsByRegion("au");
  return <BlogListView posts={posts} region="au" />;
}

