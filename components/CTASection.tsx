"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function CTASection() {
  const { t } = useI18n();
  return (
    <section className="gradient-navy py-20 text-white">
      <div className="container-px relative text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange/30 blur-3xl" />
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">{t.cta.subtitle}</p>
        <Link href="/contact" className="btn-primary mt-8">
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
