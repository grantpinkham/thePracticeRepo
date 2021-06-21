function add(x, y) {
  return x + y;
}
if (add(2, 2) === 4) {
  console.log('but you already knew what 2 + 2 was . . .')
} else if (add(2, 2) != 4) {
  console.log('that would require the programmer to change the value him/herself');
} else {
  console.log('this will never be executed, until the programmer changes the code in which it is executed...');
}