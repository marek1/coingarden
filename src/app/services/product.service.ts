import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<Product[]>([]);
  private dataStore: { products: Product[] } = { products: [] };
  readonly products = this._products.asObservable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.http.get<Product[]>('/api/v1/products').subscribe((data) => {
      this.dataStore.products = data;
      this._products.next(Object.assign({}, this.dataStore).products);
    });
  }

}
