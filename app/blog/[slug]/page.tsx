import { notFound } from "next/navigation";
import BlogArticleClient from "@/components/BlogArticleClient";
import { getPost } from "@/lib/posts";

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return <BlogArticleClient post={post} />;
}
