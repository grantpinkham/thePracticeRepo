function isDivisibleBy2or3 () {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 2 == 0) {
      console.log(`This number is divisible 2.`);
    } else if (i % 3 == 0) {
      console.log(`This number is divisible by 3.`);
    }
  }
}
isDivisibleBy2or3();
