//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (x = 3) {
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
todo.delete = function(){
    console.log('delete todo...');
}
todo.add();
todo.edit(22);
todo.delete();
