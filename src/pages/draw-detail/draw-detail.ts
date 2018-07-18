import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Draw } from '../../models/draw';
import { UploadDrawPage } from '../upload-draw/upload-draw';

/**
 * Generated class for the DrawDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-draw-detail',
  templateUrl: 'draw-detail.html',
})
export class DrawDetailPage {

   draw : Draw = {
     code: '123',
     date: null,
     description: 'Sorteo',
     kickoff: null,
     status: 'DISPONIBLE',
   };

   //@ViewChild(UploadDrawPage) UploadDrawPage: UploadDrawPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrawDetailPage');
  }

}
