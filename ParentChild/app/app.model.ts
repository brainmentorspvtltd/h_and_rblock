export class AppModel{
  //basicSalary :number;
  constructor(public basicSalary:number){
  //this.basicSalary = basicSalary;
  }
  hra():number{
    return this.basicSalary * 0.30;
  }
  da():number{
    return this.basicSalary * 0.20;
  }
  ta():number{
    return this.basicSalary * 0.10;
  }
  pf():number{
    return this.basicSalary * 0.05;
  }
  gs():number{
    return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
  }
  tax():number{
    if(this.gs()>900000){
      return 30;
    }
    else
    if(this.gs()<900000 && this.gs()>500000){
      return 20;
    }
    else{
      return 10;
    }
  }
  ns():number{
    return (this.gs() * this.tax())/100;
  }

}
