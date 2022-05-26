for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`First for loop has reached ${i} which is halfway to 10.`);
    for (let i = 6; i <= 10; i++) {
      if (i === 10) {
        console.log(`Second for loop has reached ${i} which has completed the loop.`);
        break;
      }
    }
  }
}
