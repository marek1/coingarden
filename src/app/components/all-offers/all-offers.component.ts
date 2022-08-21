import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestOffer } from '../../interfaces/latestOffer';
import { map } from 'rxjs/operators';
import { Provider } from '../../interfaces/provider';
import { Meta, Title } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.scss']
})
export class AllOffersComponent implements OnInit {
  title = 'Eine Übersicht aller Zinsprodukte';
  provider$: Observable<any> = new  Observable();
  providerLoadingError$: Observable<string|null> = new Observable();
  offers$: Observable<LatestOffer[]> = new Observable();
  offersLoadingError$: Observable<string|null> = new Observable();
  excludedProviders = ['MetaMask', 'Trezor'];
  coins: string[] = ['BTC', 'ADA', 'USDC', 'USDT', 'ETH', 'DOT', 'XRP', 'DOT', 'MATIC'];
  sortDirection: string|null = null;

  constructor(private store: Store<any>,
              private titleService: Title,
              private metaTagService: Meta) {
    this.provider$ = this.store
      .pipe(
        select(fromRoot.getProdivers),
        map((x: Provider[]) => x.filter(x => this.excludedProviders.indexOf(x.name) === -1))
      );
    this.providerLoadingError$ = this.store.pipe(select(fromRoot.getProvidersError));
    this.offers$ = this.store
      .pipe(
        select(fromRoot.getOffers),
        map((x: LatestOffer[]) => x
          .filter(x => {
            // only those coins that are whitelistet
            if (x.latestOffer.coins.filter(element => this.coins.includes(element)).length < 1) {
              return;
            }
            // only certain types
            if (x.latestOffer.type === 'Liquid Swap' || x.latestOffer.type === 'INVALID!') {
              return;
            }
            let apy = x.latestOffer.avgAnnualInterestRate;
            if (apy > 0) {
              return true;
            }
            return false;
          })
          .sort(((a, b) => a.latestOffer.updated < b.latestOffer.updated ? -1 : 1))
        )
      );
    this.offersLoadingError$ = this.store.pipe(select(fromRoot.getOffersError));
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Mögliche Rendite pro Coin und Anbieter in einer Tabelle dargestellt.'}
    );
  }

  setPlaceholder(event: any): void {
    event.target.src = './assets/logos/placeholder.png';
  }

  sortCoins() {
    if (!this.sortDirection || this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      this.coins.sort((a, b) => a < b ? -1 : 1);
    } else {
      this.sortDirection = 'DESC';
      this.coins.sort((a, b) => a < b ? 1 : -1);
    }
  }

}
