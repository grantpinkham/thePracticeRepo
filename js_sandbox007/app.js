const name = 'john';
const age = 36;
const job = 'web developer';
const city = 'miami';
//without template strings es5
html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' <li>Job:' +
        job + ' </li>City: ' + city + ' </li></ul>';
html = '<ul>' +
    '<li>Name: ' + name + ' </li>' +
    '<li>Age: ' + age + ' </li>' +
    '<li>Job: ' + job + ' </li>' +
    '<li>City: ' + city + ' </li>' +
    '</ul>';
function hello() {
    return 'hello';
}
// template strings/literals es6
html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${5 + 5}</li>
            <li>${hello()}</li>
            <li>${age > 29 ? 'over 30' : '29 and below'}</li>
        </ul>`;
document.body.innerHTML = html;
