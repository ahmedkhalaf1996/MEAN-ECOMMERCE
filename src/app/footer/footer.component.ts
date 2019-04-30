import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mail:any;

  constructor(public footerService: FooterService) { }

  ngOnInit() {
  }

  sendMail(event){
     this.footerService.SendMail(event);
  }

}
