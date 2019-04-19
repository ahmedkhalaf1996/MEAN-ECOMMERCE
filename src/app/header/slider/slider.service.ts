import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Slider } from './slider.model';


@Injectable({ providedIn: 'root' })
export class SliderService {
  private slider: Slider[] = [];

  sliderlist = [
  {
    id: '1',
    title: 'Free E-Commerce Template' ,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagePath: 'assets/images/home/girl1.jpg',
  },
  {
    id: '1',
    title: '100% Responsive Design' ,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagePath: 'assets/images/home/girl2.jpg',
  },
  {
    id: '1',
    title: 'Free E-Commerce Template' ,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagePath: 'assets/images/home/girl3.jpg',
  }
];

  constructor() {}

  getslider(){
    return this.sliderlist;
  }



}
