import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "ABICOM SARL — Fourniture de produits chimiques miniers | RDC",
    template: "%s | ABICOM SARL",
  },
  description:
    "ABICOM SARL (ABILITY COMPANY SARL) — fournisseur de produits chimiques pour le secteur minier en RDC : acide sulfurique, soufre, chaux, coke, MgO. Votre partenaire minier 100% congolais.",
  keywords: [
    "fourniture de produits chimiques",
    "Lubumbashi fourniture",
    "abicom",
    "produit chimique RDC",
    "soufre Kolwezi",
    "acide sulfurique Lubumbashi",
    "chaux vive Katanga",
  ],
  openGraph: {
    title: "ABICOM SARL — Produits chimiques miniers",
    description: "Votre Partenaire Minier 100% Congolais.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </I18nProvider>
      </body>
    </html>
  );
}
