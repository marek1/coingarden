import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestOffer } from '../../interfaces/latestOffer';
import { OffersService } from '../../services/offers.service';
import { ProviderService } from '../../services/provider.service';
import { map } from 'rxjs/operators';
import { Provider } from '../../interfaces/provider';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.scss']
})
export class AllOffersComponent implements OnInit {
  title = 'Alle Renditemöglichkeiten';
  provider$: Observable<any> = new  Observable();
  offers$: Observable<LatestOffer[]> = new Observable();
  excludedProviders = ['MetaMask', 'Trezor'];
  coins: string[] = [];
  sortDirection: string|null = null;

  constructor(private offersService: OffersService,
              private providerService: ProviderService,
              private titleService: Title,
              private metaTagService: Meta) {
    this.provider$ = this.providerService.providers
      .pipe(
        map((x: Provider[]) => x.filter(x => this.excludedProviders.indexOf(x.name) === -1))
      );
    this.offers$ = this.offersService.offers
      .pipe(
        map((x: LatestOffer[]) => x
          .filter(x => {
            let apy = x.latestOffer.avgAnnualInterestRate;
            if (apy > 0) {
              x.latestOffer.coins.map(coin => {
                if (this.coins.indexOf(coin) < 0) {
                  this.coins.push(coin);
                }
              });
              return true;
            }
            return false;
          })
          .sort(((a, b) => a.latestOffer.updated < b.latestOffer.updated ? -1 : 1))
        )
      );
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
