"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { jlApproach } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlApproach() {
  const { lang } = useI18n();

  return (
    <section className="section" id="approche">
      <div className="container-px">
        <Reveal className="text-center">
          <JlEyebrow>{bi(jlApproach.label, lang)}</JlEyebrow>
          <h2 className="section-title mt-5">{bi(jlApproach.title, lang)}</h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Ligne de liaison — desktop (horizontale) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-jardin/35 to-transparent lg:block"
          />

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {jlApproach.steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 110} className="relative">
                {/* Ligne verticale — mobile / tablette */}
                {i < jlApproach.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[27px] top-14 hidden h-[calc(100%-1rem)] w-px bg-jardin/25 sm:block lg:hidden"
                  />
                )}

                <div className="flex gap-4 lg:block">
                  {/* Pastille */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-jardin/25 bg-white font-heading text-lg font-extrabold text-jardin shadow-soft">
                    {s.n}
                  </div>

                  <div className="pb-2 lg:mt-6 lg:pr-4">
                    <h3 className="font-heading text-base font-bold uppercase tracking-wide text-navy">
                      {bi(s.title, lang)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-gray">
                      {bi(s.text, lang)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
