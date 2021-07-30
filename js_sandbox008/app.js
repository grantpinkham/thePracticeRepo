//create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];
let val;
//get array length
val = numbers.length;
//check if array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
val = numbers[0];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(36);
//concat array
val = numbers.concat(numbers2);
// find
function over50(num) {
    return num > 50;
}
val = numbers.find(over50);
console.log(numbers);
console.log(val);
