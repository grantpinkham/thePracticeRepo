const goingToChuckECheese = () => {
  return true;
}
const notGoingToChuckECheese = () => {
  return false;
}
var areWeGoingToChuckECheese = () => {
  if (goingToChuckECheese() == true) {
    console.log("Yayyy.");
  } else {
    console.log("Awwww.");
  }
}
areWeGoingToChuckECheese();
