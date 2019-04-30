import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './header.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin/admin.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  prandImg: any;
  search: string;
  userIsAuthenticated = false;
  isUserAdmin = false;
  private authListenerSubs: Subscription;
  private adminListerrSubs: Subscription;

  constructor(public headerService: HeaderService,
              private authService: AuthService,
              private adminService: AdminService) { }


  ngOnInit() {
     this.getPrandimagePath();
     /// this for user auth
     this.userIsAuthenticated = this.authService.getIsAuth();
     this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
      /// this for  user admin
     this.isUserAdmin = this.adminService.getIsAdmin();
     this.adminListerrSubs = this.adminService.getAdminStatusListener()
       .subscribe(isUserAdmin => {
         this.isUserAdmin = isUserAdmin;
       });

  }



  async getPrandimagePath() {
    this.prandImg =  await  this.headerService.getPrandImgPath() ;
  }



  Search(event) {
    this.headerService.Search(event);
  }

  Logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.adminListerrSubs.unsubscribe();
  }



}
