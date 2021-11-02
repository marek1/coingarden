import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinService } from './services/coin.service';
import { ProviderService } from './services/provider.service';
import { OffersService } from './services/offers.service';
import { EtherscanService } from './services/etherscan.service';
import { Meta, Title } from '@angular/platform-browser';
import { BitcoinService } from './services/bitcoin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Aktuelle Angebote für deine Coins';
  constructor(private coinService: CoinService,
              private offersService: OffersService,
              private providerService: ProviderService,
              private etherscanService: EtherscanService,
              private bitcoinService: BitcoinService,
              private metaTagService: Meta,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.coinService.getAll();
    this.offersService.getAll();
    this.providerService.getAll();
    this.etherscanService.getGasFee();
    this.bitcoinService.getTxFee();
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Staking, Zinsen, BTC, ETH, Kryptowährungen, Coins, Sparen, Pools, Liquidity Mining' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Marek Sonnabend' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
  }

  ngOnDestroy() {
  }

}
