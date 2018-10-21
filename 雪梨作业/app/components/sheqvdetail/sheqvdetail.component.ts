import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sheqvdetail',
  templateUrl: './sheqvdetail.component.html',
  styleUrls: ['./sheqvdetail.component.css']
})
export class SheqvdetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  sheqvid:number;
  sheqv;
  ngOnInit() {
    this.sheqvid=this.router.snapshot.params['sheqvid'];
     this.http.get('api/sheqvs/'+this.sheqvid).subscribe(data=>{
      console.log(data);
      this.sheqv=data;
    })
  }

}
