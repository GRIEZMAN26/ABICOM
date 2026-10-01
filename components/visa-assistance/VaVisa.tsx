"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaVisa } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaVisa() {
  const { lang } = useI18n();

  return (
    <section className="section scroll-mt-24" id="visa">
      <div className="container-px">
        <Reveal className="max-w-3xl">
          <VaEyebrow>{bi(vaVisa.label, lang)}</VaEyebrow>
          <h2 className="section-title mt-5">{bi(vaVisa.title, lang)}</h2>
          <p className="mt-4 text-text-gray">{bi(vaVisa.text, lang)}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vaVisa.items.map((it, i) => (
            <Reveal key={it.n} delay={i * 90} className="h-full">
              <article className="card-hover card h-full border border-gray-light">
                <span className="font-heading text-sm font-extrabold tracking-[0.2em] text-orange">
                  {it.n}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                  {bi(it.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">
                  {bi(it.text, lang)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Rappel du cadre légal */}
        <Reveal>
          <p className="mt-8 flex items-start gap-2.5 rounded-xl2 border border-gray-light bg-gray-light px-5 py-4 text-sm text-text-gray">
            <VaIcon name="info" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orange" />
            <span>
              {lang === "en"
                ? "ABICOM assists and facilitates your procedures. The issuance of visas remains the responsibility of the competent authorities."
                : "ABICOM assiste et facilite vos démarches. La délivrance des visas reste du ressort des autorités compétentes."}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
