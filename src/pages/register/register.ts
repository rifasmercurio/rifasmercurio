import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from '../../models/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  authData = {} as AuthData;

  constructor( private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(authData: AuthData) {
    try{
      const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password);
      console.log(result);
    }catch(e){
      console.error(e);
    }
    
  }

}
