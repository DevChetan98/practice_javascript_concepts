const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor);
Math.PI = 5 ;


const chai = {
    name : 'ginger chai',
    price:250,
    isAvailable:true
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name',{
writable:false,
enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    console.log(`${key} ${value}`)
}

