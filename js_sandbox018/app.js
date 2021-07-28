//logical operators
const name = 'steven';
const age = 20;
const id = 100;
//and &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
//or ||
if (age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}
//ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');
//without braces
if (id === 100)
    console.log('correct');
else
    console.log('incorrect');
