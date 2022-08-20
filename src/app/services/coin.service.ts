import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<string[]>('/api/v1/coins');
  }

}
