import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {


  private _gasfee = new BehaviorSubject<number>(0);
  private dataStore: { gasfee: number } = { gasfee: 0 };
  readonly gasfee = this._gasfee.asObservable();
  constructor(public http: HttpClient) {
  }

  getGasFee() {
    this
      .http
      .get<any>('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=F3DFIF56YSD4NJWH1AJW3D2FCUMHAERU4Z')
      .subscribe((data) => {
        console.log('... data : ', data);
        let result = data.result.suggestBaseFee || 0;
        console.log('gasfee : ', result);
        this.dataStore.gasfee = result;
        this._gasfee.next(Object.assign({}, this.dataStore).gasfee);
    });
  }

}
