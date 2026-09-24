import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export default async function CaBlogPage() {
  const posts = await getPostsByRegion("ca");
  return <BlogListView posts={posts} region="ca" />;
}
