


var a:string ="Amit";
var b:number=100;
var c:boolean = true;
var d:string[] = ["abcd","xyz"];
var e:[string,number] = ['Ram',21];
enum Currency{
    USD=10, INR
}
var cur:Currency = Currency.INR;
console.log(cur);
function add(x:number, y:number):number{
    return x + y;
}
function second(x:string):string{
    return x ;
}

function error:never{
    throw new Error("Send Some Error...");
}
function show():void{
    console.log("this is show...");
}

var h2:any;
h2=1000;
h2= "Amit";
var h1:string|number;
h1 = "Hello";
//var e1 = {a:'Ram',b:21}
type gg = {a:string,b:number};
var e1 :gg = {a:'Ram',b:21};
var e2 :gg = {a:'Shyam',b:21};
var e3 :gg = {a:'Mike',b:21};
console.log("Object is ",e1);
//const sum:(a:number,b:number):number=second;
//type fn:(a:number,b:number):number;
//const sum:fn =second;
