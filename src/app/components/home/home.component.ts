import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers.service';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  offers$: Observable<LatestOffer[]> = new Observable();
  currentOffer: number = 0;
  constructor(private offersService: OffersService) {
    this.offers$ = this.offersService.offers
    .pipe(
      map((x: LatestOffer[]) => x
        .filter(x => {
          return x.latestOffer.avgAnnualInterestRate > 0 &&
            (x.latestOffer.coins.indexOf('ETH') > -1 || x.latestOffer.coins.indexOf('BTC') > -1)
        })
        .sort(((a, b) => a.latestOffer.updated < b.latestOffer.updated ? -1 : 1))
        .slice(0, 20)
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
