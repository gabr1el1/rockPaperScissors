function gameComputerChoice(){
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return false;
        }else if(computerSelection=="scissors"){
            return true;
        }else{
            return null;
        }
    }else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return false;
        }else if(computerSelection=="rock"){
            return true;
        }else{
            return null;
        }
    }else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return false;
        }else if(computerSelection=="paper"){
            return true;
        }else{
            return null;
        }
    }
}
function game(){
    let playerSelection, computerSelection, result, score = 0;
    

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("What is your selection?").toLowerCase();
        computerSelection = gameComputerChoice();
        result = playRound(playerSelection, computerSelection);

        if(result===true){
            score+=1;
            document.getElementById("score").innerHTML = score;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        }else if(result===false){
            alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        }else if(result===null){
            alert(`It's a tie ${playerSelection} and ${computerSelection}`);
        }
    }
}