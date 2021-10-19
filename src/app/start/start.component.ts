import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public coins: Observable<any>;
  public selectedCoin = '';
  public whiteList = ['BTC', 'ETH'];
  public coinCap = 55;
  public coinForm: FormGroup;
  constructor(public http: HttpClient,
              public router: Router,
              public route: ActivatedRoute,
              public location: Location) {
    // connect
    const httpOptions = {};
    this.coins = this.http.get('/api/v1/coins', httpOptions);
    this.coinForm = new FormGroup({
      selectedCoin: new FormControl('BTC'),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedCoin = params.get('id')?.toString() || '';
      }
    })
  }

  selectCoin(coin: string) {

    this.selectedCoin = coin;

    // Generate the URL:
    let url = this.router.createUrlTree(['start/' + coin]).toString();

    // Change the URL without navigate:
    this.location.go(url);
  }
}
