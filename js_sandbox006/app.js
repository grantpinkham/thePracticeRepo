const firstName = 'will';
const lastName = 'johnson';
const age = 36;
const str = 'hello there my name is brad'
const tags = 'web design, web development, programming';
let val;
val = firstName + lastName;
//concatenation
val = firstName + ' ' + lastName;
//append
val = 'brad ';
val += 'traversy';
val = 'hello my name is ' + ' an i am ' + age;
//escaping
val = 'that\'s awesome i can\'t wait';
//length
val = firstName.length;
//concat
val = firstName.concat(' ', lastName);
//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
//index
val = firstName[0];
//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
//charAt()
val = firstName.charAt('2');
//get last char
val = firstName.charAt(firstName.length - 1);
//substring()
val = firstName.substring(0, 4);
//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);
//split()
val = str.split(' ');
val = tags.split(',');
//replace()
val = str.replace('brad', 'jack');
//includes()
val = str.includes('hello');
console.log(val);
