import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CoinService } from '../../services/coin.service';
import { Risks } from '../../data/risks';
import { filter, map } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';
import { PageviewService } from '../../services/pageview.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  title = 'Strategien für deine';
  public selectedCoins$: Observable<string[]> = new Observable();
  public coinLoadingError$: Observable<string|null> = new Observable();
  public coinForm: UntypedFormGroup;
  public currentStep = 1;
  public selectedCoin = '';
  public selectedRisk = -1;
  public whiteList = ['BTC', 'ETH']
  public coinCap = 55;
  public risks = Risks;
  constructor(public coinService: CoinService,
              public pageviewService: PageviewService,
              public router: Router,
              public route: ActivatedRoute,
              public location: Location,
              private titleService: Title,
              private metaTagService: Meta,
              private store: Store<any>) {
    this.coinForm = new UntypedFormGroup({
      selectedCoin: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title + ' Coins');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Siehe Möglichkeiten Rendite mit deinen Coins zu erzielen.' }
    );
    this.selectedCoins$ = this.store.pipe(
      select(fromRoot.getCoins)
    );
    this.coinLoadingError$ = this.store.pipe(
      select(fromRoot.getCoinsError)
    );
    // connect
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedCoin = params.get('id')?.toString() || '';
        if (this.selectedCoin) {
          this.currentStep = 2;
          this.titleService.setTitle(this.title + ' ' + this.selectedCoin);
          this.metaTagService.updateTag(
            { name: 'description', content: 'Siehe Möglichkeiten Rendite mit deinen ' + this.selectedCoin + ' zu erzielen.' }
          );
        }
      }
      if (params.get('id1')) {
        // find by url
        let foundRisk = this.risks.filter(x => params.get('id1')?.toString() === x.url.toString());
        if (foundRisk.length > 0 && foundRisk[0].riskId) {
          this.selectedRisk = foundRisk[0].riskId;
          this.currentStep = 3;
        } else {
          // Fallback : get all !
          this.selectedRisk = Risks[Risks.length - 1].riskId;
          this.currentStep = 3;
        }
      }
    })
  }

  searchCoin(ev: any) {
    this.selectedCoins$ = this.store.pipe(
      select(fromRoot.getCoins),
      map(x => x.filter(coin => {
        return coin.toLowerCase().indexOf(ev.target.value.toString().toLowerCase()) > -1;
      }))
    )
  }

  selectCoin(coin: string) {
    this.selectedCoin = coin;
    this.setUrl();
  }

  setRisk(x: number) {
    console.log('got risk ; ', x);
    this.selectedRisk = x;
    this.setUrl();
  }

  goToStep(x: number) {
    console.log('go to step : ', x);
    if (!this.selectedCoin && x > 1) {
      return;
    }
    this.currentStep = x;

    if (x === 3 && this.selectedRisk === -1) {
      this.selectedRisk = 0;
      this.setUrl();
    }
  }

  setUrl () {
    let urlString = 'start/' + this.selectedCoin + '/' +
      (this.selectedRisk > -1 ? Risks.find(x => this.selectedRisk === x.riskId)?.url : '');
    let url = this.router.createUrlTree([urlString]).toString();
    // save pageview
    this.pageviewService.setPageview(urlString);
    // Change the URL without navigate:
    this.location.go(url);
  }

  resetCoin() {
    this.selectedCoin = '';
    this.selectedRisk = -1;
    this.currentStep = 1;
    this.setUrl();
  }
}
