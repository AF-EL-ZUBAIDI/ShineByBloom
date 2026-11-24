// Every user-facing string lives here so the site stays fully bilingual.
// French is the default language (served at "/"), English lives at "/en/".
// Add or change copy in BOTH `fr` and `en`.

export const languages = { fr: "FR", en: "EN" } as const;
export const defaultLang = "fr";
export type Lang = keyof typeof languages;

export const links = {
  instagram: "https://www.instagram.com/shinebybloom/",
  dm: "https://ig.me/m/shinebybloom",
  tiktok: "https://www.tiktok.com/@shinebybloom",
};

const fr = {
  meta: {
    title: "Shine by Bloom · Bouquets personnalisés à Orléans",
    description:
      "Bouquets et paniers personnalisés à Orléans : des fleurs, son parfum, son maquillage ou ses soins préférés réunis dans une création faite main. Commande sur Instagram. Nous sommes à Orléans.",
  },
  nav: {
    creations: "Créations",
    details: "Petits détails",
    order: "Commander",
    cta: "Commander",
    switchLabel: "Langue",
  },
  hero: {
    script: "Bouquets, make-up, personnalisés",
    title: "Des fleurs et ses produits préférés, réunis dans un bouquet.",
    body: "Bouquets, box et paniers personnalisés, composés à la main à Orléans.",
    cta: "Commander sur Instagram",
    secondary: "Voir les créations",
    place: "Nous sommes à Orléans",
  },
  intro: {
    text: "Un parfum glissé entre les roses, un rouge à lèvres niché dans le gypsophile, son prénom sur la carte. Chaque création est pensée pour une seule personne.",
  },
  creations: {
    title: "Les créations",
    items: [
      {
        script: "le bouquet beauté",
        title: "Des roses, et tout ce qu’elle aime",
        body: "Maquillage, parfums ou soins viennent se glisser entre les fleurs. Dites-nous quels produits lui font plaisir, nous composons le bouquet autour.",
        alts: [
          "Bouquet de roses roses avec maquillage et papier gris",
          "Bouquet rose poudré garni de parfums",
          "Bouquet de roses pâles avec soins du visage",
        ],
      },
      {
        script: "le panier garni",
        title: "Tout un univers dans un panier",
        body: "Un panier tressé, une anse enrubannée de satin, et à l’intérieur des roses, des soins pour les cheveux, des parfums ou des douceurs. Disponible en taille S, M ou L.",
        alts: [
          "Panier de roses roses et blanches garni de parfums",
          "Gros plan sur un panier de roses pêche avec soins capillaires",
          "Panier de roses fuchsia, lys et produits de beauté",
        ],
      },
      {
        script: "le bouquet en box",
        title: "Un bouquet qui tient debout tout seul",
        body: "Les fleurs sont montées dans une box nouée d’un ruban : pas besoin de vase, la création se pose telle quelle. En version fleurie ou garnie de produits.",
        alts: [
          "Bouquet de roses corail et blanches dans une box rose",
          "Bouquet de roses rouges dans une box noire",
          "Box rose garnie de roses et de soins",
        ],
      },
      {
        script: "les roses rouges",
        title: "Le grand classique, en plus généreux",
        body: "Cœurs de roses, paniers noirs noués de satin, papillons dorés et nuages de gypsophile. Pour une déclaration, un anniversaire, ou sans raison particulière.",
        alts: [
          "Cœur de roses rouges et gypsophile",
          "Bouquet rond de roses rouges avec un parfum au centre",
          "Bouquet de roses rouges avec couronne dorée",
        ],
      },
      {
        script: "le sur-mesure",
        title: "Votre idée, nos fleurs",
        body: "Jaune soleil, dôme de roses ivoire, ourson et chocolats. Racontez-nous la personne que vous voulez gâter, nous imaginons la création qui lui ressemble.",
        alts: [
          "Bouquet de roses jaunes garni de produits",
          "Dôme de roses ivoire avec ruban rose",
          "Panier avec ourson couronné et chocolats",
        ],
      },
    ],
  },
  ribbon: {
    title: "Fait main, une création à la fois",
    alt: "Création florale Shine by Bloom",
  },
  details: {
    script: "qui font toute la différence",
    title: "Les petits détails",
    note: "À ajouter à votre création.",
    items: [
      { name: "Petite couronne", desc: "Dorée, pour une touche royale", price: "1 €" },
      { name: "Petits papillons", desc: "Légers et élégants, pour une finition féerique", price: "1 €" },
      { name: "Petites cartes à écrire", desc: "Idéales pour un mot doux", price: "1 €" },
      { name: "Carte vintage", desc: "Style rétro et romantique", price: "1 €" },
      { name: "Stick cœur", desc: "Pour tenir vos cartes ou sublimer la création", price: "1 €" },
      { name: "Spray de paillettes", desc: "Un voile scintillant sur les fleurs", price: "1 €" },
      { name: "Prénom personnalisé", desc: "Un prénom ou un petit mot, rien que pour elle", price: "1 €" },
    ],
  },
  order: {
    script: "en quatre étapes",
    title: "Comment commander",
    steps: [
      {
        title: "Écrivez-nous sur Instagram",
        body: "Envoyez un message à @shinebybloom avec la date et l’occasion.",
      },
      {
        title: "Choisissez le format et les couleurs",
        body: "Bouquet, bouquet en box, cœur ou panier en taille S, M ou L. Rose poudré, rouge, jaune, c’est vous qui décidez.",
      },
      {
        title: "Ajoutez les produits et les détails",
        body: "Parfum, maquillage, soins, puis une carte, un prénom ou quelques papillons.",
      },
      {
        title: "Recevez votre création",
        body: "Nous sommes à Orléans.",
      },
    ],
    sizesTitle: "Trois tailles de panier",
    sizeAlt: "Paniers en osier, taille",
    price: "Chaque création est unique : le prix dépend de la taille et des produits choisis. Demandez un devis en message privé.",
  },
  contact: {
    script: "à très vite",
    title: "Une occasion à fêter ?",
    body: "Les commandes se passent en message privé sur Instagram. Dites-nous la date, vos couleurs et votre budget, on s’occupe du reste.",
    cta: "Écrire sur Instagram",
    tiktok: "Voir les vidéos sur TikTok",
    place: "Orléans, France",
  },
  footer: {
    tagline: "Bouquets personnalisés, faits main à Orléans.",
    rights: "Tous droits réservés.",
    top: "Haut de page",
  },
  videos: { title: "En vidéo", label: "Vidéo d’une création Shine by Bloom" },
};

