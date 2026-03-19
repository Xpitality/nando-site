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
      en: 'The black label Rebula. Ribolla Gialla grapes macerated on their skins for an extended period, drawing out the colour and structure that ponca soil gives to this variety. A deep amber wine with dried fruit, honey and a tannic grip that opens up with time in the glass.',
      sl: 'Rebula s črno etiketo. Grozdje Rebule macerirano na kožicah za daljše obdobje, iz katerega izhajata barva in struktura, ki jo ponka daje tej sorti. Globoko jantarno vino s sušenim sadjem, medom in taninskim prijemom, ki se odpre s časom v kozarcu.',
      it: 'La Rebula etichetta nera. Uve di Ribolla Gialla macerate sulle bucce per un periodo prolungato, estraendo il colore e la struttura che il suolo di ponca conferisce a questa varietà. Un vino ambrato intenso con frutta secca, miele e una presa tannica che si apre col tempo nel bicchiere.',
    },
  },
  {
    slug: 'rebula-plava-etiketa',
    name: 'Rebula Plava Etiketa',
    type: 'Bianco',
    grape: 'Ribolla Gialla',
    image: '/images/wines/rebula-plava-etiketa.jpg',
    descriptions: {
      en: 'The blue label Rebula. A fresher take on Ribolla Gialla — shorter skin contact, brighter acidity, more immediate fruit. The mineral backbone of the ponca comes through clean, with citrus and white flower notes. Meant for drinking without overthinking.',
      sl: 'Rebula s plavo etiketo. Svežejši pristop k Rebuli — krajši stik s kožicami, svetlejša kislina, bolj neposredno sadje. Mineralna hrbtenica ponke se prebije čisto, z notami citrusov in belih cvetov. Vino za pitje brez pretiravanja.',
      it: 'La Rebula etichetta blu. Un approccio più fresco alla Ribolla Gialla — minor contatto con le bucce, acidità più luminosa, frutto più immediato. La spina dorsale minerale della ponca emerge pulita, con note di agrumi e fiori bianchi. Da bere senza pensarci troppo.',
    },
  },
  {
    slug: 'jakot-črna-etiketa',
    name: 'Jakot Črna Etiketa',
    type: 'Macerato',
    grape: 'Friulano',
    image: '/images/wines/jakot-črna-etiketa.jpg',
    descriptions: {
      en: 'The black label Jakot. Friulano with extended maceration — the grape that locals have always called Tokaj, renamed Jakot to sidestep the Hungarian trademark. Rich, textured, with the almond and bitter herb character that only long skin contact brings out of this variety. A serious wine from old vines.',
      sl: 'Jakot s črno etiketo. Friulano z daljšo maceracijo — sorta, ki so jo domačini vedno imenovali Tokaj, preimenovana v Jakot. Bogato, teksturirano vino z značajem mandljev in grenkih zelišč, ki ga iz te sorte izvleče le dolg stik s kožicami. Resno vino s starih trt.',
      it: 'Lo Jakot etichetta nera. Friulano a macerazione prolungata — il vitigno che i locali hanno sempre chiamato Tokaj, rinominato Jakot. Ricco, strutturato, con il carattere di mandorla ed erbe amare che solo il lungo contatto con le bucce estrae da questa varietà. Un vino serio da vecchie viti.',
    },
  },
  {
    slug: 'jakot-plava-etiketa',
    name: 'Jakot Plava Etiketa',
    type: 'Bianco',
    grape: 'Friulano',
    image: '/images/wines/jakot-plava-etiketa.jpg',
    descriptions: {
      en: 'The blue label Jakot. The most straightforward wine in the range — Friulano vinified with minimal skin contact. Crisp, with the almond finish typical of the variety and the salinity that comes from ponca. The entry point to understanding what Nando does.',
      sl: 'Jakot s plavo etiketo. Najbolj neposredno vino v ponudbi — Friulano pridelan z minimalnim stikom s kožicami. Svež, z mandljevim zaključkom, značilnim za sorto, in slanostjo, ki prihaja iz ponke. Vstopna točka za razumevanje, kaj dela Nando.',
      it: 'Lo Jakot etichetta blu. Il vino più diretto della gamma — Friulano vinificato con minimo contatto con le bucce. Fresco, con il finale di mandorla tipico della varietà e la salinità che viene dalla ponca. Il punto d\'ingresso per capire cosa fa Nando.',
    },
  },
  {
    slug: 'malvazija-črna-etiketa',
    name: 'Malvazija Črna Etiketa',
    type: 'Macerato',
    grape: 'Malvasia Istriana',
    descriptions: {
      en: 'The black label Malvazija. Malvasia Istriana macerated on the skins — a grape that responds beautifully to this treatment, releasing aromatic complexity and a waxy, almost oily texture. Apricot, dried herbs, beeswax. One of the wines that best shows the potential of this border terroir.',
      sl: 'Malvazija s črno etiketo. Malvazija Istrska, macerirana na kožicah — sorta, ki se na to obdelavo odzove čudovito, z aromatsko kompleksnostjo in voščeno, skoraj oljnato teksturo. Marelica, suha zelišča, čebelji vosek. Eno od vin, ki najbolje kaže potencial tega mejnega terroirja.',
      it: 'La Malvazija etichetta nera. Malvasia Istriana macerata sulle bucce — un vitigno che risponde splendidamente a questo trattamento, rilasciando complessità aromatica e una texture cerosa, quasi oleosa. Albicocca, erbe secche, cera d\'api. Uno dei vini che meglio mostra il potenziale di questo terroir di confine.',
    },
  },
  {
    slug: 'malvazija-plava-etiketa',
    name: 'Malvazija Plava Etiketa',
    type: 'Bianco',
    grape: 'Malvasia Istriana',
    image: '/images/wines/malvazija-plava-etiketa.jpg',
    descriptions: {
      en: 'The blue label Malvazija. Fresh Malvasia Istriana — aromatic, floral, with the gentle bitterness on the finish that marks this grape in the Brda hills. Light skin contact gives it just enough texture to hold your attention without weighing it down.',
      sl: 'Malvazija s plavo etiketo. Sveža Malvazija Istrska — aromatična, cvetlična, z nežno grenkostjo na zaključku, ki označuje to sorto v Brdih. Lahek stik s kožicami ji daje ravno dovolj teksture, da zadrži pozornost, ne da bi jo obtežil.',
      it: 'La Malvazija etichetta blu. Malvasia Istriana fresca — aromatica, floreale, con la gentile amarezza nel finale che segna questo vitigno nelle colline del Brda. Un leggero contatto con le bucce le dà quel tanto di struttura che tiene l\'attenzione senza appesantirla.',
    },
  },
  {
    slug: 'jantar',
    name: 'Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/jantar.jpg',
    descriptions: {
      en: 'Amber — jantar in Slovenian. A blend of local white varieties, all macerated on their skins. The name says what it is: the colour that comes from extended contact between juice and grape skins. Layered, complex, with the mineral depth of ponca running through it. Aged in the distinctive black ceramic bottle.',
      sl: 'Jantar. Zvrst lokalnih belih sort, vse macerirane na kožicah. Ime pove, kaj je: barva, ki nastane ob podaljšanem stiku soka in grozdnih kožic. Slojevito, kompleksno, z mineralno globino ponke, ki teče skozenj. Starano v prepoznavni črni keramični steklenici.',
      it: 'Ambra — jantar in sloveno. Un blend di varietà bianche locali, tutte macerate sulle bucce. Il nome dice cos\'è: il colore che nasce dal contatto prolungato tra mosto e bucce. Stratificato, complesso, con la profondità minerale della ponca che lo attraversa. Affinato nella distintiva bottiglia in ceramica nera.',
    },
  },
  {
    slug: 'ma-jantar',
    name: 'Ma Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/ma-jantar.jpg',
    descriptions: {
      en: 'A different reading of the Jantar blend. Same local varieties, different maceration length or proportion, yielding a wine that shares the family resemblance but has its own character. Where Jantar is deep and contemplative, Ma Jantar tends to be more immediate and open.',
      sl: 'Drugačno branje zvrsti Jantar. Iste lokalne sorte, drugačna dolžina maceracije ali razmerje, ki daje vino s sorodnimi potezami, a z lastnim značajem. Kjer je Jantar globok in premišljen, je Ma Jantar bolj neposreden in odprt.',
      it: 'Una lettura diversa del blend Jantar. Stesse varietà locali, diversa durata di macerazione o proporzione, per un vino che condivide la somiglianza familiare ma ha il suo carattere. Dove Jantar è profondo e contemplativo, Ma Jantar tende a essere più immediato e aperto.',
    },
  },
  {
    slug: 're-jantar',
    name: 'Re Jantar',
    type: 'Macerato',
    grape: 'Blend',
    image: '/images/wines/re-jantar.jpg',
    descriptions: {
      en: 'The king of ambers. The selection — made only in vintages that warrant it. Longer maceration, stricter grape selection, more time in cellar before release. This is the wine Andrej makes when everything aligns: the weather, the fruit, the patience. Concentrated, layered, built to age.',
      sl: 'Kralj jantarjev. Selekcija — narejena le v letnikih, ki si jo zaslužijo. Daljša maceracija, strožja selekcija grozdja, več časa v kleti pred prodajo. To je vino, ki ga Andrej naredi, ko se vse poklopi: vreme, sadje, potrpežljivost. Koncentrirano, slojevito, narejeno za staranje.',
      it: 'Il re degli ambra. La selezione — prodotta solo nelle annate che lo meritano. Macerazione più lunga, selezione delle uve più rigorosa, più tempo in cantina prima del rilascio. Questo è il vino che Andrej fa quando tutto si allinea: il clima, il frutto, la pazienza. Concentrato, stratificato, fatto per invecchiare.',
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
      en: 'Oxidative ageing taken to its conclusion. A wine that has spent extended time exposed to air in cellar, developing the nutty, sherried complexity that divides opinion. Hazelnuts, dried apricot, caramel. Half bottle — concentrated and meant for slow drinking, a glass at a time.',
      sl: 'Oksidativno staranje, pripeljano do konca. Vino, ki je v kleti preživelo podaljšan čas izpostavljeno zraku, pri čemer je razvilo orehovo, šerijsko kompleksnost, ki deli mnenja. Lešniki, suhe marelice, karamela. Pol steklenice — koncentrirano in namenjeno počasnemu pitju, kozarec za kozarcem.',
      it: 'L\'affinamento ossidativo portato alla sua conclusione. Un vino che ha trascorso tempo prolungato esposto all\'aria in cantina, sviluppando la complessità nocciolata e sherrificata che divide le opinioni. Nocciole, albicocca secca, caramello. Mezza bottiglia — concentrato e pensato per essere bevuto lentamente, un bicchiere alla volta.',
    },
  },
];
