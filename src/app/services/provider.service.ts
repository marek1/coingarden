import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private _providers = new BehaviorSubject<Provider[]>([]);
  private dataStore: { providers: Provider[] } = { providers: [] };
  readonly providers = this._providers.asObservable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.http.get<Provider[]>('/api/v1/providers').subscribe((data) => {
      this.dataStore.providers = data;
      this._providers.next(Object.assign({}, this.dataStore).providers);
    });
  }

}
