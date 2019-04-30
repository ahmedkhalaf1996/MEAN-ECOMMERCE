import { Injectable } from '@angular/core';


import { Product } from './product.model';
import { CartService } from '../paymentPages/cart/cart-service';


@Injectable({ providedIn: 'root' })
export class ProductService {
  featuresItems: Product[];

  productList = [
  {
    id: '1hlkjhlkjhlkjhlkjhlkj',
    price:  56,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '2jjlkjhkljhlkjhlkj',
    price:  55,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: 'jgggggggggksksksk',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '1hlkjhlkjhlkjhlkjhlkj',
    price:  56,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '2jjlkjhkljhlkjhlkj',
    price:  55,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: 'jgggggggggksksksk',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '1hlkjhlkjhlkjhlkjhlkj',
    price:  56,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '2jjlkjhkljhlkjhlkj',
    price:  55,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: 'jgggggggggksksksk',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  }
];

  productId: string;

  constructor(public cartService: CartService) {}

  getproducts(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.productList);
      }, 1000);
    });
  }


  GetProducts(postsPerPage: number, currentPage: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.productList);
      }, 1000);
    });
  }


  GetproductById(productId){
   // return this.productList.find(x => x.id === this.productId);
   return new Promise(resolve => {
    setTimeout(() => {
      resolve(this.productList.find(x => x.id === productId));
    }, 1000);
  });
  }


  addtoCart(event){
   //console.log(event);
   this.cartService.AddToCart(event);
  }

  addtoWishList(event) {
    //console.log(event)
  }

}
