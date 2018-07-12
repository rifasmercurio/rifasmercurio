import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../models/user';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  ///user: Observable<User>
  user: User

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    this.afAuth.authState.pipe(
      switchMap(auth => {
        if (auth) {
          console.log(auth.uid)
          return this.afs.collection('users').doc<User>(auth.uid).valueChanges()
        } else {
          return Observable.of(null)
        }
      }))
      .subscribe(user => {
        console.log(user)
        this.user = user
      })
  }

  login(email: string, password: string) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(email, password);
      if (result) {
        return result
      }
      console.log(result);
    } catch (e) {
      console.error('Error --> ' + e);
    }
  }

  isAdmin(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  isVendor(user: User): boolean {
    const allowed = ['vendor']
    return this.checkAuthorization(user, allowed)
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if (user.roles.indexOf(role) != -1) {
        return true
      }
    }
    return false
  }


}