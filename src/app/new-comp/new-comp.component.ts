import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnChanges, OnInit, OnDestroy {

  @Input() inputData: String = '';
  @Output() eve = new EventEmitter<any>;
  @Input() counter!: number;
  childCounter!: number;
  

  constructor() {
    console.log("child cons called");
  }

  ngOnInit() {
    console.log("child init called");
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['counter']) {
      this.childCounter = changes['counter'].currentValue;
    }
    console.log("child chnages called", changes['counter'], changes);
  }

  ngOnDestroy() {
    console.log("child destroy called");
  }

  ngAfterViewInit() {
    console.log("child viewinit called");
  }

  getData() {
    this.eve.emit("hii there" + this.inputData);
  }
}
