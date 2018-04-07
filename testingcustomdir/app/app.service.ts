import { Injectable } from "@angular/core";

@Injectable()
export class MyService{
constructor(){

}
getData():string{
  return "hello service data";
}
}
