import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/provider';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  private _allOffers = new BehaviorSubject<Offer[]>([]);
  private dataStore: { allOffers: Offer[] } = { allOffers: [] };
  readonly allOffers = this._allOffers.asObservable();

  constructor(public http: HttpClient) {
  }

  getAll(coin: string, type: string, provider: string, duration: number) {
    this.http.get<Offer[]>('/api/v1/interest?coin=' + coin + '&type=' + type + '&provider=' + provider + '&duration=' + duration).subscribe((data) => {
      this.dataStore.allOffers = data;
      this._allOffers.next(Object.assign({}, this.dataStore).allOffers);
    });
  }

}
