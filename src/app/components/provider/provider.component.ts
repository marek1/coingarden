import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ProviderService } from '../../services/provider.service';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/provider';
import { filter, map } from 'rxjs/operators';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  title = 'Eine Übersicht ausgewählter Anbieter';
  provider$: Observable<any> = this.providerService.providers;
  selectedProvider$: Observable<any> = new Observable();

  constructor(public route: ActivatedRoute,
              private providerService: ProviderService,
              private offersService: OffersService,
              private titleService: Title,
              private metaTagService: Meta) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('... ', params);
      if (params.get('id')) {

        this.selectedProvider$ = this.providerService
          .providers
          .pipe(
            map((providers: Provider[]) => {
              return providers.find((provider) => {
                console.log('... ', provider.id.toString().toLowerCase(), params.get('id')?.toString().toLowerCase())
                console.log('... ', provider.id.toString().toLowerCase() === params.get('id')?.toString().toLowerCase())
                return provider.id.toString().toLowerCase() === params.get('id')?.toString().toLowerCase()
              })
            })
          );
        this.selectedProvider$.subscribe((selectedProvider: Provider) => {
          if (!selectedProvider) {
            return
          }
          this.titleService.setTitle('Wer ist ' + selectedProvider.name);
          this.metaTagService.updateTag(
            {name: 'description', content: selectedProvider.description}
          );
        });

        // this.providerProducts$ = this.providerService.providers
        //   .pipe(
        //     map(provider => provider.map(prov => {
        //         prov.products.map((product) => {
        //           product.offers = this.offersService.offers
        //             .pipe(
        //               map(latestOffers => {
        //                 return latestOffers.filter((offer) => {
        //                   return offer.latestOffer.type.toString().toLowerCase() === product.name.toString().toLowerCase()
        //                     && offer.latestOffer.provider.toString().toLowerCase() === prov.id.toString().toLowerCase()
        //
        //                 })
        //               })
        //             );
        //         })
        //         return prov;
        //       })
        //     )
        //   );
      }
    });
  }

}
