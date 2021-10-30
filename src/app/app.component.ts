import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinService } from './services/coin.service';
import { ProviderService } from './services/provider.service';
import { Subscription } from 'rxjs';
import { OffersService } from './services/offers.service';
import { EtherscanService } from './services/etherscan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CoinGarden';
  constructor(private coinService: CoinService,
              private offersService: OffersService,
              private providerService: ProviderService,
              private etherscanService: EtherscanService) {
  }

  ngOnInit() {
    this.coinService.getAll();
    this.offersService.getAll();
    this.providerService.getAll();
    this.etherscanService.getGasFee();
  }

  ngOnDestroy() {
  }

}
