let sum = 0;
const num = [100, 200, 300, 400];
const sumTogether = (item) => {
  sum += item;
}
num.forEach(sumTogether);
console.log(sum);