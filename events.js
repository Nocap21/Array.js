console.log("events ");


// event objects handilig=---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
// let btn1= document.querySelector("#btn1");
// btn1.onclick =(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

//     console.log("Handler 1");
//     let a=25;
//     a++;
//     console.log(a);

// };

// let div = document.querySelector("div");
// div.onmouseover =(evt)=>{
//     console.log(evt);
//     console.log("You are Inside the div");

// };

// let btn2=document.querySelector("#btn2");
// btn2.ondblclick =()=>{

//     console.log("click 2x");
// };

// events listner handlingggg------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// we use this ==


let btn1= document.querySelector("#btn1");

btn1.addEventListener("click", (evt) =>{

    console.log("button was clicked - handler 1");
    // console.log(evt.target);
    // console.log(evt);
    // console.log(evt.type);
});

btn1.addEventListener("click",() => {

    console.log("Button was clicked - handler 2");
});



const handler3= () =>{
    console.log("Button was clicked - handler3");
}
btn1.addEventListener("click",handler3);



btn1.addEventListener("click",() => {

    console.log("Button was clicked - handler 4");
});


btn1.removeEventListener("click",handler3);