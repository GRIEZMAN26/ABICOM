"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center overflow-hidden rounded-full border border-white/20 text-sm font-semibold">
      <button
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`px-3 py-1 transition ${
          lang === "fr" ? "bg-orange text-white" : "text-white/80 hover:text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1 transition ${
          lang === "en" ? "bg-orange text-white" : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
