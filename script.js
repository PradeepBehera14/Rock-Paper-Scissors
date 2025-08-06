let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loss: 0,
  tie: 0
};

// Display initial score
updateScoreDisplay();

function playGame2(playerMove) {
  const computerMove = playGame();

  let result = '';

  if (playerMove === 'Rock') {
    result = computerMove === 'Rock' ? 'Tie' :
             computerMove === 'Paper' ? 'You lose' : 'You win';
  } else if (playerMove === 'Paper') {
    result = computerMove === 'Rock' ? 'You win' :
             computerMove === 'Paper' ? 'Tie' : 'You lose';
  } else if (playerMove === 'Scissors') {
    result = computerMove === 'Rock' ? 'You lose' :
             computerMove === 'Paper' ? 'You win' : 'Tie';
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.loss += 1;
  } else {
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreDisplay();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
    You
    <img src="images/${playerMove}.png" class="move-icon">
    <img src="images/${computerMove}.png" class="move-icon">
    Computer
  `;
}

function playGame() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function updateScoreDisplay() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function resetScore() {
  score.wins = 0;
  score.loss = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  updateScoreDisplay();
}
