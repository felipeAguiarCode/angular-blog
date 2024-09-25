import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
import { BloggingService } from 'src/app/blogging.service';
import { BlogPost } from 'src/app/blog-post';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogPost: BlogPost | undefined; 
  blogginService: BloggingService = inject(BloggingService);


  constructor() {
    const blogPostId = parseInt(this.route.snapshot.params['id'], 0);
    this.blogPost = this.blogginService.getBlogPostById(blogPostId);
   }

}
