"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";
import { useI18n } from "@/i18n/I18nProvider";

const links = (t: any) => [
  { href: "/", label: t.nav.home },
  { href: "/a-propos", label: t.nav.about },
  { href: "/produits", label: t.nav.products },
  { href: "/services", label: t.nav.services },
  { href: "/blog", label: t.nav.blog },
  { href: "/galerie", label: t.nav.gallery },
  { href: "/telechargements", label: t.nav.downloads },
  { href: "/contact", label: t.nav.contact },
];

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 shadow-soft backdrop-blur"
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <Logo light />
        <div className="hidden items-center gap-6 lg:flex">
          {links(t).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-white/85 transition hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <Link href="/contact" className="btn-primary hidden px-5 py-2 text-sm sm:inline-flex">
            {t.contact.title.split(" ")[0]}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-px flex flex-col gap-1 bg-navy pb-5 pt-2 lg:hidden">
          {links(t).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
