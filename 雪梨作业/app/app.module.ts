import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import{CommonService} from './services/common.service';
import{Common2Service} from './services/common2.service';
import { InputComponent } from './toDoLists/input/input.component';
import { ListComponent } from './toDoLists/list/list.component';
import { FatherComponent } from './toDoLists/father/father.component';
import{ RouterModule,Router}from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbukeComponent } from './components/tongbuke/tongbuke.component';
import { CourseComponent } from './components/course/course.component';
import { SheqvComponent } from './components/sheqv/sheqv.component';
import { AppRoutingModule } from './/app-routing.module';
 import { HttpClientModule } from "@angular/common/http";
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { Homedetail1Component } from './components/homedetail1/homedetail1.component';
import { Homedetail2Component } from './components/homedetail2/homedetail2.component';
import { Homedetail3Component } from './components/homedetail3/homedetail3.component';
import { Homedetail4Component } from './components/homedetail4/homedetail4.component';
import { Homedetail5Component } from './components/homedetail5/homedetail5.component';
import { Homedetail11Component } from './components/homedetail11/homedetail11.component';
import { Homedetail12Component } from './components/homedetail12/homedetail12.component';
import { Homedetail13Component } from './components/homedetail13/homedetail13.component';
import { Homedetail31Component } from './components/homedetail31/homedetail31.component';
import { Homedetail32Component } from './components/homedetail32/homedetail32.component';
import { Homedetail33Component } from './components/homedetail33/homedetail33.component';
import { Homedetail51Component } from './components/homedetail51/homedetail51.component';
import { Homedetail52Component } from './components/homedetail52/homedetail52.component';
import { Homedetail53Component } from './components/homedetail53/homedetail53.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { SheqvdetailComponent } from './components/sheqvdetail/sheqvdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InputComponent,
    ListComponent,
    FatherComponent,
    HeaderComponent,
    HomeComponent,
    TongbukeComponent,
    CourseComponent,
    SheqvComponent,
    TongbukedetailComponent,
    Homedetail1Component,
    Homedetail2Component,
    Homedetail3Component,
    Homedetail4Component,
    Homedetail5Component,
    Homedetail11Component,
    Homedetail12Component,
    Homedetail13Component,
    Homedetail31Component,
    Homedetail32Component,
    Homedetail33Component,
    Homedetail51Component,
    Homedetail52Component,
    Homedetail53Component,
    CoursedetailComponent,
    SheqvdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:
      [{path:'work',component:Homedetail1Component,children:[{path:'unwork',component:Homedetail11Component},{path:'finished',component:Homedetail12Component},{path:'wanjie',component:Homedetail13Component},{path:'',redirectTo:'unwork',pathMatch:'full'}]},
      {path:'',redirectTo:'work',pathMatch:'full'},
      {path:'tongbuke2',component:Homedetail2Component},
      {path:'course2',component:Homedetail3Component,children:[{path:'studying',component:Homedetail31Component},{path:'guanzhu',component:Homedetail32Component},{path:'kanguo',component:Homedetail33Component},{path:'',redirectTo:'studying',pathMatch:'full'}]},
      {path:'qieshuo',component:Homedetail4Component},
      {path:'tongzhi',component:Homedetail5Component,children:[{path:'mine',component:Homedetail51Component},{path:'zan',component:Homedetail52Component},{path:'pinglun',component:Homedetail53Component},{path:'',redirectTo:'mine',pathMatch:'full'}]
         }]},
        {path:'tongbuke',component:TongbukeComponent},
      {path:'tongbuke/:courseId',component:TongbukedetailComponent},
      
      {path:'course',component:CourseComponent},
      {path:'course/:kechengid',component:CoursedetailComponent},
      {path:'sheqv',component:SheqvComponent},
      {path:'sheqv/:sheqvid',component:SheqvdetailComponent},
       {path:'',redirectTo:'home',pathMatch:'full'}
      //  {path:'**',component:SheqvComponent}
      ]),
    AppRoutingModule
  ],
  providers:[//CommonService,
  //{provide:CommonService,useClass:CommonService},相同的名字
  {provide:CommonService,useClass:Common2Service}],//不同的名字，后面才是真正实例化的类，前面只是找到对应的要实例化的类的名字
  bootstrap: [AppComponent]
})
export class AppModule {}
