let nameOfFishInTank = ['nemo', 'dory', 'skipper', 'willy'];
let fishNumber = nameOfFishInTank.length;
for (let i = 0; i < fishNumber; i++) {
  console.log('these fish are in the tank...' + nameOfFishInTank);
  nameOfFishInTank.pop();
  if (nameOfFishInTank.length >= 3) {
    console.log('willy has disappeared');
  } else if (nameOfFishInTank.length >= 2) {
    console.log('skipper has disappeared');
  } else if (nameOfFishInTank.length >= 1) {
    console.log('dory has disappeared');
  } else {
    console.log('nemo has disappeared');
  }
}
console.log('the tank is now empty' + nameOfFishInTank);
