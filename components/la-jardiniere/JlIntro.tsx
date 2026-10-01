"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { jlIntro, jlImages } from "@/content/la-jardiniere";
import { bi } from "./bi";
import JlEyebrow from "./JlEyebrow";
import Reveal from "@/components/Reveal";

export default function JlIntro() {
  const { lang } = useI18n();

  return (
    <section className="section overflow-hidden" id="presentation">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Colonne gauche : texte */}
        <Reveal>
          <div>
            <JlEyebrow>{bi(jlIntro.label, lang)}</JlEyebrow>
            <h2 className="section-title mt-5">{bi(jlIntro.title, lang)}</h2>

            <div className="mt-6 space-y-4 text-text-gray">
              {jlIntro.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-base font-medium text-navy" : ""}>
                  {bi(p, lang)}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-1">
              {jlIntro.points.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-jardin-light text-jardin">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {bi(p, lang)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Colonne droite : image immersive */}
        <Reveal delay={120}>
          <figure className="relative">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img
                src={jlImages.pepiniere}
                alt={bi(jlIntro.imageAlt, lang)}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            {/* Liseré végétal discret */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-2xl border-2 border-jardin/25"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
