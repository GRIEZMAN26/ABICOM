"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { jlHero, jlImages } from "@/content/la-jardiniere";
import { bi } from "./bi";

export default function JlHero() {
  const { lang } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Photo de fond */}
      <img
        src={jlImages.hero}
        alt={bi(jlHero.imageAlt, lang)}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Overlays : lisibilité du texte + ancrage identité ABICOM */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/35"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/25 to-navy/75"
      />
      <div
        aria-hidden
        className="animate-grid-slow pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="glow-dot pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-jardin/30 blur-3xl"
      />

      <div className="container-px relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-jardin-light" />
            {bi(jlHero.badge, lang)}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl">
            {jlHero.title}
          </h1>

          <p className="mt-4 font-heading text-base font-semibold uppercase tracking-[0.12em] text-jardin-light sm:text-lg">
            {jlHero.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-xl font-semibold text-white sm:text-2xl">
            {jlHero.baseline}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">
            {bi(jlHero.description, lang)}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="btn-primary animate-pulse-glow w-full sm:w-auto">
              {bi(jlHero.ctaPrimary, lang)}
            </Link>
            <a
              href="#activites"
              className="btn-secondary w-full border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy sm:w-auto"
            >
              {bi(jlHero.ctaSecondary, lang)}
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {jlHero.stats.map((s) => (
              <div
                key={s.n}
                className="rounded-xl2 border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="font-heading text-lg font-extrabold text-jardin-light">
                  {s.n}
                </div>
                <div className="mt-0.5 text-xs text-white/65">{bi(s.l, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
