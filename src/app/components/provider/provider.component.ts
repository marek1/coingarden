import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/provider';
import { map } from 'rxjs/operators';
import { Strategies } from '../../data/strategies';
import { Product } from '../../interfaces/product';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  title = 'Eine Übersicht ausgewählter Anbieter';
  provider$: Observable<any> = new Observable();
  providerLoadingError$: Observable<string|null> = new Observable();
  selectedProvider$: Observable<any> = new Observable();

  constructor(public route: ActivatedRoute,
              private store: Store<any>,
              private titleService: Title,
              private metaTagService: Meta) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht der Anbieter und ihrer Krypto-Produkte'}
    );
    this.provider$ = this.store
      .pipe(
        select(fromRoot.getProdivers)
      );
    this.providerLoadingError$ = this.store.pipe(select(fromRoot.getProvidersError));
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedProvider$ = this.store
          .pipe(
            select(fromRoot.getProdivers),
            map((providers: Provider[]) => {
              return providers.find((provider) => {
                return provider.id.toString().toLowerCase() === params.get('id')?.toString().toLowerCase()
              })
            })
          );
        this.selectedProvider$.subscribe((selectedProvider: Provider) => {
          if (!selectedProvider) {
            return
          }
          this.titleService.setTitle('Wer oder was ist ' + selectedProvider.name);
          this.metaTagService.updateTag(
            {name: 'description', content: selectedProvider.description}
          );
        });
      }
    });
  }

  public getStrategyUrl(product: Product) {
    return Strategies.find((x) => x.id === product?.belongs_to_strategy_id)?.int_url || ''
  }

}
