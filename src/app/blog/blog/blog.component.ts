import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog-model';
import { BlgoService } from '../blog-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList: Blog[] = [];


  constructor(public blogService: BlgoService) { }

  ngOnInit() {
    this.getBlogData();
  }

  async getBlogData() {
    this.blogList =  await this.blogService.GetBloglist() as Blog[];
  }

}
