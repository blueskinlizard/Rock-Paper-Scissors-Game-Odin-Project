let y = null;
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
function stringAssign(x){
    switch(x){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function calculateWin(y, t, x){
    if(y == x){
        alert("you drew with the AI, who also picked: "+t);
        return 2;
    }
    //same thing drawn
    if(y == 0 && x == 2 || y == 1 && x == 0 || y == 2 && x== 1){
        alert("you win against the AI, who picked: "+t);
        return 1;
    }
    //all win contingencies
    alert("you lost to the AI, who picked: "+t);
    return 0;
    //no wins drawn or draws made, so automatic loss
}
function playGame(){
    let x = aiAssign();
    calculateWin(y, stringAssign(x), x);

}