import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Draw } from '../../models/draw';
import { DrawService } from '../../services/draw.service';
import { DrawDetailPage } from '../draw-detail/draw-detail';

/**
 * Generated class for the DrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-draw',
  templateUrl: 'draw.html',
})
export class DrawPage {

  public draws: Draw[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private drawService: DrawService) {
  }

  ngOnInit() {
    this.drawService.getDraws().subscribe(x=> {
      this.draws = x;
    });
  }

  goToDetail(){
    this.navCtrl.setRoot('DrawDetailPage');
  }


}
