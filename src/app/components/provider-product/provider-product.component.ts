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
  @Input() provider: Provider = {
    id: '',
    name: '',
    provider_type: '',
    description: '',
    products: [],
    url: '',
    logo_url: '',
    country: '',
    affiliate_id: ''
  };
  @Input() product: Product = {
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
    offers: new Observable()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
