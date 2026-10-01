"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { vaCta } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaIcon from "./VaIcon";
import Reveal from "@/components/Reveal";

export default function VaCta() {
  const { lang } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div
        aria-hidden
        className="animate-grid-slow pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
      />

      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {bi(vaCta.title, lang)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {bi(vaCta.text, lang)}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href="#visa" className="btn-secondary w-full border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy sm:w-auto">
              {bi(vaCta.ctaForeign, lang)}
            </a>
            <a
              href="#passeport"
              className="btn-secondary w-full border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy sm:w-auto"
            >
              {bi(vaCta.ctaCongolese, lang)}
            </a>
            <Link
              href="/contact"
              className="btn-primary w-full whitespace-nowrap sm:w-auto"
            >
              {bi(vaCta.ctaContact, lang)}
            </Link>
          </div>

          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 text-left text-xs leading-relaxed text-white/55 sm:text-sm">
            <VaIcon
              name="info"
              className="mt-0.5 h-4 w-4 shrink-0 text-orange-light"
            />
            {bi(vaCta.note, lang)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
