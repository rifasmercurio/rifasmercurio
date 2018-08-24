import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage)
  ],
  exports: [
    RegisterPage
  ],
  providers: [
    AuthService
  ]
})
export class RegisterPageModule { }