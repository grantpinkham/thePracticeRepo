//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (x = 2) {
    return x * x;
};
//property methods
const todo = {
    add: function() {
        console.log('add todo...');
    },
    edit: function (id) {
        console.log(`edit todo ${id}`);
    }
}
todo.add();
todo.edit(22);
