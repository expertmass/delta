

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    // console.log("btn clicked");
    let collArr=await getcolleges(country);
    // console.log(colleges);
    show(collArr);
})

function show(collArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of collArr){

        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcolleges(country){
    try{
    let res= await axios.get(url+country);
    return res.data;
    }
    catch(e){
        console.log("error",e);
        return [];
    }
  
}