let exercise = function(minutes) {
  if (minutes < 60 && minutes >= 1) {
    console.log('exercise has begun, your goal is 60 minutes');
  } else if (minutes <= 120 & minutes >= 60) {
    console.log('1 hour has elapsed, be sure to hydrate');
  } else if (minutes > 120) {
    console.log('good job');
  } else {
    console.log('1 minute until exercise begins');
  }
}
exercise(0);
exercise(1);
exercise(60);
exercise(121);
