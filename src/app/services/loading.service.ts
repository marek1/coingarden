import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../interfaces/blogPost';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading = new BehaviorSubject<string>('');
  private dataStore: { loading: string } = { loading: '' };
  readonly loading = this._loading.asObservable();

  // public coins$: Observable<string[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  toggle(message: string) {
    this.dataStore.loading = message;
    this._loading.next(Object.assign({}, this.dataStore).loading);
  }

}
