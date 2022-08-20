import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<Provider[]>('/api/v1/providers');
  }

}
