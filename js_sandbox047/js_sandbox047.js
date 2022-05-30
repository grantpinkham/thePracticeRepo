console.log('Above the number 10 and below the number 100, these are the numbers divisible by both 2 and 3.');
for (let i = 2; i <= 100; i++) {
  while (i <= 6) {
    i += i;
  }
  if ((i % 2 == 0) && (i % 3 == 0)) {
    console.log(`${i} is divisible by 2 and 3`);
  }
}
