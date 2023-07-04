//import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { AuthService } from './auth/login/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isAuthenticated = !(this.authService.getToken() == null);
    const userRoles = this.authService.getRoles();
    const requiredRoles: string[] = route.data['roles'];

    if (isAuthenticated) {
      if (userRoles.some(role => requiredRoles.includes(role))) {
        return true;
      }else {
        this.authService.redirectHome();
        return false;        
      }
    } else {
      this.authService.redirectLogin();
      return false;
    }
  }
}
