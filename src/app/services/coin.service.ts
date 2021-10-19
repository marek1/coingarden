import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  public coins$ = new Observable();
  constructor(public http: HttpClient) {
    this.coins$ = this.http.get('/api/v1/coins');
  }
}
