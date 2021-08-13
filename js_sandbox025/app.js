//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
const square = function (x = 3) {
    return x * x;
};
//property methods
const todo = {
    add: function() {
        console.log('add todo...');
    }
}
todo.add();
