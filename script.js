let playerScore=0;//player score abhi 0
let computerScore=0;//computer ka score abhi 0
let playerBatting=true;//player sae shurwaat start krdi hai tgdi 
let gameOver=false;//abhi toh game chalu hua hai yaar
let roundOver=false;//fir whai
let playerWins=0;//abhi no jeeet but kar har maidam fateh 
let computerWins=0;//abusing ai 0 bechara
function reset(){
    playerScore=0;
    computerScore=0;
    playerBatting=true;
    gameOver=false;
    roundOver=false;
    playerWins=0;
    computerWins=0;
    document.getElementById('again').hidden=true;
    document.querySelector('.result').innerHTML= '';
    document.querySelector('.moves').innerHTML='';
    document.querySelector('.score').innerHTML='';
    document.querySelector('.round').innerHTML='';

}
function newround(){
    playerScore=0;
    computerScore=0;
    playerBatting=true;
    gameOver=false;
    roundOver=false;
    document.getElementById('again').hidden=false;
    document.querySelector('.result').innerHTML='';
    document.querySelector('.moves').innerHTML='';
    document.querySelector('.score').innerHTML='';

}

function updateUI(result,move,compMove){
    document.querySelector('.result').innerHTML=result;
    document.querySelector('.moves').innerHTML=`YOU: ${playerScore}      |       COMPUTER: ${compMove}`;
    document.querySelector('.score').innerHTML=`YOUR SCORE: ${playerScore}      |       COMPUTER SCORE: ${computerScore}`;
    document.querySelector('.round').innerHTML=`ROUNDS WON- YOU: ${playerWins}      |     \t  COMPUTER: ${computerWins}`;

}
function game(move){
    if(gameOver)return;//agar game over hone kae baad button  dabaunga toh kuch nhi hoga 
    const compMove=Math.floor(Math.random()*6)+1;
    let result=``;
    //backticks use kre hai cause ussey hum template literal use krskte hai
    if(playerBatting){//player khlera hai apna lezzz goo
        if(move===compMove){
            result=`OUT!!! , ITS COMPUTER'S TURN NOW.`;
            playerBatting=false;//shit yaaaar hum 1/6 possibiliteis mai sae haar gye

        }
        else{
            playerScore+=move;//lezgoooo nhi hare hum 
            result=`YOU SCORED  ${move} RUNS.`;  
        }

    }
    else{// player kun apni bari chl chuka hai 
        if(move===compMove){
            result=computerScore>=playerScore ? `COMPUTER WINS!!!` : `YOU WIN!!!`;
            gameOver=true;
            roundOver=true;
            if(computerScore>=playerScore){
                computerWins++;//haar rhe hai yaar hum 

            }
            else{
                playerWins++;
            }

        }
        else{
            computerScore+=compMove;
            if(computerScore>playerScore){
                result=`COMPUTER WINS!!!`;
                gameOver=true;
                roundOver=true;
                computerWins++;
            }else{
                result=`COMPUTER SCORED ${compMove} RUNS.`;
            }
        }

    }

updateUI(result,move,compMove);
    if(roundOver)document.getElementById('again').hidden=false;
}
