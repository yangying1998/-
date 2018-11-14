import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddpagePage } from '../pages/addpage/addpage';
import { ShezhiPage } from '../pages/shezhi/shezhi';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule} from '@angular/common/http';

import { SousuoPage } from '../pages/sousuo/sousuo';
import { DingdanPage } from '../pages/dingdan/dingdan';
import { DengluPage } from '../pages/denglu/denglu';
import { ZhucePage } from '../pages/zhuce/zhuce';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddpagePage,
    ShezhiPage,
    SousuoPage,
    DingdanPage,
    DengluPage,
    ZhucePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
       tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddpagePage,
    ShezhiPage,
    SousuoPage,
    DingdanPage,
    DengluPage,
    ZhucePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
