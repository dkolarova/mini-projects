const moves = ['rock', 'paper', 'scissors']

function getRandomMove() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
}

updateScore()

function playGame(playerMove){
  const computerMove = getRandomMove()
  
    let result = ''
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if(result === 'You win.'){
      score.wins += 1;
    }else if(result === 'You lose.'){
      score.losses += 1;
    }else{
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score))
  
    updateScore()

    document.querySelector('.final').innerText = `${result}`
    document.querySelector('.moves').innerHTML = `You <img src="img/${playerMove}.png">  Computer <img src="img/${computerMove}.png">`


      
 
 /*    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`); */

  }

  function updateScore(){
    document.querySelector('.score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

   }
  
  

  