let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').innerText = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
  
    let winner = '';
  
    if (userChoice === computerChoice) {
      winner = "It's a draw!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      winner = "You win! 🎉";
      userScore++;
    } else {
      winner = "Computer wins! 😢";
      computerScore++;
    }
  
    document.getElementById('winner').innerText = winner;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;

  }
function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('user-choice').innerText = '';
    document.getElementById('computer-choice').innerText = '';
    document.getElementById('winner').innerText = '';
  }
  
  