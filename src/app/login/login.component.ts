import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	userPassword: string;
	userLogin: string;
	message: string;

  constructor(public authService: AuthService, public router: Router) { 
 	this.setMessage();
  }
 
setMessage() {
	this.message = 'Logged' + (this.authService.isLoggedIn? "out" : "in");
	console.log(this.message);
}

login() {
	this.message = "Trying to log in";
	this.authService.login(this.userLogin, this.userPassword).subscribe(() => {
		this.setMessage();
		if (this.authService.isLoggedIn){
			let redirect = this.authService.redirectUrl? this.authService.redirectUrl: 'admin'
			this.router.navigate([redirect]);
		}
	});
}

  ngOnInit() {
  }

}
