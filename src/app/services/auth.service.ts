import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as fire from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {AppUser} from '../model/app-user';
import {UserService} from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  user$: Observable<fire.User>;

  constructor(private fireAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = fireAuth.authState;
  }

  googleLogin() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    localStorage.setItem('returnUrl', returnUrl);

    this.fireAuth.auth.signInWithRedirect(new fire.auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {
          return this.userService.get(user.uid);
        }

        return Observable.of(null);
      });
  }

  regularLogin(username: string, password: string) {

    fire.auth.EmailAuthProvider.credential(username, password);
    this.fireAuth.auth.signInWithEmailAndPassword(username, password);
    this.router.navigate(['/products']);
  }

  emailSignUp(email: string, password: string, displayName: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {

        this.userService.registerNewUser(user, displayName, false); // if using firestore
      });
  }
}
