import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardSellerService implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private  userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isSeller);
  }

}
