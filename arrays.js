// console.log("Arraayyyyyy");

// let marks=[221,311,2332,2334,57564,7535];
// console.log(marks);

// for(let i=0; i < marks.length; i++){

//     console.log(marks[i]);
// }

// for(mark of marks){

//     console.log(mark);
// }

// practice que------->>>>>>

// let marks=[87,90,67,78,89,99];

// let sum=0;
   
// for(let val of marks ){
//         sum+=val;
// }

// avg=sum/marks.length;
// console.log(`Avg of the marks are= ${avg}`);


// 2nd que .>>>>>>


// let items= [250,700,288,150,276];
// let i=0;
// for(let val of items){

    
//     console.log(`value of item is ${val}`);
//     let offer=val/10;
//     items[i]=items[i]-offer
//     console.log(`value after offer is ${items[i]}`);
// }

// let items= [250,700,288,150,276];
// let i=0;

// for(let i=0; i<items.length; i++){

    
//     console.log(`value of item is ${items[i]}`);
//     let offer=items[i]/10;
//     items[i]=items[i]-offer
//     console.log(`value after offer is ${items[i]}`);
// }

// array mathods---->>>>>>>>>>

let companies =[ "tata","microsoft","itc","alightage","cap","Nocap"];
// remove first company
console.log(companies);

// let remove= companies.shift();
// console.log("removed ", remove);

// add ctc to itc 

// let replace = companies.splice(2,1,"ctc");
// console.log(" replaced item is ",replace);

// ad amezon to end 

let addinend = companies.push("amezon");
console.log("added in the end is",addinend);