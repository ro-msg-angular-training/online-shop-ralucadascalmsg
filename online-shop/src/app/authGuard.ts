import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './services/authService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser=this.authenticationService.getcurrentUser();
      if (currentUser)
      {
        if (route.data.roles && !currentUser.roles.includes(route.data.roles)) {
          // role not authorised so redirect to home page
          this.router.navigate(['/restricted']);
          return false;
      }
      return true;
      }

      this.router.navigate(['/']);
      return false;
    }
}