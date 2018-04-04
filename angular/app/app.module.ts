


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';



@NgModule({
  declarations:[AppComponent], // Component  Entry Here + Pipe Here + Directive
  imports:[BrowserModule],
  providers:[], // Service Entry Here
  bootstrap:[AppComponent] // KickStart the AppComponent
})
// A module is a collection of Component, Services, Pipe, Directive
export class AppModule{

}
