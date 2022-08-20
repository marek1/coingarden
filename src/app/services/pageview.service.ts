import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageviewService {

  public sessionId: string = new Date().getTime().toString();
  constructor(public http: HttpClient) {
  }

  setPageview(page: string) {
    this.http.get<any>('/api/v1/pageview?page='+encodeURIComponent(page)+'&id='+this.sessionId)
      .subscribe((data) => {
        console.log('ok');
      });
  }
}
