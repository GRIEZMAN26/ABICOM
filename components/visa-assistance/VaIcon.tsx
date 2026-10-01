"use client";

import type { ReactNode } from "react";

/**
 * Jeu d'icônes linéaires sobres pour le département Visa & Assistance.
 * Style identique à Capabilities.tsx / JlIcon.tsx (stroke, 24x24).
 */
export default function VaIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  const paths: Record<string, ReactNode> = {
    // Avion / mobilité internationale
    plane: (
      <>
        <path d="M10.2 3.3a1.7 1.7 0 0 1 3.6 0l.4 5.2 6.6 3.1a1 1 0 0 1 .5.9v1.6a1 1 0 0 1-1.3 1l-5.9-1.9-.5 4.3 2.1 1.6a1 1 0 0 1 .5.9v.8a1 1 0 0 1-1.4.9l-3.4-1.5a1 1 0 0 1-.6-.9l-3.4 1.5a1 1 0 0 1-1.4-.9v-.8a1 1 0 0 1 .5-.9l2.1-1.6-.5-4.3-5.9 1.9a1 1 0 0 1-1.3-1v-1.6a1 1 0 0 1 .5-.9l6.6-3.1.4-5.2Z" />
      </>
    ),
    // Passeport / document de voyage
    passport: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2.5" />
        <circle cx="12" cy="10" r="3" />
        <path d="M9 17h6" />
        <path d="M12 7v.01" />
      </>
    ),
    // Analyse
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    // Préparation du dossier
    folder: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        <path d="M8 13h8M8 16.5h5" />
      </>
    ),
    // Assistance administrative / guichet
    desk: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21v-6h14v6" />
        <path d="M4 11h16v4H4z" />
        <path d="M9 15v.01M12 15v.01M15 15v.01" />
      </>
    ),
    // Suivi
    refresh: (
      <>
        <path d="M21 4v6h-6" />
        <path d="M3 20v-6h6" />
        <path d="M20 10a8 8 0 0 0-13.7-3.2L3 10" />
        <path d="M4 14a8 8 0 0 0 13.7 3.2L21 14" />
      </>
    ),
    // Entreprise
    building: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </>
    ),
    // Monde / international
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    // Bouclier / cadre officiel
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    // Information
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 7.5v.01" />
      </>
    ),
    // Confidentialité
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    // Vérification / conformité
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
    // Échange / mobilté
    exchange: (
      <>
        <path d="M3 8h14M13 4l4 4-4 4" />
        <path d="M21 16H7M11 12l-4 4 4 4" />
      </>
    ),
  };

  return <svg {...p}>{paths[name] ?? paths.shield}</svg>;
}
