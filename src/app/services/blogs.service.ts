import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../interfaces/blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private _blogs = new BehaviorSubject<BlogPost[]>([]);
  private dataStore: { blogs: BlogPost[] } = { blogs: [] };
  readonly blogs = this._blogs.asObservable();

  // public coins$: Observable<string[]> = new Observable();
  constructor(public http: HttpClient) {
  }

  getAll() {
    this.http.get<BlogPost[]>('/api/v1/blogs').subscribe((data) => {
      this.dataStore.blogs = data;
      this._blogs.next(Object.assign({}, this.dataStore).blogs);
    });
  }

}
