import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminService } from './admin.service';

@Injectable()
export class AdminGuerd implements CanActivate {
  constructor(private adminService: AdminService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAdmin = this.adminService.getIsAdmin();

    if (!isAdmin){
      this.router.navigate(['/']);
    }
    return isAdmin;
  }

}
