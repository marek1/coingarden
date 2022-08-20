import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../interfaces/blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<BlogPost[]>('/api/v1/blogs');
  }

}
