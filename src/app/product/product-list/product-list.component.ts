import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  totalproduct = 0;
  productPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];





  constructor(public productservice: ProductService) { }


  ngOnInit() {
    this.getItemsdata();
    // console.log(this.slider);
    // console.log(this.slider.length);
  }


  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.productPerPage = pageData.pageSize;
    this.productservice.GetProducts(this.productPerPage, this.currentPage);
  }

  async getItemsdata() {
    this.products =  await this.productservice.getproducts() as Product[];
  }

  addtoCart(event){
   this.productservice.addtoCart(event);
  }

  addtoWishList(event){
    this.productservice.addtoWishList(event);
  }

}
