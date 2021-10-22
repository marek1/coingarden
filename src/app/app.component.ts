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
  sub1 = new Subscription();
  sub2 = new Subscription();
  sub3 = new Subscription();
  constructor(private coinService: CoinService,
              private productService: ProductService,
              private providerService: ProviderService) {
  }

  ngOnInit() {
    this.coinService.getAll();
    this.sub1 = this.coinService.coins$.subscribe(() => {
      console.log('coins loaded');
    });
    this.productService.getAll();
    this.sub2 = this.productService.products$.subscribe(() => {
      console.log('products loaded');
    });
    this.providerService.getAll();
    this.sub3 = this.providerService.prodivers$.subscribe(() => {
      console.log('providers loaded');
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
