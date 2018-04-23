import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private auth: AuthService, private router: Router) {
}

  canActivate(router, state: RouterStateSnapshot) {
      return this.auth.user$.map( user => {
        console.log(31);
        if (user) { console.log(31); return true; }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        console.log(123);
        return false;

      });
    }

}
