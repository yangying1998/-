import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { BPage } from '../b/b';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;
  @ViewChild('ac') ac;
  // items = [];
  isActive=0;
  arr=['推荐','家居','餐厨','床上用品'];
  constructor(public http:HttpClient,public navCtrl: NavController) {
    // for (let i = 0; i < 30; i++) {
    //   this.items.push( this.items.length );
    // }
  }


  

  isClick(i){
    this.isActive=i;
  }






  
doInfinite(infiniteScroll) {
  console.log('Begin async operation');
  this.http.get('/api/courses').subscribe(data=>{
    console.log(data);
    infiniteScroll.complete();
  })
  // setTimeout(() => {
  //   for (let i = 0; i < 30; i++) {
  //     this.items.push( this.items.length );
  //   }

  //   console.log('Async operation has ended');
  //   infiniteScroll.complete();
  //   if (this.items.length>90){
  //     infiniteScroll.enable();
  //   }
  // }, 1000);
}

//下拉刷新
doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}










  jiajv(){
    this.navCtrl.push(BPage);//首页的子页面为BPage;堆栈的形式，push将新视图推入导航堆栈 pop从导航堆栈中删除视图
    //this.navCtrl.push(BPage,{id:1});//传参,传递给下一个视图的数据
  }

ionViewDidLoad(){
  // this.ac.get();
}
// change(){
//   console.log( this.slides.getActiveIndex());
// }






}
