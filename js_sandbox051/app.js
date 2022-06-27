let numCompare = 0;
let numMax = 0;
let numArray = [1, 4, 29, 100, 22, 5, 99, 200, 2];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > numCompare) {
    numCompare = numArray[i];
    numMax = numCompare;
  }
}
console.log(numMax);
