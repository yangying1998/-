import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-homedetail1',
  templateUrl: './homedetail1.component.html',
  styleUrls: ['./homedetail1.component.css']
})
export class Homedetail1Component implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
