"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { vaCorporate, vaImages } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaCorporate() {
  const { lang } = useI18n();

  return (
    <section className="section overflow-hidden bg-navy text-white">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <VaEyebrow tone="dark">{bi(vaCorporate.label, lang)}</VaEyebrow>
              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {bi(vaCorporate.title, lang)}
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                {bi(vaCorporate.text, lang)}
              </p>

              {/* Secteurs — tags sobres */}
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {vaCorporate.sectors.map((s, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85"
                  >
                    {bi(s, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img
                src={vaImages.visa}
                alt={bi(vaCorporate.imageAlt, lang)}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Encadré entreprises multi-collaborateurs */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-6 rounded-xl2 border border-white/12 bg-white/[0.06] p-7 backdrop-blur sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange-light">
                <VaIcon name="globe" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {bi(vaCorporate.calloutTitle, lang)}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                  {bi(vaCorporate.calloutText, lang)}
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-primary w-full shrink-0 whitespace-nowrap px-6 py-3 text-sm lg:w-auto"
            >
              {bi(vaCorporate.cta, lang)}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
