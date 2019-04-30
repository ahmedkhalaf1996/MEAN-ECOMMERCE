import { Component, OnInit } from '@angular/core';
import { RecommendedItems } from './recommended-items.model';
import { RecommendedItemsService } from './recommended-items.service';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.css']
})
export class RecommendedItemsComponent implements OnInit {




  recommendedItems: RecommendedItems[] = [];

  CountOfItems : number;

  constructor(public recommendedItemService: RecommendedItemsService) { }


  ngOnInit() {
    this.getItemsdata();
    // console.log(this.slider);
    // console.log(this.slider.length);
  }



  async getItemsdata() {
    this.recommendedItems =  await this.recommendedItemService.getiList() as RecommendedItems[];

    this.CountOfItems = await Math.floor(this.recommendedItems.length / 3) + 1 as number;

  }

  addtoCart(event){
   this.recommendedItemService.addtoCart(event);
  }








}
