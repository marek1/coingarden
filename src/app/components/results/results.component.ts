import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Provider } from '../../interfaces/provider';
import { Strategy } from '../../interfaces/strategy';
import * as fromRoot from '../../reducers';
import { select, Store } from '@ngrx/store';

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
  amountOfCoins: string = '1';
  showInput = false;
  showCalculationResult = false;
  chartNumber = '';
  private _coin: string = '';
  private _risk: number = -1;

  @Input() set coin(value: string) {
    this._coin = value;
  }

  get coin(): string {
    return this._coin;
  }

  @Input() set risk(value: number) {
    this._risk = value;
    this.updateStrategies();
  }

  get risk(): number {
    return this._risk;
  }

  foundStrategies: Strategy[] = [];
  foundStrategyIds: number[] = [];
  providerProducts$: Observable<Provider[]> = new Observable();

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.providerProducts$ = this.store
      .pipe(
        select(fromRoot.getProdivers),
      );
  }

  getProductOffers(productName: string, providerId: string) {
    return this.store
      .pipe(
        select(fromRoot.getOffers),
        map(latestOffers => {
          return latestOffers.filter((offer) => {
            return offer.latestOffer.type.toString().toLowerCase() === productName.toString().toLowerCase()
              && offer.latestOffer.provider.toString().toLowerCase() === providerId.toString().toLowerCase()
              && offer.latestOffer.coins.map(x => x.toString().toLowerCase()).indexOf(this.coin.toString().toLowerCase()) > -1
          })
        })
      );
  }
  setChartNumber(chartNumber: string) {
    this.chartNumber = chartNumber;
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
    this.showCalculationResult = true;
    setTimeout(() => {
        this.showCalculationResult = false;
    }, 2000);
  }

  changeSort(ev: any) {
    if (ev.target.value) {
      this.selectedSortOption = this.sortOptions.find(x => x.id.toString() === ev.target.value) || this.sortOptions[0];
    }
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
