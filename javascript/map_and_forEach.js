//Cover all most higher order function
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


// 22/03/2025 10:24 pm

// Higher Order function episode 5

//forEach
//filter
//map
//sort
//reduce

const companies = [
    {name:"Google", category:"Product Based", start:1981,end:2004},
    {name:"Amazon", category:"Product Based", start:1992,end:2008},
    {name:"Paytm", category:"Product Based", start:1999,end:2007},
    {name:"Coforge", category:"Service Based", start:1989,end:2010},
    {name:"Mindtree", category:"Service Based", start:1989,end:2010}
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


// for(let i=0;i<=companies.length;i++){
//     console.log(companies[i]);    
// }

// companies.forEach(function(company,index){
//     console.log(company.name,index);    
// });

// companies.forEach((company,index)=>console.log(company,index));

//Filter
// Normal Function
// for(let i=0;i<=ages.length-1;i++){
//     if(ages[i]>=20){
//         console.log(ages[i]); 
//         }
// }

// const age= ages.filter(function(age){
//     if(age>=20){
//         return true;
//     }
// })
// console.log(age);

// const finalAge=ages.filter((age)=>(age>=20))
// console.log(finalAge);

// const finalAge=ages.filter(age=>age>=20)
// console.log(finalAge);

// const sb=companies.filter(function(company){
//     if(company.category==="Service Based"){
//         return true
//     }
// })
// console.log(sb);

// const sb = companies.filter(company=>company.category==='Service Based')
// console.log((sb));

//map funtion

// const dummy=companies.map(function(company,index){
//     return `name: ${company.name}, category: ${company.category}`    
// })
// console.log(dummy);

// const dummy=companies.map(company=>`name: ${company.name}, category: ${company.category}`)
//     console.log(dummy);

    //sort
//  const sorted=companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sorted);

// const sorted=companies.sort((c1,c2)=>(c1.start>c2.start ? 1 : -1));
// console.log(sorted);


// const sortedAge=ages.sort((a,b)=>(b-a));
// console.log(sortedAge);

//reduce

// let total=0;
// for(let i=0;i<ages.length;i++){
//     total+=ages[i]
// }
// console.log(total);

// const sumAges=ages.reduce(function(total,age){
//     return total+age;
// },0)
// console.log(sumAges);

// const sumAges=ages.reduce((total,age)=> total+age,0)
// console.log(sumAges);
