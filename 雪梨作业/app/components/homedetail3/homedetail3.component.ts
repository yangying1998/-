import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-homedetail3',
  templateUrl: './homedetail3.component.html',
  styleUrls: ['./homedetail3.component.css']
})
export class Homedetail3Component implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
