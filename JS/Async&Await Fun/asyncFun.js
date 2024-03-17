// async function greet(){
//     throw "404 PAGE NOT FOUND";
//    return "Hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolve");
//     console.log("reesult of promise was : ",result);
// })
// .catch((err)=>{
//     console.log("err is ", err);
// })

// let vari=async ()=>{
//     return 5;
// };








// USE of await

// function changeNum(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//        },1000);
//     })
// }

// async function demo(){
//    await changeNum();
//    await changeNum();
//    await changeNum();
//    await changeNum();
//    await changeNum();
// }






let h1 = document.querySelector("h1");

function changeColor(color, dealy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            // if(nextcolor) nextcolor();
            h1.style.color = color;
            resolve("color changed");
        }, dealy)
    })


}

async function demo() {
 try{
    await changeColor("red",1000);
 await changeColor("blue",1000);
 await changeColor("green",1000);
 }catch(err){
    console.log("err cauth", err);
 }
 

 let a=6;
 console.log(a);
 console.log("adition ",a+3);
}