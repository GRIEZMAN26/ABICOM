import type { Lang } from "@/i18n";

/** Sélectionne la variante FR ou EN d'un contenu bilingue. */
export function bi(b: { fr: string; en: string }, lang: Lang): string {
  return lang === "en" ? b.en : b.fr;
}
