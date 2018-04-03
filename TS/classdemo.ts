

abstract class Person{
    public age:number;
    constructor(age:number){
    this.age = age;
    }
    abstract  show():void;
}

interface Db1{
    add():void;
}
interface Db2{
    delete():void;
}
interface DB extends Db1, Db2{
    open():void;
    close():string;
}
class OracleDB implements DB{
    add():void{

    }
    delete():void{

    }
    open():void{

    }
    close():string{
        return "";
    }
}

// Interface with param type
interface MyType{
    name:string;
    age:number;
}
// Interface with Method Type
interface MyMethodType{
    (x:number,y:number):number;
}
function adder(e:number,t:number):number{
    return e + t;
}
var g1:MyMethodType =adder;
function output(b:Person):void{

}
function display(a:MyType):void{

}
display({name:'ram',age:21});

class Emp extends Person{
//private id:number;
//private name:string;
//salary:number;
show():void{

}
    constructor(private _id:number, private name:string,public salary:number,private city:string){
        super(21);
    //this.id = id;  // Instance var = Local var
    //this.name = name;
    //this.salary = salary;
}
set id(id:number){
    this._id = id;
}
get id():number{
    return this._id;
}
print():void{
    console.log(`Id is ${this.id} Name is ${this.name} Salary is ${this.salary} and City is ${this.city} Age is ${this.age}`);
}
}
var ram:Emp = new Emp(1001,'Ram',9999,'Mumbai');
ram.id = 1002;
console.log("Id is ",ram.id);
ram.print();