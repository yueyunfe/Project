import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import * as fire from 'firebase';
import {AppUser} from '../model/app-user';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: fire.User, displayname?) {
    user.updateProfile(displayname);
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  registerNewUser(user: fire.User, displayname, isSeller) {
    this.db.object('/users/' + user.uid).update({
      email: user.email,
      isSeller: isSeller,
      name: displayname
    });
  }

  get(uid: String): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
