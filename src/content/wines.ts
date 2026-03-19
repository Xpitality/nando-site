export interface Wine {
  slug: string;
  name: string;
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
    slug: 'rebula-črna-etiketa',
    name: 'Rebula Črna Etiketa',
    type: 'Macerato',
    descriptions: {
      en: 'Ribolla Gialla, macerated. The black label — extended skin contact.',
      sl: 'Rebula, macerirana. Črna etiketa — podaljšan stik s kožicami.',
      it: 'Ribolla Gialla, macerata. Etichetta nera — macerazione prolungata.',
    },
  },
  {
    slug: 'rebula-plava-etiketa',
    name: 'Rebula Plava Etiketa',
    type: 'Bianco',
    image: '/images/wines/rebula-plava-etiketa.jpg',
    descriptions: {
      en: 'Ribolla Gialla, blue label. Fresh, minimal skin contact.',
      sl: 'Rebula, plava etiketa. Sveža, minimalen stik s kožicami.',
      it: 'Ribolla Gialla, etichetta blu. Fresca, minimo contatto con le bucce.',
    },
  },
  {
    slug: 'jakot-črna-etiketa',
    name: 'Jakot Črna Etiketa',
    type: 'Macerato',
    image: '/images/wines/jakot-črna-etiketa.jpg',
    descriptions: {
      en: 'Friulano, macerated. The black label — longer on the skins.',
      sl: 'Friulano, maceriran. Črna etiketa — dlje na kožicah.',
      it: 'Friulano, macerato. Etichetta nera — più a lungo sulle bucce.',
    },
  },
  {
    slug: 'jakot-plava-etiketa',
    name: 'Jakot Plava Etiketa',
    type: 'Bianco',
    image: '/images/wines/jakot-plava-etiketa.jpg',
    descriptions: {
      en: 'Friulano, blue label. The most straightforward wine in the range.',
      sl: 'Friulano, plava etiketa. Najbolj neposredno vino v ponudbi.',
      it: 'Friulano, etichetta blu. Il vino più diretto della gamma.',
    },
  },
  {
    slug: 'malvazija-črna-etiketa',
    name: 'Malvazija Črna Etiketa',
    type: 'Macerato',
    descriptions: {
      en: 'Malvasia Istriana, macerated. The black label — skin contact.',
      sl: 'Malvazija, macerirana. Črna etiketa — stik s kožicami.',
      it: 'Malvasia Istriana, macerata. Etichetta nera — macerazione sulle bucce.',
    },
  },
  {
    slug: 'malvazija-plava-etiketa',
    name: 'Malvazija Plava Etiketa',
    type: 'Bianco',
    image: '/images/wines/malvazija-plava-etiketa.jpg',
    descriptions: {
      en: 'Malvasia Istriana, blue label. Fresh, bright.',
      sl: 'Malvazija, plava etiketa. Sveža, svetla.',
      it: 'Malvasia Istriana, etichetta blu. Fresca, luminosa.',
    },
  },
  {
    slug: 'jantar',
    name: 'Jantar',
    type: 'Macerato',
    image: '/images/wines/jantar.jpg',
    descriptions: {
      en: 'Amber — jantar in Slovenian. Extended skin-contact blend.',
      sl: 'Jantar — podaljšan stik s kožicami, zvrst.',
      it: 'Ambra — jantar in sloveno. Blend a macerazione prolungata.',
    },
  },
  {
    slug: 'ma-jantar',
    name: 'Ma Jantar',
    type: 'Macerato',
    image: '/images/wines/ma-jantar.jpg',
    descriptions: {
      en: 'A variation on the Jantar theme.',
      sl: 'Variacija na temo Jantar.',
      it: 'Una variazione sul tema Jantar.',
    },
  },
  {
    slug: 're-jantar',
    name: 'Re Jantar',
    type: 'Macerato',
    image: '/images/wines/re-jantar.jpg',
    descriptions: {
      en: 'The selection. Longer maceration, only in vintages that warrant it.',
      sl: 'Selekcija. Daljša maceracija, le v letnikih, ki si jo zaslužijo.',
      it: 'La selezione. Macerazione più lunga, solo nelle annate che lo meritano.',
    },
  },
  {
    slug: 'oxy',
    name: 'Oxy',
    type: 'Macerato',
    format: '0.5l',
    image: '/images/wines/oxy.jpg',
    descriptions: {
      en: 'Oxidative ageing. Half bottle.',
      sl: 'Oksidativno staranje. Pol steklenice.',
      it: 'Affinamento ossidativo. Mezza bottiglia.',
    },
  },
];
