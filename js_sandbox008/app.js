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
//mutating arrays
// //add on to end
// numbers.push(250);
// //add onto front
// numbers.unshift(120);
// //take off end
// numbers.pop();
// // take off front
// numbers.shift();
// //splice values
// numbers.splice(1, 3);
// //reverse
// numbers.reverse();
//concat array
val = numbers.concat(numbers2);
//sort
// val = fruit.sort();
// val = numbers.sort();
// //use compare function
// val = numbers.sort(function(x, y){
//     return x - y;
// })
// // reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// })
// find
function over50(num) {
    return num > 50;
}
val = numbers.find(over50);
console.log(numbers);
console.log(val);
