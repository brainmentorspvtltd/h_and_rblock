import { Component } from '@angular/core';

@Component({
  selector:'child-comp',
  templateUrl:'./child.component.html',
  styleUrls:['./child.component.css']
})
export class ChildComponent{
  msg:string;
  balance:number;
  fruits:string[]=['apple','orange','banana'];
  constructor(){
    this.balance = 1000;
    this.msg = 'I am a Child Component';
  }
}
