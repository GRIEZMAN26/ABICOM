import { getWpPosts, getWpPost, wpCover, stripHtml, isWordPressEnabled, WpPost } from "./wordpress";
import localPosts from "@/content/data/blog.json";

export interface Post {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  cover: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: string;
  content: string;
  contentEn: string;
  source: "wp" | "local";
  link?: string;
}

function normalizeWp(p: WpPost): Post {
  return {
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    titleEn: stripHtml(p.title.rendered),
    excerpt: stripHtml(p.excerpt.rendered).slice(0, 180),
    excerptEn: stripHtml(p.excerpt.rendered).slice(0, 180),
    cover: wpCover(p) ?? "/images/products/acide.png",
    category: "Blog",
    categoryEn: "Blog",
    date: p.date.slice(0, 10),
    readTime: "5 min",
    content: p.content.rendered,
    contentEn: p.content.rendered,
    source: "wp",
    link: p.link,
  };
}

export async function getPosts(): Promise<Post[]> {
  const local: Post[] = (localPosts as any[]).map((p) => ({ ...p, source: "local" as const }));
  if (!isWordPressEnabled()) return local;
  try {
    const wp = await getWpPosts();
    const wpPosts = wp.map(normalizeWp);
    // WP en premier, local ensuite
    return [...wpPosts, ...local];
  } catch {
    return local;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  if (isWordPressEnabled()) {
    try {
      const wp = await getWpPost(slug);
      if (wp) return normalizeWp(wp);
    } catch {
      /* fallback local */
    }
  }
  const found = (localPosts as any[]).find((p) => p.slug === slug);
  return found ? { ...found, source: "local" as const } : null;
}
