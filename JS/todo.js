let todo= [];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
    else if(req=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("----------");
       
    }
    else if(req=="add"){
        let task=prompt("enetr your want to task");
        todo.push(task);
        console.log("task added");
        
    }
    else if(req=="delete"){
        let idx=prompt("enetr index number of task which want to delete ?");
        todo.splice(idx, 1);
        
    }
    else{
        alert("chooes right task");
    }
    req=prompt("Please enter your request");
}