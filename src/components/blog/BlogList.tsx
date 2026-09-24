"use client";

import BlogListView from "./BlogListView";
import { SanityPost } from "@/sanity/types";

interface BlogListProps {
  posts: SanityPost[];
  region?: string;
}

export default function BlogList({ posts = [], region = "au" }: BlogListProps) {
  return <BlogListView posts={posts} region={region} />;
}
