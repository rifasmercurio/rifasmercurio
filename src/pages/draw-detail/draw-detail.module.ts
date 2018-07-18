import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawDetailPage } from './draw-detail';

@NgModule({
  declarations: [
    DrawDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DrawDetailPage),
  ],
})
export class DrawDetailPageModule {}
