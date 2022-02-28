import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() event =new EventEmitter<number>();
  @Output() clearEvent =new EventEmitter<boolean>();


  typeNumber:any  =0;


  sendNumber(num:any){
    debugger;
     this.event.emit(num);
  }
  

  getResult() {

  }

  clearField(){
    debugger;
    this.clearEvent.emit(true);
  }

}
