import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, animate, style } from '@angular/animations'
import { CoinService } from '../../services/coin.service';
import { Risks } from '../../data/risks';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  // public coins$: Observable<string[]>;
  public selectedCoins$: Observable<string[]> = new Observable();
  public coinForm: FormGroup;
  public currentStep = 1;
  public selectedCoin = '';
  public selectedRisk = -1;
  public whiteList = ['BTC', 'ETH']
  public coinCap = 55;
  public risks = Risks;
  constructor(public coinService: CoinService,
              public router: Router,
              public route: ActivatedRoute,
              public location: Location) {
    // this.coins$ = this.coinService.coins$;
    // this.coins$.subscribe(x => console.log('yo : ', x));
    this.coinForm = new FormGroup({
      selectedCoin: new FormControl(''),
    });
  }

  ngOnInit(): void {
    console.log('init');
    this.selectedCoins$ = this.coinService.coins;
    // this.selectedCoins$.subscribe(x => console.log(x));
    // connect
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedCoin = params.get('id')?.toString() || '';
      }
    })
  }

  searchCoin(ev: any) {
    this.selectedCoins$ = this.coinService.coins
    .pipe(
      map(x => x.filter(coin => coin.toLowerCase().indexOf(ev.target.value) > -1))
    );
  }

  selectCoin(coin: string) {
    this.selectedCoin = coin;
    // Generate the URL:
    let url = this.router.createUrlTree(['start/' + coin]).toString();
    // Change the URL without navigate:
    this.location.go(url);
  }

  setRisk(x: number) {
    console.log('got risk ; ', x);
    this.selectedRisk = x;
  }

  goToStep(x: number) {
    this.currentStep = x;
    if (x === 3 && this.selectedRisk === -1) {
      this.selectedRisk = 0;
    }
  }

  resetCoin() {
    this.selectedCoin = '';
    this.currentStep = 1;
  }
}
