let url = "https://catfact.ninja/fact/";
// fetch(url)
//     .then((res) => {
//         // console.log(res);
//         return res.json()
//     })
//     .then((data) => {

//         console.log("data1=", data.fact);
//         return fetch(url);

//     })
//     .then((res) => {
        
//         return res.json()
//     })
//     .then((data2) => {

//         console.log("data2=", data2.fact);


//     })
//     .catch((err) => {
//         console.log("err", err);
//     })

//  asuny await use

async function getfacts(){
   try{
    let res= await fetch(url);
    let data= await res.json();
    console.log(data.fact);

    let res1= await fetch(url);
    let data1= await res1.json();
    console.log(data1.fact);
   }
   catch(e){
    console.log("erroe-", e);
   }
}