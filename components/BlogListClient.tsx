"use client";

import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import type { Post } from "@/lib/posts";

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const { t, lang } = useI18n();
  const isEn = lang === "en";
  return (
    <>
      <section className="section">
        <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.source + p.slug} href={`/blog/${p.slug}`} className="card flex flex-col overflow-hidden border border-gray-light">
              <div className="mb-4 h-44 overflow-hidden rounded-xl bg-gray-light">
                <img src={p.cover} alt={isEn ? p.titleEn : p.title} className="h-full w-full object-cover transition hover:scale-105" />
              </div>
              <span className="text-xs font-semibold uppercase text-orange">
                {isEn ? p.categoryEn : p.category} · {p.date}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy">
                {isEn ? p.titleEn : p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-gray">
                {isEn ? p.excerptEn : p.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                {t.blog.read} →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
