import { Injectable } from '@angular/core';




@Injectable({ providedIn: 'root' })
export class HeaderService {

prandImgPath: string;

  constructor() {}

  getPrandImgPath(){
    this.prandImgPath =  'assets/images/home/logo.png';
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.prandImgPath);
      }, 1000);
    });
   // return this.prandImgPath;
  }

  Search(value){
   console.log(value);
  }



}
