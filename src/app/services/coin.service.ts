import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  public coins$: Observable<string[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.coins$ = this.http.get<string[]>('/api/v1/coins');
  }

}
