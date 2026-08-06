"use client";

import { site } from "@/content/site";
import { useI18n } from "@/i18n/I18nProvider";
import Logo from "./Logo";

function SocialIcon({ icon }: { icon: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" } as const;
  switch (icon) {
    case "facebook":
      return (<svg {...common}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>);
    case "linkedin":
      return (<svg {...common}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.9H5.67v8.44h2.67zM7 8.6a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.74v-4.62c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.42 1.33v-1.14h-2.67c.04.75 0 8.44 0 8.44h2.67v-4.71c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.36.74 1.36 1.82v4.52h2.68z" /></svg>);
    case "instagram":
      return (<svg {...common}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.95c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07zm0 3.32a4.57 4.57 0 1 1 0 9.14 4.57 4.57 0 0 1 0-9.14zm0 7.54a2.97 2.97 0 1 0 0-5.94 2.97 2.97 0 0 0 0 5.94zm5.83-7.74a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0z" /></svg>);
    case "tiktok":
      return (<svg {...common}><path d="M16.6 5.82a4.28 4.28 0 0 1-1.04-2.82h-3.2v12.3a2.45 2.45 0 1 1-2.45-2.45c.27 0 .53.05.78.13v-3.26a5.65 5.65 0 1 0 4.87 5.6V8.95a7.45 7.45 0 0 0 4.36 1.47V7.2a4.28 4.28 0 0 1-3.32-1.38z" /></svg>);
    case "youtube":
      return (<svg {...common}><path d="M23 7.5a3 3 0 0 0-2.1-2.12C19.05 4.9 12 4.9 12 4.9s-7.05 0-8.9.48A3 3 0 0 0 1 7.5 31.3 31.3 0 0 0 .5 12 31.3 31.3 0 0 0 1 16.5a3 3 0 0 0 2.1 2.12c1.85.48 8.9.48 8.9.48s7.05 0 8.9-.48A3 3 0 0 0 23 16.5 31.3 31.3 0 0 0 23.5 12 31.3 31.3 0 0 0 23 7.5zM9.75 15.5v-7l6 3.5-6 3.5z" /></svg>);
    default:
      return (<svg {...common}><path d="M18.9 2.5h3.6l-7.9 9 9.3 12.2h-7.3l-5.7-7.5-6.5 7.5H1.9l8.4-9.6L1.4 2.5h7.5l5.2 6.9 6.8-6.9zm-1.3 19.3h2L7.1 4.4H4.9l12.7 17.4z" /></svg>);
  }
}

export default function Footer() {
  const { t } = useI18n();
  const y = new Date().getFullYear();
  return (
    <footer className="gradient-navy text-white/80">
      <div className="container-px grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.footer.about}</p>
          <div className="mt-5 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange hover:text-white"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-white">{t.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-orange" href="/produits">→ {t.nav.products}</a></li>
            <li><a className="hover:text-orange" href="/services">→ {t.nav.services}</a></li>
            <li><a className="hover:text-orange" href="/blog">→ {t.nav.blog}</a></li>
            <li><a className="hover:text-orange" href="/galerie">→ {t.nav.gallery}</a></li>
            <li><a className="hover:text-orange" href="/telechargements">→ {t.nav.downloads}</a></li>
            <li><a className="hover:text-orange" href="/contact">→ {t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-white">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📍 {site.contact.address}</li>
            <li>📞 <a className="hover:text-orange" href={site.contact.phoneHref}>{site.contact.phone}</a></li>
            <li>💬 <a className="hover:text-orange" href={site.contact.whatsappHref}>WhatsApp</a></li>
            <li>✉️ <a className="hover:text-orange" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>
          </ul>
          <h4 className="mt-6 font-heading text-white">{t.footer.legal}</h4>
          <ul className="mt-3 space-y-1 text-xs text-white/60">
            <li>RCCM : {site.legal.rccm}</li>
            <li>NIF : {site.legal.nif}</li>
            <li>TVA : {site.legal.tva}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {y} {site.name} ({site.fullName}). {t.footer.rights}
      </div>
    </footer>
  );
}
