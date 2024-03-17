let h1=document.querySelector("h1");

function changeColor(color, dealy ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // if(nextcolor) nextcolor();
             h1.style.color=color;
             resolve("color changed");
         },dealy)
    })
 

}

changeColor("blue",1000)
.then(()=>{
    console.log("blue color was changed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was changed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was changed");
    // return changeColor("green",1000);
})


// }
// changeColor("red",1000 , ()=>{
//   changeColor("blue",1000 , () => {
//       changeColor("green",1000);
//   });
// });




// function saveDb(data, succes, failure) {
//     let internetSpeeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeeed > 4) {
//         succes();
//     } else {
//         failure();
//     }
// }

// use of promis
//  function saveDb(data) {
        
//        return new Promise((resolve, reject) => {
//         let internetSpeeed = Math.floor(Math.random() * 10) + 1;

//         if( internetSpeeed >4){
//             resolve("data is saved");
//         }else{
//             reject("weak connection data is not saved");
//         }
//        });
//     }




// saveDb("hello", () => {
//     console.log("your data1 is saved");
//     saveDb("HEllO AGAIN", () => {
//         console.log(" your data2 is saved");
//         saveDb("Third data", ()=>{
//             console.log("Third data is save");
//         }, ()=>{
//             console.log("weak  connection, your data3 is not save")
//         })
//     }, () => {
//         console.log(" weak  connection, your data2 is not save");
//     })
// }, () => {
//     console.log(" weak  connection, your data1 is not save");
// });

//after declare promis call the function

// let request=saveDb("hello")

// // request.then(()=>{
// //     console.log("Promis was resolved");
// // })
// // .catch(()=>{
// //     console.log("Promis was rejected");
// // })

// // or compact way
// //  Promise chaining

// .then((result)=>{
//     // console.log(request);
//     console.log("Promis1 was resolved");
//     console.log("result of promise =" , result);
//     return saveDb("helloworld");
// })
// .then((result)=>{
//     console.log("Promis2 was resolved");
//     console.log("result of promise =" , result);
//     return saveDb("Praveen");
// })
// .then((result)=>{
//     console.log("Promis3 was resolved");
//     console.log("result of promise =" , result);
//     return saveDb("bhardwaj");
// })
// .then((result)=>{
//     console.log("result of promise =" , result);
//     console.log("Promis4 was resolved");
// })
// .catch((error)=>{
    
//     console.log("Promis was rejected");
//     console.log("Error of promise", error);
// })
