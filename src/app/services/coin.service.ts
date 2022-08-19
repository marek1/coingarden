import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  // private _coins = new BehaviorSubject<string[]>([]);
  // private dataStore: { coins: string[] } = { coins: [] };
  // readonly coins = this._coins.asObservable();

  // public coins$: Observable<string[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<string[]>('/api/v1/coins');
    // this.http.get<string[]>('/api/v1/coins').subscribe((data) => {
    //   this.dataStore.coins = data;
    //   this._coins.next(Object.assign({}, this.dataStore).coins);
    // });
  }

}
