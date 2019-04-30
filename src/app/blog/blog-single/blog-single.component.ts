import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlgoService } from '../blog-service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  blogId: any;
  BlogData: {
    id: string;
    title: number;
    content: string;
    imagePath: string;
  };

  id: string;
  title: number;
  content: string;
  imagePath: string;

  constructor(public route: ActivatedRoute, public blogService: BlgoService ) {
    this.blogId = this.route.snapshot.queryParamMap.get('Id');
  }

  ngOnInit() {

   console.log(this.blogId);
   this.getBlogData();

  }

  async getBlogData(){
    this.BlogData = await this.blogService.GetBloglistId(this.blogId) as any;
//    console.log(this.productData.id);
    this.id = this.BlogData.id;
    this.title = this.BlogData.title;
    this.content = this.BlogData.content;
    this.imagePath = this.BlogData.imagePath;
  }

}
