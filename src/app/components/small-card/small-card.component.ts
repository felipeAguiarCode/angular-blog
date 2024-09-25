import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() blogPost!: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
