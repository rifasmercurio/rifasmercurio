import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
  exports: [
    LoginPage
  ],
  providers: [
    AuthService
  ]
})
export class LoginPageModule { }