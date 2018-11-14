import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { ModalController} from 'ionic-angular';
import { AddpagePage } from '../addpage/addpage';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;//tab1Root对应的页面
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  tab5Root = BPage;//需要自己手动配置app.module.ts等文件
  //tab5Root = 'BPage';不用配置ts文件

  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
        let profileModal = this.modalCtrl.create(AddpagePage);
        profileModal.present();
      },false)
      
    }
}
