// var, let, const
// var name = 'john doe';
// console.log(name);
// name = 'steve smith';
// console.log(name);
// // init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);
// // letters, numbers, _, $
// // cannot start with a number though
// // multi-word vars
// var firstName = 'john';
// var first_name = 'sara';
// var Firstname = 'steve';
// var FirstName = 'smith';
// let
// let name = 'steve';
// console.log(name);
// name = 'joe';
// console.log(name);
//const
const name = 'John';
console.log(name);
// cannot reassign a const
// const needs a value
const person = {
    name: 'john',
    age: 30
}
person.name = 'sara';
console.log(person);
person.age = 32;
console.log(person)
const numbers = [1,2,3,4,5,6];
numbers.push(6);
console.log(numbers);