import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadDrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload-draw',
  templateUrl: 'upload-draw.html',
})
export class UploadDrawPage {

  public textoArchivo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.textoArchivo = 'Ningún archivo seleccionado';
  }

  
}
