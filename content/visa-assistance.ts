// Contenus & images du département VISA & ASSISTANCE (ABICOM SARL)
//
// IMPORTANT — Positionnement du département :
// ABICOM intervient comme prestataire d'assistance, de facilitation et
// d'accompagnement administratif. ABICOM ne délivre ni visa ni passeport et
// ne garantit jamais l'obtention d'un document officiel : ces décisions
// relèvent des autorités compétentes de la RDC.
//
// Pour remplacer une photo par une vraie photo ABICOM : déposer le fichier
// dans /public/images/visa-assistance/ puis mettre à jour l'entrée ci-dessous.

export const vaImages = {
  hero: "/images/visa-assistance/hero.jpg",
  visa: "/images/visa-assistance/visa.jpg",
  passport: "/images/visa-assistance/passport.jpg",
  mobility: "/images/visa-assistance/mobility.jpg",
  assistance: "/images/visa-assistance/assistance.jpg",
} as const;

type Bi = { fr: string; en: string };

const bi = (fr: string, en: string): Bi => ({ fr, en });

/* ---------------- HERO ---------------- */
export const vaHero = {
  badge: bi("ABICOM SARL • Département", "ABICOM SARL • Department"),
  title: "VISA & ASSISTANCE",
  subtitle: bi(
    "Mobilité internationale • Assistance administrative • Passeport congolais",
    "International mobility • Administrative assistance • Congolese passport"
  ),
  baseline: bi(
    "Faciliter vos démarches administratives liées à la mobilité et aux documents de voyage en RDC.",
    "Facilitating your administrative procedures related to mobility and travel documents in the DRC."
  ),
  description: bi(
    "ABICOM accompagne les entreprises, professionnels étrangers et citoyens congolais dans la préparation et le suivi de leurs démarches administratives, en complément des procédures officielles.",
    "ABICOM supports companies, foreign professionals and Congolese citizens in preparing and following up their administrative procedures, alongside official processes."
  ),
  ctaForeign: bi("Je viens en RDC", "I'm coming to the DRC"),
  ctaCongolese: bi("Je suis Congolais", "I'm Congolese"),
  imageAlt: bi(
    "Arrivée d'un professionnel international en RDC",
    "Arrival of an international professional in the DRC"
  ),
  reassurance: bi(
    "Assistance et accompagnement — les visas et passeports sont délivrés par les autorités compétentes.",
    "Assistance and support — visas and passports are issued by the competent authorities."
  ),
};

/* ---------------- INTRODUCTION ---------------- */
export const vaIntro = {
  label: bi("Notre mission", "Our mission"),
  title: bi(
    "Votre mobilité, nos solutions d'accompagnement",
    "Your mobility, our support solutions"
  ),
  paragraphs: [
    bi(
      "ABICOM propose un service d'assistance destiné aux personnes et aux entreprises qui doivent effectuer des démarches administratives liées à la mobilité internationale et aux documents de voyage.",
      "ABICOM provides an assistance service for individuals and companies required to carry out administrative procedures related to international mobility and travel documents."
    ),
    bi(
      "Notre rôle consiste à faciliter la compréhension des procédures, accompagner la préparation des dossiers et assurer un suivi administratif dans les limites de notre intervention.",
      "Our role is to make procedures easier to understand, support the preparation of files and provide administrative follow-up within the limits of our intervention."
    ),
    bi(
      "Les décisions de délivrance des visas et documents officiels restent du ressort des autorités compétentes.",
      "Decisions regarding the issuance of visas and official documents remain the responsibility of the competent authorities."
    ),
  ],
  imageAlt: bi(
    "Professionnel accompagnant un client dans ses démarches",
    "A professional supporting a client with their procedures"
  ),
  points: [
    bi("Confidentialité de votre dossier", "File confidentiality"),
    bi("Interlocuteur dédié", "Dedicated contact person"),
    bi("Suivi administratif documenté", "Documented administrative follow-up"),
  ],
};

