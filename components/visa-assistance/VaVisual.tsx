"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaVisual } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import Reveal from "@/components/Reveal";

export default function VaVisual() {
  const { lang } = useI18n();

  return (
    <section className="section bg-gray-light">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <VaEyebrow>{bi(vaVisual.label, lang)}</VaEyebrow>
          <h2 className="section-title mt-5">{bi(vaVisual.title, lang)}</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vaVisual.items.map((it, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <figure className="group h-full overflow-hidden rounded-xl2 shadow-soft">
                <img
                  src={it.src}
                  alt={bi(it.alt, lang)}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
