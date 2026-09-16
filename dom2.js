console.log("hello dom2");

// let div = document.querySelector("div");

// get set attriburtes ----------
// console.log(div.getAttribute("id"));
// console.log(div.setAttribute("id","newId"));

// style.nodes----------
// div.style.backgroundColor="green";
// div.style.fontSize="27px";
// div.style.textAlign="center";
// div.innerText="Peter";

// insert nd delete element   (create a button)--------------

// let  newBtn=document.createElement("button");
// newBtn.innerText="Click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.after(newBtn);



// let p= document.querySelector("p");
// p.after(newBtn);

// create heading

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Im Peter Parker</i>";
// console.log(newHeading);

// div.before(newHeading);

// practice que ----------------------->>>>>>>>>>>>>>>>>>>>>>>>

// que 1--
let newBtn = document.createElement("button");
newBtn.innerHTML="click me";
//console.log(newBtn);

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

// let body = document.querySelector("body");
// body.prepend(newBtn);

document.querySelector("body").prepend(newBtn);


//  que 2--

let para= document.querySelector("p");
//console.log(para);

para.setAttribute("class", "newClass");


