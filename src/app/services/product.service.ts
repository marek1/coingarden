import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products$: Observable<Product[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.products$ = this.http.get<Product[]>('/api/v1/products');
  }

}
