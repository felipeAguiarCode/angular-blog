import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  constructor() { }

  protected blogPostList: BlogPost[] = [
    {
      id:1,
      title: "NOVO HOMEM DE FERRO EM 3D",
      description: "marvel anuncia um novo filme do homem de ferro, confira",
      photoCover:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      id:2,
      title: "Nova Série anunciada no Disney +",
      description: "bla blabla",
      photoCover:"https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
    },
    {
      id:3,
      title: "NOVO HOMEM DE FERRO EM 3D",
      description: "marvel anuncia um novo filme do homem de ferro, confira",
      photoCover:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      id:4,
      title: "Nova Série anunciada no Disney +",
      description: "bla blabla",
      photoCover:"https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
    }
  ];

  getAllBlogPosts() : BlogPost[] {
    return this.blogPostList
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPostList.find(blogPost => blogPost.id === id);
  }
}
