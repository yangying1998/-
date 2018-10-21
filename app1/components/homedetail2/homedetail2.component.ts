import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-homedetail2',
  templateUrl: './homedetail2.component.html',
  styleUrls: ['./homedetail2.component.css']
})
export class Homedetail2Component implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  jiaruId:number;
  jiarus;
  ngOnInit() {
    this.http.get('/api/jiarus').subscribe(data=>{
      this.jiarus=data;
    })
  }

}
