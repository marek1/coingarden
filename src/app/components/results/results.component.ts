import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { combineAll, filter, map } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Product } from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from '../../services/provider.service';

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
  providerProducts$: Observable<any[]> = new Observable();
  constructor(private productService: ProductService,
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
          return prov;
        }).sort((a: any, b: any) => {
          if(a.belongs_to_strategy_id < b.belongs_to_strategy_id) { return -1; }
          if(a.belongs_to_strategy_id > b.belongs_to_strategy_id) { return 1; }
          return 0;
        })
      )
    );
  }

}
