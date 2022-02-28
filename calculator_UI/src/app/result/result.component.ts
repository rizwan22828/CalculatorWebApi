import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //@Input()  currentnumber!: string;
  currentnumber :number=0;

  stirngNumber: string= "";

  btnClear(){
    this.stirngNumber ='';
  }
  receiveNumber($event:any){
      this.currentnumber = $event;
     this.stirngNumber += this.currentnumber;
  }

  IsClear($clearEvent:boolean){
    debugger;
    if($clearEvent){
      debugger;
      this.stirngNumber ='';
    }
  }

}
