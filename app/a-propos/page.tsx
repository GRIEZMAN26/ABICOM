"use client";

import Capabilities from "@/components/Capabilities";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";

export default function AboutPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-light">
            ● {site.fullName}
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl">{t.about.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img src="/images/apropos.webp" alt="ABICOM" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="card-hover card border border-gray-light">
                <h3 className="font-heading text-xl font-bold text-navy">À propos d'ABLITY COMPANY SARL</h3>
                <p className="mt-2 text-text-gray">{lang === "en" ? t.about.aboutEn : t.about.aboutFr}</p>
              </div>
              <div className="card-hover card border border-gray-light">
                <h3 className="font-heading text-xl font-bold text-orange">{t.about.missionTitle}</h3>
                <p className="mt-2 text-text-gray">{t.about.mission}</p>
              </div>
              <div className="card-hover card border border-gray-light">
                <h3 className="font-heading text-xl font-bold text-orange">{t.about.visionTitle}</h3>
                <p className="mt-2 text-text-gray">{t.about.vision}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Capabilities />

      <section className="section bg-gray-light">
        <div className="container-px">
          <h2 className="section-title text-center">{t.about.legalTitle}</h2>
          <div className="mx-auto mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/CEO.png"
                alt={site.contact.responsable}
                className="h-48 w-48 rounded-full object-cover shadow-soft ring-4 ring-orange/20"
              />
              <p className="mt-4 font-heading text-lg font-bold text-navy">{site.contact.responsable}</p>
              <p className="text-sm text-orange">{site.contact.role}</p>
            </div>
            <div className="grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="card-hover card border border-gray-light text-center">
                <div className="text-xs font-semibold uppercase text-text-gray">RCCM</div>
                <div className="mt-1 font-semibold text-navy">{site.legal.rccm}</div>
              </div>
              <div className="card-hover card border border-gray-light text-center">
                <div className="text-xs font-semibold uppercase text-text-gray">NIF</div>
                <div className="mt-1 font-semibold text-navy">{site.legal.nif}</div>
              </div>
              <div className="card-hover card border border-gray-light text-center">
                <div className="text-xs font-semibold uppercase text-text-gray">TVA</div>
                <div className="mt-1 font-semibold text-navy">{site.legal.tva}</div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-text-gray">📍 {site.contact.address}</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
