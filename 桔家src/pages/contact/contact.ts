import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { AddpagePage } from '../addpage/addpage';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  // ionViewDidLoad(){
  //   document.querySelector('#tab-t0-2').addEventListener('click',()=>{
  //     let profileModal = this.modalCtrl.create(AddpagePage);
  //     profileModal.present();
  //   },false)
    
  // }

}
