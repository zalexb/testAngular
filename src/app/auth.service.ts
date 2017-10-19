import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

	isLoggedIn: boolean = false;
	redirectUrl: string;

	login(login: string, password: string) : Observable<boolean> {
		return Observable.of(true).delay(1000)
		.do(val => {
			if(login == "admin" && password == "admin") {
				this.isLoggedIn = true;
			}
			return this.isLoggedIn;
		});
		
	}

	logout(): void {
		this.isLoggedIn = false;
	}

  constructor() { }

}
