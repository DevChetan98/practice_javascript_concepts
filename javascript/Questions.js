


// console.log(a);
// var a = 10;
// function foo() {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// foo();
// console.log(a);


// undefined
// 10
// 20
// 20



// console.log('Start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log('Promise1');
//   resolve('Resolved');
// });
// promise1.then(res => {
//   console.log(res);
// });
// console.log('End');
// You
// 16:26
// Start
// End
// Promise
// Resolved

/// sort the array based on the length of each string
// ["strawberry", "fig", "apple", "date", "banana"]

// Output: ["fig", "date", "apple", "banana", "strawberry"]
// Sanket Bokade
// 16:39
// Return indexes of element whos sum is equal to target

// [3, 4, 6, 2, 1, 6]
// target = 5

// Output = [[1, 4], [0, 3]]


// database locks


// my solution
const myArray=[3, 4, 6, 2, 1, 6]

for(let i=0;i<=myArray.length;i++){
  for(let j=0;j<=myArray.length;j++){
   if(myArray[i]+myArray[j]==5){
        console.log(myArray[i]+" "+myArray[j])
       
   }   
  }  
    // if(myArray[0]+myArray[i]==5){
        
    // }
}