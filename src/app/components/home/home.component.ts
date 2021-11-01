import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers.service';
import { LatestOffer } from '../../interfaces/latestOffer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  offers$: Observable<LatestOffer[]>;
  currentOffer: number = 0;
  constructor(private offersService: OffersService) {
    this.offers$ = this.offersService.offers
    .pipe(
      tap(results => {
        results.sort((a, b) => a.id < b.id ? -1 : 1)
      })
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
