"use client";

import type { ReactNode } from "react";

/**
 * Jeu d'icônes linéaires pour le département La Jardinière.
 * Style identique aux icônes de Capabilities.tsx (stroke, 24x24).
 */
export default function JlIcon({
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
    // Plante / semis
    sprout: (
      <>
        <path d="M12 21v-7" />
        <path d="M12 14c0-3 2-5.5 5-5.5 0 3-2 5.5-5 5.5Z" />
        <path d="M12 17c0-2.4-1.7-4.3-4-4.3 0 2.4 1.7 4.3 4 4.3Z" />
        <path d="M7.5 21h9" />
      </>
    ),
    // Aménagement paysager : arbre
    landscape: (
      <>
        <path d="M12 21v-6" />
        <path d="M12 15c-4 0-7-2.7-7-6.5C5 5.6 8.1 3 12 3s7 2.6 7 5.5c0 3.8-3 6.5-7 6.5Z" />
        <path d="M6 21h12" />
      </>
    ),
    // Fleur
    flower: (
      <>
        <circle cx="12" cy="12" r="2.2" />
        <circle cx="12" cy="6.6" r="3" />
        <circle cx="16.9" cy="10.1" r="3" />
        <circle cx="14.7" cy="16.5" r="3" />
        <circle cx="9.3" cy="16.5" r="3" />
        <circle cx="7.1" cy="10.1" r="3" />
      </>
    ),
    // Entretien : ciseaux
    scissors: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.1 15.9" />
        <path d="M14.5 14.5 20 20" />
        <path d="M8.1 8.1 12 12" />
      </>
    ),
    // Pot
    pot: (
      <>
        <path d="M12 14v-7" />
        <path d="M12 12c0-2.8 1.9-5 4.5-5 0 2.8-1.9 5-4.5 5Z" />
        <path d="M12 14c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4Z" />
        <path d="M4 14h16l-1.2 5.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 14Z" />
      </>
    ),
    // Bâtiment / façades
    building: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </>
    ),
    // Entrée
    door: (
      <>
        <path d="M13 4h7v17h-7" />
        <path d="M3 21h18" />
        <path d="M6 21V6a2 2 0 0 1 2-2h5v17H8a2 2 0 0 1-2-2Z" />
        <path d="M11 12.5h.01" />
      </>
    ),
    // Terrasse / pergola
    terrace: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21v-10" />
        <path d="M19 21v-10" />
        <path d="M3 11h18l-3-5H6l-3 5Z" />
        <path d="M9 21v-4h6v4" />
      </>
    ),
    // Parking
    parking: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9.5 17V7h3.2a3.2 3.2 0 0 1 0 6.4H9.5" />
      </>
    ),
    // Espace de détente
    lounge: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    // Espace intérieur
    indoor: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13" />
        <path d="M12 18v-6" />
        <path d="M12 12.5c0-2.2 1.6-4 3.8-4 0 2.2-1.6 4-3.8 4Z" />
        <path d="M12 15.5c0-1.8-1.3-3.2-3-3.2 0 1.8 1.3 3.2 3 3.2Z" />
        <path d="M9.2 21h5.6l-.7-4h-4.2l-.7 4Z" />
      </>
    ),
    // Engagement
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
        <path d="M2 21c0-3 1.9-5.4 5.1-6" />
      </>
    ),
    sparkle: (
      <path d="m12 2 3.1 6.3 6.3 3.1-6.3 3.1L12 21l-3.1-6.5L2.6 11.4l6.3-3.1L12 2Z" />
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    refresh: (
      <>
        <path d="M21 4v6h-6" />
        <path d="M3 20v-6h6" />
        <path d="M20 10a8 8 0 0 0-13.7-3.2L3 10" />
        <path d="M4 14a8 8 0 0 0 13.7 3.2L21 14" />
      </>
    ),
  };

  return <svg {...p}>{paths[name] ?? paths.leaf}</svg>;
}
