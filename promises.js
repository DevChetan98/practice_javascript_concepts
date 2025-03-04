// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.
// Here is an example Promise to check if a number is even. If yes, it resolves; otherwise, it rejects.


// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure



// Note: The “resolve” and “reject” are not keywords. you can use any name that you want to give to a function.

// Syntax

// let promise = new Promise((resolve, reject) => {
//     // Perform async operation
//     if (operationSuccessful) {
//         resolve(“Task successful”);
//     } else {
//         reject(“Task failed”);
//     }
// });


// resolve(value): Marks the promise as fulfilled and provides a result.
// reject(error): Marks the promise as rejected with an error.


// const PromiseCheck = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve("Promise resolve");

//     } else {
//         reject("Promise reject");
//     }
// });

// const promisCheck2 = async () => {
//     try {
//         const promise= await PromiseCheck;
//         console.log(promise)
//     } catch (err) {
//         console.log(err);
//     }
// };
// promisCheck2();

// //next method to solve promise 
// // .then((resolve)=>{
// //     console.log("Resolved : ",resolve)
// // }).then((reject)=>{
// //     console.log("Reject : ",reject)
// // }).catch((err)=>{
// //     console.log("error",err)
// // })

// // console.log("PromiseCheck ",await PromiseCheck)
