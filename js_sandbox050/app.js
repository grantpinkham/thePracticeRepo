let vegetables = ['broccoli', 'spinach', 'lettuce', 'cucumber'];
for (let i = 0; i < vegetables.length; i++) {
  if (vegetables[i] === vegetables[0]) {
    console.log('broccoli - good choice!');
  } else if (vegetables[i] === vegetables[1]) {
    console.log('spinach - good choice!');
  } else if (vegetables[i] === vegetables[2]) {
    console.log('lettuce - good choice!');
  } else if (vegetables[i] === vegetables[3]) {
    console.log('cucumbers - good choice!');
  }
}