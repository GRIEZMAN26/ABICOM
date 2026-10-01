// Contenus & images du département LA JARDINIÈRE (ABICOM SARL)
// Pour remplacer une photo par une vraie photo ABICOM : déposer le fichier
// dans /public/images/la-jardiniere/ puis mettre à jour l'entrée ci-dessous.

export const jlImages = {
  hero: "/images/la-jardiniere/hero.jpg",
  heroAlt: "/images/la-jardiniere/hero-alt.jpg",
  pepiniere: "/images/la-jardiniere/pepiniere.jpg",
  amenagement: "/images/la-jardiniere/amenagement.jpg",
  pelouse: "/images/la-jardiniere/pelouse.jpg",
  entreprise: "/images/la-jardiniere/entreprise.jpg",
  particulier: "/images/la-jardiniere/particulier.jpg",
  particulier2: "/images/la-jardiniere/particulier-2.jpg",
} as const;

type Bi = { fr: string; en: string };

const bi = (fr: string, en: string): Bi => ({ fr, en });

/* ---------------- HERO ---------------- */
export const jlHero = {
  badge: bi("ABICOM SARL • Département", "ABICOM SARL • Department"),
  title: "LA JARDINIÈRE",
  subtitle: "Pépinière • Jardinerie • Aménagement paysager",
  baseline: "Des espaces plus verts, plus soignés, plus accueillants.",
  description: bi(
    "La Jardinière accompagne les entreprises, espaces commerciaux et particuliers dans la création, l'embellissement et l'entretien de leurs espaces verts.",
    "La Jardinière supports companies, commercial spaces and individuals in creating, enhancing and maintaining their green spaces."
  ),
  ctaPrimary: bi("Demander un devis", "Request a quote"),
  ctaSecondary: bi("Découvrir nos services", "Discover our services"),
  imageAlt: bi(
    "Espace paysager aménagé par La Jardinière",
    "Landscaped space by La Jardinière"
  ),
  stats: [
    { n: "Pépinière", l: bi("Végétaux sélectionnés", "Selected plants") },
    { n: "5", l: bi("Prestations clés", "Key services") },
    { n: "RDC", l: bi("Lubumbashi & environs", "Lubumbashi & area") },
  ],
};

/* ---------------- INTRODUCTION ---------------- */
export const jlIntro = {
  label: bi("Qui sommes-nous ?", "Who are we?"),
  title: bi("Bienvenue chez La Jardinière", "Welcome to La Jardinière"),
  paragraphs: [
    bi(
      "La Jardinière est le département spécialisé en pépinière, jardinerie et aménagement paysager.",
      "La Jardinière is the department specialised in nursery, gardening and landscaping."
    ),
    bi(
      "Nous proposons des solutions complètes pour créer, embellir et entretenir les espaces verts, aussi bien dans les environnements professionnels que résidentiels.",
      "We provide complete solutions to create, enhance and maintain green spaces, in both professional and residential environments."
    ),
    bi(
      "De la sélection des végétaux à leur mise en place, en passant par l'aménagement et l'entretien, nous vous accompagnons pour transformer vos espaces en environnements harmonieux, naturels et accueillants.",
      "From plant selection to planting, through landscaping and maintenance, we support you in transforming your spaces into harmonious, natural and welcoming environments."
    ),
  ],
  imageAlt: bi("Végétaux de pépinière", "Nursery plants"),
  points: [
    bi("Sélection adaptée au climat", "Selection adapted to the climate"),
    bi("Mise en place professionnelle", "Professional planting"),
    bi("Entretien régulier", "Regular maintenance"),
  ],
};

