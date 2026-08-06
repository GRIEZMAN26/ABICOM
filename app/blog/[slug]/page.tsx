"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import blog from "@/content/data/blog.json";

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const { t, lang } = useI18n();
  const posts = blog as any[];
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const body = (lang === "en" ? post.contentEn : post.content).split("\n").filter(Boolean);

  return (
    <>
      <article className="section pt-20">
        <div className="container-px max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-orange hover:underline">
            ← {t.blog.back}
          </Link>
          <span className="mt-4 block text-xs font-semibold uppercase text-orange">
            {lang === "en" ? post.categoryEn : post.category} · {post.date} · {post.readTime}
          </span>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            {lang === "en" ? post.titleEn : post.title}
          </h1>
          <img src={post.cover} alt={lang === "en" ? post.titleEn : post.title} className="mt-6 rounded-xl2 shadow-soft" />
          <div className="prose mt-6 space-y-4 leading-relaxed text-text-gray">
            {body.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
