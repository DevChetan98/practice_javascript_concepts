// lecture in love babbar 

//  class is an blueprint its define data member and function and variable.
// class create a instance is called object 

// class : 1. state/property/data member 2. behavior/funcitonality
class human{
    //properties
    age = 13;
    #wt = 80;
    ht = 180; 


    //behaviour

    walking(){
        console.log("I am walking",this.#wt);
    }
    
    running(){
        console.log("I am running",this.#wt);
    }
}
let obj = new human();
 
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.wt);



// obj.walking();


// default parameter

// function sayName(myName='Akshay'){
//     console.log("My Name is : ",myName)
// }

// sayName()


// function sayName(fName,lName){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName("Chetan","Pawar")

// function sayName(fName,lName){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName("Chetan")
// function sayName(fName='uday',lName='singh'){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName("Chetan")

// function sayName(fName='uday',lName=fName.toLocaleUpperCase()){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName("Chetan")


// function sayName(fName='uday',lName=fName.toLocaleUpperCase()){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName("Chetan","Pawar")

// function sayName(fName='uday',lName=fName.toLocaleUpperCase()){
//     console.log("My Name is : ",fName," ",lName)
// }

// sayName()

// function sayName(value={age:43,ht:150,wt:50}){
//     console.log(value)
// }

// sayName(value={age:50,ht:160,wt:65})

// function sayName(value=['sohan','kartik','honey']){
//     console.log(value)
// }

// sayName(value=['nikson','aniket','shweta'])

// function sayName(value=['sohan','kartik','honey']){
//     console.log(value)
// }

// sayName(['nikson','aniket','shweta'])

// function sayName(value){
//     console.log(value)
// }

// sayName(null)


// function sayName(value='Rahul'){
//     console.log("Hello jii -> ",value)
// }
// sayName(null)

// function sayName(value='Rahul'){
//     console.log("Hello jii -> ",value)
// }

// sayName(undefined)


function getAge(){
    return 190;
}
// function utility(name='love',age= getAge()){
//     console.log(name," ",age);
// }
// utility('love', 20);

function utility(name='love',age= getAge()){
    console.log(name," ",age);
}
utility();