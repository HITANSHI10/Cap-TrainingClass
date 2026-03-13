// import{add} from "./6.js"
// console.log(add(38,37));
// import { Animal } from "./6.js";
// let d=new Animal;
// d.type="dog";
// d.color="black"
// console.log(d);
//?ASYNCHRONOUS PROGRAMMING
/**
 * TIMER FUNCTIONS
 * PROMISES
 * ASYNC AND AWAIT-->
 */
// function task1(){
//     console.log("task 1");
// }
// function task2(){
//     console.log("task 2"); 
// }
// task1()
// task2()
// //?setTimeOut
// //?setInterval
// console.log("start");
// setTimeout(()=>{
//     console.log("task completed");
// },5000)
// let c:number=setInterval(()=>{
//     console.log("task 2 completed");
// },5000)
// console.log(c);
// console.log("end");
//?Promises
//!Fulfilled
//!Rejected
//!Pending
// let p1=new Promise<string>((resolve,reject)=>{    //command -> tsc 7.ts --target ES2020
//     let success=true;        //default value=> undefined
//     if(success==true){
//         resolve("login successful")
//     }
//     else{
//         reject("login unsuccessful")
//     }
// })
// p1.then((ele)=>{
//     console.log((ele));
//  }).catch((res)=>{
//     console.log(res);
// })
//.finally(()=>{
// })
// function getUser():Promise<string>{
//     return new Promise((resolve,reject)=>{
//         resolve("User is there")
//         reject("User not found")
//     })
// }
// getUser().then((ele)=>{
//     console.log(ele);
// }).catch((res)=>{
//     console.log(res);
// })
let pro = new Promise((resolve) => {
    let no = 5;
    if (no == 5) {
        resolve(5);
    }
});
pro.then((ele) => {
    let number = ele * 2;
    console.log(number);
    return number;
}).then((res) => {
    let output = res * 2;
    console.log(output);
});
