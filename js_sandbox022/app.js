//function declarations
function greet(firstName, lastName) {
    if (typeof firstName === 'undefined') {firstName = 'john'}
    if (typeof lastName === 'undefined'){lastName = 'doe'}
    return 'hello ' + firstName + ' ' + lastName;
}
console.log(greet());
console.log(greet('steve', 'smith'));
