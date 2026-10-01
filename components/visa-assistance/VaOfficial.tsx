"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaOfficial } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaOfficial() {
  const { lang } = useI18n();
  const { visaLink, passportLink } = vaOfficial;

  return (
    <section className="section bg-gray-light">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-xl2 border border-gray-light bg-white p-7 shadow-soft sm:p-10">
            <div className="flex flex-col items-center text-center">
              <VaEyebrow>{bi(vaOfficial.label, lang)}</VaEyebrow>
              <h2 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                {bi(vaOfficial.title, lang)}
              </h2>
              <p className="mt-4 max-w-2xl text-text-gray">
                {bi(vaOfficial.text, lang)}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {/* Les liens officiels sont renseignés par ABICOM dans
                  content/visa-assistance.ts — aucun lien n'est inventé ici. */}
              {visaLink.href ? (
                <a
                  href={visaLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-sm sm:w-auto"
                >
                  {bi(visaLink.label, lang)}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="btn-secondary w-full cursor-not-allowed select-none text-sm opacity-55 sm:w-auto"
                >
                  {bi(visaLink.label, lang)}
                </span>
              )}

              {passportLink.href ? (
                <a
                  href={passportLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-sm sm:w-auto"
                >
                  {bi(passportLink.label, lang)}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="btn-secondary w-full cursor-not-allowed select-none text-sm opacity-55 sm:w-auto"
                >
                  {bi(passportLink.label, lang)}
                </span>
              )}
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-text-gray">
              <VaIcon name="info" className="h-4 w-4 shrink-0 text-orange" />
              {bi(vaOfficial.pendingNote, lang)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
