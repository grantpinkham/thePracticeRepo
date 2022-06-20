function add(x, y) {
  return x + y;
}
if (add(2, 2) === 4) {
  console.log('But you already knew what 2 + 2 was . . .')
} else if (add(2, 2) != 4) {
  console.log('That would require the programmer to change the value him/herself.');
} else {
  console.log('This will never be executed, until the programmer changes the code in which it is executed...');
}
