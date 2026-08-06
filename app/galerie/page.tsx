"use client";

import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import gallery from "@/content/data/gallery.json";

export default function GalleryPage() {
  const { t, lang } = useI18n();
  const g = gallery as any;
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.gallery.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.gallery.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <h2 className="section-title mb-6">Photos</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.photos.map((p: any, i: number) => (
              <div key={i} className="overflow-hidden rounded-xl2 shadow-soft">
                <img src={p.src} alt={lang === "en" ? p.altEn : p.alt} className="h-56 w-full object-cover transition hover:scale-105" />
              </div>
            ))}
          </div>

          <h2 className="section-title mb-6 mt-12">Vidéos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {g.videos.map((v: any, i: number) => (
              <div key={i} className="flex aspect-video items-center justify-center rounded-xl2 border border-dashed border-gray-300 bg-gray-light text-center text-text-gray">
                {v.url ? (
                  <video src={v.url} controls className="h-full w-full rounded-xl2" />
                ) : (
                  <span>🎬 {lang === "en" ? v.titleEn : v.title} <br /><small>(URL à configurer)</small></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
