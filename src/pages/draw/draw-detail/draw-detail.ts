import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Draw } from '../../../models/draw';


/**
 * Generated class for the DrawDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrawDetailPage');
  }

}
