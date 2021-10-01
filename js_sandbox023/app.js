//function declarations
function greet(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (x = 3) {
    return x * x;
};
console.log(square());
