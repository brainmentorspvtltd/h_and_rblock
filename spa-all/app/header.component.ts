import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector:'header',
  template:`<ul><li><a [routerLinkActiveOptions]="{exact:true}"
  routerLinkActive="active"
   [routerLink]="homeLink">Home</a>
  </li><li><a routerLinkActive="active"  routerLink="shoes">Shoes</a></li>
  <li><a routerLinkActive="active" routerLink="mobiles/90000/Apple">Mobiles</a></li>
  </ul>
  <button (click)="loadShoes()">Load Shoes Code Way</button>
  `,
  styleUrls:['app.component.css']

})
export class HeaderComponent {
  homeLink:string='/';
  constructor(private router:Router){

  }
  loadShoes(){

    this.router.navigate(["/shoes"]);
  }
}
