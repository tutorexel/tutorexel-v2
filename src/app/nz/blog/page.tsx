import { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  region: "nz",
});

export default async function NzBlogPage() {
  const posts = await getPostsByRegion("nz");
  return <BlogListView posts={posts} region="nz" />;
}

