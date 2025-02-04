// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role']; // Get the expected role from route data
    const userRole = this.loginService.getRole(); // Retrieve the user's role
console.log(userRole);
console.log(expectedRole);
    if ( this.loginService.isAuthenticated() &&
userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect if role doesn't match or not authenticated
      return false;
    }
  }
}
