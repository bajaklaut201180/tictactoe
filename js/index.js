function ticTac()
{
    document.turn = 'X';
    document.player = 'first-player';
    document.conqueror = 'X';
    setMessage(document.turn + " get's to start");

}

function nextMoves(colsPlayground)
{
    if(colsPlayground.innerText == ''){
        if(document.player == 'first-player'){
            document.player = 'second-player';
        }else{
            document.player = 'first-player';
        }
        colsPlayground.classList.add(document.player);
        colsPlayground.innerText = document.turn;
        switchMoves();
    }else{
        if(document.getElementById('turn-message').classList.contains('conqueror')){
            return;
        }else{
            setMessage("it's " +document.turn +" turn. Please Click another square !");
        }
    }
    
}

function switchMoves()
{    
    if(checkForWinner(document.turn)){
        setMessage("Congrats " +document.turn + ", you are a winner!!!");
        document.getElementById('turn-message').classList.add('conqueror');
        document.conqueror = document.turn;
        document.turn = " ";
    }else if(document.turn == " "){
        newGame(document.conqueror);
    }else if(document.turn == 'X'){
        document.turn = 'O';
        setMessage("it's " +document.turn +" turn");
    }else{
        document.turn = 'X';
        setMessage("it's " +document.turn +" turn");
    }
}

function newGame(conqueror=document.conqueror)
{
    conqueror = (conqueror)?conqueror:'X';
    if(confirm('Are you want to play again?')){
        clear(conqueror);
    }else{
        alert('no');
    }
}

function checkForWinner(moves)
{
    var result = false;
    if(checkLines(1,2,3, moves) ||
       checkLines(4,5,6, moves) ||
       checkLines(7,8,9, moves) ||
       checkLines(1,4,7, moves) ||
       checkLines(2,5,8, moves) ||
       checkLines(3,6,9, moves) ||
       checkLines(1,5,9, moves) ||
       checkLines(3,5,7, moves)
    ){
        result = true;
    }
    return result;
}

function clear(conqueror)
{
    box = document.getElementsByClassName('cols-playground');

    for(i=0;i<box.length;i++){
        box[i].innerText = '';
        if(box[i].classList.contains('first-player')){
            box[i].classList.remove('first-player');
        }
        if(box[i].classList.contains('second-player')){
            box[i].classList.remove('second-player');
        }
    }
    document.turn = conqueror;
    document.getElementById('turn-message').classList.remove('conqueror');
    setMessage(document.turn +" get's to start");
}

function checkLines(x, y, z, moves)
{
    var result = false;
    if(getCols(x) == moves && getCols(y) == moves && getCols(z) == moves){
        result = true;
    }
    return result;
}

function getCols(number)
{
    return document.getElementById("cols-" +number).innerText;
}

function setMessage(msg)
{
    document.getElementById('turn-message').innerText = msg;
}