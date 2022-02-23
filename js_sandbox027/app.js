//function declarations
function greet(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (num = 2) {
    return num * num;
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
