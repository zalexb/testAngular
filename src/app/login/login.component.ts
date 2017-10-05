import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPassword : string;
  userLogin : string;
  message : string;

  constructor(public authService : AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage(){
    this.message = "Logged "+(this.authService.isLogged ? "in" : "out") ;
  }
  login(){
    if(this.authService.login(this.userLogin,this.userPassword)){
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "admin";
      this.router.navigate([redirect]);
    }

  }
  logout(){
    this.authService.logout();
  }

  ngOnInit() {
  }

}
