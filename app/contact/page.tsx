"use client";

import ContactForms from "@/components/ContactForms";
import CTASection from "@/components/CTASection";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";

export default function ContactPage() {
  const { t } = useI18n();
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapsQuery)}&output=embed`;
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForms />
          </div>
          <aside className="space-y-4">
            <div className="card border border-gray-light">
              <h3 className="font-heading font-bold text-navy">{t.contact.mapTitle}</h3>
              <p className="mt-2 text-sm text-text-gray">{site.contact.address}</p>
              <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full text-sm">
                {t.contact.whatsapp}
              </a>
            </div>
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <iframe
                title="ABICOM location"
                src={mapsSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2]"
              />
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
