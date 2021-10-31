//function declarations
function greet(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (x = 2) {
    return x * x;
};
console.log(square());
