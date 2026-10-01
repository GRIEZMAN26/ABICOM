"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { vaPaths } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaPaths() {
  const { lang } = useI18n();

  return (
    <section className="section bg-gray-light">
      <div className="container-px">
        <Reveal className="text-center">
          <VaEyebrow>{bi(vaPaths.label, lang)}</VaEyebrow>
          <h2 className="section-title mt-5">{bi(vaPaths.title, lang)}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {vaPaths.items.map((it, i) => (
            <Reveal key={it.key} delay={i * 120} className="h-full">
              <article className="card-hover card flex h-full flex-col border border-gray-light">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <VaIcon name={it.icon} className="h-4 w-4 text-orange-light" />
                  {bi(it.badge, lang)}
                </span>

                <h3 className="mt-5 font-heading text-2xl font-extrabold text-navy">
                  {bi(it.title, lang)}
                </h3>

                <div className="mt-4 flex-1 space-y-3">
                  {it.paragraphs.map((p, k) => (
                    <p key={k} className="text-text-gray">
                      {bi(p, lang)}
                    </p>
                  ))}
                </div>

                <a href={it.href} className="btn-primary mt-7 w-full text-sm">
                  {bi(it.cta, lang)}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
