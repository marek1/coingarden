import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { combineAll, concatAll, filter, map, mergeAll } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Product } from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from '../../services/provider.service';
import { combineResolvers } from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() coin: string = '';
  @Input() risk: number = -1;
  //products$: Observable<Product[]> = new Observable();
  foundStrategies: any[] = [];
  providerProducts$: Observable<Provider[]> = new Observable();
  constructor(private offersService: OffersService,
              private providerService: ProviderService) {

  }

  ngOnInit(): void {
    // find strategies
    const foundStrategies = Strategies.filter(
      strategy => strategy.riskLevel <= this.risk
    ).map(strategy => strategy.id);
    this.foundStrategies = Strategies.filter(strategy => foundStrategies.indexOf(strategy.id) > -1);
    this.providerProducts$ = this.providerService.providers
    .pipe(
      map(provider => provider.filter(prov => {
          let x = prov.products.filter(prod => foundStrategies.indexOf(prod.belongs_to_strategy_id) > -1)
          return x.length > 0
        }).map(prov => {
          // only use those products which are in question fo the found strategies:
          prov.products = [prov.products.filter(prod => foundStrategies.indexOf(prod.belongs_to_strategy_id) > -1)[0]]
          prov.products[0].offers = this.offersService.offers
          .pipe(
            map(prod => {
              // console.log('prod : ', prod);
              return prod.filter((offer) => {
                // console.log('offer ; ', offer.latestOffer.id);
                // console.log('type : ', offer.latestOffer.type, prov.products[0].name);
                // console.log('provider : ', offer.latestOffer.provider, prov.id);
                return offer.latestOffer.type.toString().toLowerCase() === prov.products[0].name.toString().toLowerCase()
                  && offer.latestOffer.provider.toString().toLowerCase() === prov.id.toString().toLowerCase()
                  && offer.latestOffer.coins.indexOf(this.coin) > -1
              })
            }
            )
          );
          console.log('prov.products[0] : ', prov.products[0]);
          return prov;
        }).sort((a: any, b: any) => {
          if(a.belongs_to_strategy_id < b.belongs_to_strategy_id) { return -1; }
          if(a.belongs_to_strategy_id > b.belongs_to_strategy_id) { return 1; }
          return 0;
        })
      )
    );
    this.providerProducts$.subscribe(y => console.log('yyyyyyyy : ', y));

  }

}
