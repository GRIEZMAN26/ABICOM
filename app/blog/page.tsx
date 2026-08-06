"use client";

import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import blog from "@/content/data/blog.json";

export default function BlogPage() {
  const { t, lang } = useI18n();
  const posts = blog as any[];
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.blog.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.blog.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card flex flex-col overflow-hidden border border-gray-light">
              <div className="mb-4 h-44 overflow-hidden rounded-xl bg-gray-light">
                <img src={p.cover} alt={lang === "en" ? p.titleEn : p.title} className="h-full w-full object-cover transition hover:scale-105" />
              </div>
              <span className="text-xs font-semibold uppercase text-orange">
                {lang === "en" ? p.categoryEn : p.category} · {p.date}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy">
                {lang === "en" ? p.titleEn : p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-gray">
                {lang === "en" ? p.excerptEn : p.excerpt}
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
