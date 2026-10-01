"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { vaFaq } from "@/content/visa-assistance";
import { bi } from "../la-jardiniere/bi";
import VaEyebrow from "./VaEyebrow";
import Reveal from "@/components/Reveal";

export default function VaFaq() {
  const { lang } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="text-center">
          <VaEyebrow>{bi(vaFaq.label, lang)}</VaEyebrow>
          <h2 className="section-title mt-5">{bi(vaFaq.title, lang)}</h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {vaFaq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-xl2 border bg-white transition ${
                    isOpen
                      ? "border-orange/35 shadow-soft"
                      : "border-gray-light"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-gray-light/60 sm:px-6"
                    >
                      <span className="font-heading text-base font-bold text-navy sm:text-lg">
                        {bi(it.q, lang)}
                      </span>
                      <span
                        aria-hidden
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange/25 text-orange transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="border-t border-gray-light px-5 pb-5 pt-4 sm:px-6">
                      <p className="text-sm leading-relaxed text-text-gray sm:text-base">
                        {bi(it.a, lang)}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
