import {Product} from './product';
export class ProductModel{
 constructor(){

 }
 fillProducts():Product[]{
  var productArr:Product[]=[];
  productArr.push(new Product(1001,'Apple',90000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1002,'Samsung',12000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1003,'LG',9000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  productArr.push(new Product(1004,'Nokia',8000,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=ca87b899b2ffa0499b9a577d0931ff3f'));
  return productArr;

 }
}
