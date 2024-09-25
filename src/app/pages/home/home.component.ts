import { Component, inject } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { BloggingService } from 'src/app/blogging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  blogPostList: BlogPost[] = [];
  blogginService: BloggingService = inject(BloggingService);
  filteredBlogPostList: BlogPost[] = [];


  constructor() { 
    this.blogPostList = this.blogginService.getAllBlogPosts();
    this.filteredBlogPostList = this.blogPostList;
  }

  filterResults(text: string){
    if(!text) {
      this.filteredBlogPostList = this.blogPostList;
      return;
    }

    this.filteredBlogPostList = this.blogPostList.filter( 
      post => post?.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    ) ;
  }

}
