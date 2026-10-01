"use client";

import VaHero from "./VaHero";
import VaIntro from "./VaIntro";
import VaPaths from "./VaPaths";
import VaVisa from "./VaVisa";
import VaCorporate from "./VaCorporate";
import VaPassport from "./VaPassport";
import VaProcess from "./VaProcess";
import VaOfficial from "./VaOfficial";
import VaFaq from "./VaFaq";
import VaVisual from "./VaVisual";
import VaCta from "./VaCta";

export default function VaPage() {
  return (
    <>
      <VaHero />
      <VaIntro />
      <VaPaths />
      <VaVisa />
      <VaCorporate />
      <VaPassport />
      <VaProcess />
      <VaOfficial />
      <VaFaq />
      <VaVisual />
      <VaCta />
    </>
  );
}
