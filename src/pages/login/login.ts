import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../models/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { MenuPage } from '../menu/menu';
import { VendorPage } from '../vendor/vendor';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authData = {} as AuthData;
  user: User

  constructor(public auth: AuthService,
    public navCtrl: NavController) { 
      this.auth.user.subscribe(user => {
        this.user = user
        if(this.user) {
        this.navToUserPage()
      }})
    }

  async login(authData: AuthData) {
    this.auth.login(authData.email, authData.password)
    this.navToUserPage()
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  navToUserPage() {
    if (this.auth.isAdmin(this.user)) {
      this.navCtrl.setRoot(MenuPage)

    } else if (this.auth.isVendor(this.user)) {
      this.navCtrl.setRoot(VendorPage)
    }
  }

}
