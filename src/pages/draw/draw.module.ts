import { NgModule } from '@angular/core';
import { DrawDetailPage } from './draw-detail/draw-detail';
import { DrawPage } from './draw-list/draw';
import { UploadDrawPage } from './upload-draw/upload-draw';
import { IonicPageModule } from 'ionic-angular';
import { DrawService } from '../../services/draw.service';


@NgModule({
  declarations: [
    UploadDrawPage,
    DrawDetailPage,
    DrawPage,
  ],
  imports: [
    IonicPageModule.forChild(DrawPage)
  ],
  entryComponents: [
    UploadDrawPage,
    DrawDetailPage,
    DrawPage,
  ],
  providers: [
    DrawService
  ]
})
export class DrawPageModule {}
