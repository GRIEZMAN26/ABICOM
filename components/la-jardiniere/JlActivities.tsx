"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { jlActivities } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlIcon from "./JlIcon";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlActivities() {
  const { lang } = useI18n();

  return (
    <section className="section bg-gray-light" id="activites">
      <div className="container-px">
        <Reveal className="text-center">
          <JlEyebrow>{bi(jlActivities.label, lang)}</JlEyebrow>
          <h2 className="section-title mx-auto mt-5 max-w-3xl">
            {bi(jlActivities.title, lang)}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-gray">
            {bi(jlActivities.subtitle, lang)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jlActivities.items.map((it, i) => (
            <Reveal key={it.key} delay={(i % 3) * 90}>
              <article className="card-hover card group flex h-full flex-col border border-gray-light">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-jardin-light text-jardin transition duration-300 group-hover:bg-jardin group-hover:text-white">
                  <JlIcon name={it.icon} className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  {bi(it.title, lang)}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-gray">
                  {bi(it.text, lang)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-jardin/15 bg-jardin-light/60 px-2.5 py-1 text-[11px] font-semibold text-jardin-dark"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* Carte CTA pour équilibrer la grille 3 colonnes */}
          <Reveal delay={(jlActivities.items.length % 3) * 90}>
            <div className="gradient-navy flex h-full flex-col justify-between rounded-xl2 p-7 text-white">
              <div>
                <h3 className="font-heading text-lg font-bold">
                  {lang === "en" ? "Need help choosing?" : "Besoin d'aide pour choisir ?"}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {lang === "en"
                    ? "Tell us about your space and we will propose the most suitable plants and services."
                    : "Parlez-nous de votre espace et nous vous proposerons les végétaux et prestations les plus adaptés."}
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-6 w-full shadow-none hover:shadow-glow"
              >
                {lang === "en" ? "Ask for advice" : "Demander conseil"}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
