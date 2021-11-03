import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/provider';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { OffersService } from '../../services/offers.service';
import { Strategies } from '../../data/strategies';
import { map } from 'rxjs/operators';
import { ProviderService } from '../../services/provider.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  provider$: Observable<Provider[]> = new Observable();
  providerProducts$: Observable<Provider[]> = new Observable();
  foundStrategies = Strategies;
  selectedProvider: string|null = null;
  title = 'Neueste Angebote im Kryptobereich';
  constructor(public route: ActivatedRoute,
              public router: Router,
              public location: Location,
              private offersService: OffersService,
              private providerService: ProviderService,
              private titleService: Title,
              private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht der Anbieter und ihrer Angebote'}
    );
    this.provider$ = this.providerService.providers;
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

  setProviderProduct() {
    this.providerProducts$ = this.provider$
      .pipe(
        map(provider => provider
          .filter(provider => provider.name.toString().toLowerCase() === this.selectedProvider)
          .map(prov => {
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
                        && offer.latestOffer.provider.toString().toLowerCase() === prov.id.toString().toLowerCase();
                    })
                  })
                );
            })
            return prov;
          })
        )
      );
  }

  selectProvider(providerName: string) {
    this.selectedProvider = providerName;
    this.setProviderProduct();
    let url = this.router.createUrlTree(['angebote/' + this.selectedProvider]).toString();
    // Change the URL without navigate:
    this.location.go(url);
  }

}
