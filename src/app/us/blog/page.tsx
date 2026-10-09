import type { Metadata } from "next";
import { getPostsByRegion } from "@/sanity/client";
import BlogListView from "@/components/blog/BlogListView";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Learning Hub: State Tests and Study Tips | TutorExel",
  description:
    "Guides and tips for US parents, from state test and MAP Growth preparation to choosing an online tutor and building study habits.",
  alternates: { canonical: "https://www.tutorexel.com/us/blog" },
};

export default async function UsBlogPage() {
  const posts = await getPostsByRegion("us");
  return <BlogListView posts={posts} region="us" />;
}
