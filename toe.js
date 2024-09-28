let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgamebtn=document.querySelector("#new_game");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turno = true;
let count=0;
let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [0, 3, 6], [2, 5, 8], [2, 4, 6]];
const resetGame = () => {
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => 
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X";
            turno = "true";
        }
        box.disabled = true;
        count++;
        let iswinner = checkWinner();
        if(count==9&&!isWinner){
            gameDraw();
        }
    })
);
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
  };
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  const showwinner = (winner) => {
    msg.innerText=`Congratulations!!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPattern){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;


        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2&&p2===p3){
                console.log("WINNER IS",p1);
                showwinner(p1);
                return true;
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);