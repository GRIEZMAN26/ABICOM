// Client WordPress headless (REST API)
// Configurez WORDPRESS_URL dans .env.local (ex: https://mon-site.com)
// Le blog du site ira chercher les articles WP si l'URL est définie,
// sinon il utilise les articles locaux (content/data/blog.json).

export interface WpPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url: string }> };
  link?: string;
}

const WP_URL = process.env.WORDPRESS_URL?.replace(/\/$/, "");

export function isWordPressEnabled(): boolean {
  return Boolean(WP_URL);
}

export async function getWpPosts(perPage = 20): Promise<WpPost[]> {
  if (!WP_URL) return [];
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`WordPress fetch failed: ${res.status}`);
  return (await res.json()) as WpPost[];
}

export async function getWpPost(slug: string): Promise<WpPost | null> {
  if (!WP_URL) return null;
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  const arr = (await res.json()) as WpPost[];
  return arr[0] ?? null;
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function wpCover(post: WpPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}
