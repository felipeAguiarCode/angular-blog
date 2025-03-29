import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/postType';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home-articleForm.component.css']
})
export class HomeComponent{
  
  posts:Post[] = dataFake;
  formVisible:boolean = false;

  newPost:Post = {
    id: '',
    title: '',
    description: '',
    photoCover: ''
  }

  switchFormVisibility():void{
    this.formVisible = !this.formVisible;
  }

  addNewPost():void{
    this.posts.unshift(this.newPost);
  }
}
