import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment } from '@angular/router';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){}
  
  CanLoad(
    route: Router,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> | boolean{
    if(!this.authService.userIsAuthenticated){
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }
}
