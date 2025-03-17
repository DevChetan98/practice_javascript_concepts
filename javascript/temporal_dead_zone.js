// Temporal Dead Zone
// Variable Scoping :  1.Globle scope 2. function scope 3. Block scope
// Access : 
// let,const,var declare globle scope access globle scope.
// function scope not access let,const,var out of the funciton acces only function scope. not access let,const,var out of the function.
// Block scope variable access all block and out of the block access but let and const not access out of the block.

// Temporal Dead Zone : let,const 
console.log(fullName);

var fullName= 'chetan pawar'
// console.log(fullName);

// Definition : 
// The TDZ refers to the time between entering a scope and the variable’s declaration line,
//  during which accessing variables declared with let or const will result in a ReferenceError.

