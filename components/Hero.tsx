"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden gradient-navy text-white">
      {/* grille tech discrète animée */}
      <div
        className="animate-grid-slow pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* halo orange */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange/30 blur-3xl glow-dot" />
      {/* disque rotatif décoratif */}
      <div className="animate-spin-slow pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full border border-white/10" />
      <div className="animate-spin-slow pointer-events-none absolute -left-10 bottom-10 h-48 w-48 rounded-full border border-orange/20" style={{ animationDirection: "reverse" }} />

      <div className="container-px relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-slide-up">
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-light">
            ● {t.hero.badge}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary animate-pulse-glow">
              {t.hero.ctaQuote}
            </Link>
            <Link href="/produits" className="btn-secondary border-white/30 bg-transparent text-white hover:bg-white hover:text-navy">
              {t.hero.ctaProducts}
            </Link>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { n: "06", l: t.hero.stat1 },
              { n: "06+", l: t.hero.stat2 },
              { n: "24/7", l: t.hero.stat3 },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-3 text-center backdrop-blur">
                <div className="font-heading text-3xl font-extrabold text-orange-light">{s.n}</div>
                <div className="text-xs text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="animate-floaty relative overflow-hidden rounded-xl2 border border-white/10 shadow-glow">
            <img
              src="/images/products/acide.png"
              alt="Produits chimiques ABICOM"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl2 bg-white p-4 shadow-soft sm:block">
            <div className="text-xs font-semibold text-navy">Stock permanent</div>
            <div className="text-2xl font-extrabold text-orange">Lubumbashi</div>
          </div>
          <div className="absolute -right-4 top-8 hidden animate-floaty rounded-xl2 bg-orange px-4 py-3 text-white shadow-glow sm:block" style={{ animationDelay: "1.2s" }}>
            <div className="text-[10px] uppercase opacity-80">Ingénierie</div>
            <div className="text-sm font-bold">Sur site</div>
          </div>
        </div>
      </div>
    </section>
  );
}
