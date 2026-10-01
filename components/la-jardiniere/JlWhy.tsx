"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { jlWhy } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlIcon from "./JlIcon";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlWhy() {
  const { lang } = useI18n();

  return (
    <section className="section bg-gray-light">
      <div className="container-px">
        <Reveal className="text-center">
          <JlEyebrow>{bi(jlWhy.label, lang)}</JlEyebrow>
          <h2 className="section-title mx-auto mt-5 max-w-3xl">
            {bi(jlWhy.title, lang)}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-gray">{bi(jlWhy.text, lang)}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jlWhy.items.map((it, i) => (
            <Reveal key={it.title.fr} delay={i * 90}>
              <div className="group h-full rounded-xl2 border border-gray-light bg-white p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-jardin/30">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-jardin-light text-jardin transition duration-300 group-hover:bg-jardin group-hover:text-white">
                  <JlIcon name={it.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-navy">
                  {bi(it.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">
                  {bi(it.text, lang)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
