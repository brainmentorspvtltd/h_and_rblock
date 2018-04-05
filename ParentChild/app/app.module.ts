


import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations:[AppComponent,ChildComponent], // Component  Entry Here + Pipe Here + Directive
  imports:[BrowserModule,FormsModule],
  providers:[], // Service Entry Here
  bootstrap:[AppComponent] // KickStart the AppComponent
})
// A module is a collection of Component, Services, Pipe, Directive
export class AppModule{

}
