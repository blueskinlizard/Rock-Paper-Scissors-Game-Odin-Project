let x = getRandomInt(3);
let y = null;
//0 is rock, 1 is paper, and 2 is scissors
function rockMethod(){
    y = 0;
}
function paperMethod(){
    y=1;
}
function scissorsMethod(){
    y=2;
}
let result = (y) => {
    if(y == x){
        return 2;
    }
    //same thing drawn
    if(y == 0 && x == 2 || y == 1 && x == 0 || y == 2 && x== 1){
        return 1;
    }
    //all win contingencies
    return 0;
    //no wins drawn or draws made, so automatic loss
}
    