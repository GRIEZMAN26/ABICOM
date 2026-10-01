"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { jlB2B, jlImages } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlIcon from "./JlIcon";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlB2B() {
  const { lang } = useI18n();

  return (
    <section className="section overflow-hidden" id="entreprises">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <JlEyebrow>{bi(jlB2B.label, lang)}</JlEyebrow>
              <h2 className="section-title mt-5">{bi(jlB2B.title, lang)}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-text-gray">
                {bi(jlB2B.text, lang)}
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                {bi(jlB2B.cta, lang)}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative">
              <div className="overflow-hidden rounded-xl2 shadow-soft">
                <img
                  src={jlImages.entreprise}
                  alt={bi(jlB2B.imageAlt, lang)}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-36 w-36 rounded-full bg-jardin/15 blur-2xl"
              />
            </figure>
          </Reveal>
        </div>

        {/* 6 blocs */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jlB2B.items.map((it, i) => (
            <Reveal key={it.title.fr} delay={(i % 3) * 80}>
              <div className="group h-full rounded-xl2 border border-gray-light bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-jardin/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-orange-light transition duration-300 group-hover:bg-jardin group-hover:text-white">
                  <JlIcon name={it.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">
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
