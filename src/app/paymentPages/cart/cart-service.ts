
// localStorage.setItem("token", token);
// localStorage.removeItem("token");
// localStorage.getItem("token");
//  localStorage.setItem("CartStore", JSON.stringify(NewArray))


import { Injectable, OnInit } from '@angular/core';
import { Cart } from './cart-model';


@Injectable({ providedIn: 'root' })
export class CartService implements OnInit {


  CartStore : Cart[] = JSON.parse(localStorage.getItem('CartStore')) || [] ;


  constructor() {}


  ngOnInit(){
    this.GetCartItems();
  }

   AddToCart(data) {

    console.log(data);
    const NewArray = this.CartStore as Cart[];
    const record = NewArray.find(value => value.id === data.id);

    if (record) {
    console.log('true');
    record.quantity++;
    this.CartStore = NewArray;
    localStorage.setItem('CartStore', JSON.stringify(NewArray));
     } else {
    console.log('false');
    data.quantity = 1;
    NewArray.push(data);
    this.CartStore = NewArray;
    localStorage.setItem('CartStore', JSON.stringify(NewArray));
    }


  }

  GetCartItems() {
  return this.CartStore = JSON.parse(localStorage.getItem('CartStore'));
  }


  onChangedData(newItems) {
    localStorage.removeItem('CartStore');
    localStorage.setItem('CartStore', JSON.stringify(newItems));
  }


}





