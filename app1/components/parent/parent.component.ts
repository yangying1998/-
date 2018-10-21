import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../../services/service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor( private local:ServiceService) {
   }
  txt1:string;
  data1=[];
  data2=[];
  change1(i){
    this.data2.unshift(this.data1[i]);
    this.data1.splice(i,1);
  }
  change2(i){
    this.data1.unshift(this.data2[i]);
    this.data2.splice(i,1);
  }
  del(i){
    this.data1.splice(i,1);
  }
  del1(i){
    this.data2.splice(i,1);
  }
    getvalue(txt){
      this.data1.unshift(txt);
  }
  ngOnInit() {
  }
}
