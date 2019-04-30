import { Component, OnInit } from '@angular/core';
import { FeaturesItemsService } from './features-items.service';
import { FeaturesItems } from './features-items.model';

@Component({
  selector: 'app-features-items',
  templateUrl: './features-items.component.html',
  styleUrls: ['./features-items.component.css']
})
export class FeaturesItemsComponent implements OnInit {



   featuresItems: FeaturesItems[] = [];


  constructor(public featuresitemservice: FeaturesItemsService) { }


  ngOnInit() {
    this.getItemsdata();
    // console.log(this.slider);
    // console.log(this.slider.length);
  }


  async getItemsdata() {
    this.featuresItems =  await this.featuresitemservice.getFItems() as FeaturesItems[];
  }

  addtoCart(event){
   this.featuresitemservice.addtoCart(event);
  }

  addtoWishList(event){
    this.featuresitemservice.addtoWishList(event);
  }


}

