let player1Score = 0;
let player2Score = 0;
let gamesPlayed = 0;
let text = "";
let match = "";
const buttons = document.querySelectorAll(".play-button");
const choiceSpan = document.querySelector(".choice");
const historySelection = document.querySelector(".history-selection");
choiceSpan.addEventListener('DOMSubtreeModified',function(){
    choiceSpan.classList.add('change');
});
choiceSpan.addEventListener('transitionend', function(){
    choiceSpan.innerText = text
});
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        playRound(button.id,gameComputerChoice());
        const player1ScoreTag = document.querySelector(".player1-score");
        const player2ScoreTag = document.querySelector(".player2-score");
        player1ScoreTag.innerText = player1Score;
        player2ScoreTag.innerText = player2Score;
    });
});
//el span empieza con baja opacidad y si
//la compu elige sube la opacidad
//cuando vuelve a elegir bajarle la opacidad al actual
// y despues subirle al que cambió
function gameComputerChoice(){
    gamesPlayed+=1;
    let choices = ["rock","paper","scissors"];
    let emojis = ["🪨","📄","✂️"];
    let choice = Math.floor(Math.random()*3);
    text = emojis[choice]+choices[choice].slice(0,1).toUpperCase()+choices[choice].slice(1);
    if(gamesPlayed==1){
        choiceSpan.innerText = text;
        choiceSpan.classList.add('change');
    }else{
        choiceSpan.classList.remove('change');
    }
    return choices[choice];
}
function playRound(player1Selection, player2Selection){
    if(player1Selection == "rock"){
        if(player2Selection == "paper"){
            player2Score+=1;
        }else if(player2Selection=="scissors"){
            player1Score+=1;
        }
    }else if(player1Selection == "paper"){
        if(player2Selection == "scissors"){
            player2Score+=1;
        }else if(player2Selection=="rock"){
            player1Score+=1;
        }
    }else if(player1Selection == "scissors"){
        if(player2Selection == "rock"){
            player2Score+=1;
        }else if(player2Selection=="paper"){
            player1Score+=1;
        }  
    }
    const option = document.createElement('option');
    option.innerText = player1Selection+" - "+player2Selection;
    historySelection.appendChild(option);
}
/* function game(){
    let playerSelection, computerSelection, result, score = 0;
    const textScore = document.getElementById("score");

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("What is your selection?").toLowerCase();
        computerSelection = gameComputerChoice();
        result = playRound(playerSelection, computerSelection);

        if(result===true){
            score+=1;
            textScore.innerHTML = score;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        }else if(result===false){
            alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        }else if(result===null){
            alert(`It's a tie ${playerSelection} and ${computerSelection}`);
        }
    }
} */