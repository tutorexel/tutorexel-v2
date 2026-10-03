import { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  region: "us",
});

export default async function UsBlogPage() {
  const posts = await getPostsByRegion("us");
  return <BlogListView posts={posts} region="us" />;
}

