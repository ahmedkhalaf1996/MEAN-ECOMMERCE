import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ContactService {


  constructor() {}

  SendMessage(name,email,subject, message) {
   console.log('name',name, 'email', email, 'subject', subject, 'mess', message);
  }

}
