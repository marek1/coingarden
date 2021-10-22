import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinService } from './services/coin.service';
import { ProductService } from './services/product.service';
import { ProviderService } from './services/provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CoinGarden';
  constructor(private coinService: CoinService,
              private productService: ProductService,
              private providerService: ProviderService) {
  }

  ngOnInit() {
    this.coinService.getAll();
    this.productService.getAll();
    this.providerService.getAll();
  }

  ngOnDestroy() {
  }

}
