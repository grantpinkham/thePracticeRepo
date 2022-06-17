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
  console.log(`Your score is ${score}.`);
  console.log(`You increased your score by ${increaseScore()}.`);
  console.log(`You made a big win, your score is now ${scoreMultiplier(10, 4)}.`);
  console.log(`You made a foul, score decreased by 10.`);
}
playGame();