/* ---------------- NOS ACTIVITÉS ---------------- */
export const jlActivities = {
  label: bi("Nos activités", "What we do"),
  title: bi("Tout pour créer et entretenir vos espaces verts", "Everything to create and maintain your green spaces"),
  subtitle: bi(
    "Des solutions adaptées à vos espaces, vos besoins et votre environnement.",
    "Solutions adapted to your spaces, your needs and your environment."
  ),
  items: [
    {
      key: "pepiniere",
      icon: "sprout",
      title: bi("Pépinière & plantes", "Nursery & plants"),
      text: bi(
        "Fourniture de plantes ornementales et fruitières sélectionnées selon les besoins de votre environnement.",
        "Supply of ornamental and fruit plants selected according to the needs of your environment."
      ),
      tags: ["Plantes ornementales", "Plantes fruitières", "Plants", "Végétaux"],
    },
    {
      key: "amenagement",
      icon: "landscape",
      title: bi("Aménagement paysager", "Landscaping"),
      text: bi(
        "Conception et réalisation d'espaces verts adaptés à vos bâtiments, terrains et espaces extérieurs.",
        "Design and execution of green spaces suited to your buildings, plots and outdoor areas."
      ),
      tags: ["Pelouses", "Massifs", "Plantations", "Jardinières"],
    },
    {
      key: "floral",
      icon: "flower",
      title: bi("Compositions florales", "Floral compositions"),
      text: bi(
        "Création de compositions florales et végétales pour embellir vos espaces et créer une atmosphère agréable.",
        "Creation of floral and plant compositions to enhance your spaces and create a pleasant atmosphere."
      ),
      tags: ["Compositions", "Décoration végétale", "Fleurs"],
    },
    {
      key: "entretien",
      icon: "scissors",
      title: bi("Entretien des espaces verts", "Green space maintenance"),
      text: bi(
        "Un entretien régulier pour préserver la beauté, la santé et la propreté de vos espaces verts.",
        "Regular maintenance to preserve the beauty, health and cleanliness of your green spaces."
      ),
      tags: ["Tonte", "Taille", "Arrosage", "Désherbage", "Nettoyage"],
    },
    {
      key: "pots",
      icon: "pot",
      title: bi("Pots & accessoires", "Pots & accessories"),
      text: bi(
        "Une sélection de pots et accessoires pour accompagner vos projets de décoration et d'aménagement végétal.",
        "A selection of pots and accessories to support your decoration and greening projects."
      ),
      tags: ["Pots", "Jardinières", "Accessoires", "Décoration"],
    },
  ],
};

/* ---------------- B2B ---------------- */
export const jlB2B = {
  label: bi("Solutions pour entreprises", "Solutions for companies"),
  title: bi("Végétalisez vos espaces professionnels", "Greenery your professional spaces"),
  text: bi(
    "L'environnement de votre entreprise participe à son image. La Jardinière accompagne les entreprises et espaces commerciaux dans la végétalisation et l'aménagement de leurs différents espaces.",
    "Your company environment is part of your image. La Jardinière supports companies and commercial spaces in greening and landscaping their various areas."
  ),
  cta: bi("Aménager mon espace professionnel", "Landscape my professional space"),
  imageAlt: bi("Aménagement paysager d'un espace professionnel", "Professional space landscaping"),
  items: [
    {
      icon: "building",
      title: bi("Façades", "Facades"),
      text: bi(
        "Apporter une touche végétale à l'extérieur de vos bâtiments.",
        "Bring a touch of greenery to the outside of your buildings."
      ),
    },
    {
      icon: "door",
      title: bi("Entrées", "Entrances"),
      text: bi(
        "Créer une première impression accueillante et professionnelle.",
        "Create a welcoming and professional first impression."
      ),
    },
    {
      icon: "terrace",
      title: bi("Terrasses", "Terraces"),
      text: bi(
        "Transformer vos terrasses en espaces agréables et végétalisés.",
        "Turn your terraces into pleasant, green spaces."
      ),
    },
    {
      icon: "parking",
      title: bi("Parkings", "Car parks"),
      text: bi(
        "Intégrer la végétation dans vos espaces de stationnement.",
        "Integrate vegetation into your parking areas."
      ),
    },
    {
      icon: "lounge",
      title: bi("Espaces de détente", "Relaxation areas"),
      text: bi(
        "Créer des environnements naturels propices au repos et au bien-être.",
        "Create natural environments conducive to rest and well-being."
      ),
    },
    {
      icon: "indoor",
      title: bi("Espaces intérieurs", "Indoor spaces"),
      text: bi(
        "Introduire la végétation dans vos bureaux, halls, réceptions et espaces commerciaux.",
        "Introduce greenery into your offices, lobbies, receptions and retail spaces."
      ),
    },
  ],
};

