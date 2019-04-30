import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryItems: Category[] = [];



  constructor(public categoryService: CategoryService) { }



  ngOnInit() {
    this.getItemsdata();
    // console.log(this.slider);
    // console.log(this.slider.length);
  }


  toggleClass(item){  // this function to switched between close and open tag
    item.in = !item.in;
  }

  async getItemsdata() {
    this.categoryItems =  await this.categoryService.getCatList() as Category[];
   // console.log(this.categoryItems);
  }




}

