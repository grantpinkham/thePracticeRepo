let glassBroken;
if ((Math.floor(Math.random() * 21) > 10)) {
  glassBroken = true;
} else {
  glassBroken = false;
}
if (glassBroken === true) {
  console.log("glass shattered");
} else {
  console.log("glass intact");
}