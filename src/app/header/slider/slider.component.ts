import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';
import { Slider } from './slider.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
  //////////// state 1
    trigger('list2', [

      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })
      ),
      transition('* => in', [
        animate(500, keyframes([
          style({
            transform: 'translateX(100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      ///////////// state 2
      state('out', style({
        opacity: 1,
        transform: 'translateX(0)'
      })
      ),
      transition('* => out', [
        animate(500, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),

////////////////


     ])
  ]
})




export class SliderComponent implements OnInit {
  state = 'out';

   interval;

   slider: Slider[] = [];

   slideSelector = 0;

  constructor(public sliderservice: SliderService) { }


  ngOnInit() {
     this.getSliderdata();

    // console.log(this.slider);
    // console.log(this.slider.length);
    this.changeSelector();
  }

  async getSliderdata() {
    this.slider =  await this.sliderservice.getslider() as Slider[];
  }


  prev(){

    if(this.slideSelector > 0){
      this.slideSelector--;
    } else {
      this.slideSelector =  this.slider.length-1;
    }
    clearInterval(this.interval);
    this.changeSelector();
    this.state = 'in';

  }
  next(){

    if(this.slideSelector < this.slider.length-1){
      this.slideSelector++;
    } else {
      this.slideSelector = 0;
    }
    clearInterval(this.interval);
    this.changeSelector();
    this.state ='out';

  }

  changeSelector() {
    this.interval = setInterval(() => {
      this.state ='out';
      if(this.slideSelector < this.slider.length-1){
        this.slideSelector++;
        // console.log(this.slideSelector);
      } else {
        this.slideSelector = 0;
      }
    }, 8000);
    }

    redirect(index){
      this.slideSelector = index;
    }



}
