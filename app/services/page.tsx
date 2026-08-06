"use client";

import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";

export default function ServicesPage() {
  const { t, lang } = useI18n();
  const caps = site.capabilities as any[];
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.services.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img src="/images/products/acide.png" alt="Travaux miniers" className="rounded-xl2 shadow-soft" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="section-title">{t.services.miningTitle}</h2>
            <p className="mt-4 text-text-gray">{t.services.mining}</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="section-title">{t.services.transportTitle}</h2>
            <p className="mt-4 text-text-gray">{t.services.transport}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {t.services.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-navy">
                  <span className="text-orange">✓</span> {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img src="/images/transport.png" alt="Transport" className="rounded-xl2 shadow-soft" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <h2 className="section-title text-center">{t.about.capabilitiesTitle}</h2>
          <p className="mt-2 text-center text-text-gray">{t.about.capabilitiesSubtitle}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caps.map((c, i) => (
              <Reveal key={c.key} delay={(i % 3) * 90}>
                <div className="card-hover card h-full border border-gray-light">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {lang === "en" ? c.titleEn : c.titleFr}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-text-gray">
                    {(lang === "en" ? c.itemsEn : c.itemsFr).map((it: string, j: number) => (
                      <li key={j} className="flex items-start gap-2"><span className="mt-1 text-orange">▹</span> {it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
