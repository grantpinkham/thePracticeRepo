const oneToTwenty = Math.floor(Math.random() * 20 + 1);
const staticNum = oneToTwenty;
if (staticNum <= 5) {
  console.log('randomized a number between 1 and 5');
} else if (staticNum <= 10 && staticNum >= 6) {
  console.log('randomized a number between 6 and 10');
} else if (staticNum <= 15 && staticNum >= 11) {
  console.log('randomized a number between 11 and 15');
} else {
  console.log('randomized a number between 16 and 20');
}