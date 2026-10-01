import type { Metadata } from "next";
import LaJardinierePage from "@/components/la-jardiniere/LaJardinierePage";

export const metadata: Metadata = {
  title: {
    absolute:
      "La Jardinière | Pépinière, Jardinerie & Aménagement Paysager en RDC | ABICOM",
  },
  description:
    "La Jardinière, département d'ABICOM SARL, propose des plantes ornementales et fruitières, l'aménagement paysager, les compositions florales, l'entretien des espaces verts et des accessoires de jardinerie en RDC.",
  keywords: [
    "pépinière RDC",
    "jardinerie Lubumbashi",
    "aménagement paysager RDC",
    "plantes ornementales",
    "plantes fruitières",
    "entretien espaces verts",
    "jardin d'entreprise RDC",
    "La Jardinière ABICOM",
    "espaces verts Katanga",
  ],
  alternates: { canonical: "/la-jardiniere" },
  openGraph: {
    title: "La Jardinière | Pépinière & Aménagement Paysager en RDC | ABICOM SARL",
    description:
      "Des espaces plus verts, plus soignés, plus accueillants. Pépinière, jardinerie, aménagement paysager et entretien des espaces verts pour entreprises, commerces et particuliers.",
    url: "/la-jardiniere",
    type: "website",
    locale: "fr_FR",
    images: ["/images/la-jardiniere/hero.jpg"],
  },
};

export default function Page() {
  return <LaJardinierePage />;
}
