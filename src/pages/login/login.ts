import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../models/authData';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { User } from '../../models/user';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authData = {} as AuthData;
  user: User

  constructor(private auth: AuthService,
    public navCtrl: NavController) { }

  async login(authData: AuthData) {
    this.mapUser()
    const logged = this.auth.login(authData.email, authData.password)
    if (logged) {
      if (this.auth.isAdmin(this.user)) {
        this.navCtrl.setRoot('AdminPage')
      } else if (this.auth.isVendor(this.user)) {
        this.navCtrl.setRoot('VendorPage')
      }
    }
  }

  private mapUser() {
    this.user = this.auth.user
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
