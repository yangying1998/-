import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-sheqv',
  templateUrl: './sheqv.component.html',
  styleUrls: ['./sheqv.component.css']
})
export class SheqvComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  sheqvId:number;
  sheqvs;
  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);
    // this.http.get('/api/sheqvs').subscribe(data=>{
    //   this.sheqvs=data;
    // })
    this.http.get('/api/sheqvs').subscribe(data=>{
      this.sheqvs=data;
    })
  }

}
