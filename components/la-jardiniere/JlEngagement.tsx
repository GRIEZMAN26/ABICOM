"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { jlEngagement } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlIcon from "./JlIcon";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlEngagement() {
  const { lang } = useI18n();

  return (
    <section className="gradient-navy section text-white">
      <div className="container-px">
        <Reveal className="text-center">
          <JlEyebrow tone="dark">{bi(jlEngagement.label, lang)}</JlEyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-extrabold sm:text-4xl">
            {bi(jlEngagement.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {bi(jlEngagement.text, lang)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jlEngagement.items.map((it, i) => (
            <Reveal key={it.title.fr} delay={i * 90}>
              <div className="group h-full rounded-xl2 border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-jardin/40 hover:bg-white/[0.08]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jardin/20 text-jardin-light transition duration-300 group-hover:bg-jardin group-hover:text-white">
                  <JlIcon name={it.icon} />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-white">
                  {bi(it.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
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
