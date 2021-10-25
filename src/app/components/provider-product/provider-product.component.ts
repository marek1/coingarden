import { Component, Input, OnInit } from '@angular/core';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Product } from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';

@Component({
  selector: 'app-provider-product',
  templateUrl: './provider-product.component.html',
  styleUrls: ['./provider-product.component.scss']
})
export class ProviderProductComponent implements OnInit {
  collapse = false;
  @Input() providerProduct: Provider = {
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
  constructor() { }

  ngOnInit(): void {
  }

}
