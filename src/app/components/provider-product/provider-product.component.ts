import { Component, Input, OnInit } from '@angular/core';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Product } from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-provider-product',
  templateUrl: './provider-product.component.html',
  styleUrls: ['./provider-product.component.scss']
})
export class ProviderProductComponent implements OnInit {
  collapse = false;
  showToolTip1 = false;
  showToolTip2 = false;
  private _provider: Provider = {
    id: '',
    name: '',
    provider_type: '',
    description: '',
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
      image: '',
      video: '',
      blog: ''
    },
    feesInPercentMin: 0,
    feesInPercentMax: 0,
    offers: new Observable()
  };

  @Input() set provider(value: Provider) {
    this._provider = value;
  }

  @Input() set product(value: Product) {
    this._product = value;
  }

  get provider(): Provider {
    // other logic
    return this._provider;
  }

  get product(): Product {
    // other logic
    return this._product;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
