console.log("back in form");

// CallBack Hell------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getData(dataID , getNextData){
//         setTimeout(()=>{
//             console.log("data" , dataID);
//             if(getNextData){
//                 getNextData();  
//             }


//      },2000);
        
// }

// getData(1,()=>{
//     console.log("getting data 2....");
//        getData(2,()=>{
//     console.log("getting data 3....");
//         getData(3,()=>{
//     console.log("getting data 4....");
//             getData(4);
//     });
//    });
// });

// Promise Chain-------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");
//         },3000);
//     });
// }

// getData(1)
//     .then((res)=>{
//         console.log("getting data 2....");
//         return getData(2);
//     })
//      .then((res)=>{
//         console.log("getting data 3....");
//         return getData(3);
//     })
//      .then((res)=>{
//         console.log("getting data 4....");
//         return getData(4);
//     })
//      .then((res)=>{
//         console.log(res);
//     })

// Async Await----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>    

// here we have call data by in console getalldata() like that
// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData() {
//     console.log("getting data 1....");
//     await getData(1);
//     console.log("getting data 2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);
//     console.log("getting data 4....");
//     await getData(4);
//     console.log("getting data 5....");
//     await getData(5);
//     console.log("getting data 6....");
//     await getData(6);

// }

// IIFE mode - immediately invoke function expression ----->>>>>

function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("success");
        },2000);
    });
}

(async function () {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);
    console.log("getting data 5....");
    await getData(5);
    console.log("getting data 6....");
    await getData(6);

})();