"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaHero, vaImages } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";

export default function VaHero() {
  const { lang } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Photo de fond */}
      <img
        src={vaImages.hero}
        alt={bi(vaHero.imageAlt, lang)}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Overlays : lisibilité du texte + ancrage identité ABICOM */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/92 to-navy/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/35 to-navy/80"
      />
      <div
        aria-hidden
        className="animate-grid-slow pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-px relative py-14 sm:py-20 lg:py-28">
        <div className="max-w-3xl animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-light" />
            {bi(vaHero.badge, lang)}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl">
            {vaHero.title}
          </h1>

          <p className="mt-4 font-heading text-base font-semibold uppercase tracking-[0.1em] text-orange-light sm:text-lg">
            {bi(vaHero.subtitle, lang)}
          </p>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-snug text-white sm:text-xl">
            {bi(vaHero.baseline, lang)}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">
            {bi(vaHero.description, lang)}
          </p>

          {/* Double CTA — ancre vers les deux parcours */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#visa" className="btn-primary w-full sm:w-auto">
              {bi(vaHero.ctaForeign, lang)}
            </a>
            <a
              href="#passeport"
              className="btn-secondary w-full border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy sm:w-auto"
            >
              {bi(vaHero.ctaCongolese, lang)}
            </a>
          </div>

          {/* Garde-fou : ABICOM n'est pas un service officiel */}
          <p className="mt-7 flex max-w-2xl items-start gap-2.5 text-xs leading-relaxed text-white/60 sm:text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-orange-light"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 7.5v.01" />
            </svg>
            {bi(vaHero.reassurance, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
