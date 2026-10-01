"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { jlGallery } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlGallery() {
  const { lang } = useI18n();

  return (
    <section className="section" id="galerie">
      <div className="container-px">
        <Reveal className="text-center">
          <JlEyebrow>{bi(jlGallery.label, lang)}</JlEyebrow>
          <h2 className="section-title mx-auto mt-5 max-w-3xl">
            {bi(jlGallery.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-text-gray">
            {bi(jlGallery.text, lang)}
          </p>
        </Reveal>

        {/* Grille : 2 col mobile / 2 col tablette / 3 col desktop, ratios cohérents */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {jlGallery.items.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90}>
              <figure className="group relative overflow-hidden rounded-xl2 shadow-soft">
                <img
                  src={g.src}
                  alt={bi(g.alt, lang)}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-95"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                    {bi(g.cat, lang)}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
