"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { vaPassport, vaImages } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaPassport() {
  const { lang } = useI18n();

  return (
    <section className="section scroll-mt-24 bg-gray-light" id="passeport">
      <div className="container-px">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* GAUCHE — image */}
          <Reveal>
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img
                src={vaImages.passport}
                alt={bi(vaPassport.imageAlt, lang)}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* DROITE — contenu */}
          <Reveal delay={120}>
            <div>
              <VaEyebrow>{bi(vaPassport.label, lang)}</VaEyebrow>
              <h2 className="section-title mt-5">{bi(vaPassport.title, lang)}</h2>
              <p className="mt-4 text-text-gray">{bi(vaPassport.text, lang)}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {vaPassport.items.map((it, i) => (
                  <div
                    key={i}
                    className="card-hover card border border-gray-light"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 text-orange">
                      <VaIcon name="folder" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold text-navy">
                      {bi(it.title, lang)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-gray">
                      {bi(it.text, lang)}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary mt-8 w-full sm:w-auto">
                {bi(vaPassport.cta, lang)}
              </Link>

              {/* Mention légale — pas de « vente » de passeport */}
              <p className="mt-6 flex items-start gap-2.5 border-l-2 border-orange pl-4 text-sm italic leading-relaxed text-text-gray">
                <VaIcon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {bi(vaPassport.disclaimer, lang)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
