import { Injectable } from '@angular/core';
@Injectable()
export class Emp{
  constructor(private id:number, private name:string, public salary:number){

  }
  increaseSalary():number{
    //this.salary = this.salary + 1000;
    return this.salary + 1000;
  }
}
