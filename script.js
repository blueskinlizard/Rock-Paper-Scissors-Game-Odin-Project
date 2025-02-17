const rockButtonAi = document.querySelector("#rockButton-ai");
const paperButtonAi = document.querySelector("#paperButton-ai");
const scissorsButtonAi = document.querySelector("#scissorsButton-ai");
const titleResult = document.querySelector("#titleResult");
const playerScoreOutput = document.querySelector("#player-score");
const computerScoreOutput = document.querySelector("#computer-score");
let y = null;
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 1;
function aiAssign(){
    return Math.floor(Math.random() * 3)
}

//0 is rock, 1 is paper, and 2 is scissors
function rockMethod(){
    y = 0;
    playGame();
}
function paperMethod(){
    y=1;
    playGame();
}
function scissorsMethod(){
    y=2;
    playGame();
}
function stringAssign(x) {
    switch(x) {
        case 0:
            document.getElementById("rockButton-ai").setAttribute("id", "selectedButtonAi");
            return "rock";
        case 1:
            document.getElementById("paperButton-ai").setAttribute("id", "selectedButtonAi");
            return "paper";
        case 2:
            document.getElementById("scissorsButton-ai").setAttribute("id", "selectedButtonAi");
            return "scissors";
    }
}


function calculateWin(y, t, x){
    if(y == x){
        titleResult.textContent = "You drew to the AI";
        return 2;
    }
    //same thing drawn
    if(y == 0 && x == 2 || y == 1 && x == 0 || y == 2 && x== 1){
        titleResult.textContent = "You won against the AI";
        playerScore++;
        return 1;
    }
    //all win contingencies
    titleResult.textContent = "You lost to the AI";
    computerScore++;
    return 0;
    //no wins drawn or draws made, so automatic loss
}
function playGame(){
    roundsPlayed++;
    rockButtonAi.setAttribute("id", "rockButton-ai");
    paperButtonAi.setAttribute("id", "paperButton-ai");
    scissorsButtonAi.setAttribute("id", "scissorsButton-ai");
    playerScoreOutput.textContent = "Player Score: " + playerScore;
    computerScoreOutput.textContent = "Computer Score: " + computerScore;
    let x = aiAssign();
    calculateWin(y, stringAssign(x), x);

}