import { Injectable } from '@angular/core';
import {  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if(this.authService.isLoggedIn){
			return true;
		}else{
			this.authService.redirectUrl = state.url;
			this.router.navigate(['/login']);
			return false;
		}

	}

  constructor(private authService: AuthService, private router: Router) { }

}
