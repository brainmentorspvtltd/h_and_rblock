import { MyService } from './../service/MyService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  //providers:[]
})
export class Child2Component implements OnInit {

  constructor(private myservice:MyService) { }


  ngOnInit() {
  }
  increment():void{
  this.myservice.plus();
  }

}
