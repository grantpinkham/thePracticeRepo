//function declarations
function greet(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
//function expressions
const square = function (num = 2) {
    return num * num;
};
//property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('Delete todo...');
}
todo.add();
todo.edit(22);
todo.delete();
