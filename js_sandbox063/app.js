function playGame() {
  let score = 0;
  const increaseScore = function (increase) {
    return score += 10;
  }
  const scoreMultiplier = function (score, multiplier) {
    return score * multiplier;
  }
  const decreaseScore = function (decrease) {
    return score -= 10;
  }
  console.log(`your score is ${score}`);
  console.log(`you increased your score by ${increaseScore()}`);
  console.log(`you made a big win, your score is now ${scoreMultiplier(10, 4)}`);
  console.log(`you made a foul, score decreased by 10`);
}
playGame();