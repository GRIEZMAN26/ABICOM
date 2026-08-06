"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dict, Lang } from "./index";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Record<Lang, any>[Lang];
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved =
      (typeof document !== "undefined"
        ? document.cookie.match(/abicom_lang=([a-z]{2})/)?.[1]
        : null) as Lang | null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.cookie = `abicom_lang=${l}; path=/; max-age=31536000`;
    }
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n(): I18nCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}
