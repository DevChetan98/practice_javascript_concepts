// Confused between forEach() and map()?

// map() creates a new array with modified values. 
// forEach() executes a function but doesn't return an array.

//map() : The map() method loops through an array and return a new array with transformed elements.
// It does not modify the original array.

// const numbers = [1,2,3,4];

// const doubled = numbers.map(num=>num*2)
// console.log(doubled)
// console.log("Orignal array is not change : ",numbers)


//forEach()

// The forEach() method loops through an array and executes a function on each element but does not return a new array.
// const numbers = [1,2,3,4];

// numbers.forEach(num=> console.log(num*2));
// //Output : 2,4,6,8
// console.log("Orignal array is not change : ",numbers)


// Conclusion 
// map() returns a new array with modified values.
// forEach() does not return an array, only executes a function.
// use map() when you need transformed data.
// use forEach() for side effects like logging or API calls.