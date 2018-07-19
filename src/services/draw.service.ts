import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';
import { Draw } from '../models/draw';

@Injectable()
export class DrawService {
  user: Observable<User>
 
  constructor(private afs: AngularFirestore) {
  }

  public getDraws(): Observable<Draw[]> {
    return <Observable<Draw[]>> this.afs.collection('draws').valueChanges();
 }

}