import { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  region: "ca",
});

export default async function CaBlogPage() {
  const posts = await getPostsByRegion("ca");
  return <BlogListView posts={posts} region="ca" />;
}

