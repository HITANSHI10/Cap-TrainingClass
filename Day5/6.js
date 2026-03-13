"use strict";
// console.log("hiiii");
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
exports.add = add;
// //!type inference
// let a=10
// a=20
// //a="hii"
// //!type annotation
// let b:string="hello"
// let c:boolean=true
// let d:number=88
// let e:null=null       //in future value can not be assigned
// let f:undefined   //in future value can be assigned but in js not in typescript
// let g:any=20
// g="hii"
// g=true
// console.log(g);
// //!Array and tuples
// let arr:number[]=[10,20,30,40]
// arr.push(50)
// console.log(arr);
// let arr1:[string,number,boolean]=["dgjf",678,true]    //any heterogeneous array is called tuple in typescript
// arr1.push(76865756)
// console.log(arr1);
// let stud:{
//     name:string,
//     age?:number,
//     rollno:number
// }={
//     name:"Hits",
//     rollno:564
// }
// function gree(name:string,age:number=24):void{
//     console.log(` ${name} and ${age}`);
//     //return 10           //not assignable
// }
// gree("hits")
// function add(a:number,b:number):number{
//     return a+b
// }
// console.log(add(10,20))
// //Arrow function
// const divide = (a:number,b:number):number =>a/b;
// console.log(divide(18,9));
// let arr2:readonly(string|number)[]=[234,"rdfgyj",77]
//arr2.push(768)
//Interface:
// interface Person{
//     readonly id:number,
//     name:string,
//     age:number,
//     gender:string
// }
// let obj:Person={
//     id:42426,
//     name:"hits",
//     age:22,
//     gender:"male"
// }
// obj.name="hit"
// interface Animal{
//     name:string,
//     age:number
// }
// interface Dog extends Animal{
//     breed:string
// }
// let mydog:Dog={
//     name:"tommy",
//     age:2,
//     breed:"bulldog"
// }
// interface Car{
//     brand:string,
//     color:string
//     sunroof():string
// }
// let myCar:Car={
//     brand:"toyota",
//     color:"black",
//     sunroof() {
//         return "sunroof"
//     }
// }
//!OOPS
// //?CLASS
// class demo{
//     //?properties
//     //?methods
//     //?constructor --> special method
//     //IN typescript and javascipt only one constructor is allowed (different from other languages)
//     constructor(){
//     }
// }
// class Car{
//     public brand:string;
//     color:string;
//     display():void{
//         console.log("display");
//     }
//     constructor(brand:string,color:string){
//         this.brand=brand
//         this.color=color
//         this.display=()=>void{
//         };
//     }
//     public start():void{
//         console.log("this is my car");
//     }
// }
// let c = new Car("maruti","red")
// c.brand="maruti"
// console.log(c);
// console.log(c.start());
// //!Access modifiers
// /**
//  * public
//  * private
//  * protected
//  */
// class Animal{
//     eat(){
//         console.log("all animals eat");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("meow");
//     }
// }
// let cat=new Cat()
// cat.eat()
// cat.sound()
// class Person{
//     name:string="Hitanshi"
// }
// class teacher extends Person{
//     company:string="capgemini"
//     display(){
//         console.log(this.name);
//         console.log(this.company);
//     }
// }
// let t=new teacher();
// t.display()
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var c = new Animal;
c.color = "brown";
c.type = "cat";
console.log(c);
