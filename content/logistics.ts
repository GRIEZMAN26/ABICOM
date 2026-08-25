export interface LogisticsBlock {
  n: string;
  title: string;
  intro: string;
  items: string[];
}

export interface LogisticsContent {
  eyebrow: string;
  title: string;
  intro: string;
  solutionsTitle: string;
  blocks: LogisticsBlock[];
  whyTitle: string;
  whyItems: string[];
}

export const logistics: { fr: LogisticsContent; en: LogisticsContent } = {
  fr: {
    eyebrow: "Transport & Logistique",
    title: "Transport Local & International",
    intro:
      "Dans l'industrie minière congolaise, la production n'est que la moitié de l'équation. La vraie valeur se concrétise lorsque votre marchandise atteint son destinataire final, en temps voulu et en parfait état. Les défis logistiques entre les sites d'extraction du Lualaba et du Haut-Katanga, les points de transit frontaliers et les ports internationaux peuvent devenir des goulets d'étranglement critiques. Chez ABICOM SARL, nous ne nous contentons pas de fournir des produits chimiques ; nous déployons une infrastructure logistique robuste pour accompagner la sortie de vos marchandises vers les marchés mondiaux.",
    solutionsTitle: "Nos Solutions de Transport & Location de Flotte",
    blocks: [
      {
        n: "1.",
        title: "Location de Camions & Gestion de Flotte Dédiée",
        intro:
          "Besoin d'une capacité de transport fiable et immédiate ? Nous mettons à votre disposition une flotte de camions lourds et de remorques adaptées au transport de minerais en vrac et de conteneurs.",
        items: [
          "Disponibilité 24/7 : Réactivité garantie pour les urgences d'expédition.",
          "Entretien rigoureux : Véhicules maintenus selon les normes HSE pour minimiser les pannes et assurer la sécurité des chargements.",
          "Chauffeurs expérimentés : Personnel formé aux routes minières du Katanga et aux procédures frontalières.",
        ],
      },
      {
        n: "2.",
        title: "Transport Local : Du Site Minier au Point de Transit",
        intro:
          "Nous assurons le lien vital entre vos installations de production (Lubumbashi, Kolwezi, Likasi) et les hubs logistiques clés.",
        items: [
          "Liaisons régulières vers les frontières (Kasumbalesa, Sakania) et les corridors nord/sud.",
          "Optimisation des tournées pour réduire les coûts et les délais d'attente.",
        ],
      },
      {
        n: "3.",
        title: "Logistique d'Exportation Internationale (Cathodes & Minerais)",
        intro:
          "Spécialisés dans le flux sortant (outbound logistics), nous gérons l'acheminement de vos cathodes de cuivre, cobalt, et autres concentrés miniers vers l'international.",
        items: [
          "Sécurisation du fret : Protocoles stricts pour le chargement et l'arrimage des marchandises à haute valeur ajoutée.",
          "Conformité Douanière : Assistance dans la préparation des documents d'exportation pour fluidifier le passage aux frontières et éviter les pénalités.",
          "Intermodalité : Coordination efficace avec les partenaires ferroviaires et maritimes pour une chaîne logistique sans rupture jusqu'aux ports d'embarquement (Durban, Dar es Salaam, Beira).",
        ],
      },
    ],
    whyTitle: "Pourquoi Choisir ABICOM SARL pour Votre Logistique ?",
    whyItems: [
      "Expertise 100% Congolaise : Une connaissance intime du terrain, des réglementations locales et des réalités opérationnelles du Grand Katanga.",
      "Fiabilité Opérationnelle : Comme pour nos stocks chimiques, nous garantissons une disponibilité constante de nos ressources logistiques.",
      "Approche Partenaire : Nous ne sommes pas un simple prestataire, mais un maillon stratégique de votre chaîne d'approvisionnement mondiale.",
    ],
  },
  en: {
    eyebrow: "Transport & Logistics",
    title: "Local & International Transport",
    intro:
      "In the Congolese mining industry, production is only half the equation. Real value is realized when your goods reach their final recipient, on time and in perfect condition. Logistics challenges between extraction sites in Lualaba and Haut-Katanga, border transit points and international ports can become critical bottlenecks. At ABICOM SARL, we do more than supply chemicals; we deploy a robust logistics infrastructure to support the outbound flow of your goods to global markets.",
    solutionsTitle: "Our Transport & Fleet Rental Solutions",
    blocks: [
      {
        n: "1.",
        title: "Truck Rental & Dedicated Fleet Management",
        intro:
          "Need reliable, immediate transport capacity? We provide a fleet of heavy trucks and trailers suited to bulk minerals and container transport.",
        items: [
          "24/7 availability: guaranteed responsiveness for shipping emergencies.",
          "Rigorous maintenance: vehicles maintained to HSE standards to minimize breakdowns and secure loads.",
          "Experienced drivers: personnel trained on Katanga mining routes and border procedures.",
        ],
      },
      {
        n: "2.",
        title: "Local Transport: From Mine Site to Transit Point",
        intro:
          "We secure the vital link between your production facilities (Lubumbashi, Kolwezi, Likasi) and key logistics hubs.",
        items: [
          "Regular links to borders (Kasumbalesa, Sakania) and north/south corridors.",
          "Route optimization to cut costs and waiting times.",
        ],
      },
      {
        n: "3.",
        title: "International Export Logistics (Cathodes & Minerals)",
        intro:
          "Specialized in outbound logistics, we manage the routing of your copper cathodes, cobalt and other mineral concentrates to international markets.",
        items: [
          "Cargo security: strict protocols for loading and lashing high-value goods.",
          "Customs Compliance: assistance preparing export documents to smooth border crossings and avoid penalties.",
          "Intermodality: efficient coordination with rail and shipping partners for a seamless logistics chain to embarkation ports (Durban, Dar es Salaam, Beira).",
        ],
      },
    ],
    whyTitle: "Why Choose ABICOM SARL for Your Logistics?",
    whyItems: [
      "100% Congolese expertise: intimate knowledge of the terrain, local regulations and operational realities of Greater Katanga.",
      "Operational reliability: like our chemical stocks, we guarantee constant availability of our logistics resources.",
      "Partner approach: we are not just a provider, but a strategic link in your global supply chain.",
    ],
  },
};
