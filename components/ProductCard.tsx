"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { Product } from "@/content/products";

export default function ProductCard({ p }: { p: Product }) {
  const { t } = useI18n();
  const wa = `https://wa.me/243824933331?text=${encodeURIComponent(
    `Bonjour ABICOM, je souhaite un devis pour : ${p.name} ${p.formula ?? ""}`
  )}`;
  return (
    <article className="card-hover card flex flex-col border border-gray-light">
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gray-light">
        {p.image ? (
          <img src={p.image} alt={p.name} className="h-full w-full object-contain transition group-hover:scale-105" />
        ) : (
          <span className="font-heading text-xl font-bold text-navy/40">{p.formula}</span>
        )}
      </div>
      <h3 className="font-heading text-lg font-bold text-navy">
        {p.name}{p.formula ? <span className="text-orange"> {p.formula}</span> : null}
      </h3>
      <dl className="mt-3 space-y-1 text-sm text-text-gray">
        <div><dt className="inline font-semibold text-navy">{t.products.application} : </dt><dd className="inline">{p.application}</dd></div>
        <div><dt className="inline font-semibold text-navy">{t.products.packaging} : </dt><dd className="inline">{p.packaging}</dd></div>
        <div><dt className="inline font-semibold text-navy">{t.products.purity} : </dt><dd className="inline">{p.purity}</dd></div>
        <div>
          <dt className="inline font-semibold text-navy">{t.products.availability} : </dt>
          <dd className="inline">
            <span className="rounded-full bg-orange/10 px-2 py-0.5 text-xs font-semibold text-orange">{p.availability}</span>
          </dd>
        </div>
      </dl>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 text-sm">
        {t.products.quote}
      </a>
    </article>
  );
}
