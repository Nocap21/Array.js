// console.log("hello DOM");

// DOM Mani By ID , Class , Tag.................>>>>>>>>>>>>>>


// let heading=document.getElementById("myId");
// console.dir(heading);

// let headings=document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let para=document.getElementsByTagName("p");
// console.dir(para);



// DOM mani Query selector___________>>>>>>>>>>>>>>.

// TAgs 

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

//Class

// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);

// id 

// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);



// Properties----------->>>>>>>>>>>.

// let div = document.querySelector("div");
// console.dir(div);

// let heading= document.querySelector("h1");
// console.dir(heading);

// practice set ----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let h2=document.querySelector("h2");
// console.dir(h2.innerHTML);

// h2.innerHTML=h2.innerHTML + "From Amezing Spider-Man"; // concanite

let divs=document.querySelectorAll(".box");
console.dir(divs);

// divs[0].innerHTML="New value for that";
// divs[1].innerHTML="New value for that";
// divs[2].innerHTML="New value for that";


let idx=0;
for(div of divs){

    div.innerHTML=`New value for that ${idx} `
    idx++;

};