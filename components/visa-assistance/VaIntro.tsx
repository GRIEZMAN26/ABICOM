"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaIntro, vaImages } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaIntro() {
  const { lang } = useI18n();

  return (
    <section className="section">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* GAUCHE — texte */}
        <Reveal>
          <div>
            <VaEyebrow>{bi(vaIntro.label, lang)}</VaEyebrow>
            <h2 className="section-title mt-5">{bi(vaIntro.title, lang)}</h2>

            <div className="mt-6 space-y-4">
              {vaIntro.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === vaIntro.paragraphs.length - 1
                      ? "border-l-2 border-orange pl-4 text-sm italic text-text-gray"
                      : "text-text-gray"
                  }
                >
                  {bi(p, lang)}
                </p>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {vaIntro.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-navy">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <VaIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {bi(pt, lang)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* DROITE — image professionnelle */}
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-xl2 shadow-soft">
            <img
              src={vaImages.assistance}
              alt={bi(vaIntro.imageAlt, lang)}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
