"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { jlCta, jlImages } from "@/content/la-jardiniere";
import { bi } from "./bi";
import Reveal from "@/components/Reveal";

export default function JlCta() {
  const { lang } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={jlImages.heroAlt}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy/80" />
      <div
        aria-hidden
        className="glow-dot pointer-events-none absolute left-1/2 top-0 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-jardin/25 blur-3xl"
      />

      <div className="container-px py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {bi(jlCta.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{bi(jlCta.text, lang)}</p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              {bi(jlCta.primary, lang)}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy sm:w-auto"
            >
              {bi(jlCta.secondary, lang)}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
