import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit Testing Example by Amit';
  result:number;
  constructor(){
    this.result =0;

  }
  increment():void{
  this.result++;
  }
}
