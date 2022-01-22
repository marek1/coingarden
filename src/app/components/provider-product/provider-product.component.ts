import { Component, Input, OnInit } from '@angular/core';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Product } from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { Observable } from 'rxjs';
import { EtherscanService } from '../../services/etherscan.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { Strategies } from '../../data/strategies';

@Component({
  selector: 'app-provider-product',
  templateUrl: './provider-product.component.html',
  styleUrls: ['./provider-product.component.scss']
})
export class ProviderProductComponent implements OnInit {
  collapse = false;
  showToolTip1 = false;
  showToolTip2 = false;
  networkFee = 0; // to be calculated
  strategieName = '';
  strategieUrl = '';

  sortOffers(offers: LatestOffer[]) {
      console.log('...', offers);

      return offers.sort((a: LatestOffer, b) => {
        return a.latestOffer.avgAnnualInterestRate > b.latestOffer.avgAnnualInterestRate ? 1 : -1;
      });
  }
  calculateYield(offer: LatestOffer) {
    // console.log('offer : ', offer);
    // console.log('amountOfCoins : ', this.amountOfCoins);
    // make calculation:
    // amountOfCoins * apr %
    let x  = (parseFloat(this.amountOfCoins.replace(',', '.')) * offer.latestOffer.avgAnnualInterestRate)
    // reduce max. fees:
    x = x - (x * this.product.feesInPercentMax);
    // if it is ETH, reduce network fees (=== etherscanService.gasfee)
    if ( this.coin.toString().toLowerCase() === 'eth' ) {
      this.etherscanService.gasfee.subscribe((x) => {
        this.networkFee = x * 21000 * 0.000000001;
      })
    }
    if ( this.coin.toString().toLowerCase() === 'btc' ) {
      this.bitcoinService.txfee.subscribe((x) => {
        this.networkFee = x;
      })
    }

    return x;
  }

  private _provider: Provider = {
    id: '',
    name: '',
    provider_type: '',
    join: '',
    description: '',
    functionality: '',
    products: [],
    url: '',
    logo_url: '',
    country: '',
    affiliate_id: '',
    costsOfWithdrawalOfAssets: 0,
    costsOfDepositing: 0,
    rewardForSignup: 0,
    rewardCondition: ''
  };

  private _product: Product = {
    belongs_to_strategy_id: 0,
    de: '',
    name: '',
    url: '',
    howTo: {
      text: '',
      steps: '',
      image: '',
      video: '',
      blog: ''
    },
    feesInPercentMin: 0,
    feesInPercentMax: 0,
    offers: new Observable()
  };

  private _amountOfCoins: string = '';

  private _coin: string = '';

  @Input() set provider(value: Provider) {
    this._provider = value;
  }

  @Input() set product(value: Product) {
    this._product = value;
    this.strategieUrl = Strategies.find((x) => x.id === this._product?.belongs_to_strategy_id)?.int_url || '';
    this.strategieName = Strategies.find((x) => x.id === this._product?.belongs_to_strategy_id)?.name || '';
  }

  @Input() set amountOfCoins(value: string) {
    this._amountOfCoins = value;
  }

  @Input() set coin (value: string) {
    this._coin = value;
  }

  get provider(): Provider {
    // other logic
    return this._provider;
  }

  get product(): Product {

    // other logic

    return this._product;

  }

  get amountOfCoins(): string {
    // other logic
    return this._amountOfCoins;
  }

  get coin(): string {
    // other logic
    return this._coin;
  }


  constructor(private etherscanService: EtherscanService,
              private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
  }

  getHtml(x: string) {
    return x.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
