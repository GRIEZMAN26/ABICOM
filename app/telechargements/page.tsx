"use client";

import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import downloads from "@/content/data/downloads.json";

export default function DownloadsPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.downloads.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.downloads.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d: any) => (
            <div key={d.slug} className="card flex flex-col border border-gray-light">
              <div className="flex h-32 items-center justify-center rounded-xl bg-gray-light text-orange">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading font-bold text-navy">{t.lang === "en" ? d.titleEn : d.title}</h3>
              <p className="mt-1 flex-1 text-sm text-text-gray">{t.lang === "en" ? d.descriptionEn : d.description}</p>
              <a href={d.file} download className="btn-primary mt-4 text-sm">
                {t.downloads.download} · {d.size}
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
