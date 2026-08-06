"use client";

import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { products } from "@/content/products";

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="gradient-navy py-16 text-white">
        <div className="container-px">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{t.products.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{t.products.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
