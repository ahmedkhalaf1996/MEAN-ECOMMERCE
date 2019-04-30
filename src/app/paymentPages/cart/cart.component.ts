import { Component, OnInit } from '@angular/core';
import { Cart } from './cart-model';
import { CartService } from './cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems: Cart[];

  constructor(public cartServcie: CartService) { }

  ngOnInit() {
    this.cartitems = this.cartServcie.GetCartItems();
    console.log(this.cartitems);
  }

  CartQUp(id) {
    const record = this.cartitems.find(value => value.id === id);
    record.quantity++;
   // console.log(record);
    this.cartServcie.onChangedData(this.cartitems);
  }


  CartQDown(id) {
    const record = this.cartitems.find(value => value.id === id);
    if (record.quantity == 1) {
      this.RemoveItem(id);
    } else {
      record.quantity--;
     // console.log(record);
    }
    this.cartServcie.onChangedData(this.cartitems);
  }


  RemoveItem(id) {
    const record = this.cartitems.find(value => value.id === id);
    this.cartitems.splice(this.cartitems.indexOf(record), 1);
  //  console.log(this.cartitems);
    this.cartServcie.onChangedData(this.cartitems);
}


}
