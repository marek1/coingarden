import { Risks } from './risks';

export const Strategies = [
  {
    id: 0,
    name: 'HODL',
    riskLevel: Risks.filter(x => x.riskId == 0)[0].riskId,
    de: 'HODLE',
    int_url: 'hodl',
    howTo: {
      text: '"Hodling" ist ein Modebegriff, der das Halten von Coins beschreibt. Durch das simple ' +
        'Halten der Coins verändert sich der Wert gegenüber Fiat-Währungen oder anderen Coins, so ' +
        'daß in Bullenzeiten der Wert steigen kann. Aber "Hodler" (so werden die Leute bezeichnet, ' +
        'die ihre Coins einfach nur halten) sind auch Leute, die von der Blockchain oder dem Coin ' +
        'so überzeugt sind, daß sie einfach nur einen Teil davon besitzen wollen ohne unbedingt ' +
        'auf eine Wertsteigerung zu setzen. \n' +
        'Es gibt 2 Möglichkeiten (und hybride Lösungen) seine Coins aufzubewahren (aka zu hodeln): \n' +
        '1. In einer "Cold-Wallet", sprich auf einem Hardware-Wallet (wie z.B. dem Tezor). Sobald die Coins ' +
        'einmal dort sind, bleiben sie dort sicher verwahrt (vorausgesetzt das Hardware-Wallet ist "backdoor-free"). ' +
        'Die Nutzer*in muss sich lediglich 12 Wörter merken (oder diese sicher verwahren), um an die Coins ' +
        'zu gelangen.' +
        '2. In einem "Hot-Wallet", sprich auf einem Software-Wallet. Hier ist aber zu unterscheiden, ' +
        'ob das Wallet von einem selbst gemanagt wird (Non-Custodial-Wallet) oder von einem Provider bzw. ' +
        'einer Börse wie Binance (Custodial-Wallet).',
      image: '',
      video: '',
      blog: 'https://block-builders.de/custodial-wallets/#:~:text=In%20einer%20Wallet%20werden%20deine,die%20Private%20Keys%20bei%20dir.'
    }
  },
  {
    id: 1,
    name: 'Savings',
    riskLevel: Risks.filter(x => x.riskId == 1)[0].riskId,
    de: 'Sparprodukte',
    int_url: 'flexible-savings',
    howTo: {
      text: 'Für die in deinem Wallet bei einer zentralen Börse (wie Binance) oder Bank (wie Nuri) bekommst' +
        'du Zinsen. Dabei gibt es zwei Arten von Produkten. \n' +
        '1. Flexible Sparprodukte: Du willst Zinsen und dabei die Flexibilität, die Coins jederzeit wieder abziehen zu können? Dann ist ' +
        'flexible Sparprodukte (Flexible Savings) genau das Richtige für dich. \n' +
        '2. Feste Sparprodukte: Bei Fixed Savings bekommst du höhere Zinsen als bei feste Sparprodukte (Flexible Savings); die Coins sind aber für einen ' +
        'gewissen Zeitraum dann gelocked - sprich man kann in der Zeit nicht auf sie zugreifen. Daher gibt es auch ' +
        'den Begriff : Locked Savings. \n' +
        'Die Sparprodukte sind vergleichbar mit einem Sparbuch. ',
      image: 'https://stormgain.com/sites/default/files/news/BitcoinSavings.jpg',
      video: '',
      blog: ''
    }
  },
  {
    id: 3,
    name: 'Staking',
    riskLevel: Risks.filter(x => x.riskId == 2)[0].riskId,
    de: 'Staking',
    int_url: 'staking',
    howTo: {
      text: 'Du möchtest den Betrieb einer Blockchain unterstützen und dabei Geld verdienen? Dann ist Staking genau ' +
        'das Richtige für dich. Du stellst einer Börse, einem Staking Service oder einem Staking Pool Betreiber deine ' +
        'Coins zur Verfügung und wirst dafür an den Erträgen beteiligt. ',
      image: '',
      video: 'https://www.youtube.com/watch?v=l1uu9rbf-xw&ab_channel=Kryptokanal',
      blog: 'https://blockchainwelt.de/coin-staking/'
    }
  },
  {
    id: 4,
    name: 'Liquidity Mining',
    riskLevel: Risks.filter(x => x.riskId == 3)[0].riskId,
    de: 'Liquidity Mining',
    int_url: 'liquidity-mining',
    howTo: {
      text: 'Ein relativ neues Phänomen ist Liquidity Mining. Auf dem Konzept des Liquidity Mining ' +
        'funktionieren dezentrale Börsen (DEX) wie Uniswap, PancakeSwap oder SushiSwap. Den diese' +
        'Börsen haben kein Orderbuch. Stattdesen nutzen sie Liquidity Pools (LP), die aus ' +
        'einem Coin-Paar (z.B. USDT/BTC) bestehen. Diese LPs sind darauf angewiesen, daß ihnen ' +
        'Liquidität zur Verfügung gestellt wird. Liquitidy Provider - also Leute, die Liquidität zur ' +
        'zur Verfügung stellen, bekommen dafür Teil der verdienten Gebühren und einen weiteren Reward: ' +
        'einen Reward-Token.',
      image: 'liquidity_mining.png',
      video: 'https://www.youtube.com/watch?v=qeiXqmh4m18&ab_channel=CryptoExplained',
      blog: ''
    }
  },
  {
    id: 6,
    name: 'Spot Trading',
    riskLevel: Risks.filter(x => x.riskId == 2)[0].riskId,
    de: 'Spot Handel',
    int_url: 'spot-handel',
    howTo: {
      text: 'Mit in deinem Wallet befindlichen Coins kann natürlich auch Handel betrieben werden. ' +
        'Du kannst einen Coin gegen einen anderen Coin tauschen, in dem du ihn handelst. Für den ' +
        'Handel stehen dir Börsen (CEXs), wie Binance, oder dezentrale Börsen (DEX), wie dYDX, ' +
        'Uniswap, PancakeSwap oder SushiSwap zur Verfügung. Die DEXs wie Uniswap, PancakeSwap oder ' +
        'SushiSwap lösen das ganze über Liqudity Pools (siehe auch Liquidity Mining).',
      image: '',
      video: 'https://www.youtube.com/watch?v=-UhhSIZWAV8&ab_channel=MarcusSchulz',
      blog: ''
    }
  },
  {
    id: 7,
    name: 'Margin Trading',
    riskLevel: Risks.filter(x => x.riskId == 4)[0].riskId,
    de: 'Margin Handel',
    int_url: 'margin-handel',
    howTo: {
      text: 'Margin Trading ist für professionelle Trader, die mit einem Hebel in Coins investieren. ' +
        'Mit Hebel? Ja, man investiert mehr als man hat, so daß sich das eingesetzte Kapital erhöht, um ' +
        'so überdimensional an Kursbewegungen zu partizipieren. \n' +
        'Erwartet man z.B., daß ein Coin steigt - geht man LONG auf diesen Coin, in dem man sich einen ' +
        'anderen Coin leiht und diesen dann gegen den Coin (den man long gehen will) verkauft. \n' +
        'Erwartet man auf der anderen Seite, daß ein Coin fällt - geht man SHORT auf diesen Coin, in dem ' +
        'man sich eben diesen Coin leiht, um sich einen anderen Coin (dessen Entwicklung man positiver ' +
        'einschätzt) zu kaufen. \n' ,
      image: '',
      video: '',
      blog: 'https://de.cryptonews.com/leitfaden/was-ist-krypto-margin-trading.htm'
    }
  },
  {
    id: 8,
    name: 'Futures Trading',
    riskLevel: Risks.filter(x => x.riskId == 4)[0].riskId,
    de: 'Futures Handel',
    int_url: 'futures-handel',
    howTo: {
      text: 'Futures Trading ist für professionelle Trader, die mit einem Hebel in Coins investieren. ' +
        'Hier wird die Erwartung auf einen Wert in der Zukunft gehandelt. Die Zukunft kann ja nach Produkt ' +
        'ein fixes Datum in der Zukunft sein oder ein offenes Ende haben. Erwartet man einen steigenden Preis ' +
        'so geht eine Long-Strategy ein, sprich man kauft gehebelt ein Produkt. Umgedreht kann man natürlich ' +
        'auch auf fallende Preise spekulieren und geht somit eine Short-Strategie ein. \n' +
        'Vorsicht: Dies ist nur für professionelle Trader gedacht. Es kann zu einem Totalverlust kommen.',
      image: '',
      video: '',
      blog: 'https://de.cryptonews.com/leitfaden/was-ist-krypto-margin-trading.htm'
    }
  }
 ]
