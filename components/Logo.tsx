import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ABICOM">
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-glow">
        {/* Logo officiel ABICOM */}
        <img
          src="/images/logo.png"
          alt="ABICOM"
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className={`font-heading text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        ABI<span className="text-orange">COM</span>
      </span>
    </Link>
  );
}
