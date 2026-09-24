import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export default async function UsBlogPage() {
  const posts = await getPostsByRegion("us");
  return <BlogListView posts={posts} region="us" />;
}
