import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  
  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }
  constructor() { }
  login(){
    this._userIsAuthenticated = true;
  }
  logout(){
    this._userIsAuthenticated = false;
  }
}
