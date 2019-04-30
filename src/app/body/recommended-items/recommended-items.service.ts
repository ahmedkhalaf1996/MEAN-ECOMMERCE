import { Injectable } from '@angular/core';


import { RecommendedItems } from './recommended-items.model';


@Injectable({ providedIn: 'root' })
export class RecommendedItemsService {
  recommentedItems: RecommendedItems[];

  recommentedItemsList = [
  {
    id: '1',
    price:  56,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '2',
    price:  55,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '3',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '4',
    price:  88,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '5',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '6',
    price:  100,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '7',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '8',
    price:  100,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '9',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '10',
    price:  88,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '11',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '12',
    price:  100,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '13',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '14',
    price:  100,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '15',
    price:  100,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '16',
    price:  77,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product5.jpg',
  },
  {
    id: '17',
    price:  88,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/product4.jpg',
  },
  {
    id: '18',
    price:  22,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '19',
    price:  66,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  },
  {
    id: '20',
    price:  66,
    itmemdesc: 'Easy Polo Black Edition',
    imagePath: 'assets/images/home/new.png',
  }
];

  constructor() {}

  getiList(){
    //return this.featuresItemsList;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.recommentedItemsList);
      }, 1000);
    });
  }


  addtoCart(event){
   //console.log(event);
  }



}
