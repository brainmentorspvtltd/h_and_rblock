import {EventEmitter, Component, Input, Output } from '@angular/core';


@Component({
  selector:'child-comp',
  templateUrl:'./child.component.html',
  styleUrls:['./child.component.css']
})
export class ChildComponent{

  @Output()
  passToChild:EventEmitter<string> = new EventEmitter<string>();
  @Input()
  sendtochild:string;
  msg:string;
  lastName:string;
  balance:number;
  fruits:string[]=['apple','orange','banana'];
  constructor(){
    this.balance = 1000;
    this.msg = 'I am a Child Component';
  }
  sendLastName(){
    this.passToChild.emit(this.lastName);
  }
}
