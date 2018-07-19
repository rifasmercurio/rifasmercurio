import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { DrawService } from '../services/draw.service';
import { AdminPage } from '../pages/admin/admin';
import { DrawDetailPage } from '../pages/draw/draw-detail/draw-detail';
import { DrawPage } from '../pages/draw/draw-list/draw';
import { UploadDrawPage } from '../pages/draw/upload-draw/upload-draw';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { VendorPage } from '../pages/vendor/vendor';




@NgModule({
  declarations: [
    MyApp,
    AdminPage,
    UploadDrawPage,
    DrawDetailPage,
    DrawPage,
    LoginPage,
    MenuPage,
    RegisterPage,
    TabsPage,
    VendorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdminPage,
    UploadDrawPage,
    DrawDetailPage,
    DrawPage,
    LoginPage,
    MenuPage,
    RegisterPage,
    TabsPage,
    VendorPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    DrawService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
