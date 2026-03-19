export interface Wine {
  slug: string;
  name: string;
  type: string;
  grape: string;
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
    grape: 'Ribolla Gialla',
    descriptions: {
      en: 'My Ribolla Gialla with the black label — I leave it on the skins for a long time, until the colour deepens and the structure builds up. What comes out is amber, with dried fruit and honey, and a tannic grip that needs air to open. This is how I think Ribolla should be made on ponca.',
      sl: 'Moja Rebula s črno etiketo — pustim jo na kožicah dolgo, dokler se barva poglobi in struktura zgradi. Rezultat je jantar, s sušenim sadjem in medom, s taninskim prijemom, ki potrebuje zrak, da se odpre. Tako mislim, da bi morala biti Rebula na ponki.',
      it: 'La mia Ribolla Gialla con l\'etichetta nera — la lascio sulle bucce a lungo, finché il colore non si approfondisce e la struttura non si costruisce. Quello che esce è ambrato, con frutta secca e miele, e una presa tannica che ha bisogno di aria per aprirsi. È così che penso vada fatta la Ribolla sulla ponca.',
    },
  },
  {
    slug: 'rebula-plava-etiketa',
    name: 'Rebula Plava Etiketa',
    type: 'Bianco',
    grape: 'Ribolla Gialla',
    image: '/images/wines/rebula-plava-etiketa.jpg',
    descriptions: {
      en: 'The blue label Rebula — shorter skin contact, brighter, more direct. I wanted a Ribolla you can open without ceremony. The mineral backbone from the ponca is still there, with citrus and white flowers. This is the one I open when friends come over for lunch.',
      sl: 'Rebula s plavo etiketo — krajši stik s kožicami, svetlejša, bolj neposredna. Želel sem Rebulo, ki jo lahko odpreš brez ceremonije. Mineralna hrbtenica ponke je še vedno tam, s citrusnimi in belimi cvetnimi notami. To je tista, ki jo odprem, ko pridejo prijatelji na kosilo.',
      it: 'La Rebula etichetta blu — meno contatto con le bucce, più luminosa, più diretta. Volevo una Ribolla che si può aprire senza cerimonie. La spina dorsale minerale della ponca c\'è ancora, con agrumi e fiori bianchi. Questa è quella che apro quando vengono gli amici a pranzo.',
    },
  },
  {
    slug: 'jakot-črna-etiketa',
    name: 'Jakot Črna Etiketa',
    type: 'Macerato',
    grape: 'Friulano',
    image: '/images/wines/jakot-črna-etiketa.jpg',
    descriptions: {
      en: 'Friulano with the black label. Jakot is our name for it — Tokaj, as it was known here for centuries. Long maceration pulls out the almond and bitter herb character that this grape hides until you give it time. A serious wine, from the oldest vines I have.',
      sl: 'Friulano s črno etiketo. Jakot je naše ime za Friulano — Tokaj, kot so mu rekli tukaj že stoletja. Dolga maceracija izvleče mandljev in grenko-zeliščni značaj, ki ga ta sorta skriva, dokler ji ne daš časa. Resno vino, iz najstarejših trt, ki jih imam.',
      it: 'Il Friulano con l\'etichetta nera. Jakot è il nostro nome per il Friulano — Tokaj, come lo chiamano qui da secoli. La macerazione lunga tira fuori il carattere di mandorla e erbe amare che questo vitigno nasconde finché non gli dai tempo. Un vino serio, dalle viti più vecchie che ho.',
    },
  },
  {
    slug: 'jakot-plava-etiketa',
    name: 'Jakot Plava Etiketa',
    type: 'Bianco',
    grape: 'Friulano',
    image: '/images/wines/jakot-plava-etiketa.jpg',
    descriptions: {
      en: 'The blue label Jakot — the most straightforward wine I make. Friulano with minimal skin contact, crisp, with the almond finish and the salinity that comes from ponca. If you\'ve never tried my wines, start here.',
      sl: 'Jakot s plavo etiketo — najbolj neposredno vino, ki ga delam. Friulano z minimalnim stikom s kožicami, svež, z mandljevim zaključkom in slanostjo, ki prihaja iz ponke. Če še niste poskusili mojih vin, začnite tukaj.',
      it: 'Lo Jakot etichetta blu — il vino più diretto che faccio. Friulano con minimo contatto con le bucce, fresco, con il finale di mandorla e la salinità che viene dalla ponca. Se non avete mai provato i miei vini, cominciate da qui.',
    },
  },
  {
    slug: 'malvazija-črna-etiketa',
    name: 'Malvazija Črna Etiketa',
    type: 'Macerato',
    grape: 'Malvasia Istriana',
    descriptions: {
      en: 'Malvasia Istriana on the skins. This grape responds to maceration like no other — the aromatics open up, the texture becomes waxy, almost oily. Apricot, dried herbs, beeswax. I think this is one of the wines that best shows what this land between two countries can do.',
      sl: 'Malvazija Istrska na kožicah. Ta sorta se na maceracijo odzove kot nobena druga — aromatika se odpre, tekstura postane voščena, skoraj oljnata. Marelica, suha zelišča, čebelji vosek. Mislim, da je to eno od vin, ki najbolje pokaže, kaj zmore ta zemlja med dvema državama.',
      it: 'La Malvasia Istriana sulle bucce. Questo vitigno risponde alla macerazione come nessun altro — gli aromi si aprono, la texture diventa cerosa, quasi oleosa. Albicocca, erbe secche, cera d\'api. Credo sia uno dei vini che meglio mostra cosa può fare questa terra tra due paesi.',
    },
  },
  {
    slug: 'malvazija-plava-etiketa',
    name: 'Malvazija Plava Etiketa',
    type: 'Bianco',
    grape: 'Malvasia Istriana',
    image: '/images/wines/malvazija-plava-etiketa.jpg',
    descriptions: {
      en: 'Fresh Malvasia — aromatic, floral, with that gentle bitterness on the finish that marks this grape in the Brda hills. Just enough skin contact to give it texture without weighing it down. A summer wine, if I had to pick one.',
      sl: 'Sveža Malvazija — aromatična, cvetlična, z nežno grenkostjo na zaključku, ki označuje to sorto v Brdih. Ravno dovolj stika s kožicami, da dobi teksturo, ne da bi bila pretežka. Poletno vino, če bi moral izbrati eno.',
      it: 'Malvasia fresca — aromatica, floreale, con quella gentile amarezza nel finale che segna questo vitigno nelle colline del Brda. Quel tanto di contatto con le bucce che serve per dare struttura senza appesantire. Un vino estivo, se dovessi sceglierne uno.',
    },
  },
  {
    slug: 'jantar',
    name: 'Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/jantar.jpg',
    descriptions: {
      en: 'Jantar means amber in Slovenian, and that\'s what it is — the colour that comes from leaving white grapes on their skins. A blend of local varieties, all macerated together. Layered, complex, with the mineral depth of ponca running through it. I age it in the black ceramic bottle you see here.',
      sl: 'Jantar — barva, ki nastane, ko pustiš belo grozdje na kožicah. Zvrst lokalnih sort, vse macerirane skupaj. Slojevito, kompleksno, z mineralno globino ponke, ki teče skozenj. Staram ga v črni keramični steklenici, ki jo vidite tukaj.',
      it: 'Jantar vuol dire ambra in sloveno, ed è quello che è — il colore che viene dal lasciare le uve bianche sulle bucce. Un blend di varietà locali, tutte macerate insieme. Stratificato, complesso, con la profondità minerale della ponca che lo attraversa. Lo affino nella bottiglia di ceramica nera che vedete qui.',
    },
  },
  {
    slug: 'ma-jantar',
    name: 'Ma Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/ma-jantar.jpg',
    descriptions: {
      en: 'A different reading of the same blend. Same local varieties as Jantar, but a different maceration or proportion — every year it comes out a little different. Where Jantar is deep and needs time, Ma Jantar tends to be more open, more immediate. They\'re siblings, not twins.',
      sl: 'Drugačno branje iste zvrsti. Iste lokalne sorte kot Jantar, ampak drugačna maceracija ali razmerje — vsako leto pride malo drugače. Kjer je Jantar globok in potrebuje čas, je Ma Jantar bolj odprt, bolj neposreden. Sta brat in sestra, ne dvojčka.',
      it: 'Una lettura diversa dello stesso blend. Stesse varietà locali del Jantar, ma una macerazione o proporzione diversa — ogni anno viene un po\' diverso. Dove il Jantar è profondo e ha bisogno di tempo, il Ma Jantar tende a essere più aperto, più immediato. Sono fratelli, non gemelli.',
    },
  },
  {
    slug: 're-jantar',
    name: 'Re Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/re-jantar.jpg',
    descriptions: {
      en: 'The king of ambers. I only make this when the year deserves it — stricter grape selection, longer maceration, more time in cellar before I let it go. This is the wine I make when everything aligns: the weather, the fruit, and my patience. Concentrated, built to age.',
      sl: 'Kralj jantarjev. Tega naredim samo, ko si letnik to zasluži — strožja selekcija grozdja, daljša maceracija, več časa v kleti, preden ga spustim. To je vino, ki ga naredim, ko se vse poklopi: vreme, sadje in moja potrpežljivost. Koncentrirano, narejeno za staranje.',
      it: 'Il re degli ambra. Lo faccio solo quando l\'annata lo merita — selezione delle uve più rigorosa, macerazione più lunga, più tempo in cantina prima di lasciarlo andare. Questo è il vino che faccio quando tutto si allinea: il clima, il frutto e la mia pazienza. Concentrato, fatto per invecchiare.',
    },
  },
  {
    slug: 'oxy',
    name: 'Oxy',
    type: 'Macerato',
    grape: 'Blend',
    format: '0.5l',
    image: '/images/wines/oxy.jpg',
    descriptions: {
      en: 'Oxidative ageing, taken as far as it goes. This wine spent a long time exposed to air in the cellar, and it shows — hazelnuts, dried apricot, caramel. Not everyone likes this style, and that\'s fine. Half bottle, because a little goes a long way. Pour a glass, take your time.',
      sl: 'Oksidativno staranje, pripeljano do konca. To vino je v kleti preživelo dolgo časa izpostavljeno zraku, in to se pozna — lešniki, suhe marelice, karamela. Ne marajo vsi tega stila, in to je v redu. Pol steklenice, ker malo zadostuje. Natočite kozarec, vzemite si čas.',
      it: 'Affinamento ossidativo, portato fino in fondo. Questo vino ha passato molto tempo esposto all\'aria in cantina, e si sente — nocciole, albicocca secca, caramello. Non a tutti piace questo stile, e va bene così. Mezza bottiglia, perché poco basta. Versatevi un bicchiere, prendetevi tempo.',
    },
  },
];
