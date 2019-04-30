import { Injectable } from '@angular/core';




@Injectable({ providedIn: 'root' })
export class FooterService {


  constructor() {}

  SendMail(event){
   console.log(event);
  }

}
