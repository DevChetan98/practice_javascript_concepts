//Apply, Call, Bind in JS

//Problem statement

// let userDetails={
//     name:"Chetan Pawar",
//     age:26,
//     Designation:"Software Engineer",
//     printDetails:function(){
//         console.log(this)
//     }
// }

// userDetails.printDetails()

let userDetails={
    name:"Chetan Pawar",
    age:26,
    Designation:"Software Engineer",
}

let printDetails = function(state,country){
   console.log(this.name+" "+state+" "+country)
}

printDetails.call(userDetails,"Delhi","India")


let userDetails2={
    name:"Akshay Pawar",
    age:24,
    Designation:"Software Engineer",  
}

//function borrowing for Call
printDetails.call(userDetails2,"Delhi","India")

//Apply
printDetails.apply(userDetails2,["Delhi","India","452001"])

//Bind

let newFun=printDetails.bind(userDetails,"delhi","india")
newFun();