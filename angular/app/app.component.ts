
import { Component } from '@angular/core';

@Component({
  selector :'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
title:string;
flag:boolean;
price:number;
myclass:string;
msg:string;
msg2:string;
constructor(){
  this.price = 100;
  this.flag = false;
  this.title = 'Welcome Angular ';
  this.applyClass();
}
takeInput(event):void{
  this.msg = event.target.value;
  console.log('Take Input ',this.msg);
  // event - keyup event
  // target - source (textbox)
  // value- textbox value
}
changePrice():void{
  this.msg2 = this.msg;
  this.price += 500;
  this.applyClass();
}
applyClass():void{
  this.myclass = this.price>=1000?'red':'orange';
}
}