/* ---------------- DEUX PARCOURS ---------------- */
export const vaPaths = {
  label: bi("Nos deux parcours", "Our two paths"),
  title: bi("Deux besoins, un accompagnement", "Two needs, one support"),
  items: [
    {
      key: "visa",
      badge: bi("Pour les étrangers", "For foreigners"),
      title: bi("Visa & Mobilité RDC", "Visa & DRC Mobility"),
      icon: "plane",
      paragraphs: [
        bi(
          "Vous êtes un professionnel, expatrié, consultant, investisseur ou collaborateur d'une entreprise internationale et vous devez vous rendre en RDC ?",
          "Are you a professional, expatriate, consultant, investor or employee of an international company and do you need to travel to the DRC?"
        ),
        bi(
          "ABICOM vous accompagne dans la préparation et le suivi administratif de vos démarches.",
          "ABICOM supports you in preparing and administratively following up your procedures."
        ),
      ],
      cta: bi("Découvrir l'assistance Visa", "Discover visa assistance"),
      href: "#visa",
    },
    {
      key: "passport",
      badge: bi("Pour les Congolais", "For Congolese"),
      title: bi("Assistance Passeport", "Passport Assistance"),
      icon: "passport",
      paragraphs: [
        bi(
          "Vous êtes citoyen congolais et souhaitez effectuer une démarche liée à votre passeport ?",
          "Are you a Congolese citizen and wish to carry out a procedure related to your passport?"
        ),
        bi(
          "ABICOM vous accompagne dans la compréhension, la préparation et le suivi administratif de votre démarche selon les procédures officielles en vigueur.",
          "ABICOM supports you in understanding, preparing and administratively following up your procedure according to official procedures in force."
        ),
      ],
      cta: bi("Découvrir l'assistance Passeport", "Discover passport assistance"),
      href: "#passeport",
    },
  ],
};

/* ---------------- VISA ---------------- */
export const vaVisa = {
  label: bi("Pour les étrangers", "For foreigners"),
  title: bi(
    "Assistance Visa & Mobilité internationale",
    "Visa & International Mobility Assistance"
  ),
  text: bi(
    "ABICOM accompagne les étrangers et les entreprises internationales dans leurs démarches administratives liées à leur arrivée et leur séjour en République Démocratique du Congo.",
    "ABICOM supports foreigners and international companies in their administrative procedures related to arriving and staying in the Democratic Republic of the Congo."
  ),
  items: [
    {
      n: "01",
      title: bi("Analyse de la situation", "Situation analysis"),
      text: bi(
        "Comprendre votre besoin et vous orienter vers la démarche correspondant à votre situation.",
        "Understanding your needs and directing you towards the procedure matching your situation."
      ),
    },
    {
      n: "02",
      title: bi("Préparation du dossier", "File preparation"),
      text: bi(
        "Assistance dans la préparation et l'organisation des documents nécessaires à la démarche.",
        "Assistance in preparing and organising the documents required for the procedure."
      ),
    },
    {
      n: "03",
      title: bi("Assistance administrative", "Administrative assistance"),
      text: bi(
        "Accompagnement dans les différentes étapes administratives de votre demande.",
        "Support through the various administrative stages of your application."
      ),
    },
    {
      n: "04",
      title: bi("Suivi", "Follow-up"),
      text: bi(
        "Assistance au suivi administratif du dossier dans les limites de notre intervention.",
        "Assistance with administrative follow-up within the limits of our intervention."
      ),
    },
    {
      n: "05",
      title: bi("Assistance aux entreprises", "Corporate assistance"),
      text: bi(
        "Coordination des démarches pour les entreprises accueillant plusieurs collaborateurs étrangers.",
        "Coordination of procedures for companies hosting several foreign employees."
      ),
    },
  ],
};

/* ---------------- ENTREPRISES ---------------- */
export const vaCorporate = {
  label: bi("Solutions corporate", "Corporate solutions"),
  title: bi(
    "Un accompagnement pensé pour les entreprises",
    "Support designed for companies"
  ),
  text: bi(
    "L'arrivée de collaborateurs étrangers en RDC peut nécessiter plusieurs démarches administratives. ABICOM propose aux entreprises un accompagnement structuré pour faciliter la préparation et la coordination de ces démarches.",
    "The arrival of foreign employees in the DRC may require several administrative procedures. ABICOM offers companies structured support to facilitate the preparation and coordination of these procedures."
  ),
  sectors: [
    bi("Mining", "Mining"),
    bi("Construction & BTP", "Construction"),
    bi("Industrie", "Industry"),
    bi("Énergie", "Energy"),
    bi("Logistique", "Logistics"),
    bi("Services", "Services"),
    bi("ONG & organisations", "NGOs & organisations"),
    bi("Investissement international", "International investment"),
  ],
  calloutTitle: bi(
    "Vous accueillez plusieurs collaborateurs étrangers ?",
    "Are you hosting several foreign employees?"
  ),
  calloutText: bi(
    "Nous pouvons étudier avec vous une solution d'accompagnement adaptée à vos besoins.",
    "We can study with you a support solution tailored to your needs."
  ),
  cta: bi("Demander un accompagnement entreprise", "Request corporate support"),
  imageAlt: bi(
    "Équipe d'entreprise internazionale en RDC",
    "International corporate team in the DRC"
  ),
};

