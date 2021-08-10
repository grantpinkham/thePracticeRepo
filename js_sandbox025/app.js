//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
const square = function (x = 3) {
    return x * x;
};
// console.log(square());
//immediately invokable function expressions - iifes
// (function () {
//     console.log('IIFE Ran...');
// })();
// (function (name) {
//     console.log('hello ' + name);
// })('brad');
//property methods
const todo = {
    add: function() {
        console.log('add todo...');
    }
}
todo.add();
