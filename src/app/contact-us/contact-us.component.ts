import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact-servece';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  Sendmeesage(form: NgForm) {
    /// console.log(form.value);
     if (form.invalid) {
       return;
     }
     this.contactService.SendMessage(
       form.value.name,
       form.value.email,
       form.value.subject,
       form.value.message
       );
   }


}
