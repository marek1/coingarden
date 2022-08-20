import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../../interfaces/blogPost';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as AppActions from '../../actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Unsere Blog Posts';
  loading$: Observable<string> = new Observable<string>();
  blogPosts$: Observable<BlogPost[]> = new Observable<BlogPost[]>();
  blogPostsError$: Observable<string|null> = new Observable();
  selectedBlog$: Observable<BlogPost|undefined> = new Observable<BlogPost>();
  constructor(public route: ActivatedRoute,
              private store: Store<any>,
              private titleService: Title,
              private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht über die Blog-Beiträge'}
    );
    this.store.dispatch(AppActions.getBlogs());
    this.blogPosts$ = this.store
      .pipe(
        select(fromRoot.getBlogs)
      );
    this.blogPostsError$ = this.store.pipe(select(fromRoot.getBlogsError));
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedBlog$ = this.store
          .pipe(
            select(fromRoot.getBlogs),
            map((blogPosts: BlogPost[]) => {
              return blogPosts.find(blog => blog.url === params.get('id')?.toString())
            })
          )
        this.selectedBlog$.subscribe(selectedBlog => {
          if (selectedBlog) {
            this.titleService.setTitle(selectedBlog.name);
            this.metaTagService.updateTag(
              {name: 'description', content: selectedBlog.meta}
            );
          }
        });
      }
    });
  }

}
