export interface Wine {
  slug: string;
  sku: string;
  name: string;
  vintage: string;
  type: string;
  format?: string;
  image?: string;
  descriptions: {
    en: string;
    sl: string;
    it: string;
  };
}

export const wines: Wine[] = [
  {
    slug: 'jakot-plava-etiketa-2023',
    sku: 'NANJPE23',
    name: 'Jakot Plava Etiketa',
    vintage: '2023',
    type: 'Macerato',
    image: '/images/wines/jakot-plava-etiketa.jpg',
    descriptions: {
      en: 'Friulano, macerated. The blue label — the most straightforward wine in the range.',
      sl: 'Friulano, maceriran. Modra etiketa — najbolj neposredno vino v ponudbi.',
      it: 'Friulano, macerato. L\'etichetta blu — il vino più diretto della gamma.',
    },
  },
  {
    slug: 'jantar-2020',
    sku: 'NANJAN20',
    name: 'Jantar',
    vintage: '2020',
    type: 'Macerato',
    image: '/images/wines/jantar.jpg',
    descriptions: {
      en: 'Amber — jantar in Slovenian. Extended skin contact.',
      sl: 'Jantar — podaljšan stik s kožicami.',
      it: 'Ambra — jantar in sloveno. Macerazione prolungata.',
    },
  },
  {
    slug: 'ma-jantar-2020',
    sku: 'NANMAJ20',
    name: 'Ma Jantar',
    vintage: '2020',
    type: 'Macerato',
    image: '/images/wines/ma-jantar.jpg',
    descriptions: {
      en: 'A variation on the Jantar theme.',
      sl: 'Variacija na temo Jantar.',
      it: 'Una variazione sul tema Jantar.',
    },
  },
  {
    slug: 'oxy-2020',
    sku: 'NANOXY10',
    name: 'Oxy',
    vintage: '2020',
    type: 'Macerato',
    format: '0.5l',
    image: '/images/wines/oxy.jpg',
    descriptions: {
      en: 'Oxidative ageing. Half bottle.',
      sl: 'Oksidativna staranje. Pol steklenice.',
      it: 'Affinamento ossidativo. Mezza bottiglia.',
    },
  },
  {
    slug: 're-jantar-2018',
    sku: 'NANREJ18',
    name: 'Re Jantar',
    vintage: '2018',
    type: 'Macerato',
    image: '/images/wines/re-jantar.jpg',
    descriptions: {
      en: 'The selection. Longer maceration, only in vintages that warrant it.',
      sl: 'Selekcija. Daljša maceracija, le v letnikih, ki si jo zaslužijo.',
      it: 'La selezione. Macerazione più lunga, solo nelle annate che lo meritano.',
    },
  },
  {
    slug: 're-jantar-2020',
    sku: 'NANREJ20',
    name: 'Re Jantar',
    vintage: '2020',
    type: 'Macerato',
    image: '/images/wines/re-jantar.jpg',
    descriptions: {
      en: 'The selection. Longer maceration, only in vintages that warrant it.',
      sl: 'Selekcija. Daljša maceracija, le v letnikih, ki si jo zaslužijo.',
      it: 'La selezione. Macerazione più lunga, solo nelle annate che lo meritano.',
    },
  },
];
