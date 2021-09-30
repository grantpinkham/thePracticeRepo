let startWith10 = 10;
const subtract1 = () => {
  startWith10--;
}
const add1 = () => {
  startWith10++;
}
console.log("countdown from 10 to 0");
for (let i = 0; i <= 10; i++) {
  console.log(startWith10);
  if (startWith10 > 0) {
    subtract1(startWith10);
  }
}
console.log("countup from 0 to 10");
for (let i = 0; i <= 10; i++) {
  console.log(startWith10);
  add1(startWith10);
}