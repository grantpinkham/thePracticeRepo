function ballsAvailable(balls) {
    this.balls = balls;
    return balls;
}
function juggle(balls) {
  if (balls === 0) {
    console.log('there are no balls to juggle!');
  } else if (balls === 1) {
    console.log('i guess i can juggle just 1 ball...');
  } else if (balls === 2) {
    console.log('juggling has now gotten fun!');
  } else if (balls === 3) {
    console.log('juggling has now gotten challenging!');
  }
}
ballsAvailable(0);
juggle(0);
ballsAvailable(1);
juggle(1);
ballsAvailable(2);
juggle(2);
ballsAvailable(3);
juggle(3);