import { MyService } from './../service/MyService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
value:number;
name:string;
  constructor(private myService:MyService) {
    this.name = "Ram";
    this.value =1;
   }

  ngOnInit() {
  }
  read():void{
  this.value = this.myService.getX();
  }

}
