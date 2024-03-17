//let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact= await getfacts();
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })
// let url = "https://catfact.ninja/fact/";


// async function getfacts(){
//    try{
//     let res= await axios.get(url);
//    return res.data.fact;
//    }
//    catch(e){
//     return "NO FACTS FOUND";
//    }
// }

//dog api use

// let url2="https://dog.ceo/api/breeds/image/random";
// let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let link= await getimage();
//     // console.log(link);
//     let src=document.querySelector("#result");
//     src.setAttribute("src",link);
    
// })
// async function getimage(){
//    try{
//     let res= await axios.get(url2);
//    return (res.data.message);
//    }
//    catch(e){
//     return "NO IMAGE FOUND";
//    }
// }

// const url="https://icanhazdadjoke.com/";
// async function getjok(){
//    try{
//     const confi={headers: {Accept:"application/json"}}
//     let res= await axios.get(url,confi);
//     console.log(res.data);
//    }
//    catch(e){
//     console.log(e);
//    }
// }


let url="http://universities.hipolabs.com/search?name=";

let country="nepal";

async function getcolleges(){
    try{
    let res= await axios.get(url+country);
    console.log(res);
    }
    catch(e){
        console.log("error",e);
    }
  
}