import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public prodivers$ = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.prodivers$ = this.http.get('/api/v1/providers');
  }

}