/* ---------------- PARTICULIERS ---------------- */
export const jlParticuliers = {
  label: bi("Pour les particuliers", "For individuals"),
  title: bi(
    "Votre jardin mérite aussi une attention particulière",
    "Your garden deserves special attention too"
  ),
  text: bi(
    "La Jardinière accompagne également les particuliers dans leurs projets de végétalisation et d'aménagement extérieur.",
    "La Jardinière also supports individuals with their greening and outdoor landscaping projects."
  ),
  cta: bi("Parlez-nous de votre projet", "Tell us about your project"),
  imageAlt: bi("Aménagement d'un jardin résidentiel", "Residential garden landscaping"),
  items: [
    bi("Jardins résidentiels", "Residential gardens"),
    bi("Pelouses", "Lawns"),
    bi("Plantes ornementales", "Ornamental plants"),
    bi("Plantes fruitières", "Fruit plants"),
    bi("Massifs floraux", "Flower beds"),
    bi("Jardinières", "Planters"),
    bi("Pots et accessoires", "Pots & accessories"),
    bi("Entretien de jardins", "Garden maintenance"),
  ],
};

/* ---------------- NOTRE APPROCHE ---------------- */
export const jlApproach = {
  label: bi("Notre approche", "Our approach"),
  title: bi("Du végétal à l'espace", "From plant to space"),
  steps: [
    {
      n: "01",
      title: bi("Écouter", "Listen"),
      text: bi(
        "Comprendre votre espace, vos besoins et vos objectifs.",
        "Understand your space, your needs and your goals."
      ),
    },
    {
      n: "02",
      title: bi("Sélectionner", "Select"),
      text: bi(
        "Choisir les plantes, fleurs et accessoires adaptés à votre environnement.",
        "Choose the plants, flowers and accessories suited to your environment."
      ),
    },
    {
      n: "03",
      title: bi("Aménager", "Landscape"),
      text: bi(
        "Organiser et installer les différents éléments pour créer un ensemble harmonieux.",
        "Organise and install the different elements to create a harmonious whole."
      ),
    },
    {
      n: "04",
      title: bi("Entretenir", "Maintain"),
      text: bi(
        "Assurer le suivi nécessaire pour maintenir vos espaces verts en bon état.",
        "Provide the follow-up needed to keep your green spaces in good condition."
      ),
    },
  ],
};

/* ---------------- ENGAGEMENT ---------------- */
export const jlEngagement = {
  label: bi("Notre engagement", "Our commitment"),
  title: bi("Créer des espaces qui font du bien", "Creating spaces that feel good"),
  text: bi(
    "Notre approche repose sur quatre principes : le choix de végétaux adaptés, l'harmonie esthétique, la qualité d'exécution et le suivi régulier.",
    "Our approach rests on four principles: choosing suitable plants, aesthetic harmony, execution quality and regular follow-up."
  ),
  items: [
    {
      icon: "leaf",
      title: bi("Végétaux adaptés", "Suitable plants"),
      text: bi(
        "Des plantes choisies en fonction de leur environnement.",
        "Plants chosen according to their environment."
      ),
    },
    {
      icon: "sparkle",
      title: bi("Harmonie esthétique", "Aesthetic harmony"),
      text: bi(
        "Des compositions pensées pour créer un ensemble cohérent.",
        "Compositions designed to create a coherent whole."
      ),
    },
    {
      icon: "shield",
      title: bi("Qualité d'exécution", "Execution quality"),
      text: bi(
        "Une réalisation soignée jusque dans les détails.",
        "Careful work down to the finest details."
      ),
    },
    {
      icon: "refresh",
      title: bi("Suivi régulier", "Regular follow-up"),
      text: bi(
        "Un entretien adapté pour préserver vos espaces.",
        "Suitable maintenance to preserve your spaces."
      ),
    },
  ],
};

