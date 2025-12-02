let boxs = document.querySelectorAll(".box");
let winLine = document.querySelector(".win-line");
let mainWin = document.querySelector("#main-win");
let win = document.querySelector("#win");
let clickSound = new Audio("clickSound.mp3");
let gameOverSound = new Audio("gameOverSound.mp3");
let mainDraw = document.querySelector("#main-draw");
let draw = document.querySelector("#draw");
let playerTurn = document.querySelector(".playerTurn");
let fullWebsiteReload = document.getElementById("fullWebsiteReload");
let reloadAnimation = document.getElementsByClassName("reloadAnimation")[0];
let reloadAnimationTransparent =  document.getElementsByClassName("reloadAnimationTransparent")[0];
let reloadAnimationBack = document.querySelector(".reloadAnimationBack");



let animation1 = () => {   


    boxs.forEach(box => {
        box.innerText = "";
    });


    reloadAnimation.style.visibility = "visible";
    reloadAnimation.classList.add("show2");    /*classList.add("show2");   =>   reloadAnimation er div ei new class add kore ..thahole ,new HTML hobe   <div class="reloadAnimation show2"></div>*/
    reloadAnimationBack.style.visibility = "visible";
    reloadAnimationBack.classList.add("show3");
    reloadAnimationTransparent.style.visibility = "visible";
    reloadAnimationTransparent.classList.add("show1");
    setTimeout( () => {  /*setTimeout(function, milliseconds);   =>   shadaronoto, delay set korar jonno ei function ta use kora hoi*/
        location.reload();
    }, 2950);
}

fullWebsiteReload.addEventListener("click", animation1);






// window.addEventListener("load", animation1,  { once: true });    

// setTimeout( () => {
//     window.removeEventListener("load", animation);
// }, 2950);

let gameOver = false; 

let playerMove = [true,false];
let randomIndex = Math.floor(Math.random() * 2);

let player = playerMove[randomIndex];

if (player) {
    playerTurn.innerText = "Turn for Player O";
} else{
    playerTurn.innerText = "Turn for Player X";
}

let winningPattern = [
    [0,1,2,"11vmin"/* (Top) */,"0vmin"/* (Left) */,"0vmin"/* (Right) */,"rotate(0deg)"/* (Rotate) */],
    [3,4,5,"35vmin","0vmin","0vmin","rotate(0deg)"],
    [6,7,8,"59vmin","0vmin","0vmin","rotate(0deg)"],
    [0,3,6,"35vmin","none","23vmin","rotate(90deg)"],
    [1,4,7,"35vmin","0vmin","0vmin","rotate(90deg)"],
    [2,5,8,"35vmin","23vmin","none","rotate(90deg)"],
    [0,4,8,"35vmin","0vmin","0vmin","rotate(45deg)"],
    [2,4,6,"35vmin","0vmin","0vmin","rotate(135deg)"]
];

let  matchWinningPattern = () => {
    for (const pattern of winningPattern) {
        let position1 = boxs[pattern[0]].innerText;
        let position2 = boxs[pattern[1]].innerText;
        let position3 = boxs[pattern[2]].innerText;
        if (position1 !== "" && position1 === position2 && position2 === position3) {
            console.log("Win");
            document.querySelector("#winTitle").innerText = `Player(${position1}) Won This Game.`;
            winLine.style.width = "70vmin";
            winLine.style.border= "2px solid darkcyan";
            winLine.style.transition = "width 1s ease-in-out";
            winLine.style.top = pattern[3];
            winLine.style.left = pattern[4];
            winLine.style.right = pattern[5];
            winLine.style.transform = pattern[6];
            win.style.visibility = "visible";            
            win.style.transition = "visibility 0s 1.5s";
            mainWin.style.visibility = "visible";            
            mainWin.style.transition = "visibility 0s 0s";
            playerTurn.innerText = "";
            clickSound.muted = true;
            gameOverSound.play();
            boxs.forEach((box)=>{box.disabled = true});
            gameOver = true;
            return;
        }
    }
}



let  matchDrawnPattern = () => {
    if(gameOver){
    return;
    }
    let isDraw = true;
    for (const box of boxs) {
        if (box.innerText === "") {
            isDraw = false;
            return;
        }
    }

    if (isDraw) {
        console.log("Draw");
        document.querySelector("#drawTitle").innerText = `Player( X & O ) Draw This Game.`;
        draw.style.visibility = "visible";
        mainDraw.style.visibility = "visible";            
            mainWin.style.transition = "visibility 0s 0s";
            playerTurn.innerText = "";
        clickSound.muted = true;
        gameOverSound.play();
        boxs.forEach((box)=>{box.disabled = true});
        return;
    }
}

boxs.forEach(box => {
    box.addEventListener("click",()=>{
        if (player) {
            box.innerText = "O";
            box.classList.replace("text-gradient", "text-gradient");
            playerTurn.innerText = "Turn for Player X";
            player = false;
        } else {
            box.innerText = "X";
            box.classList.replace("text-gradient", "text-gradient1");
            playerTurn.innerText = "Turn for Player O";
            player = true;
        }
        clickSound.play();
        box.disabled = true;
        matchWinningPattern();
        matchDrawnPattern();
    });
});






// RESTART BUTTON(WIN)




let stg1 = document.querySelector("#stg1");
stg1.addEventListener("click",() =>{
            win.style.visibility = "hidden";
            win.style.transition = "visibility 0s 0s";
            mainWin.style.visibility = "hidden";            
            mainWin.style.transition = "visibility 0s 0s";
            winLine.style.width = "0vmin";
            winLine.style.border= "0px solid darkcyan";
            playerTurn.innerText = "Turn for Player O";
    boxs.forEach((box)=>{
    box.disabled = false;
    box.innerText = "";
    });
    gameOver = false;
    player = true;
            clickSound.muted = false;
    clickSound.play();
});





// RESTART BUTTON(DRAW)




let stg2 = document.querySelector("#stg2");
stg2.addEventListener("click",() =>{
            draw.style.visibility = "hidden";
            mainDraw.style.visibility = "hidden";
            playerTurn.innerText = "Turn for Player O";
    boxs.forEach((box)=>{
    box.disabled = false;
    box.innerText = "";
    });
    gameOver = false;
    player = true;
            clickSound.muted = false;
    clickSound.play();
});




// RESET BUTTON




let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click",() =>{
            win.style.visibility = "hidden";
            win.style.transition = "visibility 0s 0s";
            winLine.style.width = "0vmin";
            winLine.style.border= "0px solid darkcyan";
            playerTurn.innerText = "Turn for Player O";
    boxs.forEach((box)=>{
    box.disabled = false;
    box.innerText = "";
    });
    gameOver = false;
    player = true;
            clickSound.muted = false;
    clickSound.play();
});