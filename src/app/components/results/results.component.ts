import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { combineAll, concatAll, filter, map, mergeAll } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from '../../services/provider.service';
import { OffersService } from '../../services/offers.service';
import { Strategy } from '../../interfaces/strategy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  sortOptions = [
    {
      id: 1,
      name: 'Niedrigstes Risiko oben'
    },
    {
      id: 2,
      name: 'Höchstes Risiko oben'
    }
  ];
  selectedSortOption = this.sortOptions[0];
  amountOfCoins: string = '';
  showCalculationResult = false;
  private _coin: string = '';
  private _risk: number = -1;

  @Input() set coin(value: string) {
    this._coin = value;
    console.log('this.coin : ', value);
    // this.updateProducts();
  }

  get coin(): string {
    // other logic
    return this._coin;
  }

  @Input() set risk(value: number) {
    this._risk = value;
    console.log('this.risk : ', value);
    // this.updateProducts();
    console.log('updating strategies');
    this.updateStrategies();
  }

  get risk(): number {
    // other logic
    return this._risk;
  }

  foundStrategies: Strategy[] = [];
  foundStrategyIds: number[] = [];
  providerProducts$: Observable<Provider[]> = new Observable();

  constructor(private offersService: OffersService,
              private providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.providerProducts$ = this.providerService.providers
      .pipe(
        map(provider => provider.map(prov => {
            // only use those products which are in question fo the found strategies:
            // prov.products = prov.products.filter(prod => foundStrategies.indexOf(prod.belongs_to_strategy_id) > -1);
            prov.products.map((product) => {
              product.offers = this.offersService.offers
                .pipe(
                  map(latestOffers => {
                    return latestOffers.filter((offer) => {
                      // console.log('type : ', offer.latestOffer.type.toString().toLowerCase(), product.name.toString().toLowerCase());
                      // console.log('provider : ', offer.latestOffer.provider.toString().toLowerCase(), prov.id.toString().toLowerCase());
                      return offer.latestOffer.type.toString().toLowerCase() === product.name.toString().toLowerCase()
                        && offer.latestOffer.provider.toString().toLowerCase() === prov.id.toString().toLowerCase()
                        && offer.latestOffer.coins.map(x => x.toString().toLowerCase()).indexOf(this.coin.toString().toLowerCase()) > -1
                    })
                  })
                );
            })
            return prov;
          })
        )
      );
    this.providerProducts$.subscribe(y => console.log('yyyyyyyy : ', y));

  }

  updateStrategies() {
    this.foundStrategyIds = Strategies.filter(
      strategy => {
        return strategy.riskLevel <= this.risk
          && (strategy.blackListCoins.length === 0
            || strategy.blackListCoins.toString().toLowerCase().indexOf(this.coin.toString().toLowerCase()) < 0)
      }
    ).map(strategy => strategy.id);
    this.foundStrategies = Strategies.filter(
      strategy => this.foundStrategyIds.indexOf(strategy.id) > -1
    )
    this.sortStrategies();
  }

  setAmount() {
    console.log('amountOfCoins : ', this.amountOfCoins);
    // calculate!
    this.showCalculationResult = true;
    setTimeout(() => {
        this.showCalculationResult = false;
    }, 2000);
  }

  changeSort(ev: any) {
    console.log('sort ;: ', this.selectedSortOption)
    console.log('sort ;: ', ev.target.value);
    if (ev.target.value) {
      this.selectedSortOption = this.sortOptions.find(x => x.id.toString() === ev.target.value) || this.sortOptions[0];
    }
    console.log('sort ;: ', this.selectedSortOption)
    this.sortStrategies();
  }

  sortStrategies() {
    this.foundStrategies = this.foundStrategies
      .sort((a: any, b: any) => {
        console.log(a,b)
        if (a.riskLevel < b.riskLevel) {
          if (this.selectedSortOption.id === 1) {
            return -1;
          }
          return 1;
        }
        if (a.riskLevel > b.riskLevel) {
          if (this.selectedSortOption.id === 1) {
            return 1;
          }
          return -1;
        }
        return 0;
      })

  }
}
