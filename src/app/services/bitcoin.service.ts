import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private _txfee = new BehaviorSubject<number>(0);
  private dataStore: { txfee: number } = { txfee: 0 };
  readonly txfee = this._txfee.asObservable();
  constructor(public http: HttpClient) {
  }

  getTxFee() {
    this
      .http
      .get<any>('https://api.blockchain.info/mempool/fees')
      .subscribe((data) => {
        console.log('... data : ', data);
        let result = data.regular || 0;
        console.log('txfee : ', result);
        result = result * 250 * 0.00000001; // 250 bytes is the average size of a tx
        this.dataStore.txfee = result;
        this._txfee.next(Object.assign({}, this.dataStore).txfee);
      });
  }

}
