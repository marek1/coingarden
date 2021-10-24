import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LatestOffer } from '../interfaces/latestOffer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private _offers = new BehaviorSubject<LatestOffer[]>([]);
  private dataStore: { offers: LatestOffer[] } = { offers: [] };
  readonly offers = this._offers.asObservable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.http.get<LatestOffer[]>('/api/v1/offers').subscribe((data) => {
      this.dataStore.offers = data;
      this._offers.next(Object.assign({}, this.dataStore).offers);
    });
  }

}
