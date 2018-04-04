
import { Component } from '@angular/core';
import {AppModel} from './app.model';
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
salary:number;
object:AppModel = new AppModel(0);
name:string;


constructor(){
  this.price = 100;
  this.flag = false;
  this.title = 'Salary Calculator ';
  this.applyClass();
}
printIt():void{
  this.object.basicSalary = this.salary;
  this.object = new AppModel(this.salary);

}
takeSalary(event):void{
this.salary = parseInt(event.target.value);

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
