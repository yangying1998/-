import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ ZhucePage} from '../zhuce/zhuce';
/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
})
export class DengluPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  zhuce(){
    this.navCtrl.push(ZhucePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DengluPage');
  }

}
