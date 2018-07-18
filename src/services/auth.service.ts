import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user: Observable<User>
 
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(auth => {
        if (auth) {
          console.log(auth.uid)
          return this.afs.collection('users').doc(auth.uid).valueChanges()
        } else {
          return Observable.of(null)
        }
      }))
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

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      roles: ['vendor']
    }
    return userRef.set(data, { merge: true })
  }

  signOut() {
    this.afAuth.auth.signOut()
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