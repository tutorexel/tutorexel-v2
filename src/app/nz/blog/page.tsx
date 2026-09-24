import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export default async function NzBlogPage() {
  const posts = await getPostsByRegion("nz");
  return <BlogListView posts={posts} region="nz" />;
}