/* ---------------- GALERIE ---------------- */
export const jlGallery = {
  label: bi("Galerie", "Gallery"),
  title: bi("Des espaces pensés avec soin", "Spaces designed with care"),
  text: bi(
    "Chaque projet commence par le choix des végétaux et des éléments adaptés à l'environnement. Nous recherchons l'équilibre entre esthétique, fonctionnalité et entretien afin de créer des espaces agréables et durables.",
    "Every project starts with choosing the plants and elements suited to the environment. We seek the balance between aesthetics, functionality and maintenance to create pleasant and durable spaces."
  ),
  items: [
    { src: jlImages.pepiniere, cat: bi("Pépinière", "Nursery"), alt: bi("Plantes de pépinière", "Nursery plants") },
    { src: jlImages.amenagement, cat: bi("Aménagement", "Landscaping"), alt: bi("Aménagement paysager", "Landscaping project") },
    { src: jlImages.pelouse, cat: bi("Entretien", "Maintenance"), alt: bi("Pelouse entretenue", "Maintained lawn") },
    { src: jlImages.entreprise, cat: bi("Espaces professionnels", "Professional spaces"), alt: bi("Espace professionnel végétalisé", "Greened professional space") },
    { src: jlImages.particulier, cat: bi("Jardins", "Gardens"), alt: bi("Jardin résidentiel", "Residential garden") },
    { src: jlImages.particulier2, cat: bi("Jardins", "Gardens"), alt: bi("Extérieur aménagé", "Landscaped outdoor area") },
  ],
};

/* ---------------- POURQUOI LA JARDINIÈRE ---------------- */
export const jlWhy = {
  label: bi("Pourquoi La Jardinière ?", "Why La Jardinière?"),
  title: bi("Une solution complète pour vos espaces verts", "A complete solution for your green spaces"),
  text: bi(
    "De la plante à l'aménagement, et de la création à l'entretien, La Jardinière vous accompagne avec une approche intégrée.",
    "From the plant to landscaping, and from creation to maintenance, La Jardinière supports you with an integrated approach."
  ),
  items: [
    {
      icon: "sprout",
      title: bi("Pépinière", "Nursery"),
      text: bi(
        "Une offre de plantes ornementales et fruitières.",
        "A range of ornamental and fruit plants."
      ),
    },
    {
      icon: "pot",
      title: bi("Jardinerie", "Gardening"),
      text: bi("Des pots et accessoires pour vos projets.", "Pots and accessories for your projects."),
    },
    {
      icon: "landscape",
      title: bi("Aménagement", "Landscaping"),
      text: bi(
        "Des espaces conçus et réalisés selon vos besoins.",
        "Spaces designed and executed according to your needs."
      ),
    },
    {
      icon: "scissors",
      title: bi("Entretien", "Maintenance"),
      text: bi(
        "Un suivi régulier pour préserver vos espaces.",
        "Regular follow-up to preserve your spaces."
      ),
    },
  ],
};

/* ---------------- CTA FINAL ---------------- */
export const jlCta = {
  title: bi("Un espace à végétaliser ?", "A space to green?"),
  text: bi(
    "Que vous soyez une entreprise, un commerce ou un particulier, La Jardinière vous accompagne dans votre projet.",
    "Whether you are a company, a business or an individual, La Jardinière supports you in your project."
  ),
  primary: bi("Parler de mon projet", "Talk about my project"),
  secondary: bi("Demander un devis", "Request a quote"),
};
