import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public prodivers$: Observable<Provider[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.prodivers$ = this.http.get<Provider[]>('/api/v1/providers');
  }

}
