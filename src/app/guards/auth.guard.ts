import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService:AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      //Object.entries(token).length === 0
    /* const token = this.tokenService.getToken();
    console.log( typeof(token) ,'ttokken',!token);
    console.log(token);
    if(!token){
      console.log('ok');

      this.router.navigate(['/home']);
      return false;
    }
    return true;
    */

    return this.authService.user$
    .pipe(
      map(user =>{
        if (!user) {
          this.router.navigate(['/home']);
          return false;
        }
        return true; 
      })
    )

  }
}
