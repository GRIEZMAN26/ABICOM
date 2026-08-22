"use client";

import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import type { Post } from "@/lib/posts";

export default function BlogArticleClient({ post }: { post: Post }) {
  const { t, lang } = useI18n();
  const isEn = lang === "en";
  // Contenu WP = HTML ; contenu local = texte simple
  const body = post.source === "wp" ? null : (isEn ? post.contentEn : post.content).split("\n").filter(Boolean);
  return (
    <>
      <article className="section pt-20">
        <div className="container-px max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-orange hover:underline">
            ← {t.blog.back}
          </Link>
          <span className="mt-4 block text-xs font-semibold uppercase text-orange">
            {isEn ? post.categoryEn : post.category} · {post.date} · {post.readTime}
          </span>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            {isEn ? post.titleEn : post.title}
          </h1>
          <img src={post.cover} alt={isEn ? post.titleEn : post.title} className="mt-6 rounded-xl2 shadow-soft" />
          <div className="prose mt-6 max-w-none space-y-4 leading-relaxed text-text-gray">
            {body ? (
              body.map((para: string, i: number) => <p key={i}>{para}</p>)
            ) : (
              <div dangerouslySetInnerHTML={{ __html: isEn ? post.contentEn : post.content }} />
            )}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
