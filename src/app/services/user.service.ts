import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import * as fire from 'firebase';
import {AppUser} from '../model/app-user';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: fire.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: String): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
