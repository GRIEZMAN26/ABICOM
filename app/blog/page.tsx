import BlogListClient from "@/components/BlogListClient";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogListClient posts={posts} />;
}
