import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(public http: HttpClient) {
  }

  getTxFee() {
    return this
      .http
      .get<any>('https://api.blockchain.info/mempool/fees');
  }

}
