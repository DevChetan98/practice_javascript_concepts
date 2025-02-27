// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

// function test() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 50;
// }
// test();


function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();
