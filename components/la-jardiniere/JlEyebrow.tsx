"use client";

/** Petit label d'œil (eyebrow) cohérent sur toutes les sections. */
export default function JlEyebrow({
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
      ? "border border-white/15 bg-white/5 text-jardin-light"
      : "border border-jardin/20 bg-jardin-light text-jardin";
  return (
    <span className={`${base} ${skin} rounded-full px-3.5 py-1.5`}>
      <span className="h-1.5 w-1.5 rounded-full bg-jardin" />
      {children}
    </span>
  );
}
