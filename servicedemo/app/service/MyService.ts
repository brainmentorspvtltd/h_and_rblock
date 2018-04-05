import { Injectable } from '@angular/core';
@Injectable()
export class MyService{
  x:number;
  constructor(){
  this.x =0;
  }
  plus():void{
    this.x++;
  }
  getX():number{
    return this.x;
  }

}
