import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from './auth/token-storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const requiresLogin = route.data.requiresLogin || false;
    if (!requiresLogin) {
      if (this.tokenStorageService.isLoggedIn()) {
        this.router.navigate(['main']);
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
