import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/provider';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Strategies } from '../../data/strategies';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { PageviewService } from '../../services/pageview.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  provider$: Observable<Provider[]> = new Observable();
  providerLoadingError$: Observable<string|null> = new Observable();
  providerProducts$: Observable<Provider[]> = new Observable();
  foundStrategies = Strategies;
  selectedProvider: string|null = null;
  title = 'Neueste Angebote im Kryptobereich';
  chartNumber = '';

  constructor(public route: ActivatedRoute,
              public router: Router,
              public location: Location,
              private store: Store<any>,
              private pageviewService: PageviewService,
              private titleService: Title,
              private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht der Anbieter und ihrer Angebote'}
    );
    this.provider$ = this.store.pipe(select(fromRoot.getProdivers));
    this.providerLoadingError$ = this.store.pipe(select(fromRoot.getProvidersError));
    this.setProviderProduct();
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedProvider = params.get('id')?.toString().toLowerCase()||null;
        if (this.selectedProvider) {
          this.titleService.setTitle('Angebote von ' + this.selectedProvider.toLocaleString());
          this.metaTagService.updateTag(
            {name: 'description', content: 'Alle aktuellen Angebote von ' + this.selectedProvider.toLocaleString()}
          );
          this.setProviderProduct();
        }
      }
    });
  }

  setChartNumber(chartNumber: string) {
    this.chartNumber = chartNumber;
  }

  setProviderProduct() {
    this.providerProducts$ = this.provider$
      .pipe(
        map(provider => provider
          .filter(provider => provider.name.toString().toLowerCase() === this.selectedProvider)
        )
      );
  }

  getProductOffers(productName: string, providerId: string) {
    return this.store
      .pipe(
        select(fromRoot.getOffers),
        map(latestOffers => {
          return latestOffers.filter((offer) => {
            return offer.latestOffer.type.toString().toLowerCase() === productName.toString().toLowerCase()
              && offer.latestOffer.provider.toString().toLowerCase() === providerId.toString().toLowerCase();
          })
        })
      );
  }

  selectProvider(providerName: string) {
    this.selectedProvider = providerName;
    this.setProviderProduct();
    let urlString = 'angebote/' + this.selectedProvider;
    let url = this.router.createUrlTree([urlString]).toString();
    // save pageview
    this.pageviewService.setPageview(urlString);
    // Change the URL without navigate:
    this.location.go(url);
  }

}
