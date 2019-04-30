import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productData: {
    id: string;
    price: number;
    itmemdesc: string;
    imagePath: string;
  };

  id: string;
  price: number;
  itmemdesc: string;
  imagePath: string;


  constructor(public route: ActivatedRoute,public productservice: ProductService ) {
    this.productId = this.route.snapshot.queryParamMap.get('Id');
  }

  ngOnInit() {

   console.log(this.productId);
   this.getProductData();

  }

  async getProductData(){
    this.productData = await this.productservice.GetproductById(this.productId) as any;
//    console.log(this.productData.id);
    this.id = this.productData.id;
    this.price = this.productData.price;
    this.itmemdesc = this.productData.itmemdesc;
    this.imagePath = this.productData.imagePath;
  }

  addTocart(){

    this.productservice.addtoCart(this.productData);

  }


}
