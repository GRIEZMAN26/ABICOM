import type { Metadata } from "next";
import VaPage from "@/components/visa-assistance/VaPage";

export const metadata: Metadata = {
  title: {
    absolute:
      "Visa & Assistance en RDC | Mobilité & Passeport Congolais | ABICOM",
  },
  description:
    "ABICOM accompagne les entreprises, professionnels étrangers et citoyens congolais dans leurs démarches de mobilité, visa et passeport en République Démocratique du Congo.",
  keywords: [
    "visa RDC",
    "assistance visa RDC",
    "mobilité internationale RDC",
    "accompagnement administratif RDC",
    "passeport congolais",
    "assistance passeport RDC",
    "expatriés RDC",
    "entreprises minières RDC",
    "démarches administratives RDC",
  ],
  alternates: { canonical: "/visa-assistance" },
  openGraph: {
    title: "Visa & Assistance en RDC | ABICOM SARL",
    description:
      "Assistance administrative, mobilité internationale et accompagnement des démarches de passeport en République Démocratique du Congo.",
    url: "/visa-assistance",
    type: "website",
    locale: "fr_FR",
    images: ["/images/visa-assistance/hero.jpg"],
  },
};

export default function Page() {
  return <VaPage />;
}
