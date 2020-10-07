import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor() { }
  isAuthenticated(): boolean{
    return !!this.user;
  }
  // tslint:disable-next-line:typedef
  login() {
    this.user = {
      name: 'bob',
      token: 'token'
    };
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.user = null;
  }
}
