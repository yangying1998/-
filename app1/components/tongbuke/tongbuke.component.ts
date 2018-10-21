import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tongbuke',
  templateUrl: './tongbuke.component.html',
  styleUrls: ['./tongbuke.component.css']
})
export class TongbukeComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  // go(){
  //   this.route.navigate(['/sheqv'],{queryParams:{id:1000}});
  // }
  ngOnInit() {
   // this.courseId=this.router.snapshot.params['courseId'];
  //  this.router.params.subscribe((params)=>{
  //   this.courseId=params['courseId'];
  //  })
  this.http.get('/api/courses').subscribe(data=>{
    this.courses=data;
  })
  }
}
