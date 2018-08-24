import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Template } from '../template/template';

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

  public fileDescription: string;
  public file: any;
  public template: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fileDescription = 'Ningún archivo seleccionado';
  }

  loadTemplate() {
    this.template = new Template().generateTemplate();
  }

  read(event: any) {
    this.loadTemplate();
    if (event && (event.lenght > 0 || event.target)) {
      this.fileDescription = event.target.files[0].name;
    }
  }

  
}
