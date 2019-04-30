import { Injectable } from '@angular/core';


import { FeaturesItems } from './features-items.model';


@Injectable({ providedIn: 'root' })
export class FeaturesItemsService {
  featuresItems: FeaturesItems[];

  featuresItemsList = [
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

  constructor() {}

  getFItems(){
    //return this.featuresItemsList;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.featuresItemsList);
      }, 1000);
    });
  }


  addtoCart(event){
   //console.log(event);
  }

  addtoWishList(event) {
    //console.log(event)
  }

}
