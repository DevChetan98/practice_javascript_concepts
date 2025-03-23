//Async Js Programming 
// Callbacks, Promises, Async & Await


const datas = [   
        {name:"Ajay",Profession:"Software Engineer"},
        {name:"Anuj",Profession:"Software Engineer"}
];

function getDatas(){
    setTimeout(()=>{
        let output = ""
        datas.forEach((data,index)=>{
            output=+`<li>${data.name}</li>`;
        })
       document.body.innerHTML=output
    },1000)
}

function createdata(newdata){
    setTimeout(()=>{
        datas.push(newdata)
    },2000);
}

getDatas();
createdata({name:"Vivek",Profession:"Software Engineer"})