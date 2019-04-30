import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



import { Admin } from './admin-model';
import { AuthService } from '../auth/auth.service';

const BACKEND_URL =  'http://localhost:3000/api/user/';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private isUserAdmin:any;
  private token: string;
  private AdminStatusListener = new Subject<boolean>();
  private authstatus = this.authService.getAuthStatusListener();

  admin: Admin[];
  isAdmin: string;


  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {}




  getAdminStatusListener() {
    return this.AdminStatusListener.asObservable();
  }

   getIsAdmin() {
    return  this.isUserAdmin;
  }

  getToken(){
      this.token = this.authService.getToken();
  }

  StartService() {
    this.getToken();
    this.GetUserData(this.token);
    this.authstatus.subscribe(isAuthenticated => {
      this.getToken();
      this.GetUserData(this.token);
      this.AdminStatusListener.next(this.isUserAdmin);
    });
  }


  GetUserData(token) {
    if(this.authService.getIsAuth()){
      this.http.post(BACKEND_URL + '/isAdmin', token).subscribe(
        (response) => {
            this.isUserAdmin = response['isAdmin'];
            this.AdminStatusListener.next(this.isUserAdmin);
          },
        error => {
          this.AdminStatusListener.next(false);
          this.isUserAdmin = false;
        }
      );
    } else {
      this.isUserAdmin = false;
      this.AdminStatusListener.next(false);
    }
  }

  ////




}
