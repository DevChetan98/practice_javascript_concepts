// Q.What is Currying Function in JavaScript?
// A.Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

// It converts a function with multiple parameters into a sequence of functions.
// Each function takes a single argument and returns another function until all arguments are received.
// Helps in functional programming by enabling function reusability and composition.

// Normal Function examples

// function Addition(a,b,c){
//     return a+b+c
// }
// let res = Addition(2,3,4);
// console.log(res)

function Addition(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

//This is not Right way to calling 
// const res = Addition(2);
// // console.log(res);
// let data = res(4);
// // console.log(res);
// let data1 = data(7);
// // console.log(data1)

//Currying Way calling
// Function Currying

// let res = Addition(2)(4)(7);
// console.log(res);


// Real Life scenario example

// const userObject={
//     name:'Chetan Pawar',
//     age:26
// }

// function userInfo(obj){
//     return function (userinfo){
//         return obj[userinfo]   
//     }
// }

// let res = userInfo(userObject);
// console.log(res('age'));//'name'

//multiple function return so call method add multiple function 
// console.log(res('age')()());//'name'


// Infinite Currying Achived

function Add(a){
    return function(b){
        if(b) return Add(a+b);        
        return a
    }
    
}

console.log(Add(5)(6)(8)(100)(200)());

