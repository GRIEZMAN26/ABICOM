"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaProcess } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import Reveal from "@/components/Reveal";

export default function VaProcess() {
  const { lang } = useI18n();

  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="text-center">
          <VaEyebrow>{bi(vaProcess.label, lang)}</VaEyebrow>
          <h2 className="section-title mt-5">{bi(vaProcess.title, lang)}</h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Ligne de liaison — desktop (horizontale) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-orange/35 to-transparent lg:block"
          />

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {vaProcess.steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 110} className="relative">
                {/* Ligne verticale — mobile (1 colonne) uniquement */}
                {i < vaProcess.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[27px] top-14 h-[calc(100%-1rem)] w-px bg-orange/25 sm:hidden"
                  />
                )}

                <div className="flex gap-4 lg:block">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange/25 bg-white font-heading text-lg font-extrabold text-orange shadow-soft">
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