const en: typeof fr = {
  meta: {
    title: "Shine by Bloom · Personalised bouquets in Orléans",
    description:
      "Personalised bouquets and gift baskets in Orléans, France: flowers with their favourite perfume, make-up or skincare, arranged by hand. Order on Instagram. We are in Orléans.",
  },
  nav: {
    creations: "Creations",
    details: "Little details",
    order: "How to order",
    cta: "Order",
    switchLabel: "Language",
  },
  hero: {
    script: "Bouquets, make-up, personalised",
    title: "Flowers and the beauty products they love, in one bouquet.",
    body: "Personalised bouquets, boxes and gift baskets, arranged by hand in Orléans.",
    cta: "Order on Instagram",
    secondary: "See the creations",
    place: "We are in Orléans",
  },
  intro: {
    text: "A perfume tucked between the roses, a lipstick nestled in baby’s breath, their name on the card. Every creation is made with one person in mind.",
  },
  creations: {
    title: "The creations",
    items: [
      {
        script: "the beauty bouquet",
        title: "Roses, and everything she loves",
        body: "Make-up, perfume or skincare sits right between the flowers. Tell us which products will make her smile and we build the bouquet around them.",
        alts: [
          "Pink rose bouquet with make-up in grey wrapping",
          "Blush pink bouquet filled with perfumes",
          "Pale rose bouquet with skincare products",
        ],
      },
      {
        script: "the gift basket",
        title: "A whole world in a basket",
        body: "A woven basket, a satin-wrapped handle, and inside it roses, haircare, perfumes or sweet treats. Available in sizes S, M and L.",
        alts: [
          "Basket of pink and white roses filled with perfumes",
          "Close-up of a peach rose basket with haircare products",
          "Basket of fuchsia roses, lilies and beauty products",
        ],
      },
      {
        script: "the box bouquet",
        title: "A bouquet that stands on its own",
        body: "The flowers are set in a box tied with a ribbon: no vase needed, the creation is ready to display. Flowers only, or filled with products.",
        alts: [
          "Coral and white rose bouquet in a pink box",
          "Red rose bouquet in a black box",
          "Pink box filled with roses and skincare",
        ],
      },
      {
        script: "the red roses",
        title: "The great classic, made generous",
        body: "Rose hearts, black baskets tied with satin, golden butterflies and clouds of baby’s breath. For a declaration, a birthday, or no reason at all.",
        alts: [
          "Heart of red roses and baby’s breath",
          "Round red rose bouquet with a perfume in the centre",
          "Red rose bouquet with a golden crown",
        ],
      },
      {
        script: "made to measure",
        title: "Your idea, our flowers",
        body: "Sunshine yellow, a dome of ivory roses, a teddy bear with chocolates. Tell us about the person you want to spoil and we design something that looks like them.",
        alts: [
          "Yellow rose bouquet filled with products",
          "Dome of ivory roses with a pink ribbon",
          "Basket with a crowned teddy bear and chocolates",
        ],
      },
    ],
  },
  ribbon: {
    title: "Handmade, one creation at a time",
    alt: "Shine by Bloom floral creation",
  },
  details: {
    script: "that make all the difference",
    title: "The little details",
    note: "Add them to your creation.",
    items: [
      { name: "Little crown", desc: "Golden, for a royal touch", price: "€1" },
      { name: "Little butterflies", desc: "Light and elegant, for a fairytale finish", price: "€1" },
      { name: "Small note cards", desc: "Just right for a sweet message", price: "€1" },
      { name: "Vintage card", desc: "Retro and romantic", price: "€1" },
      { name: "Heart stick", desc: "Holds your cards or dresses up the creation", price: "€1" },
      { name: "Glitter spray", desc: "A shimmering veil over the flowers", price: "€1" },
      { name: "Custom name", desc: "A name or a few words, just for them", price: "€1" },
    ],
  },
  order: {
    script: "in four steps",
    title: "How to order",
    steps: [
      {
        title: "Message us on Instagram",
        body: "Write to @shinebybloom with the date and the occasion.",
      },
      {
        title: "Pick the format and colours",
        body: "Bouquet, box bouquet, heart, or a basket in size S, M or L. Blush pink, red, yellow, it is up to you.",
      },
      {
        title: "Add the products and details",
        body: "Perfume, make-up, skincare, then a card, a name or a few butterflies.",
      },
      {
        title: "Receive your creation",
        body: "We are in Orléans.",
      },
    ],
    sizesTitle: "Three basket sizes",
    sizeAlt: "Wicker baskets, size",
    price: "Every creation is unique: the price depends on the size and the products you choose. Ask for a quote by direct message.",
  },
  contact: {
    script: "see you soon",
    title: "Something to celebrate?",
    body: "Orders are taken by direct message on Instagram. Tell us the date, your colours and your budget, and we take care of the rest.",
    cta: "Message on Instagram",
    tiktok: "Watch the videos on TikTok",
    place: "Orléans, France",
  },
  footer: {
    tagline: "Personalised bouquets, handmade in Orléans.",
    rights: "All rights reserved.",
    top: "Back to top",
  },
  videos: { title: "On video", label: "Video of a Shine by Bloom creation" },
};

export const ui = { fr, en };
