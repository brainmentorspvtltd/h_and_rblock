import { ProductModel } from './productmodel';
import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-productappcomp',
  templateUrl: './productappcomp.component.html',
  styleUrls: ['./productappcomp.component.css']
})
export class ProductappcompComponent implements OnInit {
  price:number;
  productModel:ProductModel;
  productArr:Product[];
  filterArr:Product[];
  constructor() {
    this.price = 0;
    this.productModel = new ProductModel();
    this.filterArr = this.productArr = this.productModel.fillProducts();
  }

  takePrice(price:number):void{
  this.price = price;
  this.filterArr = this.productArr.filter(productObject=>productObject.price == this.price);
  }

  ngOnInit() {
  }

}
