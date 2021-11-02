import { BlogPost } from '../interfaces/blogPost';


export const Blogs: BlogPost[] = [
  {
    id: 1,
    name: 'So kannst du mit Bitcoin eine Rendite erzielen',
    meta: 'In diesem Blogpost lernst du, wie du mit deinen Bitcoin eine Rendite erzielen kannst.',
    url: 'mit-bitcoin-eine-rendite-erzielen',
    data: [
      {
        text: 'Du kannst deine BTC "hodlen" - oder du kannst sie für dich arbeiten lassen. ' +
          'Es gibt viele Möglichkeiten, mit deinen Bitcoin eine Rendite zu erzielen. In diesem ' +
          'Blogpost wollen wir auf einige davon eingehen.',
        image: '/assets/background.png',
      },
      {
        header: '1. Sparprodukte',
        text: 'Es gibt allerlei Sparprodukte auf dem Markt. Nuri bietet ' +
          'zum Beispiel einen Sparplan für BTC an, der auch noch verzinst wird. ' +
          'Andere Anbieter in diesem Bereich sind Binance, die sowohl flexible ' +
          'Sparprodukte (die BTC können jederzeit wieder aus dem ' +
          'Sparen heraus genommen werden - die Zinsen werden auf den Tag ' +
          'genau berechnet) und feste Sparprodukte (die BTC sind für eine ' +
          'feste Laufzeit im Sparmodus - und können nicht herausgenommen werden). '
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Es besteht ein geringes Risiko ',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Die Rendite ist überschaubar (unter Berücksichtigung von Transaktionskosten evtl. sogar negative Rendite)',
      },
      {
        text: 'Mehr über Sparprodukte',
        blog: 'https://coingarden.de/strategie/sparprodukte',
      },
      {
        header: '2. Lending',
        text: 'Eine weitere Art eine Rendite zu erzielen ist das "Lending" (zu deutsch: die "Leihe"). ' +
          'Dabei werden die Bitcoin an eine Defi-Plattform, wie AAVE, übertragen, die dafür  ' +
          'Zinsen bezahlen. Die Zinsen ändern sind ständig und werden bei der Auszahlung (Withdrawal) ' +
          'mit ausgezahlt. Eine Auszahlung jederzeit angefordert werden kann.\n' +
          'Zusätzlich geben die o.g. Plattformen bei der Einlage (Deposit) Token heraus, die die Höhe' +
          'der Einlage repräsentieren sollten. Diese Token können wiederum angelegt werden.'
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Flexibilität (Auszahlung kann jederzeit angefordert werden)',
      },
      {
        text: '- Man erhält einen Token (!), der gehandelt/angelegt werden kann',
      },
      {
        text: '- Relativ gute Zinssätze (ähnlich wie feste Sparprodukte - siehe oben)',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Transaktionsgebühren fallen an, da die Kryptos übertragen werden müssen (2 mal)',
      },
      {
        text: '- Gefahr, daß die Plattform gehacked wird, besteht',
      },
      {
        text: 'Mehr über Lending',
        blog: 'https://coingarden.de/strategie/lending',
      },
      {
        header: '3. Liquidity Mining',
        text: 'Eine weitere Möglichkeit eine Rendite mit dem Verleihen von Bitcoin zu erzielen ist ' +
          'das Liquidity Mining. Auf Plattformen wie CakeDefi, eine sogenannte DEX (Decentralized Exchange)' +
          'kann man seine BTC zu sogenannten Liquiditätspools (Liquidity Pools) hinzufügen und erhält ' +
          'dafür sowohl Zinsen als auch einen Token (im Falle von CakeDefi ist das der DFI-Token). Die ' +
          'Einlage (der Liquidität) kann jederzeit wieder abgezogen werden. ',
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Hohe Zinssätze',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Transaktionsgebühren fallen an, da die Kryptos übertragen werden müssen (2 mal)',
      },
      {
        text: '- Slippage kann auftreten',
      },
      {
        text: '- Gefahr, daß die Plattform gehacked wird, oder sogar einfach verschwindet mit dem Geld',
      },
      {
        text: 'Mehr über Liquidity Mining',
        blog: 'https://coingarden.de/strategie/liquidity-mining',
      },
      {
        header: '4. Trading',
        text: 'Durch das Handeln (Kaufen und Verkaufen) können Gewinne erzielt werden. Leider aber auch ' +
          'Verluste. Von daher sollte diese Art von "Vermehrung" - so denn sie denn welche ist - nur von ' +
          'professionellen Tradern durchgeführt werden. Ist dies der Fall, dann kann man zum Beispiel auf ' +
          'Binance mit geringen Gebühren und Spreads ins Spot, Margin und Futures Trading einsteigen.',
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Trading ist jederzeit möglich (24/7)',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Es kann zu Verlusten kommen ',
      },
      {
        text: '- Es kann zum Totalverlust kommen (inbesondere bei Margin u Futures Trading)',
      },
      {
        text: 'Mehr über Spot Trading',
        blog: 'https://coingarden.de/strategie/spot-handel',
      },
      {
        text: 'Mehr über Margin Trading',
        blog: 'https://coingarden.de/strategie/margin-handel',
      },
      {
        text: 'Mehr über Futures Trading',
        blog: 'https://coingarden.de/strategie/futures-handel',
      },
      {
        header: '5. Kreditkarte mit Cashback',
        text: 'Es sollte auch erwähnt werden, daß gewisse Anbieter wie Binance oder Crypto.com Kreditkarten ' +
          'anbieten, bei deren Einsatz ein Cashback/Kickback in Form von Zinsen gegeben wird. Zahlungen ' +
          'werden aus dem Krypto-Wallet heraus getätigt (sprich dein Kryptobestand reduziert sich) und Zinsen ' +
          'meist in Form von Token (bei Crypto.com ist das z.B. der CRO-Token) gutgeschrieben. Bitte schaue ' +
          'dir auch die Gebührenstruktur an, um böse Überraschungen zu vermeiden.',
      }
    ]
  },
  {
    id: 1,
    name: 'So kannst du mit Ether Zinsen verdienen',
    meta: 'In diesem Blogpost lernst du, wie du mit deinen Ether Zinsen verdienen. In der Ethereum Blockchain.',
    url: 'in-der-ethereum-blockchain-zinsen-erzielen',
    data: [
      {
        text: 'Du kannst deine ETH "hodlen" - oder du kannst sie für dich arbeiten lassen. ' +
          'Es gibt viele Möglichkeiten, mit deinen Ether eine Rendite zu erzielen. Besonders ' +
          'in der Ethereum Blockchain gibt es viele DeFi-Anwendungen, die es bei Bitcoin nicht' +
          'gibt. In diesem Blogpost wollen wir auf einige davon eingehen.',
        image: '/assets/background.png',
      },
      {
        header: '1. Sparprodukte',
        text: 'Es gibt allerlei Sparprodukte auf dem Markt. Nuri bietet ' +
          'zum Beispiel einen Sparplan für ETH an, der deine Ether verzinst. ' +
          'Andere Anbieter in diesem Bereich sind Binance, die sowohl flexible ' +
          'und feste Sparprodukte.  '
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Das Risiko ist überschaubar',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Die Rendite ist überschaubar (unter Berücksichtigung von Transaktionskosten evtl. sogar negative Rendite)',
      },
      {
        text: 'Mehr über Sparprodukte',
        blog: 'https://coingarden.de/strategie/sparprodukte',
      },
      {
        header: '2. Lending',
        text: 'Eine weitere Art eine Rendite zu erzielen ist das "Leihe" (Lending). ' +
          'Dabei werden ETH an eine Defi-Plattform, wie AAVE oder Curve, übertragen. Diese ' +
          'bezahlt dann sowohl Zinsen als auch einen Token, der die Höhe' +
          'der Einlage repräsentieren sollte. Dieser Token kann wiederum angelegt werden.' +
          'Eine Auszahlung (Withdrawal) bestehend aus originaler Einlage und den Zinsen, kann ' +
          'jederzeit angefordert werden.\n'
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Hohe Flexibilität (Auszahlung kann jederzeit angefordert werden)',
      },
      {
        text: '- Die Token können gehandelt/angelegt werden',
      },
      {
        text: '- Relativ hohe Zinssätze (ähnlich wie feste Sparprodukte - siehe oben)',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Transaktionsgebühren fallen an, da die Kryptos übertragen werden müssen (bei Einlage und Auszahlung)',
      },
      {
        text: '- Gefahr, daß die Plattform gehackt wird - oder mit den Coins verschwindet',
      },
      {
        text: 'Mehr über Lending',
        blog: 'https://coingarden.de/strategie/lending',
      },
      {
        header: '3. Staking',
        text: 'Die Ethereum Blockchain wird bald von Proof-of-Work (PoW) zu Proof-of-Stake (PoS) umgestellt. Im Moment ' +
          'laufen aber beide Konzepte nebeneinander. Für das sogenannte "Staking", also das Betreiben einer Staking Node ' +
          '(relavant bei PoS), bekommen die Betrieber dieser Staking-Node einen Reward (für das Validieren von ' +
          'Transaktionen). Allerdings muss dafür im Moment eine Einlage (ein "Stake") in der Höhe von 32 ETH hinterlegt ' +
          'werden. Anleger*innen mit weniger Coins können über Anbieter ("Liquidity Provider" genannt) wie Lido am Staking ' +
          'teilnehmen - und bekommen im Gegenzug zu ihrer Einlage auch noch einen Token, den sie handeln/anlegen können.'
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Unterstützung der Ethereum Blockchain mit guter Verzinsung',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Bei eigenem Betriebe ist technisches Verständnis und hohe Einlage notwendig',
      },
      {
        text: '- Bei Nutzung eines Liquidity Provider besteht die Gefahr, daß dieser gehacked wird oder "verschwindet"',
      },
      {
        text: 'Mehr über Staking',
        blog: 'https://coingarden.de/strategie/staking',
      },
      {
        header: '4. Liquidity Mining',
        text: 'Eine weitere Möglichkeit eine Rendite mit ETH zu erzielen ist ' +
          'das Liquidity Mining. Auf Plattformen wie UNISWAP oder Sushiswap, sogenannte DEXs (Decentralized Exchanges) ' +
          'kann ETH zu sogenannten Liquiditätspools (Liquidity Pools) hinzufügt werden und erhält ' +
          'dafür sowohl Zinsen als auch Token. Die Einlage (der Liquidität) kann jederzeit wieder abgezogen werden. ',
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Hohe Zinssätze',
      },
      {
        text: '- Man erhält einen Token, den man handeln/anlegen kann',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Transaktionsgebühren fallen an, da die ETH übertragen werden müssen (bei Einlage und Auszahlung)',
      },
      {
        text: '- Slippage kann auftreten',
      },
      {
        text: '- Die DEX kann gehacked werden, oder sogar mit den Coins "verschwinden"',
      },
      {
        text: 'Mehr über Liquidity Mining',
        blog: 'https://coingarden.de/strategie/liquidity-mining',
      },
      {
        header: '5. Handeln',
        text: 'Durch das Traden (Kaufen und Verkaufen) können Gewinne erzielt werden. Leider aber auch ' +
          'Verluste. Von daher sollte diese Art von "Rendite-Erzielung" - so denn sie denn eine ist - nur von ' +
          'Leuten durchgeführt werden, die wissen was sie tun. Ist dies der Fall, dann kann man zum Beispiel auf ' +
          'Binance mit geringen Gebühren und Spreads in den Spot-Handel, Margin-Handel oder den Handel mit Futures' +
          'einsteigen.',
      },
      {
        text: 'Vorteile:',
      },
      {
        text: '- Trading ist 24/7 möglich',
      },
      {
        text: 'Nachteile:',
      },
      {
        text: '- Verluste können entstehen ',
      },
      {
        text: '- Totalverlust kann eintreten (inbesondere bei Margin u Futures Trading)',
      },
      {
        text: 'Mehr über Spot Trading',
        blog: 'https://coingarden.de/strategie/spot-handel',
      },
      {
        text: 'Mehr über Margin Trading',
        blog: 'https://coingarden.de/strategie/margin-handel',
      },
      {
        text: 'Mehr über Futures Trading',
        blog: 'https://coingarden.de/strategie/futures-handel',
      },
      {
        header: '6. Kreditkarte mit Cashback',
        text: 'Es sollte auch erwähnt werden, daß gewisse Anbieter wie Binance oder Crypto.com Kreditkarten ' +
          'anbieten, bei deren Einsatz ein Cashback/Kickback in Form von Zinsen gegeben wird. Zahlungen ' +
          'werden aus dem Krypto-Wallet heraus getätigt (sprich dein Kryptobestand reduziert sich) und Zinsen ' +
          'meist in Form von Token (bei Crypto.com ist das z.B. der CRO-Token) gutgeschrieben. Bitte schaue ' +
          'dir auch die Gebührenstruktur an, um böse Überraschungen zu vermeiden.',
      }
    ]
  }
]