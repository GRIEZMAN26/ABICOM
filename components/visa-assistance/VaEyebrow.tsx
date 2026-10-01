"use client";

/**
 * Petit label d'œil (eyebrow) cohérent sur toutes les sections.
 * Teinte ABICOM (orange) — le département n'introduit pas de vert.
 */
export default function VaEyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const base =
    "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]";
  const skin =
    tone === "dark"
      ? "border border-white/15 bg-white/5 text-orange-light"
      : "border border-orange/25 bg-orange/10 text-orange";
  return (
    <span className={`${base} ${skin} rounded-full px-3.5 py-1.5`}>
      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
      {children}
    </span>
  );
}
