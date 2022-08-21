import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinService } from './services/coin.service';
import { ProviderService } from './services/provider.service';
import { OffersService } from './services/offers.service';
import { EtherscanService } from './services/etherscan.service';
import { Meta, Title } from '@angular/platform-browser';
import { BitcoinService } from './services/bitcoin.service';
import { Event, NavigationStart, Router } from '@angular/router';
import { PageviewService } from './services/pageview.service';
import { Store } from '@ngrx/store';
import * as AppActions from './actions/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Kryptozinsen: Mit Coins eine Rendite erzielen';
  constructor(private coinService: CoinService,
              private offersService: OffersService,
              private providerService: ProviderService,
              private etherscanService: EtherscanService,
              private bitcoinService: BitcoinService,
              private pageviewService: PageviewService,
              private metaTagService: Meta,
              private titleService: Title,
              private router: Router,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.store.dispatch(AppActions.getCoins());
    this.store.dispatch(AppActions.getOffers());
    this.store.dispatch(AppActions.getProviders());
    this.store.dispatch(AppActions.getBitcoinFees());
    this.store.dispatch(AppActions.getEthereumFees());
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Staking, Zinsen, BTC, ETH, Kryptowährungen, Coins, Kryptozinsen, Pools, Liquidity Mining' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Marek Sonnabend' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.pageviewService.setPageview(event.url);
      }
    });
  }

  ngOnDestroy() {
  }

}
