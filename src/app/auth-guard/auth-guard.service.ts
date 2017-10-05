import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService  implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isLogged){
      return true;
    }else {
      this.authService.redirectUrl = 'state';
      this.router.navigate(['/login']);
      return false;
    }

  }

  constructor(private authService: AuthService,private router: Router) { }



}
