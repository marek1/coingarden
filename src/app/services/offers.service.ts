import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LatestOffer } from '../interfaces/latestOffer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<LatestOffer[]>('/api/v1/offers');
  }

}
