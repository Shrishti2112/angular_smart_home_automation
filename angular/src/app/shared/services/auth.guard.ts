import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const isLoggedIn = this.authService.isLoggedIn();
      const targetUrl = state.url;
      if (isLoggedIn) {
        if (targetUrl === '/auth/login') {
          this.router.navigate(['/dashboard']);
          return false;
        }
        return true;
      } else {
        if (targetUrl !== '/auth/login') {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      }
    }
}
