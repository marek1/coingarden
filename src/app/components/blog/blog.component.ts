import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../../interfaces/blogPost';
import { map } from 'rxjs/operators';
import { BlogsService } from '../../services/blogs.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Unsere Blog Posts';
  loading$: Observable<string> = new Observable<string>();
  blogPosts$: Observable<BlogPost[]> = new Observable<BlogPost[]>();
  selectedBlog$: Observable<BlogPost|undefined> = new Observable<BlogPost>();
  constructor(public route: ActivatedRoute,
              private loadingService: LoadingService,
              private blogsService: BlogsService,
              private titleService: Title,
              private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.loading$ = this.loadingService.loading;
    this.loadingService.toggle('Lädt');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht über die Blog-Beiträge'}
    );
    this.blogsService.getAll();
    this.blogPosts$ = this.blogsService
      .blogs
      .pipe(
        map((blogPosts: BlogPost[]) => {
          this.loadingService.toggle('');
          return blogPosts.sort((a, b) => a.date > b.date ? -1 : 1)
        })
      );
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedBlog$ = this.blogsService
          .blogs
          .pipe(
            map((blogPosts: BlogPost[]) => {
              this.loadingService.toggle('');
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
