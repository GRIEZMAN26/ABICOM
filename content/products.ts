export interface Product {
  slug: string;
  name: string;
  formula?: string;
  application: string;
  packaging: string;
  purity: string;
  availability: string;
  image?: string;
}

export const products: Product[] = [
  {
    slug: "acide-sulfurique",
    name: "Acide Sulfurique",
    formula: "H2SO4 98%",
    application:
      "Lixiviation du cuivre et du cobalt — procédé central des mines du Katanga et du Lualaba.",
    packaging: "Vrac, Citernes ISO 20ft",
    purity: "Qualité minière",
    availability: "Stock Lubumbashi & Import",
    image: "/images/products/acide.png",
  },
  {
    slug: "soufre-granulaire",
    name: "Soufre Granulaire",
    formula: "99.5%",
    application:
      "Fabrication d'acide sulfurique et traitement des métaux.",
    packaging: "Big Bag 1 Tonne",
    purity: "99.5%",
    availability: "Sur commande (Import)",
    image: "/images/products/soufre.png",
  },
  {
    slug: "chaux-vive",
    name: "Chaux Vive / Calcaire",
    formula: "CaO / CaCO3",
    application:
      "Neutralisation, traitement des eaux et métallurgie.",
    packaging: "Vrac, Sacs 25kg, Big Bag",
    purity: "85–95%",
    availability: "Stock",
    image: "/images/products/chaux.png",
  },
  {
    slug: "coke-nuts",
    name: "Coke Nuts / Coal Nuts",
    formula: "Calibre 10–30mm",
    application: "Réducteur en fonderie et hauts fourneaux.",
    packaging: "Big Bag 1 Tonne",
    purity: "Calibre 10–30mm",
    availability: "Import",
    image: "/images/products/coke.png",
  },
  {
    slug: "oxyde-magnesium",
    name: "Oxyde de Magnésium",
    formula: "MgO",
    application: "Traitement des eaux acides, industrie minière.",
    packaging: "Sacs 25kg",
    purity: "90% min",
    availability: "Stock",
    image: "/images/products/mgo.png",
  },
  {
    slug: "lances-thermiques",
    name: "Lances Thermiques & Oxygène",
    formula: "Diam. 10–19mm",
    application: "Découpage et débouchage de fours, torpilles.",
    packaging: "Longueurs 1.5m, 2m, 3m",
    purity: "Diamètre 10–19mm",
    availability: "Sur commande",
    image: "/images/products/lances.png",
  },
];
