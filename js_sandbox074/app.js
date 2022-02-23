const goingToChuckECheese = () => {
  return true;
}
const notGoingToChuckECheese = () => {
  return false;
}
var areWeGoingToChuckECheese = () => {
  if (goingToChuckECheese() == true) {
    console.log("yayyy");
  } else {
    console.log("awwww");
  }
}
areWeGoingToChuckECheese();