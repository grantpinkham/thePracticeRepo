// function declarations
function greet(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
const square = function (x = 2) {
    return x * x;
};

// property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    }
}
todo.add();
