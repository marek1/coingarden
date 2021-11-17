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
              private metaTagService: Meta) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht der Anbieter und ihrer Krypto-Produkte'}
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedProvider$ = this.providerService
          .providers
          .pipe(
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
          this.titleService.setTitle('Wer ist ' + selectedProvider.name);
          this.metaTagService.updateTag(
            {name: 'description', content: selectedProvider.description}
          );
        });
      }
    });
  }

}
