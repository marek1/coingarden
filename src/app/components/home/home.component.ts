import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers.service';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProviderService } from '../../services/provider.service';
import { Provider } from '../../interfaces/provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  provider$: Observable<any> = new  Observable();
  offers$: Observable<LatestOffer[]> = new Observable();
  featuredProvider = ['Binance', 'Nuri', 'Nexo'];
  featuredCoins = ['BTC', 'ETH', 'DOT', 'SOL', 'ADA'];
  currentOffer: number = 0;
  constructor(private offersService: OffersService,
              private providerService: ProviderService) {
    this.provider$ = this.providerService.providers
      .pipe(
        map((x: Provider[]) => x.filter(x => this.featuredProvider.indexOf(x.name) > -1))
      );
    this.offers$ = this.offersService.offers
    .pipe(
      map((x: LatestOffer[]) => x
        .filter(x => {
          return x.latestOffer.avgAnnualInterestRate > 0 &&
            x.latestOffer.coins.filter(el => this.featuredCoins.includes(el)).length > 0
        })
        .sort(((a, b) => a.latestOffer.updated < b.latestOffer.updated ? -1 : 1))
      )
    );
  }

  ngOnInit(): void {
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
