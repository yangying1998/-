import { Component,EventEmitter, OnInit,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  @Input() arr;
  txt:string;
  @Output() event=new EventEmitter();
  @Output() txt1=new EventEmitter();
  getvalue(e){
    if(e.keyCode==13){
      this.event.emit(this.txt);
    }
  }
  ngOnInit() {
  }

}
