//function declarations
function greet(firstName, lastName) {
    // if (typeof firstName === 'undefined') {firstName = 'john'}
    // if (typeof lastName === 'undefined'){lastName = 'doe'}
    //console.log('hello');
    return 'hello ' + firstName + ' ' + lastName;
}
// console.log(greet());
//function expressions
const square = function (x = 3) {
    return x * x;
};
// console.log(square());
//immediately invokable function expressions - iifes
// (function () {
//     console.log('IIFE Ran...');
// })();
(function (name) {
    console.log('hello ' + name);
})('brad');