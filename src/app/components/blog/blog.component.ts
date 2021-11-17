import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blogs } from '../../data/blogs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Unsere Blog Posts';
  blogPosts = Blogs;
  selectedBlog: any = {};
  constructor(public route: ActivatedRoute,
              private titleService: Title,
              private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'Eine Übersicht über die Blog-Beiträge'}
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.selectedBlog = Blogs.find(blog => blog.url === params.get('id')?.toString());
        if (this.selectedBlog) {
          this.titleService.setTitle(this.selectedBlog.name);
          this.metaTagService.updateTag(
            {name: 'description', content: this.selectedBlog.meta}
          );
        }
      }
    });
  }

}
