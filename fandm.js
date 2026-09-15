// function myFunction(msg){

//     // parameter --> input
//     console.log(msg);
// }

// myFunction("Peter parker");// argument


// function sum(x,y){
//     // local variables
//     z=x+y;
//     return z;
    
//    // console.log(z);


// }
// function sum (a,b){

//     return a+b;

// }

//  let val = sum(12,1);
//  console.log(val);

 // Arrow Fucation------->>>>>>>>>>>>>>>>>>>>>>>

// const arrowSum=(a,b) =>{

//     return a+b;
//     console.log(a+b);
// };

// const arrowMul=(a,b) =>{

//     return a*b;

//     console.log(a*b);
// }

// pravtice que -------------------->....

// function countVowels(str) {
//     let count = 0;

//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
//         {
//             count++;    

//         }
//     }
//     return count;
//     console.log(count);
// }

// const countVow=(str)=>{
//     let count = 0;

//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
//         {
//             count++;    

//         }
//     }
//     return count;
//     console.log(count);

// }

// for each lopp on arra functions---=----------->>>>>>>>>>>

// let arr=["pune","mumbai","atpasi","jdhuhd"];

// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(), idx, arr);


// })

// let nums =[1,2,3,4,5,6];
        
   
// nums.forEach((num) =>{
//          console.log(num*num);   
             
// })

// let calSq=(num) =>{
//     console.log(num*num);   
             
// };

// nums.forEach(calSq);


// array methods 
// 
// MAP==============>>>>>>>>>>>>>>>>>>>>>>.

// let nums = [ 12, 43, 44 ];

// let newArr = nums.map((val) => {
//     return val*2;

// });

// console.log(newArr);

//  FILTER+===================?>>>>>>>>>>>>>>

// let arr = [1,2,4,6,7,3,9,35,];

// newArr = arr.filter((val) => {
//     return val % 2==0;

// });

// console.log(newArr);

// REDUCE======================>>>>>>>>>>>>>>>>>>


// let arr = [1,2,3,4];

// const output = arr.reduce((prev , curr)=>{

//     return prev+curr;

// });

// console.log(output);


// let arr = [1,2,35,3,4];

// const output = arr.reduce((prev , curr)=>{

//     return prev>curr ? prev : curr ;

// });

// console.log(output);

// practice set =============================>>>>>>>>>>>>>

// let marks = [98,76,90,95,44,78,93];

// newMarks=marks.filter((val)=>{

//     return val>=90;
// });
// console.log(newMarks);

// 2=========>>>>>>>>.

let n =prompt("enter a num: ");

let arr=[];

for(let i=1; i<=n; i++){

    arr[i-1]=i; 
};

console.log(arr);

sum = arr.reduce((prev,curr)=>{

    return prev+curr;
});

console.log("sum is",sum);

factorial = arr.reduce((prev,curr)=>{

    return prev*curr;

});

console.log("factorial is ",factorial);


