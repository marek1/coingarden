import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products$ = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.products$ = this.http.get('/api/v1/products');
  }

}
