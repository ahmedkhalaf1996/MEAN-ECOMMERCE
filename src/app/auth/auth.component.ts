import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;
  isLoading = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
   this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
     authStatus => {
       this.isLoading = false;
     }
   );
}

  onLogin(form: NgForm) {
    /// console.log(form.value);
     if (form.invalid) {
       return;
     }
     this.isLoading = true;
     this.authService.LogIng(form.value.email, form.value.password);
   }

   onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.SignUp(form.value.email, form.value.password, form.value.name);
   }


   ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }






  loginWithfacebook(){
    this.authService.loginWithfacebook();
  }




}
