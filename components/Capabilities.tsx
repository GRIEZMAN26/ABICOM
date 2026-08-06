"use client";

import { site } from "@/content/site";
import { useI18n } from "@/i18n/I18nProvider";

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p = {
    fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24", className,
  };
  const paths: Record<string, JSX.Element> = {
    flask: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7 14h10" />,
    gear: <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a8 8 0 0 0-.2-1.8l2-1.6-2-3.4-2.4 1a8 8 0 0 0-3-1.8L14 1h-4l-.4 2.4a8 8 0 0 0-3 1.8l-2.4-1-2 3.4 2 1.6A8 8 0 0 0 4 12c0 .6 0 1.2.2 1.8l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 3 1.8L10 23h4l.4-2.4a8 8 0 0 0 3-1.8l2.4 1 2-3.4-2-1.6c.1-.6.2-1.2.2-1.8Z" />,
    build: <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 8h18" />,
    robot: <path d="M12 2v3M9 8h6v4H9zM5 14h14v6H5zM9 17h.01M15 17h.01M12 14v-2" />,
    wrench: <path d="M14 7a4 4 0 0 0-5.5 5.1L3 18l3 3 5.9-5.5A4 4 0 0 0 17 10l-2 2-3-3 2-2Z" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />,
    brain: <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3-1ZM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  };
  return <svg {...p}>{paths[name] ?? paths.gear}</svg>;
}

export default function Capabilities() {
  const { t, lang } = useI18n();
  const caps = site.capabilities as any[];
  const pillars = site.pillars as any[];
  return (
    <>
      {/* Piliers */}
      <section className="section bg-gray-light">
        <div className="container-px">
          <div className="text-center">
            <h2 className="section-title">{t.about.pillarsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.key} className="card-hover card border border-gray-light p-7 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                  <Icon name={p.icon} />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {lang === "en" ? p.titleEn : p.titleFr}
                </h3>
                <p className="mt-2 text-sm text-text-gray">
                  {lang === "en" ? p.descEn : p.descFr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities engineering */}
      <section className="section">
        <div className="container-px">
          <div className="text-center">
            <h2 className="section-title">{t.about.capabilitiesTitle}</h2>
            <p className="mt-2 text-text-gray">{t.about.capabilitiesSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caps.map((c, i) => (
              <div key={c.key} className="card-hover card border border-gray-light">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-orange-light">
                  <Icon name={c.icon} />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {lang === "en" ? c.titleEn : c.titleFr}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-text-gray">
                  {(lang === "en" ? c.itemsEn : c.itemsFr).map((it: string, j: number) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 text-orange">▹</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