/* ---------------- PASSEPORT ---------------- */
export const vaPassport = {
  label: bi("Pour les Congolais", "For Congolese"),
  title: bi(
    "Assistance dans les démarches de passeport",
    "Assistance with passport procedures"
  ),
  text: bi(
    "ABICOM accompagne les citoyens congolais dans la préparation et la compréhension des démarches liées à leur passeport, conformément aux procédures officielles en vigueur.",
    "ABICOM supports Congolese citizens in preparing and understanding procedures related to their passport, in accordance with official procedures in force."
  ),
  items: [
    {
      title: bi("Première demande", "First application"),
      text: bi(
        "Assistance à la préparation de votre démarche.",
        "Assistance in preparing your procedure."
      ),
    },
    {
      title: bi("Renouvellement", "Renewal"),
      text: bi(
        "Accompagnement dans les démarches liées au renouvellement du passeport.",
        "Support with procedures related to passport renewal."
      ),
    },
    {
      title: bi("Préparation du dossier", "File preparation"),
      text: bi(
        "Assistance pour organiser les documents nécessaires selon votre situation.",
        "Assistance in organising the required documents according to your situation."
      ),
    },
    {
      title: bi("Orientation", "Guidance"),
      text: bi(
        "Explication des principales étapes de la procédure officielle.",
        "Explanation of the main stages of the official procedure."
      ),
    },
  ],
  cta: bi("Être accompagné", "Get support"),
  disclaimer: bi(
    "Le passeport est un document officiel délivré par les services compétents de l'État. ABICOM accompagne le demandeur dans ses démarches.",
    "The passport is an official document issued by the competent State services. ABICOM supports applicants in their procedures."
  ),
  imageAlt: bi(
    "Assistance administrative pour un passeport congolais",
    "Administrative assistance for a Congolese passport"
  ),
};

/* ---------------- COMMENT ÇA MARCHE ---------------- */
export const vaProcess = {
  label: bi("Comment ça marche", "How it works"),
  title: bi(
    "Comment fonctionne notre accompagnement ?",
    "How does our support work?"
  ),
  steps: [
    {
      n: "01",
      title: bi("Nous contacter", "Contact us"),
      text: bi(
        "Présentez-nous votre besoin et votre situation.",
        "Tell us about your needs and your situation."
      ),
    },
    {
      n: "02",
      title: bi("Analyse", "Analysis"),
      text: bi(
        "Nous examinons votre demande et vous indiquons les démarches et informations nécessaires.",
        "We examine your request and indicate the procedures and necessary information."
      ),
    },
    {
      n: "03",
      title: bi("Accompagnement", "Support"),
      text: bi(
        "Nous vous assistons dans la préparation et le suivi administratif de votre dossier.",
        "We assist you in preparing and administratively following up your file."
      ),
    },
    {
      n: "04",
      title: bi("Finalisation", "Completion"),
      text: bi(
        "Vous effectuez les étapes officielles requises auprès des services compétents lorsque votre présence ou votre intervention est nécessaire.",
        "You carry out the official required steps with the competent services when your presence or intervention is necessary."
      ),
    },
  ],
};

/* ---------------- INFORMATIONS OFFICIELLES ---------------- */
export const vaOfficial = {
  label: bi("Informations importantes", "Important information"),
  title: bi(
    "Des démarches encadrées par les autorités compétentes",
    "Procedures governed by the competent authorities"
  ),
  text: bi(
    "Les conditions, documents requis, tarifs, délais et procédures administratives peuvent évoluer. ABICOM recommande aux demandeurs de vérifier les informations officielles en vigueur avant toute démarche.",
    "Conditions, required documents, fees, deadlines and administrative procedures may change. ABICOM recommends that applicants verify the official information in force before any procedure."
  ),
  // Liens officiels non inventés : à renseigner par ABICOM.
  // Renseigner `href` avec l'URL officielle pour rendre le bouton actif.
  visaLink: { label: bi("Informations officielles — Visa", "Official information — Visa"), href: "" },
  passportLink: {
    label: bi("Informations officielles — Passeport", "Official information — Passport"),
    href: "",
  },
  pendingNote: bi(
    "Liens officiels en cours de vérification par nos services.",
    "Official links are being verified by our team."
  ),
};

