import {QueryList, Component, ViewChild, ViewChildren } from '@angular/core';
import { Child1Component } from './child1/child1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(Child1Component)
   comp:Child1Component;
   @ViewChildren(Child1Component)
   allChilds:QueryList<Child1Component>  ;

   accessChild1():void{
     //this.comp.name = "Shyam Kumar";
   this.allChilds.forEach(child=>child.name="Shyam Kumar");
    }

  }

