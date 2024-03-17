let gameSeq = [];
let userSeq = [];

let btns = ["red", "purple", "green", "yellow"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});


function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function usreflash(btn) {
    btn.classList.add("usreflash");
    setTimeout(function () {
        btn.classList.remove("usreflash");
    }, 250);
}



function levelup() {
userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randcolors = btns[ranIdx];
    let randbtn = document.querySelector(`.${randcolors}`);
    // 
    gameSeq.push(randcolors);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idx) {
    // console.log("curr level", level);

    // let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,1000)
        }
    } else {
        h2.innerHTML = `Game Over! <b> Your Score Was  ${level} </b> <br> Press Any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }

   
}

function btnpress() {
    let btn = this;
    usreflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;

}