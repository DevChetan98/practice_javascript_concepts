// let myArr =  [1,2,3,4,5]
// console.log(`original Array  : ${myArr} length : ${myArr.length}`)
// console.log(`push(): adds one or more elements to the end of an array and return the new length,changing the original array. myArr.push(6)`);
// console.log(`original Array  : ${myArr} length : ${myArr.length}`)

// let myArr =  [1,2,3,4,5]
// console.log(`original Array  : ${myArr} length : ${myArr.length}`)
// console.log(`Pop method removes the last element from an array and Return that Element :${myArr.pop()}`);
// console.log(`original Array  : ${myArr} length : ${myArr.length}`)

// let myArr =  [1,2,3,4,5]
// console.log(`original Array : ${myArr} length : ${myArr.length}`)
// console.log(`shipt() method removes first element from an array and Return that Element :${myArr.shift()}`);
// console.log(`original Array : ${myArr} length : ${myArr.length}`)

// let myArr =  [1,2,3,4,5]
// console.log(`original Array : ${myArr} length : ${myArr.length}`)
// console.log(`unshipt() method Adds one or more element to the beginning of an array and return the new length, changing the original array. :${myArr.unshift(9,8)}`);
// console.log(`original Array : ${myArr} length : ${myArr.length}`)


// Array Method Again write proper according to linkedin document

// push():
// let fruits = ['apple','banana'];
// fruits.push('orange','grap');
// console.log(fruits); //['apple','banana','orange','grap']

//pop():
let fruits = ['apple','banana','orange'];
let removeFruit=fruits.pop();
console.log("removeFruit : ",removeFruit);//'orange'
console.log(typeof removeFruit); //string
console.log(fruits); //['apple','banana']


//shift():

// let fruits = ['apple', 'banana','orange'];
// let removeFruit = fruits.shift();
// console.log("removeFruit : ",removeFruit);// 'apple'
// console.log(typeof removeFruit); // string
// console.log(fruits); //['banana','orange']

//unshift();

    // let fruits = ['apple', 'banana','orange'];
    // fruits.unshift('apple','grape');
    // console.log("Fruit : ",fruits);// 'apple'

//concat():

    // let fruits = ['apple', 'banana'];
    // let vegetables = ['carrot','spinch'];
    // let combined = fruits.concat(vegetables);

    // console.log(fruits);
    // console.log(vegetables);
    // console.log(combined);

//slice():

    // let fruits = ['apple','banana','orang','grape'];
    // let sliceFruits = fruits.slice(1,3);
    // console.log(sliceFruits);//['banana','orange']
    // console.log(fruits);//['apple','banana','orange','grape']

//splice();

    // let fruits = ['apple','banana','orange','grape'];
    // let removeFruits = fruits.splice(1,2,'kiwi','watermelon');
    // console.log(removeFruits);//['banana','orange']
    // console.log(fruits);//['apple','kiwi','watermelon','grape']


//indexOf():

    // let fruits = ['apple','banana','orange','grape'];
    // console.log(fruits.indexOf('grape'));//2
    // console.log(fruits.indexOf('coco'));//-1

// lastIndexOf():

    // let fruits = ['apple','banana','orange','banana','grape'];
    // console.log(fruits.lastIndexOf('banana'));//3
    // console.log(fruits.lastIndexOf('coco'));//-1

//includes():

// let fruits = ['apple','banana','orange','grape'];
// console.log(fruits.includes('orange'));//true
// console.log(fruits.includes('coco'));//false