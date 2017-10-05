import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLogged: boolean = false;
  redirectUrl : string;

  login(Login: string, password: string){
    if(Login=="admin" && password =='admin'){
      this.isLogged = true;
    }
    return this.isLogged;
  }

  logout(){
    this.isLogged = false;
  }

  constructor() { }

}