/* ---------------- FAQ ---------------- */
export const vaFaq = {
  label: bi("FAQ", "FAQ"),
  title: bi("Questions fréquentes", "Frequently asked questions"),
  items: [
    {
      q: bi("ABICOM délivre-t-elle les visas ?", "Does ABICOM issue visas?"),
      a: bi(
        "Non. ABICOM fournit un service d'assistance et d'accompagnement administratif. La délivrance du visa relève des autorités compétentes.",
        "No. ABICOM provides an assistance and administrative support service. Visa issuance is the responsibility of the competent authorities."
      ),
    },
    {
      q: bi(
        "ABICOM délivre-t-elle les passeports ?",
        "Does ABICOM issue passports?"
      ),
      a: bi(
        "Non. Le passeport est délivré par les services compétents de l'État. ABICOM accompagne les demandeurs dans leurs démarches.",
        "No. The passport is issued by the competent State services. ABICOM supports applicants in their procedures."
      ),
    },
    {
      q: bi(
        "ABICOM peut-elle accompagner une entreprise qui fait venir plusieurs expatriés ?",
        "Can ABICOM support a company bringing in several expatriates?"
      ),
      a: bi(
        "Oui. ABICOM peut étudier un dispositif d'accompagnement adapté aux entreprises qui doivent gérer les démarches administratives de plusieurs collaborateurs étrangers.",
        "Yes. ABICOM can study a support arrangement suited to companies that must manage the administrative procedures of several foreign employees."
      ),
    },
    {
      q: bi(
        "Pouvez-vous garantir l'obtention d'un visa ?",
        "Can you guarantee visa approval?"
      ),
      a: bi(
        "Non. La décision finale appartient aux autorités compétentes. ABICOM intervient dans l'assistance et le suivi administratif.",
        "No. The final decision rests with the competent authorities. ABICOM operates in assistance and administrative follow-up."
      ),
    },
    {
      q: bi(
        "Quels documents dois-je fournir ?",
        "Which documents do I need to provide?"
      ),
      a: bi(
        "Les documents dépendent de votre situation et du type de démarche. Après analyse de votre demande, ABICOM vous indique les éléments nécessaires selon les informations officielles disponibles.",
        "Documents depend on your situation and the type of procedure. After analysing your request, ABICOM indicates the required items according to the available official information."
      ),
    },
  ],
};

/* ---------------- SECTION VISUELLE ---------------- */
export const vaVisual = {
  label: bi("En images", "In pictures"),
  title: bi(
    "Votre partenaire d'accompagnement en RDC",
    "Your support partner in the DRC"
  ),
  items: [
    {
      src: vaImages.visa,
      alt: bi(
        "Assistance visa pour un professionnel expatrié",
        "Visa assistance for an expatriate professional"
      ),
    },
    {
      src: vaImages.passport,
      alt: bi(
        "Assistance administrative passeport et mobilité",
        "Passport and mobility administrative assistance"
      ),
    },
    {
      src: vaImages.mobility,
      alt: bi(
        "Professionnel étranger en mobilité internationale",
        "Foreign professional in international mobility"
      ),
    },
    {
      src: vaImages.assistance,
      alt: bi(
        "Préparation de documents de migration",
        "Preparing migration documents"
      ),
    },
  ],
};

/* ---------------- CTA FINAL ---------------- */
export const vaCta = {
  title: bi("Besoin d'aide pour vos démarches ?", "Need help with your procedures?"),
  text: bi(
    "Que vous soyez une entreprise, un professionnel étranger ou un citoyen congolais, ABICOM peut vous accompagner dans la préparation et le suivi de vos démarches.",
    "Whether you are a company, a foreign professional or a Congolese citizen, ABICOM can support you in preparing and following up your procedures."
  ),
  ctaForeign: bi("Je viens en RDC", "I'm coming to the DRC"),
  ctaCongolese: bi("Je suis Congolais", "I'm Congolese"),
  ctaContact: bi("Contacter ABICOM", "Contact ABICOM"),
  note: bi(
    "ABICOM accompagne et facilite vos démarches. La délivrance des documents officiels relève des autorités compétentes.",
    "ABICOM supports and facilitates your procedures. The issuance of official documents is the responsibility of the competent authorities."
  ),
};
