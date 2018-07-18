import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadDrawPage } from './upload-draw';

@NgModule({
  declarations: [
    UploadDrawPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadDrawPage),
  ],
  /*exports:[
    UploadDrawPage
  ]*/
})
export class UploadDrawPageModule {}
