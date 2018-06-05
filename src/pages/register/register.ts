import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor( private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try{
      const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }catch(e){
      console.error(e);
    }
    
  }

}
