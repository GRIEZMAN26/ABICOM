"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { jlParticuliers, jlImages } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlParticuliers() {
  const { lang } = useI18n();

  return (
    <section className="section overflow-hidden bg-gray-light" id="particuliers">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image à gauche */}
        <Reveal className="order-2 lg:order-1">
          <figure className="relative">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img
                src={jlImages.particulier}
                alt={bi(jlParticuliers.imageAlt, lang)}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-2xl border-2 border-jardin/20"
            />
          </figure>
        </Reveal>

        {/* Texte à droite */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <div>
            <JlEyebrow>{bi(jlParticuliers.label, lang)}</JlEyebrow>
            <h2 className="section-title mt-5">{bi(jlParticuliers.title, lang)}</h2>
            <p className="mt-4 leading-relaxed text-text-gray">
              {bi(jlParticuliers.text, lang)}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {jlParticuliers.items.map((it, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-light bg-white px-4 py-3 text-sm font-medium text-navy shadow-soft"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-jardin" />
                  {bi(it, lang)}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary mt-8">
              {bi(jlParticuliers.cta, lang)}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
