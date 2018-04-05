import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductappcompComponent } from './productappcomp/productappcomp.component';
import { ProductsearchComponent } from './productappcomp/productsearch/productsearch.component';
import { ProductlistComponent } from './productappcomp/productlist/productlist.component';
import { ProductComponent } from './productappcomp/productlist/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductappcompComponent,
    ProductsearchComponent,
    ProductlistComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
