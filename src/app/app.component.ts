import { Component } from '@angular/core';
import { CoinService } from './services/coin.service';
import { ProductService } from './services/product.service';
import { ProviderService } from './services/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoinGarden';

  constructor(private coinService: CoinService,
              private productService: ProductService,
              private providerService: ProviderService) {
    this.coinService.getAll();
    this.coinService.coins$.subscribe(() => {
      console.log('coins loaded');
    });
    this.productService.getAll();
    this.productService.products$.subscribe(() => {
      console.log('products loaded');
    });
    this.providerService.getAll();
    this.providerService.prodivers$.subscribe(() => {
      console.log('providers loaded');
    })
  }

}
