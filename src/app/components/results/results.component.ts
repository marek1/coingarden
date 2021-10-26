import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { combineAll, concatAll, filter, map, mergeAll } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from '../../services/provider.service';
import { OffersService } from '../../services/offers.service';
import { Strategy } from '../../interfaces/strategy';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

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
            .sort((a: any, b: any) => {
              if (a.belongs_to_strategy_id < b.belongs_to_strategy_id) {
                return -1;
              }
              if (a.belongs_to_strategy_id > b.belongs_to_strategy_id) {
                return 1;
              }
              return 0;
            })
        )
      );
    this.providerProducts$.subscribe(y => console.log('yyyyyyyy : ', y));

  }

  updateStrategies() {
    console.log('Strategies : ', Strategies);
    this.foundStrategyIds = Strategies.filter(
      strategy => {
        return strategy.riskLevel <= this.risk
          && (strategy.blackListCoins.length === 0
            || strategy.blackListCoins.toString().toLowerCase().indexOf(this.coin.toString().toLowerCase()) < 0)
      }
    ).map(strategy => strategy.id);
    console.log('this.foundStrategyIds : ', this.foundStrategyIds);
    this.foundStrategies = Strategies.filter(
      strategy => this.foundStrategyIds.indexOf(strategy.id) > -1
    )
    console.log('this.foundStrategies : ', this.foundStrategies);
  }
}
