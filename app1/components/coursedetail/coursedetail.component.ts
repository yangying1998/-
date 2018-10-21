import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  kechengId:number;
  kecheng;
  ngOnInit() {
    this.kechengId=this.router.snapshot.params['kechengid'];
     this.http.get('/api/kechengs/'+this.kechengId).subscribe(data=>{
      console.log(this.kecheng);
      this.kecheng=data;
    })
  }

}
