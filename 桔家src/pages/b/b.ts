import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShezhiPage } from '../shezhi/shezhi';
import { DingdanPage } from '../dingdan/dingdan';
/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  shezhi(){
    this.navCtrl.push(ShezhiPage);//首页的子页面为BPage;堆栈的形式，push将新视图推入导航堆栈 pop从导航堆栈中删除视图
    //this.navCtrl.push(BPage,{id:1});//传参,传递给下一个视图的数据
  }
  dingdan(){
    this.navCtrl.push(DingdanPage);
  }
  ionViewDidLoad() {//相当于ngOinit初始化
    // console.log(this.navParams.data);打印整个对象
    console.log(this.navParams.get('id'));//打印对应的属性值
  }

}
