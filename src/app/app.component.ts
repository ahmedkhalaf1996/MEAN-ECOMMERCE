import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AdminService } from './admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private adminService: AdminService) {}

async  ngOnInit() {
   await this.authService.autoAuthUser();
   await  this.adminService.StartService();
  }

}
