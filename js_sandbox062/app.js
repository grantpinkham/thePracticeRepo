let namesOfFishInTank = ['nemo', 'dory', 'skipper', 'willy'];
let fishNumber = namesOfFishInTank.length;
for (let i = 0; i < fishNumber; i++) {
  console.log('these fish are in the tank...' + namesOfFishInTank);
  namesOfFishInTank.pop();
  if (namesOfFishInTank.length >= 3) {
    console.log('willy has disappeared');
  } else if (namesOfFishInTank.length >= 2) {
    console.log('skipper has disappeared');
  } else if (namesOfFishInTank.length >= 1) {
    console.log('dory has disappeared');
  } else {
    console.log('nemo has disappeared');
  }
}
console.log('the tank is now empty' + namesOfFishInTank);