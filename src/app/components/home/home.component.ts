import { Component, OnInit } from '@angular/core';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provider } from '../../interfaces/provider';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading$: Observable<string> = new Observable<string>();
  provider$: Observable<any> = new  Observable();
  providerLoadingError$: Observable<string|null> = new Observable();
  offers$: Observable<LatestOffer[]> = new Observable();
  offersLoadingError$: Observable<string|null> = new Observable();
  featuredProvider = ['Binance', 'Crypto.com'];
  featuredCoins = ['BTC', 'ETH', 'ADA', 'SOL'];
  currentOffer: number = 0;
  constructor(private store: Store<any>) {
    this.provider$ = this.store
      .pipe(
        select(fromRoot.getProdivers),
        map((x: Provider[]) => x.filter(x => this.featuredProvider.indexOf(x.name) > -1))
      );
    this.providerLoadingError$ = this.store.pipe(select(fromRoot.getProvidersError));
    this.offers$ = this.store
    .pipe(
      select(fromRoot.getOffers),
      map((x: LatestOffer[]) => {
        return x
            .filter(x => {
              return x.latestOffer.avgAnnualInterestRate > 0 &&
                x.latestOffer.coins.filter(el => this.featuredCoins.includes(el)).length > 0
            })
            .sort(((a, b) => a.latestOffer.updated < b.latestOffer.updated ? -1 : 1))
        }
      )
    );
    this.offersLoadingError$ = this.store.pipe(select(fromRoot.getOffersError));
  }

  ngOnInit(): void {

  }

  filteredOffer(offers: any, provider: Provider, featuredCoin: string) {
    let _offers = offers.filter((offer: any) => offer.latestOffer.provider === provider.name
      && offer.latestOffer.coins.indexOf(featuredCoin) > -1
      && offer.latestOffer.type.toLowerCase().indexOf('saving') > -1)
    return _offers.length > 0 ? _offers[0] : [];
  }

  setCurrentOffer(by: number) {
    let lengthOfOffers = 0;
    this.offers$.subscribe((x) => {
      lengthOfOffers = x.length;
    })
    if (this.currentOffer === 0 && by < 0) {
      this.currentOffer = lengthOfOffers - 1;
    }
    if (this.currentOffer === lengthOfOffers - 1 && by > 0) {
      this.currentOffer = 0;
    }
    this.currentOffer = this.currentOffer + by;
  }

}
