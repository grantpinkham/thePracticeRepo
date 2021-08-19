//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (x = 3) {
    return x * x;
};
// (function (name) {
//     console.log('hello ' + name);
// })('brad');
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
