"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Capabilities from "@/components/Capabilities";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { products } from "@/content/products";

function Values() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container-px">
        <div className="text-center">
          <h2 className="section-title">{t.values.title}</h2>
          <p className="mt-2 text-text-gray">{t.values.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((v, i) => (
            <Reveal key={i} delay={i * 90} as="div">
              <div className="card-hover card h-full border border-gray-light text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy">{v.t}</h3>
                <p className="mt-1 text-sm text-text-gray">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const { t } = useI18n();
  return (
    <section className="section bg-gray-light">
      <div className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">{t.products.title}</h2>
            <p className="mt-2 text-text-gray">{t.products.subtitle}</p>
          </div>
          <Link href="/produits" className="btn-secondary text-sm">
            {t.products.viewAll}
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container-px">
        <h2 className="section-title text-center">{t.services.title}</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-hover card h-full border border-gray-light">
              <h3 className="font-heading text-xl font-bold text-navy">{t.services.miningTitle}</h3>
              <p className="mt-3 text-text-gray">{t.services.mining}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-hover card h-full border border-gray-light">
              <h3 className="font-heading text-xl font-bold text-navy">{t.services.transportTitle}</h3>
              <p className="mt-3 text-text-gray">{t.services.transport}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <FeaturedProducts />
      <Capabilities />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
