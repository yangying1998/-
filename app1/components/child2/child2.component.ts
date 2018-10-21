import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }
  @Input() arr;
  @Input() arr1;
  @Output() change1Index=new EventEmitter();
  @Output()change2Index=new EventEmitter();
  @Output() delIndex=new EventEmitter();
  @Output() del1Index=new EventEmitter();
  change1(i){
    this.change1Index.emit(i);
  }
  change2(i){
    this.change2Index.emit(i);
  }
  del(i){
     this.delIndex.emit(i);
  }
  del1(i){
     this.del1Index.emit(i);
  }
  ngOnInit() {
  }

}
