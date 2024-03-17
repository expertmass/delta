const max=prompt("Enetr max number");
const random=Math.floor( Math.random()*max )+1;

let guess=prompt("Guess the number ");

while(true){
    if(guess=="quit"){
        console.log("you close your game");
        break;
    }
    else if(guess==random){
        alert("You chooes right number. Congrates!!")
        break;
    }else if( guess< random){
       guess= prompt("Hint : Your chooes is too small");
    }else{
       guess= prompt("Hint : Your chooes is too big");
    }
}