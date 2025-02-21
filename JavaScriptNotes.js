// Prefer not to use var because of issue in block scope and functional scope.

// "use strict"; //treat all JS code as newer version 

//alert(3+3)  //we are using nodejs,not browser

// Data Types in js 

//number =>2 power 53
//bigint 
//string =>""
//boolean=>true/false
//null => standalone value
//undefined=>
//symbol==>unique ness find 

//object 

// console.log(typeof "chetan") // string
// console.log(typeof null) // object
// console.log(typeof undefined) //undefined


// Datatype conversion 
// let  score ="33esh"

// console.log(typeof score)

// let valueInNumber=Number(score);
// console.log(valueInNumber);

// Output
// string
// string
// NaN
 
//  examples 
  //""=>
 //"33abc"=>NaN
 //true => 1; false => 0
 
//  let isLoggedIn=1
//  let booleanIsLoggedIn=Boolean(isLoggedIn)

 // 1=> true; 0 => false
 // ""=>false;
 // "hitesh"=> true


//  let numberToString=11
//  let stringNumber=String(numberToString)

// console.log(numberToString) // 11

// console.log(stringNumber) //string

//********************************************OPERATIONS*******************************************

// let value =3 
// let negValue=-value
// console.log(negValue)


// DATATYPES SUMMARY

// 1. Primitive 2 Non-Primitive(Refference Type)
// primtive 7 types : String,Number,Boolean,null,undefined,Symbole,BigInt.

// 2 Non-Primitive (Refference type)
// Types:Array,Objects,Functions


// **********************************STACK AND HEAP MEMORY IN JS**********************************
// stack(Primitive), Heap(Non-Primitive)


let myyoutubename="chetanpawrdotcom"
let anothername=myyoutubename 
anothername="chaiorcode"
// console.log(anothername)
// console.log(myyoutubename)


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
 let userTwo=userOne

 userTwo.email='chetan@google.com'


//  console.log(userOne.email)
//  console.log(userTwo.email)


// ****************************Strings in javascript*************************************

const name ="hitesh"
const repoCount=50

// console.log(name + repoCount +"value")


//****************************Number in Javascript **************************************

//****************************Date and Time in Javascript **************************************


//****************************Arrays in Javascript **************************************

// console.log(11+'33')
// console.log(11-'33')

// What is An Event Loop in JavaScript?
//***************************Event Loops in Javascript *******************************/
// Event loop: the event loop is an important concept in javascript that enables asynchronus programming 
// by handling tasks efficiently. Since JavaScript is single- threaded,
// it uses the event loop to manage the execution of multiple tasks without blocking the main thread.

// Example
console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");


